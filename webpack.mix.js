let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.js('./src/js/app.js', 'static/js')
mix.sass('./src/css/app.scss', 'static/css');
mix.tailwind();