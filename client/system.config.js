
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',
        '@angular':                   'assets/system-lib/@angular',
        //'angular2-in-memory-web-api': 'assets/system-lib/angular2-in-memory-web-api',
        'rxjs':                       'assets/system-lib/rxjs'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'boot.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
///**
// * System configuration for Angular 2 samples
// * Adjust as necessary for your application needs.
// */
//(function (global) {
//    System.config({
//        paths: {
//            // paths serve as alias
//            'npm:': 'https://unpkg.com/'
//        },
//        // map tells the System loader where to look for things
//        map: {
//            // our app is within the app folder
//            app: 'app',
//            // angular bundles
//            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
//            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
//            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
//            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
//            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
//            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
//            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
//            // other libraries
//            'rxjs':                       'npm:rxjs',
//            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
//        },
//        // packages tells the System loader how to load when no filename and/or no extension
//        packages: {
//            app: {
//                main: './boot.js',
//                defaultExtension: 'js'
//            },
//            rxjs: {
//                defaultExtension: 'js'
//            },
//            'angular2-in-memory-web-api': {
//                main: './index.js',
//                defaultExtension: 'js'
//            }
//        }
//    });
//})(this);