# Configuring ReactJS from scratch

Walthrough of creating a ReactJS application from scratch with every step documented.  This should be good enough for someone that is a total beginner.

### Techology Stack
Please download and install **NodeJS** and **Webstorm** to follow this tutorial webpack and react-materialized will be installed later.

* [NodeJS](https://nodejs.org/en/download/)
* [WebStorm](https://www.jetbrains.com/webstorm/download/) (IDE, use what you wish)
* [Webpack](https://github.com/webpack/webpack) (Used to bundle the Javascript libraries into one script)
* [react-materialize](https://github.com/react-materialize/react-materialize) Material UI is a clean and simple framework.


## Setup directory

I am going to create my project in the ~/Projects/bbq/bbqweb directory.

**Create the folder & change into it.**
 
```
mkdir ~/Projects/bbq/bbqweb
cd ~/Projects/bbq/bbqweb
```

**Initialize the directory with npm.**

```
npm init
```
Press return for each question.  When complete you should have a `package.json` file in your directory.

## Install react, babel, and webpack.
### Install webpack

```
npm i webpack http-server --save-dev
```
### Install react

```
npm i react react-dom babel-loader babel-preset-es2015 babel-preset-react react-materialize --save
```

### Check your setup

List your directory and you should now have a `package.json` file and a `node_modules` directory.  If you list the contents of the `node_modules` directory you will find a bunch of directoies for all the components you just installed with those two `npm i` commands.

## Create the `.babelrc` config file.

Create the following file in your new project directory with your favorite text editor.  Make sure it is properly named.  Windows users will need to make sure there is not a .txt file extension on the end after saving.

```
{
  "presets" : ["es2015", "react"]
}
```

## Create the `index.html` file.
This is the file that serves up the application to the browser and is the first resource loaded by the web browser.  The file is basically only going to point to your webpack bundle.

```
<html>
  <head>
    <meta charset="utf-8">
    <title>ReactJS web application from scratch.</title>
    <link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
  </head>
  <body>
    <div id="app" />
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
    <script src="public/bundle.js" type="text/javascript"></script>
  </body>
</html>
```
This HTML file will not do anything yet.  We still need to configure webpack and create the ReactJS index file.  Don't worry that there is no `public/bundle.js` file.  We are going to get that created next.

## Create the `webpack.config.js`

Babel is used to transpile the code we write for ReactJS into a more supported form of JavaScript.  This lets us write modern code that would not be directly supported by all browsers.  This file configures babel to understand ReactJS.

```
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
```

## Configure `npm` to run and build your application

Edit your `package.json` file and edit the `scripts` section to look like mine below.  You are adding the `dev` and `build` scripts to this file to make things a little easier.

```
{
  "name": "bbqweb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack -d --watch & http-server . -p 3000",
    "build": "webpack -p"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^1.13.2"
  },
  "dependencies": {
    "react-materialize": "^0.15.1"
  }
}
```

## Create the ReactJS entry point to  your application `index.jsx`

```
import React from 'react';
import {render} from 'react-dom';
import {Navbar, NavItem, Icon} from 'react-materialize';

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand='logo' right>
		    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
		    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
		    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
		    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
		</Navbar>
		<p>This is the first view of your ReactJS application with Materialize.</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
```












