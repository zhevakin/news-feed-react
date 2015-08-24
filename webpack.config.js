module.exports = {
    entry: './client/app/app.jsx',
    output: {
        filename: 'bundle.js'
    },

    devtool: 'sourcemap',

    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel', exclude: [/node_modules/]},
            { test: /\.html$/, loader: 'raw' },
            { test: /\.less$/, loader: 'style!css!autoprefixer!less' }
        ]
    }
};