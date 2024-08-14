import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/admin.css', 
                'resources/js/script.js',
                'resources/js/app.jsx'
            ],
            refresh: true,
        }),
        react(),
    ],
});
