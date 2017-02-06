module.exports = { 
	context: __dirname + '/demo',
	entry: {
		app: './index.js'
	},
	output: {
    path: __dirname + '/demo',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
  	open: true,
  	contentBase: __dirname + '/demo',
	},
	resolve: {
    extensions: ['.js']
  },
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      include: [/demo/, /dist/],
      	exclude: /node_modules/,
	      use: [{
	      	loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
      	}]
	    }
	  ]
	}
};
