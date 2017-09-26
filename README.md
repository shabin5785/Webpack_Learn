**Why we need Build Tools**

- Traditional server side apps create html and send it to browser to dispaly. In Single Page App( SPA), server sends a bare bones html page and then JS runs on top of that to assemble and display the page. So in traditional app, for every request or link clicked, server creates a new html page and sends to the browser. In SPA, html page and js is send on load and for futher clicks or request, JS will render the page with new content( not all, but most of)

- So in SPA, the app now depends on JS code to render the page. Much much larger than traditional ones.

- to prevent large JS codes in few files, the idea of modules was created, which had small JS code in individual files. So clear separation of logic.

problems with splitting JS files
------------------------------------

- how the files are to be loaded? in which order? based on dependencies on different files. This order needs to be maintained every time our app runs.
- Also loading all these files to a browser will have negative perf impact, as all files have to be downloaded. especially in mobile apps. So we need to have fewer requests to load files

- Webpack can be used to solve these issues. **Webpack takes all these small files and converts to a one big file, while maintaing the order**.

- Webpack can handle things like css preprocessing, ugigy etc. But these are sub tasks. Main task is one given above.

**Webpack Basics**

- In JS each separate file has its own scope. So we cannto access fns of one file from another. WE use module systems to link the file or inter communicate. There are many systems, 3 of the common are
- commonJs : Implemented in nodeJS,  require and module.exports
- AMD : more commonly implemented in front end apps, define and require
- ES2015: import and export

- webpack.config.js -> webpack will automatically look for this config file when it runs.
- entry in config : the file which starts with bootstrap or the startup file. usually index.js . Usually this file does not export anything. Webpack will start its work with impports in the entry file contents.

-output property: tell WP where to save the processed files and how to name it. It has path where output file to be saved and filename is the output file name. The path is an absolute path or fully qualified path

-above two are bare minimum needed for WP

- WP config files can import or require other modules like node modules and use it. WP runs in nodejs env, so we can use node modules within WP

- we can run WP as terminal command or as node script. first one runs the global WP , while second runs the WP inside node modules directory

- WP can have different loaders to handle assets. One of them is babel to convert ES2015 code. Babel turns ES2015 to ES5 code and then WP links them
Babel has 3 separate libraries: babel-loader to work with WP, babel-core to take some file ans parse it based on rules and generate it. The third is required to make babel aware of ES2015 as till now its generic. So we use babel-preset-env for this, which provide teh conversion rules for ES2015
