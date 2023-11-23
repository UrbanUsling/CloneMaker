const path = require('path');

module.exports= {
    mode: 'development',
    //entry: './src/index.tsx',
    entry: {
        try: "./src/try.tsx"
    },
    //under hur resan går från index tsx till bundle.js
    module: {
        rules:[
            {
                test: /\.(ts|tsx)$/,//test: /\.ts$/,la till ändring från maker
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]//absolute. only files from this folder
            }
        ]

    },
    resolve: {
        extensions: [ '.ts', '.js', '.tsx', '.jsx'],
        alias: {
            "react": "preact/compat",
            "react-dom": "preact/compat"
        }
    },
    output: {
        //publicPath: 'public',
        //filename: "[name].js",
        filename: '[name].js',
        publicPath: "/static/js/",
        //path: path.resolve(__dirname, 'public')//current and absolute path joined together
        path: path.resolve(__dirname, 'static', 'js'),
    
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'static'), // Specify the directory you want to serve content from
        },
        compress: true,
        port: 8080, // You can change the port if needed
        proxy: {
            '/presentkort': 'http://localhost:5000', // Adjust the URL based on your Flask server's address
        },
    },
    



}