const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:{
        main:path.resolve(__dirname,'./src/main.entry.js')
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'app.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        js:'babel-loader'
                    }
                }
            }
        ]
    },
    watch:true,
    watchOptions:{
        ignored:/node_modules/
    }
}