Terminal****************************\_****************************

Jeffr@DESKTOP-HRIVC1E MINGW64 /x/workspace/mern-devconnector (main)
\$ npm run dev

> mern-devconnector@1.0.0 dev X:\workspace\mern-devconnector
> concurrently "npm run server" "npm run client"

[1]
[1] ┌────────────────────────────────────────────────────────────┐
[1] │ npm update check failed │
[1] │ Try running with sudo or get access │
[1] │ to the local update config store via │
[1] │ sudo chown -R $USER:$(id -gn \$USER) C:\Users\Jeffr\.config │
[1] └────────────────────────────────────────────────────────────┘
[0]
[0] > mern-devconnector@1.0.0 server X:\workspace\mern-devconnector
[0] > nodemon server
[0]
[1]
[1] > mern-devconnector@1.0.0 client X:\workspace\mern-devconnector
[1] > npm start --prefix client
[1]
[1]
[1] > client@0.1.0 start X:\workspace\mern-devconnector\client
[1] > react-scripts start
[1]
[0] [nodemon] 2.0.6
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): _._
[0] [nodemon] watching extensions: js,mjs,json  
[0] [nodemon] starting `node server.js`
[0] Server started on port 5000
[0] MongoDB Connected...
[1] i ｢wds｣: Project is running at http://192.168.1.218/
[1] i ｢wds｣: webpack output is served from
[1] i ｢wds｣: Content not from webpack is served from X:\workspace\mern-devconnector\client\public
[1] i ｢wds｣: 404s will fallback to /
[1] Starting the development server...
[1]
[1] Compiled with warnings.
[1]
[1] ./node_modules/express/lib/view.js
[1] Critical dependency: the request of a dependency is an expression
[1]
[1] src\actions\auth.js
[1] Line 2:10: 'application' is defined but never used no-unused-vars
[1]
[1] src\reducers\alert.js
[1] Line 5:1: Unexpected default export of anonymous function import/no-anonymous-default-export
[1]
[1] src\reducers\auth.js
[1] Line 15:1: Unexpected default export of anonymous function import/no-anonymous-default-export
[1]
[1] Search for the keywords to learn more about each warning.
[1] To ignore, add // eslint-disable-next-line to the line before.
[1]

Client****************************\_****************************
×
TypeError: Cannot read property 'prototype' of undefined
(anonymous function)
X:/workspace/mern-devconnector/client/node_modules/express/lib/response.js:42
39 | _ @public
40 | _/
41 |

> 42 | var res = Object.create(http.ServerResponse.prototype)
> 43 |
> 44 | /\*_
> 45 | _ Module exports.
> View compiled
> ./node_modules/express/lib/response.js
> http://localhost:3000/static/js/0.chunk.js:40351:30
> **webpack_require**
> X:/workspace/mern-devconnector/client/webpack/bootstrap:856
> 853 |
> 854 | **webpack_require**.$Refresh$.init();
> 855 | try {
> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
fn
X:/workspace/mern-devconnector/client/webpack/bootstrap:150
147 | );
148 | hotCurrentParents = [];
149 | }

> 150 | return **webpack_require**(request);

      | ^  151 | };

152 | var ObjectFactory = function ObjectFactory(name) {
153 | return {
View compiled
./node_modules/express/lib/express.js
X:/workspace/mern-devconnector/client/node_modules/express/lib/express.js:22
**webpack_require**
X:/workspace/mern-devconnector/client/webpack/bootstrap:856
853 |
854 | **webpack_require**.$Refresh$.init();
855 | try {

> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
fn
X:/workspace/mern-devconnector/client/webpack/bootstrap:150
147 | );
148 | hotCurrentParents = [];
149 | }

> 150 | return **webpack_require**(request);

      | ^  151 | };

152 | var ObjectFactory = function ObjectFactory(name) {
153 | return {
View compiled
./node_modules/express/index.js
X:/workspace/mern-devconnector/client/node_modules/express/index.js:11
**webpack_require**
X:/workspace/mern-devconnector/client/webpack/bootstrap:856
853 |
854 | **webpack_require**.$Refresh$.init();
855 | try {

> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
fn
X:/workspace/mern-devconnector/client/webpack/bootstrap:150
147 | );
148 | hotCurrentParents = [];
149 | }

> 150 | return **webpack_require**(request);

      | ^  151 | };

152 | var ObjectFactory = function ObjectFactory(name) {
153 | return {
View compiled
▶ 2 stack frames were collapsed.
**webpack_require**
X:/workspace/mern-devconnector/client/webpack/bootstrap:856
853 |
854 | **webpack_require**.$Refresh$.init();
855 | try {

> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
fn
X:/workspace/mern-devconnector/client/webpack/bootstrap:150
147 | );
148 | hotCurrentParents = [];
149 | }

> 150 | return **webpack_require**(request);

      | ^  151 | };

152 | var ObjectFactory = function ObjectFactory(name) {
153 | return {
View compiled
▶ 2 stack frames were collapsed.
**webpack_require**
X:/workspace/mern-devconnector/client/webpack/bootstrap:856
853 |
854 | **webpack_require**.$Refresh$.init();
855 | try {

> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
fn
X:/workspace/mern-devconnector/client/webpack/bootstrap:150
147 | );
148 | hotCurrentParents = [];
149 | }

> 150 | return **webpack_require**(request);

      | ^  151 | };

152 | var ObjectFactory = function ObjectFactory(name) {
153 | return {
View compiled
▶ 2 stack frames were collapsed.
**webpack_require**
X:/workspace/mern-devconnector/client/webpack/bootstrap:856
853 |
854 | **webpack_require**.$Refresh$.init();
855 | try {

> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
fn
X:/workspace/mern-devconnector/client/webpack/bootstrap:150
147 | );
148 | hotCurrentParents = [];
149 | }

> 150 | return **webpack_require**(request);

      | ^  151 | };

152 | var ObjectFactory = function ObjectFactory(name) {
153 | return {
View compiled
▶ 2 stack frames were collapsed.
**webpack_require**
X:/workspace/mern-devconnector/client/webpack/bootstrap:856
853 |
854 | **webpack_require**.$Refresh$.init();
855 | try {

> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
fn
X:/workspace/mern-devconnector/client/webpack/bootstrap:150
147 | );
148 | hotCurrentParents = [];
149 | }

> 150 | return **webpack_require**(request);

      | ^  151 | };

152 | var ObjectFactory = function ObjectFactory(name) {
153 | return {
View compiled
1
http://localhost:3000/static/js/main.chunk.js:2529:18
**webpack_require**
X:/workspace/mern-devconnector/client/webpack/bootstrap:856
853 |
854 | **webpack_require**.$Refresh$.init();
855 | try {

> 856 | modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

      | ^  857 | } finally {

858 | **webpack_require**.$Refresh$.cleanup(moduleId);
859 | }
View compiled
checkDeferredModules
X:/workspace/mern-devconnector/client/webpack/bootstrap:45
42 | }
43 | if(fulfilled) {
44 | deferredModules.splice(i--, 1);

> 45 | result = **webpack_require**(**webpack_require**.s = deferredModule[0]);

     | ^  46 | 	}

47 | }
48 |
View compiled
Array.webpackJsonpCallback [as push]
X:/workspace/mern-devconnector/client/webpack/bootstrap:32
29 | deferredModules.push.apply(deferredModules, executeModules || []);
30 |
31 | // run deferred modules when all chunks ready

> 32 | return checkDeferredModules();

     | ^  33 | };

34 | function checkDeferredModules() {
35 | var result;
View compiled
(anonymous function)
http://localhost:3000/static/js/main.chunk.js:1:65
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error. Click the 'X' or hit ESC to dismiss this message.
