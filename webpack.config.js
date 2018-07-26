const path = require("path");

const libraryName = 'Library';
const paths = {
    context: path.join(__dirname, "./src/"),
    output: path.join(__dirname, "./"),
    lib: path.join(__dirname, "./lib"),
    entry: {
        'demo/demo': "./demo/index.js"
    }
};

const libPath = "lib/" + libraryName;
paths.entry[libPath] = "./lib/index.js";


const config = {
    context: paths.context,
    entry: paths.entry,
    output: {
        path: paths.output,
        filename: "[name].js",
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
	            use: {
		            loader: ['style-loader','css-loader']
	            }
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
	            use: {
		            loader: "babel-loader"
	            }
            }
        ]

    },
    resolve: { // In resolve we tell Webpack where to look for modules. as of Webpack ^2.0 important to give node modules folder too
        extensions: [".js", ".jsx"],
        modules: [paths.context, paths.lib, "node_modules"],
    },
	devServer: {
		port: 3001
	}
};

module.exports = config;
