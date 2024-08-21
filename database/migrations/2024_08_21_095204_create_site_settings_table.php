<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            //Basic Information
            $table->text('name');
            $table->string('email');
            $table->string('contact_no')->nullable();
            $table->text('address')->nullable();
            $table->text('x_link')->nullable();
            $table->text('facebook_link')->nullable();
            $table->text('instagram_link')->nullable();
            $table->text('linkedIn_link')->nullable();
            $table->text('github_link')->nullable();
            $table->text('who_are_you');
            //images
            $table->string('favicon');
            $table->string('apple_touch');

            // Meta Inputs
            $table->text('og_meta_title')->nullable();
            $table->text('og_meta_description')->nullable();
            $table->string('og_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
