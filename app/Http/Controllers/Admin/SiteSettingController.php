<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;


class SiteSettingController extends Controller
{
    public $folderPath, $path;
    public function __construct()
    {
        $this->folderPath = 'public/setting';
        $this->path = public_path("storage/setting");
        if (!file_exists($this->path)) {
            \Storage::createDirectory($this->folderPath);
            chmod($this->path, 0755);
        }
    }
    public function index()
    {
        $setting = SiteSetting::first();
        return Inertia::render('Admin/SiteSetting/Index', ["setting" => $setting]);
    }

    public function update(Request $request)
    {
        $request->validate([
            "name" => "bail|required",
            "email" => "bail|required|email",
            "contact_no" => "bail|required",
            "address" => "bail|nullable",
            "x_link" => "bail|nullable|url",
            "facebook_link" => "bail|nullable|url",
            "instagram_link" => "bail|nullable|url",
            "linkedIn_link" => "bail|nullable|url",
            "github_link" => "bail|nullable|url",
            "who_are_you" => "bail|required",
            'favicon' => 'bail|nullable|image|mimes:png,jpeg,jpg',
            'apple_touch' => 'bail|nullable|image|mimes:png,jpeg,jpg',
            'banner' => 'bail|nullable|image|mimes:png,jpeg,jpg',
        ]);

        $data = $request->all();

        if (@$request->favicon && $request->has('favicon')) {
            $file = $request->file('favicon');
            $filename = "favicon_" . time() . ".webp";

            \Helper::saveImage(
                max_width: 32,
                max_height: 32,
                file: $file,
                filename: "{$this->folderPath}/32x32_{$filename}",
                fileExtension: "webp"
            );
            \Storage::putFileAs("{$this->folderPath}", $file, $filename);
            $data['favicon'] = $filename;
        }

        if (@$request->banner && $request->has('banner')) {
            $file = $request->file('banner');
            $filename = "banner_" . time() . ".webp";

            \Helper::saveImage(
                max_width: 1920,
                max_height: 1053,
                file: $file,
                filename: "{$this->folderPath}/{$filename}",
                fileExtension: "webp"
            );
            \Helper::saveImage(
                max_width: 150,
                max_height: 150,
                file: $file,
                filename: "{$this->folderPath}/thumb_{$filename}",
                fileExtension: "webp"
            );

            $data['banner'] = $filename;
        }

        if (@$request->apple_touch && $request->has('apple_touch')) {
            $file = $request->file('apple_touch');
            $filename = "apple_touch_" . time() . ".webp";

            \Helper::saveImage(
                max_width: 57,
                max_height: 57,
                file: $file,
                filename: "{$this->folderPath}/57x57_{$filename}",
                fileExtension: "webp"
            );
            \Helper::saveImage(
                max_width: 72,
                max_height: 72,
                file: $file,
                filename: "{$this->folderPath}/72x72_{$filename}",
                fileExtension: "webp"
            );
            \Helper::saveImage(
                max_width: 76,
                max_height: 76,
                file: $file,
                filename: "{$this->folderPath}/76x76_{$filename}",
                fileExtension: "webp"
            );
            \Helper::saveImage(
                max_width: 114,
                max_height: 114,
                file: $file,
                filename: "{$this->folderPath}/114x114_{$filename}",
                fileExtension: "webp"
            );
            \Helper::saveImage(
                max_width: 120,
                max_height: 120,
                file: $file,
                filename: "{$this->folderPath}/120x120_{$filename}",
                fileExtension: "webp"
            );
            \Helper::saveImage(
                max_width: 144,
                max_height: 144,
                file: $file,
                filename: "{$this->folderPath}/144x144_{$filename}",
                fileExtension: "webp"
            );
            \Helper::saveImage(
                max_width: 152,
                max_height: 152,
                file: $file,
                filename: "{$this->folderPath}/152x152_{$filename}",
                fileExtension: "webp"
            );
            \Storage::putFileAs("{$this->folderPath}", $file, $filename);

            $data['apple_touch'] = $filename;
        }

        $data = array_filter($data, fn($arr) => !is_null($arr));

        $setting = SiteSetting::first();
        if (@$setting) {
            $setting->update($data);
        } else {
            $setting = new SiteSetting();
            $setting->create($data);
        }
        // SiteSetting::updateOrCreate(['id' => 1], $data);

        return to_route('admin.setting.index')
            ->with('success', 'Site Setting Updated😁👍!')
            ->with('faviconPath', asset('storage/setting/' . $setting->favicon));
    }

    public function updateSEO(Request $request)
    {
        // dd($request->all());
        $setting = SiteSetting::first();
        if (!@$setting) {
            return to_route('admin.setting.index')->with('error', 'Please fill up the Website Information first🥲🥲!');
        }
        $request->validate([
            'og_meta_title' => 'nullable',
            'og_meta_description' => 'nullable',
            'og_image' => 'nullable|image|mimes:png,jpeg,jpg',
        ]);

        $data = $request->all();

        if (@$request->og_image && $request->has('og_image')) {
            $file = $request->file('og_image');
            $filename = 'og_image_' . time() . '.webp';
            // dd($filename);

            \Helper::saveImage(
                max_width: 1200,
                max_height: 630,
                file: $file,
                filename: "{$this->folderPath}/{$filename}",
                fileExtension: "webp"
            );

            \Helper::saveImage(
                max_width: 150,
                max_height: 150,
                file: $file,
                filename: "{$this->folderPath}/thumb_{$filename}",
                fileExtension: "webp"
            );


            $data['og_image'] = $filename;
            \Storage::delete("{$this->folderPath}/{$setting->og_image}");
            \Storage::delete("{$this->folderPath}/thumb_{$setting->og_image}");
        }

        $data = array_filter($data, fn($arr) => !is_null($arr));

        $setting->update($data);


        return to_route('admin.setting.index')
            ->with('success', 'Meta/Og Infomation updated😊👍!!');
    }
}
