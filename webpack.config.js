module.exports = { 
	entry: './example/index.js',
	output: {
    path: __dirname + '/example',
    filename: 'bundle.js'
  },
  devServer: {
  	open: false,
  	watchContentBase: true,
  	contentBase: __dirname + '/example',
	},
	resolve: {
    extensions: ['.js']
  },
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      include: [/example/, /dist/],
      	exclude: /node_modules/,
	      use: [{
	      	loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
      	}]
	    }
	  ]
	}
};
