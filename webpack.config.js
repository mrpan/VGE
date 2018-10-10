/*
* @Author: giserpan
* @Date:   2018-09-28 16:17:00
* @Last Modified by:   giserpan
* @Last Modified time: 2018-09-28 16:22:23
*/
const webpack = require('webpack');

const path = require('path');
module.exports = {
  entry: {
    'vge':'./src/index.js'
  },
  output: {
    path: __dirname+"/dist",
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
     {
	   test: /\.js$/,
	   exclude: /(node_modules|bower_components)/,
	   loader: 'babel-loader',
	   query: {
	         presets: [["@babel/preset-env",
			      {
			       "targets": {
					    "ie": "10"
  					}
			      }
    		]],
	         plugins: ['@babel/transform-runtime']
	    }
      }
    ]
  },
   plugins: [

  ]
};


//