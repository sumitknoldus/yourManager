(function(global) {

    var ngVer = '@2.0.0-rc.5'; // lock in the angular package version; do not let it float to current!
    var routerVer = '@3.0.0-rc.1'; // lock router version
    var formsVer = '@0.3.0'; // lock forms version
    var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides


    // map tells the System loader where to look for things
    var map = {
        'app':                        'app',

        '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
        '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
        '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
        '@angular/router-deprecated': 'https://npmcdn.com/@angular/router-deprecated' + routerDeprecatedVer,
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
        'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript':                 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
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
        'upgrade'
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
