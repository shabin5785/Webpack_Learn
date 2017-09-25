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
