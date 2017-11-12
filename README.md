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

- url loader prepends the filename it created with publicpath. So if we omit public path, the url for images to be loaded might be wrong. Confusing part is that urlloader takes the public path value from webpak config. not from its own config. May be to keep the public path common..

- The public path variable will be used by any loader that produces a file as relateive to a folder.


**CodeSplitting**

THis allows WP to split output files to multiple files.. instead of a single bundle.js. Then we can programetically choose which file to load. This shld reduce the overhead of loading large files.
We can do this by using System.import and load the module based on that. WP can then split bundle js to load as chunkgs.

The sytem modules loaded like this has a single method default(), that contains the code to inject and execute the module.


- babel will need different preset for different languages. Basic is for es15 or 16. Need separate for react or other languages.

- Using webpack we can split our code and vendor code like React or Angular and load it separate. So we can load the vendor code only once at startup and increase app speed. So when we update our app, browser need to download only our app. No need to download the entire vendor code as well.. this saves time..

- Preferably use code split using System.import when we split our app code. When we need to split our and vendor code, do it inside webpack.

- we can specify what bundle.js has inside entry proeprty of webpack. So we can split the bundle. we can add other property inside entry section, to produce multiple bundles.. so we make a new entry inside entry (!) and name it say vendor.js or v.js and add all dependencies from package.json to that, so that its bundled togetehr.

- just specifying a separate bundle will not split the code. We still be importing the libraries in our code. We need to fix this. So to avoid the duplicate imports, we can use a plugin commons chunk plugin. Now even if we import libraries that we seperated out in our webpack, into our code, it wont be included in the bundle of our code.

- to the plugin we give a bundle name.. like the library bundle. Now the plugin ensures taht only once these libraries are included.

- we can do same strategy for our code as well. Like split frequently changing code and not changing code to separate bundles. But if user clears cache, then everything will be downloaded again.


- now usually we include the base bundle in our html file. We are not including all split bundles. INcluding them manually is diffcult. We have a webpack plugin, that can look for the bundles and inject them to our html file.

- we give the html doc to the plugin config, so that it can inject scripts to it.

- the plugin takes the html files, injects scripts and then creates a new html file in dist directory with the scripts included.

- now the file name generated by webpack is same. So the browser wont consider it as a new file. To avoid this we can append the chunk hash of a file to the end of file name in webpack. now every new build wil have new name. THis is done when a file is changed. So vendor libraries wont trigger this hash change..

- we need to include the manifest js option to the commons chunk plugin. THis help brpwser decide if a fiel has been changed or not. Else every time we update our code, the chhunk plugin will think vendor libs is changed as well. THis is due to the hash name index we added above. That solution creates this problem. so use manifes to avoid it.

- the hash name of a file is dependant on the file content. So even a character change causes a new hash, leading to a new name , causing a refresh.

- the hash appended files are automaticaly injected to teh html file when hash name changes.

- every build , now with chunk hash name, causes a new file to be added to dist directory (our code mainy and vendor wen we change it). This fills up dist with all build files and bundles. We can use a plugin called rim-raf to clear the directory. Like clear files . We addd to package json, and assign a job to it.

- we can run clean job before the build, so that dist is cleared before each build.

**Webpack Dev server**

- webpack dev server is intermediate between webpacj output and browser. It automates all manual actions, like build, refresh etc when we cahnge files. So this autoamtes teh build and refreshes the browser automatically. It updates only the changed files or js. Also it automatically loads the html page to browser.

- the WP dev server, is client side only. It only loads and refreshes pages, and listenes for changes. We cannot add any logic to WP dev server, like access database. We need to use a node server for this. How can we combine the node server with WP server?

- if we change WP congig, WP server needs to be restarted

- WP dev server, builds and keep files in its memory. it wont save build to drive. So even if delete the dist folder and then run WP dev server, the build will be done and the page loads. But dist is not created. WP serves page from in memory. So use WP dev server only for development.nt production.

- by default WP servers static files. Not the dynamic pages, like based on the api output. Entire WP app runs in the browser, served from WP memory.

**Production Deploy**


-for real apps, we need a server between code, and browser like node or rails. the middle server can server WP static content and the dynamic content.

-static asset providers: Amazon s3, azure, surge, digital ocean, github
-dyanmic : Amazon ELB, Amazon Ec2, digital ocean , heroku , azure

- we can define WP config or global variables in a plugin and the app like react or angular will look for its value. like setting env to prod or dev. The WP define plugin is used to decalre global or window scoped variables.

- we can also pass config to webpack command, like -p. So WP runs in prod mode. causing files to be minimified. We can set the WP config or window scoped variables that we declared in define plugin, in the build section.


**Real world App**

- there are two strategies to deploy an app with WP and a backend server. One we can have two separate address, one with WP serving static address and other with a server like node servign dynamic content. SO the static app from WP can make requests to the dynamic app using API calls. But these are separate servers. This is how large apps work, as static pages are seaprate and traffic to api are limited. Performance benefits.

- second is a single server, like node, that has everythign. The WP based static app will be inside the backend app. the Real server will have a route handler or servelt to route requests to WP static pages or login requests or api calls. The backend server is 100% in control here. Suitable for small apps

-  Second setup causes problem for WP. as say Node server is in control of everything, and not WP. so WP needs to be made compatable with WP server. So both Real server like Node and WP needs to talk and interact with each other.

**Node and WP Integration**
- this setup is different for dev and prod

- in dev, node installs a WP middleware and passes requests to the backend WP server. here instead of node serving static pages, request is hanlded by WP.

- in prod, WP is not run at all, as it is a resouce hog. So we need to build our app only once with WP. THen we ask the node server to serve these static pages build by WP with the node server handling our requests. Here there is no WP middle ware.

- so in prod there is no WP serer running in backend, building and watchign files. ONly the built app is used.

- a middleare is used to modify and handle the requests coming to server. so Middleware will intercept the request for a page and will serve the correct page.

- for WP middleware to intercept, we install the WP middleware, then use that with webpack library and our webpack config to intercept and handle the requests.

- we then add the middelware to teh express server ( or any server like that). to express server, we pass teh WP middleware, to that we give the WP app and to that we pass our config object for WP.(!!!)

- no config is needed in the WP config file.. only the midleware config.. here WP runs inside our node server. We get all benefits of a separate WP server here as well. like auto rebuild and things like that, but now runnig inside node, with node handling all requests.


- in prod we dont need the WP middle ware. So for prod, we control the middle ware with a if statement and enabel it only if its  not prod env.