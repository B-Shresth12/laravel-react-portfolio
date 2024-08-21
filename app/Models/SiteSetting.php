<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "email",
        "contact_no",
        "address",
        "facebook_link",
        "instagram_link",
        "linkedIn_link",
        "x_link",
        "github_link",
        "who_are_you",
        "og_meta_title",
        "og_meta_description",
        "og_image",
        "logo",
        "favicon",
        "apple_touch"
    ];
}
