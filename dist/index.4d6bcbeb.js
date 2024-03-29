// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3zq8u":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _indexJs = require("./routes/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
// index.html과 연결
const root = document.querySelector("#root");
root.append(new (0, _appDefault.default)().el);
//router 호출, 라우터 기능 사용해야하기 때문에
(0, _indexJsDefault.default)();
(async ()=>{
    const res = await fetch("/api/test");
    const json = await res.json();
    console.log("/api/test", json);
})();

},{"./App":"2kQhy","./routes/index.js":"3L9mC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kQhy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("./core/heropy");
var _theHeader = require("./components/TheHeader");
var _theHeaderDefault = parcelHelpers.interopDefault(_theHeader);
var _theFooter = require("./components/TheFooter");
var _theFooterDefault = parcelHelpers.interopDefault(_theFooter);
class App extends (0, _heropy.Component) {
    render() {
        const theHeader = new (0, _theHeaderDefault.default)().el;
        const theFooter = new (0, _theFooterDefault.default)().el;
        const routerView = document.createElement("router-view");
        this.el.append(theHeader, routerView, theFooter);
    }
}
exports.default = App;

},{"./core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components/TheHeader":"3Cyq4","./components/TheFooter":"b3x3c"}],"57bZf":[function(require,module,exports) {
// Component
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
///Store
parcelHelpers.export(exports, "Store", ()=>Store) // subscribe()는 인자를 2개 받는데 message의 값과 callback 함수이다.
 // message.js의 Store객체의 값이 message로 변경될때마다 get, set 함수를 실행한다
 // get으로는 state[key]값을 받아오고 set으로 state[key]값을 val로 설정하고 cb함수를 실행한다.
 // 다시 Message.js로 가보자
;
class Component {
    constructor(payload = {}){
        const { tagName = "div", state = {}, props = {} } = payload;
        this.el = document.createElement(tagName);
        this.state = state;
        this.props = props;
        this.render();
    }
    render() {
    //...
    }
}
//Router
function routeRender(routes) {
    if (!location.hash) history.replaceState(null, "", "/#/"); //히스토리에 기록 남기지않고, /#/ 해시 정보가 없을 떄 넣어줌
    const routerView = document.querySelector("router-view");
    // httpL//localhost:1234/#/about?name=heropy
    // #/about 가 필요
    const [hash, queryString = ""] = location.hash.split("?");
    // a=123&b=456
    const query = queryString.split("&").reduce((acc, cur)=>{
        const [key, value] = cur.split("=");
        acc[key] = value;
        return acc;
    }, {});
    history.replaceState(query, ""); // (상태, 제목)
    const currentRoute = routes.find((route)=>new RegExp(`${route.path}/?$`).test(hash));
    routerView.innerHTML = "";
    routerView.append(new currentRoute.component().el);
    window.scrollTo(0, 0); //스크롤 최상단으로 이동
}
function createRouter(routes) {
    return function() {
        window.addEventListener("popstate", ()=>{
            routeRender(routes);
        });
        routeRender(routes);
    };
}
class Store {
    constructor(state){
        this.state = {};
        this.observers = {}; //빈 객체 생성
        for(const key in state)// 정의하고자하는 데이터들의 새로운 값들이 할당될때마다 필요한 함수를 실행하기 위해
        Object.defineProperty(this.state, key, {
            get: ()=>{
                return state[key];
            },
            set: (val)=>{
                state[key] = val;
                //observer는 cb의 값
                if (Array.isArray(this.observers[key])) this.observers[key].forEach((observer)=>observer(val));
            }
        });
    }
    //상태 구독
    subscribe(key, cb) {
        // 어떤 데이터를 감시할 것이고(key), 변화하면 cb라는 함수 실행
        // this.observers['message'] = () => {}
        // { message : () => {} }
        // version2 { message : [() => {}, ()=> {}, () => {}]} 메세지의 객체를 여러개 만들어주기 위해 배열 데이터 생성
        // push값은 배열 데이터에서만 사용 가능
        // Array.isArray()를 통해서 인자값이 배열데이터라면 ? 뒤를 실행하고 아니라면 : 뒤를 실행한다.
        Array.isArray(this.observers[key]) ? this.observers[key].push(cb) : this.observers[key] = [
            cb
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3Cyq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class TheHeader extends (0, _heropy.Component) {
    constructor(){
        super({
            tagName: "header",
            state: {
                menus: [
                    {
                        name: "Search",
                        href: "#/"
                    },
                    {
                        name: "Movie",
                        href: "#/movie"
                    },
                    {
                        name: "About",
                        href: "#/about"
                    }
                ]
            }
        });
        // 브라우저의 상태 변화에 대응하여 페이지를 다시 렌더링하
        // 페이지의 상태가 변경될 때마다 render 함수가 호출되어
        // 해당 상태에 따른 화면 갱신이 이루어짐
        window.addEventListener("popstate", ()=>{
            this.render();
        });
    }
    render() {
        this.el.innerHTML = /*html*/ `
      <a 
      href="#/" 
      class="logo">
      <span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus.map((menu)=>{
            const href = menu.href.split("?")[0];
            const hash = location.hash.split("?")[0];
            const isActive = href === hash;
            return /*html*/ `
              <li>
                <a
                  class="${isActive ? "active" : ""}" 
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `;
        }).join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="User" />
      </a>
    `;
    }
}
exports.default = TheHeader;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3x3c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class TheFooter extends (0, _heropy.Component) {
    constructor(){
        super({
            tagName: "footer"
        });
    }
    render() {
        const { github, repository } = (0, _aboutDefault.default).state;
        this.el.innerHTML = /*html*/ `
      <div>
        <a href="${repository}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          ChanJin
        </a>
      </div>
    `;
    }
}
exports.default = TheFooter;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../store/about":"4RAJO"}],"4RAJO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
exports.default = new (0, _heropy.Store)({
    photo: "https://heropy.blog/css/images/logo.png",
    name: "JeongChanJin",
    email: "jcjin1998@gmail.com",
    blog: "https://chanjin98.tistory.com/",
    github: "https://github.com/chanjin1998",
    repository: "https://github.com/ParkYoungWoong/vanillajs-movie-app"
});

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3L9mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _home = require("./Home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _movie = require("./Movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
var _about = require("./About");
var _aboutDefault = parcelHelpers.interopDefault(_about);
var _notFound = require("./NotFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
exports.default = (0, _heropy.createRouter)([
    {
        path: "#/",
        component: (0, _homeDefault.default)
    },
    {
        path: "#/movie",
        component: (0, _movieDefault.default)
    },
    {
        path: "#/about",
        component: (0, _aboutDefault.default)
    },
    // 나머지 모든 페이지 에러 처리, 마지막에 적기
    {
        path: ".*",
        component: (0, _notFoundDefault.default)
    }
]);

},{"../core/heropy":"57bZf","./Home":"0JSNG","./Movie":"1LTyN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./About":"gdB30","./NotFound":"4fDiL"}],"0JSNG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _headline = require("../components/Headline");
var _headlineDefault = parcelHelpers.interopDefault(_headline);
var _search = require("../components/Search");
var _searchDefault = parcelHelpers.interopDefault(_search);
var _movieList = require("../components/MovieList");
var _movieListDefault = parcelHelpers.interopDefault(_movieList);
var _movieListMore = require("../components/MovieListMore");
var _movieListMoreDefault = parcelHelpers.interopDefault(_movieListMore);
class Home extends (0, _heropy.Component) {
    render() {
        const headline = new (0, _headlineDefault.default)().el;
        const search = new (0, _searchDefault.default)().el;
        const movieList = new (0, _movieListDefault.default)().el;
        const movieListMore = new (0, _movieListMoreDefault.default)().el;
        this.el.classList.add("container");
        this.el.append(headline, search, movieList, movieListMore);
    }
}
exports.default = Home;

},{"../core/heropy":"57bZf","../components/Headline":"gaVgo","../components/Search":"jqPPz","../components/MovieList":"8UDl3","../components/MovieListMore":"3ZUar","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gaVgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class Headline extends (0, _heropy.Component) {
    render() {
        this.el.classList.add("headline");
        this.el.innerHTML = /*html*/ `
      <h1>
        <span>OMDb API</span><br />
        THE OPEN <br />
        MPVIE DATABASE <br />
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information,
        all conetent and images on the site are contributed and maintained by our users. <br />
        If you find this service useful, please consider making a one-time donation or became a patron.
      </p>
    `;
    }
}
exports.default = Headline;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqPPz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class Search extends (0, _heropy.Component) {
    render() {
        this.el.classList.add("search");
        this.el.innerHTML = /*html*/ `
      <!-- \u{B4A4}\u{B85C}\u{AC00}\u{AE30} \u{D574}\u{B3C4} \u{AC80}\u{C0C9}\u{C5B4} \u{B0A8}\u{C544}\u{C788}\u{AC8C} \u{D558}\u{AE30} -->
      <input value ="${(0, _movieDefault.default).state.searchText}"placeholder = 'Enter the move title to search'/>
      <button class='btn btn-primary'>
        Search
      </button> 
    `;
        // search 컴포넌트에서 검색을 한 다음에 영화목록에 데이터를 가져오기만 하는것이 아니고
        // 그 데이터를 화면에 실제 보여지는 요소로 출력을 해야한다.
        // 그 화면의 출력은 Movielist를 새로 만들어야한다, 다른 컴포넌트에서 같은 개념을 취급해야하는 Store 필요
        const inputEl = this.el.querySelector("input");
        inputEl.addEventListener("input", ()=>{
            (0, _movieDefault.default).state.searchText = inputEl.value;
        });
        inputEl.addEventListener("keydown", (event1)=>{
            // Enter키를 누르고 검색내용이 있는 경우에만 작동
            // trim의 기능 => 값이 존재하는 경우에만 엔터 작동
            if (event1.key === "Enter" && (0, _movieDefault.default).state.searchText.trim()) (0, _movie.searchMovies)(1);
        });
        const btnEl = this.el.querySelector(".btn");
        btnEl.addEventListener("click", ()=>{
            if (event.key === "Enter" && (0, _movieDefault.default).state.searchText.trim()) (0, _movie.searchMovies)(1);
        });
    }
}
exports.default = Search;

},{"../core/heropy":"57bZf","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kq1bo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchMovies", ()=>searchMovies);
parcelHelpers.export(exports, "getMovieDetails", ()=>getMovieDetails);
var _heropy = require("../core/heropy");
const store = new (0, _heropy.Store)({
    searchText: "",
    page: 1,
    pageMax: 1,
    movies: [],
    movie: {},
    loading: false,
    message: "Search for the movie title!"
});
exports.default = store;
const searchMovies = async (page)=>{
    store.state.loading = true;
    store.state.page = page; //page 값 바뀌는 것 저장하기
    if (page === 1) {
        // store.state.page = 1;
        store.state.movies = [];
        store.state.message = "";
    }
    // 비동기로 동작하니까 await를 사용해서 fetch 함수를 서버로 갔다올 때 기다려야함
    // 동작 순서 : omdb 페이지로 검색 결과를 전송 -> json으로 받아서 콘솔에 출력
    try {
        const res = await fetch(//by search 이기 때문에 아래 &s 사용
        `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`);
        const { Search, totalResults, Response, Error } = await res.json();
        if (Response === "True") {
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ];
            store.state.pageMax = Math.ceil(Number(totalResults) / 10);
        } else store.state.message = Error;
    } catch (error) {
        console.log("searchMovies error: ", error);
    } finally{
        store.state.loading = false;
    // movieList.render();
    }
// 1페이지의 영화정보와 2페이지의 정보를 Search로 받아온다. 3,4, 계속 받아옴
};
const getMovieDetails = async (id)=>{
    try {
        //by id or title(omdb api)이기 때문에 &i 사용
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`);
        store.state.movie = await res.json();
    } catch (error) {
        console.log("getMovieDetails error:", error);
    }
};

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UDl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
var _movieItem = require("./MovieItem");
var _movieItemDefault = parcelHelpers.interopDefault(_movieItem);
class MovieList extends (0, _heropy.Component) {
    constructor(){
        super();
        (0, _movieDefault.default).subscribe("movies", ()=>{
            this.render();
        });
        (0, _movieDefault.default).subscribe("loading", ()=>{
            this.render();
        });
        (0, _movieDefault.default).subscribe("message", ()=>{
            this.render();
        });
    }
    render() {
        this.el.classList.add("movie-list");
        this.el.innerHTML = /*html*/ `
      ${(0, _movieDefault.default).state.message ? `<div class='message'>${(0, _movieDefault.default).state.message}</div>` : `<div class='movies'></div>`}
      <div class="the-loader hide"></div>
    `;
        const moviesEl = this.el.querySelector(".movies");
        //옵셔널체이닝 moviesEl값이 존재할때만 추가한다
        moviesEl?.append(//map() 배열데이터에서 사용, 앞의 배열데이터를 기준으로 callback 함수를 반복 실행, 반환 후 재배정
        ...(0, _movieDefault.default).state.movies.map((movie)=>{
            return new (0, _movieItemDefault.default)({
                movie: movie
            }).el;
        }));
        const loaderEl = this.el.querySelector(".the-loader");
        (0, _movieDefault.default).state.loading ? loaderEl.classList.remove("hide") : loaderEl.classList.add("hide");
    }
}
exports.default = MovieList;

},{"../core/heropy":"57bZf","../store/movie":"kq1bo","./MovieItem":"fAzE8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAzE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class MovieItem extends (0, _heropy.Component) {
    constructor(props){
        super({
            props,
            tagName: "a"
        });
    }
    render() {
        const { movie } = this.props;
        this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
        this.el.classList.add("movie");
        this.el.style.backgroundImage = `url(${movie.Poster})`;
        this.el.innerHTML = /*html*/ `
      <div class='info'>
        <div class='year'>${movie.Year}</div>
        <div class='title'>${movie.Title}</div>
      </div>
    `;
    }
}
exports.default = MovieItem;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZUar":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class MovieListMore extends (0, _heropy.Component) {
    constructor(){
        super({
            tagName: "button"
        });
        (0, _movieDefault.default).subscribe("pageMax", ()=>{
            // movieStore.state.page
            // movieStore.state.pageMax
            const { page, pageMax } = (0, _movieDefault.default).state;
            pageMax > page ? this.el.classList.remove("hide") : this.el.classList.add("hide");
        // if (pageMax > page) {
        //   this.el.classList.remove("hide");
        // } else {
        //   this.el.classList.add("hide");
        // }
        });
    }
    render() {
        this.el.classList.add("btn", "view-more", "hide");
        this.el.textContent = "View more...";
        this.el.addEventListener("click", async ()=>{
            this.el.classList.add("hide");
            await (0, _movie.searchMovies)((0, _movieDefault.default).state.page + 1);
        });
    }
}
exports.default = MovieListMore;

},{"../core/heropy":"57bZf","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LTyN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _movie = require("../store/movie");
var _movieDefault = parcelHelpers.interopDefault(_movie);
class Movie extends (0, _heropy.Component) {
    async render() {
        this.el.classList.add("container", "the-movie");
        this.el.innerHTML = /*html*/ `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>`;
        await (0, _movie.getMovieDetails)(history.state.id);
        console.log((0, _movieDefault.default).state.movie.Title);
        const { movie } = (0, _movieDefault.default).state;
        const bigPoster = movie.Poster.replace("SX300", "SX700"); // 사진 고해상도로 바꿔주기
        this.el.innerHTML = /*html*/ `
      <div 
        style="background-image: url(${bigPoster})" 
        class="poster"></div>
      <div class="specs">
        <div class="title">
          ${movie.Title}
        </div>
        <div class='labels'>
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class='plot'>
          ${movie.Plot}
        </div>
        <div>
          <h3>Ratings</h3>
          ${movie.Ratings.map((rating)=>{
            return `<p>${rating.Source} - ${rating.Value}</p>`;
        }).join("")}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movie.Genre}</p>
        </div>
      </div>
    `;
    }
}
exports.default = Movie;

},{"../core/heropy":"57bZf","../store/movie":"kq1bo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdB30":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class About extends (0, _heropy.Component) {
    render() {
        const { photo, name, email, blog, github } = (0, _aboutDefault.default).state;
        this.el.classList.add("container", "about");
        this.el.innerHTML = /*html*/ `
      <div style="background-image: url(${photo})" class="photo"></div>
      <p class="name">${name}</p>
      <p><a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" 
            target="_blank">${email}</a></p>
      <p><a href="${github}" target="_blank">Github</a></p>
      <p><a href="${blog}" target="_blank">Blog</a></p>
    `;
    }
}
exports.default = About;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../store/about":"4RAJO"}],"4fDiL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heropy = require("../core/heropy");
class NotFound extends (0, _heropy.Component) {
    render() {
        this.el.classList.add("container", "not-found");
        this.el.innerHTML = /*html*/ `
      <h1>
        Sorry..<br>
        Page Not Found..
      </h1>
    `;
    }
}
exports.default = NotFound;

},{"../core/heropy":"57bZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3zq8u","gLLPy"], "gLLPy", "parcelRequire6588")

//# sourceMappingURL=index.4d6bcbeb.js.map
