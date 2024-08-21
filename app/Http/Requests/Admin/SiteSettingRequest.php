<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class SiteSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if (Auth::check()) {
            return true;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "site_name" => "bail|required",
            "site_email" => "bail|required|email",
            "contact_no" => "bail|required",
            "address" => "bail|nullable",
            "x_link" => "bail|nullable|url",
            "facebook_link" => "bail|nullable|url",
            "instagram_link" => "bail|nullable|url",
            "linkedIn_link" => "bail|nullable|url",
            "github_link" => "bail|nullable|url",
            "who_are_you" => "bail|required",
        ];
    }
}
