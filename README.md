# Pug-Sass Starter

A simple starter for building HTML templates using Pug and Sass.

## Requirements

Make sure [Node JS](https://nodejs.org), [NPM](https://www.npmjs.com) and [Gulp](http://gulpjs.com/) already installed on your computer.

## Install

* Navigate to the directory where the _pug-sass-starter_ folder is located using **Terminal**.
* Execute `npm install`.

## Run

* Execute `npm start` or `gulp`.
* Open `http://localhost:8080/` on your web browser.

## Build

* Execute `gulp build`.

## Folders Structure

```
+ assets
  + css : This folder contains prebuild files, styles.css and styles.min.css.
  + fonts : Place your fonts here, also do not forget to import it on _variables.scss.
  + icons : Place your icons here.
  + images : Place your images here.
  + js : This folder contains prebuild files, scripts.js and scripts.min.js.
+ src
  + js
    - scripts.js : Store your js code here.
  + pug
    + base
      - base.pug : Base pug file.
    + layouts
      - default-layout.pug : Default layout pug file.
    + pages
      - index.pug : Example page pug file, it contains h1 only.
    + partials
      - footer.pug : Footer pug file.
      - header.pug : Header pug file.
  + sass
    + base
      - _global.sass : Global styles for html, body, section, headings, anchor etc.
      - _mixins.sass : Store your mixins here;
      - _placeholders.sass : Store your placeholders here;
      - _variables.sass : Store your variables here;
    + components
      - _components.sass : It contains components styles such as buttons, modals etc.
    + layouts
      - _footer.sass : It contains footer styles.
      - _header.sass : It contains header styles.
    + pages
      - _index.sass : Example sass for specific page.
    - styles.sass : Import all sass files.
- index.html : Prebuild HTML file, other HTML files will be placed here too.
```

## Gulp Plugins

* [gulp-connect](https://www.npmjs.com/package/gulp-connect) : Run webserver (with livereload).
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) : Prevent pipe breaking caused by errors from gulp plugins.
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) : Gulp plugin for compiling Pug templates, compile Pug into HTML.
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) : Gulp plugin to rename files easily, adding `.min` suffix.
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) : Compile your Sass into CSS.
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) : Minify your JS.