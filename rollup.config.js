import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
class RollupNG2 {
    constructor(options){
        this.options = options;
    }
    resolveId(id, from){
        if (id.startsWith('rxjs/')){
            return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
        }
    }
}

const rollupNG2 = (config) => new RollupNG2(config);

export default {
    entry: './dist/temp/client/app/boot.js',
<<<<<<< HEAD
   // format:'iife',
=======
    // format:'iife',
>>>>>>> sprint12
    sourceMap: true,
    moduleName: 'main',
    plugins: [
        rollupNG2(),
        nodeResolve({
            jsnext: true, main: true
        }),
        commonjs({
            //include: 'node_modules/**',
            //exclude:  ['../node_modules/ag-grid-ng2/main.js', '../node_modules/ng2-datetime-picker/**'],
            // if true then uses of `global` won't be dealt with by this plugin
            //ignoreGlobal: false,  // Default: false

            // if false then skip sourceMap generation for CommonJS modules
            //sourceMap: true,  // Default: true,
            namedExports: {
                // left-hand side can be an absolute path, a path
                // relative to the current directory, or the name
                // of a module in node_modules
                './node_modules/ng2-datetime-picker/dist/ng2-datetime-picker.umd.js': [ 'Ng2DatetimePickerModule','DateTime' ]
            }
        })
    ]
};