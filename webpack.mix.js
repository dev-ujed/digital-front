const mix = require('laravel-mix');

mix.options({
    processCssUrls: false,
    uglify: {
        uglifyOptions: {
            compress: { pure_funcs: ['console.log', 'console.info'] },
            output: { comments: '/^!/' }
        }
    }
});


/*
 |------------------------------------------------------------------------------
 | Asset Management
 |------------------------------------------------------------------------------
 */

mix.js('resources/js/main', 'static/js');
mix.js('resources/js/admin', 'static/js');
mix.js('resources/js/vendor', 'static/js');

mix.sass('resources/sass/main.scss', 'static/css', {
    implementation: require('node-sass')
});


mix.sass('resources/sass/dashboard.scss', 'static/css', {
    implementation: require('node-sass')
});