webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Button = __webpack_require__(3);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Icon = __webpack_require__(9);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	__webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    install: function install(Vue) {
	        Vue.component(_Button2.default.name, _Button2.default);
	        Vue.component(_Icon2.default.name, _Icon2.default);
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/mobile/Button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Button.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".colorful-button {\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);\n  outline: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: .1rem .2rem;\n  text-decoration: none;\n  color: #666;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n}\n.colorful-button:hover {\n  opacity: .6;\n}\n.colorful-button-default {\n  background-color: white;\n  color: #666;\n  border: 1px solid #ccc;\n}\n.colorful-button-primary {\n  background-color: cyan;\n  color: white;\n}\n.colorful-button-success {\n  background-color: green;\n  color: white;\n}\n.colorful-button-info {\n  background-color: blue;\n  color: white;\n}\n.colorful-button-warning {\n  background-color: yellow;\n  color: white;\n}\n.colorful-button-error {\n  background-color: red;\n  color: white;\n}\n", "", {"version":3,"sources":["/./src/mobile/Button.vue"],"names":[],"mappings":"AAAA;EACE,kEAAkE;EAClE,cAAc;EACd,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,YAAY;EACZ,+BAA2B;MAA3B,2BAA2B;EAC3B,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,wBAAwB;EACxB,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,uBAAuB;EACvB,aAAa;CACd;AACD;EACE,wBAAwB;EACxB,aAAa;CACd;AACD;EACE,uBAAuB;EACvB,aAAa;CACd;AACD;EACE,yBAAyB;EACzB,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,aAAa;CACd","file":"Button.vue","sourcesContent":[".colorful-button {\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: .1rem .2rem;\n  text-decoration: none;\n  color: #666;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n.colorful-button:hover {\n  opacity: .6;\n}\n.colorful-button-default {\n  background-color: white;\n  color: #666;\n  border: 1px solid #ccc;\n}\n.colorful-button-primary {\n  background-color: cyan;\n  color: white;\n}\n.colorful-button-success {\n  background-color: green;\n  color: white;\n}\n.colorful-button-info {\n  background-color: blue;\n  color: white;\n}\n.colorful-button-warning {\n  background-color: yellow;\n  color: white;\n}\n.colorful-button-error {\n  background-color: red;\n  color: white;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Icon = __webpack_require__(9);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		name: 'colorful-button',
		props: {
			color: {
				type: String,
				default: 'default'
			},
			type: String,
			icon: String,
			style: {
				type: Object,
				default: function _default() {
					return {};
				}
			},
			class: {
				type: String,
				default: ''
			}
		},
		computed: {
			oClass: function oClass() {
				var color = this.color;
				var className = this.class;
				if (!(color.indexOf('#') > -1)) {
					className += ' colorful-button-' + color;
				}
				return className;
			},
			oStyle: function oStyle() {
				var color = this.color;
				var style = this.style;
				if (color.indexOf('#') > -1) {
					style.color = color;
				}
				return style;
			}
		},
		components: {
			Icon: _Icon2.default
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/mobile/Icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./Icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Icon.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'colorful-font';\n  src: url(" + __webpack_require__(12) + ");\n  src: url(" + __webpack_require__(12) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(13) + ") format('woff'), url(" + __webpack_require__(14) + ") format('truetype'), url(" + __webpack_require__(15) + "#iconfont) format('svg');\n  /* iOS 4.1- */\n}\n.colorful-icon {\n  font-family: 'colorful-font';\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  cursor: pointer;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.colorful-icon:before {\n  display: block;\n}\n.icon-add:before {\n  content: \"\\E601\";\n}\n.icon-increase:before {\n  content: \"\\E620\";\n}\n.icon-inventory:before {\n  content: \"\\E621\";\n}\n.icon-search-voucher:before {\n  content: \"\\E602\";\n}\n.icon-import-voucher:before {\n  content: \"\\E603\";\n}\n.icon-money:before {\n  content: \"\\E604\";\n}\n.icon-pack-up:before {\n  content: \"\\E617\";\n}\n.icon-cancel:before {\n  content: \"\\E605\";\n}\n.icon-triangle:before {\n  content: \"\\E606\";\n}\n.icon-save:before {\n  content: \"\\E607\";\n}\n.icon-share:before {\n  content: \"\\E608\";\n}\n.icon-delete:before {\n  content: \"\\E609\";\n}\n.icon-selecte:before {\n  content: \"\\E61E\";\n}\n.icon-report:before {\n  content: \"\\E60B\";\n}\n.icon-deposit:before {\n  content: \"\\E622\";\n}\n.icon-edit:before {\n  content: \"\\E60C\";\n}\n.icon-balance:before {\n  content: \"\\E600\";\n}\n.icon-anti-settlement:before {\n  content: \"\\E623\";\n}\n.icon-new:before {\n  content: \"\\E60D\";\n}\n.icon-home:before {\n  content: \"\\E60E\";\n}\n.icon-business-tax:before {\n  content: \"\\E630\";\n}\n.icon-calculator:before {\n  content: \"\\E60F\";\n}\n.icon-preview:before {\n  content: \"\\E610\";\n}\n.icon-undetermind:before {\n  content: \"\\E624\";\n}\n.icon-modification:before {\n  content: \"\\E631\";\n}\n.icon-delete-plus:before {\n  content: \"\\E615\";\n}\n.icon-confirm:before {\n  content: \"\\E611\";\n}\n.icon-credit:before {\n  content: \"\\E632\";\n}\n.icon-arrow-right:before {\n  content: \"\\E612\";\n}\n.icon-income:before {\n  content: \"\\E627\";\n}\n.icon-calendar:before {\n  content: \"\\E613\";\n}\n.icon-unfold:before {\n  content: \"\\E61F\";\n}\n.icon-initial-value:before {\n  content: \"\\E61C\";\n}\n.icon-choose:before {\n  content: \"\\E614\";\n}\n.icon-cash:before {\n  content: \"\\E633\";\n}\n.icon-settle:before {\n  content: \"\\E616\";\n}\n.icon-close:before {\n  content: \"\\E61D\";\n}\n.icon-tag:before {\n  content: \"\\E62D\";\n}\n.icon-other-expenses:before {\n  content: \"\\E634\";\n}\n.icon-close-item:before {\n  content: \"\\E62B\";\n}\n.icon-expenses:before {\n  content: \"\\E628\";\n}\n.icon-income-from-investment:before {\n  content: \"\\E635\";\n}\n.icon-add-plus-fill:before {\n  content: \"\\E60A\";\n}\n.icon-financial-expenses:before {\n  content: \"\\E636\";\n}\n.icon-add-plus:before {\n  content: \"\\E618\";\n}\n.icon-the-invosing:before {\n  content: \"\\E62F\";\n}\n.icon-profit:before {\n  content: \"\\E619\";\n}\n.icon-other-income:before {\n  content: \"\\E637\";\n}\n.icon-management-feet:before {\n  content: \"\\E638\";\n}\n.icon-purse:before {\n  content: \"\\E61A\";\n}\n.icon-settlement:before {\n  content: \"\\E629\";\n}\n.icon-trial-balance:before {\n  content: \"\\E625\";\n}\n.icon-selling-expenses:before {\n  content: \"\\E639\";\n}\n.icon-label:before {\n  content: \"\\E62E\";\n}\n.icon-arrow-down:before {\n  content: \"\\E61B\";\n}\n", "", {"version":3,"sources":["/./src/mobile/Icon.vue"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,mCAA+B;EAC/B,4MAA6M;EAC7M,cAAc;CACf;AACD;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,uCAAuC;EACvC,oCAAoC;EACpC,mCAAmC;CACpC;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB","file":"Icon.vue","sourcesContent":["@font-face {\n  font-family: 'colorful-font';\n  src: url('fonts/iconfont.eot');\n  src: url('fonts/iconfont.eot?#iefix') format('embedded-opentype'), url('fonts/iconfont.woff') format('woff'), url('fonts/iconfont.ttf') format('truetype'), url('fonts/iconfont.svg#iconfont') format('svg');\n  /* iOS 4.1- */\n}\n.colorful-icon {\n  font-family: 'colorful-font';\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  cursor: pointer;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.colorful-icon:before {\n  display: block;\n}\n.icon-add:before {\n  content: \"\\e601\";\n}\n.icon-increase:before {\n  content: \"\\e620\";\n}\n.icon-inventory:before {\n  content: \"\\e621\";\n}\n.icon-search-voucher:before {\n  content: \"\\e602\";\n}\n.icon-import-voucher:before {\n  content: \"\\e603\";\n}\n.icon-money:before {\n  content: \"\\e604\";\n}\n.icon-pack-up:before {\n  content: \"\\e617\";\n}\n.icon-cancel:before {\n  content: \"\\e605\";\n}\n.icon-triangle:before {\n  content: \"\\e606\";\n}\n.icon-save:before {\n  content: \"\\e607\";\n}\n.icon-share:before {\n  content: \"\\e608\";\n}\n.icon-delete:before {\n  content: \"\\e609\";\n}\n.icon-selecte:before {\n  content: \"\\e61e\";\n}\n.icon-report:before {\n  content: \"\\e60b\";\n}\n.icon-deposit:before {\n  content: \"\\e622\";\n}\n.icon-edit:before {\n  content: \"\\e60c\";\n}\n.icon-balance:before {\n  content: \"\\e600\";\n}\n.icon-anti-settlement:before {\n  content: \"\\e623\";\n}\n.icon-new:before {\n  content: \"\\e60d\";\n}\n.icon-home:before {\n  content: \"\\e60e\";\n}\n.icon-business-tax:before {\n  content: \"\\e630\";\n}\n.icon-calculator:before {\n  content: \"\\e60f\";\n}\n.icon-preview:before {\n  content: \"\\e610\";\n}\n.icon-undetermind:before {\n  content: \"\\e624\";\n}\n.icon-modification:before {\n  content: \"\\e631\";\n}\n.icon-delete-plus:before {\n  content: \"\\e615\";\n}\n.icon-confirm:before {\n  content: \"\\e611\";\n}\n.icon-credit:before {\n  content: \"\\e632\";\n}\n.icon-arrow-right:before {\n  content: \"\\e612\";\n}\n.icon-income:before {\n  content: \"\\e627\";\n}\n.icon-calendar:before {\n  content: \"\\e613\";\n}\n.icon-unfold:before {\n  content: \"\\e61f\";\n}\n.icon-initial-value:before {\n  content: \"\\e61c\";\n}\n.icon-choose:before {\n  content: \"\\e614\";\n}\n.icon-cash:before {\n  content: \"\\e633\";\n}\n.icon-settle:before {\n  content: \"\\e616\";\n}\n.icon-close:before {\n  content: \"\\e61d\";\n}\n.icon-tag:before {\n  content: \"\\e62d\";\n}\n.icon-other-expenses:before {\n  content: \"\\e634\";\n}\n.icon-close-item:before {\n  content: \"\\e62b\";\n}\n.icon-expenses:before {\n  content: \"\\e628\";\n}\n.icon-income-from-investment:before {\n  content: \"\\e635\";\n}\n.icon-add-plus-fill:before {\n  content: \"\\e60a\";\n}\n.icon-financial-expenses:before {\n  content: \"\\e636\";\n}\n.icon-add-plus:before {\n  content: \"\\e618\";\n}\n.icon-the-invosing:before {\n  content: \"\\e62f\";\n}\n.icon-profit:before {\n  content: \"\\e619\";\n}\n.icon-other-income:before {\n  content: \"\\e637\";\n}\n.icon-management-feet:before {\n  content: \"\\e638\";\n}\n.icon-purse:before {\n  content: \"\\e61a\";\n}\n.icon-settlement:before {\n  content: \"\\e629\";\n}\n.icon-trial-balance:before {\n  content: \"\\e625\";\n}\n.icon-selling-expenses:before {\n  content: \"\\e639\";\n}\n.icon-label:before {\n  content: \"\\e62e\";\n}\n.icon-arrow-down:before {\n  content: \"\\e61b\";\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.eot";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.woff";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.ttf";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.svg";

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'colorful-icon',
		props: {
			type: {
				type: String,
				required: true
			},
			color: {
				type: String,
				default: 'default'
			},
			style: {
				type: Object,
				default: function _default() {
					return {};
				}
			},
			class: {
				type: String,
				default: ''
			}
		},
		computed: {
			oClass: function oClass() {
				var type = this.type;
				var color = this.color;
				var className = this.class;
				if (!(color.indexOf('#') > -1)) {
					className = [className, 'colorful-icon-' + color, 'colorful-icon-' + type].join(' ');
				}
				return className;
			},
			oStyle: function oStyle() {
				var color = this.color;
				var style = this.style;
				if (color.indexOf('#') > -1) {
					style.color = color;
				}
				return style;
			}
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<i class=\"colorful-icon\" :class=\"oClass\" :style=\"oStyle\"></i>\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<button class=\"colorful-button\" :class=\"oClass\" :type=\"type\" :style=\"oStyle\">\n\t<colorful-icon :type=\"icon\" :if=\"icon\"></colorful-icon>\n\t<slot></slot>\n</button>\n";

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9iaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2JpbGUvQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iaWxlL0J1dHRvbi52dWU/YmRlOCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iaWxlL0J1dHRvbi52dWU/ODExZiIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL0J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYmlsZS9JY29uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iaWxlL0ljb24udnVlPzliZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYmlsZS9JY29uLnZ1ZT9hZGIyIiwid2VicGFjazovLy8uL3NyYy9tb2JpbGUvZm9udHMvaWNvbmZvbnQuZW90Iiwid2VicGFjazovLy8uL3NyYy9tb2JpbGUvZm9udHMvaWNvbmZvbnQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iaWxlL2ZvbnRzL2ljb25mb250LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iaWxlL2ZvbnRzL2ljb25mb250LnN2ZyIsIndlYnBhY2s6Ly8vSWNvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYmlsZS9JY29uLnZ1ZT9lYmVlIiwid2VicGFjazovLy8uL3NyYy9tb2JpbGUvQnV0dG9uLnZ1ZT81MGRhIiwid2VicGFjazovLy8uL3NyYy9tb2JpbGUvY29tbW9uLmxlc3MiXSwibmFtZXMiOlsiaW5zdGFsbCIsIlZ1ZSIsImNvbXBvbmVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OzttQkFFZTtBQUNYQSxZQURXLG1CQUNIQyxHQURHLEVBQ0U7QUFDVEEsYUFBSUMsU0FBSixDQUFjLGlCQUFPQyxJQUFyQjtBQUNBRixhQUFJQyxTQUFKLENBQWMsZUFBS0MsSUFBbkI7QUFDSDtBQUpVLEU7Ozs7OztBQ0pmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBK0Y7QUFDL0Y7QUFDQSxhQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQyxJOzs7Ozs7QUN2QkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDZDQUE0QyxzRUFBc0Usa0JBQWtCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsZ0JBQWdCLG1DQUFtQyxtQ0FBbUMsb0JBQW9CLEdBQUcsMEJBQTBCLGdCQUFnQixHQUFHLDRCQUE0Qiw0QkFBNEIsZ0JBQWdCLDJCQUEyQixHQUFHLDRCQUE0QiwyQkFBMkIsaUJBQWlCLEdBQUcsNEJBQTRCLDRCQUE0QixpQkFBaUIsR0FBRyx5QkFBeUIsMkJBQTJCLGlCQUFpQixHQUFHLDRCQUE0Qiw2QkFBNkIsaUJBQWlCLEdBQUcsMEJBQTBCLDBCQUEwQixpQkFBaUIsR0FBRyxVQUFVLCtFQUErRSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVywrREFBK0Qsc0VBQXNFLGtCQUFrQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLGdCQUFnQiwrQkFBK0Isb0JBQW9CLEdBQUcsMEJBQTBCLGdCQUFnQixHQUFHLDRCQUE0Qiw0QkFBNEIsZ0JBQWdCLDJCQUEyQixHQUFHLDRCQUE0QiwyQkFBMkIsaUJBQWlCLEdBQUcsNEJBQTRCLDRCQUE0QixpQkFBaUIsR0FBRyx5QkFBeUIsMkJBQTJCLGlCQUFpQixHQUFHLDRCQUE0Qiw2QkFBNkIsaUJBQWlCLEdBQUcsMEJBQTBCLDBCQUEwQixpQkFBaUIsR0FBRywrQkFBK0I7O0FBRXY3RTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLG1CQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0EsU0FBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLGtCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxpQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdNQTs7Ozs7OztRQUVBOzs7VUFHQTthQUVBO0FBSEE7U0FJQTtTQUNBOztVQUVBOztZQUVBOztBQUhBOztVQUtBO2FBR0E7QUFKQTtBQVhBOzs2QkFpQkE7cUJBQ0E7eUJBQ0E7b0NBQ0E7d0NBQ0E7QUFDQTtXQUNBO0FBQ0E7NkJBQ0E7cUJBQ0E7cUJBQ0E7aUNBQ0E7bUJBQ0E7QUFDQTtXQUNBO0FBRUE7QUFqQkE7O0FBb0JBO0FBRkE7QUFwQ0EsRzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUErRjtBQUMvRjtBQUNBLGFBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDLEk7Ozs7OztBQ3ZCRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXNDLGlDQUFpQyw4Q0FBc0QsNFBBQTZSLHFCQUFxQixrQkFBa0IsaUNBQWlDLDBCQUEwQix1QkFBdUIsNkJBQTZCLHVCQUF1Qix5QkFBeUIseUJBQXlCLG1CQUFtQixvQkFBb0IsbUZBQW1GLHVDQUF1QyxHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsVUFBVSw2RUFBNkUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksd0RBQXdELGlDQUFpQyxtQ0FBbUMsaU5BQWlOLHFCQUFxQixrQkFBa0IsaUNBQWlDLDBCQUEwQix1QkFBdUIsNkJBQTZCLHVCQUF1Qix5QkFBeUIseUJBQXlCLG1CQUFtQixvQkFBb0IsbUZBQW1GLHVDQUF1QyxHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsK0JBQStCOztBQUV4MFI7Ozs7Ozs7QUNQQSwrRDs7Ozs7O0FDQUEsZ0U7Ozs7OztBQ0FBLCtEOzs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7O1FDT0E7OztVQUdBO2NBRUE7QUFIQTs7VUFLQTthQUVBO0FBSEE7O1VBS0E7O1lBRUE7O0FBSEE7O1VBS0E7YUFHQTtBQUpBO0FBYkE7OzZCQW1CQTtvQkFDQTtxQkFDQTt5QkFDQTtvQ0FDQTtxRkFDQTtBQUNBO1dBQ0E7QUFDQTs2QkFDQTtxQkFDQTtxQkFDQTtpQ0FDQTttQkFDQTtBQUNBO1dBQ0E7QUFFQTtBQWxCQTtBQXBCQSxHOzs7Ozs7QUNOQSw0Rjs7Ozs7O0FDQUEseU07Ozs7OztBQ0FBLDBDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi52dWUnXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24udnVlJ1xuaW1wb3J0ICcuL2NvbW1vbi5sZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5zdGFsbChWdWUpIHtcbiAgICAgICAgVnVlLmNvbXBvbmVudChCdXR0b24ubmFtZSwgQnV0dG9uKVxuICAgICAgICBWdWUuY29tcG9uZW50KEljb24ubmFtZSwgSWNvbilcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tb2JpbGUvaW5kZXguanNcbiAqKi8iLCJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhbGVzcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9CdXR0b24udnVlXCIpXG5fX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZXMyMDE1JnBsdWdpbnNbXT10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vQnV0dG9uLnZ1ZVwiKVxuaWYgKF9fdnVlX3NjcmlwdF9fICYmXG4gICAgX192dWVfc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fdnVlX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIlt2dWUtbG9hZGVyXSBzcmMvbW9iaWxlL0J1dHRvbi52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9CdXR0b24udnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiLi9CdXR0b24udnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL21vYmlsZS9CdXR0b24udnVlXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL0J1dHRvbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQnV0dG9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQnV0dG9uLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4vfi9sZXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vc3JjL21vYmlsZS9CdXR0b24udnVlXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29sb3JmdWwtYnV0dG9uIHtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSwgYmxhY2spO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAuMXJlbSAuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29sb3JmdWwtYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IC42O1xcbn1cXG4uY29sb3JmdWwtYnV0dG9uLWRlZmF1bHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5jb2xvcmZ1bC1idXR0b24tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY29sb3JmdWwtYnV0dG9uLXN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb2xvcmZ1bC1idXR0b24taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY29sb3JmdWwtYnV0dG9uLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY29sb3JmdWwtYnV0dG9uLWVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy9tb2JpbGUvQnV0dG9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtFQUFrRTtFQUNsRSxjQUFjO0VBQ2QscUJBQWM7RUFBZCxxQkFBYztFQUFkLGNBQWM7RUFDZCx5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiwrQkFBMkI7TUFBM0IsMkJBQTJCO0VBQzNCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHVCQUF1QjtDQUN4QjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7Q0FDZFwiLFwiZmlsZVwiOlwiQnV0dG9uLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29sb3JmdWwtYnV0dG9uIHtcXG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSwgYmxhY2spO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAuMXJlbSAuMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb2xvcmZ1bC1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogLjY7XFxufVxcbi5jb2xvcmZ1bC1idXR0b24tZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG59XFxuLmNvbG9yZnVsLWJ1dHRvbi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN5YW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb2xvcmZ1bC1idXR0b24tc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNvbG9yZnVsLWJ1dHRvbi1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb2xvcmZ1bC1idXR0b24td2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5jb2xvcmZ1bC1idXR0b24tZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuL34vbGVzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL3NyYy9tb2JpbGUvQnV0dG9uLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCI8dGVtcGxhdGU+XG5cdDxidXR0b24gY2xhc3M9XCJjb2xvcmZ1bC1idXR0b25cIiA6Y2xhc3M9XCJvQ2xhc3NcIiA6dHlwZT1cInR5cGVcIiA6c3R5bGU9XCJvU3R5bGVcIj5cblx0XHQ8Y29sb3JmdWwtaWNvbiA6dHlwZT1cImljb25cIiA6aWY9XCJpY29uXCI+PC9jb2xvcmZ1bC1pY29uPlxuXHRcdDxzbG90Pjwvc2xvdD5cblx0PC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICdjb2xvcmZ1bC1idXR0b24nLFxuXHRwcm9wczoge1xuXHRcdGNvbG9yOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiAnZGVmYXVsdCdcblx0XHR9LFxuXHRcdHR5cGU6IFN0cmluZyxcblx0XHRpY29uOiBTdHJpbmcsXG5cdFx0c3R5bGU6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6ICgpID0+ICh7fSlcblx0XHR9LFxuXHRcdGNsYXNzOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRvQ2xhc3MoKSB7XG5cdFx0XHRjb25zdCBjb2xvciA9IHRoaXMuY29sb3Jcblx0XHRcdGxldCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzXG5cdFx0XHRpZiAoIShjb2xvci5pbmRleE9mKCcjJykgPiAtMSkpIHtcblx0XHRcdFx0Y2xhc3NOYW1lICs9ICcgY29sb3JmdWwtYnV0dG9uLScgKyBjb2xvclxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZVxuXHRcdH0sXG5cdFx0b1N0eWxlKCkge1xuXHRcdFx0Y29uc3QgY29sb3IgPSB0aGlzLmNvbG9yXG5cdFx0XHRjb25zdCBzdHlsZSA9IHRoaXMuc3R5bGVcblx0XHRcdGlmIChjb2xvci5pbmRleE9mKCcjJykgPiAtMSkge1xuXHRcdFx0XHRzdHlsZS5jb2xvciA9IGNvbG9yXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3R5bGVcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRJY29uXG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgXCJ+bW9iaWxlL3ZhcmlhYmxlc1wiO1xuXG5cbi5jb2xvcmZ1bC1idXR0b24ge1xuXHQtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUsIGJsYWNrKTtcblx0b3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4xcmVtIC4ycmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXG5cdCY6aG92ZXIge1xuXHRcdG9wYWNpdHk6IC42O1xuXHR9XG5cblx0Ji1kZWZhdWx0IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAY29sb3ItZGVmYXVsdDtcblx0XHRjb2xvcjogQGNvbG9yLW5vcm1hbC1mb250O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdH1cblxuXHQmLXByaW1hcnkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1wcmltYXJ5O1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0fVxuXG5cdCYtc3VjY2VzcyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogQGNvbG9yLXN1Y2Nlc3M7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5cblx0Ji1pbmZvIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAY29sb3ItaW5mbztcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cblxuXHQmLXdhcm5pbmcge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IEBjb2xvci13YXJuaW5nO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0fVxuXG5cdCYtZXJyb3Ige1xuXHRcdGJhY2tncm91bmQtY29sb3I6IEBjb2xvci1lcnJvcjtcblx0XHRjb2xvcjogd2hpdGU7XG5cdH1cbn1cbjwvc3R5bGU+XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBCdXR0b24udnVlPzE5MzBkNzUyXG4gKiovIiwidmFyIF9fdnVlX3NjcmlwdF9fLCBfX3Z1ZV90ZW1wbGF0ZV9fXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIWxlc3MhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vSWNvbi52dWVcIilcbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JY29uLnZ1ZVwiKVxuaWYgKF9fdnVlX3NjcmlwdF9fICYmXG4gICAgX192dWVfc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fdnVlX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIlt2dWUtbG9hZGVyXSBzcmMvbW9iaWxlL0ljb24udnVlOiBuYW1lZCBleHBvcnRzIGluICoudnVlIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtaHRtbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSWNvbi52dWVcIilcbm1vZHVsZS5leHBvcnRzID0gX192dWVfc2NyaXB0X18gfHwge31cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbmlmIChfX3Z1ZV90ZW1wbGF0ZV9fKSB7XG4odHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCIgPyAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyB8fCAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyA9IHt9KSkgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBfX3Z1ZV90ZW1wbGF0ZV9fXG59XG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCIuL0ljb24udnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL21vYmlsZS9JY29uLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9JY29uLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9JY29uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vSWNvbi52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuL34vbGVzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL3NyYy9tb2JpbGUvSWNvbi52dWVcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnY29sb3JmdWwtZm9udCc7XFxuICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuL2ZvbnRzL2ljb25mb250LmVvdFwiKSArIFwiKTtcXG4gIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4vZm9udHMvaWNvbmZvbnQuZW90XCIpICsgXCI/I2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybChcIiArIHJlcXVpcmUoXCIuL2ZvbnRzL2ljb25mb250LndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyksIHVybChcIiArIHJlcXVpcmUoXCIuL2ZvbnRzL2ljb25mb250LnR0ZlwiKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybChcIiArIHJlcXVpcmUoXCIuL2ZvbnRzL2ljb25mb250LnN2Z1wiKSArIFwiI2ljb25mb250KSBmb3JtYXQoJ3N2ZycpO1xcbiAgLyogaU9TIDQuMS0gKi9cXG59XFxuLmNvbG9yZnVsLWljb24ge1xcbiAgZm9udC1mYW1pbHk6ICdjb2xvcmZ1bC1mb250JztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG4uY29sb3JmdWwtaWNvbjpiZWZvcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5pY29uLWFkZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjAxXFxcIjtcXG59XFxuLmljb24taW5jcmVhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyMFxcXCI7XFxufVxcbi5pY29uLWludmVudG9yeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjIxXFxcIjtcXG59XFxuLmljb24tc2VhcmNoLXZvdWNoZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwMlxcXCI7XFxufVxcbi5pY29uLWltcG9ydC12b3VjaGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MDNcXFwiO1xcbn1cXG4uaWNvbi1tb25leTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjA0XFxcIjtcXG59XFxuLmljb24tcGFjay11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjE3XFxcIjtcXG59XFxuLmljb24tY2FuY2VsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MDVcXFwiO1xcbn1cXG4uaWNvbi10cmlhbmdsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjA2XFxcIjtcXG59XFxuLmljb24tc2F2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjA3XFxcIjtcXG59XFxuLmljb24tc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYwOFxcXCI7XFxufVxcbi5pY29uLWRlbGV0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjA5XFxcIjtcXG59XFxuLmljb24tc2VsZWN0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjFFXFxcIjtcXG59XFxuLmljb24tcmVwb3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MEJcXFwiO1xcbn1cXG4uaWNvbi1kZXBvc2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MjJcXFwiO1xcbn1cXG4uaWNvbi1lZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MENcXFwiO1xcbn1cXG4uaWNvbi1iYWxhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MDBcXFwiO1xcbn1cXG4uaWNvbi1hbnRpLXNldHRsZW1lbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyM1xcXCI7XFxufVxcbi5pY29uLW5ldzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjBEXFxcIjtcXG59XFxuLmljb24taG9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjBFXFxcIjtcXG59XFxuLmljb24tYnVzaW5lc3MtdGF4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzBcXFwiO1xcbn1cXG4uaWNvbi1jYWxjdWxhdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MEZcXFwiO1xcbn1cXG4uaWNvbi1wcmV2aWV3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MTBcXFwiO1xcbn1cXG4uaWNvbi11bmRldGVybWluZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjI0XFxcIjtcXG59XFxuLmljb24tbW9kaWZpY2F0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzFcXFwiO1xcbn1cXG4uaWNvbi1kZWxldGUtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjE1XFxcIjtcXG59XFxuLmljb24tY29uZmlybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjExXFxcIjtcXG59XFxuLmljb24tY3JlZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzJcXFwiO1xcbn1cXG4uaWNvbi1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjEyXFxcIjtcXG59XFxuLmljb24taW5jb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MjdcXFwiO1xcbn1cXG4uaWNvbi1jYWxlbmRhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjEzXFxcIjtcXG59XFxuLmljb24tdW5mb2xkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MUZcXFwiO1xcbn1cXG4uaWNvbi1pbml0aWFsLXZhbHVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MUNcXFwiO1xcbn1cXG4uaWNvbi1jaG9vc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxNFxcXCI7XFxufVxcbi5pY29uLWNhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzM1xcXCI7XFxufVxcbi5pY29uLXNldHRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjE2XFxcIjtcXG59XFxuLmljb24tY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRFxcXCI7XFxufVxcbi5pY29uLXRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjJEXFxcIjtcXG59XFxuLmljb24tb3RoZXItZXhwZW5zZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzNFxcXCI7XFxufVxcbi5pY29uLWNsb3NlLWl0ZW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyQlxcXCI7XFxufVxcbi5pY29uLWV4cGVuc2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MjhcXFwiO1xcbn1cXG4uaWNvbi1pbmNvbWUtZnJvbS1pbnZlc3RtZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzVcXFwiO1xcbn1cXG4uaWNvbi1hZGQtcGx1cy1maWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MEFcXFwiO1xcbn1cXG4uaWNvbi1maW5hbmNpYWwtZXhwZW5zZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzNlxcXCI7XFxufVxcbi5pY29uLWFkZC1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MThcXFwiO1xcbn1cXG4uaWNvbi10aGUtaW52b3Npbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyRlxcXCI7XFxufVxcbi5pY29uLXByb2ZpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjE5XFxcIjtcXG59XFxuLmljb24tb3RoZXItaW5jb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzdcXFwiO1xcbn1cXG4uaWNvbi1tYW5hZ2VtZW50LWZlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzOFxcXCI7XFxufVxcbi5pY29uLXB1cnNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MUFcXFwiO1xcbn1cXG4uaWNvbi1zZXR0bGVtZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MjlcXFwiO1xcbn1cXG4uaWNvbi10cmlhbC1iYWxhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MjVcXFwiO1xcbn1cXG4uaWNvbi1zZWxsaW5nLWV4cGVuc2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzlcXFwiO1xcbn1cXG4uaWNvbi1sYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjJFXFxcIjtcXG59XFxuLmljb24tYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjFCXFxcIjtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy9tb2JpbGUvSWNvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsbUNBQStCO0VBQy9CLDRNQUE2TTtFQUM3TSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsbUNBQW1DO0NBQ3BDO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEJcIixcImZpbGVcIjpcIkljb24udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdjb2xvcmZ1bC1mb250JztcXG4gIHNyYzogdXJsKCdmb250cy9pY29uZm9udC5lb3QnKTtcXG4gIHNyYzogdXJsKCdmb250cy9pY29uZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2ljb25mb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCdmb250cy9pY29uZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvaWNvbmZvbnQuc3ZnI2ljb25mb250JykgZm9ybWF0KCdzdmcnKTtcXG4gIC8qIGlPUyA0LjEtICovXFxufVxcbi5jb2xvcmZ1bC1pY29uIHtcXG4gIGZvbnQtZmFtaWx5OiAnY29sb3JmdWwtZm9udCc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuLmNvbG9yZnVsLWljb246YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaWNvbi1hZGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwMVxcXCI7XFxufVxcbi5pY29uLWluY3JlYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MjBcXFwiO1xcbn1cXG4uaWNvbi1pbnZlbnRvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYyMVxcXCI7XFxufVxcbi5pY29uLXNlYXJjaC12b3VjaGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MDJcXFwiO1xcbn1cXG4uaWNvbi1pbXBvcnQtdm91Y2hlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjAzXFxcIjtcXG59XFxuLmljb24tbW9uZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwNFxcXCI7XFxufVxcbi5pY29uLXBhY2stdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxN1xcXCI7XFxufVxcbi5pY29uLWNhbmNlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjA1XFxcIjtcXG59XFxuLmljb24tdHJpYW5nbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwNlxcXCI7XFxufVxcbi5pY29uLXNhdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwN1xcXCI7XFxufVxcbi5pY29uLXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MDhcXFwiO1xcbn1cXG4uaWNvbi1kZWxldGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwOVxcXCI7XFxufVxcbi5pY29uLXNlbGVjdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxZVxcXCI7XFxufVxcbi5pY29uLXJlcG9ydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjBiXFxcIjtcXG59XFxuLmljb24tZGVwb3NpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjIyXFxcIjtcXG59XFxuLmljb24tZWRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjBjXFxcIjtcXG59XFxuLmljb24tYmFsYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjAwXFxcIjtcXG59XFxuLmljb24tYW50aS1zZXR0bGVtZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MjNcXFwiO1xcbn1cXG4uaWNvbi1uZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwZFxcXCI7XFxufVxcbi5pY29uLWhvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwZVxcXCI7XFxufVxcbi5pY29uLWJ1c2luZXNzLXRheDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjMwXFxcIjtcXG59XFxuLmljb24tY2FsY3VsYXRvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjBmXFxcIjtcXG59XFxuLmljb24tcHJldmlldzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjEwXFxcIjtcXG59XFxuLmljb24tdW5kZXRlcm1pbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYyNFxcXCI7XFxufVxcbi5pY29uLW1vZGlmaWNhdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjMxXFxcIjtcXG59XFxuLmljb24tZGVsZXRlLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxNVxcXCI7XFxufVxcbi5pY29uLWNvbmZpcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxMVxcXCI7XFxufVxcbi5pY29uLWNyZWRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjMyXFxcIjtcXG59XFxuLmljb24tYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxMlxcXCI7XFxufVxcbi5pY29uLWluY29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjI3XFxcIjtcXG59XFxuLmljb24tY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxM1xcXCI7XFxufVxcbi5pY29uLXVuZm9sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjFmXFxcIjtcXG59XFxuLmljb24taW5pdGlhbC12YWx1ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjFjXFxcIjtcXG59XFxuLmljb24tY2hvb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MTRcXFwiO1xcbn1cXG4uaWNvbi1jYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MzNcXFwiO1xcbn1cXG4uaWNvbi1zZXR0bGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxNlxcXCI7XFxufVxcbi5pY29uLWNsb3NlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MWRcXFwiO1xcbn1cXG4uaWNvbi10YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYyZFxcXCI7XFxufVxcbi5pY29uLW90aGVyLWV4cGVuc2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MzRcXFwiO1xcbn1cXG4uaWNvbi1jbG9zZS1pdGVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MmJcXFwiO1xcbn1cXG4uaWNvbi1leHBlbnNlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjI4XFxcIjtcXG59XFxuLmljb24taW5jb21lLWZyb20taW52ZXN0bWVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjM1XFxcIjtcXG59XFxuLmljb24tYWRkLXBsdXMtZmlsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjBhXFxcIjtcXG59XFxuLmljb24tZmluYW5jaWFsLWV4cGVuc2VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MzZcXFwiO1xcbn1cXG4uaWNvbi1hZGQtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjE4XFxcIjtcXG59XFxuLmljb24tdGhlLWludm9zaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MmZcXFwiO1xcbn1cXG4uaWNvbi1wcm9maXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxOVxcXCI7XFxufVxcbi5pY29uLW90aGVyLWluY29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjM3XFxcIjtcXG59XFxuLmljb24tbWFuYWdlbWVudC1mZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MzhcXFwiO1xcbn1cXG4uaWNvbi1wdXJzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjFhXFxcIjtcXG59XFxuLmljb24tc2V0dGxlbWVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjI5XFxcIjtcXG59XFxuLmljb24tdHJpYWwtYmFsYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjI1XFxcIjtcXG59XFxuLmljb24tc2VsbGluZy1leHBlbnNlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjM5XFxcIjtcXG59XFxuLmljb24tbGFiZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYyZVxcXCI7XFxufVxcbi5pY29uLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxYlxcXCI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4vfi9sZXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vc3JjL21vYmlsZS9JY29uLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9pY29uZm9udC5lb3RcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL21vYmlsZS9mb250cy9pY29uZm9udC5lb3RcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvaWNvbmZvbnQud29mZlwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbW9iaWxlL2ZvbnRzL2ljb25mb250LndvZmZcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvaWNvbmZvbnQudHRmXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9tb2JpbGUvZm9udHMvaWNvbmZvbnQudHRmXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL2ljb25mb250LnN2Z1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbW9iaWxlL2ZvbnRzL2ljb25mb250LnN2Z1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cblx0PGkgY2xhc3M9XCJjb2xvcmZ1bC1pY29uXCIgOmNsYXNzPVwib0NsYXNzXCIgOnN0eWxlPVwib1N0eWxlXCI+PC9pPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2NvbG9yZnVsLWljb24nLFxuXHRwcm9wczoge1xuXHRcdHR5cGU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0fSxcblx0XHRjb2xvcjoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ2RlZmF1bHQnXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdDogKCkgPT4gKHt9KVxuXHRcdH0sXG5cdFx0Y2xhc3M6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdG9DbGFzcygpIHtcblx0XHRcdGNvbnN0IHR5cGUgPSB0aGlzLnR5cGVcblx0XHRcdGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvclxuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3Ncblx0XHRcdGlmICghKGNvbG9yLmluZGV4T2YoJyMnKSA+IC0xKSkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBbY2xhc3NOYW1lLCAnY29sb3JmdWwtaWNvbi0nICsgY29sb3IsICdjb2xvcmZ1bC1pY29uLScgKyB0eXBlXS5qb2luKCcgJylcblx0XHRcdH1cblx0XHRcdHJldHVybiBjbGFzc05hbWVcblx0XHR9LFxuXHRcdG9TdHlsZSgpIHtcblx0XHRcdGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvclxuXHRcdFx0Y29uc3Qgc3R5bGUgPSB0aGlzLnN0eWxlXG5cdFx0XHRpZiAoY29sb3IuaW5kZXhPZignIycpID4gLTEpIHtcblx0XHRcdFx0c3R5bGUuY29sb3IgPSBjb2xvclxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0eWxlXG5cdFx0fVxuXHR9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnY29sb3JmdWwtZm9udCc7XG4gICAgc3JjOiB1cmwoJy4vZm9udHMvaWNvbmZvbnQuZW90Jyk7XG4gICAgc3JjOiB1cmwoJy4vZm9udHMvaWNvbmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgIHVybCgnLi9mb250cy9pY29uZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICB1cmwoJy4vZm9udHMvaWNvbmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgdXJsKCcuL2ZvbnRzL2ljb25mb250LnN2ZyNpY29uZm9udCcpIGZvcm1hdCgnc3ZnJyk7IC8qIGlPUyA0LjEtICovXG59XG5cbi5jb2xvcmZ1bC1pY29uIHtcblx0Zm9udC1mYW1pbHk6ICdjb2xvcmZ1bC1mb250Jztcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uY29sb3JmdWwtaWNvbjpiZWZvcmUgeyBkaXNwbGF5IDogYmxvY2s7IH1cblxuLmljb24tYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjAxXCI7IH1cbi5pY29uLWluY3JlYXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjIwXCI7IH1cbi5pY29uLWludmVudG9yeTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYyMVwiOyB9XG4uaWNvbi1zZWFyY2gtdm91Y2hlcjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwMlwiOyB9XG4uaWNvbi1pbXBvcnQtdm91Y2hlcjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwM1wiOyB9XG4uaWNvbi1tb25leTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwNFwiOyB9XG4uaWNvbi1wYWNrLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjE3XCI7IH1cbi5pY29uLWNhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwNVwiOyB9XG4uaWNvbi10cmlhbmdsZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwNlwiOyB9XG4uaWNvbi1zYXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjA3XCI7IH1cbi5pY29uLXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjA4XCI7IH1cbi5pY29uLWRlbGV0ZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwOVwiOyB9XG4uaWNvbi1zZWxlY3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjFlXCI7IH1cbi5pY29uLXJlcG9ydDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwYlwiOyB9XG4uaWNvbi1kZXBvc2l0OmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjIyXCI7IH1cbi5pY29uLWVkaXQ6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MGNcIjsgfVxuLmljb24tYmFsYW5jZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYwMFwiOyB9XG4uaWNvbi1hbnRpLXNldHRsZW1lbnQ6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MjNcIjsgfVxuLmljb24tbmV3OmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjBkXCI7IH1cbi5pY29uLWhvbWU6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MGVcIjsgfVxuLmljb24tYnVzaW5lc3MtdGF4OmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjMwXCI7IH1cbi5pY29uLWNhbGN1bGF0b3I6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MGZcIjsgfVxuLmljb24tcHJldmlldzpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYxMFwiOyB9XG4uaWNvbi11bmRldGVybWluZDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYyNFwiOyB9XG4uaWNvbi1tb2RpZmljYXRpb246YmVmb3JlIHsgY29udGVudDogXCJcXGU2MzFcIjsgfVxuLmljb24tZGVsZXRlLXBsdXM6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MTVcIjsgfVxuLmljb24tY29uZmlybTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYxMVwiOyB9XG4uaWNvbi1jcmVkaXQ6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MzJcIjsgfVxuLmljb24tYXJyb3ctcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MTJcIjsgfVxuLmljb24taW5jb21lOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjI3XCI7IH1cbi5pY29uLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjEzXCI7IH1cbi5pY29uLXVuZm9sZDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYxZlwiOyB9XG4uaWNvbi1pbml0aWFsLXZhbHVlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjFjXCI7IH1cbi5pY29uLWNob29zZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYxNFwiOyB9XG4uaWNvbi1jYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjMzXCI7IH1cbi5pY29uLXNldHRsZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYxNlwiOyB9XG4uaWNvbi1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYxZFwiOyB9XG4uaWNvbi10YWc6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MmRcIjsgfVxuLmljb24tb3RoZXItZXhwZW5zZXM6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MzRcIjsgfVxuLmljb24tY2xvc2UtaXRlbTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYyYlwiOyB9XG4uaWNvbi1leHBlbnNlczpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYyOFwiOyB9XG4uaWNvbi1pbmNvbWUtZnJvbS1pbnZlc3RtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjM1XCI7IH1cbi5pY29uLWFkZC1wbHVzLWZpbGw6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MGFcIjsgfVxuLmljb24tZmluYW5jaWFsLWV4cGVuc2VzOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjM2XCI7IH1cbi5pY29uLWFkZC1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjE4XCI7IH1cbi5pY29uLXRoZS1pbnZvc2luZzpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYyZlwiOyB9XG4uaWNvbi1wcm9maXQ6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MTlcIjsgfVxuLmljb24tb3RoZXItaW5jb21lOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjM3XCI7IH1cbi5pY29uLW1hbmFnZW1lbnQtZmVldDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYzOFwiOyB9XG4uaWNvbi1wdXJzZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYxYVwiOyB9XG4uaWNvbi1zZXR0bGVtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjI5XCI7IH1cbi5pY29uLXRyaWFsLWJhbGFuY2U6YmVmb3JlIHsgY29udGVudDogXCJcXGU2MjVcIjsgfVxuLmljb24tc2VsbGluZy1leHBlbnNlczpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYzOVwiOyB9XG4uaWNvbi1sYWJlbDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTYyZVwiOyB9XG4uaWNvbi1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlNjFiXCI7IH1cbjwvc3R5bGU+XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBJY29uLnZ1ZT82ZDk1M2QxZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48aSBjbGFzcz1cXFwiY29sb3JmdWwtaWNvblxcXCIgOmNsYXNzPVxcXCJvQ2xhc3NcXFwiIDpzdHlsZT1cXFwib1N0eWxlXFxcIj48L2k+XFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLWh0bWwtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvbW9iaWxlL0ljb24udnVlXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48YnV0dG9uIGNsYXNzPVxcXCJjb2xvcmZ1bC1idXR0b25cXFwiIDpjbGFzcz1cXFwib0NsYXNzXFxcIiA6dHlwZT1cXFwidHlwZVxcXCIgOnN0eWxlPVxcXCJvU3R5bGVcXFwiPlxcblxcdDxjb2xvcmZ1bC1pY29uIDp0eXBlPVxcXCJpY29uXFxcIiA6aWY9XFxcImljb25cXFwiPjwvY29sb3JmdWwtaWNvbj5cXG5cXHQ8c2xvdD48L3Nsb3Q+XFxuPC9idXR0b24+XFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLWh0bWwtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvbW9iaWxlL0J1dHRvbi52dWVcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL21vYmlsZS9jb21tb24ubGVzc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9