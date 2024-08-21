<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SiteSettingRequest;
use App\Http\Requests\Admin\SiteSettingSEORequest;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    public $folderPath, $path;
    public function __construct()
    {
        $this->folderPath = 'public/setting';
        $this->path = "storage/setting";
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

    public function update(SiteSettingRequest $request)
    {
        if ($request->has('favicon')) {
            $file = $request->file('favicon');
            $filename = "favicon.webp";

            \Helper::saveImage(
                max_width: 32,
                max_height: 32,
                file: $file,
                filename: "{$this->folderPath}/{$filename}",
                fileExtension: "webp"
            );
            $data['favicon'] = $filename;
        }

        if ($request->has('apple_touch')) {
            $file = $request->file('apple_touch');
            $filename = "apple_touch.webp";

            \Helper::saveImage(
                max_width: 32,
                max_height: 32,
                file: $file,
                filename: "{$this->folderPath}/{$filename}",
                fileExtension: "webp"
            );
            $data['apple_touch'] = $filename;
        }

        $data = $request->all();
        SiteSetting::updateOrCreate(['id' => 1], $data);

        return to_route('admin.setting.index');
    }

    public function updateSEO(SiteSettingSEORequest $request)
    {
        return to_route('admin.setting.index');
    }
}
