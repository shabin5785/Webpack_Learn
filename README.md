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

- for each loader we need to tell which files it need to act up on. like only js files or css files.

- in WP 1, we use loaders inside config file, but in WP2, we use rules within module option. Same thing but different config syntax.

- we can have different loaders or rules within WP config. So rules is an array to take a number of loaders .

- each rule takes a use property to denote which loader and then a test property to select the files to be acted on, this can be a regex. So the given loader is applied to all files that matches the test expression. 
Now we need to tell babel which type of conversion is needed. For this we create a .babelrc file and give the preset to be used within that.

- WP will not automatically add js files to the build. Those files needs to be imported in atleast one file in the build hierarchy.

- no auto build jobs for WP can respond to changes in WP config file. So have to manually rebuild them if we change config file...

- one more loader is for css. We need css loader to load the css files , as WP cannot do that by itself. Next we need style loader to work with the loaded files. css loader just copies css contents to bundle.js and then style loader injects these to the files requried. thats how it works in backend. So here all css is not merged into one big file and then inserted. Its inserted using js. we can tweak this to load a single css file.

- in loader or rule, the use can be an array of loaders. so that the files pass thrugh all required loaders. the order is the order of elements in the use array, whihc is Right to Left

-Saving css files into a single file is not correct. So we can use another module in webpack, that can take output of any webpack module and extract it to a separate file. So we can link this to the outut of css module and then separate the processed css data to a separate file.

- use and loader are nearly identical. But due to developmet in webpack, some pluings use one of them only.

- loaders and plugin are different in WP. Loaders are used to do preprocessing in WP before bundling them. Plugins on other hand can process files and preent them from being included in bundle.

- another couple of loaders in WP is for image processing. A good example of loaders . One loader can be used to automatically compress images in out project and other to include it in file. The second loader and decide to embed image as data in file or raw image frmo location based on image size.

- within a rule, the use property can be an array. The loader in array are applie from right to left. So we can combine the loaders on a rule and be applied one after another to a set of files.
