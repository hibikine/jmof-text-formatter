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
})({"hasp0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "130a15c6ffd98649";
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

},{}],"9l4Gv":[function(require,module,exports) {
var _convertArrayToFiles = require("./convertArrayToFiles");
var _parseCSV = require("./parseCSV");
(()=>{
    const runButton = document.getElementById("run");
    const inputTextarea = document.getElementById("inputtext");
    const resultTextarea = document.getElementById("result");
    runButton.addEventListener("click", ()=>{
        const t = inputTextarea.value;
        resultTextarea.value = (0, _convertArrayToFiles.convertArrayToFiles)((0, _parseCSV.CSVToArray)(t)).join("\n\n\n----------------------------\n\n\n");
    });
})();

},{"./convertArrayToFiles":"98Dp8","./parseCSV":"h2WFF"}],"98Dp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HEADER_ROW_COUNT", ()=>HEADER_ROW_COUNT);
parcelHelpers.export(exports, "convertArrayToFiles", ()=>convertArrayToFiles);
var _main = require("./main");
var _isEmptyRow = require("./lib/isEmptyRow");
var _rowNew = require("./RowNew");
const HEADER_ROW_COUNT = 2;
const convertArrayToFiles = (array)=>{
    // FIXME: 決め打ちなので直す
    const headerIndex = 3; // array.findIndex((row) => row[0] === 'ID');
    const newContentsArray = array.slice(headerIndex + HEADER_ROW_COUNT) // ヘッダー行以降を取得
    .filter((r)=>!(0, _isEmptyRow.isEmptyRow)(r)) // 空行消す
    .map((0, _rowNew.convertRowNew));
    const files = (0, _main.convertNew)(newContentsArray);
    return files;
};

},{"./main":"7ZSs6","./lib/isEmptyRow":"8sw1o","./RowNew":"3SaHg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZSs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addRowStyle", ()=>addRowStyle);
parcelHelpers.export(exports, "convertRowNew", ()=>convertRowNew);
parcelHelpers.export(exports, "headerGenerator", ()=>headerGenerator);
parcelHelpers.export(exports, "convertNew", ()=>convertNew);
parcelHelpers.export(exports, "convert", ()=>convert);
parcelHelpers.export(exports, "convertNews", ()=>convertNews);
parcelHelpers.export(exports, "checkHasChinese", ()=>checkHasChinese);
var _rowNew = require("./RowNew");
const getHeaderAndFooter = (style, language)=>{
    switch(style){
        case "H2":
        case "H3":
        case "H4":
            return [
                `${"#".repeat(parseInt(style.charAt(1), 10))} `,
                ""
            ];
        case "Img":
            return [
                "![image](",
                ")"
            ];
        case "Nt!":
        case "Pct!":
            if (language === "japanese") return [
                "**\u203B",
                "**"
            ];
            return [
                "**Note: ",
                "**"
            ];
        case "Nt":
        case "Ct":
            if (language === "japanese") return [
                "*\u203B",
                "*"
            ];
            return [
                "*Note: ",
                "*"
            ];
        case "Pct":
            if (language === "japanese") return [
                "\u203B",
                ""
            ];
            return [
                "Note: ",
                ""
            ];
        case "Btn-":
            return [
                '<Button name="',
                '" disabled />'
            ];
        case "Btn+":
            return [
                '<Button name="',
                '" />'
            ];
        case "wTab":
            return [
                "<ContentTabs>\n",
                "</ContentTabs>"
            ];
    }
    return [
        "",
        ""
    ];
};
const format = (text, style)=>{
    let prevText = text;
    do {
        prevText = text;
        text = text.replace(/\[(.+)\]\(https?:\/\/(www\.)?jmof\.jp(\/.+)\)/, "[$1]($3)");
    }while (text !== prevText);
    switch(style){
        case "UL":
            return `- ${text}`;
        case "OL":
            return `1. ${text}`;
        case "Nt!":
        case "Nt":
        case "Pct!":
        case "Pct":
        case "Ct":
            const trimTextMatch = text.match(/^(Note: |※)/);
            if (trimTextMatch !== null) {
                const len = trimTextMatch?.[0]?.length;
                if (len != null) return text.slice(len);
            }
            return text;
        case "Btn+":
            const link = text.match(/\[(.+)\]\((.+)\)/);
            if (link === null) return text;
            return `${link[1]}" to="${link[2]}`;
        default:
            return text;
    }
};
const convertRow = (row, index, csv)=>{
    const [_id, status, style, japanese, english, comment] = row;
    if ([
        "\u975E\u8868\u793A",
        "\u524A\u9664"
    ].includes(status) || [
        "Spcl",
        "hImg"
    ].includes(style)) return null;
    // wip
    if (![
        "H2",
        "H3",
        "H4",
        "P",
        "UL",
        "OL",
        "Img",
        "Nt",
        "Nt!",
        "Ct",
        "Pct!",
        "Pct",
        "Btn-",
        "Btn+",
        "wTab"
    ].includes(style)) return null;
    const japaneseText = convertEachLanguage(style, japanese, "japanese");
    const englishText = convertEachLanguage(style, english, "english");
    return {
        japaneseText,
        englishText
    };
};
const convertEachLanguage = (style, text, language)=>{
    if (text === "") return null;
    const [japaneseHeader, japaneseFooter] = getHeaderAndFooter(style, language);
    return `${japaneseHeader}${format(text, style)}${japaneseFooter}`;
};
const styleGen = (s, _)=>{
    return typeof _ === "undefined" ? (args)=>[
            ...args
        ].fill(s.join()) : (args)=>args.map((v)=>`${s[0]}${v}${s[1]}`);
};
const addRowStyle = (text, style, addHeader, row)=>{
    const styleFn = new Map([
        [
            "H1",
            (t)=>{
                addHeader("title", t);
                return null;
            }
        ],
        [
            "hImg",
            (_)=>{
                addHeader("titleImage", [
                    ..._
                ].fill(row.comment.replace("\n", " ")));
                return null;
            }
        ],
        [
            "H2",
            styleGen`
## ${0}`
        ],
        [
            "H3",
            styleGen`
### ${0}`
        ],
        [
            "H4",
            styleGen`
#### ${0}`
        ],
        [
            "P",
            styleGen`${0}`
        ],
        [
            "UL",
            styleGen`- ${0}`
        ],
        [
            "OL",
            styleGen`1. ${0}`
        ],
        [
            "Img",
            styleGen`![image](${0})`
        ],
        [
            "Nt!",
            (t)=>t.map((v, i)=>{
                    const trimTextMatch = v.match(/^(Note: |※)/);
                    if (trimTextMatch !== null) v = v.slice(trimTextMatch[0].length);
                    if (i === t.length - 1) return `**Note: ${v}**`;
                    return `**\u{203B}${v}**`;
                })
        ],
        [
            "Pct!",
            (t)=>t.map((v, i)=>{
                    const trimTextMatch = v.match(/^(Note: |※)/);
                    if (trimTextMatch !== null) v = v.slice(trimTextMatch[0].length);
                    if (i === t.length - 1) return `**Note: ${v}**`;
                    return `**\u{203B}${v}**`;
                })
        ],
        [
            "Nt",
            (t)=>t.map((v, i)=>{
                    const trimTextMatch = v.match(/^(Note: |※)/);
                    if (trimTextMatch !== null) v = v.slice(trimTextMatch[0].length);
                    if (i === t.length - 1) return `*Note: ${v}*`;
                    return `*\u{203B}${v}*`;
                })
        ],
        [
            "Ct",
            (t)=>t.map((v, i)=>{
                    const trimTextMatch = v.match(/^(Note: |※)/);
                    if (trimTextMatch !== null) v = v.slice(trimTextMatch[0].length);
                    if (i === t.length - 1) return `*Note: ${v}*`;
                    return `*\u{203B}${v}*`;
                })
        ],
        [
            "Pct",
            (t)=>t.map((v, i)=>{
                    const trimTextMatch = v.match(/^(Note: |※)/);
                    if (trimTextMatch !== null) v = v.slice(trimTextMatch[0].length);
                    if (i === t.length - 1) return `Note: ${v}`;
                    return `\u{203B}${v}`;
                })
        ],
        [
            "Btn-",
            (t)=>t.map((v)=>{
                    const link = v.match(/\[(.+)\]\((.+)\)/);
                    if (link === null) return `<Button name="${v}" disabled />`;
                    return `<Button name="${link[1]}" to="${link[2]}" disabled />`;
                })
        ],
        [
            "Btn+",
            (t)=>t.map((v)=>{
                    const link = v.match(/\[(.+)\]\((.+)\)/);
                    if (link === null) return `<Button name="${v}" />`;
                    return `<Button name="${link[1]}" to="${link[2]}" />`;
                })
        ],
        [
            "wTbs",
            styleGen`\n<ContentTabs>`
        ],
        [
            "wTbe",
            styleGen`</ContentTabs>\n`
        ],
        [
            "tTb1",
            styleGen`  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >
`
        ],
        [
            "tTb2",
            styleGen`
  </ContentTab>
  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >
`
        ],
        [
            "tTb3",
            styleGen`
  </ContentTab>
  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >
`
        ],
        [
            "tTb4",
            styleGen`  </ContentTab>
  <ContentTab
    name="${0}"
    tabId="__FIXME_TABID_GOES_HERE__"
    defaultChekcedPath={["/__FIXME__/PATH/NAME/HERE"]}
  >`
        ]
    ]).get(style);
    if (!styleFn) {
        console.warn(`style not found: ${style}`);
        return text;
    }
    return styleFn(text) ?? text;
};
const convertRowNew = (row, addHeader)=>addRowStyle((0, _rowNew.isRowNewWithChinese)(row) ? [
        row.japanese,
        row.chineseHans,
        row.chineseHant,
        row.english
    ] : [
        row.japanese,
        row.english
    ], row.style, addHeader, row);
const convertYaml = (k, v)=>v.map((v2)=>`${k}: "${v2}"`);
const convertYamlArray = (k, v)=>{
    if (v.length === 0) return null;
    return v[0].map((_, i)=>`${k}:
${v.map((item)=>`  - "${item[i].replace('"', '\\"')}"`).join("\n")}`);
};
const headerGenerator = ()=>{
    const header = {
        slug: null,
        title: null,
        slugs: [],
        titleImage: null
    };
    const headerNotEmpty = (k)=>header[k] != null && header[k] instanceof Array && header[k].length !== 0;
    const headerArrayNotEmpty = (k)=>header[k] instanceof Array && header[k].length > 0;
    const addHeader = (key, value)=>{
        switch(key){
            case "slugs":
                header[key].push(value);
                return;
            case "slug":
            case "title":
            case "titleImage":
            default:
                header[key] = value;
                return;
        }
    };
    const generateHeader = ()=>{
        const keys = Object.keys(header).filter((k)=>![
                "slug",
                "title",
                "slugs",
                "titleImage"
            ].includes(k));
        const contents = [
            ...[
                "slug",
                "title"
            ].filter(headerNotEmpty).map((k)=>convertYaml(k, header[k])),
            ...[
                "slugs"
            ].filter(headerArrayNotEmpty).map((k)=>convertYamlArray(k, header[k])),
            ...[
                "titleImage"
            ].filter(headerNotEmpty).map((k)=>convertYaml(k, header[k])),
            ...keys.map((k)=>{
                if (header[k] instanceof Array) {
                    if (header[k].length === 0) return null;
                    if (header[k] instanceof Array) {
                        if (header[k][0].length === 0) return null;
                        // Array
                        return convertYamlArray(k, header[k]);
                    }
                    return convertYaml(k, header[k]);
                }
                return null;
            }).filter(Boolean)
        ];
        const cleanContents = contents.reduce((prev, curr)=>prev.map((v, i)=>[
                    ...v,
                    curr[i]
                ]), [
            ...contents?.[0]
        ].map(()=>[])).map((v)=>v.join("\n"));
        return cleanContents.map((c)=>`---
${c}
---`);
    };
    return [
        generateHeader,
        addHeader
    ];
};
const convertNew = (csv)=>{
    const [generateHeader, addHeader] = headerGenerator();
    const convertedRows = csv.filter((r)=>r.status !== "\u524A\u9664" && r.status !== "\u975E\u8868\u793A").map((r)=>convertRowNew(r, addHeader));
    const joinedText = convertedRows.reduce((prev, convertedRow)=>{
        convertedRow.map((v, i)=>prev[i].push(v));
        return prev;
    }, [
        ...convertedRows[0]
    ].map(()=>[])).map((v)=>v.filter(Boolean).join("\n"));
    const headers = generateHeader();
    const result = joinedText.map((v, i)=>{
        if (headers[i] === undefined) return `${headers[headers.length - 1]}
${v}`;
        return `${headers[i]}
${v}`;
    });
    return result;
};
const convert = (csv)=>{
    const tabRow = csv.find(([, , style])=>style === "Tab");
    const tabText = [
        tabRow?.[3] ?? "",
        tabRow?.[4] ?? ""
    ];
    const titleRow = csv.find(([, , style])=>style === "H1");
    const titleText = [
        titleRow?.[3] ?? "",
        titleRow?.[4] ?? ""
    ];
    const headerImageRow = csv.find(([, , style])=>style === "hImg");
    const headerImage = (headerImageRow?.[5] ?? "").match(/https?:\/\/[\w!\?/\+\-_~=;\.,\*&@#\$%\(\)'\[\]]+/)?.[0] ?? "";
    const getHeaderText = (language_key)=>`---
slug: "/url/input/here"
title: "${titleText[language_key]}"
${headerImageRow ? `titleImage: "${headerImage}"
` : ""}---${tabText[language_key] === "" ? "" : `

  <ContentTab
    name="${tabText[language_key]}"
    tabId="tabid_goes_here"
    defaultCheckedPath={["/path/name/here"]}
  >`}
`;
    const getFooterText = (language_key)=>tabText[language_key] === "" ? "" : `

  </ContentTabs>`;
    const result = csv.map(convertRow).filter(Boolean);
    const japaneseResult = result.map((v)=>v.japaneseText).filter(Boolean) // 空文字とnullを除外
    .reduce(joinText);
    const englishResult = result.map((v)=>v.englishText).filter(Boolean).reduce(joinText);
    return [
        japaneseResult,
        englishResult
    ].map((resultText, i)=>`${getHeaderText(i)}${resultText}${getFooterText(i)}
`);
};
const joinText = (text, row, index, array)=>{
    const prev = index > 0 ? array[index - 1] : "";
    if (// 前の段落がリスト
    "- " === prev.slice(0, 2) && "- " === row.slice(0, 2) || // 前の段落が番号つきリスト
    "1. " === prev.slice(0, 3) && "1. " === row.slice(0, 3) || // 前の段落が見出し
    prev.match(/^#{2,4} ./) !== null) // 間に1行改行を入れる
    return `${text}\n${row}`;
    return `${text}\n\n${row}`;
};
const parseTitle = (text)=>{
    const texts = text.split("_");
    return texts[texts.length - 1];
};
const convertNews = (csv)=>{
    let day = {
        ja: "",
        en: ""
    };
    const result = csv.map((row)=>{
        if (row[2] === "nwH4") {
            day = {
                ja: row[3],
                en: row[4]
            };
            return null;
        } else if (row[2] === "nwP") return {
            ja: {
                [day.ja]: row[3]
            },
            en: {
                [day.en]: row[4]
            }
        };
        return null;
    });
    const filteredResult = result.filter(Boolean);
    if (filteredResult.length === 0) return null;
    const jaResult = filteredResult.map(({ ja })=>ja);
    const enResult = filteredResult.map(({ en })=>en);
    return {
        ja: JSON.stringify(jaResult),
        en: JSON.stringify(enResult)
    };
};
const checkHasChinese = (csv)=>csv[3].some((v)=>v.startsWith("\u4E2D\u6587"));

},{"./RowNew":"3SaHg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SaHg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isRowNewWithChinese", ()=>isRowNewWithChinese);
parcelHelpers.export(exports, "convertRowNew", ()=>convertRowNew);
var _hasChinese = require("./lib/hasChinese");
function isRowNewWithChinese(row) {
    return "chineseHans" in row;
}
function convertRowNew(row) {
    if ((0, _hasChinese.hasChinese)(row)) return {
        id: parseInt(row[0], 10),
        status: row[1] || row[7] || null,
        style: row[2],
        japanese: row[3],
        chineseHans: row[4],
        chineseHant: row[5],
        english: row[6],
        comment: row[9]
    };
    return {
        id: parseInt(row[0], 10),
        status: row[1] || row[5] || null,
        style: row[2],
        japanese: row[3],
        english: row[4],
        comment: row[7]
    };
}

},{"./lib/hasChinese":"6KjnQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KjnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasChinese", ()=>hasChinese);
function hasChinese(row) {
    return row.length > 8;
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"8sw1o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEmptyRow", ()=>isEmptyRow);
var _hasChinese = require("./hasChinese");
function isEmptyRow(row) {
    const checkCells = (0, _hasChinese.hasChinese)(row) ? row.slice(1, 6) : row.slice(1, 4);
    return checkCells.every((cell)=>cell === "");
}

},{"./hasChinese":"6KjnQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2WFF":[function(require,module,exports) {
/**
 * @see https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSVToArray", ()=>CSVToArray);
function CSVToArray(strData, strDelimiter = ",") {
    // Create a regular expression to parse the CSV values.
    const objPattern = new RegExp(// Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" + // Quoted fields.
    '(?:"([^"]*(?:""[^"]*)*)"|' + // Standard fields.
    '([^"\\' + strDelimiter + "\\r\\n]*))", "gi");
    const arrData = [
        []
    ];
    let arrMatches = null;
    while(arrMatches = objPattern.exec(strData)){
        var strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) arrData.push([]);
        if (arrMatches[2]) var strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
        else var strMatchedValue = arrMatches[3];
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return arrData;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hasp0","9l4Gv"], "9l4Gv", "parcelRequire94c2")

//# sourceMappingURL=index.ffd98649.js.map
