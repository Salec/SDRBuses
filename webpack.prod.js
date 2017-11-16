
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + "/build",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }
    ],
        rules:[
            {
                test: /\.css$/,
                use: "style-loader!css-loader"
            }
        ]
    },


    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};