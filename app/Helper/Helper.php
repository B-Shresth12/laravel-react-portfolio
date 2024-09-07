<?php

namespace App\Helper;

//using intervention's page for image manipulation
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager as Image;

class Helper
{
    /**
     * this function will crop/resize the iamge to the favorable size
     * @return bool
     */
    public static function saveImage($max_width, $max_height, $file, $filename, $fileExtension = "png")
    {
        try {
            $manager = new Image(new Driver());
            $image = $manager->read($file);

            // Get original image dimensions
            $imgSize = getimagesize($file);
            $width = $imgSize[0];
            $height = $imgSize[1];

            // Calculate new dimensions
            $width_new = round($height * $max_width / $max_height);
            $height_new = round($width * $max_height / $max_width);

            // Perform cropping and resizing based on dimensions
            if ($width_new > $width) {
                // Cut point by height
                $h_point = round(($height - $height_new) / 2);
                $image->crop($width, $height_new, 0, $h_point)->resize($max_width, $max_height);
            } else {
                // Cut point by width
                $w_point = round(($width - $width_new) / 2);
                $image->crop($width_new, $height, $w_point, 0)->resize($max_width, $max_height);
            }

            // Save the processed image with specified extension
            $cover = storage_path('app/' . $filename);
            $image->encodeByExtension($fileExtension)->save($cover);

            return true; // Return true on successful save
        } catch (\Exception $e) {
            // Handle any exceptions that occur during image processing
            \Log::error("Image processing error: " . $e->getMessage());
            \Log::error("Image path provided: " . $filename);
            return false; // Return false to indicate failure
        }
    }
}
