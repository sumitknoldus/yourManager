module.exports = function() {
    var config = {
        TsFilePath: "./client/app/**/*.ts",
        cssFilePath: "./client/app/**/*.css",
        htmlFilePath: "./client/app/**/*.html",
        tsOutputPath: "./dist/",
        cssOutputPath: "./dist/",
        htmlOutputPath: "./dist/",
        stylesFilePath: "./client/assets/styles/*.css",
        //cssOutputPath: "./build/assets/css/",
        imagesFilePath: "./client/assets/images/**/*",
        imagesOutputPath: "./build/assets/images/",
        bootstrapJSPath: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        bootstrapCSSPath: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        bootstrapJSDestPath: "./lib/bootstrap/js",
        bootstrapCSSDestPath: "./lib/bootstrap/css",
        bootstrapFontsPath: "./node_modules/bootstrap/fonts/*",
        bootstrapFontsDestPath: "./lib/bootstrap/fonts",
        jQueryPath: "./node_modules/jquery/dist/jquery.min.js",
        jQueryDestPath: "./lib/jquery"
    }

    return config;
}
