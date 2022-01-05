// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
// const,let等の変数宣言
// 以前はvarが使用されていた
var val1 = "var変数";
console.log(val1); // var変数は上書き可能

val1 = "var変数を上書き";
console.log(val1); // var変数は再宣言可能

var val1 = "var変数を再宣言";
console.log(val1); // var変数は意図しない上書きや再宣言が発生する可能性があるため、以下を使用するようになった
// let変数

var val2 = "let変数";
console.log(val2); // let変数は上書き可能

val2 = "let変数を上書き";
console.log(val2); // letは再宣言不可
// src/index.js:25:4: Identifier 'val2' has already been declared. (25:4)のエラー発生
// let val2 = "let変数を再宣言"
// const変数

var val3 = "const変数";
console.log(val3); // const変数は上書き不可
// TypeError: "val3" is read-onlyのエラー発生
// val3 = "const変数上書き";
// const変数は再宣言不可
// src/index.js:39:6: Identifier 'val3' has already been declared. (39:6)のエラー発生
// const val3 = "const変数を再宣言"
// constで定義したオブジェクトの要素は更新することができる

var val4 = {
  name: "田中",
  age: 30
}; // console.log(val4);
// 変更

val4.name = "Tanaka"; // 追加

val4.addres = "東京都";
console.log(val4); // 変数宣言はconstを使用することがほとんど
// constで定義した配列についても要素を変更することができる

var val5 = ['dog', 'cat']; // 変更

val5[0] = "犬"; // 追加

val5.push("bird");
console.log(val5); // テンプレート文字列

var name = "田中";
var age = 30; // 「私の名前は田中です。年齢は30歳です。」を出力したい
// 従来の方法

var message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1); // テンプレート文字列を用いた方法

var message2 = "\u79C1\u306E\u540D\u524D\u306F".concat(name, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age, "\u3067\u3059\u3002");
console.log(message2); // アロー関数
// 従来の関数

function func1(str) {
  return str;
}

console.log(func1("func1が出力されています")); // "func1が出力されています"
// 関数を変数に格納してから使用する

var func2 = function func2(str) {
  return str;
};

console.log(func2("func2が出力されています")); // "func2が出力されています"
// アロー関数

var func3 = function func3(str) {
  return str;
};

console.log(func3("func3が出力されています")); // "func3が出力されています"
// アロー関数の注意点
// 引数が一つの場合には引数の()は省略することができる。
// 単一式の場合returnを省略し、以下のように記述することができる

var func4 = function func4(str) {
  return str;
};

var func5 = function func5(num1, num2) {
  return num1 + num2;
};

console.log(func5(30, 40)); // 分割代入
// 分割代入を使用しない場合

var myProfile = {
  name2: "田中",
  age2: 40
};
var message3 = "\u540D\u524D\u306F".concat(myProfile.name2, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(myProfile.age2, "\u3067\u3059\u3002");
console.log(message3); // 名前は田中です。年齢は40です。
// 分割代入を使用することで上記のmyProfileを省略することができる

var name2 = myProfile.name2,
    age2 = myProfile.age2;
var message4 = "\u540D\u524D\u306F".concat(name2, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age2, "\u3067\u3059\u3002");
console.log(message4); // 名前は田中です。年齢は40です。
// 分割代入を使用することで記述を簡潔にすることができる
// 分割代入は配列でも使用することができる

var myProfile2 = ['田中', 40];
var message5 = "\u540D\u524D\u306F".concat(myProfile2[0], "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(myProfile2[1], "\u3067\u3059\u3002");
console.log(message5); // 名前は田中です。年齢は40です。
// 分割代入は配列でも使用することができる

var name3 = myProfile2[0],
    age3 = myProfile2[1];
var message6 = "\u540D\u524D\u306F".concat(name3, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age3, "\u3067\u3059\u3002");
console.log(message6); // 名前は田中です。年齢は40です。
// デフォルト値

var sayHello = function sayHello(name) {
  return console.log("\u3053\u3093\u306B\u3061\u306F!".concat(name, "\u3055\u3093!"));
};

sayHello("田中"); // こんにちは!田中さん!
// 引数を削除すると

sayHello(); // こんにちは!undefinedさん!
// undefinedはエラーが発生する可能性を高めてしまうためデフォルト値を設定する

var sayHello2 = function sayHello2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ゲスト";
  return console.log("\u3053\u3093\u306B\u3061\u306F!".concat(name, "\u3055\u3093!"));
};

sayHello2(); // こんにちは!ゲストさん!

sayHello2("田中"); // こんにちは!田中さん!
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54339" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map