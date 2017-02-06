module.exports = { 
	entry: './src/index.js',
	output: {
    path: __dirname + '/dist',    
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'HelloWorld'
  },
	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      include: /src/,
        exclude: /node_modules/,
	      use: [{
	      	loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] },
      	}]
	    }
	  ]
	},
	externals: {
    'react': 'react'
  }
};
