var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var jquery = { exports: {} };
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function(module) {
  (function(global2, factory) {
    {
      module.exports = global2.document ? factory(global2, true) : function(w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(w);
      };
    }
  })(typeof window !== "undefined" ? window : commonjsGlobal, function(window2, noGlobal) {
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice2 = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf2 = arr.indexOf;
    var class2type = {};
    var toString2 = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction3 = function isFunction4(obj) {
      return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow2(obj) {
      return obj != null && obj === obj.window;
    };
    var document2 = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node2, doc) {
      doc = doc || document2;
      var i, val, script = doc.createElement("script");
      script.text = code;
      if (node2) {
        for (i in preservedScriptAttributes) {
          val = node2[i] || node2.getAttribute && node2.getAttribute(i);
          if (val) {
            script.setAttribute(i, val);
          }
        }
      }
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString2.call(obj)] || "object" : typeof obj;
    }
    var version = "3.6.0", jQuery = function(selector, context) {
      return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
      jquery: version,
      constructor: jQuery,
      length: 0,
      toArray: function() {
        return slice2.call(this);
      },
      get: function(num) {
        if (num == null) {
          return slice2.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      pushStack: function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      each: function(callback) {
        return jQuery.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery.map(this, function(elem, i) {
          return callback.call(elem, i, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice2.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i) {
          return (i + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i) {
          return i % 2;
        }));
      },
      eq: function(i) {
        var len = this.length, j = +i + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push,
      sort: arr.sort,
      splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
      var options, name2, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length2 = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (typeof target !== "object" && !isFunction3(target)) {
        target = {};
      }
      if (i === length2) {
        target = this;
        i--;
      }
      for (; i < length2; i++) {
        if ((options = arguments[i]) != null) {
          for (name2 in options) {
            copy = options[name2];
            if (name2 === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name2];
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;
              target[name2] = jQuery.extend(deep, clone, copy);
            } else if (copy !== void 0) {
              target[name2] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {
      },
      isPlainObject: function(obj) {
        var proto2, Ctor;
        if (!obj || toString2.call(obj) !== "[object Object]") {
          return false;
        }
        proto2 = getProto(obj);
        if (!proto2) {
          return true;
        }
        Ctor = hasOwn.call(proto2, "constructor") && proto2.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name2;
        for (name2 in obj) {
          return false;
        }
        return true;
      },
      globalEval: function(code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function(obj, callback) {
        var length2, i = 0;
        if (isArrayLike(obj)) {
          length2 = obj.length;
          for (; i < length2; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
          } else {
            push.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem, arr2, i) {
        return arr2 == null ? -1 : indexOf2.call(arr2, elem, i);
      },
      merge: function(first, second) {
        var len = +second.length, j = 0, i = first.length;
        for (; j < len; j++) {
          first[i++] = second[j];
        }
        first.length = i;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches = [], i = 0, length2 = elems.length, callbackExpect = !invert;
        for (; i < length2; i++) {
          callbackInverse = !callback(elems[i], i);
          if (callbackInverse !== callbackExpect) {
            matches.push(elems[i]);
          }
        }
        return matches;
      },
      map: function(elems, callback, arg) {
        var length2, value, i = 0, ret = [];
        if (isArrayLike(elems)) {
          length2 = elems.length;
          for (; i < length2; i++) {
            value = callback(elems[i], i, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i in elems) {
            value = callback(elems[i], i, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      guid: 1,
      support
    });
    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name2) {
      class2type["[object " + name2 + "]"] = name2.toLowerCase();
    });
    function isArrayLike(obj) {
      var length2 = !!obj && "length" in obj && obj.length, type = toType(obj);
      if (isFunction3(obj) || isWindow(obj)) {
        return false;
      }
      return type === "array" || length2 === 0 || typeof length2 === "number" && length2 > 0 && length2 - 1 in obj;
    }
    var Sizzle = function(window3) {
      var i, support2, Expr, getText, isXML, tokenize, compile3, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
        if (a === b) {
          hasDuplicate = true;
        }
        return 0;
      }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice3 = arr2.slice, indexOf3 = function(list, elem) {
        var i2 = 0, len = list.length;
        for (; i2 < len; i2++) {
          if (list[i2] === elem) {
            return i2;
          }
        }
        return -1;
      }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
        "ID": new RegExp("^#(" + identifier + ")"),
        "CLASS": new RegExp("^\\.(" + identifier + ")"),
        "TAG": new RegExp("^(" + identifier + "|[*])"),
        "ATTR": new RegExp("^" + attributes),
        "PSEUDO": new RegExp("^" + pseudos),
        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
        "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape2, nonHex) {
        var high = "0x" + escape2.slice(1) - 65536;
        return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "\uFFFD";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }, unloadHandler = function() {
        setDocument();
      }, inDisabledFieldset = addCombinator(function(elem) {
        return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
      }, { dir: "parentNode", next: "legend" });
      try {
        push2.apply(arr2 = slice3.call(preferredDoc.childNodes), preferredDoc.childNodes);
        arr2[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push2 = {
          apply: arr2.length ? function(target, els) {
            pushNative.apply(target, slice3.call(els));
          } : function(target, els) {
            var j = target.length, i2 = 0;
            while (target[j++] = els[i2++]) {
            }
            target.length = j - 1;
          }
        };
      }
      function Sizzle2(selector, context, results, seed) {
        var m, i2, elem, nid, match2, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
        results = results || [];
        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
          return results;
        }
        if (!seed) {
          setDocument(context);
          context = context || document3;
          if (documentIsHTML) {
            if (nodeType !== 11 && (match2 = rquickExpr2.exec(selector))) {
              if (m = match2[1]) {
                if (nodeType === 9) {
                  if (elem = context.getElementById(m)) {
                    if (elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  } else {
                    return results;
                  }
                } else {
                  if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                }
              } else if (match2[2]) {
                push2.apply(results, context.getElementsByTagName(selector));
                return results;
              } else if ((m = match2[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                push2.apply(results, context.getElementsByClassName(m));
                return results;
              }
            }
            if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
              newSelector = selector;
              newContext = context;
              if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                if (newContext !== context || !support2.scope) {
                  if (nid = context.getAttribute("id")) {
                    nid = nid.replace(rcssescape, fcssescape);
                  } else {
                    context.setAttribute("id", nid = expando);
                  }
                }
                groups = tokenize(selector);
                i2 = groups.length;
                while (i2--) {
                  groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                }
                newSelector = groups.join(",");
              }
              try {
                push2.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {
                nonnativeSelectorCache(selector, true);
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
        return select(selector.replace(rtrim2, "$1"), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          if (keys.push(key + " ") > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return cache[key + " "] = value;
        }
        return cache;
      }
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      function assert(fn) {
        var el = document3.createElement("fieldset");
        try {
          return !!fn(el);
        } catch (e) {
          return false;
        } finally {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
          el = null;
        }
      }
      function addHandle(attrs, handler) {
        var arr3 = attrs.split("|"), i2 = arr3.length;
        while (i2--) {
          Expr.attrHandle[arr3[i2]] = handler;
        }
      }
      function siblingCheck(a, b) {
        var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
        if (diff) {
          return diff;
        }
        if (cur) {
          while (cur = cur.nextSibling) {
            if (cur === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function createInputPseudo(type) {
        return function(elem) {
          var name2 = elem.nodeName.toLowerCase();
          return name2 === "input" && elem.type === type;
        };
      }
      function createButtonPseudo(type) {
        return function(elem) {
          var name2 = elem.nodeName.toLowerCase();
          return (name2 === "input" || name2 === "button") && elem.type === type;
        };
      }
      function createDisabledPseudo(disabled) {
        return function(elem) {
          if ("form" in elem) {
            if (elem.parentNode && elem.disabled === false) {
              if ("label" in elem) {
                if ("label" in elem.parentNode) {
                  return elem.parentNode.disabled === disabled;
                } else {
                  return elem.disabled === disabled;
                }
              }
              return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
            }
            return elem.disabled === disabled;
          } else if ("label" in elem) {
            return elem.disabled === disabled;
          }
          return false;
        };
      }
      function createPositionalPseudo(fn) {
        return markFunction(function(argument) {
          argument = +argument;
          return markFunction(function(seed, matches2) {
            var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
            while (i2--) {
              if (seed[j = matchIndexes[i2]]) {
                seed[j] = !(matches2[j] = seed[j]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
      }
      support2 = Sizzle2.support = {};
      isXML = Sizzle2.isXML = function(elem) {
        var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
        return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
      };
      setDocument = Sizzle2.setDocument = function(node2) {
        var hasCompare, subWindow, doc = node2 ? node2.ownerDocument || node2 : preferredDoc;
        if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
          return document3;
        }
        document3 = doc;
        docElem = document3.documentElement;
        documentIsHTML = !isXML(document3);
        if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
          if (subWindow.addEventListener) {
            subWindow.addEventListener("unload", unloadHandler, false);
          } else if (subWindow.attachEvent) {
            subWindow.attachEvent("onunload", unloadHandler);
          }
        }
        support2.scope = assert(function(el) {
          docElem.appendChild(el).appendChild(document3.createElement("div"));
          return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
        });
        support2.attributes = assert(function(el) {
          el.className = "i";
          return !el.getAttribute("className");
        });
        support2.getElementsByTagName = assert(function(el) {
          el.appendChild(document3.createComment(""));
          return !el.getElementsByTagName("*").length;
        });
        support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
        support2.getById = assert(function(el) {
          docElem.appendChild(el).id = expando;
          return !document3.getElementsByName || !document3.getElementsByName(expando).length;
        });
        if (support2.getById) {
          Expr.filter["ID"] = function(id2) {
            var attrId = id2.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
          Expr.find["ID"] = function(id2, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var elem = context.getElementById(id2);
              return elem ? [elem] : [];
            }
          };
        } else {
          Expr.filter["ID"] = function(id2) {
            var attrId = id2.replace(runescape, funescape);
            return function(elem) {
              var node3 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
              return node3 && node3.value === attrId;
            };
          };
          Expr.find["ID"] = function(id2, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var node3, i2, elems, elem = context.getElementById(id2);
              if (elem) {
                node3 = elem.getAttributeNode("id");
                if (node3 && node3.value === id2) {
                  return [elem];
                }
                elems = context.getElementsByName(id2);
                i2 = 0;
                while (elem = elems[i2++]) {
                  node3 = elem.getAttributeNode("id");
                  if (node3 && node3.value === id2) {
                    return [elem];
                  }
                }
              }
              return [];
            }
          };
        }
        Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else if (support2.qsa) {
            return context.querySelectorAll(tag);
          }
        } : function(tag, context) {
          var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
          if (tag === "*") {
            while (elem = results[i2++]) {
              if (elem.nodeType === 1) {
                tmp.push(elem);
              }
            }
            return tmp;
          }
          return results;
        };
        Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };
        rbuggyMatches = [];
        rbuggyQSA = [];
        if (support2.qsa = rnative.test(document3.querySelectorAll)) {
          assert(function(el) {
            var input;
            docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (el.querySelectorAll("[msallowcapture^='']").length) {
              rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
            }
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            el.querySelectorAll("\\\f");
            rbuggyQSA.push("[\\r\\n\\f]");
          });
          assert(function(el) {
            el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            if (el.querySelectorAll("[name=d]").length) {
              rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
            }
            if (el.querySelectorAll(":enabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            docElem.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            el.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          });
        }
        if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
          assert(function(el) {
            support2.disconnectedMatch = matches.call(el, "*");
            matches.call(el, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          });
        }
        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
        hasCompare = rnative.test(docElem.compareDocumentPosition);
        contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
          var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function(a, b) {
          if (b) {
            while (b = b.parentNode) {
              if (b === a) {
                return true;
              }
            }
          }
          return false;
        };
        sortOrder = hasCompare ? function(a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if (compare) {
            return compare;
          }
          compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
          if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
            if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
              return -1;
            }
            if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
              return 1;
            }
            return sortInput ? indexOf3(sortInput, a) - indexOf3(sortInput, b) : 0;
          }
          return compare & 4 ? -1 : 1;
        } : function(a, b) {
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }
          var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
          if (!aup || !bup) {
            return a == document3 ? -1 : b == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf3(sortInput, a) - indexOf3(sortInput, b) : 0;
          } else if (aup === bup) {
            return siblingCheck(a, b);
          }
          cur = a;
          while (cur = cur.parentNode) {
            ap.unshift(cur);
          }
          cur = b;
          while (cur = cur.parentNode) {
            bp.unshift(cur);
          }
          while (ap[i2] === bp[i2]) {
            i2++;
          }
          return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
        };
        return document3;
      };
      Sizzle2.matches = function(expr, elements) {
        return Sizzle2(expr, null, null, elements);
      };
      Sizzle2.matchesSelector = function(elem, expr) {
        setDocument(elem);
        if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
            nonnativeSelectorCache(expr, true);
          }
        }
        return Sizzle2(expr, document3, null, [elem]).length > 0;
      };
      Sizzle2.contains = function(context, elem) {
        if ((context.ownerDocument || context) != document3) {
          setDocument(context);
        }
        return contains(context, elem);
      };
      Sizzle2.attr = function(elem, name2) {
        if ((elem.ownerDocument || elem) != document3) {
          setDocument(elem);
        }
        var fn = Expr.attrHandle[name2.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name2.toLowerCase()) ? fn(elem, name2, !documentIsHTML) : void 0;
        return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name2) : (val = elem.getAttributeNode(name2)) && val.specified ? val.value : null;
      };
      Sizzle2.escape = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      Sizzle2.error = function(msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      Sizzle2.uniqueSort = function(results) {
        var elem, duplicates = [], j = 0, i2 = 0;
        hasDuplicate = !support2.detectDuplicates;
        sortInput = !support2.sortStable && results.slice(0);
        results.sort(sortOrder);
        if (hasDuplicate) {
          while (elem = results[i2++]) {
            if (elem === results[i2]) {
              j = duplicates.push(i2);
            }
          }
          while (j--) {
            results.splice(duplicates[j], 1);
          }
        }
        sortInput = null;
        return results;
      };
      getText = Sizzle2.getText = function(elem) {
        var node2, ret = "", i2 = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node2 = elem[i2++]) {
            ret += getText(node2);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          if (typeof elem.textContent === "string") {
            return elem.textContent;
          } else {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              ret += getText(elem);
            }
          }
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      };
      Expr = Sizzle2.selectors = {
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: true },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: true },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          "ATTR": function(match2) {
            match2[1] = match2[1].replace(runescape, funescape);
            match2[3] = (match2[3] || match2[4] || match2[5] || "").replace(runescape, funescape);
            if (match2[2] === "~=") {
              match2[3] = " " + match2[3] + " ";
            }
            return match2.slice(0, 4);
          },
          "CHILD": function(match2) {
            match2[1] = match2[1].toLowerCase();
            if (match2[1].slice(0, 3) === "nth") {
              if (!match2[3]) {
                Sizzle2.error(match2[0]);
              }
              match2[4] = +(match2[4] ? match2[5] + (match2[6] || 1) : 2 * (match2[3] === "even" || match2[3] === "odd"));
              match2[5] = +(match2[7] + match2[8] || match2[3] === "odd");
            } else if (match2[3]) {
              Sizzle2.error(match2[0]);
            }
            return match2;
          },
          "PSEUDO": function(match2) {
            var excess, unquoted = !match2[6] && match2[2];
            if (matchExpr["CHILD"].test(match2[0])) {
              return null;
            }
            if (match2[3]) {
              match2[2] = match2[4] || match2[5] || "";
            } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
              match2[0] = match2[0].slice(0, excess);
              match2[2] = unquoted.slice(0, excess);
            }
            return match2.slice(0, 3);
          }
        },
        filter: {
          "TAG": function(nodeNameSelector) {
            var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ? function() {
              return true;
            } : function(elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
            };
          },
          "CLASS": function(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
              return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
            });
          },
          "ATTR": function(name2, operator, check) {
            return function(elem) {
              var result = Sizzle2.attr(elem, name2);
              if (result == null) {
                return operator === "!=";
              }
              if (!operator) {
                return true;
              }
              result += "";
              return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            };
          },
          "CHILD": function(type, what, _argument, first, last) {
            var simple2 = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
            return first === 1 && last === 0 ? function(elem) {
              return !!elem.parentNode;
            } : function(elem, _context, xml2) {
              var cache, uniqueCache, outerCache, node2, nodeIndex, start, dir2 = simple2 !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name2 = ofType && elem.nodeName.toLowerCase(), useCache = !xml2 && !ofType, diff = false;
              if (parent) {
                if (simple2) {
                  while (dir2) {
                    node2 = elem;
                    while (node2 = node2[dir2]) {
                      if (ofType ? node2.nodeName.toLowerCase() === name2 : node2.nodeType === 1) {
                        return false;
                      }
                    }
                    start = dir2 = type === "only" && !start && "nextSibling";
                  }
                  return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                  node2 = parent;
                  outerCache = node2[expando] || (node2[expando] = {});
                  uniqueCache = outerCache[node2.uniqueID] || (outerCache[node2.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node2 = nodeIndex && parent.childNodes[nodeIndex];
                  while (node2 = ++nodeIndex && node2 && node2[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                    if (node2.nodeType === 1 && ++diff && node2 === elem) {
                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (useCache) {
                    node2 = elem;
                    outerCache = node2[expando] || (node2[expando] = {});
                    uniqueCache = outerCache[node2.uniqueID] || (outerCache[node2.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex;
                  }
                  if (diff === false) {
                    while (node2 = ++nodeIndex && node2 && node2[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                      if ((ofType ? node2.nodeName.toLowerCase() === name2 : node2.nodeType === 1) && ++diff) {
                        if (useCache) {
                          outerCache = node2[expando] || (node2[expando] = {});
                          uniqueCache = outerCache[node2.uniqueID] || (outerCache[node2.uniqueID] = {});
                          uniqueCache[type] = [dirruns, diff];
                        }
                        if (node2 === elem) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff -= last;
                return diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          "PSEUDO": function(pseudo, argument) {
            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
            if (fn[expando]) {
              return fn(argument);
            }
            if (fn.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                var idx, matched = fn(seed, argument), i2 = matched.length;
                while (i2--) {
                  idx = indexOf3(seed, matched[i2]);
                  seed[idx] = !(matches2[idx] = matched[i2]);
                }
              }) : function(elem) {
                return fn(elem, 0, args);
              };
            }
            return fn;
          }
        },
        pseudos: {
          "not": markFunction(function(selector) {
            var input = [], results = [], matcher = compile3(selector.replace(rtrim2, "$1"));
            return matcher[expando] ? markFunction(function(seed, matches2, _context, xml2) {
              var elem, unmatched = matcher(seed, null, xml2, []), i2 = seed.length;
              while (i2--) {
                if (elem = unmatched[i2]) {
                  seed[i2] = !(matches2[i2] = elem);
                }
              }
            }) : function(elem, _context, xml2) {
              input[0] = elem;
              matcher(input, null, xml2, results);
              input[0] = null;
              return !results.pop();
            };
          }),
          "has": markFunction(function(selector) {
            return function(elem) {
              return Sizzle2(selector, elem).length > 0;
            };
          }),
          "contains": markFunction(function(text) {
            text = text.replace(runescape, funescape);
            return function(elem) {
              return (elem.textContent || getText(elem)).indexOf(text) > -1;
            };
          }),
          "lang": markFunction(function(lang) {
            if (!ridentifier.test(lang || "")) {
              Sizzle2.error("unsupported lang: " + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),
          "target": function(elem) {
            var hash = window3.location && window3.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          "root": function(elem) {
            return elem === docElem;
          },
          "focus": function(elem) {
            return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          "enabled": createDisabledPseudo(false),
          "disabled": createDisabledPseudo(true),
          "checked": function(elem) {
            var nodeName2 = elem.nodeName.toLowerCase();
            return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
          },
          "selected": function(elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          "empty": function(elem) {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          "parent": function(elem) {
            return !Expr.pseudos["empty"](elem);
          },
          "header": function(elem) {
            return rheader.test(elem.nodeName);
          },
          "input": function(elem) {
            return rinputs.test(elem.nodeName);
          },
          "button": function(elem) {
            var name2 = elem.nodeName.toLowerCase();
            return name2 === "input" && elem.type === "button" || name2 === "button";
          },
          "text": function(elem) {
            var attr2;
            return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr2 = elem.getAttribute("type")) == null || attr2.toLowerCase() === "text");
          },
          "first": createPositionalPseudo(function() {
            return [0];
          }),
          "last": createPositionalPseudo(function(_matchIndexes, length2) {
            return [length2 - 1];
          }),
          "eq": createPositionalPseudo(function(_matchIndexes, length2, argument) {
            return [argument < 0 ? argument + length2 : argument];
          }),
          "even": createPositionalPseudo(function(matchIndexes, length2) {
            var i2 = 0;
            for (; i2 < length2; i2 += 2) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          }),
          "odd": createPositionalPseudo(function(matchIndexes, length2) {
            var i2 = 1;
            for (; i2 < length2; i2 += 2) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          }),
          "lt": createPositionalPseudo(function(matchIndexes, length2, argument) {
            var i2 = argument < 0 ? argument + length2 : argument > length2 ? length2 : argument;
            for (; --i2 >= 0; ) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          }),
          "gt": createPositionalPseudo(function(matchIndexes, length2, argument) {
            var i2 = argument < 0 ? argument + length2 : argument;
            for (; ++i2 < length2; ) {
              matchIndexes.push(i2);
            }
            return matchIndexes;
          })
        }
      };
      Expr.pseudos["nth"] = Expr.pseudos["eq"];
      for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
        Expr.pseudos[i] = createInputPseudo(i);
      }
      for (i in { submit: true, reset: true }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }
      function setFilters() {
      }
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();
      tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
        var matched, match2, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match2 = rcomma.exec(soFar))) {
            if (match2) {
              soFar = soFar.slice(match2[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if (match2 = rcombinators.exec(soFar)) {
            matched = match2.shift();
            tokens.push({
              value: matched,
              type: match2[0].replace(rtrim2, " ")
            });
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if ((match2 = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match2 = preFilters[type](match2)))) {
              matched = match2.shift();
              tokens.push({
                value: matched,
                type,
                matches: match2
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
      };
      function toSelector(tokens) {
        var i2 = 0, len = tokens.length, selector = "";
        for (; i2 < len; i2++) {
          selector += tokens[i2].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base2) {
        var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base2 && key === "parentNode", doneName = done++;
        return combinator.first ? function(elem, context, xml2) {
          while (elem = elem[dir2]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml2);
            }
          }
          return false;
        } : function(elem, context, xml2) {
          var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
          if (xml2) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml2)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                if (skip && skip === elem.nodeName.toLowerCase()) {
                  elem = elem[dir2] || elem;
                } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  uniqueCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml2)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml2) {
          var i2 = matchers.length;
          while (i2--) {
            if (!matchers[i2](elem, context, xml2)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function multipleContexts(selector, contexts, results) {
        var i2 = 0, len = contexts.length;
        for (; i2 < len; i2++) {
          Sizzle2(selector, contexts[i2], results);
        }
        return results;
      }
      function condense(unmatched, map2, filter2, context, xml2) {
        var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map2 != null;
        for (; i2 < len; i2++) {
          if (elem = unmatched[i2]) {
            if (!filter2 || filter2(elem, context, xml2)) {
              newUnmatched.push(elem);
              if (mapped) {
                map2.push(i2);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function(seed, results, context, xml2) {
          var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml2) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
          if (matcher) {
            matcher(matcherIn, matcherOut, context, xml2);
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml2);
            i2 = temp.length;
            while (i2--) {
              if (elem = temp[i2]) {
                matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i2 = matcherOut.length;
                while (i2--) {
                  if (elem = matcherOut[i2]) {
                    temp.push(matcherIn[i2] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml2);
              }
              i2 = matcherOut.length;
              while (i2--) {
                if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf3(seed, elem) : preMap[i2]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
            if (postFinder) {
              postFinder(null, results, matcherOut, xml2);
            } else {
              push2.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
          return indexOf3(checkContext, elem) > -1;
        }, implicitRelative, true), matchers = [function(elem, context, xml2) {
          var ret = !leadingRelative && (xml2 || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml2) : matchAnyContext(elem, context, xml2));
          checkContext = null;
          return ret;
        }];
        for (; i2 < len; i2++) {
          if (matcher = Expr.relative[tokens[i2].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
            if (matcher[expando]) {
              j = ++i2;
              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml2, results, outermost) {
          var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
          if (outermost) {
            outermostContext = context == document3 || context || outermost;
          }
          for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
            if (byElement && elem) {
              j = 0;
              if (!context && elem.ownerDocument != document3) {
                setDocument(elem);
                xml2 = !documentIsHTML;
              }
              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context || document3, xml2)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i2;
          if (bySet && i2 !== matchedCount) {
            j = 0;
            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml2);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i2--) {
                  if (!(unmatched[i2] || setMatched[i2])) {
                    setMatched[i2] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push2.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              Sizzle2.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      compile3 = Sizzle2.compile = function(selector, match2) {
        var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
        if (!cached) {
          if (!match2) {
            match2 = tokenize(selector);
          }
          i2 = match2.length;
          while (i2--) {
            cached = matcherFromTokens(match2[i2]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
          cached.selector = selector;
        }
        return cached;
      };
      select = Sizzle2.select = function(selector, context, results, seed) {
        var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match2 = !seed && tokenize(selector = compiled.selector || selector);
        results = results || [];
        if (match2.length === 1) {
          tokens = match2[0] = match2[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
            if (!context) {
              return results;
            } else if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
          while (i2--) {
            token = tokens[i2];
            if (Expr.relative[type = token.type]) {
              break;
            }
            if (find2 = Expr.find[type]) {
              if (seed = find2(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                tokens.splice(i2, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push2.apply(results, seed);
                  return results;
                }
                break;
              }
            }
          }
        }
        (compiled || compile3(selector, match2))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
        return results;
      };
      support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
      support2.detectDuplicates = !!hasDuplicate;
      setDocument();
      support2.sortDetached = assert(function(el) {
        return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
      });
      if (!assert(function(el) {
        el.innerHTML = "<a href='#'></a>";
        return el.firstChild.getAttribute("href") === "#";
      })) {
        addHandle("type|href|height|width", function(elem, name2, isXML2) {
          if (!isXML2) {
            return elem.getAttribute(name2, name2.toLowerCase() === "type" ? 1 : 2);
          }
        });
      }
      if (!support2.attributes || !assert(function(el) {
        el.innerHTML = "<input/>";
        el.firstChild.setAttribute("value", "");
        return el.firstChild.getAttribute("value") === "";
      })) {
        addHandle("value", function(elem, _name, isXML2) {
          if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
            return elem.defaultValue;
          }
        });
      }
      if (!assert(function(el) {
        return el.getAttribute("disabled") == null;
      })) {
        addHandle(booleans, function(elem, name2, isXML2) {
          var val;
          if (!isXML2) {
            return elem[name2] === true ? name2.toLowerCase() : (val = elem.getAttributeNode(name2)) && val.specified ? val.value : null;
          }
        });
      }
      return Sizzle2;
    }(window2);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function(elem, dir2, until) {
      var matched = [], truncate = until !== void 0;
      while ((elem = elem[dir2]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    };
    var siblings = function(n, elem) {
      var matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          matched.push(n);
        }
      }
      return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    function nodeName(elem, name2) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name2.toLowerCase();
    }
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function winnow(elements, qualifier, not) {
      if (isFunction3(qualifier)) {
        return jQuery.grep(elements, function(elem, i) {
          return !!qualifier.call(elem, i, elem) !== not;
        });
      }
      if (qualifier.nodeType) {
        return jQuery.grep(elements, function(elem) {
          return elem === qualifier !== not;
        });
      }
      if (typeof qualifier !== "string") {
        return jQuery.grep(elements, function(elem) {
          return indexOf2.call(qualifier, elem) > -1 !== not;
        });
      }
      return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      if (not) {
        expr = ":not(" + expr + ")";
      }
      if (elems.length === 1 && elem.nodeType === 1) {
        return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
      }
      return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
        return elem2.nodeType === 1;
      }));
    };
    jQuery.fn.extend({
      find: function(selector) {
        var i, ret, len = this.length, self2 = this;
        if (typeof selector !== "string") {
          return this.pushStack(jQuery(selector).filter(function() {
            for (i = 0; i < len; i++) {
              if (jQuery.contains(self2[i], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        for (i = 0; i < len; i++) {
          jQuery.find(selector, self2[i], ret);
        }
        return len > 1 ? jQuery.uniqueSort(ret) : ret;
      },
      filter: function(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not: function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is: function(selector) {
        return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
      }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery.fn.init = function(selector, context, root) {
      var match2, elem;
      if (!selector) {
        return this;
      }
      root = root || rootjQuery;
      if (typeof selector === "string") {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
          match2 = [null, selector, null];
        } else {
          match2 = rquickExpr.exec(selector);
        }
        if (match2 && (match2[1] || !context)) {
          if (match2[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(this, jQuery.parseHTML(match2[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
            if (rsingleTag.test(match2[1]) && jQuery.isPlainObject(context)) {
              for (match2 in context) {
                if (isFunction3(this[match2])) {
                  this[match2](context[match2]);
                } else {
                  this.attr(match2, context[match2]);
                }
              }
            }
            return this;
          } else {
            elem = document2.getElementById(match2[2]);
            if (elem) {
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || root).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (isFunction3(selector)) {
        return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
      }
      return jQuery.makeArray(selector, this);
    };
    init2.prototype = jQuery.fn;
    rootjQuery = jQuery(document2);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    jQuery.fn.extend({
      has: function(target) {
        var targets = jQuery(target, this), l = targets.length;
        return this.filter(function() {
          var i = 0;
          for (; i < l; i++) {
            if (jQuery.contains(this, targets[i])) {
              return true;
            }
          }
        });
      },
      closest: function(selectors, context) {
        var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
        if (!rneedsContext.test(selectors)) {
          for (; i < l; i++) {
            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
              }
            }
          }
        }
        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
      },
      index: function(elem) {
        if (!elem) {
          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }
        if (typeof elem === "string") {
          return indexOf2.call(jQuery(elem), this[0]);
        }
        return indexOf2.call(this, elem.jquery ? elem[0] : elem);
      },
      add: function(selector, context) {
        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
      },
      addBack: function(selector) {
        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
      }
    });
    function sibling(cur, dir2) {
      while ((cur = cur[dir2]) && cur.nodeType !== 1) {
      }
      return cur;
    }
    jQuery.each({
      parent: function(elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil: function(elem, _i, until) {
        return dir(elem, "parentNode", until);
      },
      next: function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev: function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll: function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll: function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil: function(elem, _i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil: function(elem, _i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings: function(elem) {
        return siblings((elem.parentNode || {}).firstChild, elem);
      },
      children: function(elem) {
        return siblings(elem.firstChild);
      },
      contents: function(elem) {
        if (elem.contentDocument != null && getProto(elem.contentDocument)) {
          return elem.contentDocument;
        }
        if (nodeName(elem, "template")) {
          elem = elem.content || elem;
        }
        return jQuery.merge([], elem.childNodes);
      }
    }, function(name2, fn) {
      jQuery.fn[name2] = function(until, selector) {
        var matched = jQuery.map(this, fn, until);
        if (name2.slice(-5) !== "Until") {
          selector = until;
        }
        if (selector && typeof selector === "string") {
          matched = jQuery.filter(selector, matched);
        }
        if (this.length > 1) {
          if (!guaranteedUnique[name2]) {
            jQuery.uniqueSort(matched);
          }
          if (rparentsprev.test(name2)) {
            matched.reverse();
          }
        }
        return this.pushStack(matched);
      };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    function createOptions(options) {
      var object = {};
      jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
        object[flag] = true;
      });
      return object;
    }
    jQuery.Callbacks = function(options) {
      options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
      var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
        locked = locked || options.once;
        fired = firing = true;
        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              firingIndex = list.length;
              memory = false;
            }
          }
        }
        if (!options.memory) {
          memory = false;
        }
        firing = false;
        if (locked) {
          if (memory) {
            list = [];
          } else {
            list = "";
          }
        }
      }, self2 = {
        add: function() {
          if (list) {
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add2(args) {
              jQuery.each(args, function(_, arg) {
                if (isFunction3(arg)) {
                  if (!options.unique || !self2.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  add2(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        remove: function() {
          jQuery.each(arguments, function(_, arg) {
            var index2;
            while ((index2 = jQuery.inArray(arg, list, index2)) > -1) {
              list.splice(index2, 1);
              if (index2 <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        has: function(fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
        },
        empty: function() {
          if (list) {
            list = [];
          }
          return this;
        },
        disable: function() {
          locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function() {
          return !list;
        },
        lock: function() {
          locked = queue = [];
          if (!memory && !firing) {
            list = memory = "";
          }
          return this;
        },
        locked: function() {
          return !!locked;
        },
        fireWith: function(context, args) {
          if (!locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        fire: function() {
          self2.fireWith(this, arguments);
          return this;
        },
        fired: function() {
          return !!fired;
        }
      };
      return self2;
    };
    function Identity(v) {
      return v;
    }
    function Thrower(ex) {
      throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
      var method;
      try {
        if (value && isFunction3(method = value.promise)) {
          method.call(value).done(resolve).fail(reject);
        } else if (value && isFunction3(method = value.then)) {
          method.call(value, resolve, reject);
        } else {
          resolve.apply(void 0, [value].slice(noValue));
        }
      } catch (value2) {
        reject.apply(void 0, [value2]);
      }
    }
    jQuery.extend({
      Deferred: function(func) {
        var tuples = [
          [
            "notify",
            "progress",
            jQuery.Callbacks("memory"),
            jQuery.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], state = "pending", promise = {
          state: function() {
            return state;
          },
          always: function() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          "catch": function(fn) {
            return promise.then(null, fn);
          },
          pipe: function() {
            var fns = arguments;
            return jQuery.Deferred(function(newDefer) {
              jQuery.each(tuples, function(_i, tuple) {
                var fn = isFunction3(fns[tuple[4]]) && fns[tuple[4]];
                deferred[tuple[1]](function() {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && isFunction3(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;
            function resolve(depth, deferred2, handler, special) {
              return function() {
                var that = this, args = arguments, mightThrow = function() {
                  var returned, then;
                  if (depth < maxDepth) {
                    return;
                  }
                  returned = handler.apply(that, args);
                  if (returned === deferred2.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                  if (isFunction3(then)) {
                    if (special) {
                      then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                    } else {
                      maxDepth++;
                      then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                    }
                  } else {
                    if (handler !== Identity) {
                      that = void 0;
                      args = [returned];
                    }
                    (special || deferred2.resolveWith)(that, args);
                  }
                }, process = special ? mightThrow : function() {
                  try {
                    mightThrow();
                  } catch (e) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(e, process.stackTrace);
                    }
                    if (depth + 1 >= maxDepth) {
                      if (handler !== Thrower) {
                        that = void 0;
                        args = [e];
                      }
                      deferred2.rejectWith(that, args);
                    }
                  }
                };
                if (depth) {
                  process();
                } else {
                  if (jQuery.Deferred.getStackHook) {
                    process.stackTrace = jQuery.Deferred.getStackHook();
                  }
                  window2.setTimeout(process);
                }
              };
            }
            return jQuery.Deferred(function(newDefer) {
              tuples[0][3].add(resolve(0, newDefer, isFunction3(onProgress) ? onProgress : Identity, newDefer.notifyWith));
              tuples[1][3].add(resolve(0, newDefer, isFunction3(onFulfilled) ? onFulfilled : Identity));
              tuples[2][3].add(resolve(0, newDefer, isFunction3(onRejected) ? onRejected : Thrower));
            }).promise();
          },
          promise: function(obj) {
            return obj != null ? jQuery.extend(obj, promise) : promise;
          }
        }, deferred = {};
        jQuery.each(tuples, function(i, tuple) {
          var list = tuple[2], stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(function() {
              state = stateString;
            }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
            return this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        });
        promise.promise(deferred);
        if (func) {
          func.call(deferred, deferred);
        }
        return deferred;
      },
      when: function(singleValue) {
        var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice2.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
          return function(value) {
            resolveContexts[i2] = this;
            resolveValues[i2] = arguments.length > 1 ? slice2.call(arguments) : value;
            if (!--remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };
        if (remaining <= 1) {
          adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
          if (primary.state() === "pending" || isFunction3(resolveValues[i] && resolveValues[i].then)) {
            return primary.then();
          }
        }
        while (i--) {
          adoptValue(resolveValues[i], updateFunc(i), primary.reject);
        }
        return primary.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error2, stack) {
      if (window2.console && window2.console.warn && error2 && rerrorNames.test(error2.name)) {
        window2.console.warn("jQuery.Deferred exception: " + error2.message, error2.stack, stack);
      }
    };
    jQuery.readyException = function(error2) {
      window2.setTimeout(function() {
        throw error2;
      });
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
      readyList.then(fn).catch(function(error2) {
        jQuery.readyException(error2);
      });
      return this;
    };
    jQuery.extend({
      isReady: false,
      readyWait: 1,
      ready: function(wait) {
        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
          return;
        }
        jQuery.isReady = true;
        if (wait !== true && --jQuery.readyWait > 0) {
          return;
        }
        readyList.resolveWith(document2, [jQuery]);
      }
    });
    jQuery.ready.then = readyList.then;
    function completed() {
      document2.removeEventListener("DOMContentLoaded", completed);
      window2.removeEventListener("load", completed);
      jQuery.ready();
    }
    if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
      window2.setTimeout(jQuery.ready);
    } else {
      document2.addEventListener("DOMContentLoaded", completed);
      window2.addEventListener("load", completed);
    }
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0, len = elems.length, bulk = key == null;
      if (toType(key) === "object") {
        chainable = true;
        for (i in key) {
          access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else if (value !== void 0) {
        chainable = true;
        if (!isFunction3(value)) {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function(elem, _key, value2) {
              return bulk.call(jQuery(elem), value2);
            };
          }
        }
        if (fn) {
          for (; i < len; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }
      if (chainable) {
        return elems;
      }
      if (bulk) {
        return fn.call(elems);
      }
      return len ? fn(elems[0], key) : emptyGet;
    };
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    function fcamelCase(_all, letter) {
      return letter.toUpperCase();
    }
    function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
      cache: function(owner) {
        var value = owner[this.expando];
        if (!value) {
          value = {};
          if (acceptData(owner)) {
            if (owner.nodeType) {
              owner[this.expando] = value;
            } else {
              Object.defineProperty(owner, this.expando, {
                value,
                configurable: true
              });
            }
          }
        }
        return value;
      },
      set: function(owner, data, value) {
        var prop, cache = this.cache(owner);
        if (typeof data === "string") {
          cache[camelCase(data)] = value;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return cache;
      },
      get: function(owner, key) {
        return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
      },
      access: function(owner, key, value) {
        if (key === void 0 || key && typeof key === "string" && value === void 0) {
          return this.get(owner, key);
        }
        this.set(owner, key, value);
        return value !== void 0 ? value : key;
      },
      remove: function(owner, key) {
        var i, cache = owner[this.expando];
        if (cache === void 0) {
          return;
        }
        if (key !== void 0) {
          if (Array.isArray(key)) {
            key = key.map(camelCase);
          } else {
            key = camelCase(key);
            key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
          }
          i = key.length;
          while (i--) {
            delete cache[key[i]];
          }
        }
        if (key === void 0 || jQuery.isEmptyObject(cache)) {
          if (owner.nodeType) {
            owner[this.expando] = void 0;
          } else {
            delete owner[this.expando];
          }
        }
      },
      hasData: function(owner) {
        var cache = owner[this.expando];
        return cache !== void 0 && !jQuery.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
      if (data === "true") {
        return true;
      }
      if (data === "false") {
        return false;
      }
      if (data === "null") {
        return null;
      }
      if (data === +data + "") {
        return +data;
      }
      if (rbrace.test(data)) {
        return JSON.parse(data);
      }
      return data;
    }
    function dataAttr(elem, key, data) {
      var name2;
      if (data === void 0 && elem.nodeType === 1) {
        name2 = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name2);
        if (typeof data === "string") {
          try {
            data = getData(data);
          } catch (e) {
          }
          dataUser.set(elem, key, data);
        } else {
          data = void 0;
        }
      }
      return data;
    }
    jQuery.extend({
      hasData: function(elem) {
        return dataUser.hasData(elem) || dataPriv.hasData(elem);
      },
      data: function(elem, name2, data) {
        return dataUser.access(elem, name2, data);
      },
      removeData: function(elem, name2) {
        dataUser.remove(elem, name2);
      },
      _data: function(elem, name2, data) {
        return dataPriv.access(elem, name2, data);
      },
      _removeData: function(elem, name2) {
        dataPriv.remove(elem, name2);
      }
    });
    jQuery.fn.extend({
      data: function(key, value) {
        var i, name2, data, elem = this[0], attrs = elem && elem.attributes;
        if (key === void 0) {
          if (this.length) {
            data = dataUser.get(elem);
            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
              i = attrs.length;
              while (i--) {
                if (attrs[i]) {
                  name2 = attrs[i].name;
                  if (name2.indexOf("data-") === 0) {
                    name2 = camelCase(name2.slice(5));
                    dataAttr(elem, name2, data[name2]);
                  }
                }
              }
              dataPriv.set(elem, "hasDataAttrs", true);
            }
          }
          return data;
        }
        if (typeof key === "object") {
          return this.each(function() {
            dataUser.set(this, key);
          });
        }
        return access(this, function(value2) {
          var data2;
          if (elem && value2 === void 0) {
            data2 = dataUser.get(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            data2 = dataAttr(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            return;
          }
          this.each(function() {
            dataUser.set(this, key, value2);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData: function(key) {
        return this.each(function() {
          dataUser.remove(this, key);
        });
      }
    });
    jQuery.extend({
      queue: function(elem, type, data) {
        var queue;
        if (elem) {
          type = (type || "fx") + "queue";
          queue = dataPriv.get(elem, type);
          if (data) {
            if (!queue || Array.isArray(data)) {
              queue = dataPriv.access(elem, type, jQuery.makeArray(data));
            } else {
              queue.push(data);
            }
          }
          return queue || [];
        }
      },
      dequeue: function(elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
          jQuery.dequeue(elem, type);
        };
        if (fn === "inprogress") {
          fn = queue.shift();
          startLength--;
        }
        if (fn) {
          if (type === "fx") {
            queue.unshift("inprogress");
          }
          delete hooks.stop;
          fn.call(elem, next, hooks);
        }
        if (!startLength && hooks) {
          hooks.empty.fire();
        }
      },
      _queueHooks: function(elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty: jQuery.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue: function(type, data) {
        var setter = 2;
        if (typeof type !== "string") {
          data = type;
          type = "fx";
          setter--;
        }
        if (arguments.length < setter) {
          return jQuery.queue(this[0], type);
        }
        return data === void 0 ? this : this.each(function() {
          var queue = jQuery.queue(this, type, data);
          jQuery._queueHooks(this, type);
          if (type === "fx" && queue[0] !== "inprogress") {
            jQuery.dequeue(this, type);
          }
        });
      },
      dequeue: function(type) {
        return this.each(function() {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue: function(type) {
        return this.queue(type || "fx", []);
      },
      promise: function(type, obj) {
        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if (typeof type !== "string") {
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        while (i--) {
          tmp = dataPriv.get(elements[i], type + "queueHooks");
          if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
          }
        }
        resolve();
        return defer.promise(obj);
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var documentElement = document2.documentElement;
    var isAttached = function(elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    }, composed = { composed: true };
    if (documentElement.getRootNode) {
      isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
      };
    }
    var isHiddenWithinTree = function(elem, el) {
      elem = el || elem;
      return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery.css(elem, prop, "");
      }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        initial = initial / 2;
        unit = unit || initialInUnit[3];
        initialInUnit = +initial || 1;
        while (maxIterations--) {
          jQuery.style(elem, prop, initialInUnit + unit);
          if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
            maxIterations = 0;
          }
          initialInUnit = initialInUnit / scale;
        }
        initialInUnit = initialInUnit * 2;
        jQuery.style(elem, prop, initialInUnit + unit);
        valueParts = valueParts || [];
      }
      if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0;
        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
        if (tween) {
          tween.unit = unit;
          tween.start = initialInUnit;
          tween.end = adjusted;
        }
      }
      return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
      var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
      if (display) {
        return display;
      }
      temp = doc.body.appendChild(doc.createElement(nodeName2));
      display = jQuery.css(temp, "display");
      temp.parentNode.removeChild(temp);
      if (display === "none") {
        display = "block";
      }
      defaultDisplayMap[nodeName2] = display;
      return display;
    }
    function showHide(elements, show) {
      var display, elem, values = [], index2 = 0, length2 = elements.length;
      for (; index2 < length2; index2++) {
        elem = elements[index2];
        if (!elem.style) {
          continue;
        }
        display = elem.style.display;
        if (show) {
          if (display === "none") {
            values[index2] = dataPriv.get(elem, "display") || null;
            if (!values[index2]) {
              elem.style.display = "";
            }
          }
          if (elem.style.display === "" && isHiddenWithinTree(elem)) {
            values[index2] = getDefaultDisplay(elem);
          }
        } else {
          if (display !== "none") {
            values[index2] = "none";
            dataPriv.set(elem, "display", display);
          }
        }
      }
      for (index2 = 0; index2 < length2; index2++) {
        if (values[index2] != null) {
          elements[index2].style.display = values[index2];
        }
      }
      return elements;
    }
    jQuery.fn.extend({
      show: function() {
        return showHide(this, true);
      },
      hide: function() {
        return showHide(this);
      },
      toggle: function(state) {
        if (typeof state === "boolean") {
          return state ? this.show() : this.hide();
        }
        return this.each(function() {
          if (isHiddenWithinTree(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
      div.appendChild(input);
      support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
      div.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
      div.innerHTML = "<option></option>";
      support.option = !!div.lastChild;
    })();
    var wrapMap = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    if (!support.option) {
      wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
    }
    function getAll(context, tag) {
      var ret;
      if (typeof context.getElementsByTagName !== "undefined") {
        ret = context.getElementsByTagName(tag || "*");
      } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");
      } else {
        ret = [];
      }
      if (tag === void 0 || tag && nodeName(context, tag)) {
        return jQuery.merge([context], ret);
      }
      return ret;
    }
    function setGlobalEval(elems, refElements) {
      var i = 0, l = elems.length;
      for (; i < l; i++) {
        dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
      }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
      for (; i < l; i++) {
        elem = elems[i];
        if (elem || elem === 0) {
          if (toType(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i = 0;
      while (elem = nodes[i++]) {
        if (selection && jQuery.inArray(elem, selection) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
          continue;
        }
        attached = isAttached(elem);
        tmp = getAll(fragment.appendChild(elem), "script");
        if (attached) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function expectSync(elem, type) {
      return elem === safeActiveElement() === (type === "focus");
    }
    function safeActiveElement() {
      try {
        return document2.activeElement;
      } catch (err) {
      }
    }
    function on(elem, types2, selector, data, fn, one) {
      var origFn, type;
      if (typeof types2 === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = void 0;
        }
        for (type in types2) {
          on(elem, type, selector, data, types2[type], one);
        }
        return elem;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = void 0;
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = data;
          data = void 0;
        } else {
          fn = data;
          data = selector;
          selector = void 0;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return elem;
      }
      if (one === 1) {
        origFn = fn;
        fn = function(event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return elem.each(function() {
        jQuery.event.add(this, types2, fn, data, selector);
      });
    }
    jQuery.event = {
      global: {},
      add: function(elem, types2, handler, data, selector) {
        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
        if (!acceptData(elem)) {
          return;
        }
        if (handler.handler) {
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery.find.matchesSelector(documentElement, selector);
        }
        if (!handler.guid) {
          handler.guid = jQuery.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = /* @__PURE__ */ Object.create(null);
        }
        if (!(eventHandle = elemData.handle)) {
          eventHandle = elemData.handle = function(e) {
            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
          };
        }
        types2 = (types2 || "").match(rnothtmlwhite) || [""];
        t = types2.length;
        while (t--) {
          tmp = rtypenamespace.exec(types2[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            continue;
          }
          special = jQuery.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          special = jQuery.event.special[type] || {};
          handleObj = jQuery.extend({
            type,
            origType,
            data,
            handler,
            guid: handler.guid,
            selector,
            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn);
          if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
              if (elem.addEventListener) {
                elem.addEventListener(type, eventHandle);
              }
            }
          }
          if (special.add) {
            special.add.call(elem, handleObj);
            if (!handleObj.handler.guid) {
              handleObj.handler.guid = handler.guid;
            }
          }
          if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
          } else {
            handlers.push(handleObj);
          }
          jQuery.event.global[type] = true;
        }
      },
      remove: function(elem, types2, handler, selector, mappedTypes) {
        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
        if (!elemData || !(events = elemData.events)) {
          return;
        }
        types2 = (types2 || "").match(rnothtmlwhite) || [""];
        t = types2.length;
        while (t--) {
          tmp = rtypenamespace.exec(types2[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            for (type in events) {
              jQuery.event.remove(elem, type + types2[t], handler, selector, true);
            }
            continue;
          }
          special = jQuery.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          handlers = events[type] || [];
          tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
          origCount = j = handlers.length;
          while (j--) {
            handleObj = handlers[j];
            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
              handlers.splice(j, 1);
              if (handleObj.selector) {
                handlers.delegateCount--;
              }
              if (special.remove) {
                special.remove.call(elem, handleObj);
              }
            }
          }
          if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
              jQuery.removeEvent(elem, type, elemData.handle);
            }
            delete events[type];
          }
        }
        if (jQuery.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      },
      dispatch: function(nativeEvent) {
        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
        args[0] = event;
        for (i = 1; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        event.delegateTarget = this;
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
          return;
        }
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
        i = 0;
        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
          event.currentTarget = matched.elem;
          j = 0;
          while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
              if (ret !== void 0) {
                if ((event.result = ret) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        }
        if (special.postDispatch) {
          special.postDispatch.call(this, event);
        }
        return event.result;
      },
      handlers: function(event, handlers) {
        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
        if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
              matchedHandlers = [];
              matchedSelectors = {};
              for (i = 0; i < delegateCount; i++) {
                handleObj = handlers[i];
                sel = handleObj.selector + " ";
                if (matchedSelectors[sel] === void 0) {
                  matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                }
                if (matchedSelectors[sel]) {
                  matchedHandlers.push(handleObj);
                }
              }
              if (matchedHandlers.length) {
                handlerQueue.push({ elem: cur, handlers: matchedHandlers });
              }
            }
          }
        }
        cur = this;
        if (delegateCount < handlers.length) {
          handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
        }
        return handlerQueue;
      },
      addProp: function(name2, hook) {
        Object.defineProperty(jQuery.Event.prototype, name2, {
          enumerable: true,
          configurable: true,
          get: isFunction3(hook) ? function() {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name2];
            }
          },
          set: function(value) {
            Object.defineProperty(this, name2, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
            });
          }
        });
      },
      fix: function(originalEvent) {
        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
      },
      special: {
        load: {
          noBubble: true
        },
        click: {
          setup: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click", returnTrue);
            }
            return false;
          },
          trigger: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click");
            }
            return true;
          },
          _default: function(event) {
            var target = event.target;
            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(event) {
            if (event.result !== void 0 && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    function leverageNative(el, type, expectSync2) {
      if (!expectSync2) {
        if (dataPriv.get(el, type) === void 0) {
          jQuery.event.add(el, type, returnTrue);
        }
        return;
      }
      dataPriv.set(el, type, false);
      jQuery.event.add(el, type, {
        namespace: false,
        handler: function(event) {
          var notAsync, result, saved = dataPriv.get(this, type);
          if (event.isTrigger & 1 && this[type]) {
            if (!saved.length) {
              saved = slice2.call(arguments);
              dataPriv.set(this, type, saved);
              notAsync = expectSync2(this, type);
              this[type]();
              result = dataPriv.get(this, type);
              if (saved !== result || notAsync) {
                dataPriv.set(this, type, false);
              } else {
                result = {};
              }
              if (saved !== result) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return result && result.value;
              }
            } else if ((jQuery.event.special[type] || {}).delegateType) {
              event.stopPropagation();
            }
          } else if (saved.length) {
            dataPriv.set(this, type, {
              value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
            });
            event.stopImmediatePropagation();
          }
        }
      });
    }
    jQuery.removeEvent = function(elem, type, handle) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handle);
      }
    };
    jQuery.Event = function(src, props) {
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
      constructor: jQuery.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, jQuery.event.addProp);
    jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
      jQuery.event.special[type] = {
        setup: function() {
          leverageNative(this, type, expectSync);
          return false;
        },
        trigger: function() {
          leverageNative(this, type);
          return true;
        },
        _default: function() {
          return true;
        },
        delegateType
      };
    });
    jQuery.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function(event) {
          var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
          if (!related || related !== target && !jQuery.contains(target, related)) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }
          return ret;
        }
      };
    });
    jQuery.fn.extend({
      on: function(types2, selector, data, fn) {
        return on(this, types2, selector, data, fn);
      },
      one: function(types2, selector, data, fn) {
        return on(this, types2, selector, data, fn, 1);
      },
      off: function(types2, selector, fn) {
        var handleObj, type;
        if (types2 && types2.preventDefault && types2.handleObj) {
          handleObj = types2.handleObj;
          jQuery(types2.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
          return this;
        }
        if (typeof types2 === "object") {
          for (type in types2) {
            this.off(type, selector, types2[type]);
          }
          return this;
        }
        if (selector === false || typeof selector === "function") {
          fn = selector;
          selector = void 0;
        }
        if (fn === false) {
          fn = returnFalse;
        }
        return this.each(function() {
          jQuery.event.remove(this, types2, fn, selector);
        });
      }
    });
    var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function manipulationTarget(elem, content) {
      if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
        return jQuery(elem).children("tbody")[0] || elem;
      }
      return elem;
    }
    function disableScript(elem) {
      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
      return elem;
    }
    function restoreScript(elem) {
      if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
      } else {
        elem.removeAttribute("type");
      }
      return elem;
    }
    function cloneCopyEvent(src, dest) {
      var i, l, type, pdataOld, udataOld, udataCur, events;
      if (dest.nodeType !== 1) {
        return;
      }
      if (dataPriv.hasData(src)) {
        pdataOld = dataPriv.get(src);
        events = pdataOld.events;
        if (events) {
          dataPriv.remove(dest, "handle events");
          for (type in events) {
            for (i = 0, l = events[type].length; i < l; i++) {
              jQuery.event.add(dest, type, events[type][i]);
            }
          }
        }
      }
      if (dataUser.hasData(src)) {
        udataOld = dataUser.access(src);
        udataCur = jQuery.extend({}, udataOld);
        dataUser.set(dest, udataCur);
      }
    }
    function fixInput(src, dest) {
      var nodeName2 = dest.nodeName.toLowerCase();
      if (nodeName2 === "input" && rcheckableType.test(src.type)) {
        dest.checked = src.checked;
      } else if (nodeName2 === "input" || nodeName2 === "textarea") {
        dest.defaultValue = src.defaultValue;
      }
    }
    function domManip(collection2, args, callback, ignored) {
      args = flat(args);
      var fragment, first, scripts, hasScripts, node2, doc, i = 0, l = collection2.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction3(value);
      if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
        return collection2.each(function(index2) {
          var self2 = collection2.eq(index2);
          if (valueIsFunction) {
            args[0] = value.call(this, index2, self2.html());
          }
          domManip(self2, args, callback, ignored);
        });
      }
      if (l) {
        fragment = buildFragment(args, collection2[0].ownerDocument, false, collection2, ignored);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first || ignored) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (; i < l; i++) {
            node2 = fragment;
            if (i !== iNoClone) {
              node2 = jQuery.clone(node2, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node2, "script"));
              }
            }
            callback.call(collection2[i], node2, i);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, restoreScript);
            for (i = 0; i < hasScripts; i++) {
              node2 = scripts[i];
              if (rscriptType.test(node2.type || "") && !dataPriv.access(node2, "globalEval") && jQuery.contains(doc, node2)) {
                if (node2.src && (node2.type || "").toLowerCase() !== "module") {
                  if (jQuery._evalUrl && !node2.noModule) {
                    jQuery._evalUrl(node2.src, {
                      nonce: node2.nonce || node2.getAttribute("nonce")
                    }, doc);
                  }
                } else {
                  DOMEval(node2.textContent.replace(rcleanScript, ""), node2, doc);
                }
              }
            }
          }
        }
      }
      return collection2;
    }
    function remove2(elem, selector, keepData) {
      var node2, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
      for (; (node2 = nodes[i]) != null; i++) {
        if (!keepData && node2.nodeType === 1) {
          jQuery.cleanData(getAll(node2));
        }
        if (node2.parentNode) {
          if (keepData && isAttached(node2)) {
            setGlobalEval(getAll(node2, "script"));
          }
          node2.parentNode.removeChild(node2);
        }
      }
      return elem;
    }
    jQuery.extend({
      htmlPrefilter: function(html) {
        return html;
      },
      clone: function(elem, dataAndEvents, deepDataAndEvents) {
        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
          destElements = getAll(clone);
          srcElements = getAll(elem);
          for (i = 0, l = srcElements.length; i < l; i++) {
            fixInput(srcElements[i], destElements[i]);
          }
        }
        if (dataAndEvents) {
          if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            for (i = 0, l = srcElements.length; i < l; i++) {
              cloneCopyEvent(srcElements[i], destElements[i]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        }
        destElements = getAll(clone, "script");
        if (destElements.length > 0) {
          setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        }
        return clone;
      },
      cleanData: function(elems) {
        var data, elem, type, special = jQuery.event.special, i = 0;
        for (; (elem = elems[i]) !== void 0; i++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery.event.remove(elem, type);
                  } else {
                    jQuery.removeEvent(elem, type, data.handle);
                  }
                }
              }
              elem[dataPriv.expando] = void 0;
            }
            if (elem[dataUser.expando]) {
              elem[dataUser.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      detach: function(selector) {
        return remove2(this, selector, true);
      },
      remove: function(selector) {
        return remove2(this, selector);
      },
      text: function(value) {
        return access(this, function(value2) {
          return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value2;
            }
          });
        }, null, value, arguments.length);
      },
      append: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty: function() {
        var elem, i = 0;
        for (; (elem = this[i]) != null; i++) {
          if (elem.nodeType === 1) {
            jQuery.cleanData(getAll(elem, false));
            elem.textContent = "";
          }
        }
        return this;
      },
      clone: function(dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        return this.map(function() {
          return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
        });
      },
      html: function(value) {
        return access(this, function(value2) {
          var elem = this[0] || {}, i = 0, l = this.length;
          if (value2 === void 0 && elem.nodeType === 1) {
            return elem.innerHTML;
          }
          if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
            value2 = jQuery.htmlPrefilter(value2);
            try {
              for (; i < l; i++) {
                elem = this[i] || {};
                if (elem.nodeType === 1) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.innerHTML = value2;
                }
              }
              elem = 0;
            } catch (e) {
            }
          }
          if (elem) {
            this.empty().append(value2);
          }
        }, null, value, arguments.length);
      },
      replaceWith: function() {
        var ignored = [];
        return domManip(this, arguments, function(elem) {
          var parent = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (parent) {
              parent.replaceChild(elem, this);
            }
          }
        }, ignored);
      }
    });
    jQuery.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(name2, original) {
      jQuery.fn[name2] = function(selector) {
        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
        for (; i <= last; i++) {
          elems = i === last ? this : this.clone(true);
          jQuery(insert[i])[original](elems);
          push.apply(ret, elems.get());
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
      var view = elem.ownerDocument.defaultView;
      if (!view || !view.opener) {
        view = window2;
      }
      return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
      var ret, name2, old = {};
      for (name2 in options) {
        old[name2] = elem.style[name2];
        elem.style[name2] = options[name2];
      }
      ret = callback.call(elem);
      for (name2 in options) {
        elem.style[name2] = old[name2];
      }
      return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
      function computeStyleTests() {
        if (!div) {
          return;
        }
        container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        documentElement.appendChild(container).appendChild(div);
        var divStyle = window2.getComputedStyle(div);
        pixelPositionVal = divStyle.top !== "1%";
        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
        div.style.right = "60%";
        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
        div.style.position = "absolute";
        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
        documentElement.removeChild(container);
        div = null;
      }
      function roundPixelMeasures(measure) {
        return Math.round(parseFloat(measure));
      }
      var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
      if (!div.style) {
        return;
      }
      div.style.backgroundClip = "content-box";
      div.cloneNode(true).style.backgroundClip = "";
      support.clearCloneStyle = div.style.backgroundClip === "content-box";
      jQuery.extend(support, {
        boxSizingReliable: function() {
          computeStyleTests();
          return boxSizingReliableVal;
        },
        pixelBoxStyles: function() {
          computeStyleTests();
          return pixelBoxStylesVal;
        },
        pixelPosition: function() {
          computeStyleTests();
          return pixelPositionVal;
        },
        reliableMarginLeft: function() {
          computeStyleTests();
          return reliableMarginLeftVal;
        },
        scrollboxSize: function() {
          computeStyleTests();
          return scrollboxSizeVal;
        },
        reliableTrDimensions: function() {
          var table, tr, trChild, trStyle;
          if (reliableTrDimensionsVal == null) {
            table = document2.createElement("table");
            tr = document2.createElement("tr");
            trChild = document2.createElement("div");
            table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
            tr.style.cssText = "border:1px solid";
            tr.style.height = "1px";
            trChild.style.height = "9px";
            trChild.style.display = "block";
            documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
            trStyle = window2.getComputedStyle(tr);
            reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
            documentElement.removeChild(table);
          }
          return reliableTrDimensionsVal;
        }
      });
    })();
    function curCSS(elem, name2, computed) {
      var width, minWidth, maxWidth, ret, style = elem.style;
      computed = computed || getStyles(elem);
      if (computed) {
        ret = computed.getPropertyValue(name2) || computed[name2];
        if (ret === "" && !isAttached(elem)) {
          ret = jQuery.style(elem, name2);
        }
        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name2)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret !== void 0 ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get: function() {
          if (conditionFn()) {
            delete this.get;
            return;
          }
          return (this.get = hookFn).apply(this, arguments);
        }
      };
    }
    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
    function vendorPropName(name2) {
      var capName = name2[0].toUpperCase() + name2.slice(1), i = cssPrefixes.length;
      while (i--) {
        name2 = cssPrefixes[i] + capName;
        if (name2 in emptyStyle) {
          return name2;
        }
      }
    }
    function finalPropName(name2) {
      var final = jQuery.cssProps[name2] || vendorProps[name2];
      if (final) {
        return final;
      }
      if (name2 in emptyStyle) {
        return name2;
      }
      return vendorProps[name2] = vendorPropName(name2) || name2;
    }
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
      var matches = rcssNum.exec(value);
      return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
      var i = dimension === "width" ? 1 : 0, extra = 0, delta2 = 0;
      if (box === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (; i < 4; i += 2) {
        if (box === "margin") {
          delta2 += jQuery.css(elem, box + cssExpand[i], true, styles);
        }
        if (!isBorderBox) {
          delta2 += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          if (box !== "padding") {
            delta2 += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          } else {
            extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        } else {
          if (box === "content") {
            delta2 -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          }
          if (box !== "margin") {
            delta2 -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        }
      }
      if (!isBorderBox && computedVal >= 0) {
        delta2 += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta2 - extra - 0.5)) || 0;
      }
      return delta2;
    }
    function getWidthOrHeight(elem, dimension, extra) {
      var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
      if (rnumnonpx.test(val)) {
        if (!extra) {
          return val;
        }
        val = "auto";
      }
      if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        valueIsBorderBox = offsetProp in elem;
        if (valueIsBorderBox) {
          val = elem[offsetProp];
        }
      }
      val = parseFloat(val) || 0;
      return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
    }
    jQuery.extend({
      cssHooks: {
        opacity: {
          get: function(elem, computed) {
            if (computed) {
              var ret = curCSS(elem, "opacity");
              return ret === "" ? "1" : ret;
            }
          }
        }
      },
      cssNumber: {
        "animationIterationCount": true,
        "columnCount": true,
        "fillOpacity": true,
        "flexGrow": true,
        "flexShrink": true,
        "fontWeight": true,
        "gridArea": true,
        "gridColumn": true,
        "gridColumnEnd": true,
        "gridColumnStart": true,
        "gridRow": true,
        "gridRowEnd": true,
        "gridRowStart": true,
        "lineHeight": true,
        "opacity": true,
        "order": true,
        "orphans": true,
        "widows": true,
        "zIndex": true,
        "zoom": true
      },
      cssProps: {},
      style: function(elem, name2, value, extra) {
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
          return;
        }
        var ret, type, hooks, origName = camelCase(name2), isCustomProp = rcustomProp.test(name2), style = elem.style;
        if (!isCustomProp) {
          name2 = finalPropName(origName);
        }
        hooks = jQuery.cssHooks[name2] || jQuery.cssHooks[origName];
        if (value !== void 0) {
          type = typeof value;
          if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name2, ret);
            type = "number";
          }
          if (value == null || value !== value) {
            return;
          }
          if (type === "number" && !isCustomProp) {
            value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
          }
          if (!support.clearCloneStyle && value === "" && name2.indexOf("background") === 0) {
            style[name2] = "inherit";
          }
          if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
            if (isCustomProp) {
              style.setProperty(name2, value);
            } else {
              style[name2] = value;
            }
          }
        } else {
          if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
            return ret;
          }
          return style[name2];
        }
      },
      css: function(elem, name2, extra, styles) {
        var val, num, hooks, origName = camelCase(name2), isCustomProp = rcustomProp.test(name2);
        if (!isCustomProp) {
          name2 = finalPropName(origName);
        }
        hooks = jQuery.cssHooks[name2] || jQuery.cssHooks[origName];
        if (hooks && "get" in hooks) {
          val = hooks.get(elem, true, extra);
        }
        if (val === void 0) {
          val = curCSS(elem, name2, styles);
        }
        if (val === "normal" && name2 in cssNormalTransform) {
          val = cssNormalTransform[name2];
        }
        if (extra === "" || extra) {
          num = parseFloat(val);
          return extra === true || isFinite(num) ? num || 0 : val;
        }
        return val;
      }
    });
    jQuery.each(["height", "width"], function(_i, dimension) {
      jQuery.cssHooks[dimension] = {
        get: function(elem, computed, extra) {
          if (computed) {
            return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, dimension, extra);
            }) : getWidthOrHeight(elem, dimension, extra);
          }
        },
        set: function(elem, value, extra) {
          var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
          if (isBorderBox && scrollboxSizeBuggy) {
            subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
          }
          if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
            elem.style[dimension] = value;
            value = jQuery.css(elem, dimension);
          }
          return setPositiveNumber(elem, value, subtract);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
      if (computed) {
        return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
          return elem.getBoundingClientRect().left;
        })) + "px";
      }
    });
    jQuery.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(prefix2, suffix) {
      jQuery.cssHooks[prefix2 + suffix] = {
        expand: function(value) {
          var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
          for (; i < 4; i++) {
            expanded[prefix2 + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
          }
          return expanded;
        }
      };
      if (prefix2 !== "margin") {
        jQuery.cssHooks[prefix2 + suffix].set = setPositiveNumber;
      }
    });
    jQuery.fn.extend({
      css: function(name2, value) {
        return access(this, function(elem, name3, value2) {
          var styles, len, map2 = {}, i = 0;
          if (Array.isArray(name3)) {
            styles = getStyles(elem);
            len = name3.length;
            for (; i < len; i++) {
              map2[name3[i]] = jQuery.css(elem, name3[i], false, styles);
            }
            return map2;
          }
          return value2 !== void 0 ? jQuery.style(elem, name3, value2) : jQuery.css(elem, name3);
        }, name2, value, arguments.length > 1);
      }
    });
    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
      constructor: Tween,
      init: function(elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur: function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run: function(percent) {
        var eased, hooks = Tween.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
        } else {
          this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (hooks && hooks.set) {
          hooks.set(this);
        } else {
          Tween.propHooks._default.set(this);
        }
        return this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default: {
        get: function(tween) {
          var result;
          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
          }
          result = jQuery.css(tween.elem, tween.prop, "");
          return !result || result === "auto" ? 0 : result;
        },
        set: function(tween) {
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function(tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
          tween.elem[tween.prop] = tween.now;
        }
      }
    };
    jQuery.easing = {
      linear: function(p) {
        return p;
      },
      swing: function(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },
      _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
      if (inProgress) {
        if (document2.hidden === false && window2.requestAnimationFrame) {
          window2.requestAnimationFrame(schedule);
        } else {
          window2.setTimeout(schedule, jQuery.fx.interval);
        }
        jQuery.fx.tick();
      }
    }
    function createFxNow() {
      window2.setTimeout(function() {
        fxNow = void 0;
      });
      return fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
      var which, i = 0, attrs = { height: type };
      includeWidth = includeWidth ? 1 : 0;
      for (; i < 4; i += 2 - includeWidth) {
        which = cssExpand[i];
        attrs["margin" + which] = attrs["padding" + which] = type;
      }
      if (includeWidth) {
        attrs.opacity = attrs.width = type;
      }
      return attrs;
    }
    function createTween(value, prop, animation) {
      var tween, collection2 = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index2 = 0, length2 = collection2.length;
      for (; index2 < length2; index2++) {
        if (tween = collection2[index2].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function defaultPrefilter(elem, props, opts) {
      var prop, value, toggle2, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
      if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
          delete props[prop];
          toggle2 = toggle2 || value === "toggle";
          if (value === (hidden ? "hide" : "show")) {
            if (value === "show" && dataShow && dataShow[prop] !== void 0) {
              hidden = true;
            } else {
              continue;
            }
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
      }
      propTween = !jQuery.isEmptyObject(props);
      if (!propTween && jQuery.isEmptyObject(orig)) {
        return;
      }
      if (isBox && elem.nodeType === 1) {
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
          restoreDisplay = dataPriv.get(elem, "display");
        }
        display = jQuery.css(elem, "display");
        if (display === "none") {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQuery.css(elem, "display");
            showHide([elem]);
          }
        }
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
          if (jQuery.css(elem, "float") === "none") {
            if (!propTween) {
              anim.done(function() {
                style.display = restoreDisplay;
              });
              if (restoreDisplay == null) {
                display = style.display;
                restoreDisplay = display === "none" ? "" : display;
              }
            }
            style.display = "inline-block";
          }
        }
      }
      if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
      propTween = false;
      for (prop in orig) {
        if (!propTween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
          }
          if (toggle2) {
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            showHide([elem], true);
          }
          anim.done(function() {
            if (!hidden) {
              showHide([elem]);
            }
            dataPriv.remove(elem, "fxshow");
            for (prop in orig) {
              jQuery.style(elem, prop, orig[prop]);
            }
          });
        }
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = propTween.start;
          if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
          }
        }
      }
    }
    function propFilter(props, specialEasing) {
      var index2, name2, easing, value, hooks;
      for (index2 in props) {
        name2 = camelCase(index2);
        easing = specialEasing[name2];
        value = props[index2];
        if (Array.isArray(value)) {
          easing = value[1];
          value = props[index2] = value[0];
        }
        if (index2 !== name2) {
          props[name2] = value;
          delete props[index2];
        }
        hooks = jQuery.cssHooks[name2];
        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name2];
          for (index2 in value) {
            if (!(index2 in props)) {
              props[index2] = value[index2];
              specialEasing[index2] = easing;
            }
          }
        } else {
          specialEasing[name2] = easing;
        }
      }
    }
    function Animation(elem, properties, options) {
      var result, stopped, index2 = 0, length2 = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      }), tick = function() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index3 = 0, length3 = animation.tweens.length;
        for (; index3 < length3; index3++) {
          animation.tweens[index3].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length3) {
          return remaining;
        }
        if (!length3) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        }
        deferred.resolveWith(elem, [animation]);
        return false;
      }, animation = deferred.promise({
        elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(true, {
          specialEasing: {},
          easing: jQuery.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function(prop, end) {
          var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          animation.tweens.push(tween);
          return tween;
        },
        stop: function(gotoEnd) {
          var index3 = 0, length3 = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index3 < length3; index3++) {
            animation.tweens[index3].run(1);
          }
          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }), props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (; index2 < length2; index2++) {
        result = Animation.prefilters[index2].call(animation, elem, props, animation.opts);
        if (result) {
          if (isFunction3(result.stop)) {
            jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
          }
          return result;
        }
      }
      jQuery.map(props, createTween, animation);
      if (isFunction3(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
      }
      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      jQuery.fx.timer(jQuery.extend(tick, {
        elem,
        anim: animation,
        queue: animation.opts.queue
      }));
      return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
      tweeners: {
        "*": [function(prop, value) {
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        }]
      },
      tweener: function(props, callback) {
        if (isFunction3(props)) {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnothtmlwhite);
        }
        var prop, index2 = 0, length2 = props.length;
        for (; index2 < length2; index2++) {
          prop = props[index2];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters: [defaultPrefilter],
      prefilter: function(callback, prepend) {
        if (prepend) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery.speed = function(speed, easing, fn) {
      var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing || isFunction3(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !isFunction3(easing) && easing
      };
      if (jQuery.fx.off) {
        opt.duration = 0;
      } else {
        if (typeof opt.duration !== "number") {
          if (opt.duration in jQuery.fx.speeds) {
            opt.duration = jQuery.fx.speeds[opt.duration];
          } else {
            opt.duration = jQuery.fx.speeds._default;
          }
        }
      }
      if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
      }
      opt.old = opt.complete;
      opt.complete = function() {
        if (isFunction3(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      };
      return opt;
    };
    jQuery.fn.extend({
      fadeTo: function(speed, to, easing, callback) {
        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
      },
      animate: function(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        doAnimation.finish = doAnimation;
        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop: function(type, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        if (typeof type !== "string") {
          gotoEnd = clearQueue;
          clearQueue = type;
          type = void 0;
        }
        if (clearQueue) {
          this.queue(type || "fx", []);
        }
        return this.each(function() {
          var dequeue = true, index2 = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
          if (index2) {
            if (data[index2] && data[index2].stop) {
              stopQueue(data[index2]);
            }
          } else {
            for (index2 in data) {
              if (data[index2] && data[index2].stop && rrun.test(index2)) {
                stopQueue(data[index2]);
              }
            }
          }
          for (index2 = timers.length; index2--; ) {
            if (timers[index2].elem === this && (type == null || timers[index2].queue === type)) {
              timers[index2].anim.stop(gotoEnd);
              dequeue = false;
              timers.splice(index2, 1);
            }
          }
          if (dequeue || !gotoEnd) {
            jQuery.dequeue(this, type);
          }
        });
      },
      finish: function(type) {
        if (type !== false) {
          type = type || "fx";
        }
        return this.each(function() {
          var index2, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length2 = queue ? queue.length : 0;
          data.finish = true;
          jQuery.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          for (index2 = timers.length; index2--; ) {
            if (timers[index2].elem === this && timers[index2].queue === type) {
              timers[index2].anim.stop(true);
              timers.splice(index2, 1);
            }
          }
          for (index2 = 0; index2 < length2; index2++) {
            if (queue[index2] && queue[index2].finish) {
              queue[index2].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function(_i, name2) {
      var cssFn = jQuery.fn[name2];
      jQuery.fn[name2] = function(speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name2, true), speed, easing, callback);
      };
    });
    jQuery.each({
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(name2, props) {
      jQuery.fn[name2] = function(speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
      var timer, i = 0, timers = jQuery.timers;
      fxNow = Date.now();
      for (; i < timers.length; i++) {
        timer = timers[i];
        if (!timer() && timers[i] === timer) {
          timers.splice(i--, 1);
        }
      }
      if (!timers.length) {
        jQuery.fx.stop();
      }
      fxNow = void 0;
    };
    jQuery.fx.timer = function(timer) {
      jQuery.timers.push(timer);
      jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
      if (inProgress) {
        return;
      }
      inProgress = true;
      schedule();
    };
    jQuery.fx.stop = function() {
      inProgress = null;
    };
    jQuery.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    jQuery.fn.delay = function(time, type) {
      time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function(next, hooks) {
        var timeout = window2.setTimeout(next, time);
        hooks.stop = function() {
          window2.clearTimeout(timeout);
        };
      });
    };
    (function() {
      var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
      input.type = "checkbox";
      support.checkOn = input.value !== "";
      support.optSelected = opt.selected;
      input = document2.createElement("input");
      input.value = "t";
      input.type = "radio";
      support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr: function(name2, value) {
        return access(this, jQuery.attr, name2, value, arguments.length > 1);
      },
      removeAttr: function(name2) {
        return this.each(function() {
          jQuery.removeAttr(this, name2);
        });
      }
    });
    jQuery.extend({
      attr: function(elem, name2, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (typeof elem.getAttribute === "undefined") {
          return jQuery.prop(elem, name2, value);
        }
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          hooks = jQuery.attrHooks[name2.toLowerCase()] || (jQuery.expr.match.bool.test(name2) ? boolHook : void 0);
        }
        if (value !== void 0) {
          if (value === null) {
            jQuery.removeAttr(elem, name2);
            return;
          }
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name2)) !== void 0) {
            return ret;
          }
          elem.setAttribute(name2, value + "");
          return value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name2)) !== null) {
          return ret;
        }
        ret = jQuery.find.attr(elem, name2);
        return ret == null ? void 0 : ret;
      },
      attrHooks: {
        type: {
          set: function(elem, value) {
            if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
              var val = elem.value;
              elem.setAttribute("type", value);
              if (val) {
                elem.value = val;
              }
              return value;
            }
          }
        }
      },
      removeAttr: function(elem, value) {
        var name2, i = 0, attrNames = value && value.match(rnothtmlwhite);
        if (attrNames && elem.nodeType === 1) {
          while (name2 = attrNames[i++]) {
            elem.removeAttribute(name2);
          }
        }
      }
    });
    boolHook = {
      set: function(elem, value, name2) {
        if (value === false) {
          jQuery.removeAttr(elem, name2);
        } else {
          elem.setAttribute(name2, name2);
        }
        return name2;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name2) {
      var getter2 = attrHandle[name2] || jQuery.find.attr;
      attrHandle[name2] = function(elem, name3, isXML) {
        var ret, handle, lowercaseName = name3.toLowerCase();
        if (!isXML) {
          handle = attrHandle[lowercaseName];
          attrHandle[lowercaseName] = ret;
          ret = getter2(elem, name3, isXML) != null ? lowercaseName : null;
          attrHandle[lowercaseName] = handle;
        }
        return ret;
      };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop: function(name2, value) {
        return access(this, jQuery.prop, name2, value, arguments.length > 1);
      },
      removeProp: function(name2) {
        return this.each(function() {
          delete this[jQuery.propFix[name2] || name2];
        });
      }
    });
    jQuery.extend({
      prop: function(elem, name2, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          name2 = jQuery.propFix[name2] || name2;
          hooks = jQuery.propHooks[name2];
        }
        if (value !== void 0) {
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name2)) !== void 0) {
            return ret;
          }
          return elem[name2] = value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name2)) !== null) {
          return ret;
        }
        return elem[name2];
      },
      propHooks: {
        tabIndex: {
          get: function(elem) {
            var tabindex = jQuery.find.attr(elem, "tabindex");
            if (tabindex) {
              return parseInt(tabindex, 10);
            }
            if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
              return 0;
            }
            return -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    });
    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get: function(elem) {
          var parent = elem.parentNode;
          if (parent && parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
          return null;
        },
        set: function(elem) {
          var parent = elem.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      jQuery.propFix[this.toLowerCase()] = this;
    });
    function stripAndCollapse(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(" ");
    }
    function getClass(elem) {
      return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
      }
      return [];
    }
    jQuery.fn.extend({
      addClass: function(value) {
        var classes2, elem, cur, curValue, clazz, j, finalValue, i = 0;
        if (isFunction3(value)) {
          return this.each(function(j2) {
            jQuery(this).addClass(value.call(this, j2, getClass(this)));
          });
        }
        classes2 = classesToArray(value);
        if (classes2.length) {
          while (elem = this[i++]) {
            curValue = getClass(elem);
            cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              j = 0;
              while (clazz = classes2[j++]) {
                if (cur.indexOf(" " + clazz + " ") < 0) {
                  cur += clazz + " ";
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                elem.setAttribute("class", finalValue);
              }
            }
          }
        }
        return this;
      },
      removeClass: function(value) {
        var classes2, elem, cur, curValue, clazz, j, finalValue, i = 0;
        if (isFunction3(value)) {
          return this.each(function(j2) {
            jQuery(this).removeClass(value.call(this, j2, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        classes2 = classesToArray(value);
        if (classes2.length) {
          while (elem = this[i++]) {
            curValue = getClass(elem);
            cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              j = 0;
              while (clazz = classes2[j++]) {
                while (cur.indexOf(" " + clazz + " ") > -1) {
                  cur = cur.replace(" " + clazz + " ", " ");
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                elem.setAttribute("class", finalValue);
              }
            }
          }
        }
        return this;
      },
      toggleClass: function(value, stateVal) {
        var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
        if (typeof stateVal === "boolean" && isValidValue) {
          return stateVal ? this.addClass(value) : this.removeClass(value);
        }
        if (isFunction3(value)) {
          return this.each(function(i) {
            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
          });
        }
        return this.each(function() {
          var className, i, self2, classNames;
          if (isValidValue) {
            i = 0;
            self2 = jQuery(this);
            classNames = classesToArray(value);
            while (className = classNames[i++]) {
              if (self2.hasClass(className)) {
                self2.removeClass(className);
              } else {
                self2.addClass(className);
              }
            }
          } else if (value === void 0 || type === "boolean") {
            className = getClass(this);
            if (className) {
              dataPriv.set(this, "__className__", className);
            }
            if (this.setAttribute) {
              this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
            }
          }
        });
      },
      hasClass: function(selector) {
        var className, elem, i = 0;
        className = " " + selector + " ";
        while (elem = this[i++]) {
          if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
      val: function(value) {
        var hooks, ret, valueIsFunction, elem = this[0];
        if (!arguments.length) {
          if (elem) {
            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
              return ret;
            }
            ret = elem.value;
            if (typeof ret === "string") {
              return ret.replace(rreturn, "");
            }
            return ret == null ? "" : ret;
          }
          return;
        }
        valueIsFunction = isFunction3(value);
        return this.each(function(i) {
          var val;
          if (this.nodeType !== 1) {
            return;
          }
          if (valueIsFunction) {
            val = value.call(this, i, jQuery(this).val());
          } else {
            val = value;
          }
          if (val == null) {
            val = "";
          } else if (typeof val === "number") {
            val += "";
          } else if (Array.isArray(val)) {
            val = jQuery.map(val, function(value2) {
              return value2 == null ? "" : value2 + "";
            });
          }
          hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
            this.value = val;
          }
        });
      }
    });
    jQuery.extend({
      valHooks: {
        option: {
          get: function(elem) {
            var val = jQuery.find.attr(elem, "value");
            return val != null ? val : stripAndCollapse(jQuery.text(elem));
          }
        },
        select: {
          get: function(elem) {
            var value, option, i, options = elem.options, index2 = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index2 + 1 : options.length;
            if (index2 < 0) {
              i = max;
            } else {
              i = one ? index2 : 0;
            }
            for (; i < max; i++) {
              option = options[i];
              if ((option.selected || i === index2) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                value = jQuery(option).val();
                if (one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set: function(elem, value) {
            var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
            while (i--) {
              option = options[i];
              if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                optionSet = true;
              }
            }
            if (!optionSet) {
              elem.selectedIndex = -1;
            }
            return values;
          }
        }
      }
    });
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set: function(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
          }
        }
      };
      if (!support.checkOn) {
        jQuery.valHooks[this].get = function(elem) {
          return elem.getAttribute("value") === null ? "on" : elem.value;
        };
      }
    });
    support.focusin = "onfocusin" in window2;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
      e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
      trigger: function(event, data, elem, onlyHandlers) {
        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        cur = lastElement = tmp = elem = elem || document2;
        if (elem.nodeType === 3 || elem.nodeType === 8) {
          return;
        }
        if (rfocusMorph.test(type + jQuery.event.triggered)) {
          return;
        }
        if (type.indexOf(".") > -1) {
          namespaces = type.split(".");
          type = namespaces.shift();
          namespaces.sort();
        }
        ontype = type.indexOf(":") < 0 && "on" + type;
        event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        event.result = void 0;
        if (!event.target) {
          event.target = elem;
        }
        data = data == null ? [event] : jQuery.makeArray(data, [event]);
        special = jQuery.event.special[type] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
          return;
        }
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem.ownerDocument || document2)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
          }
        }
        i = 0;
        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
          lastElement = cur;
          event.type = i > 1 ? bubbleType : special.bindType || type;
          handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, data);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && acceptData(cur)) {
            event.result = handle.apply(cur, data);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        event.type = type;
        if (!onlyHandlers && !event.isDefaultPrevented()) {
          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
            if (ontype && isFunction3(elem[type]) && !isWindow(elem)) {
              tmp = elem[ontype];
              if (tmp) {
                elem[ontype] = null;
              }
              jQuery.event.triggered = type;
              if (event.isPropagationStopped()) {
                lastElement.addEventListener(type, stopPropagationCallback);
              }
              elem[type]();
              if (event.isPropagationStopped()) {
                lastElement.removeEventListener(type, stopPropagationCallback);
              }
              jQuery.event.triggered = void 0;
              if (tmp) {
                elem[ontype] = tmp;
              }
            }
          }
        }
        return event.result;
      },
      simulate: function(type, elem, event) {
        var e = jQuery.extend(new jQuery.Event(), event, {
          type,
          isSimulated: true
        });
        jQuery.event.trigger(e, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger: function(type, data) {
        return this.each(function() {
          jQuery.event.trigger(type, data, this);
        });
      },
      triggerHandler: function(type, data) {
        var elem = this[0];
        if (elem) {
          return jQuery.event.trigger(type, data, elem, true);
        }
      }
    });
    if (!support.focusin) {
      jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
        var handler = function(event) {
          jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
            if (!attaches) {
              doc.addEventListener(orig, handler, true);
            }
            dataPriv.access(doc, fix, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
            if (!attaches) {
              doc.removeEventListener(orig, handler, true);
              dataPriv.remove(doc, fix);
            } else {
              dataPriv.access(doc, fix, attaches);
            }
          }
        };
      });
    }
    var location = window2.location;
    var nonce = { guid: Date.now() };
    var rquery = /\?/;
    jQuery.parseXML = function(data) {
      var xml2, parserErrorElem;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        xml2 = new window2.DOMParser().parseFromString(data, "text/xml");
      } catch (e) {
      }
      parserErrorElem = xml2 && xml2.getElementsByTagName("parsererror")[0];
      if (!xml2 || parserErrorElem) {
        jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
          return el.textContent;
        }).join("\n") : data));
      }
      return xml2;
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix2, obj, traditional, add2) {
      var name2;
      if (Array.isArray(obj)) {
        jQuery.each(obj, function(i, v) {
          if (traditional || rbracket.test(prefix2)) {
            add2(prefix2, v);
          } else {
            buildParams(prefix2 + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add2);
          }
        });
      } else if (!traditional && toType(obj) === "object") {
        for (name2 in obj) {
          buildParams(prefix2 + "[" + name2 + "]", obj[name2], traditional, add2);
        }
      } else {
        add2(prefix2, obj);
      }
    }
    jQuery.param = function(a, traditional) {
      var prefix2, s = [], add2 = function(key, valueOrFunction) {
        var value = isFunction3(valueOrFunction) ? valueOrFunction() : valueOrFunction;
        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
      };
      if (a == null) {
        return "";
      }
      if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
        jQuery.each(a, function() {
          add2(this.name, this.value);
        });
      } else {
        for (prefix2 in a) {
          buildParams(prefix2, a[prefix2], traditional, add2);
        }
      }
      return s.join("&");
    };
    jQuery.fn.extend({
      serialize: function() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function() {
          var type = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
        }).map(function(_i, elem) {
          var val = jQuery(this).val();
          if (val == null) {
            return null;
          }
          if (Array.isArray(val)) {
            return jQuery.map(val, function(val2) {
              return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
            });
          }
          return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }).get();
      }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
    originAnchor.href = location.href;
    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }
        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
        if (isFunction3(func)) {
          while (dataType = dataTypes[i++]) {
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func);
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {}, seekingTransport = structure === transports;
      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
      var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in src) {
        if (src[key] !== void 0) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        }
      }
      if (deep) {
        jQuery.extend(true, target, deep);
      }
      return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
      var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
      while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === void 0) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }
          if (!firstDataType) {
            firstDataType = type;
          }
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
      }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
      if (dataTypes[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }
      current = dataTypes.shift();
      while (current) {
        if (s.responseFields[current]) {
          jqXHR[s.responseFields[current]] = response;
        }
        if (!prev && isSuccess && s.dataFilter) {
          response = s.dataFilter(response, s.dataType);
        }
        prev = current;
        current = dataTypes.shift();
        if (current) {
          if (current === "*") {
            current = prev;
          } else if (prev !== "*" && prev !== current) {
            conv = converters[prev + " " + current] || converters["* " + current];
            if (!conv) {
              for (conv2 in converters) {
                tmp = conv2.split(" ");
                if (tmp[1] === current) {
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                  if (conv) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.unshift(tmp[1]);
                    }
                    break;
                  }
                }
              }
            }
            if (conv !== true) {
              if (conv && s.throws) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }
      return { state: "success", data: response };
    }
    jQuery.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: location.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": jQuery.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      ajax: function(url, options) {
        if (typeof url === "object") {
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
          readyState: 0,
          getResponseHeader: function(key) {
            var match2;
            if (completed2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match2 = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match2[1].toLowerCase() + " "] = (responseHeaders[match2[1].toLowerCase() + " "] || []).concat(match2[2]);
                }
              }
              match2 = responseHeaders[key.toLowerCase() + " "];
            }
            return match2 == null ? null : match2.join(", ");
          },
          getAllResponseHeaders: function() {
            return completed2 ? responseHeadersString : null;
          },
          setRequestHeader: function(name2, value) {
            if (completed2 == null) {
              name2 = requestHeadersNames[name2.toLowerCase()] = requestHeadersNames[name2.toLowerCase()] || name2;
              requestHeaders[name2] = value;
            }
            return this;
          },
          overrideMimeType: function(type) {
            if (completed2 == null) {
              s.mimeType = type;
            }
            return this;
          },
          statusCode: function(map2) {
            var code;
            if (map2) {
              if (completed2) {
                jqXHR.always(map2[jqXHR.status]);
              } else {
                for (code in map2) {
                  statusCode[code] = [statusCode[code], map2[code]];
                }
              }
            }
            return this;
          },
          abort: function(statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };
        deferred.promise(jqXHR);
        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
        s.type = options.method || options.type || s.method || s.type;
        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
        if (s.crossDomain == null) {
          urlAnchor = document2.createElement("a");
          try {
            urlAnchor.href = s.url;
            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            s.crossDomain = true;
          }
        }
        if (s.data && s.processData && typeof s.data !== "string") {
          s.data = jQuery.param(s.data, s.traditional);
        }
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
        if (completed2) {
          return jqXHR;
        }
        fireGlobals = jQuery.event && s.global;
        if (fireGlobals && jQuery.active++ === 0) {
          jQuery.event.trigger("ajaxStart");
        }
        s.type = s.type.toUpperCase();
        s.hasContent = !rnoContent.test(s.type);
        cacheURL = s.url.replace(rhash, "");
        if (!s.hasContent) {
          uncached = s.url.slice(cacheURL.length);
          if (s.data && (s.processData || typeof s.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
            delete s.data;
          }
          if (s.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
          }
          s.url = cacheURL + uncached;
        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
          s.data = s.data.replace(r20, "+");
        }
        if (s.ifModified) {
          if (jQuery.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
          }
          if (jQuery.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
          }
        }
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        }
        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
        for (i in s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        }
        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
          return jqXHR.abort();
        }
        strAbort = "abort";
        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error);
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
        if (!transport) {
          done(-1, "No Transport");
        } else {
          jqXHR.readyState = 1;
          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
          }
          if (completed2) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            timeoutTimer = window2.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            completed2 = false;
            transport.send(requestHeaders, done);
          } catch (e) {
            if (completed2) {
              throw e;
            }
            done(-1, e);
          }
        }
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error2, response, modified, statusText = nativeStatusText;
          if (completed2) {
            return;
          }
          completed2 = true;
          if (timeoutTimer) {
            window2.clearTimeout(timeoutTimer);
          }
          transport = void 0;
          responseHeadersString = headers || "";
          jqXHR.readyState = status > 0 ? 4 : 0;
          isSuccess = status >= 200 && status < 300 || status === 304;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
            s.converters["text script"] = function() {
            };
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (status === 204 || s.type === "HEAD") {
              statusText = "nocontent";
            } else if (status === 304) {
              statusText = "notmodified";
            } else {
              statusText = response.state;
              success = response.data;
              error2 = response.error;
              isSuccess = !error2;
            }
          } else {
            error2 = statusText;
            if (status || !statusText) {
              statusText = "error";
              if (status < 0) {
                status = 0;
              }
            }
          }
          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error2]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (fireGlobals) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error2]);
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
        return jqXHR;
      },
      getJSON: function(url, data, callback) {
        return jQuery.get(url, data, callback, "json");
      },
      getScript: function(url, callback) {
        return jQuery.get(url, void 0, callback, "script");
      }
    });
    jQuery.each(["get", "post"], function(_i, method) {
      jQuery[method] = function(url, data, callback, type) {
        if (isFunction3(data)) {
          type = type || callback;
          callback = data;
          data = void 0;
        }
        return jQuery.ajax(jQuery.extend({
          url,
          type: method,
          dataType: type,
          data,
          success: callback
        }, jQuery.isPlainObject(url) && url));
      };
    });
    jQuery.ajaxPrefilter(function(s) {
      var i;
      for (i in s.headers) {
        if (i.toLowerCase() === "content-type") {
          s.contentType = s.headers[i] || "";
        }
      }
    });
    jQuery._evalUrl = function(url, options, doc) {
      return jQuery.ajax({
        url,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(response) {
          jQuery.globalEval(response, options, doc);
        }
      });
    };
    jQuery.fn.extend({
      wrapAll: function(html) {
        var wrap;
        if (this[0]) {
          if (isFunction3(html)) {
            html = html.call(this[0]);
          }
          wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
          }
          wrap.map(function() {
            var elem = this;
            while (elem.firstElementChild) {
              elem = elem.firstElementChild;
            }
            return elem;
          }).append(this);
        }
        return this;
      },
      wrapInner: function(html) {
        if (isFunction3(html)) {
          return this.each(function(i) {
            jQuery(this).wrapInner(html.call(this, i));
          });
        }
        return this.each(function() {
          var self2 = jQuery(this), contents = self2.contents();
          if (contents.length) {
            contents.wrapAll(html);
          } else {
            self2.append(html);
          }
        });
      },
      wrap: function(html) {
        var htmlIsFunction = isFunction3(html);
        return this.each(function(i) {
          jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
        });
      },
      unwrap: function(selector) {
        this.parent(selector).not("body").each(function() {
          jQuery(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
      return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
      try {
        return new window2.XMLHttpRequest();
      } catch (e) {
      }
    };
    var xhrSuccessStatus = {
      0: 200,
      1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
      var callback, errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send: function(headers, complete) {
            var i, xhr = options.xhr();
            xhr.open(options.type, options.url, options.async, options.username, options.password);
            if (options.xhrFields) {
              for (i in options.xhrFields) {
                xhr[i] = options.xhrFields[i];
              }
            }
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }
            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }
            for (i in headers) {
              xhr.setRequestHeader(i, headers[i]);
            }
            callback = function(type) {
              return function() {
                if (callback) {
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                  if (type === "abort") {
                    xhr.abort();
                  } else if (type === "error") {
                    if (typeof xhr.status !== "number") {
                      complete(0, "error");
                    } else {
                      complete(xhr.status, xhr.statusText);
                    }
                  } else {
                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
            if (xhr.onabort !== void 0) {
              xhr.onabort = errorCallback;
            } else {
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  window2.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (e) {
              if (callback) {
                throw e;
              }
            }
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery.ajaxPrefilter(function(s) {
      if (s.crossDomain) {
        s.contents.script = false;
      }
    });
    jQuery.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(text) {
          jQuery.globalEval(text);
          return text;
        }
      }
    });
    jQuery.ajaxPrefilter("script", function(s) {
      if (s.cache === void 0) {
        s.cache = false;
      }
      if (s.crossDomain) {
        s.type = "GET";
      }
    });
    jQuery.ajaxTransport("script", function(s) {
      if (s.crossDomain || s.scriptAttrs) {
        var script, callback;
        return {
          send: function(_, complete) {
            script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
              script.remove();
              callback = null;
              if (evt) {
                complete(evt.type === "error" ? 404 : 200, evt.type);
              }
            });
            document2.head.appendChild(script[0]);
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
        this[callback] = true;
        return callback;
      }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
      if (jsonProp || s.dataTypes[0] === "jsonp") {
        callbackName = s.jsonpCallback = isFunction3(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
        if (jsonProp) {
          s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s.jsonp !== false) {
          s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
        }
        s.converters["script json"] = function() {
          if (!responseContainer) {
            jQuery.error(callbackName + " was not called");
          }
          return responseContainer[0];
        };
        s.dataTypes[0] = "json";
        overwritten = window2[callbackName];
        window2[callbackName] = function() {
          responseContainer = arguments;
        };
        jqXHR.always(function() {
          if (overwritten === void 0) {
            jQuery(window2).removeProp(callbackName);
          } else {
            window2[callbackName] = overwritten;
          }
          if (s[callbackName]) {
            s.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && isFunction3(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = void 0;
        });
        return "script";
      }
    });
    support.createHTMLDocument = function() {
      var body = document2.implementation.createHTMLDocument("").body;
      body.innerHTML = "<form></form><form></form>";
      return body.childNodes.length === 2;
    }();
    jQuery.parseHTML = function(data, context, keepScripts) {
      if (typeof data !== "string") {
        return [];
      }
      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }
      var base2, parsed, scripts;
      if (!context) {
        if (support.createHTMLDocument) {
          context = document2.implementation.createHTMLDocument("");
          base2 = context.createElement("base");
          base2.href = document2.location.href;
          context.head.appendChild(base2);
        } else {
          context = document2;
        }
      }
      parsed = rsingleTag.exec(data);
      scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = buildFragment([data], context, scripts);
      if (scripts && scripts.length) {
        jQuery(scripts).remove();
      }
      return jQuery.merge([], parsed.childNodes);
    };
    jQuery.fn.load = function(url, params, callback) {
      var selector, type, response, self2 = this, off = url.indexOf(" ");
      if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
      }
      if (isFunction3(params)) {
        callback = params;
        params = void 0;
      } else if (params && typeof params === "object") {
        type = "POST";
      }
      if (self2.length > 0) {
        jQuery.ajax({
          url,
          type: type || "GET",
          dataType: "html",
          data: params
        }).done(function(responseText) {
          response = arguments;
          self2.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(jqXHR, status) {
          self2.each(function() {
            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
          });
        });
      }
      return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery.offset = {
      setOffset: function(elem, options, i) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
        if (position === "static") {
          elem.style.position = "relative";
        }
        curOffset = curElem.offset();
        curCSSTop = jQuery.css(elem, "top");
        curCSSLeft = jQuery.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
        if (calculatePosition) {
          curPosition = curElem.position();
          curTop = curPosition.top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(curCSSTop) || 0;
          curLeft = parseFloat(curCSSLeft) || 0;
        }
        if (isFunction3(options)) {
          options = options.call(elem, i, jQuery.extend({}, curOffset));
        }
        if (options.top != null) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (options.left != null) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(elem, props);
        } else {
          curElem.css(props);
        }
      }
    };
    jQuery.fn.extend({
      offset: function(options) {
        if (arguments.length) {
          return options === void 0 ? this : this.each(function(i) {
            jQuery.offset.setOffset(this, options, i);
          });
        }
        var rect, win, elem = this[0];
        if (!elem) {
          return;
        }
        if (!elem.getClientRects().length) {
          return { top: 0, left: 0 };
        }
        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset
        };
      },
      position: function() {
        if (!this[0]) {
          return;
        }
        var offsetParent, offset2, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
        if (jQuery.css(elem, "position") === "fixed") {
          offset2 = elem.getBoundingClientRect();
        } else {
          offset2 = this.offset();
          doc = elem.ownerDocument;
          offsetParent = elem.offsetParent || doc.documentElement;
          while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.parentNode;
          }
          if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
            parentOffset = jQuery(offsetParent).offset();
            parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
          }
        }
        return {
          top: offset2.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
          left: offset2.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
        };
      },
      offsetParent: function() {
        return this.map(function() {
          var offsetParent = this.offsetParent;
          while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || documentElement;
        });
      }
    });
    jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
      var top = prop === "pageYOffset";
      jQuery.fn[method] = function(val) {
        return access(this, function(elem, method2, val2) {
          var win;
          if (isWindow(elem)) {
            win = elem;
          } else if (elem.nodeType === 9) {
            win = elem.defaultView;
          }
          if (val2 === void 0) {
            return win ? win[prop] : elem[method2];
          }
          if (win) {
            win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
          } else {
            elem[method2] = val2;
          }
        }, method, val, arguments.length);
      };
    });
    jQuery.each(["top", "left"], function(_i, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
        if (computed) {
          computed = curCSS(elem, prop);
          return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
        }
      });
    });
    jQuery.each({ Height: "height", Width: "width" }, function(name2, type) {
      jQuery.each({
        padding: "inner" + name2,
        content: type,
        "": "outer" + name2
      }, function(defaultExtra, funcName) {
        jQuery.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function(elem, type2, value2) {
            var doc;
            if (isWindow(elem)) {
              return funcName.indexOf("outer") === 0 ? elem["inner" + name2] : elem.document.documentElement["client" + name2];
            }
            if (elem.nodeType === 9) {
              doc = elem.documentElement;
              return Math.max(elem.body["scroll" + name2], doc["scroll" + name2], elem.body["offset" + name2], doc["offset" + name2], doc["client" + name2]);
            }
            return value2 === void 0 ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(_i, type) {
      jQuery.fn[type] = function(fn) {
        return this.on(type, fn);
      };
    });
    jQuery.fn.extend({
      bind: function(types2, data, fn) {
        return this.on(types2, null, data, fn);
      },
      unbind: function(types2, fn) {
        return this.off(types2, null, fn);
      },
      delegate: function(selector, types2, data, fn) {
        return this.on(types2, selector, data, fn);
      },
      undelegate: function(selector, types2, fn) {
        return arguments.length === 1 ? this.off(selector, "**") : this.off(types2, selector || "**", fn);
      },
      hover: function(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name2) {
      jQuery.fn[name2] = function(data, fn) {
        return arguments.length > 0 ? this.on(name2, null, data, fn) : this.trigger(name2);
      };
    });
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function(fn, context) {
      var tmp, args, proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!isFunction3(fn)) {
        return void 0;
      }
      args = slice2.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice2.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    };
    jQuery.holdReady = function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction3;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
      var type = jQuery.type(obj);
      return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    };
    var _jQuery = window2.jQuery, _$ = window2.$;
    jQuery.noConflict = function(deep) {
      if (window2.$ === jQuery) {
        window2.$ = _$;
      }
      if (deep && window2.jQuery === jQuery) {
        window2.jQuery = _jQuery;
      }
      return jQuery;
    };
    if (typeof noGlobal === "undefined") {
      window2.jQuery = window2.$ = jQuery;
    }
    return jQuery;
  });
})(jquery);
var $ = jquery.exports;
var bootstrap$1 = { exports: {} };
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
var timeoutDuration = function() {
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser && window.Promise;
var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction$2(functionToCheck) {
  var getType2 = {};
  return functionToCheck && getType2.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var window2 = element.ownerDocument.defaultView;
  var css2 = window2.getComputedStyle(element, null);
  return property ? css2[property] : css2;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;
  var offsetParent = element.offsetParent || null;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node2) {
  if (node2.parentNode !== null) {
    return getRoot(node2.parentNode);
  }
  return node2;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
function getBordersSize(styles, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles["border" + sideA + "Width"]) + parseFloat(styles["border" + sideB + "Width"]);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document2) {
  var body = document2.body;
  var html = document2.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty$2 = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends$1 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect = {};
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {
  }
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, "x");
    vertScrollbar -= getBordersSize(styles, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE102 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE102 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };
  return getClientRect(offset2);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBoundaries(popper2, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper2) : findCommonOffsetParent(popper2, getReferenceNode(reference));
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper2.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper2.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper2.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref) {
  var width = _ref.width, height = _ref.height;
  return width * height;
}
function computeAutoPlacement(placement, refRect, popper2, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper2, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends$1({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width = _ref2.width, height = _ref2.height;
    return width >= popper2.clientWidth && height >= popper2.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state, popper2, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper2) : findCommonOffsetParent(popper2, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var window2 = element.ownerDocument.defaultView;
  var styles = window2.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper2, referenceOffsets, placement) {
  placement = placement.split("-")[0];
  var popperRect = getOuterSizes(popper2);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find$1(arr, check) {
  if (Array.prototype.find) {
    return arr.find(check);
  }
  return arr.filter(check)[0];
}
function findIndex(arr, prop, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }
  var match2 = find$1(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match2);
}
function runModifiers(modifiers2, data, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction$2(fn)) {
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
function update() {
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data = runModifiers(this.modifiers, data);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref) {
    var name2 = _ref.name, enabled = _ref.enabled;
    return enabled && name2 === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix2 = prefixes[i];
    var toCheck = prefix2 ? "" + prefix2 + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });
  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}
function setupEventListeners(reference, options, state, updateBound) {
  state.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference, state) {
  getWindow(reference).removeEventListener("resize", state.updateBound);
  state.scrollParents.forEach(function(target) {
    target.removeEventListener("scroll", state.updateBound);
  });
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}
function setStyles(element, styles) {
  Object.keys(styles).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = "px";
    }
    element.style[prop] = styles[prop] + unit;
  });
}
function setAttributes$1(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
function applyStyle(data) {
  setStyles(data.instance.popper, data.styles);
  setAttributes$1(data.instance.popper, data.attributes);
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}
function applyStyleOnLoad(reference, popper2, options, modifierOptions, state) {
  var referenceOffsets = getReferenceOffsets(state, popper2, reference, options.positionFixed);
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper2, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper2.setAttribute("x-placement", placement);
  setStyles(popper2, { position: options.positionFixed ? "fixed" : "absolute" });
  return options;
}
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets, popper2 = _data$offsets.popper, reference = _data$offsets.reference;
  var round2 = Math.round, floor = Math.floor;
  var noRound = function noRound2(v) {
    return v;
  };
  var referenceWidth = round2(reference.width);
  var popperWidth = round2(popper2.width);
  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round2 : floor;
  var verticalToInteger = !shouldRound ? noRound : round2;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper2.left - 1 : popper2.left),
    top: verticalToInteger(popper2.top),
    bottom: verticalToInteger(popper2.bottom),
    right: horizontalToInteger(popper2.right)
  };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
function computeStyle(data, options) {
  var x = options.x, y = options.y;
  var popper2 = data.offsets.popper;
  var legacyGpuAccelerationOption = find$1(data.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles = {
    position: popper2.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left = void 0, top = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find$1(modifiers2, function(_ref) {
    var name2 = _ref.name;
    return name2 === requestingName;
  });
  var isRequired = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired;
}
function arrow(data, options) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }
  var arrowElement = options.element;
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data;
    }
  }
  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets, popper2 = _data$offsets.popper, reference = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference[opSide] - arrowElementSize < popper2[side]) {
    data.offsets.popper[side] -= popper2[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper2[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper2[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  var css2 = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css2["margin" + sideCapitalized]);
  var popperBorderSide = parseFloat(css2["border" + sideCapitalized + "Width"]);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper2[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$2(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$2(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var validPlacements = placements.slice(3);
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index2 = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index2 + 1).concat(validPlacements.slice(0, index2));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip(data, options) {
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }
  flipOrder.forEach(function(step, index2) {
    if (placement !== step || flipOrder.length === index2 + 1) {
      return data;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;
    var floor = Math.floor;
    var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index2 + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? "-" + variation : "");
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}
function keepTogether(data) {
  var _data$offsets = data.offsets, popper2 = _data$offsets.popper, reference = _data$offsets.reference;
  var placement = data.placement.split("-")[0];
  var floor = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper2[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper2[measurement];
  }
  if (popper2[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }
  return data;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find$1(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  ops = ops.map(function(op, index2) {
    var measurement = (index2 === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a, b) {
      if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index2) {
    op.forEach(function(frag, index22) {
      if (isNumeric(frag)) {
        offsets[index2] += frag * (op[index22 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data, _ref) {
  var offset2 = _ref.offset;
  var placement = data.placement, _data$offsets = data.offsets, popper2 = _data$offsets.popper, reference = _data$offsets.reference;
  var basePlacement = placement.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset2)) {
    offsets = [+offset2, 0];
  } else {
    offsets = parseOffset(offset2, popper2, reference, basePlacement);
  }
  if (basePlacement === "left") {
    popper2.top += offsets[0];
    popper2.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper2.top += offsets[0];
    popper2.left += offsets[1];
  } else if (basePlacement === "top") {
    popper2.left += offsets[0];
    popper2.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper2.left += offsets[0];
    popper2.top += offsets[1];
  }
  data.popper = popper2;
  return data;
}
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data.instance.popper.style;
  var top = popperStyles.top, left = popperStyles.left, transform2 = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform2;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper2 = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper2[placement];
      if (popper2[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper2[placement], boundaries[placement]);
      }
      return defineProperty$2({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper2[mainSide];
      if (popper2[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper2[mainSide], boundaries[placement] - (placement === "right" ? popper2.width : popper2.height));
      }
      return defineProperty$2({}, mainSide, value);
    }
  };
  order.forEach(function(placement) {
    var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper2 = _extends$1({}, popper2, check[side](placement));
  });
  data.offsets.popper = popper2;
  return data;
}
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data.offsets, reference = _data$offsets.reference, popper2 = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty$2({}, side, reference[side]),
      end: defineProperty$2({}, side, reference[side] + reference[measurement] - popper2[measurement])
    };
    data.offsets.popper = _extends$1({}, popper2, shiftOffsets[shiftvariation]);
  }
  return data;
}
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find$1(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }
  return data;
}
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets, popper2 = _data$offsets.popper, reference = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper2[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper2[isHoriz ? "width" : "height"] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper2);
  return data;
}
var modifiers = {
  shift: {
    order: 100,
    enabled: true,
    fn: shift
  },
  offset: {
    order: 200,
    enabled: true,
    fn: offset,
    offset: 0
  },
  preventOverflow: {
    order: 300,
    enabled: true,
    fn: preventOverflow,
    priority: ["left", "right", "top", "bottom"],
    padding: 5,
    boundariesElement: "scrollParent"
  },
  keepTogether: {
    order: 400,
    enabled: true,
    fn: keepTogether
  },
  arrow: {
    order: 500,
    enabled: true,
    fn: arrow,
    element: "[x-arrow]"
  },
  flip: {
    order: 600,
    enabled: true,
    fn: flip,
    behavior: "flip",
    padding: 5,
    boundariesElement: "viewport",
    flipVariations: false,
    flipVariationsByContent: false
  },
  inner: {
    order: 700,
    enabled: false,
    fn: inner
  },
  hide: {
    order: 800,
    enabled: true,
    fn: hide
  },
  computeStyle: {
    order: 850,
    enabled: true,
    fn: computeStyle,
    gpuAcceleration: true,
    x: "bottom",
    y: "right"
  },
  applyStyle: {
    order: 900,
    enabled: true,
    fn: applyStyle,
    onLoad: applyStyleOnLoad,
    gpuAcceleration: void 0
  }
};
var Defaults = {
  placement: "bottom",
  positionFixed: false,
  eventsEnabled: true,
  removeOnDestroy: false,
  onCreate: function onCreate() {
  },
  onUpdate: function onUpdate() {
  },
  modifiers
};
var Popper = function() {
  function Popper2(reference, popper2) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper2);
    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };
    this.update = debounce$1(this.update.bind(this));
    this.options = _extends$1({}, Popper2.Defaults, options);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper2 && popper2.jquery ? popper2[0] : popper2;
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper2.Defaults.modifiers, options.modifiers)).forEach(function(name2) {
      _this.options.modifiers[name2] = _extends$1({}, Popper2.Defaults.modifiers[name2] || {}, options.modifiers ? options.modifiers[name2] : {});
    });
    this.modifiers = Object.keys(this.options.modifiers).map(function(name2) {
      return _extends$1({
        name: name2
      }, _this.options.modifiers[name2]);
    }).sort(function(a, b) {
      return a.order - b.order;
    });
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction$2(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper2, [{
    key: "update",
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
  }]);
  return Popper2;
}();
Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
var popper = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Popper
}, Symbol.toStringTag, { value: "Module" }));
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(popper);
/*!
  * Bootstrap v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(module, exports) {
  (function(global2, factory) {
    factory(exports, jquery.exports, require$$1);
  })(commonjsGlobal, function(exports2, $2, Popper2) {
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var $__default = /* @__PURE__ */ _interopDefaultLegacy($2);
    var Popper__default = /* @__PURE__ */ _interopDefaultLegacy(Popper2);
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var TRANSITION_END = "transitionend";
    var MAX_UID = 1e6;
    var MILLISECONDS_MULTIPLIER = 1e3;
    function toType(obj) {
      if (obj === null || typeof obj === "undefined") {
        return "" + obj;
      }
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }
    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($__default["default"](event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments);
          }
          return void 0;
        }
      };
    }
    function transitionEndEmulator(duration) {
      var _this = this;
      var called = false;
      $__default["default"](this).one(Util.TRANSITION_END, function() {
        called = true;
      });
      setTimeout(function() {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }
    function setTransitionEndSupport() {
      $__default["default"].fn.emulateTransitionEnd = transitionEndEmulator;
      $__default["default"].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    var Util = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(prefix2) {
        do {
          prefix2 += ~~(Math.random() * MAX_UID);
        } while (document.getElementById(prefix2));
        return prefix2;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute("data-target");
        if (!selector || selector === "#") {
          var hrefAttr = element.getAttribute("href");
          selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : "";
        }
        try {
          return document.querySelector(selector) ? selector : null;
        } catch (_) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        }
        var transitionDuration = $__default["default"](element).css("transition-duration");
        var transitionDelay = $__default["default"](element).css("transition-delay");
        var floatTransitionDuration = parseFloat(transitionDuration);
        var floatTransitionDelay = parseFloat(transitionDelay);
        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        }
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $__default["default"](element).trigger(TRANSITION_END);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? "element" : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
            }
          }
        }
      },
      findShadowRoot: function findShadowRoot(element) {
        if (!document.documentElement.attachShadow) {
          return null;
        }
        if (typeof element.getRootNode === "function") {
          var root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) {
          return element;
        }
        if (!element.parentNode) {
          return null;
        }
        return Util.findShadowRoot(element.parentNode);
      },
      jQueryDetection: function jQueryDetection() {
        if (typeof $__default["default"] === "undefined") {
          throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        }
        var version = $__default["default"].fn.jquery.split(" ")[0].split(".");
        var minMajor = 1;
        var ltMajor = 2;
        var minMinor = 9;
        var minPatch = 1;
        var maxMajor = 4;
        if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
          throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
      }
    };
    Util.jQueryDetection();
    setTransitionEndSupport();
    var NAME$a = "alert";
    var VERSION$a = "4.6.1";
    var DATA_KEY$a = "bs.alert";
    var EVENT_KEY$a = "." + DATA_KEY$a;
    var DATA_API_KEY$7 = ".data-api";
    var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NAME$a];
    var CLASS_NAME_ALERT = "alert";
    var CLASS_NAME_FADE$5 = "fade";
    var CLASS_NAME_SHOW$7 = "show";
    var EVENT_CLOSE = "close" + EVENT_KEY$a;
    var EVENT_CLOSED = "closed" + EVENT_KEY$a;
    var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$a + DATA_API_KEY$7;
    var SELECTOR_DISMISS = '[data-dismiss="alert"]';
    var Alert = /* @__PURE__ */ function() {
      function Alert2(element) {
        this._element = element;
      }
      var _proto = Alert2.prototype;
      _proto.close = function close(element) {
        var rootElement = this._element;
        if (element) {
          rootElement = this._getRootElement(element);
        }
        var customEvent = this._triggerCloseEvent(rootElement);
        if (customEvent.isDefaultPrevented()) {
          return;
        }
        this._removeElement(rootElement);
      };
      _proto.dispose = function dispose() {
        $__default["default"].removeData(this._element, DATA_KEY$a);
        this._element = null;
      };
      _proto._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;
        if (selector) {
          parent = document.querySelector(selector);
        }
        if (!parent) {
          parent = $__default["default"](element).closest("." + CLASS_NAME_ALERT)[0];
        }
        return parent;
      };
      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $__default["default"].Event(EVENT_CLOSE);
        $__default["default"](element).trigger(closeEvent);
        return closeEvent;
      };
      _proto._removeElement = function _removeElement(element) {
        var _this = this;
        $__default["default"](element).removeClass(CLASS_NAME_SHOW$7);
        if (!$__default["default"](element).hasClass(CLASS_NAME_FADE$5)) {
          this._destroyElement(element);
          return;
        }
        var transitionDuration = Util.getTransitionDurationFromElement(element);
        $__default["default"](element).one(Util.TRANSITION_END, function(event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(transitionDuration);
      };
      _proto._destroyElement = function _destroyElement(element) {
        $__default["default"](element).detach().trigger(EVENT_CLOSED).remove();
      };
      Alert2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var $element = $__default["default"](this);
          var data = $element.data(DATA_KEY$a);
          if (!data) {
            data = new Alert2(this);
            $element.data(DATA_KEY$a, data);
          }
          if (config === "close") {
            data[config](this);
          }
        });
      };
      Alert2._handleDismiss = function _handleDismiss(alertInstance) {
        return function(event) {
          if (event) {
            event.preventDefault();
          }
          alertInstance.close(this);
        };
      };
      _createClass(Alert2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$a;
        }
      }]);
      return Alert2;
    }();
    $__default["default"](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
    $__default["default"].fn[NAME$a] = Alert._jQueryInterface;
    $__default["default"].fn[NAME$a].Constructor = Alert;
    $__default["default"].fn[NAME$a].noConflict = function() {
      $__default["default"].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
      return Alert._jQueryInterface;
    };
    var NAME$9 = "button";
    var VERSION$9 = "4.6.1";
    var DATA_KEY$9 = "bs.button";
    var EVENT_KEY$9 = "." + DATA_KEY$9;
    var DATA_API_KEY$6 = ".data-api";
    var JQUERY_NO_CONFLICT$9 = $__default["default"].fn[NAME$9];
    var CLASS_NAME_ACTIVE$3 = "active";
    var CLASS_NAME_BUTTON = "btn";
    var CLASS_NAME_FOCUS = "focus";
    var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$9 + DATA_API_KEY$6;
    var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$9 + DATA_API_KEY$6 + " " + ("blur" + EVENT_KEY$9 + DATA_API_KEY$6);
    var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$9 + DATA_API_KEY$6;
    var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
    var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
    var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="button"]';
    var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
    var SELECTOR_INPUT = 'input:not([type="hidden"])';
    var SELECTOR_ACTIVE$2 = ".active";
    var SELECTOR_BUTTON = ".btn";
    var Button = /* @__PURE__ */ function() {
      function Button2(element) {
        this._element = element;
        this.shouldAvoidTriggerChange = false;
      }
      var _proto = Button2.prototype;
      _proto.toggle = function toggle2() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $__default["default"](this._element).closest(SELECTOR_DATA_TOGGLES)[0];
        if (rootElement) {
          var input = this._element.querySelector(SELECTOR_INPUT);
          if (input) {
            if (input.type === "radio") {
              if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE$3)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = rootElement.querySelector(SELECTOR_ACTIVE$2);
                if (activeElement) {
                  $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$3);
                }
              }
            }
            if (triggerChangeEvent) {
              if (input.type === "checkbox" || input.type === "radio") {
                input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE$3);
              }
              if (!this.shouldAvoidTriggerChange) {
                $__default["default"](input).trigger("change");
              }
            }
            input.focus();
            addAriaPressed = false;
          }
        }
        if (!(this._element.hasAttribute("disabled") || this._element.classList.contains("disabled"))) {
          if (addAriaPressed) {
            this._element.setAttribute("aria-pressed", !this._element.classList.contains(CLASS_NAME_ACTIVE$3));
          }
          if (triggerChangeEvent) {
            $__default["default"](this._element).toggleClass(CLASS_NAME_ACTIVE$3);
          }
        }
      };
      _proto.dispose = function dispose() {
        $__default["default"].removeData(this._element, DATA_KEY$9);
        this._element = null;
      };
      Button2._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
        return this.each(function() {
          var $element = $__default["default"](this);
          var data = $element.data(DATA_KEY$9);
          if (!data) {
            data = new Button2(this);
            $element.data(DATA_KEY$9, data);
          }
          data.shouldAvoidTriggerChange = avoidTriggerChange;
          if (config === "toggle") {
            data[config]();
          }
        });
      };
      _createClass(Button2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$9;
        }
      }]);
      return Button2;
    }();
    $__default["default"](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE_CARROT, function(event) {
      var button = event.target;
      var initialButton = button;
      if (!$__default["default"](button).hasClass(CLASS_NAME_BUTTON)) {
        button = $__default["default"](button).closest(SELECTOR_BUTTON)[0];
      }
      if (!button || button.hasAttribute("disabled") || button.classList.contains("disabled")) {
        event.preventDefault();
      } else {
        var inputBtn = button.querySelector(SELECTOR_INPUT);
        if (inputBtn && (inputBtn.hasAttribute("disabled") || inputBtn.classList.contains("disabled"))) {
          event.preventDefault();
          return;
        }
        if (initialButton.tagName === "INPUT" || button.tagName !== "LABEL") {
          Button._jQueryInterface.call($__default["default"](button), "toggle", initialButton.tagName === "INPUT");
        }
      }
    }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function(event) {
      var button = $__default["default"](event.target).closest(SELECTOR_BUTTON)[0];
      $__default["default"](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
    });
    $__default["default"](window).on(EVENT_LOAD_DATA_API$2, function() {
      var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));
      for (var i = 0, len = buttons.length; i < len; i++) {
        var button = buttons[i];
        var input = button.querySelector(SELECTOR_INPUT);
        if (input.checked || input.hasAttribute("checked")) {
          button.classList.add(CLASS_NAME_ACTIVE$3);
        } else {
          button.classList.remove(CLASS_NAME_ACTIVE$3);
        }
      }
      buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$4));
      for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
        var _button = buttons[_i];
        if (_button.getAttribute("aria-pressed") === "true") {
          _button.classList.add(CLASS_NAME_ACTIVE$3);
        } else {
          _button.classList.remove(CLASS_NAME_ACTIVE$3);
        }
      }
    });
    $__default["default"].fn[NAME$9] = Button._jQueryInterface;
    $__default["default"].fn[NAME$9].Constructor = Button;
    $__default["default"].fn[NAME$9].noConflict = function() {
      $__default["default"].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
      return Button._jQueryInterface;
    };
    var NAME$8 = "carousel";
    var VERSION$8 = "4.6.1";
    var DATA_KEY$8 = "bs.carousel";
    var EVENT_KEY$8 = "." + DATA_KEY$8;
    var DATA_API_KEY$5 = ".data-api";
    var JQUERY_NO_CONFLICT$8 = $__default["default"].fn[NAME$8];
    var ARROW_LEFT_KEYCODE = 37;
    var ARROW_RIGHT_KEYCODE = 39;
    var TOUCHEVENT_COMPAT_WAIT = 500;
    var SWIPE_THRESHOLD = 40;
    var CLASS_NAME_CAROUSEL = "carousel";
    var CLASS_NAME_ACTIVE$2 = "active";
    var CLASS_NAME_SLIDE = "slide";
    var CLASS_NAME_RIGHT = "carousel-item-right";
    var CLASS_NAME_LEFT = "carousel-item-left";
    var CLASS_NAME_NEXT = "carousel-item-next";
    var CLASS_NAME_PREV = "carousel-item-prev";
    var CLASS_NAME_POINTER_EVENT = "pointer-event";
    var DIRECTION_NEXT = "next";
    var DIRECTION_PREV = "prev";
    var DIRECTION_LEFT = "left";
    var DIRECTION_RIGHT = "right";
    var EVENT_SLIDE = "slide" + EVENT_KEY$8;
    var EVENT_SLID = "slid" + EVENT_KEY$8;
    var EVENT_KEYDOWN = "keydown" + EVENT_KEY$8;
    var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$8;
    var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$8;
    var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$8;
    var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$8;
    var EVENT_TOUCHEND = "touchend" + EVENT_KEY$8;
    var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$8;
    var EVENT_POINTERUP = "pointerup" + EVENT_KEY$8;
    var EVENT_DRAG_START = "dragstart" + EVENT_KEY$8;
    var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$8 + DATA_API_KEY$5;
    var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$8 + DATA_API_KEY$5;
    var SELECTOR_ACTIVE$1 = ".active";
    var SELECTOR_ACTIVE_ITEM = ".active.carousel-item";
    var SELECTOR_ITEM = ".carousel-item";
    var SELECTOR_ITEM_IMG = ".carousel-item img";
    var SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev";
    var SELECTOR_INDICATORS = ".carousel-indicators";
    var SELECTOR_DATA_SLIDE = "[data-slide], [data-slide-to]";
    var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
    var Default$7 = {
      interval: 5e3,
      keyboard: true,
      slide: false,
      pause: "hover",
      wrap: true,
      touch: true
    };
    var DefaultType$7 = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    };
    var PointerType = {
      TOUCH: "touch",
      PEN: "pen"
    };
    var Carousel = /* @__PURE__ */ function() {
      function Carousel2(element, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._element = element;
        this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
        this._addEventListeners();
      }
      var _proto = Carousel2.prototype;
      _proto.next = function next() {
        if (!this._isSliding) {
          this._slide(DIRECTION_NEXT);
        }
      };
      _proto.nextWhenVisible = function nextWhenVisible() {
        var $element = $__default["default"](this._element);
        if (!document.hidden && $element.is(":visible") && $element.css("visibility") !== "hidden") {
          this.next();
        }
      };
      _proto.prev = function prev() {
        if (!this._isSliding) {
          this._slide(DIRECTION_PREV);
        }
      };
      _proto.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }
        if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
      };
      _proto.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }
        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }
        if (this._config.interval && !this._isPaused) {
          this._updateInterval();
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };
      _proto.to = function to(index2) {
        var _this = this;
        this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
        var activeIndex = this._getItemIndex(this._activeElement);
        if (index2 > this._items.length - 1 || index2 < 0) {
          return;
        }
        if (this._isSliding) {
          $__default["default"](this._element).one(EVENT_SLID, function() {
            return _this.to(index2);
          });
          return;
        }
        if (activeIndex === index2) {
          this.pause();
          this.cycle();
          return;
        }
        var direction = index2 > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;
        this._slide(direction, this._items[index2]);
      };
      _proto.dispose = function dispose() {
        $__default["default"](this._element).off(EVENT_KEY$8);
        $__default["default"].removeData(this._element, DATA_KEY$8);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      };
      _proto._getConfig = function _getConfig(config) {
        config = _extends2({}, Default$7, config);
        Util.typeCheckConfig(NAME$8, config, DefaultType$7);
        return config;
      };
      _proto._handleSwipe = function _handleSwipe() {
        var absDeltax = Math.abs(this.touchDeltaX);
        if (absDeltax <= SWIPE_THRESHOLD) {
          return;
        }
        var direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
        if (direction > 0) {
          this.prev();
        }
        if (direction < 0) {
          this.next();
        }
      };
      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;
        if (this._config.keyboard) {
          $__default["default"](this._element).on(EVENT_KEYDOWN, function(event) {
            return _this2._keydown(event);
          });
        }
        if (this._config.pause === "hover") {
          $__default["default"](this._element).on(EVENT_MOUSEENTER, function(event) {
            return _this2.pause(event);
          }).on(EVENT_MOUSELEAVE, function(event) {
            return _this2.cycle(event);
          });
        }
        if (this._config.touch) {
          this._addTouchEventListeners();
        }
      };
      _proto._addTouchEventListeners = function _addTouchEventListeners() {
        var _this3 = this;
        if (!this._touchSupported) {
          return;
        }
        var start = function start2(event) {
          if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
            _this3.touchStartX = event.originalEvent.clientX;
          } else if (!_this3._pointerEvent) {
            _this3.touchStartX = event.originalEvent.touches[0].clientX;
          }
        };
        var move = function move2(event) {
          _this3.touchDeltaX = event.originalEvent.touches && event.originalEvent.touches.length > 1 ? 0 : event.originalEvent.touches[0].clientX - _this3.touchStartX;
        };
        var end = function end2(event) {
          if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
            _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
          }
          _this3._handleSwipe();
          if (_this3._config.pause === "hover") {
            _this3.pause();
            if (_this3.touchTimeout) {
              clearTimeout(_this3.touchTimeout);
            }
            _this3.touchTimeout = setTimeout(function(event2) {
              return _this3.cycle(event2);
            }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
          }
        };
        $__default["default"](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function(e) {
          return e.preventDefault();
        });
        if (this._pointerEvent) {
          $__default["default"](this._element).on(EVENT_POINTERDOWN, function(event) {
            return start(event);
          });
          $__default["default"](this._element).on(EVENT_POINTERUP, function(event) {
            return end(event);
          });
          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          $__default["default"](this._element).on(EVENT_TOUCHSTART, function(event) {
            return start(event);
          });
          $__default["default"](this._element).on(EVENT_TOUCHMOVE, function(event) {
            return move(event);
          });
          $__default["default"](this._element).on(EVENT_TOUCHEND, function(event) {
            return end(event);
          });
        }
      };
      _proto._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }
        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;
          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;
        }
      };
      _proto._getItemIndex = function _getItemIndex(element) {
        this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
        return this._items.indexOf(element);
      };
      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === DIRECTION_NEXT;
        var isPrevDirection = direction === DIRECTION_PREV;
        var activeIndex = this._getItemIndex(activeElement);
        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }
        var delta2 = direction === DIRECTION_PREV ? -1 : 1;
        var itemIndex = (activeIndex + delta2) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };
      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);
        var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));
        var slideEvent = $__default["default"].Event(EVENT_SLIDE, {
          relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
        $__default["default"](this._element).trigger(slideEvent);
        return slideEvent;
      };
      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
          $__default["default"](indicators).removeClass(CLASS_NAME_ACTIVE$2);
          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];
          if (nextIndicator) {
            $__default["default"](nextIndicator).addClass(CLASS_NAME_ACTIVE$2);
          }
        }
      };
      _proto._updateInterval = function _updateInterval() {
        var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);
        if (!element) {
          return;
        }
        var elementInterval = parseInt(element.getAttribute("data-interval"), 10);
        if (elementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = elementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
      };
      _proto._slide = function _slide(direction, element) {
        var _this4 = this;
        var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);
        var activeElementIndex = this._getItemIndex(activeElement);
        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
        var nextElementIndex = this._getItemIndex(nextElement);
        var isCycling = Boolean(this._interval);
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;
        if (direction === DIRECTION_NEXT) {
          directionalClassName = CLASS_NAME_LEFT;
          orderClassName = CLASS_NAME_NEXT;
          eventDirectionName = DIRECTION_LEFT;
        } else {
          directionalClassName = CLASS_NAME_RIGHT;
          orderClassName = CLASS_NAME_PREV;
          eventDirectionName = DIRECTION_RIGHT;
        }
        if (nextElement && $__default["default"](nextElement).hasClass(CLASS_NAME_ACTIVE$2)) {
          this._isSliding = false;
          return;
        }
        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
        if (slideEvent.isDefaultPrevented()) {
          return;
        }
        if (!activeElement || !nextElement) {
          return;
        }
        this._isSliding = true;
        if (isCycling) {
          this.pause();
        }
        this._setActiveIndicatorElement(nextElement);
        this._activeElement = nextElement;
        var slidEvent = $__default["default"].Event(EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
        if ($__default["default"](this._element).hasClass(CLASS_NAME_SLIDE)) {
          $__default["default"](nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $__default["default"](activeElement).addClass(directionalClassName);
          $__default["default"](nextElement).addClass(directionalClassName);
          var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
          $__default["default"](activeElement).one(Util.TRANSITION_END, function() {
            $__default["default"](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$2);
            $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2 + " " + orderClassName + " " + directionalClassName);
            _this4._isSliding = false;
            setTimeout(function() {
              return $__default["default"](_this4._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          $__default["default"](activeElement).removeClass(CLASS_NAME_ACTIVE$2);
          $__default["default"](nextElement).addClass(CLASS_NAME_ACTIVE$2);
          this._isSliding = false;
          $__default["default"](this._element).trigger(slidEvent);
        }
        if (isCycling) {
          this.cycle();
        }
      };
      Carousel2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var data = $__default["default"](this).data(DATA_KEY$8);
          var _config = _extends2({}, Default$7, $__default["default"](this).data());
          if (typeof config === "object") {
            _config = _extends2({}, _config, config);
          }
          var action = typeof config === "string" ? config : _config.slide;
          if (!data) {
            data = new Carousel2(this, _config);
            $__default["default"](this).data(DATA_KEY$8, data);
          }
          if (typeof config === "number") {
            data.to(config);
          } else if (typeof action === "string") {
            if (typeof data[action] === "undefined") {
              throw new TypeError('No method named "' + action + '"');
            }
            data[action]();
          } else if (_config.interval && _config.ride) {
            data.pause();
            data.cycle();
          }
        });
      };
      Carousel2._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);
        if (!selector) {
          return;
        }
        var target = $__default["default"](selector)[0];
        if (!target || !$__default["default"](target).hasClass(CLASS_NAME_CAROUSEL)) {
          return;
        }
        var config = _extends2({}, $__default["default"](target).data(), $__default["default"](this).data());
        var slideIndex = this.getAttribute("data-slide-to");
        if (slideIndex) {
          config.interval = false;
        }
        Carousel2._jQueryInterface.call($__default["default"](target), config);
        if (slideIndex) {
          $__default["default"](target).data(DATA_KEY$8).to(slideIndex);
        }
        event.preventDefault();
      };
      _createClass(Carousel2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$8;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default$7;
        }
      }]);
      return Carousel2;
    }();
    $__default["default"](document).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
    $__default["default"](window).on(EVENT_LOAD_DATA_API$1, function() {
      var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));
      for (var i = 0, len = carousels.length; i < len; i++) {
        var $carousel = $__default["default"](carousels[i]);
        Carousel._jQueryInterface.call($carousel, $carousel.data());
      }
    });
    $__default["default"].fn[NAME$8] = Carousel._jQueryInterface;
    $__default["default"].fn[NAME$8].Constructor = Carousel;
    $__default["default"].fn[NAME$8].noConflict = function() {
      $__default["default"].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
      return Carousel._jQueryInterface;
    };
    var NAME$7 = "collapse";
    var VERSION$7 = "4.6.1";
    var DATA_KEY$7 = "bs.collapse";
    var EVENT_KEY$7 = "." + DATA_KEY$7;
    var DATA_API_KEY$4 = ".data-api";
    var JQUERY_NO_CONFLICT$7 = $__default["default"].fn[NAME$7];
    var CLASS_NAME_SHOW$6 = "show";
    var CLASS_NAME_COLLAPSE = "collapse";
    var CLASS_NAME_COLLAPSING = "collapsing";
    var CLASS_NAME_COLLAPSED = "collapsed";
    var DIMENSION_WIDTH = "width";
    var DIMENSION_HEIGHT = "height";
    var EVENT_SHOW$4 = "show" + EVENT_KEY$7;
    var EVENT_SHOWN$4 = "shown" + EVENT_KEY$7;
    var EVENT_HIDE$4 = "hide" + EVENT_KEY$7;
    var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$7;
    var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$7 + DATA_API_KEY$4;
    var SELECTOR_ACTIVES = ".show, .collapsing";
    var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="collapse"]';
    var Default$6 = {
      toggle: true,
      parent: ""
    };
    var DefaultType$6 = {
      toggle: "boolean",
      parent: "(string|element)"
    };
    var Collapse = /* @__PURE__ */ function() {
      function Collapse2(element, config) {
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
        var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$3));
        for (var i = 0, len = toggleList.length; i < len; i++) {
          var elem = toggleList[i];
          var selector = Util.getSelectorFromElement(elem);
          var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function(foundElem) {
            return foundElem === element;
          });
          if (selector !== null && filterElement.length > 0) {
            this._selector = selector;
            this._triggerArray.push(elem);
          }
        }
        this._parent = this._config.parent ? this._getParent() : null;
        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }
        if (this._config.toggle) {
          this.toggle();
        }
      }
      var _proto = Collapse2.prototype;
      _proto.toggle = function toggle2() {
        if ($__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
          this.hide();
        } else {
          this.show();
        }
      };
      _proto.show = function show() {
        var _this = this;
        if (this._isTransitioning || $__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
          return;
        }
        var actives;
        var activesData;
        if (this._parent) {
          actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function(elem) {
            if (typeof _this._config.parent === "string") {
              return elem.getAttribute("data-parent") === _this._config.parent;
            }
            return elem.classList.contains(CLASS_NAME_COLLAPSE);
          });
          if (actives.length === 0) {
            actives = null;
          }
        }
        if (actives) {
          activesData = $__default["default"](actives).not(this._selector).data(DATA_KEY$7);
          if (activesData && activesData._isTransitioning) {
            return;
          }
        }
        var startEvent = $__default["default"].Event(EVENT_SHOW$4);
        $__default["default"](this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }
        if (actives) {
          Collapse2._jQueryInterface.call($__default["default"](actives).not(this._selector), "hide");
          if (!activesData) {
            $__default["default"](actives).data(DATA_KEY$7, null);
          }
        }
        var dimension = this._getDimension();
        $__default["default"](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        if (this._triggerArray.length) {
          $__default["default"](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr("aria-expanded", true);
        }
        this.setTransitioning(true);
        var complete = function complete2() {
          $__default["default"](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
          _this._element.style[dimension] = "";
          _this.setTransitioning(false);
          $__default["default"](_this._element).trigger(EVENT_SHOWN$4);
        };
        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll" + capitalizedDimension;
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };
      _proto.hide = function hide2() {
        var _this2 = this;
        if (this._isTransitioning || !$__default["default"](this._element).hasClass(CLASS_NAME_SHOW$6)) {
          return;
        }
        var startEvent = $__default["default"].Event(EVENT_HIDE$4);
        $__default["default"](this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }
        var dimension = this._getDimension();
        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        Util.reflow(this._element);
        $__default["default"](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$6);
        var triggerArrayLength = this._triggerArray.length;
        if (triggerArrayLength > 0) {
          for (var i = 0; i < triggerArrayLength; i++) {
            var trigger = this._triggerArray[i];
            var selector = Util.getSelectorFromElement(trigger);
            if (selector !== null) {
              var $elem = $__default["default"]([].slice.call(document.querySelectorAll(selector)));
              if (!$elem.hasClass(CLASS_NAME_SHOW$6)) {
                $__default["default"](trigger).addClass(CLASS_NAME_COLLAPSED).attr("aria-expanded", false);
              }
            }
          }
        }
        this.setTransitioning(true);
        var complete = function complete2() {
          _this2.setTransitioning(false);
          $__default["default"](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN$4);
        };
        this._element.style[dimension] = "";
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      };
      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };
      _proto.dispose = function dispose() {
        $__default["default"].removeData(this._element, DATA_KEY$7);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      };
      _proto._getConfig = function _getConfig(config) {
        config = _extends2({}, Default$6, config);
        config.toggle = Boolean(config.toggle);
        Util.typeCheckConfig(NAME$7, config, DefaultType$6);
        return config;
      };
      _proto._getDimension = function _getDimension() {
        var hasWidth = $__default["default"](this._element).hasClass(DIMENSION_WIDTH);
        return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
      };
      _proto._getParent = function _getParent() {
        var _this3 = this;
        var parent;
        if (Util.isElement(this._config.parent)) {
          parent = this._config.parent;
          if (typeof this._config.parent.jquery !== "undefined") {
            parent = this._config.parent[0];
          }
        } else {
          parent = document.querySelector(this._config.parent);
        }
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        var children = [].slice.call(parent.querySelectorAll(selector));
        $__default["default"](children).each(function(i, element) {
          _this3._addAriaAndCollapsedClass(Collapse2._getTargetFromElement(element), [element]);
        });
        return parent;
      };
      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        var isOpen = $__default["default"](element).hasClass(CLASS_NAME_SHOW$6);
        if (triggerArray.length) {
          $__default["default"](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr("aria-expanded", isOpen);
        }
      };
      Collapse2._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? document.querySelector(selector) : null;
      };
      Collapse2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var $element = $__default["default"](this);
          var data = $element.data(DATA_KEY$7);
          var _config = _extends2({}, Default$6, $element.data(), typeof config === "object" && config ? config : {});
          if (!data && _config.toggle && typeof config === "string" && /show|hide/.test(config)) {
            _config.toggle = false;
          }
          if (!data) {
            data = new Collapse2(this, _config);
            $element.data(DATA_KEY$7, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Collapse2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$7;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default$6;
        }
      }]);
      return Collapse2;
    }();
    $__default["default"](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
      if (event.currentTarget.tagName === "A") {
        event.preventDefault();
      }
      var $trigger = $__default["default"](this);
      var selector = Util.getSelectorFromElement(this);
      var selectors = [].slice.call(document.querySelectorAll(selector));
      $__default["default"](selectors).each(function() {
        var $target = $__default["default"](this);
        var data = $target.data(DATA_KEY$7);
        var config = data ? "toggle" : $trigger.data();
        Collapse._jQueryInterface.call($target, config);
      });
    });
    $__default["default"].fn[NAME$7] = Collapse._jQueryInterface;
    $__default["default"].fn[NAME$7].Constructor = Collapse;
    $__default["default"].fn[NAME$7].noConflict = function() {
      $__default["default"].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
      return Collapse._jQueryInterface;
    };
    var NAME$6 = "dropdown";
    var VERSION$6 = "4.6.1";
    var DATA_KEY$6 = "bs.dropdown";
    var EVENT_KEY$6 = "." + DATA_KEY$6;
    var DATA_API_KEY$3 = ".data-api";
    var JQUERY_NO_CONFLICT$6 = $__default["default"].fn[NAME$6];
    var ESCAPE_KEYCODE$1 = 27;
    var SPACE_KEYCODE = 32;
    var TAB_KEYCODE = 9;
    var ARROW_UP_KEYCODE = 38;
    var ARROW_DOWN_KEYCODE = 40;
    var RIGHT_MOUSE_BUTTON_WHICH = 3;
    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE$1);
    var CLASS_NAME_DISABLED$1 = "disabled";
    var CLASS_NAME_SHOW$5 = "show";
    var CLASS_NAME_DROPUP = "dropup";
    var CLASS_NAME_DROPRIGHT = "dropright";
    var CLASS_NAME_DROPLEFT = "dropleft";
    var CLASS_NAME_MENURIGHT = "dropdown-menu-right";
    var CLASS_NAME_POSITION_STATIC = "position-static";
    var EVENT_HIDE$3 = "hide" + EVENT_KEY$6;
    var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$6;
    var EVENT_SHOW$3 = "show" + EVENT_KEY$6;
    var EVENT_SHOWN$3 = "shown" + EVENT_KEY$6;
    var EVENT_CLICK = "click" + EVENT_KEY$6;
    var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$6 + DATA_API_KEY$3;
    var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$6 + DATA_API_KEY$3;
    var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$6 + DATA_API_KEY$3;
    var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
    var SELECTOR_FORM_CHILD = ".dropdown form";
    var SELECTOR_MENU = ".dropdown-menu";
    var SELECTOR_NAVBAR_NAV = ".navbar-nav";
    var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
    var PLACEMENT_TOP = "top-start";
    var PLACEMENT_TOPEND = "top-end";
    var PLACEMENT_BOTTOM = "bottom-start";
    var PLACEMENT_BOTTOMEND = "bottom-end";
    var PLACEMENT_RIGHT = "right-start";
    var PLACEMENT_LEFT = "left-start";
    var Default$5 = {
      offset: 0,
      flip: true,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
    };
    var DefaultType$5 = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)"
    };
    var Dropdown = /* @__PURE__ */ function() {
      function Dropdown2(element, config) {
        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();
        this._addEventListeners();
      }
      var _proto = Dropdown2.prototype;
      _proto.toggle = function toggle2() {
        if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
          return;
        }
        var isActive = $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5);
        Dropdown2._clearMenus();
        if (isActive) {
          return;
        }
        this.show(true);
      };
      _proto.show = function show(usePopper) {
        if (usePopper === void 0) {
          usePopper = false;
        }
        if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || $__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
          return;
        }
        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = $__default["default"].Event(EVENT_SHOW$3, relatedTarget);
        var parent = Dropdown2._getParentFromElement(this._element);
        $__default["default"](parent).trigger(showEvent);
        if (showEvent.isDefaultPrevented()) {
          return;
        }
        if (!this._inNavbar && usePopper) {
          if (typeof Popper__default["default"] === "undefined") {
            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          }
          var referenceElement = this._element;
          if (this._config.reference === "parent") {
            referenceElement = parent;
          } else if (Util.isElement(this._config.reference)) {
            referenceElement = this._config.reference;
            if (typeof this._config.reference.jquery !== "undefined") {
              referenceElement = this._config.reference[0];
            }
          }
          if (this._config.boundary !== "scrollParent") {
            $__default["default"](parent).addClass(CLASS_NAME_POSITION_STATIC);
          }
          this._popper = new Popper__default["default"](referenceElement, this._menu, this._getPopperConfig());
        }
        if ("ontouchstart" in document.documentElement && $__default["default"](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
          $__default["default"](document.body).children().on("mouseover", null, $__default["default"].noop);
        }
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
        $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_SHOWN$3, relatedTarget));
      };
      _proto.hide = function hide2() {
        if (this._element.disabled || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED$1) || !$__default["default"](this._menu).hasClass(CLASS_NAME_SHOW$5)) {
          return;
        }
        var relatedTarget = {
          relatedTarget: this._element
        };
        var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
        var parent = Dropdown2._getParentFromElement(this._element);
        $__default["default"](parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          return;
        }
        if (this._popper) {
          this._popper.destroy();
        }
        $__default["default"](this._menu).toggleClass(CLASS_NAME_SHOW$5);
        $__default["default"](parent).toggleClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
      };
      _proto.dispose = function dispose() {
        $__default["default"].removeData(this._element, DATA_KEY$6);
        $__default["default"](this._element).off(EVENT_KEY$6);
        this._element = null;
        this._menu = null;
        if (this._popper !== null) {
          this._popper.destroy();
          this._popper = null;
        }
      };
      _proto.update = function update2() {
        this._inNavbar = this._detectNavbar();
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      };
      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;
        $__default["default"](this._element).on(EVENT_CLICK, function(event) {
          event.preventDefault();
          event.stopPropagation();
          _this.toggle();
        });
      };
      _proto._getConfig = function _getConfig(config) {
        config = _extends2({}, this.constructor.Default, $__default["default"](this._element).data(), config);
        Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
        return config;
      };
      _proto._getMenuElement = function _getMenuElement() {
        if (!this._menu) {
          var parent = Dropdown2._getParentFromElement(this._element);
          if (parent) {
            this._menu = parent.querySelector(SELECTOR_MENU);
          }
        }
        return this._menu;
      };
      _proto._getPlacement = function _getPlacement() {
        var $parentDropdown = $__default["default"](this._element.parentNode);
        var placement = PLACEMENT_BOTTOM;
        if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
          placement = $__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
          placement = PLACEMENT_RIGHT;
        } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
          placement = PLACEMENT_LEFT;
        } else if ($__default["default"](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
          placement = PLACEMENT_BOTTOMEND;
        }
        return placement;
      };
      _proto._detectNavbar = function _detectNavbar() {
        return $__default["default"](this._element).closest(".navbar").length > 0;
      };
      _proto._getOffset = function _getOffset() {
        var _this2 = this;
        var offset2 = {};
        if (typeof this._config.offset === "function") {
          offset2.fn = function(data) {
            data.offsets = _extends2({}, data.offsets, _this2._config.offset(data.offsets, _this2._element));
            return data;
          };
        } else {
          offset2.offset = this._config.offset;
        }
        return offset2;
      };
      _proto._getPopperConfig = function _getPopperConfig() {
        var popperConfig = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        if (this._config.display === "static") {
          popperConfig.modifiers.applyStyle = {
            enabled: false
          };
        }
        return _extends2({}, popperConfig, this._config.popperConfig);
      };
      Dropdown2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var data = $__default["default"](this).data(DATA_KEY$6);
          var _config = typeof config === "object" ? config : null;
          if (!data) {
            data = new Dropdown2(this, _config);
            $__default["default"](this).data(DATA_KEY$6, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      Dropdown2._clearMenus = function _clearMenus(event) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === "keyup" && event.which !== TAB_KEYCODE)) {
          return;
        }
        var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));
        for (var i = 0, len = toggles.length; i < len; i++) {
          var parent = Dropdown2._getParentFromElement(toggles[i]);
          var context = $__default["default"](toggles[i]).data(DATA_KEY$6);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };
          if (event && event.type === "click") {
            relatedTarget.clickEvent = event;
          }
          if (!context) {
            continue;
          }
          var dropdownMenu = context._menu;
          if (!$__default["default"](parent).hasClass(CLASS_NAME_SHOW$5)) {
            continue;
          }
          if (event && (event.type === "click" && /input|textarea/i.test(event.target.tagName) || event.type === "keyup" && event.which === TAB_KEYCODE) && $__default["default"].contains(parent, event.target)) {
            continue;
          }
          var hideEvent = $__default["default"].Event(EVENT_HIDE$3, relatedTarget);
          $__default["default"](parent).trigger(hideEvent);
          if (hideEvent.isDefaultPrevented()) {
            continue;
          }
          if ("ontouchstart" in document.documentElement) {
            $__default["default"](document.body).children().off("mouseover", null, $__default["default"].noop);
          }
          toggles[i].setAttribute("aria-expanded", "false");
          if (context._popper) {
            context._popper.destroy();
          }
          $__default["default"](dropdownMenu).removeClass(CLASS_NAME_SHOW$5);
          $__default["default"](parent).removeClass(CLASS_NAME_SHOW$5).trigger($__default["default"].Event(EVENT_HIDDEN$3, relatedTarget));
        }
      };
      Dropdown2._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);
        if (selector) {
          parent = document.querySelector(selector);
        }
        return parent || element.parentNode;
      };
      Dropdown2._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE$1 && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default["default"](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
          return;
        }
        if (this.disabled || $__default["default"](this).hasClass(CLASS_NAME_DISABLED$1)) {
          return;
        }
        var parent = Dropdown2._getParentFromElement(this);
        var isActive = $__default["default"](parent).hasClass(CLASS_NAME_SHOW$5);
        if (!isActive && event.which === ESCAPE_KEYCODE$1) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (!isActive || event.which === ESCAPE_KEYCODE$1 || event.which === SPACE_KEYCODE) {
          if (event.which === ESCAPE_KEYCODE$1) {
            $__default["default"](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger("focus");
          }
          $__default["default"](this).trigger("click");
          return;
        }
        var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function(item) {
          return $__default["default"](item).is(":visible");
        });
        if (items.length === 0) {
          return;
        }
        var index2 = items.indexOf(event.target);
        if (event.which === ARROW_UP_KEYCODE && index2 > 0) {
          index2--;
        }
        if (event.which === ARROW_DOWN_KEYCODE && index2 < items.length - 1) {
          index2++;
        }
        if (index2 < 0) {
          index2 = 0;
        }
        items[index2].focus();
      };
      _createClass(Dropdown2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$6;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default$5;
        }
      }, {
        key: "DefaultType",
        get: function get2() {
          return DefaultType$5;
        }
      }]);
      return Dropdown2;
    }();
    $__default["default"](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$2 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
      event.preventDefault();
      event.stopPropagation();
      Dropdown._jQueryInterface.call($__default["default"](this), "toggle");
    }).on(EVENT_CLICK_DATA_API$2, SELECTOR_FORM_CHILD, function(e) {
      e.stopPropagation();
    });
    $__default["default"].fn[NAME$6] = Dropdown._jQueryInterface;
    $__default["default"].fn[NAME$6].Constructor = Dropdown;
    $__default["default"].fn[NAME$6].noConflict = function() {
      $__default["default"].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
      return Dropdown._jQueryInterface;
    };
    var NAME$5 = "modal";
    var VERSION$5 = "4.6.1";
    var DATA_KEY$5 = "bs.modal";
    var EVENT_KEY$5 = "." + DATA_KEY$5;
    var DATA_API_KEY$2 = ".data-api";
    var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
    var ESCAPE_KEYCODE = 27;
    var CLASS_NAME_SCROLLABLE = "modal-dialog-scrollable";
    var CLASS_NAME_SCROLLBAR_MEASURER = "modal-scrollbar-measure";
    var CLASS_NAME_BACKDROP = "modal-backdrop";
    var CLASS_NAME_OPEN = "modal-open";
    var CLASS_NAME_FADE$4 = "fade";
    var CLASS_NAME_SHOW$4 = "show";
    var CLASS_NAME_STATIC = "modal-static";
    var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
    var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
    var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
    var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
    var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
    var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
    var EVENT_RESIZE = "resize" + EVENT_KEY$5;
    var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$5;
    var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
    var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
    var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
    var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$5 + DATA_API_KEY$2;
    var SELECTOR_DIALOG = ".modal-dialog";
    var SELECTOR_MODAL_BODY = ".modal-body";
    var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="modal"]';
    var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="modal"]';
    var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
    var SELECTOR_STICKY_CONTENT = ".sticky-top";
    var Default$4 = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType$4 = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    };
    var Modal = /* @__PURE__ */ function() {
      function Modal2(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = element.querySelector(SELECTOR_DIALOG);
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._scrollbarWidth = 0;
      }
      var _proto = Modal2.prototype;
      _proto.toggle = function toggle2(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };
      _proto.show = function show(relatedTarget) {
        var _this = this;
        if (this._isShown || this._isTransitioning) {
          return;
        }
        var showEvent = $__default["default"].Event(EVENT_SHOW$2, {
          relatedTarget
        });
        $__default["default"](this._element).trigger(showEvent);
        if (showEvent.isDefaultPrevented()) {
          return;
        }
        this._isShown = true;
        if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
          this._isTransitioning = true;
        }
        this._checkScrollbar();
        this._setScrollbar();
        this._adjustDialog();
        this._setEscapeEvent();
        this._setResizeEvent();
        $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function(event) {
          return _this.hide(event);
        });
        $__default["default"](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function() {
          $__default["default"](_this._element).one(EVENT_MOUSEUP_DISMISS, function(event) {
            if ($__default["default"](event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });
        this._showBackdrop(function() {
          return _this._showElement(relatedTarget);
        });
      };
      _proto.hide = function hide2(event) {
        var _this2 = this;
        if (event) {
          event.preventDefault();
        }
        if (!this._isShown || this._isTransitioning) {
          return;
        }
        var hideEvent = $__default["default"].Event(EVENT_HIDE$2);
        $__default["default"](this._element).trigger(hideEvent);
        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }
        this._isShown = false;
        var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
        if (transition) {
          this._isTransitioning = true;
        }
        this._setEscapeEvent();
        this._setResizeEvent();
        $__default["default"](document).off(EVENT_FOCUSIN);
        $__default["default"](this._element).removeClass(CLASS_NAME_SHOW$4);
        $__default["default"](this._element).off(EVENT_CLICK_DISMISS$1);
        $__default["default"](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);
        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default["default"](this._element).one(Util.TRANSITION_END, function(event2) {
            return _this2._hideModal(event2);
          }).emulateTransitionEnd(transitionDuration);
        } else {
          this._hideModal();
        }
      };
      _proto.dispose = function dispose() {
        [window, this._element, this._dialog].forEach(function(htmlElement) {
          return $__default["default"](htmlElement).off(EVENT_KEY$5);
        });
        $__default["default"](document).off(EVENT_FOCUSIN);
        $__default["default"].removeData(this._element, DATA_KEY$5);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._isTransitioning = null;
        this._scrollbarWidth = null;
      };
      _proto.handleUpdate = function handleUpdate() {
        this._adjustDialog();
      };
      _proto._getConfig = function _getConfig(config) {
        config = _extends2({}, Default$4, config);
        Util.typeCheckConfig(NAME$5, config, DefaultType$4);
        return config;
      };
      _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
        var _this3 = this;
        var hideEventPrevented = $__default["default"].Event(EVENT_HIDE_PREVENTED);
        $__default["default"](this._element).trigger(hideEventPrevented);
        if (hideEventPrevented.isDefaultPrevented()) {
          return;
        }
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        if (!isModalOverflowing) {
          this._element.style.overflowY = "hidden";
        }
        this._element.classList.add(CLASS_NAME_STATIC);
        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default["default"](this._element).off(Util.TRANSITION_END);
        $__default["default"](this._element).one(Util.TRANSITION_END, function() {
          _this3._element.classList.remove(CLASS_NAME_STATIC);
          if (!isModalOverflowing) {
            $__default["default"](_this3._element).one(Util.TRANSITION_END, function() {
              _this3._element.style.overflowY = "";
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);
        this._element.focus();
      };
      _proto._showElement = function _showElement(relatedTarget) {
        var _this4 = this;
        var transition = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4);
        var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;
        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          document.body.appendChild(this._element);
        }
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        if ($__default["default"](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
          modalBody.scrollTop = 0;
        } else {
          this._element.scrollTop = 0;
        }
        if (transition) {
          Util.reflow(this._element);
        }
        $__default["default"](this._element).addClass(CLASS_NAME_SHOW$4);
        if (this._config.focus) {
          this._enforceFocus();
        }
        var shownEvent = $__default["default"].Event(EVENT_SHOWN$2, {
          relatedTarget
        });
        var transitionComplete = function transitionComplete2() {
          if (_this4._config.focus) {
            _this4._element.focus();
          }
          _this4._isTransitioning = false;
          $__default["default"](_this4._element).trigger(shownEvent);
        };
        if (transition) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
          $__default["default"](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
        } else {
          transitionComplete();
        }
      };
      _proto._enforceFocus = function _enforceFocus() {
        var _this5 = this;
        $__default["default"](document).off(EVENT_FOCUSIN).on(EVENT_FOCUSIN, function(event) {
          if (document !== event.target && _this5._element !== event.target && $__default["default"](_this5._element).has(event.target).length === 0) {
            _this5._element.focus();
          }
        });
      };
      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this6 = this;
        if (this._isShown) {
          $__default["default"](this._element).on(EVENT_KEYDOWN_DISMISS, function(event) {
            if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
              event.preventDefault();
              _this6.hide();
            } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
              _this6._triggerBackdropTransition();
            }
          });
        } else if (!this._isShown) {
          $__default["default"](this._element).off(EVENT_KEYDOWN_DISMISS);
        }
      };
      _proto._setResizeEvent = function _setResizeEvent() {
        var _this7 = this;
        if (this._isShown) {
          $__default["default"](window).on(EVENT_RESIZE, function(event) {
            return _this7.handleUpdate(event);
          });
        } else {
          $__default["default"](window).off(EVENT_RESIZE);
        }
      };
      _proto._hideModal = function _hideModal() {
        var _this8 = this;
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        this._isTransitioning = false;
        this._showBackdrop(function() {
          $__default["default"](document.body).removeClass(CLASS_NAME_OPEN);
          _this8._resetAdjustments();
          _this8._resetScrollbar();
          $__default["default"](_this8._element).trigger(EVENT_HIDDEN$2);
        });
      };
      _proto._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $__default["default"](this._backdrop).remove();
          this._backdrop = null;
        }
      };
      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this9 = this;
        var animate = $__default["default"](this._element).hasClass(CLASS_NAME_FADE$4) ? CLASS_NAME_FADE$4 : "";
        if (this._isShown && this._config.backdrop) {
          this._backdrop = document.createElement("div");
          this._backdrop.className = CLASS_NAME_BACKDROP;
          if (animate) {
            this._backdrop.classList.add(animate);
          }
          $__default["default"](this._backdrop).appendTo(document.body);
          $__default["default"](this._element).on(EVENT_CLICK_DISMISS$1, function(event) {
            if (_this9._ignoreBackdropClick) {
              _this9._ignoreBackdropClick = false;
              return;
            }
            if (event.target !== event.currentTarget) {
              return;
            }
            if (_this9._config.backdrop === "static") {
              _this9._triggerBackdropTransition();
            } else {
              _this9.hide();
            }
          });
          if (animate) {
            Util.reflow(this._backdrop);
          }
          $__default["default"](this._backdrop).addClass(CLASS_NAME_SHOW$4);
          if (!callback) {
            return;
          }
          if (!animate) {
            callback();
            return;
          }
          var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
          $__default["default"](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
        } else if (!this._isShown && this._backdrop) {
          $__default["default"](this._backdrop).removeClass(CLASS_NAME_SHOW$4);
          var callbackRemove = function callbackRemove2() {
            _this9._removeBackdrop();
            if (callback) {
              callback();
            }
          };
          if ($__default["default"](this._element).hasClass(CLASS_NAME_FADE$4)) {
            var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
            $__default["default"](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      };
      _proto._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }
        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      };
      _proto._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
      };
      _proto._checkScrollbar = function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };
      _proto._setScrollbar = function _setScrollbar() {
        var _this10 = this;
        if (this._isBodyOverflowing) {
          var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
          var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT));
          $__default["default"](fixedContent).each(function(index2, element) {
            var actualPadding2 = element.style.paddingRight;
            var calculatedPadding2 = $__default["default"](element).css("padding-right");
            $__default["default"](element).data("padding-right", actualPadding2).css("padding-right", parseFloat(calculatedPadding2) + _this10._scrollbarWidth + "px");
          });
          $__default["default"](stickyContent).each(function(index2, element) {
            var actualMargin = element.style.marginRight;
            var calculatedMargin = $__default["default"](element).css("margin-right");
            $__default["default"](element).data("margin-right", actualMargin).css("margin-right", parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
          });
          var actualPadding = document.body.style.paddingRight;
          var calculatedPadding = $__default["default"](document.body).css("padding-right");
          $__default["default"](document.body).data("padding-right", actualPadding).css("padding-right", parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }
        $__default["default"](document.body).addClass(CLASS_NAME_OPEN);
      };
      _proto._resetScrollbar = function _resetScrollbar() {
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        $__default["default"](fixedContent).each(function(index2, element) {
          var padding2 = $__default["default"](element).data("padding-right");
          $__default["default"](element).removeData("padding-right");
          element.style.paddingRight = padding2 ? padding2 : "";
        });
        var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
        $__default["default"](elements).each(function(index2, element) {
          var margin = $__default["default"](element).data("margin-right");
          if (typeof margin !== "undefined") {
            $__default["default"](element).css("margin-right", margin).removeData("margin-right");
          }
        });
        var padding = $__default["default"](document.body).data("padding-right");
        $__default["default"](document.body).removeData("padding-right");
        document.body.style.paddingRight = padding ? padding : "";
      };
      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      };
      Modal2._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function() {
          var data = $__default["default"](this).data(DATA_KEY$5);
          var _config = _extends2({}, Default$4, $__default["default"](this).data(), typeof config === "object" && config ? config : {});
          if (!data) {
            data = new Modal2(this, _config);
            $__default["default"](this).data(DATA_KEY$5, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };
      _createClass(Modal2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$5;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default$4;
        }
      }]);
      return Modal2;
    }();
    $__default["default"](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
      var _this11 = this;
      var target;
      var selector = Util.getSelectorFromElement(this);
      if (selector) {
        target = document.querySelector(selector);
      }
      var config = $__default["default"](target).data(DATA_KEY$5) ? "toggle" : _extends2({}, $__default["default"](target).data(), $__default["default"](this).data());
      if (this.tagName === "A" || this.tagName === "AREA") {
        event.preventDefault();
      }
      var $target = $__default["default"](target).one(EVENT_SHOW$2, function(showEvent) {
        if (showEvent.isDefaultPrevented()) {
          return;
        }
        $target.one(EVENT_HIDDEN$2, function() {
          if ($__default["default"](_this11).is(":visible")) {
            _this11.focus();
          }
        });
      });
      Modal._jQueryInterface.call($__default["default"](target), config, this);
    });
    $__default["default"].fn[NAME$5] = Modal._jQueryInterface;
    $__default["default"].fn[NAME$5].Constructor = Modal;
    $__default["default"].fn[NAME$5].noConflict = function() {
      $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
      return Modal._jQueryInterface;
    };
    var uriAttrs = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"];
    var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    var DefaultWhitelist = {
      "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };
    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function allowedAttribute(attr2, allowedAttributeList) {
      var attrName = attr2.nodeName.toLowerCase();
      if (allowedAttributeList.indexOf(attrName) !== -1) {
        if (uriAttrs.indexOf(attrName) !== -1) {
          return Boolean(SAFE_URL_PATTERN.test(attr2.nodeValue) || DATA_URL_PATTERN.test(attr2.nodeValue));
        }
        return true;
      }
      var regExp = allowedAttributeList.filter(function(attrRegex) {
        return attrRegex instanceof RegExp;
      });
      for (var i = 0, len = regExp.length; i < len; i++) {
        if (regExp[i].test(attrName)) {
          return true;
        }
      }
      return false;
    }
    function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
      if (unsafeHtml.length === 0) {
        return unsafeHtml;
      }
      if (sanitizeFn && typeof sanitizeFn === "function") {
        return sanitizeFn(unsafeHtml);
      }
      var domParser = new window.DOMParser();
      var createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
      var whitelistKeys = Object.keys(whiteList);
      var elements = [].slice.call(createdDocument.body.querySelectorAll("*"));
      var _loop = function _loop2(i2, len2) {
        var el = elements[i2];
        var elName = el.nodeName.toLowerCase();
        if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
          el.parentNode.removeChild(el);
          return "continue";
        }
        var attributeList = [].slice.call(el.attributes);
        var whitelistedAttributes = [].concat(whiteList["*"] || [], whiteList[elName] || []);
        attributeList.forEach(function(attr2) {
          if (!allowedAttribute(attr2, whitelistedAttributes)) {
            el.removeAttribute(attr2.nodeName);
          }
        });
      };
      for (var i = 0, len = elements.length; i < len; i++) {
        var _ret = _loop(i);
        if (_ret === "continue")
          continue;
      }
      return createdDocument.body.innerHTML;
    }
    var NAME$4 = "tooltip";
    var VERSION$4 = "4.6.1";
    var DATA_KEY$4 = "bs.tooltip";
    var EVENT_KEY$4 = "." + DATA_KEY$4;
    var JQUERY_NO_CONFLICT$4 = $__default["default"].fn[NAME$4];
    var CLASS_PREFIX$1 = "bs-tooltip";
    var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", "g");
    var DISALLOWED_ATTRIBUTES = ["sanitize", "whiteList", "sanitizeFn"];
    var CLASS_NAME_FADE$3 = "fade";
    var CLASS_NAME_SHOW$3 = "show";
    var HOVER_STATE_SHOW = "show";
    var HOVER_STATE_OUT = "out";
    var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
    var SELECTOR_ARROW = ".arrow";
    var TRIGGER_HOVER = "hover";
    var TRIGGER_FOCUS = "focus";
    var TRIGGER_CLICK = "click";
    var TRIGGER_MANUAL = "manual";
    var AttachmentMap = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    };
    var Default$3 = {
      animation: true,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: false,
      selector: false,
      placement: "top",
      offset: 0,
      container: false,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      customClass: "",
      sanitize: true,
      sanitizeFn: null,
      whiteList: DefaultWhitelist,
      popperConfig: null
    };
    var DefaultType$3 = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)"
    };
    var Event$1 = {
      HIDE: "hide" + EVENT_KEY$4,
      HIDDEN: "hidden" + EVENT_KEY$4,
      SHOW: "show" + EVENT_KEY$4,
      SHOWN: "shown" + EVENT_KEY$4,
      INSERTED: "inserted" + EVENT_KEY$4,
      CLICK: "click" + EVENT_KEY$4,
      FOCUSIN: "focusin" + EVENT_KEY$4,
      FOCUSOUT: "focusout" + EVENT_KEY$4,
      MOUSEENTER: "mouseenter" + EVENT_KEY$4,
      MOUSELEAVE: "mouseleave" + EVENT_KEY$4
    };
    var Tooltip = /* @__PURE__ */ function() {
      function Tooltip2(element, config) {
        if (typeof Popper__default["default"] === "undefined") {
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        }
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = "";
        this._activeTrigger = {};
        this._popper = null;
        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;
        this._setListeners();
      }
      var _proto = Tooltip2.prototype;
      _proto.enable = function enable() {
        this._isEnabled = true;
      };
      _proto.disable = function disable() {
        this._isEnabled = false;
      };
      _proto.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };
      _proto.toggle = function toggle2(event) {
        if (!this._isEnabled) {
          return;
        }
        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $__default["default"](event.currentTarget).data(dataKey);
          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $__default["default"](event.currentTarget).data(dataKey, context);
          }
          context._activeTrigger.click = !context._activeTrigger.click;
          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($__default["default"](this.getTipElement()).hasClass(CLASS_NAME_SHOW$3)) {
            this._leave(null, this);
            return;
          }
          this._enter(null, this);
        }
      };
      _proto.dispose = function dispose() {
        clearTimeout(this._timeout);
        $__default["default"].removeData(this.element, this.constructor.DATA_KEY);
        $__default["default"](this.element).off(this.constructor.EVENT_KEY);
        $__default["default"](this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
        if (this.tip) {
          $__default["default"](this.tip).remove();
        }
        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;
        if (this._popper) {
          this._popper.destroy();
        }
        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };
      _proto.show = function show() {
        var _this = this;
        if ($__default["default"](this.element).css("display") === "none") {
          throw new Error("Please use show on visible elements");
        }
        var showEvent = $__default["default"].Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          $__default["default"](this.element).trigger(showEvent);
          var shadowRoot = Util.findShadowRoot(this.element);
          var isInTheDom = $__default["default"].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);
          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }
          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute("id", tipId);
          this.element.setAttribute("aria-describedby", tipId);
          this.setContent();
          if (this.config.animation) {
            $__default["default"](tip).addClass(CLASS_NAME_FADE$3);
          }
          var placement = typeof this.config.placement === "function" ? this.config.placement.call(this, tip, this.element) : this.config.placement;
          var attachment = this._getAttachment(placement);
          this.addAttachmentClass(attachment);
          var container = this._getContainer();
          $__default["default"](tip).data(this.constructor.DATA_KEY, this);
          if (!$__default["default"].contains(this.element.ownerDocument.documentElement, this.tip)) {
            $__default["default"](tip).appendTo(container);
          }
          $__default["default"](this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new Popper__default["default"](this.element, tip, this._getPopperConfig(attachment));
          $__default["default"](tip).addClass(CLASS_NAME_SHOW$3);
          $__default["default"](tip).addClass(this.config.customClass);
          if ("ontouchstart" in document.documentElement) {
            $__default["default"](document.body).children().on("mouseover", null, $__default["default"].noop);
          }
          var complete = function complete2() {
            if (_this.config.animation) {
              _this._fixTransition();
            }
            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $__default["default"](_this.element).trigger(_this.constructor.Event.SHOWN);
            if (prevHoverState === HOVER_STATE_OUT) {
              _this._leave(null, _this);
            }
          };
          if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
            var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
            $__default["default"](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        }
      };
      _proto.hide = function hide2(callback) {
        var _this2 = this;
        var tip = this.getTipElement();
        var hideEvent = $__default["default"].Event(this.constructor.Event.HIDE);
        var complete = function complete2() {
          if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }
          _this2._cleanTipClass();
          _this2.element.removeAttribute("aria-describedby");
          $__default["default"](_this2.element).trigger(_this2.constructor.Event.HIDDEN);
          if (_this2._popper !== null) {
            _this2._popper.destroy();
          }
          if (callback) {
            callback();
          }
        };
        $__default["default"](this.element).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          return;
        }
        $__default["default"](tip).removeClass(CLASS_NAME_SHOW$3);
        if ("ontouchstart" in document.documentElement) {
          $__default["default"](document.body).children().off("mouseover", null, $__default["default"].noop);
        }
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        if ($__default["default"](this.tip).hasClass(CLASS_NAME_FADE$3)) {
          var transitionDuration = Util.getTransitionDurationFromElement(tip);
          $__default["default"](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
        this._hoverState = "";
      };
      _proto.update = function update2() {
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      };
      _proto.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };
      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
      };
      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $__default["default"](this.config.template)[0];
        return this.tip;
      };
      _proto.setContent = function setContent() {
        var tip = this.getTipElement();
        this.setElementContent($__default["default"](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
        $__default["default"](tip).removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$3);
      };
      _proto.setElementContent = function setElementContent($element, content) {
        if (typeof content === "object" && (content.nodeType || content.jquery)) {
          if (this.config.html) {
            if (!$__default["default"](content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($__default["default"](content).text());
          }
          return;
        }
        if (this.config.html) {
          if (this.config.sanitize) {
            content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
          }
          $element.html(content);
        } else {
          $element.text(content);
        }
      };
      _proto.getTitle = function getTitle() {
        var title = this.element.getAttribute("data-original-title");
        if (!title) {
          title = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
        }
        return title;
      };
      _proto._getPopperConfig = function _getPopperConfig(attachment) {
        var _this3 = this;
        var defaultBsConfig = {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: SELECTOR_ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate2(data) {
            if (data.originalPlacement !== data.placement) {
              _this3._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate2(data) {
            return _this3._handlePopperPlacementChange(data);
          }
        };
        return _extends2({}, defaultBsConfig, this.config.popperConfig);
      };
      _proto._getOffset = function _getOffset() {
        var _this4 = this;
        var offset2 = {};
        if (typeof this.config.offset === "function") {
          offset2.fn = function(data) {
            data.offsets = _extends2({}, data.offsets, _this4.config.offset(data.offsets, _this4.element));
            return data;
          };
        } else {
          offset2.offset = this.config.offset;
        }
        return offset2;
      };
      _proto._getContainer = function _getContainer() {
        if (this.config.container === false) {
          return document.body;
        }
        if (Util.isElement(this.config.container)) {
          return $__default["default"](this.config.container);
        }
        return $__default["default"](document).find(this.config.container);
      };
      _proto._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };
      _proto._setListeners = function _setListeners() {
        var _this5 = this;
        var triggers = this.config.trigger.split(" ");
        triggers.forEach(function(trigger) {
          if (trigger === "click") {
            $__default["default"](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function(event) {
              return _this5.toggle(event);
            });
          } else if (trigger !== TRIGGER_MANUAL) {
            var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
            var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
            $__default["default"](_this5.element).on(eventIn, _this5.config.selector, function(event) {
              return _this5._enter(event);
            }).on(eventOut, _this5.config.selector, function(event) {
              return _this5._leave(event);
            });
          }
        });
        this._hideModalHandler = function() {
          if (_this5.element) {
            _this5.hide();
          }
        };
        $__default["default"](this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
        if (this.config.selector) {
          this.config = _extends2({}, this.config, {
            trigger: "manual",
            selector: ""
          });
        } else {
          this._fixTitle();
        }
      };
      _proto._fixTitle = function _fixTitle() {
        var titleType = typeof this.element.getAttribute("data-original-title");
        if (this.element.getAttribute("title") || titleType !== "string") {
          this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
          this.element.setAttribute("title", "");
        }
      };
      _proto._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $__default["default"](event.currentTarget).data(dataKey);
        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default["default"](event.currentTarget).data(dataKey, context);
        }
        if (event) {
          context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
        }
        if ($__default["default"](context.getTipElement()).hasClass(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
          context._hoverState = HOVER_STATE_SHOW;
          return;
        }
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_SHOW;
        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }
        context._timeout = setTimeout(function() {
          if (context._hoverState === HOVER_STATE_SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };
      _proto._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $__default["default"](event.currentTarget).data(dataKey);
        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default["default"](event.currentTarget).data(dataKey, context);
        }
        if (event) {
          context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
        }
        if (context._isWithActiveTrigger()) {
          return;
        }
        clearTimeout(context._timeout);
        context._hoverState = HOVER_STATE_OUT;
        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }
        context._timeout = setTimeout(function() {
          if (context._hoverState === HOVER_STATE_OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };
      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }
        return false;
      };
      _proto._getConfig = function _getConfig(config) {
        var dataAttributes = $__default["default"](this.element).data();
        Object.keys(dataAttributes).forEach(function(dataAttr) {
          if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
            delete dataAttributes[dataAttr];
          }
        });
        config = _extends2({}, this.constructor.Default, dataAttributes, typeof config === "object" && config ? config : {});
        if (typeof config.delay === "number") {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }
        if (typeof config.title === "number") {
          config.title = config.title.toString();
        }
        if (typeof config.content === "number") {
          config.content = config.content.toString();
        }
        Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
        if (config.sanitize) {
          config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
        }
        return config;
      };
      _proto._getDelegateConfig = function _getDelegateConfig() {
        var config = {};
        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }
        return config;
      };
      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $__default["default"](this.getTipElement());
        var tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX$1);
        if (tabClass !== null && tabClass.length) {
          $tip.removeClass(tabClass.join(""));
        }
      };
      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
        this.tip = popperData.instance.popper;
        this._cleanTipClass();
        this.addAttachmentClass(this._getAttachment(popperData.placement));
      };
      _proto._fixTransition = function _fixTransition() {
        var tip = this.getTipElement();
        var initConfigAnimation = this.config.animation;
        if (tip.getAttribute("x-placement") !== null) {
          return;
        }
        $__default["default"](tip).removeClass(CLASS_NAME_FADE$3);
        this.config.animation = false;
        this.hide();
        this.show();
        this.config.animation = initConfigAnimation;
      };
      Tooltip2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var $element = $__default["default"](this);
          var data = $element.data(DATA_KEY$4);
          var _config = typeof config === "object" && config;
          if (!data && /dispose|hide/.test(config)) {
            return;
          }
          if (!data) {
            data = new Tooltip2(this, _config);
            $element.data(DATA_KEY$4, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Tooltip2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$4;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default$3;
        }
      }, {
        key: "NAME",
        get: function get2() {
          return NAME$4;
        }
      }, {
        key: "DATA_KEY",
        get: function get2() {
          return DATA_KEY$4;
        }
      }, {
        key: "Event",
        get: function get2() {
          return Event$1;
        }
      }, {
        key: "EVENT_KEY",
        get: function get2() {
          return EVENT_KEY$4;
        }
      }, {
        key: "DefaultType",
        get: function get2() {
          return DefaultType$3;
        }
      }]);
      return Tooltip2;
    }();
    $__default["default"].fn[NAME$4] = Tooltip._jQueryInterface;
    $__default["default"].fn[NAME$4].Constructor = Tooltip;
    $__default["default"].fn[NAME$4].noConflict = function() {
      $__default["default"].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
      return Tooltip._jQueryInterface;
    };
    var NAME$3 = "popover";
    var VERSION$3 = "4.6.1";
    var DATA_KEY$3 = "bs.popover";
    var EVENT_KEY$3 = "." + DATA_KEY$3;
    var JQUERY_NO_CONFLICT$3 = $__default["default"].fn[NAME$3];
    var CLASS_PREFIX = "bs-popover";
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", "g");
    var CLASS_NAME_FADE$2 = "fade";
    var CLASS_NAME_SHOW$2 = "show";
    var SELECTOR_TITLE = ".popover-header";
    var SELECTOR_CONTENT = ".popover-body";
    var Default$2 = _extends2({}, Tooltip.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
    var DefaultType$2 = _extends2({}, Tooltip.DefaultType, {
      content: "(string|element|function)"
    });
    var Event = {
      HIDE: "hide" + EVENT_KEY$3,
      HIDDEN: "hidden" + EVENT_KEY$3,
      SHOW: "show" + EVENT_KEY$3,
      SHOWN: "shown" + EVENT_KEY$3,
      INSERTED: "inserted" + EVENT_KEY$3,
      CLICK: "click" + EVENT_KEY$3,
      FOCUSIN: "focusin" + EVENT_KEY$3,
      FOCUSOUT: "focusout" + EVENT_KEY$3,
      MOUSEENTER: "mouseenter" + EVENT_KEY$3,
      MOUSELEAVE: "mouseleave" + EVENT_KEY$3
    };
    var Popover = /* @__PURE__ */ function(_Tooltip) {
      _inheritsLoose(Popover2, _Tooltip);
      function Popover2() {
        return _Tooltip.apply(this, arguments) || this;
      }
      var _proto = Popover2.prototype;
      _proto.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };
      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $__default["default"](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };
      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $__default["default"](this.config.template)[0];
        return this.tip;
      };
      _proto.setContent = function setContent() {
        var $tip = $__default["default"](this.getTipElement());
        this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());
        var content = this._getContent();
        if (typeof content === "function") {
          content = content.call(this.element);
        }
        this.setElementContent($tip.find(SELECTOR_CONTENT), content);
        $tip.removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$2);
      };
      _proto._getContent = function _getContent() {
        return this.element.getAttribute("data-content") || this.config.content;
      };
      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $__default["default"](this.getTipElement());
        var tabClass = $tip.attr("class").match(BSCLS_PREFIX_REGEX);
        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(""));
        }
      };
      Popover2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var data = $__default["default"](this).data(DATA_KEY$3);
          var _config = typeof config === "object" ? config : null;
          if (!data && /dispose|hide/.test(config)) {
            return;
          }
          if (!data) {
            data = new Popover2(this, _config);
            $__default["default"](this).data(DATA_KEY$3, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Popover2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$3;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default$2;
        }
      }, {
        key: "NAME",
        get: function get2() {
          return NAME$3;
        }
      }, {
        key: "DATA_KEY",
        get: function get2() {
          return DATA_KEY$3;
        }
      }, {
        key: "Event",
        get: function get2() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get2() {
          return EVENT_KEY$3;
        }
      }, {
        key: "DefaultType",
        get: function get2() {
          return DefaultType$2;
        }
      }]);
      return Popover2;
    }(Tooltip);
    $__default["default"].fn[NAME$3] = Popover._jQueryInterface;
    $__default["default"].fn[NAME$3].Constructor = Popover;
    $__default["default"].fn[NAME$3].noConflict = function() {
      $__default["default"].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
      return Popover._jQueryInterface;
    };
    var NAME$2 = "scrollspy";
    var VERSION$2 = "4.6.1";
    var DATA_KEY$2 = "bs.scrollspy";
    var EVENT_KEY$2 = "." + DATA_KEY$2;
    var DATA_API_KEY$1 = ".data-api";
    var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NAME$2];
    var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
    var CLASS_NAME_ACTIVE$1 = "active";
    var EVENT_ACTIVATE = "activate" + EVENT_KEY$2;
    var EVENT_SCROLL = "scroll" + EVENT_KEY$2;
    var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$2 + DATA_API_KEY$1;
    var METHOD_OFFSET = "offset";
    var METHOD_POSITION = "position";
    var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
    var SELECTOR_NAV_LIST_GROUP$1 = ".nav, .list-group";
    var SELECTOR_NAV_LINKS = ".nav-link";
    var SELECTOR_NAV_ITEMS = ".nav-item";
    var SELECTOR_LIST_ITEMS = ".list-group-item";
    var SELECTOR_DROPDOWN$1 = ".dropdown";
    var SELECTOR_DROPDOWN_ITEMS = ".dropdown-item";
    var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
    var Default$1 = {
      offset: 10,
      method: "auto",
      target: ""
    };
    var DefaultType$1 = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    };
    var ScrollSpy = /* @__PURE__ */ function() {
      function ScrollSpy2(element, config) {
        var _this = this;
        this._element = element;
        this._scrollElement = element.tagName === "BODY" ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $__default["default"](this._scrollElement).on(EVENT_SCROLL, function(event) {
          return _this._process(event);
        });
        this.refresh();
        this._process();
      }
      var _proto = ScrollSpy2.prototype;
      _proto.refresh = function refresh() {
        var _this2 = this;
        var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
        var offsetMethod = this._config.method === "auto" ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = [].slice.call(document.querySelectorAll(this._selector));
        targets.map(function(element) {
          var target;
          var targetSelector = Util.getSelectorFromElement(element);
          if (targetSelector) {
            target = document.querySelector(targetSelector);
          }
          if (target) {
            var targetBCR = target.getBoundingClientRect();
            if (targetBCR.width || targetBCR.height) {
              return [$__default["default"](target)[offsetMethod]().top + offsetBase, targetSelector];
            }
          }
          return null;
        }).filter(function(item) {
          return item;
        }).sort(function(a, b) {
          return a[0] - b[0];
        }).forEach(function(item) {
          _this2._offsets.push(item[0]);
          _this2._targets.push(item[1]);
        });
      };
      _proto.dispose = function dispose() {
        $__default["default"].removeData(this._element, DATA_KEY$2);
        $__default["default"](this._scrollElement).off(EVENT_KEY$2);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      };
      _proto._getConfig = function _getConfig(config) {
        config = _extends2({}, Default$1, typeof config === "object" && config ? config : {});
        if (typeof config.target !== "string" && Util.isElement(config.target)) {
          var id2 = $__default["default"](config.target).attr("id");
          if (!id2) {
            id2 = Util.getUID(NAME$2);
            $__default["default"](config.target).attr("id", id2);
          }
          config.target = "#" + id2;
        }
        Util.typeCheckConfig(NAME$2, config, DefaultType$1);
        return config;
      };
      _proto._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };
      _proto._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };
      _proto._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      };
      _proto._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;
        var scrollHeight = this._getScrollHeight();
        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }
        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];
          if (this._activeTarget !== target) {
            this._activate(target);
          }
          return;
        }
        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;
          this._clear();
          return;
        }
        for (var i = this._offsets.length; i--; ) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === "undefined" || scrollTop < this._offsets[i + 1]);
          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };
      _proto._activate = function _activate(target) {
        this._activeTarget = target;
        this._clear();
        var queries = this._selector.split(",").map(function(selector) {
          return selector + '[data-target="' + target + '"],' + selector + '[href="' + target + '"]';
        });
        var $link = $__default["default"]([].slice.call(document.querySelectorAll(queries.join(","))));
        if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
          $link.closest(SELECTOR_DROPDOWN$1).find(SELECTOR_DROPDOWN_TOGGLE$1).addClass(CLASS_NAME_ACTIVE$1);
          $link.addClass(CLASS_NAME_ACTIVE$1);
        } else {
          $link.addClass(CLASS_NAME_ACTIVE$1);
          $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$1);
          $link.parents(SELECTOR_NAV_LIST_GROUP$1).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$1);
        }
        $__default["default"](this._scrollElement).trigger(EVENT_ACTIVATE, {
          relatedTarget: target
        });
      };
      _proto._clear = function _clear() {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function(node2) {
          return node2.classList.contains(CLASS_NAME_ACTIVE$1);
        }).forEach(function(node2) {
          return node2.classList.remove(CLASS_NAME_ACTIVE$1);
        });
      };
      ScrollSpy2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var data = $__default["default"](this).data(DATA_KEY$2);
          var _config = typeof config === "object" && config;
          if (!data) {
            data = new ScrollSpy2(this, _config);
            $__default["default"](this).data(DATA_KEY$2, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(ScrollSpy2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$2;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default$1;
        }
      }]);
      return ScrollSpy2;
    }();
    $__default["default"](window).on(EVENT_LOAD_DATA_API, function() {
      var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
      var scrollSpysLength = scrollSpys.length;
      for (var i = scrollSpysLength; i--; ) {
        var $spy = $__default["default"](scrollSpys[i]);
        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    $__default["default"].fn[NAME$2] = ScrollSpy._jQueryInterface;
    $__default["default"].fn[NAME$2].Constructor = ScrollSpy;
    $__default["default"].fn[NAME$2].noConflict = function() {
      $__default["default"].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
      return ScrollSpy._jQueryInterface;
    };
    var NAME$1 = "tab";
    var VERSION$1 = "4.6.1";
    var DATA_KEY$1 = "bs.tab";
    var EVENT_KEY$1 = "." + DATA_KEY$1;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT$1 = $__default["default"].fn[NAME$1];
    var CLASS_NAME_DROPDOWN_MENU = "dropdown-menu";
    var CLASS_NAME_ACTIVE = "active";
    var CLASS_NAME_DISABLED = "disabled";
    var CLASS_NAME_FADE$1 = "fade";
    var CLASS_NAME_SHOW$1 = "show";
    var EVENT_HIDE$1 = "hide" + EVENT_KEY$1;
    var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$1;
    var EVENT_SHOW$1 = "show" + EVENT_KEY$1;
    var EVENT_SHOWN$1 = "shown" + EVENT_KEY$1;
    var EVENT_CLICK_DATA_API = "click" + EVENT_KEY$1 + DATA_API_KEY;
    var SELECTOR_DROPDOWN = ".dropdown";
    var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
    var SELECTOR_ACTIVE = ".active";
    var SELECTOR_ACTIVE_UL = "> li > .active";
    var SELECTOR_DATA_TOGGLE = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
    var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
    var SELECTOR_DROPDOWN_ACTIVE_CHILD = "> .dropdown-menu .active";
    var Tab = /* @__PURE__ */ function() {
      function Tab2(element) {
        this._element = element;
      }
      var _proto = Tab2.prototype;
      _proto.show = function show() {
        var _this = this;
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE) || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED)) {
          return;
        }
        var target;
        var previous;
        var listElement = $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0];
        var selector = Util.getSelectorFromElement(this._element);
        if (listElement) {
          var itemSelector = listElement.nodeName === "UL" || listElement.nodeName === "OL" ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
          previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }
        var hideEvent = $__default["default"].Event(EVENT_HIDE$1, {
          relatedTarget: this._element
        });
        var showEvent = $__default["default"].Event(EVENT_SHOW$1, {
          relatedTarget: previous
        });
        if (previous) {
          $__default["default"](previous).trigger(hideEvent);
        }
        $__default["default"](this._element).trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }
        if (selector) {
          target = document.querySelector(selector);
        }
        this._activate(this._element, listElement);
        var complete = function complete2() {
          var hiddenEvent = $__default["default"].Event(EVENT_HIDDEN$1, {
            relatedTarget: _this._element
          });
          var shownEvent = $__default["default"].Event(EVENT_SHOWN$1, {
            relatedTarget: previous
          });
          $__default["default"](previous).trigger(hiddenEvent);
          $__default["default"](_this._element).trigger(shownEvent);
        };
        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };
      _proto.dispose = function dispose() {
        $__default["default"].removeData(this._element, DATA_KEY$1);
        this._element = null;
      };
      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;
        var activeElements = container && (container.nodeName === "UL" || container.nodeName === "OL") ? $__default["default"](container).find(SELECTOR_ACTIVE_UL) : $__default["default"](container).children(SELECTOR_ACTIVE);
        var active = activeElements[0];
        var isTransitioning = callback && active && $__default["default"](active).hasClass(CLASS_NAME_FADE$1);
        var complete = function complete2() {
          return _this2._transitionComplete(element, active, callback);
        };
        if (active && isTransitioning) {
          var transitionDuration = Util.getTransitionDurationFromElement(active);
          $__default["default"](active).removeClass(CLASS_NAME_SHOW$1).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };
      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        if (active) {
          $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
          var dropdownChild = $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];
          if (dropdownChild) {
            $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
          }
          if (active.getAttribute("role") === "tab") {
            active.setAttribute("aria-selected", false);
          }
        }
        $__default["default"](element).addClass(CLASS_NAME_ACTIVE);
        if (element.getAttribute("role") === "tab") {
          element.setAttribute("aria-selected", true);
        }
        Util.reflow(element);
        if (element.classList.contains(CLASS_NAME_FADE$1)) {
          element.classList.add(CLASS_NAME_SHOW$1);
        }
        var parent = element.parentNode;
        if (parent && parent.nodeName === "LI") {
          parent = parent.parentNode;
        }
        if (parent && $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = $__default["default"](element).closest(SELECTOR_DROPDOWN)[0];
          if (dropdownElement) {
            var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE));
            $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
          }
          element.setAttribute("aria-expanded", true);
        }
        if (callback) {
          callback();
        }
      };
      Tab2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var $this = $__default["default"](this);
          var data = $this.data(DATA_KEY$1);
          if (!data) {
            data = new Tab2(this);
            $this.data(DATA_KEY$1, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Tab2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION$1;
        }
      }]);
      return Tab2;
    }();
    $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
      event.preventDefault();
      Tab._jQueryInterface.call($__default["default"](this), "show");
    });
    $__default["default"].fn[NAME$1] = Tab._jQueryInterface;
    $__default["default"].fn[NAME$1].Constructor = Tab;
    $__default["default"].fn[NAME$1].noConflict = function() {
      $__default["default"].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
      return Tab._jQueryInterface;
    };
    var NAME = "toast";
    var VERSION2 = "4.6.1";
    var DATA_KEY = "bs.toast";
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
    var CLASS_NAME_FADE = "fade";
    var CLASS_NAME_HIDE = "hide";
    var CLASS_NAME_SHOW = "show";
    var CLASS_NAME_SHOWING = "showing";
    var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
    var EVENT_HIDE = "hide" + EVENT_KEY;
    var EVENT_HIDDEN = "hidden" + EVENT_KEY;
    var EVENT_SHOW = "show" + EVENT_KEY;
    var EVENT_SHOWN = "shown" + EVENT_KEY;
    var SELECTOR_DATA_DISMISS = '[data-dismiss="toast"]';
    var Default = {
      animation: true,
      autohide: true,
      delay: 500
    };
    var DefaultType = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    };
    var Toast = /* @__PURE__ */ function() {
      function Toast2(element, config) {
        this._element = element;
        this._config = this._getConfig(config);
        this._timeout = null;
        this._setListeners();
      }
      var _proto = Toast2.prototype;
      _proto.show = function show() {
        var _this = this;
        var showEvent = $__default["default"].Event(EVENT_SHOW);
        $__default["default"](this._element).trigger(showEvent);
        if (showEvent.isDefaultPrevented()) {
          return;
        }
        this._clearTimeout();
        if (this._config.animation) {
          this._element.classList.add(CLASS_NAME_FADE);
        }
        var complete = function complete2() {
          _this._element.classList.remove(CLASS_NAME_SHOWING);
          _this._element.classList.add(CLASS_NAME_SHOW);
          $__default["default"](_this._element).trigger(EVENT_SHOWN);
          if (_this._config.autohide) {
            _this._timeout = setTimeout(function() {
              _this.hide();
            }, _this._config.delay);
          }
        };
        this._element.classList.remove(CLASS_NAME_HIDE);
        Util.reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOWING);
        if (this._config.animation) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };
      _proto.hide = function hide2() {
        if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
          return;
        }
        var hideEvent = $__default["default"].Event(EVENT_HIDE);
        $__default["default"](this._element).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          return;
        }
        this._close();
      };
      _proto.dispose = function dispose() {
        this._clearTimeout();
        if (this._element.classList.contains(CLASS_NAME_SHOW)) {
          this._element.classList.remove(CLASS_NAME_SHOW);
        }
        $__default["default"](this._element).off(EVENT_CLICK_DISMISS);
        $__default["default"].removeData(this._element, DATA_KEY);
        this._element = null;
        this._config = null;
      };
      _proto._getConfig = function _getConfig(config) {
        config = _extends2({}, Default, $__default["default"](this._element).data(), typeof config === "object" && config ? config : {});
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };
      _proto._setListeners = function _setListeners() {
        var _this2 = this;
        $__default["default"](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function() {
          return _this2.hide();
        });
      };
      _proto._close = function _close() {
        var _this3 = this;
        var complete = function complete2() {
          _this3._element.classList.add(CLASS_NAME_HIDE);
          $__default["default"](_this3._element).trigger(EVENT_HIDDEN);
        };
        this._element.classList.remove(CLASS_NAME_SHOW);
        if (this._config.animation) {
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $__default["default"](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };
      _proto._clearTimeout = function _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
      };
      Toast2._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function() {
          var $element = $__default["default"](this);
          var data = $element.data(DATA_KEY);
          var _config = typeof config === "object" && config;
          if (!data) {
            data = new Toast2(this, _config);
            $element.data(DATA_KEY, data);
          }
          if (typeof config === "string") {
            if (typeof data[config] === "undefined") {
              throw new TypeError('No method named "' + config + '"');
            }
            data[config](this);
          }
        });
      };
      _createClass(Toast2, null, [{
        key: "VERSION",
        get: function get2() {
          return VERSION2;
        }
      }, {
        key: "DefaultType",
        get: function get2() {
          return DefaultType;
        }
      }, {
        key: "Default",
        get: function get2() {
          return Default;
        }
      }]);
      return Toast2;
    }();
    $__default["default"].fn[NAME] = Toast._jQueryInterface;
    $__default["default"].fn[NAME].Constructor = Toast;
    $__default["default"].fn[NAME].noConflict = function() {
      $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
      return Toast._jQueryInterface;
    };
    exports2.Alert = Alert;
    exports2.Button = Button;
    exports2.Carousel = Carousel;
    exports2.Collapse = Collapse;
    exports2.Dropdown = Dropdown;
    exports2.Modal = Modal;
    exports2.Popover = Popover;
    exports2.Scrollspy = ScrollSpy;
    exports2.Tab = Tab;
    exports2.Toast = Toast;
    exports2.Tooltip = Tooltip;
    exports2.Util = Util;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
})(bootstrap$1, bootstrap$1.exports);
class SessionStateStore {
  static loadState(id2) {
    try {
      const serializedState = sessionStorage.getItem(id2);
      return JSON.parse(serializedState);
    } catch (err) {
      return void 0;
    }
  }
  static saveState(id2, state) {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem(id2, serializedState);
    } catch (err) {
    }
  }
}
class DataUtil {
}
__publicField(DataUtil, "fetchData", async (url) => {
  return fetch(url).then((response) => response.text());
});
var handlebars = { exports: {} };
var handlebars_runtime = { exports: {} };
var base$1 = {};
var utils = {};
utils.__esModule = true;
utils.extend = extend$2;
utils.indexOf = indexOf$1;
utils.escapeExpression = escapeExpression;
utils.isEmpty = isEmpty;
utils.createFrame = createFrame;
utils.blockParams = blockParams;
utils.appendContextPath = appendContextPath;
var escape$2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
function escapeChar(chr) {
  return escape$2[chr];
}
function extend$2(obj) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }
  return obj;
}
var toString$2 = Object.prototype.toString;
utils.toString = toString$2;
var isFunction$1 = function isFunction2(value) {
  return typeof value === "function";
};
if (isFunction$1(/x/)) {
  utils.isFunction = isFunction$1 = function(value) {
    return typeof value === "function" && toString$2.call(value) === "[object Function]";
  };
}
utils.isFunction = isFunction$1;
var isArray$2 = Array.isArray || function(value) {
  return value && typeof value === "object" ? toString$2.call(value) === "[object Array]" : false;
};
utils.isArray = isArray$2;
function indexOf$1(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
function escapeExpression(string) {
  if (typeof string !== "string") {
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return "";
    } else if (!string) {
      return string + "";
    }
    string = "" + string;
  }
  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}
function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray$2(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}
function createFrame(object) {
  var frame = extend$2({}, object);
  frame._parent = object;
  return frame;
}
function blockParams(params, ids2) {
  params.path = ids2;
  return params;
}
function appendContextPath(contextPath, id2) {
  return (contextPath ? contextPath + "." : "") + id2;
}
var exception = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  var errorProps = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
  function Exception(message, node2) {
    var loc = node2 && node2.loc, line = void 0, endLineNumber = void 0, column = void 0, endColumn = void 0;
    if (loc) {
      line = loc.start.line;
      endLineNumber = loc.end.line;
      column = loc.start.column;
      endColumn = loc.end.column;
      message += " - " + line + ":" + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    }
    try {
      if (loc) {
        this.lineNumber = line;
        this.endLineNumber = endLineNumber;
        if (Object.defineProperty) {
          Object.defineProperty(this, "column", {
            value: column,
            enumerable: true
          });
          Object.defineProperty(this, "endColumn", {
            value: endColumn,
            enumerable: true
          });
        } else {
          this.column = column;
          this.endColumn = endColumn;
        }
      }
    } catch (nop) {
    }
  }
  Exception.prototype = new Error();
  exports["default"] = Exception;
  module.exports = exports["default"];
})(exception, exception.exports);
var helpers$1 = {};
var blockHelperMissing = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  var _utils2 = utils;
  exports["default"] = function(instance) {
    instance.registerHelper("blockHelperMissing", function(context, options) {
      var inverse = options.inverse, fn = options.fn;
      if (context === true) {
        return fn(this);
      } else if (context === false || context == null) {
        return inverse(this);
      } else if (_utils2.isArray(context)) {
        if (context.length > 0) {
          if (options.ids) {
            options.ids = [options.name];
          }
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        if (options.data && options.ids) {
          var data = _utils2.createFrame(options.data);
          data.contextPath = _utils2.appendContextPath(options.data.contextPath, options.name);
          options = { data };
        }
        return fn(context, options);
      }
    });
  };
  module.exports = exports["default"];
})(blockHelperMissing, blockHelperMissing.exports);
var each = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _utils2 = utils;
  var _exception3 = exception.exports;
  var _exception22 = _interopRequireDefault2(_exception3);
  exports["default"] = function(instance) {
    instance.registerHelper("each", function(context, options) {
      if (!options) {
        throw new _exception22["default"]("Must pass iterator to #each");
      }
      var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = void 0, contextPath = void 0;
      if (options.data && options.ids) {
        contextPath = _utils2.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
      }
      if (_utils2.isFunction(context)) {
        context = context.call(this);
      }
      if (options.data) {
        data = _utils2.createFrame(options.data);
      }
      function execIteration(field, index2, last) {
        if (data) {
          data.key = field;
          data.index = index2;
          data.first = index2 === 0;
          data.last = !!last;
          if (contextPath) {
            data.contextPath = contextPath + field;
          }
        }
        ret = ret + fn(context[field], {
          data,
          blockParams: _utils2.blockParams([context[field], field], [contextPath + field, null])
        });
      }
      if (context && typeof context === "object") {
        if (_utils2.isArray(context)) {
          for (var j = context.length; i < j; i++) {
            if (i in context) {
              execIteration(i, i, i === context.length - 1);
            }
          }
        } else if (commonjsGlobal.Symbol && context[commonjsGlobal.Symbol.iterator]) {
          var newContext = [];
          var iterator = context[commonjsGlobal.Symbol.iterator]();
          for (var it = iterator.next(); !it.done; it = iterator.next()) {
            newContext.push(it.value);
          }
          context = newContext;
          for (var j = context.length; i < j; i++) {
            execIteration(i, i, i === context.length - 1);
          }
        } else {
          (function() {
            var priorKey = void 0;
            Object.keys(context).forEach(function(key) {
              if (priorKey !== void 0) {
                execIteration(priorKey, i - 1);
              }
              priorKey = key;
              i++;
            });
            if (priorKey !== void 0) {
              execIteration(priorKey, i - 1, true);
            }
          })();
        }
      }
      if (i === 0) {
        ret = inverse(this);
      }
      return ret;
    });
  };
  module.exports = exports["default"];
})(each, each.exports);
var helperMissing = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _exception3 = exception.exports;
  var _exception22 = _interopRequireDefault2(_exception3);
  exports["default"] = function(instance) {
    instance.registerHelper("helperMissing", function() {
      if (arguments.length === 1) {
        return void 0;
      } else {
        throw new _exception22["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      }
    });
  };
  module.exports = exports["default"];
})(helperMissing, helperMissing.exports);
var _if = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _utils2 = utils;
  var _exception3 = exception.exports;
  var _exception22 = _interopRequireDefault2(_exception3);
  exports["default"] = function(instance) {
    instance.registerHelper("if", function(conditional, options) {
      if (arguments.length != 2) {
        throw new _exception22["default"]("#if requires exactly one argument");
      }
      if (_utils2.isFunction(conditional)) {
        conditional = conditional.call(this);
      }
      if (!options.hash.includeZero && !conditional || _utils2.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });
    instance.registerHelper("unless", function(conditional, options) {
      if (arguments.length != 2) {
        throw new _exception22["default"]("#unless requires exactly one argument");
      }
      return instance.helpers["if"].call(this, conditional, {
        fn: options.inverse,
        inverse: options.fn,
        hash: options.hash
      });
    });
  };
  module.exports = exports["default"];
})(_if, _if.exports);
var log$1 = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  exports["default"] = function(instance) {
    instance.registerHelper("log", function() {
      var args = [void 0], options = arguments[arguments.length - 1];
      for (var i = 0; i < arguments.length - 1; i++) {
        args.push(arguments[i]);
      }
      var level = 1;
      if (options.hash.level != null) {
        level = options.hash.level;
      } else if (options.data && options.data.level != null) {
        level = options.data.level;
      }
      args[0] = level;
      instance.log.apply(instance, args);
    });
  };
  module.exports = exports["default"];
})(log$1, log$1.exports);
var lookup = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  exports["default"] = function(instance) {
    instance.registerHelper("lookup", function(obj, field, options) {
      if (!obj) {
        return obj;
      }
      return options.lookupProperty(obj, field);
    });
  };
  module.exports = exports["default"];
})(lookup, lookup.exports);
var _with = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _utils2 = utils;
  var _exception3 = exception.exports;
  var _exception22 = _interopRequireDefault2(_exception3);
  exports["default"] = function(instance) {
    instance.registerHelper("with", function(context, options) {
      if (arguments.length != 2) {
        throw new _exception22["default"]("#with requires exactly one argument");
      }
      if (_utils2.isFunction(context)) {
        context = context.call(this);
      }
      var fn = options.fn;
      if (!_utils2.isEmpty(context)) {
        var data = options.data;
        if (options.data && options.ids) {
          data = _utils2.createFrame(options.data);
          data.contextPath = _utils2.appendContextPath(options.data.contextPath, options.ids[0]);
        }
        return fn(context, {
          data,
          blockParams: _utils2.blockParams([context], [data && data.contextPath])
        });
      } else {
        return options.inverse(this);
      }
    });
  };
  module.exports = exports["default"];
})(_with, _with.exports);
helpers$1.__esModule = true;
helpers$1.registerDefaultHelpers = registerDefaultHelpers;
helpers$1.moveHelperToHooks = moveHelperToHooks;
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var _helpersBlockHelperMissing = blockHelperMissing.exports;
var _helpersBlockHelperMissing2 = _interopRequireDefault$6(_helpersBlockHelperMissing);
var _helpersEach = each.exports;
var _helpersEach2 = _interopRequireDefault$6(_helpersEach);
var _helpersHelperMissing = helperMissing.exports;
var _helpersHelperMissing2 = _interopRequireDefault$6(_helpersHelperMissing);
var _helpersIf = _if.exports;
var _helpersIf2 = _interopRequireDefault$6(_helpersIf);
var _helpersLog = log$1.exports;
var _helpersLog2 = _interopRequireDefault$6(_helpersLog);
var _helpersLookup = lookup.exports;
var _helpersLookup2 = _interopRequireDefault$6(_helpersLookup);
var _helpersWith = _with.exports;
var _helpersWith2 = _interopRequireDefault$6(_helpersWith);
function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2["default"](instance);
  _helpersEach2["default"](instance);
  _helpersHelperMissing2["default"](instance);
  _helpersIf2["default"](instance);
  _helpersLog2["default"](instance);
  _helpersLookup2["default"](instance);
  _helpersWith2["default"](instance);
}
function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}
var decorators = {};
var inline = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  var _utils2 = utils;
  exports["default"] = function(instance) {
    instance.registerDecorator("inline", function(fn, props, container, options) {
      var ret = fn;
      if (!props.partials) {
        props.partials = {};
        ret = function(context, options2) {
          var original = container.partials;
          container.partials = _utils2.extend({}, original, props.partials);
          var ret2 = fn(context, options2);
          container.partials = original;
          return ret2;
        };
      }
      props.partials[options.args[0]] = options.fn;
      return ret;
    });
  };
  module.exports = exports["default"];
})(inline, inline.exports);
decorators.__esModule = true;
decorators.registerDefaultDecorators = registerDefaultDecorators;
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var _decoratorsInline = inline.exports;
var _decoratorsInline2 = _interopRequireDefault$5(_decoratorsInline);
function registerDefaultDecorators(instance) {
  _decoratorsInline2["default"](instance);
}
var logger$1 = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  var _utils2 = utils;
  var logger2 = {
    methodMap: ["debug", "info", "warn", "error"],
    level: "info",
    lookupLevel: function lookupLevel(level) {
      if (typeof level === "string") {
        var levelMap = _utils2.indexOf(logger2.methodMap, level.toLowerCase());
        if (levelMap >= 0) {
          level = levelMap;
        } else {
          level = parseInt(level, 10);
        }
      }
      return level;
    },
    log: function log2(level) {
      level = logger2.lookupLevel(level);
      if (typeof console !== "undefined" && logger2.lookupLevel(logger2.level) <= level) {
        var method = logger2.methodMap[level];
        if (!console[method]) {
          method = "log";
        }
        for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          message[_key - 1] = arguments[_key];
        }
        console[method].apply(console, message);
      }
    }
  };
  exports["default"] = logger2;
  module.exports = exports["default"];
})(logger$1, logger$1.exports);
var protoAccess = {};
var createNewLookupObject$1 = {};
createNewLookupObject$1.__esModule = true;
createNewLookupObject$1.createNewLookupObject = createNewLookupObject;
var _utils$4 = utils;
function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  return _utils$4.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(sources));
}
protoAccess.__esModule = true;
protoAccess.createProtoAccessControl = createProtoAccessControl;
protoAccess.resultIsAllowed = resultIsAllowed;
protoAccess.resetLoggedProperties = resetLoggedProperties;
function _interopRequireWildcard$2(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
var _createNewLookupObject = createNewLookupObject$1;
var _logger$1 = logger$1.exports;
var logger = _interopRequireWildcard$2(_logger$1);
var loggedProperties = /* @__PURE__ */ Object.create(null);
function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = /* @__PURE__ */ Object.create(null);
  defaultMethodWhiteList["constructor"] = false;
  defaultMethodWhiteList["__defineGetter__"] = false;
  defaultMethodWhiteList["__defineSetter__"] = false;
  defaultMethodWhiteList["__lookupGetter__"] = false;
  var defaultPropertyWhiteList = /* @__PURE__ */ Object.create(null);
  defaultPropertyWhiteList["__proto__"] = false;
  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}
function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === "function") {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}
function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== void 0) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== void 0) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}
function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}
function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function(propertyName) {
    delete loggedProperties[propertyName];
  });
}
base$1.__esModule = true;
base$1.HandlebarsEnvironment = HandlebarsEnvironment;
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var _utils$3 = utils;
var _exception$3 = exception.exports;
var _exception2$3 = _interopRequireDefault$4(_exception$3);
var _helpers$2 = helpers$1;
var _decorators = decorators;
var _logger = logger$1.exports;
var _logger2 = _interopRequireDefault$4(_logger);
var _internalProtoAccess$1 = protoAccess;
var VERSION = "4.7.7";
base$1.VERSION = VERSION;
var COMPILER_REVISION = 8;
base$1.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;
base$1.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: "<= 1.0.rc.2",
  2: "== 1.0.0-rc.3",
  3: "== 1.0.0-rc.4",
  4: "== 1.x.x",
  5: "== 2.0.0-alpha.x",
  6: ">= 2.0.0-beta.1",
  7: ">= 4.0.0 <4.3.0",
  8: ">= 4.3.0"
};
base$1.REVISION_CHANGES = REVISION_CHANGES;
var objectType = "[object Object]";
function HandlebarsEnvironment(helpers2, partials, decorators2) {
  this.helpers = helpers2 || {};
  this.partials = partials || {};
  this.decorators = decorators2 || {};
  _helpers$2.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}
HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,
  logger: _logger2["default"],
  log: _logger2["default"].log,
  registerHelper: function registerHelper(name2, fn) {
    if (_utils$3.toString.call(name2) === objectType) {
      if (fn) {
        throw new _exception2$3["default"]("Arg not supported with multiple helpers");
      }
      _utils$3.extend(this.helpers, name2);
    } else {
      this.helpers[name2] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name2) {
    delete this.helpers[name2];
  },
  registerPartial: function registerPartial(name2, partial) {
    if (_utils$3.toString.call(name2) === objectType) {
      _utils$3.extend(this.partials, name2);
    } else {
      if (typeof partial === "undefined") {
        throw new _exception2$3["default"]('Attempting to register a partial called "' + name2 + '" as undefined');
      }
      this.partials[name2] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name2) {
    delete this.partials[name2];
  },
  registerDecorator: function registerDecorator(name2, fn) {
    if (_utils$3.toString.call(name2) === objectType) {
      if (fn) {
        throw new _exception2$3["default"]("Arg not supported with multiple decorators");
      }
      _utils$3.extend(this.decorators, name2);
    } else {
      this.decorators[name2] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name2) {
    delete this.decorators[name2];
  },
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess$1.resetLoggedProperties();
  }
};
var log = _logger2["default"].log;
base$1.log = log;
base$1.createFrame = _utils$3.createFrame;
base$1.logger = _logger2["default"];
var safeString = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  function SafeString(string) {
    this.string = string;
  }
  SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
  };
  exports["default"] = SafeString;
  module.exports = exports["default"];
})(safeString, safeString.exports);
var runtime = {};
var wrapHelper$1 = {};
wrapHelper$1.__esModule = true;
wrapHelper$1.wrapHelper = wrapHelper;
function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== "function") {
    return helper;
  }
  var wrapper = function wrapper2() {
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}
runtime.__esModule = true;
runtime.checkRevision = checkRevision;
runtime.template = template;
runtime.wrapProgram = wrapProgram;
runtime.resolvePartial = resolvePartial;
runtime.invokePartial = invokePartial;
runtime.noop = noop;
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _interopRequireWildcard$1(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
var _utils$2 = utils;
var Utils = _interopRequireWildcard$1(_utils$2);
var _exception$2 = exception.exports;
var _exception2$2 = _interopRequireDefault$3(_exception$2);
var _base = base$1;
var _helpers$1 = helpers$1;
var _internalWrapHelper = wrapHelper$1;
var _internalProtoAccess = protoAccess;
function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }
  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2$2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
  } else {
    throw new _exception2$2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
  }
}
function template(templateSpec, env) {
  if (!env) {
    throw new _exception2$2["default"]("No environment passed to template");
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2$2["default"]("Unknown template object: " + typeof templateSpec);
  }
  templateSpec.main.decorator = templateSpec.main_d;
  env.VM.checkRevision(templateSpec.compiler);
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });
    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split("\n");
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }
          lines[i] = options.indent + lines[i];
        }
        result = lines.join("\n");
      }
      return result;
    } else {
      throw new _exception2$2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
    }
  }
  var container = {
    strict: function strict(obj, name2, loc) {
      if (!obj || !(name2 in obj)) {
        throw new _exception2$2["default"]('"' + name2 + '" not defined in ' + obj, {
          loc
        });
      }
      return container.lookupProperty(obj, name2);
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }
      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return void 0;
    },
    lookup: function lookup2(depths, name2) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name2);
        if (result != null) {
          return depths[i][name2];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === "function" ? current.call(context) : current;
    },
    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,
    fn: function fn(i) {
      var ret2 = templateSpec[i];
      ret2.decorator = templateSpec[i + "_d"];
      return ret2;
    },
    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams2, depths) {
      var programWrapper = this.programs[i], fn = this.fn(i);
      if (data || depths || blockParams2 || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams2, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },
    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;
      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }
      return obj;
    },
    nullContext: Object.seal({}),
    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };
  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
    var data = options.data;
    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = void 0, blockParams2 = templateSpec.useBlockParams ? [] : void 0;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }
    function main(context2) {
      return "" + templateSpec.main(container, context2, container.helpers, container.partials, data, blockParams2, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams2);
    return main(context, options);
  }
  ret.isTop = true;
  ret._setup = function(options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;
      if (templateSpec.usePartial) {
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }
      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers$1.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
      _helpers$1.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl;
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };
  ret._child = function(i, data, blockParams2, depths) {
    if (templateSpec.useBlockParams && !blockParams2) {
      throw new _exception2$2["default"]("must pass block params");
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2$2["default"]("must pass parent depths");
    }
    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams2, depths);
  };
  return ret;
}
function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams2, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }
    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams2 && [options.blockParams].concat(blockParams2), currentDepths);
  }
  prog = executeDecorators(fn, prog, container, depths, data, blockParams2);
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}
function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === "@partial-block") {
      partial = options.data["partial-block"];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}
function invokePartial(partial, context, options) {
  var currentPartialBlock = options.data && options.data["partial-block"];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }
  var partialBlock = void 0;
  if (options.fn && options.fn !== noop) {
    (function() {
      options.data = _base.createFrame(options.data);
      var fn = options.fn;
      partialBlock = options.data["partial-block"] = function partialBlockWrapper(context2) {
        var options2 = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        options2.data = _base.createFrame(options2.data);
        options2.data["partial-block"] = currentPartialBlock;
        return fn(context2, options2);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }
  if (partial === void 0 && partialBlock) {
    partial = partialBlock;
  }
  if (partial === void 0) {
    throw new _exception2$2["default"]("The partial " + options.name + " could not be found");
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}
function noop() {
  return "";
}
function initData(context, data) {
  if (!data || !("root" in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}
function executeDecorators(fn, prog, container, depths, data, blockParams2) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams2, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function(helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}
function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function(options) {
    return Utils.extend({ lookupProperty }, options);
  });
}
var noConflict = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  exports["default"] = function(Handlebars) {
    var root = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : window, $Handlebars = root.Handlebars;
    Handlebars.noConflict = function() {
      if (root.Handlebars === Handlebars) {
        root.Handlebars = $Handlebars;
      }
      return Handlebars;
    };
  };
  module.exports = exports["default"];
})(noConflict, noConflict.exports);
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj["default"] = obj;
      return newObj;
    }
  }
  var _handlebarsBase = base$1;
  var base2 = _interopRequireWildcard2(_handlebarsBase);
  var _handlebarsSafeString = safeString.exports;
  var _handlebarsSafeString2 = _interopRequireDefault2(_handlebarsSafeString);
  var _handlebarsException = exception.exports;
  var _handlebarsException2 = _interopRequireDefault2(_handlebarsException);
  var _handlebarsUtils = utils;
  var Utils2 = _interopRequireWildcard2(_handlebarsUtils);
  var _handlebarsRuntime = runtime;
  var runtime$1 = _interopRequireWildcard2(_handlebarsRuntime);
  var _handlebarsNoConflict = noConflict.exports;
  var _handlebarsNoConflict2 = _interopRequireDefault2(_handlebarsNoConflict);
  function create2() {
    var hb = new base2.HandlebarsEnvironment();
    Utils2.extend(hb, base2);
    hb.SafeString = _handlebarsSafeString2["default"];
    hb.Exception = _handlebarsException2["default"];
    hb.Utils = Utils2;
    hb.escapeExpression = Utils2.escapeExpression;
    hb.VM = runtime$1;
    hb.template = function(spec) {
      return runtime$1.template(spec, hb);
    };
    return hb;
  }
  var inst = create2();
  inst.create = create2;
  _handlebarsNoConflict2["default"](inst);
  inst["default"] = inst;
  exports["default"] = inst;
  module.exports = exports["default"];
})(handlebars_runtime, handlebars_runtime.exports);
var ast = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  var AST = {
    helpers: {
      helperExpression: function helperExpression(node2) {
        return node2.type === "SubExpression" || (node2.type === "MustacheStatement" || node2.type === "BlockStatement") && !!(node2.params && node2.params.length || node2.hash);
      },
      scopedId: function scopedId(path) {
        return /^\.|this\b/.test(path.original);
      },
      simpleId: function simpleId(path) {
        return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
      }
    }
  };
  exports["default"] = AST;
  module.exports = exports["default"];
})(ast, ast.exports);
var base = {};
var parser = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  var handlebars2 = function() {
    var parser2 = {
      trace: function trace() {
      },
      yy: {},
      symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
      terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
      productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
      performAction: function anonymous(yytext, yyleng, yylineno, yy2, yystate, $$, _$) {
        var $0 = $$.length - 1;
        switch (yystate) {
          case 1:
            return $$[$0 - 1];
          case 2:
            this.$ = yy2.prepareProgram($$[$0]);
            break;
          case 3:
            this.$ = $$[$0];
            break;
          case 4:
            this.$ = $$[$0];
            break;
          case 5:
            this.$ = $$[$0];
            break;
          case 6:
            this.$ = $$[$0];
            break;
          case 7:
            this.$ = $$[$0];
            break;
          case 8:
            this.$ = $$[$0];
            break;
          case 9:
            this.$ = {
              type: "CommentStatement",
              value: yy2.stripComment($$[$0]),
              strip: yy2.stripFlags($$[$0], $$[$0]),
              loc: yy2.locInfo(this._$)
            };
            break;
          case 10:
            this.$ = {
              type: "ContentStatement",
              original: $$[$0],
              value: $$[$0],
              loc: yy2.locInfo(this._$)
            };
            break;
          case 11:
            this.$ = yy2.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
            break;
          case 12:
            this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
            break;
          case 13:
            this.$ = yy2.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
            break;
          case 14:
            this.$ = yy2.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
            break;
          case 15:
            this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy2.stripFlags($$[$0 - 5], $$[$0]) };
            break;
          case 16:
            this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy2.stripFlags($$[$0 - 5], $$[$0]) };
            break;
          case 17:
            this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy2.stripFlags($$[$0 - 5], $$[$0]) };
            break;
          case 18:
            this.$ = { strip: yy2.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
            break;
          case 19:
            var inverse = yy2.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy2.prepareProgram([inverse], $$[$0 - 1].loc);
            program.chained = true;
            this.$ = { strip: $$[$0 - 2].strip, program, chain: true };
            break;
          case 20:
            this.$ = $$[$0];
            break;
          case 21:
            this.$ = { path: $$[$0 - 1], strip: yy2.stripFlags($$[$0 - 2], $$[$0]) };
            break;
          case 22:
            this.$ = yy2.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy2.stripFlags($$[$0 - 4], $$[$0]), this._$);
            break;
          case 23:
            this.$ = yy2.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy2.stripFlags($$[$0 - 4], $$[$0]), this._$);
            break;
          case 24:
            this.$ = {
              type: "PartialStatement",
              name: $$[$0 - 3],
              params: $$[$0 - 2],
              hash: $$[$0 - 1],
              indent: "",
              strip: yy2.stripFlags($$[$0 - 4], $$[$0]),
              loc: yy2.locInfo(this._$)
            };
            break;
          case 25:
            this.$ = yy2.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
            break;
          case 26:
            this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy2.stripFlags($$[$0 - 4], $$[$0]) };
            break;
          case 27:
            this.$ = $$[$0];
            break;
          case 28:
            this.$ = $$[$0];
            break;
          case 29:
            this.$ = {
              type: "SubExpression",
              path: $$[$0 - 3],
              params: $$[$0 - 2],
              hash: $$[$0 - 1],
              loc: yy2.locInfo(this._$)
            };
            break;
          case 30:
            this.$ = { type: "Hash", pairs: $$[$0], loc: yy2.locInfo(this._$) };
            break;
          case 31:
            this.$ = { type: "HashPair", key: yy2.id($$[$0 - 2]), value: $$[$0], loc: yy2.locInfo(this._$) };
            break;
          case 32:
            this.$ = yy2.id($$[$0 - 1]);
            break;
          case 33:
            this.$ = $$[$0];
            break;
          case 34:
            this.$ = $$[$0];
            break;
          case 35:
            this.$ = { type: "StringLiteral", value: $$[$0], original: $$[$0], loc: yy2.locInfo(this._$) };
            break;
          case 36:
            this.$ = { type: "NumberLiteral", value: Number($$[$0]), original: Number($$[$0]), loc: yy2.locInfo(this._$) };
            break;
          case 37:
            this.$ = { type: "BooleanLiteral", value: $$[$0] === "true", original: $$[$0] === "true", loc: yy2.locInfo(this._$) };
            break;
          case 38:
            this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: yy2.locInfo(this._$) };
            break;
          case 39:
            this.$ = { type: "NullLiteral", original: null, value: null, loc: yy2.locInfo(this._$) };
            break;
          case 40:
            this.$ = $$[$0];
            break;
          case 41:
            this.$ = $$[$0];
            break;
          case 42:
            this.$ = yy2.preparePath(true, $$[$0], this._$);
            break;
          case 43:
            this.$ = yy2.preparePath(false, $$[$0], this._$);
            break;
          case 44:
            $$[$0 - 2].push({ part: yy2.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });
            this.$ = $$[$0 - 2];
            break;
          case 45:
            this.$ = [{ part: yy2.id($$[$0]), original: $$[$0] }];
            break;
          case 46:
            this.$ = [];
            break;
          case 47:
            $$[$0 - 1].push($$[$0]);
            break;
          case 48:
            this.$ = [];
            break;
          case 49:
            $$[$0 - 1].push($$[$0]);
            break;
          case 50:
            this.$ = [];
            break;
          case 51:
            $$[$0 - 1].push($$[$0]);
            break;
          case 58:
            this.$ = [];
            break;
          case 59:
            $$[$0 - 1].push($$[$0]);
            break;
          case 64:
            this.$ = [];
            break;
          case 65:
            $$[$0 - 1].push($$[$0]);
            break;
          case 70:
            this.$ = [];
            break;
          case 71:
            $$[$0 - 1].push($$[$0]);
            break;
          case 78:
            this.$ = [];
            break;
          case 79:
            $$[$0 - 1].push($$[$0]);
            break;
          case 82:
            this.$ = [];
            break;
          case 83:
            $$[$0 - 1].push($$[$0]);
            break;
          case 86:
            this.$ = [];
            break;
          case 87:
            $$[$0 - 1].push($$[$0]);
            break;
          case 90:
            this.$ = [];
            break;
          case 91:
            $$[$0 - 1].push($$[$0]);
            break;
          case 94:
            this.$ = [];
            break;
          case 95:
            $$[$0 - 1].push($$[$0]);
            break;
          case 98:
            this.$ = [$$[$0]];
            break;
          case 99:
            $$[$0 - 1].push($$[$0]);
            break;
          case 100:
            this.$ = [$$[$0]];
            break;
          case 101:
            $$[$0 - 1].push($$[$0]);
            break;
        }
      },
      table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
      defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
      parseError: function parseError(str, hash) {
        throw new Error(str);
      },
      parse: function parse2(input) {
        var self2 = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0;
        this.lexer.setInput(input);
        this.lexer.yy = this.yy;
        this.yy.lexer = this.lexer;
        this.yy.parser = this;
        if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
        var yyloc = this.lexer.yylloc;
        lstack.push(yyloc);
        var ranges = this.lexer.options && this.lexer.options.ranges;
        if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
        function lex() {
          var token;
          token = self2.lexer.lex() || 1;
          if (typeof token !== "number") {
            token = self2.symbols_[token] || token;
          }
          return token;
        }
        var symbol, state, action, r, yyval = {}, p, len, newState, expected;
        while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            {
              expected = [];
              for (p in table[state])
                if (this.terminals_[p] && p > 2) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
              if (this.lexer.showPosition) {
                errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
              } else {
                errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
              }
              this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected });
            }
          }
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
            case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
              }
              break;
            case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
              if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                return r;
              }
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }
    };
    var lexer = function() {
      var lexer2 = {
        EOF: 1,
        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },
        setInput: function setInput(input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
          if (this.options.ranges)
            this.yylloc.range = [0, 0];
          this.offset = 0;
          return this;
        },
        input: function input() {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges)
            this.yylloc.range[1]++;
          this._input = this._input.slice(1);
          return ch;
        },
        unput: function unput(ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);
          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          if (lines.length - 1)
            this.yylineno -= lines.length - 1;
          var r = this.yylloc.range;
          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
          };
          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
        },
        more: function more() {
          this._more = true;
          return this;
        },
        less: function less(n) {
          this.unput(this.match.slice(n));
        },
        pastInput: function pastInput() {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
        },
        upcomingInput: function upcomingInput() {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        showPosition: function showPosition() {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },
        next: function next() {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input)
            this.done = true;
          var token, match2, tempMatch, index2, lines;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match2 || tempMatch[0].length > match2[0].length)) {
              match2 = tempMatch;
              index2 = i;
              if (!this.options.flex)
                break;
            }
          }
          if (match2) {
            lines = match2[0].match(/(?:\r\n?|\n).*/g);
            if (lines)
              this.yylineno += lines.length;
            this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match2[0].length
            };
            this.yytext += match2[0];
            this.match += match2[0];
            this.matches = match2;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
              this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match2[0].length);
            this.matched += match2[0];
            token = this.performAction.call(this, this.yy, this, rules[index2], this.conditionStack[this.conditionStack.length - 1]);
            if (this.done && this._input)
              this.done = false;
            if (token)
              return token;
            else
              return;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno });
          }
        },
        lex: function lex() {
          var r = this.next();
          if (typeof r !== "undefined") {
            return r;
          } else {
            return this.lex();
          }
        },
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },
        popState: function popState() {
          return this.conditionStack.pop();
        },
        _currentRules: function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        },
        topState: function topState() {
          return this.conditionStack[this.conditionStack.length - 2];
        },
        pushState: function begin(condition) {
          this.begin(condition);
        }
      };
      lexer2.options = {};
      lexer2.performAction = function anonymous(yy2, yy_, $avoiding_name_collisions, YY_START) {
        function strip(start, end) {
          return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
        }
        switch ($avoiding_name_collisions) {
          case 0:
            if (yy_.yytext.slice(-2) === "\\\\") {
              strip(0, 1);
              this.begin("mu");
            } else if (yy_.yytext.slice(-1) === "\\") {
              strip(0, 1);
              this.begin("emu");
            } else {
              this.begin("mu");
            }
            if (yy_.yytext)
              return 15;
            break;
          case 1:
            return 15;
          case 2:
            this.popState();
            return 15;
          case 3:
            this.begin("raw");
            return 15;
          case 4:
            this.popState();
            if (this.conditionStack[this.conditionStack.length - 1] === "raw") {
              return 15;
            } else {
              strip(5, 9);
              return "END_RAW_BLOCK";
            }
          case 5:
            return 15;
          case 6:
            this.popState();
            return 14;
          case 7:
            return 65;
          case 8:
            return 68;
          case 9:
            return 19;
          case 10:
            this.popState();
            this.begin("raw");
            return 23;
          case 11:
            return 55;
          case 12:
            return 60;
          case 13:
            return 29;
          case 14:
            return 47;
          case 15:
            this.popState();
            return 44;
          case 16:
            this.popState();
            return 44;
          case 17:
            return 34;
          case 18:
            return 39;
          case 19:
            return 51;
          case 20:
            return 48;
          case 21:
            this.unput(yy_.yytext);
            this.popState();
            this.begin("com");
            break;
          case 22:
            this.popState();
            return 14;
          case 23:
            return 48;
          case 24:
            return 73;
          case 25:
            return 72;
          case 26:
            return 72;
          case 27:
            return 87;
          case 28:
            break;
          case 29:
            this.popState();
            return 54;
          case 30:
            this.popState();
            return 33;
          case 31:
            yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
            return 80;
          case 32:
            yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
            return 80;
          case 33:
            return 85;
          case 34:
            return 82;
          case 35:
            return 82;
          case 36:
            return 83;
          case 37:
            return 84;
          case 38:
            return 81;
          case 39:
            return 75;
          case 40:
            return 77;
          case 41:
            return 72;
          case 42:
            yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
            return 72;
          case 43:
            return "INVALID";
          case 44:
            return 5;
        }
      };
      lexer2.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
      lexer2.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
      return lexer2;
    }();
    parser2.lexer = lexer;
    function Parser2() {
      this.yy = {};
    }
    Parser2.prototype = parser2;
    parser2.Parser = Parser2;
    return new Parser2();
  }();
  exports["default"] = handlebars2;
  module.exports = exports["default"];
})(parser, parser.exports);
var whitespaceControl = { exports: {} };
var visitor = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _exception3 = exception.exports;
  var _exception22 = _interopRequireDefault2(_exception3);
  function Visitor() {
    this.parents = [];
  }
  Visitor.prototype = {
    constructor: Visitor,
    mutating: false,
    acceptKey: function acceptKey(node2, name2) {
      var value = this.accept(node2[name2]);
      if (this.mutating) {
        if (value && !Visitor.prototype[value.type]) {
          throw new _exception22["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name2 + " on " + node2.type);
        }
        node2[name2] = value;
      }
    },
    acceptRequired: function acceptRequired(node2, name2) {
      this.acceptKey(node2, name2);
      if (!node2[name2]) {
        throw new _exception22["default"](node2.type + " requires " + name2);
      }
    },
    acceptArray: function acceptArray(array) {
      for (var i = 0, l = array.length; i < l; i++) {
        this.acceptKey(array, i);
        if (!array[i]) {
          array.splice(i, 1);
          i--;
          l--;
        }
      }
    },
    accept: function accept2(object) {
      if (!object) {
        return;
      }
      if (!this[object.type]) {
        throw new _exception22["default"]("Unknown type: " + object.type, object);
      }
      if (this.current) {
        this.parents.unshift(this.current);
      }
      this.current = object;
      var ret = this[object.type](object);
      this.current = this.parents.shift();
      if (!this.mutating || ret) {
        return ret;
      } else if (ret !== false) {
        return object;
      }
    },
    Program: function Program2(program) {
      this.acceptArray(program.body);
    },
    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,
    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,
    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement2(partial) {
      visitPartial.call(this, partial);
      this.acceptKey(partial, "program");
    },
    ContentStatement: function ContentStatement2() {
    },
    CommentStatement: function CommentStatement2() {
    },
    SubExpression: visitSubExpression,
    PathExpression: function PathExpression2() {
    },
    StringLiteral: function StringLiteral2() {
    },
    NumberLiteral: function NumberLiteral2() {
    },
    BooleanLiteral: function BooleanLiteral2() {
    },
    UndefinedLiteral: function UndefinedLiteral2() {
    },
    NullLiteral: function NullLiteral2() {
    },
    Hash: function Hash2(hash) {
      this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
      this.acceptRequired(pair, "value");
    }
  };
  function visitSubExpression(mustache) {
    this.acceptRequired(mustache, "path");
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, "hash");
  }
  function visitBlock(block) {
    visitSubExpression.call(this, block);
    this.acceptKey(block, "program");
    this.acceptKey(block, "inverse");
  }
  function visitPartial(partial) {
    this.acceptRequired(partial, "name");
    this.acceptArray(partial.params);
    this.acceptKey(partial, "hash");
  }
  exports["default"] = Visitor;
  module.exports = exports["default"];
})(visitor, visitor.exports);
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _visitor = visitor.exports;
  var _visitor2 = _interopRequireDefault2(_visitor);
  function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
    this.options = options;
  }
  WhitespaceControl.prototype = new _visitor2["default"]();
  WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for (var i = 0, l = body.length; i < l; i++) {
      var current = body[i], strip = this.accept(current);
      if (!strip) {
        continue;
      }
      var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
      if (strip.close) {
        omitRight(body, i, true);
      }
      if (strip.open) {
        omitLeft(body, i, true);
      }
      if (doStandalone && inlineStandalone) {
        omitRight(body, i);
        if (omitLeft(body, i)) {
          if (current.type === "PartialStatement") {
            current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
          }
        }
      }
      if (doStandalone && openStandalone) {
        omitRight((current.program || current.inverse).body);
        omitLeft(body, i);
      }
      if (doStandalone && closeStandalone) {
        omitRight(body, i);
        omitLeft((current.inverse || current.program).body);
      }
    }
    return program;
  };
  WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
    if (inverse && inverse.chained) {
      firstInverse = inverse.body[0].program;
      while (lastInverse.chained) {
        lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
      }
    }
    var strip = {
      open: block.openStrip.open,
      close: block.closeStrip.close,
      openStandalone: isNextWhitespace(program.body),
      closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) {
      omitRight(program.body, null, true);
    }
    if (inverse) {
      var inverseStrip = block.inverseStrip;
      if (inverseStrip.open) {
        omitLeft(program.body, null, true);
      }
      if (inverseStrip.close) {
        omitRight(firstInverse.body, null, true);
      }
      if (block.closeStrip.open) {
        omitLeft(lastInverse.body, null, true);
      }
      if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
        omitLeft(program.body);
        omitRight(firstInverse.body);
      }
    } else if (block.closeStrip.open) {
      omitLeft(program.body, null, true);
    }
    return strip;
  };
  WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
  };
  WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node2) {
    var strip = node2.strip || {};
    return {
      inlineStandalone: true,
      open: strip.open,
      close: strip.close
    };
  };
  function isPrevWhitespace(body, i, isRoot) {
    if (i === void 0) {
      i = body.length;
    }
    var prev = body[i - 1], sibling = body[i - 2];
    if (!prev) {
      return isRoot;
    }
    if (prev.type === "ContentStatement") {
      return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
    }
  }
  function isNextWhitespace(body, i, isRoot) {
    if (i === void 0) {
      i = -1;
    }
    var next = body[i + 1], sibling = body[i + 2];
    if (!next) {
      return isRoot;
    }
    if (next.type === "ContentStatement") {
      return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
    }
  }
  function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) {
      return;
    }
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
    current.rightStripped = current.value !== original;
  }
  function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) {
      return;
    }
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
    current.leftStripped = current.value !== original;
    return current.leftStripped;
  }
  exports["default"] = WhitespaceControl;
  module.exports = exports["default"];
})(whitespaceControl, whitespaceControl.exports);
var helpers = {};
helpers.__esModule = true;
helpers.SourceLocation = SourceLocation;
helpers.id = id;
helpers.stripFlags = stripFlags;
helpers.stripComment = stripComment;
helpers.preparePath = preparePath;
helpers.prepareMustache = prepareMustache;
helpers.prepareRawBlock = prepareRawBlock;
helpers.prepareBlock = prepareBlock;
helpers.prepareProgram = prepareProgram;
helpers.preparePartialBlock = preparePartialBlock;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var _exception$1 = exception.exports;
var _exception2$1 = _interopRequireDefault$2(_exception$1);
function validateClose(open3, close) {
  close = close.path ? close.path.original : close;
  if (open3.path.original !== close) {
    var errorNode = { loc: open3.path.loc };
    throw new _exception2$1["default"](open3.path.original + " doesn't match " + close, errorNode);
  }
}
function SourceLocation(source, locInfo) {
  this.source = source;
  this.start = {
    line: locInfo.first_line,
    column: locInfo.first_column
  };
  this.end = {
    line: locInfo.last_line,
    column: locInfo.last_column
  };
}
function id(token) {
  if (/^\[.*\]$/.test(token)) {
    return token.substring(1, token.length - 1);
  } else {
    return token;
  }
}
function stripFlags(open3, close) {
  return {
    open: open3.charAt(2) === "~",
    close: close.charAt(close.length - 3) === "~"
  };
}
function stripComment(comment) {
  return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function preparePath(data, parts, loc) {
  loc = this.locInfo(loc);
  var original = data ? "@" : "", dig = [], depth = 0;
  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].part, isLiteral = parts[i].original !== part;
    original += (parts[i].separator || "") + part;
    if (!isLiteral && (part === ".." || part === "." || part === "this")) {
      if (dig.length > 0) {
        throw new _exception2$1["default"]("Invalid path: " + original, { loc });
      } else if (part === "..") {
        depth++;
      }
    } else {
      dig.push(part);
    }
  }
  return {
    type: "PathExpression",
    data,
    depth,
    parts: dig,
    original,
    loc
  };
}
function prepareMustache(path, params, hash, open3, strip, locInfo) {
  var escapeFlag = open3.charAt(3) || open3.charAt(2), escaped = escapeFlag !== "{" && escapeFlag !== "&";
  var decorator = /\*/.test(open3);
  return {
    type: decorator ? "Decorator" : "MustacheStatement",
    path,
    params,
    hash,
    escaped,
    strip,
    loc: this.locInfo(locInfo)
  };
}
function prepareRawBlock(openRawBlock, contents, close, locInfo) {
  validateClose(openRawBlock, close);
  locInfo = this.locInfo(locInfo);
  var program = {
    type: "Program",
    body: contents,
    strip: {},
    loc: locInfo
  };
  return {
    type: "BlockStatement",
    path: openRawBlock.path,
    params: openRawBlock.params,
    hash: openRawBlock.hash,
    program,
    openStrip: {},
    inverseStrip: {},
    closeStrip: {},
    loc: locInfo
  };
}
function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
  if (close && close.path) {
    validateClose(openBlock, close);
  }
  var decorator = /\*/.test(openBlock.open);
  program.blockParams = openBlock.blockParams;
  var inverse = void 0, inverseStrip = void 0;
  if (inverseAndProgram) {
    if (decorator) {
      throw new _exception2$1["default"]("Unexpected inverse block on decorator", inverseAndProgram);
    }
    if (inverseAndProgram.chain) {
      inverseAndProgram.program.body[0].closeStrip = close.strip;
    }
    inverseStrip = inverseAndProgram.strip;
    inverse = inverseAndProgram.program;
  }
  if (inverted) {
    inverted = inverse;
    inverse = program;
    program = inverted;
  }
  return {
    type: decorator ? "DecoratorBlock" : "BlockStatement",
    path: openBlock.path,
    params: openBlock.params,
    hash: openBlock.hash,
    program,
    inverse,
    openStrip: openBlock.strip,
    inverseStrip,
    closeStrip: close && close.strip,
    loc: this.locInfo(locInfo)
  };
}
function prepareProgram(statements, loc) {
  if (!loc && statements.length) {
    var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
    if (firstLoc && lastLoc) {
      loc = {
        source: firstLoc.source,
        start: {
          line: firstLoc.start.line,
          column: firstLoc.start.column
        },
        end: {
          line: lastLoc.end.line,
          column: lastLoc.end.column
        }
      };
    }
  }
  return {
    type: "Program",
    body: statements,
    strip: {},
    loc
  };
}
function preparePartialBlock(open3, program, close, locInfo) {
  validateClose(open3, close);
  return {
    type: "PartialBlockStatement",
    name: open3.path,
    params: open3.params,
    hash: open3.hash,
    program,
    openStrip: open3.strip,
    closeStrip: close && close.strip,
    loc: this.locInfo(locInfo)
  };
}
base.__esModule = true;
base.parseWithoutProcessing = parseWithoutProcessing;
base.parse = parse$2;
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj["default"] = obj;
    return newObj;
  }
}
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var _parser = parser.exports;
var _parser2 = _interopRequireDefault$1(_parser);
var _whitespaceControl = whitespaceControl.exports;
var _whitespaceControl2 = _interopRequireDefault$1(_whitespaceControl);
var _helpers = helpers;
var Helpers = _interopRequireWildcard(_helpers);
var _utils$1 = utils;
base.parser = _parser2["default"];
var yy = {};
_utils$1.extend(yy, Helpers);
function parseWithoutProcessing(input, options) {
  if (input.type === "Program") {
    return input;
  }
  _parser2["default"].yy = yy;
  yy.locInfo = function(locInfo) {
    return new yy.SourceLocation(options && options.srcName, locInfo);
  };
  var ast2 = _parser2["default"].parse(input);
  return ast2;
}
function parse$2(input, options) {
  var ast2 = parseWithoutProcessing(input, options);
  var strip = new _whitespaceControl2["default"](options);
  return strip.accept(ast2);
}
var compiler = {};
compiler.__esModule = true;
compiler.Compiler = Compiler;
compiler.precompile = precompile;
compiler.compile = compile;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var _exception = exception.exports;
var _exception2 = _interopRequireDefault(_exception);
var _utils = utils;
var _ast = ast.exports;
var _ast2 = _interopRequireDefault(_ast);
var slice$2 = [].slice;
function Compiler() {
}
Compiler.prototype = {
  compiler: Compiler,
  equals: function equals(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      var opcode2 = this.opcodes[i], otherOpcode = other.opcodes[i];
      if (opcode2.opcode !== otherOpcode.opcode || !argEquals(opcode2.args, otherOpcode.args)) {
        return false;
      }
    }
    len = this.children.length;
    for (var i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }
    return true;
  },
  guid: 0,
  compile: function compile2(program, options) {
    this.sourceNode = [];
    this.opcodes = [];
    this.children = [];
    this.options = options;
    this.stringParams = options.stringParams;
    this.trackIds = options.trackIds;
    options.blockParams = options.blockParams || [];
    options.knownHelpers = _utils.extend(/* @__PURE__ */ Object.create(null), {
      helperMissing: true,
      blockHelperMissing: true,
      each: true,
      "if": true,
      unless: true,
      "with": true,
      log: true,
      lookup: true
    }, options.knownHelpers);
    return this.accept(program);
  },
  compileProgram: function compileProgram(program) {
    var childCompiler = new this.compiler(), result = childCompiler.compile(program, this.options), guid = this.guid++;
    this.usePartial = this.usePartial || result.usePartial;
    this.children[guid] = result;
    this.useDepths = this.useDepths || result.useDepths;
    return guid;
  },
  accept: function accept(node2) {
    if (!this[node2.type]) {
      throw new _exception2["default"]("Unknown type: " + node2.type, node2);
    }
    this.sourceNode.unshift(node2);
    var ret = this[node2.type](node2);
    this.sourceNode.shift();
    return ret;
  },
  Program: function Program(program) {
    this.options.blockParams.unshift(program.blockParams);
    var body = program.body, bodyLength = body.length;
    for (var i = 0; i < bodyLength; i++) {
      this.accept(body[i]);
    }
    this.options.blockParams.shift();
    this.isSimple = bodyLength === 1;
    this.blockParams = program.blockParams ? program.blockParams.length : 0;
    return this;
  },
  BlockStatement: function BlockStatement(block) {
    transformLiteralToPath(block);
    var program = block.program, inverse = block.inverse;
    program = program && this.compileProgram(program);
    inverse = inverse && this.compileProgram(inverse);
    var type = this.classifySexpr(block);
    if (type === "helper") {
      this.helperSexpr(block, program, inverse);
    } else if (type === "simple") {
      this.simpleSexpr(block);
      this.opcode("pushProgram", program);
      this.opcode("pushProgram", inverse);
      this.opcode("emptyHash");
      this.opcode("blockValue", block.path.original);
    } else {
      this.ambiguousSexpr(block, program, inverse);
      this.opcode("pushProgram", program);
      this.opcode("pushProgram", inverse);
      this.opcode("emptyHash");
      this.opcode("ambiguousBlockValue");
    }
    this.opcode("append");
  },
  DecoratorBlock: function DecoratorBlock(decorator) {
    var program = decorator.program && this.compileProgram(decorator.program);
    var params = this.setupFullMustacheParams(decorator, program, void 0), path = decorator.path;
    this.useDecorators = true;
    this.opcode("registerDecorator", params.length, path.original);
  },
  PartialStatement: function PartialStatement(partial) {
    this.usePartial = true;
    var program = partial.program;
    if (program) {
      program = this.compileProgram(partial.program);
    }
    var params = partial.params;
    if (params.length > 1) {
      throw new _exception2["default"]("Unsupported number of partial arguments: " + params.length, partial);
    } else if (!params.length) {
      if (this.options.explicitPartialContext) {
        this.opcode("pushLiteral", "undefined");
      } else {
        params.push({ type: "PathExpression", parts: [], depth: 0 });
      }
    }
    var partialName = partial.name.original, isDynamic = partial.name.type === "SubExpression";
    if (isDynamic) {
      this.accept(partial.name);
    }
    this.setupFullMustacheParams(partial, program, void 0, true);
    var indent = partial.indent || "";
    if (this.options.preventIndent && indent) {
      this.opcode("appendContent", indent);
      indent = "";
    }
    this.opcode("invokePartial", isDynamic, partialName, indent);
    this.opcode("append");
  },
  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
    this.PartialStatement(partialBlock);
  },
  MustacheStatement: function MustacheStatement(mustache) {
    this.SubExpression(mustache);
    if (mustache.escaped && !this.options.noEscape) {
      this.opcode("appendEscaped");
    } else {
      this.opcode("append");
    }
  },
  Decorator: function Decorator(decorator) {
    this.DecoratorBlock(decorator);
  },
  ContentStatement: function ContentStatement(content) {
    if (content.value) {
      this.opcode("appendContent", content.value);
    }
  },
  CommentStatement: function CommentStatement() {
  },
  SubExpression: function SubExpression(sexpr) {
    transformLiteralToPath(sexpr);
    var type = this.classifySexpr(sexpr);
    if (type === "simple") {
      this.simpleSexpr(sexpr);
    } else if (type === "helper") {
      this.helperSexpr(sexpr);
    } else {
      this.ambiguousSexpr(sexpr);
    }
  },
  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
    var path = sexpr.path, name2 = path.parts[0], isBlock = program != null || inverse != null;
    this.opcode("getContext", path.depth);
    this.opcode("pushProgram", program);
    this.opcode("pushProgram", inverse);
    path.strict = true;
    this.accept(path);
    this.opcode("invokeAmbiguous", name2, isBlock);
  },
  simpleSexpr: function simpleSexpr(sexpr) {
    var path = sexpr.path;
    path.strict = true;
    this.accept(path);
    this.opcode("resolvePossibleLambda");
  },
  helperSexpr: function helperSexpr(sexpr, program, inverse) {
    var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name2 = path.parts[0];
    if (this.options.knownHelpers[name2]) {
      this.opcode("invokeKnownHelper", params.length, name2);
    } else if (this.options.knownHelpersOnly) {
      throw new _exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name2, sexpr);
    } else {
      path.strict = true;
      path.falsy = true;
      this.accept(path);
      this.opcode("invokeHelper", params.length, path.original, _ast2["default"].helpers.simpleId(path));
    }
  },
  PathExpression: function PathExpression(path) {
    this.addDepth(path.depth);
    this.opcode("getContext", path.depth);
    var name2 = path.parts[0], scoped = _ast2["default"].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name2);
    if (blockParamId) {
      this.opcode("lookupBlockParam", blockParamId, path.parts);
    } else if (!name2) {
      this.opcode("pushContext");
    } else if (path.data) {
      this.options.data = true;
      this.opcode("lookupData", path.depth, path.parts, path.strict);
    } else {
      this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped);
    }
  },
  StringLiteral: function StringLiteral(string) {
    this.opcode("pushString", string.value);
  },
  NumberLiteral: function NumberLiteral(number) {
    this.opcode("pushLiteral", number.value);
  },
  BooleanLiteral: function BooleanLiteral(bool) {
    this.opcode("pushLiteral", bool.value);
  },
  UndefinedLiteral: function UndefinedLiteral() {
    this.opcode("pushLiteral", "undefined");
  },
  NullLiteral: function NullLiteral() {
    this.opcode("pushLiteral", "null");
  },
  Hash: function Hash(hash) {
    var pairs = hash.pairs, i = 0, l = pairs.length;
    this.opcode("pushHash");
    for (; i < l; i++) {
      this.pushParam(pairs[i].value);
    }
    while (i--) {
      this.opcode("assignToHash", pairs[i].key);
    }
    this.opcode("popHash");
  },
  opcode: function opcode(name2) {
    this.opcodes.push({
      opcode: name2,
      args: slice$2.call(arguments, 1),
      loc: this.sourceNode[0].loc
    });
  },
  addDepth: function addDepth(depth) {
    if (!depth) {
      return;
    }
    this.useDepths = true;
  },
  classifySexpr: function classifySexpr(sexpr) {
    var isSimple2 = _ast2["default"].helpers.simpleId(sexpr.path);
    var isBlockParam = isSimple2 && !!this.blockParamIndex(sexpr.path.parts[0]);
    var isHelper = !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr);
    var isEligible = !isBlockParam && (isHelper || isSimple2);
    if (isEligible && !isHelper) {
      var _name = sexpr.path.parts[0], options = this.options;
      if (options.knownHelpers[_name]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }
    if (isHelper) {
      return "helper";
    } else if (isEligible) {
      return "ambiguous";
    } else {
      return "simple";
    }
  },
  pushParams: function pushParams(params) {
    for (var i = 0, l = params.length; i < l; i++) {
      this.pushParam(params[i]);
    }
  },
  pushParam: function pushParam(val) {
    var value = val.value != null ? val.value : val.original || "";
    if (this.stringParams) {
      if (value.replace) {
        value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
      }
      if (val.depth) {
        this.addDepth(val.depth);
      }
      this.opcode("getContext", val.depth || 0);
      this.opcode("pushStringParam", value, val.type);
      if (val.type === "SubExpression") {
        this.accept(val);
      }
    } else {
      if (this.trackIds) {
        var blockParamIndex2 = void 0;
        if (val.parts && !_ast2["default"].helpers.scopedId(val) && !val.depth) {
          blockParamIndex2 = this.blockParamIndex(val.parts[0]);
        }
        if (blockParamIndex2) {
          var blockParamChild = val.parts.slice(1).join(".");
          this.opcode("pushId", "BlockParam", blockParamIndex2, blockParamChild);
        } else {
          value = val.original || value;
          if (value.replace) {
            value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "");
          }
          this.opcode("pushId", val.type, value);
        }
      }
      this.accept(val);
    }
  },
  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
    var params = sexpr.params;
    this.pushParams(params);
    this.opcode("pushProgram", program);
    this.opcode("pushProgram", inverse);
    if (sexpr.hash) {
      this.accept(sexpr.hash);
    } else {
      this.opcode("emptyHash", omitEmpty);
    }
    return params;
  },
  blockParamIndex: function blockParamIndex(name2) {
    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
      var blockParams2 = this.options.blockParams[depth], param = blockParams2 && _utils.indexOf(blockParams2, name2);
      if (blockParams2 && param >= 0) {
        return [depth, param];
      }
    }
  }
};
function precompile(input, options, env) {
  if (input == null || typeof input !== "string" && input.type !== "Program") {
    throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
  }
  options = options || {};
  if (!("data" in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }
  var ast2 = env.parse(input, options), environment = new env.Compiler().compile(ast2, options);
  return new env.JavaScriptCompiler().compile(environment, options);
}
function compile(input, options, env) {
  if (options === void 0)
    options = {};
  if (input == null || typeof input !== "string" && input.type !== "Program") {
    throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
  }
  options = _utils.extend({}, options);
  if (!("data" in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }
  var compiled = void 0;
  function compileInput() {
    var ast2 = env.parse(input, options), environment = new env.Compiler().compile(ast2, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, void 0, true);
    return env.template(templateSpec);
  }
  function ret(context, execOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled.call(this, context, execOptions);
  }
  ret._setup = function(setupOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._setup(setupOptions);
  };
  ret._child = function(i, data, blockParams2, depths) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._child(i, data, blockParams2, depths);
  };
  return ret;
}
function argEquals(a, b) {
  if (a === b) {
    return true;
  }
  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (!argEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}
function transformLiteralToPath(sexpr) {
  if (!sexpr.path.parts) {
    var literal = sexpr.path;
    sexpr.path = {
      type: "PathExpression",
      data: false,
      depth: 0,
      parts: [literal.original + ""],
      original: literal.original + "",
      loc: literal.loc
    };
  }
}
var javascriptCompiler = { exports: {} };
var codeGen = { exports: {} };
(function(module, exports) {
  exports.__esModule = true;
  var _utils2 = utils;
  var SourceNode = void 0;
  try {
    if (true) {
      var SourceMap = require("source-map");
      SourceNode = SourceMap.SourceNode;
    }
  } catch (err) {
  }
  if (!SourceNode) {
    SourceNode = function(line, column, srcFile, chunks) {
      this.src = "";
      if (chunks) {
        this.add(chunks);
      }
    };
    SourceNode.prototype = {
      add: function add2(chunks) {
        if (_utils2.isArray(chunks)) {
          chunks = chunks.join("");
        }
        this.src += chunks;
      },
      prepend: function prepend(chunks) {
        if (_utils2.isArray(chunks)) {
          chunks = chunks.join("");
        }
        this.src = chunks + this.src;
      },
      toStringWithSourceMap: function toStringWithSourceMap() {
        return { code: this.toString() };
      },
      toString: function toString2() {
        return this.src;
      }
    };
  }
  function castChunk(chunk, codeGen2, loc) {
    if (_utils2.isArray(chunk)) {
      var ret = [];
      for (var i = 0, len = chunk.length; i < len; i++) {
        ret.push(codeGen2.wrap(chunk[i], loc));
      }
      return ret;
    } else if (typeof chunk === "boolean" || typeof chunk === "number") {
      return chunk + "";
    }
    return chunk;
  }
  function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
  }
  CodeGen.prototype = {
    isEmpty: function isEmpty2() {
      return !this.source.length;
    },
    prepend: function prepend(source, loc) {
      this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
      this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
      var source = this.empty();
      this.each(function(line) {
        source.add(["  ", line, "\n"]);
      });
      return source;
    },
    each: function each2(iter) {
      for (var i = 0, len = this.source.length; i < len; i++) {
        iter(this.source[i]);
      }
    },
    empty: function empty() {
      var loc = this.currentLocation || { start: {} };
      return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
      var loc = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
      if (chunk instanceof SourceNode) {
        return chunk;
      }
      chunk = castChunk(chunk, this, loc);
      return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
      params = this.generateList(params);
      return this.wrap([fn, type ? "." + type + "(" : "(", params, ")"]);
    },
    quotedString: function quotedString(str) {
      return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
    },
    objectLiteral: function objectLiteral(obj) {
      var _this = this;
      var pairs = [];
      Object.keys(obj).forEach(function(key) {
        var value = castChunk(obj[key], _this);
        if (value !== "undefined") {
          pairs.push([_this.quotedString(key), ":", value]);
        }
      });
      var ret = this.generateList(pairs);
      ret.prepend("{");
      ret.add("}");
      return ret;
    },
    generateList: function generateList(entries) {
      var ret = this.empty();
      for (var i = 0, len = entries.length; i < len; i++) {
        if (i) {
          ret.add(",");
        }
        ret.add(castChunk(entries[i], this));
      }
      return ret;
    },
    generateArray: function generateArray(entries) {
      var ret = this.generateList(entries);
      ret.prepend("[");
      ret.add("]");
      return ret;
    }
  };
  exports["default"] = CodeGen;
  module.exports = exports["default"];
})(codeGen, codeGen.exports);
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _base2 = base$1;
  var _exception3 = exception.exports;
  var _exception22 = _interopRequireDefault2(_exception3);
  var _utils2 = utils;
  var _codeGen = codeGen.exports;
  var _codeGen2 = _interopRequireDefault2(_codeGen);
  function Literal(value) {
    this.value = value;
  }
  function JavaScriptCompiler() {
  }
  JavaScriptCompiler.prototype = {
    nameLookup: function nameLookup(parent, name2) {
      return this.internalNameLookup(parent, name2);
    },
    depthedLookup: function depthedLookup(name2) {
      return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(name2), ")"];
    },
    compilerInfo: function compilerInfo() {
      var revision = _base2.COMPILER_REVISION, versions = _base2.REVISION_CHANGES[revision];
      return [revision, versions];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
      if (!_utils2.isArray(source)) {
        source = [source];
      }
      source = this.source.wrap(source, location);
      if (this.environment.isSimple) {
        return ["return ", source, ";"];
      } else if (explicit) {
        return ["buffer += ", source, ";"];
      } else {
        source.appendToBuffer = true;
        return source;
      }
    },
    initializeBuffer: function initializeBuffer() {
      return this.quotedString("");
    },
    internalNameLookup: function internalNameLookup(parent, name2) {
      this.lookupPropertyFunctionIsUsed = true;
      return ["lookupProperty(", parent, ",", JSON.stringify(name2), ")"];
    },
    lookupPropertyFunctionIsUsed: false,
    compile: function compile3(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options;
      this.stringParams = this.options.stringParams;
      this.trackIds = this.options.trackIds;
      this.precompile = !asObject;
      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        decorators: [],
        programs: [],
        environments: []
      };
      this.preamble();
      this.stackSlot = 0;
      this.stackVars = [];
      this.aliases = {};
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];
      this.blockParams = [];
      this.compileChildren(environment, options);
      this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
      this.useBlockParams = this.useBlockParams || environment.useBlockParams;
      var opcodes = environment.opcodes, opcode2 = void 0, firstLoc = void 0, i = void 0, l = void 0;
      for (i = 0, l = opcodes.length; i < l; i++) {
        opcode2 = opcodes[i];
        this.source.currentLocation = opcode2.loc;
        firstLoc = firstLoc || opcode2.loc;
        this[opcode2.opcode].apply(this, opcode2.args);
      }
      this.source.currentLocation = firstLoc;
      this.pushSource("");
      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new _exception22["default"]("Compile completed with content left on stack");
      }
      if (!this.decorators.isEmpty()) {
        this.useDecorators = true;
        this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]);
        this.decorators.push("return fn;");
        if (asObject) {
          this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]);
        } else {
          this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
          this.decorators.push("}\n");
          this.decorators = this.decorators.merge();
        }
      } else {
        this.decorators = void 0;
      }
      var fn = this.createFunctionContext(asObject);
      if (!this.isChild) {
        var ret = {
          compiler: this.compilerInfo(),
          main: fn
        };
        if (this.decorators) {
          ret.main_d = this.decorators;
          ret.useDecorators = true;
        }
        var _context = this.context;
        var programs = _context.programs;
        var decorators2 = _context.decorators;
        for (i = 0, l = programs.length; i < l; i++) {
          if (programs[i]) {
            ret[i] = programs[i];
            if (decorators2[i]) {
              ret[i + "_d"] = decorators2[i];
              ret.useDecorators = true;
            }
          }
        }
        if (this.environment.usePartial) {
          ret.usePartial = true;
        }
        if (this.options.data) {
          ret.useData = true;
        }
        if (this.useDepths) {
          ret.useDepths = true;
        }
        if (this.useBlockParams) {
          ret.useBlockParams = true;
        }
        if (this.options.compat) {
          ret.compat = true;
        }
        if (!asObject) {
          ret.compiler = JSON.stringify(ret.compiler);
          this.source.currentLocation = { start: { line: 1, column: 0 } };
          ret = this.objectLiteral(ret);
          if (options.srcName) {
            ret = ret.toStringWithSourceMap({ file: options.destName });
            ret.map = ret.map && ret.map.toString();
          } else {
            ret = ret.toString();
          }
        } else {
          ret.compilerOptions = this.options;
        }
        return ret;
      } else {
        return fn;
      }
    },
    preamble: function preamble() {
      this.lastContext = 0;
      this.source = new _codeGen2["default"](this.options.srcName);
      this.decorators = new _codeGen2["default"](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
      var _this = this;
      var varDeclarations = "";
      var locals = this.stackVars.concat(this.registers.list);
      if (locals.length > 0) {
        varDeclarations += ", " + locals.join(", ");
      }
      var aliasCount = 0;
      Object.keys(this.aliases).forEach(function(alias) {
        var node2 = _this.aliases[alias];
        if (node2.children && node2.referenceCount > 1) {
          varDeclarations += ", alias" + ++aliasCount + "=" + alias;
          node2.children[0] = "alias" + aliasCount;
        }
      });
      if (this.lookupPropertyFunctionIsUsed) {
        varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration();
      }
      var params = ["container", "depth0", "helpers", "partials", "data"];
      if (this.useBlockParams || this.useDepths) {
        params.push("blockParams");
      }
      if (this.useDepths) {
        params.push("depths");
      }
      var source = this.mergeSource(varDeclarations);
      if (asObject) {
        params.push(source);
        return Function.apply(this, params);
      } else {
        return this.source.wrap(["function(", params.join(","), ") {\n  ", source, "}"]);
      }
    },
    mergeSource: function mergeSource(varDeclarations) {
      var isSimple2 = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = void 0, sourceSeen = void 0, bufferStart = void 0, bufferEnd = void 0;
      this.source.each(function(line) {
        if (line.appendToBuffer) {
          if (bufferStart) {
            line.prepend("  + ");
          } else {
            bufferStart = line;
          }
          bufferEnd = line;
        } else {
          if (bufferStart) {
            if (!sourceSeen) {
              appendFirst = true;
            } else {
              bufferStart.prepend("buffer += ");
            }
            bufferEnd.add(";");
            bufferStart = bufferEnd = void 0;
          }
          sourceSeen = true;
          if (!isSimple2) {
            appendOnly = false;
          }
        }
      });
      if (appendOnly) {
        if (bufferStart) {
          bufferStart.prepend("return ");
          bufferEnd.add(";");
        } else if (!sourceSeen) {
          this.source.push('return "";');
        }
      } else {
        varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
        if (bufferStart) {
          bufferStart.prepend("return buffer + ");
          bufferEnd.add(";");
        } else {
          this.source.push("return buffer;");
        }
      }
      if (varDeclarations) {
        this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"));
      }
      return this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
      return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
    },
    blockValue: function blockValue(name2) {
      var blockHelperMissing2 = this.aliasable("container.hooks.blockHelperMissing"), params = [this.contextName(0)];
      this.setupHelperArgs(name2, 0, params);
      var blockName = this.popStack();
      params.splice(1, 0, blockName);
      this.push(this.source.functionCall(blockHelperMissing2, "call", params));
    },
    ambiguousBlockValue: function ambiguousBlockValue() {
      var blockHelperMissing2 = this.aliasable("container.hooks.blockHelperMissing"), params = [this.contextName(0)];
      this.setupHelperArgs("", 0, params, true);
      this.flushInline();
      var current = this.topStack();
      params.splice(1, 0, current);
      this.pushSource(["if (!", this.lastHelper, ") { ", current, " = ", this.source.functionCall(blockHelperMissing2, "call", params), "}"]);
    },
    appendContent: function appendContent(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      } else {
        this.pendingLocation = this.source.currentLocation;
      }
      this.pendingContent = content;
    },
    append: function append2() {
      if (this.isInline()) {
        this.replaceStack(function(current) {
          return [" != null ? ", current, ' : ""'];
        });
        this.pushSource(this.appendToBuffer(this.popStack()));
      } else {
        var local = this.popStack();
        this.pushSource(["if (", local, " != null) { ", this.appendToBuffer(local, void 0, true), " }"]);
        if (this.environment.isSimple) {
          this.pushSource(["else { ", this.appendToBuffer("''", void 0, true), " }"]);
        }
      }
    },
    appendEscaped: function appendEscaped() {
      this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
    },
    getContext: function getContext(depth) {
      this.lastContext = depth;
    },
    pushContext: function pushContext() {
      this.pushStackLiteral(this.contextName(this.lastContext));
    },
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
      var i = 0;
      if (!scoped && this.options.compat && !this.lastContext) {
        this.push(this.depthedLookup(parts[i++]));
      } else {
        this.pushContext();
      }
      this.resolvePath("context", parts, i, falsy, strict);
    },
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
      this.useBlockParams = true;
      this.push(["blockParams[", blockParamId[0], "][", blockParamId[1], "]"]);
      this.resolvePath("context", parts, 1);
    },
    lookupData: function lookupData(depth, parts, strict) {
      if (!depth) {
        this.pushStackLiteral("data");
      } else {
        this.pushStackLiteral("container.data(data, " + depth + ")");
      }
      this.resolvePath("data", parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, i, falsy, strict) {
      var _this2 = this;
      if (this.options.strict || this.options.assumeObjects) {
        this.push(strictLookup(this.options.strict && strict, this, parts, type));
        return;
      }
      var len = parts.length;
      for (; i < len; i++) {
        this.replaceStack(function(current) {
          var lookup2 = _this2.nameLookup(current, parts[i], type);
          if (!falsy) {
            return [" != null ? ", lookup2, " : ", current];
          } else {
            return [" && ", lookup2];
          }
        });
      }
    },
    resolvePossibleLambda: function resolvePossibleLambda() {
      this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
    },
    pushStringParam: function pushStringParam(string, type) {
      this.pushContext();
      this.pushString(type);
      if (type !== "SubExpression") {
        if (typeof string === "string") {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },
    emptyHash: function emptyHash(omitEmpty) {
      if (this.trackIds) {
        this.push("{}");
      }
      if (this.stringParams) {
        this.push("{}");
        this.push("{}");
      }
      this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
    },
    pushHash: function pushHash() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = { values: {}, types: [], contexts: [], ids: [] };
    },
    popHash: function popHash() {
      var hash = this.hash;
      this.hash = this.hashes.pop();
      if (this.trackIds) {
        this.push(this.objectLiteral(hash.ids));
      }
      if (this.stringParams) {
        this.push(this.objectLiteral(hash.contexts));
        this.push(this.objectLiteral(hash.types));
      }
      this.push(this.objectLiteral(hash.values));
    },
    pushString: function pushString(string) {
      this.pushStackLiteral(this.quotedString(string));
    },
    pushLiteral: function pushLiteral(value) {
      this.pushStackLiteral(value);
    },
    pushProgram: function pushProgram(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },
    registerDecorator: function registerDecorator2(paramSize, name2) {
      var foundDecorator = this.nameLookup("decorators", name2, "decorator"), options = this.setupHelperArgs(name2, paramSize);
      this.decorators.push(["fn = ", this.decorators.functionCall(foundDecorator, "", ["fn", "props", "container", options]), " || fn;"]);
    },
    invokeHelper: function invokeHelper(paramSize, name2, isSimple2) {
      var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name2);
      var possibleFunctionCalls = [];
      if (isSimple2) {
        possibleFunctionCalls.push(helper.name);
      }
      possibleFunctionCalls.push(nonHelper);
      if (!this.options.strict) {
        possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
      }
      var functionLookupCode = ["(", this.itemsSeparatedBy(possibleFunctionCalls, "||"), ")"];
      var functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
      this.push(functionCall);
    },
    itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
      var result = [];
      result.push(items[0]);
      for (var i = 1; i < items.length; i++) {
        result.push(separator, items[i]);
      }
      return result;
    },
    invokeKnownHelper: function invokeKnownHelper(paramSize, name2) {
      var helper = this.setupHelper(paramSize, name2);
      this.push(this.source.functionCall(helper.name, "call", helper.callParams));
    },
    invokeAmbiguous: function invokeAmbiguous(name2, helperCall) {
      this.useRegister("helper");
      var nonHelper = this.popStack();
      this.emptyHash();
      var helper = this.setupHelper(0, name2, helperCall);
      var helperName = this.lastHelper = this.nameLookup("helpers", name2, "helper");
      var lookup2 = ["(", "(helper = ", helperName, " || ", nonHelper, ")"];
      if (!this.options.strict) {
        lookup2[0] = "(helper = ";
        lookup2.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"));
      }
      this.push(["(", lookup2, helper.paramsInit ? ["),(", helper.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", helper.callParams), " : helper))"]);
    },
    invokePartial: function invokePartial2(isDynamic, name2, indent) {
      var params = [], options = this.setupParams(name2, 1, params);
      if (isDynamic) {
        name2 = this.popStack();
        delete options.name;
      }
      if (indent) {
        options.indent = JSON.stringify(indent);
      }
      options.helpers = "helpers";
      options.partials = "partials";
      options.decorators = "container.decorators";
      if (!isDynamic) {
        params.unshift(this.nameLookup("partials", name2, "partial"));
      } else {
        params.unshift(name2);
      }
      if (this.options.compat) {
        options.depths = "depths";
      }
      options = this.objectLiteral(options);
      params.push(options);
      this.push(this.source.functionCall("container.invokePartial", "", params));
    },
    assignToHash: function assignToHash(key) {
      var value = this.popStack(), context = void 0, type = void 0, id2 = void 0;
      if (this.trackIds) {
        id2 = this.popStack();
      }
      if (this.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }
      var hash = this.hash;
      if (context) {
        hash.contexts[key] = context;
      }
      if (type) {
        hash.types[key] = type;
      }
      if (id2) {
        hash.ids[key] = id2;
      }
      hash.values[key] = value;
    },
    pushId: function pushId(type, name2, child) {
      if (type === "BlockParam") {
        this.pushStackLiteral("blockParams[" + name2[0] + "].path[" + name2[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""));
      } else if (type === "PathExpression") {
        this.pushString(name2);
      } else if (type === "SubExpression") {
        this.pushStackLiteral("true");
      } else {
        this.pushStackLiteral("null");
      }
    },
    compiler: JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
      var children = environment.children, child = void 0, compiler2 = void 0;
      for (var i = 0, l = children.length; i < l; i++) {
        child = children[i];
        compiler2 = new this.compiler();
        var existing = this.matchExistingProgram(child);
        if (existing == null) {
          this.context.programs.push("");
          var index2 = this.context.programs.length;
          child.index = index2;
          child.name = "program" + index2;
          this.context.programs[index2] = compiler2.compile(child, options, this.context, !this.precompile);
          this.context.decorators[index2] = compiler2.decorators;
          this.context.environments[index2] = child;
          this.useDepths = this.useDepths || compiler2.useDepths;
          this.useBlockParams = this.useBlockParams || compiler2.useBlockParams;
          child.useDepths = this.useDepths;
          child.useBlockParams = this.useBlockParams;
        } else {
          child.index = existing.index;
          child.name = "program" + existing.index;
          this.useDepths = this.useDepths || existing.useDepths;
          this.useBlockParams = this.useBlockParams || existing.useBlockParams;
        }
      }
    },
    matchExistingProgram: function matchExistingProgram(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return environment;
        }
      }
    },
    programExpression: function programExpression(guid) {
      var child = this.environment.children[guid], programParams = [child.index, "data", child.blockParams];
      if (this.useBlockParams || this.useDepths) {
        programParams.push("blockParams");
      }
      if (this.useDepths) {
        programParams.push("depths");
      }
      return "container.program(" + programParams.join(", ") + ")";
    },
    useRegister: function useRegister(name2) {
      if (!this.registers[name2]) {
        this.registers[name2] = true;
        this.registers.list.push(name2);
      }
    },
    push: function push(expr) {
      if (!(expr instanceof Literal)) {
        expr = this.source.wrap(expr);
      }
      this.inlineStack.push(expr);
      return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
      this.push(new Literal(item));
    },
    pushSource: function pushSource(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
        this.pendingContent = void 0;
      }
      if (source) {
        this.source.push(source);
      }
    },
    replaceStack: function replaceStack(callback) {
      var prefix2 = ["("], stack = void 0, createdStack = void 0, usedLiteral = void 0;
      if (!this.isInline()) {
        throw new _exception22["default"]("replaceStack on non-inline");
      }
      var top = this.popStack(true);
      if (top instanceof Literal) {
        stack = [top.value];
        prefix2 = ["(", stack];
        usedLiteral = true;
      } else {
        createdStack = true;
        var _name = this.incrStack();
        prefix2 = ["((", this.push(_name), " = ", top, ")"];
        stack = this.topStack();
      }
      var item = callback.call(this, stack);
      if (!usedLiteral) {
        this.popStack();
      }
      if (createdStack) {
        this.stackSlot--;
      }
      this.push(prefix2.concat(item, ")"));
    },
    incrStack: function incrStack() {
      this.stackSlot++;
      if (this.stackSlot > this.stackVars.length) {
        this.stackVars.push("stack" + this.stackSlot);
      }
      return this.topStackName();
    },
    topStackName: function topStackName() {
      return "stack" + this.stackSlot;
    },
    flushInline: function flushInline() {
      var inlineStack = this.inlineStack;
      this.inlineStack = [];
      for (var i = 0, len = inlineStack.length; i < len; i++) {
        var entry = inlineStack[i];
        if (entry instanceof Literal) {
          this.compileStack.push(entry);
        } else {
          var stack = this.incrStack();
          this.pushSource([stack, " = ", entry, ";"]);
          this.compileStack.push(stack);
        }
      }
    },
    isInline: function isInline() {
      return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
      var inline2 = this.isInline(), item = (inline2 ? this.inlineStack : this.compileStack).pop();
      if (!wrapped && item instanceof Literal) {
        return item.value;
      } else {
        if (!inline2) {
          if (!this.stackSlot) {
            throw new _exception22["default"]("Invalid stack pop");
          }
          this.stackSlot--;
        }
        return item;
      }
    },
    topStack: function topStack() {
      var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
      if (item instanceof Literal) {
        return item.value;
      } else {
        return item;
      }
    },
    contextName: function contextName(context) {
      if (this.useDepths && context) {
        return "depths[" + context + "]";
      } else {
        return "depth" + context;
      }
    },
    quotedString: function quotedString(str) {
      return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
      return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name2) {
      var ret = this.aliases[name2];
      if (ret) {
        ret.referenceCount++;
        return ret;
      }
      ret = this.aliases[name2] = this.source.wrap(name2);
      ret.aliasable = true;
      ret.referenceCount = 1;
      return ret;
    },
    setupHelper: function setupHelper(paramSize, name2, blockHelper) {
      var params = [], paramsInit = this.setupHelperArgs(name2, paramSize, params, blockHelper);
      var foundHelper = this.nameLookup("helpers", name2, "helper"), callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
      return {
        params,
        paramsInit,
        name: foundHelper,
        callParams: [callContext].concat(params)
      };
    },
    setupParams: function setupParams(helper, paramSize, params) {
      var options = {}, contexts = [], types2 = [], ids2 = [], objectArgs = !params, param = void 0;
      if (objectArgs) {
        params = [];
      }
      options.name = this.quotedString(helper);
      options.hash = this.popStack();
      if (this.trackIds) {
        options.hashIds = this.popStack();
      }
      if (this.stringParams) {
        options.hashTypes = this.popStack();
        options.hashContexts = this.popStack();
      }
      var inverse = this.popStack(), program = this.popStack();
      if (program || inverse) {
        options.fn = program || "container.noop";
        options.inverse = inverse || "container.noop";
      }
      var i = paramSize;
      while (i--) {
        param = this.popStack();
        params[i] = param;
        if (this.trackIds) {
          ids2[i] = this.popStack();
        }
        if (this.stringParams) {
          types2[i] = this.popStack();
          contexts[i] = this.popStack();
        }
      }
      if (objectArgs) {
        options.args = this.source.generateArray(params);
      }
      if (this.trackIds) {
        options.ids = this.source.generateArray(ids2);
      }
      if (this.stringParams) {
        options.types = this.source.generateArray(types2);
        options.contexts = this.source.generateArray(contexts);
      }
      if (this.options.data) {
        options.data = "data";
      }
      if (this.useBlockParams) {
        options.blockParams = "blockParams";
      }
      return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
      var options = this.setupParams(helper, paramSize, params);
      options.loc = JSON.stringify(this.source.currentLocation);
      options = this.objectLiteral(options);
      if (useRegister) {
        this.useRegister("options");
        params.push("options");
        return ["options=", options];
      } else if (params) {
        params.push(options);
        return "";
      } else {
        return options;
      }
    }
  };
  (function() {
    var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" ");
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    for (var i = 0, l = reservedWords.length; i < l; i++) {
      compilerWords[reservedWords[i]] = true;
    }
  })();
  JavaScriptCompiler.isValidJavaScriptVariableName = function(name2) {
    return !JavaScriptCompiler.RESERVED_WORDS[name2] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name2);
  };
  function strictLookup(requireTerminal, compiler2, parts, type) {
    var stack = compiler2.popStack(), i = 0, len = parts.length;
    if (requireTerminal) {
      len--;
    }
    for (; i < len; i++) {
      stack = compiler2.nameLookup(stack, parts[i], type);
    }
    if (requireTerminal) {
      return [compiler2.aliasable("container.strict"), "(", stack, ", ", compiler2.quotedString(parts[i]), ", ", JSON.stringify(compiler2.source.currentLocation), " )"];
    } else {
      return stack;
    }
  }
  exports["default"] = JavaScriptCompiler;
  module.exports = exports["default"];
})(javascriptCompiler, javascriptCompiler.exports);
(function(module, exports) {
  exports.__esModule = true;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var _handlebarsRuntime = handlebars_runtime.exports;
  var _handlebarsRuntime2 = _interopRequireDefault2(_handlebarsRuntime);
  var _handlebarsCompilerAst = ast.exports;
  var _handlebarsCompilerAst2 = _interopRequireDefault2(_handlebarsCompilerAst);
  var _handlebarsCompilerBase = base;
  var _handlebarsCompilerCompiler = compiler;
  var _handlebarsCompilerJavascriptCompiler = javascriptCompiler.exports;
  var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault2(_handlebarsCompilerJavascriptCompiler);
  var _handlebarsCompilerVisitor = visitor.exports;
  var _handlebarsCompilerVisitor2 = _interopRequireDefault2(_handlebarsCompilerVisitor);
  var _handlebarsNoConflict = noConflict.exports;
  var _handlebarsNoConflict2 = _interopRequireDefault2(_handlebarsNoConflict);
  var _create = _handlebarsRuntime2["default"].create;
  function create2() {
    var hb = _create();
    hb.compile = function(input, options) {
      return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function(input, options) {
      return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };
    hb.AST = _handlebarsCompilerAst2["default"];
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2["default"];
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;
    hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
    return hb;
  }
  var inst = create2();
  inst.create = create2;
  _handlebarsNoConflict2["default"](inst);
  inst.Visitor = _handlebarsCompilerVisitor2["default"];
  inst["default"] = inst;
  exports["default"] = inst;
  module.exports = exports["default"];
})(handlebars, handlebars.exports);
class HbsUtil {
}
__publicField(HbsUtil, "renderComponent", async (el, hbs_file_name, data) => {
  async function renderTemplate(el2, templateSrc2, data2) {
    const template2 = handlebars.exports.compile(templateSrc2);
    $(el2).html(template2(data2));
  }
  const templateUrl = "./src/" + hbs_file_name;
  const templateSrc = await DataUtil.fetchData(templateUrl);
  await renderTemplate(el, templateSrc, data);
});
var inherits_browser = { exports: {} };
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits2(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits2(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
var inherits$1 = inherits_browser.exports;
var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined$1(obj) {
  return obj === void 0;
}
function isDefined(obj) {
  return obj !== void 0;
}
function isArray$1(obj) {
  return nativeToString.call(obj) === "[object Array]";
}
function isObject(obj) {
  return nativeToString.call(obj) === "[object Object]";
}
function isNumber(obj) {
  return nativeToString.call(obj) === "[object Number]";
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object AsyncGeneratorFunction]" || tag === "[object Proxy]";
}
function isString(obj) {
  return nativeToString.call(obj) === "[object String]";
}
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}
function find(collection2, matcher) {
  matcher = toMatcher(matcher);
  var match2;
  forEach(collection2, function(val, key) {
    if (matcher(val, key)) {
      match2 = val;
      return false;
    }
  });
  return match2;
}
function filter(collection2, matcher) {
  var result = [];
  forEach(collection2, function(val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
function forEach(collection2, iterator) {
  var val, result;
  if (isUndefined$1(collection2)) {
    return;
  }
  var convertKey = isArray$1(collection2) ? toNum : identity;
  for (var key in collection2) {
    if (has(collection2, key)) {
      val = collection2[key];
      result = iterator(val, convertKey(key));
      if (result === false) {
        return val;
      }
    }
  }
}
function reduce(collection2, iterator, result) {
  forEach(collection2, function(value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
function every(collection2, matcher) {
  return !!reduce(collection2, function(matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
function some(collection2, matcher) {
  return !!find(collection2, matcher);
}
function matchPattern(pattern) {
  return function(el) {
    return every(pattern, function(val, key) {
      return el[key] === val;
    });
  };
}
function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function(e) {
    return e === matcher;
  };
}
function identity(arg) {
  return arg;
}
function toNum(arg) {
  return Number(arg);
}
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;
  function fire(force) {
    var now = Date.now();
    var scheduledDiff = force ? 0 : lastNow + timeout - now;
    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }
    fn.apply(lastThis, lastArgs);
    clear2();
  }
  function schedule(timeout2) {
    timer = setTimeout(fire, timeout2);
  }
  function clear2() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = lastNow = lastArgs = lastThis = void 0;
  }
  function flush() {
    if (timer) {
      fire(true);
    }
    clear2();
  }
  function callback() {
    lastNow = Date.now();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    lastThis = this;
    if (!timer) {
      schedule(timeout);
    }
  }
  callback.flush = flush;
  callback.cancel = clear2;
  return callback;
}
function bind$2(fn, target) {
  return fn.bind(target);
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }
  return _extends.apply(void 0, [target].concat(others));
}
function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function(prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function(prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
var DEFAULT_RENDER_PRIORITY$1 = 1e3;
function BaseRenderer(eventBus, renderPriority) {
  var self2 = this;
  renderPriority = renderPriority || DEFAULT_RENDER_PRIORITY$1;
  eventBus.on(["render.shape", "render.connection"], renderPriority, function(evt, context) {
    var type = evt.type, element = context.element, visuals = context.gfx, attrs = context.attrs;
    if (self2.canRender(element)) {
      if (type === "render.shape") {
        return self2.drawShape(visuals, element, attrs);
      } else {
        return self2.drawConnection(visuals, element, attrs);
      }
    }
  });
  eventBus.on(["render.getShapePath", "render.getConnectionPath"], renderPriority, function(evt, element) {
    if (self2.canRender(element)) {
      if (evt.type === "render.getShapePath") {
        return self2.getShapePath(element);
      } else {
        return self2.getConnectionPath(element);
      }
    }
  });
}
BaseRenderer.prototype.canRender = function() {
};
BaseRenderer.prototype.drawShape = function() {
};
BaseRenderer.prototype.drawConnection = function() {
};
BaseRenderer.prototype.getShapePath = function() {
};
BaseRenderer.prototype.getConnectionPath = function() {
};
function is$1(element, type) {
  var bo = getBusinessObject(element);
  return bo && typeof bo.$instanceOf === "function" && bo.$instanceOf(type);
}
function getBusinessObject(element) {
  return element && element.businessObject || element;
}
function isExpanded(element) {
  if (is$1(element, "bpmn:CallActivity")) {
    return false;
  }
  if (is$1(element, "bpmn:SubProcess")) {
    return getBusinessObject(element).di && !!getBusinessObject(element).di.isExpanded;
  }
  if (is$1(element, "bpmn:Participant")) {
    return !!getBusinessObject(element).processRef;
  }
  return true;
}
function isEventSubProcess(element) {
  return element && !!getBusinessObject(element).triggeredByEvent;
}
function getLabelAttr(semantic) {
  if (is$1(semantic, "bpmn:FlowElement") || is$1(semantic, "bpmn:Participant") || is$1(semantic, "bpmn:Lane") || is$1(semantic, "bpmn:SequenceFlow") || is$1(semantic, "bpmn:MessageFlow") || is$1(semantic, "bpmn:DataInput") || is$1(semantic, "bpmn:DataOutput")) {
    return "name";
  }
  if (is$1(semantic, "bpmn:TextAnnotation")) {
    return "text";
  }
  if (is$1(semantic, "bpmn:Group")) {
    return "categoryValueRef";
  }
}
function getCategoryValue(semantic) {
  var categoryValueRef = semantic["categoryValueRef"];
  if (!categoryValueRef) {
    return "";
  }
  return categoryValueRef.value || "";
}
function getLabel(element) {
  var semantic = element.businessObject, attr2 = getLabelAttr(semantic);
  if (attr2) {
    if (attr2 === "categoryValueRef") {
      return getCategoryValue(semantic);
    }
    return semantic[attr2] || "";
  }
}
function ensureImported(element, target) {
  if (element.ownerDocument !== target.ownerDocument) {
    try {
      return target.ownerDocument.importNode(element, true);
    } catch (e) {
    }
  }
  return element;
}
function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}
function append(target, node2) {
  appendTo(node2, target);
  return target;
}
var LENGTH_ATTR = 2;
var CSS_PROPERTIES = {
  "alignment-baseline": 1,
  "baseline-shift": 1,
  "clip": 1,
  "clip-path": 1,
  "clip-rule": 1,
  "color": 1,
  "color-interpolation": 1,
  "color-interpolation-filters": 1,
  "color-profile": 1,
  "color-rendering": 1,
  "cursor": 1,
  "direction": 1,
  "display": 1,
  "dominant-baseline": 1,
  "enable-background": 1,
  "fill": 1,
  "fill-opacity": 1,
  "fill-rule": 1,
  "filter": 1,
  "flood-color": 1,
  "flood-opacity": 1,
  "font": 1,
  "font-family": 1,
  "font-size": LENGTH_ATTR,
  "font-size-adjust": 1,
  "font-stretch": 1,
  "font-style": 1,
  "font-variant": 1,
  "font-weight": 1,
  "glyph-orientation-horizontal": 1,
  "glyph-orientation-vertical": 1,
  "image-rendering": 1,
  "kerning": 1,
  "letter-spacing": 1,
  "lighting-color": 1,
  "marker": 1,
  "marker-end": 1,
  "marker-mid": 1,
  "marker-start": 1,
  "mask": 1,
  "opacity": 1,
  "overflow": 1,
  "pointer-events": 1,
  "shape-rendering": 1,
  "stop-color": 1,
  "stop-opacity": 1,
  "stroke": 1,
  "stroke-dasharray": 1,
  "stroke-dashoffset": 1,
  "stroke-linecap": 1,
  "stroke-linejoin": 1,
  "stroke-miterlimit": 1,
  "stroke-opacity": 1,
  "stroke-width": LENGTH_ATTR,
  "text-anchor": 1,
  "text-decoration": 1,
  "text-rendering": 1,
  "unicode-bidi": 1,
  "visibility": 1,
  "word-spacing": 1,
  "writing-mode": 1
};
function getAttribute(node2, name2) {
  if (CSS_PROPERTIES[name2]) {
    return node2.style[name2];
  } else {
    return node2.getAttributeNS(null, name2);
  }
}
function setAttribute(node2, name2, value) {
  var hyphenated = name2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  var type = CSS_PROPERTIES[hyphenated];
  if (type) {
    if (type === LENGTH_ATTR && typeof value === "number") {
      value = String(value) + "px";
    }
    node2.style[hyphenated] = value;
  } else {
    node2.setAttributeNS(null, name2, value);
  }
}
function setAttributes(node2, attrs) {
  var names = Object.keys(attrs), i, name2;
  for (i = 0, name2; name2 = names[i]; i++) {
    setAttribute(node2, name2, attrs[name2]);
  }
}
function attr$1(node2, name2, value) {
  if (typeof name2 === "string") {
    if (value !== void 0) {
      setAttribute(node2, name2, value);
    } else {
      return getAttribute(node2, name2);
    }
  } else {
    setAttributes(node2, name2);
  }
  return node2;
}
function index(arr, obj) {
  if (arr.indexOf) {
    return arr.indexOf(obj);
  }
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) {
      return i;
    }
  }
  return -1;
}
var re$1 = /\s+/;
var toString$1 = Object.prototype.toString;
function defined(o) {
  return typeof o !== "undefined";
}
function classes$1(el) {
  return new ClassList$1(el);
}
function ClassList$1(el) {
  if (!el || !el.nodeType) {
    throw new Error("A DOM element reference is required");
  }
  this.el = el;
  this.list = el.classList;
}
ClassList$1.prototype.add = function(name2) {
  if (this.list) {
    this.list.add(name2);
    return this;
  }
  var arr = this.array();
  var i = index(arr, name2);
  if (!~i) {
    arr.push(name2);
  }
  if (defined(this.el.className.baseVal)) {
    this.el.className.baseVal = arr.join(" ");
  } else {
    this.el.className = arr.join(" ");
  }
  return this;
};
ClassList$1.prototype.remove = function(name2) {
  if (toString$1.call(name2) === "[object RegExp]") {
    return this.removeMatching(name2);
  }
  if (this.list) {
    this.list.remove(name2);
    return this;
  }
  var arr = this.array();
  var i = index(arr, name2);
  if (~i) {
    arr.splice(i, 1);
  }
  this.el.className.baseVal = arr.join(" ");
  return this;
};
ClassList$1.prototype.removeMatching = function(re2) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re2.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};
ClassList$1.prototype.toggle = function(name2, force) {
  if (this.list) {
    if (defined(force)) {
      if (force !== this.list.toggle(name2, force)) {
        this.list.toggle(name2);
      }
    } else {
      this.list.toggle(name2);
    }
    return this;
  }
  if (defined(force)) {
    if (!force) {
      this.remove(name2);
    } else {
      this.add(name2);
    }
  } else {
    if (this.has(name2)) {
      this.remove(name2);
    } else {
      this.add(name2);
    }
  }
  return this;
};
ClassList$1.prototype.array = function() {
  var className = this.el.getAttribute("class") || "";
  var str = className.replace(/^\s+|\s+$/g, "");
  var arr = str.split(re$1);
  if (arr[0] === "") {
    arr.shift();
  }
  return arr;
};
ClassList$1.prototype.has = ClassList$1.prototype.contains = function(name2) {
  return this.list ? this.list.contains(name2) : !!~index(this.array(), name2);
};
function remove$2(element) {
  var parent = element.parentNode;
  if (parent) {
    parent.removeChild(element);
  }
  return element;
}
function clear$1(element) {
  var child;
  while (child = element.firstChild) {
    remove$2(child);
  }
  return element;
}
var ns = {
  svg: "http://www.w3.org/2000/svg"
};
var SVG_START = '<svg xmlns="' + ns.svg + '"';
function parse$1(svg) {
  var unwrap = false;
  if (svg.substring(0, 4) === "<svg") {
    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {
    svg = SVG_START + ">" + svg + "</svg>";
    unwrap = true;
  }
  var parsed = parseDocument(svg);
  if (!unwrap) {
    return parsed;
  }
  var fragment = document.createDocumentFragment();
  var parent = parsed.firstChild;
  while (parent.firstChild) {
    fragment.appendChild(parent.firstChild);
  }
  return fragment;
}
function parseDocument(svg) {
  var parser2;
  parser2 = new DOMParser();
  parser2.async = false;
  return parser2.parseFromString(svg, "text/xml");
}
function create$1(name2, attrs) {
  var element;
  if (name2.charAt(0) === "<") {
    element = parse$1(name2).firstChild;
    element = document.importNode(element, true);
  } else {
    element = document.createElementNS(ns.svg, name2);
  }
  if (attrs) {
    attr$1(element, attrs);
  }
  return element;
}
var node = create$1("svg");
function extend$1(object, props) {
  var i, k, keys = Object.keys(props);
  for (i = 0; k = keys[i]; i++) {
    object[k] = props[k];
  }
  return object;
}
function createMatrix(a, b, c, d, e, f) {
  var matrix = node.createSVGMatrix();
  switch (arguments.length) {
    case 0:
      return matrix;
    case 1:
      return extend$1(matrix, a);
    case 6:
      return extend$1(matrix, {
        a,
        b,
        c,
        d,
        e,
        f
      });
  }
}
function createTransform(matrix) {
  if (matrix) {
    return node.createSVGTransformFromMatrix(matrix);
  } else {
    return node.createSVGTransform();
  }
}
var TEXT_ENTITIES = /([&<>]{1})/g;
var ATTR_ENTITIES = /([\n\r"]{1})/g;
var ENTITY_REPLACEMENT = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "'"
};
function escape$1(str, pattern) {
  function replaceFn(match2, entity) {
    return ENTITY_REPLACEMENT[entity] || entity;
  }
  return str.replace(pattern, replaceFn);
}
function serialize(node2, output) {
  var i, len, attrMap, attrNode, childNodes;
  switch (node2.nodeType) {
    case 3:
      output.push(escape$1(node2.textContent, TEXT_ENTITIES));
      break;
    case 1:
      output.push("<", node2.tagName);
      if (node2.hasAttributes()) {
        attrMap = node2.attributes;
        for (i = 0, len = attrMap.length; i < len; ++i) {
          attrNode = attrMap.item(i);
          output.push(" ", attrNode.name, '="', escape$1(attrNode.value, ATTR_ENTITIES), '"');
        }
      }
      if (node2.hasChildNodes()) {
        output.push(">");
        childNodes = node2.childNodes;
        for (i = 0, len = childNodes.length; i < len; ++i) {
          serialize(childNodes.item(i), output);
        }
        output.push("</", node2.tagName, ">");
      } else {
        output.push("/>");
      }
      break;
    case 8:
      output.push("<!--", escape$1(node2.nodeValue, TEXT_ENTITIES), "-->");
      break;
    case 4:
      output.push("<![CDATA[", node2.nodeValue, "]]>");
      break;
    default:
      throw new Error("unable to handle node " + node2.nodeType);
  }
  return output;
}
function set$1(element, svg) {
  var parsed = parse$1(svg);
  clear$1(element);
  if (!svg) {
    return;
  }
  if (!isFragment(parsed)) {
    parsed = parsed.documentElement;
  }
  var nodes = slice$1(parsed.childNodes);
  for (var i = 0; i < nodes.length; i++) {
    appendTo(nodes[i], element);
  }
}
function get(element) {
  var child = element.firstChild, output = [];
  while (child) {
    serialize(child, output);
    child = child.nextSibling;
  }
  return output.join("");
}
function isFragment(node2) {
  return node2.nodeName === "#document-fragment";
}
function innerSVG(element, svg) {
  if (svg !== void 0) {
    try {
      set$1(element, svg);
    } catch (e) {
      throw new Error("error parsing SVG: " + e.message);
    }
    return element;
  } else {
    return get(element);
  }
}
function slice$1(arr) {
  return Array.prototype.slice.call(arr);
}
function wrapMatrix(transformList, transform2) {
  if (transform2 instanceof SVGMatrix) {
    return transformList.createSVGTransformFromMatrix(transform2);
  }
  return transform2;
}
function setTransforms(transformList, transforms) {
  var i, t;
  transformList.clear();
  for (i = 0; t = transforms[i]; i++) {
    transformList.appendItem(wrapMatrix(transformList, t));
  }
}
function transform$1(node2, transforms) {
  var transformList = node2.transform.baseVal;
  if (transforms) {
    if (!Array.isArray(transforms)) {
      transforms = [transforms];
    }
    setTransforms(transformList, transforms);
  }
  return transformList.consolidate();
}
function componentsToPath(elements) {
  return elements.join(",").replace(/,?([A-z]),?/g, "$1");
}
function toSVGPoints(points) {
  var result = "";
  for (var i = 0, p; p = points[i]; i++) {
    result += p.x + "," + p.y + " ";
  }
  return result;
}
function createLine(points, attrs) {
  var line = create$1("polyline");
  attr$1(line, { points: toSVGPoints(points) });
  if (attrs) {
    attr$1(line, attrs);
  }
  return line;
}
function updateLine(gfx, points) {
  attr$1(gfx, { points: toSVGPoints(points) });
  return gfx;
}
function isTypedEvent(event, eventDefinitionType, filter2) {
  function matches(definition, filter3) {
    return every(filter3, function(val, key) {
      return definition[key] == val;
    });
  }
  return some(event.eventDefinitions, function(definition) {
    return definition.$type === eventDefinitionType && matches(event, filter2);
  });
}
function isThrowEvent(event) {
  return event.$type === "bpmn:IntermediateThrowEvent" || event.$type === "bpmn:EndEvent";
}
function isCollection(element) {
  var dataObject = element.dataObjectRef;
  return element.isCollection || dataObject && dataObject.isCollection;
}
function getDi(element) {
  return element.businessObject.di;
}
function getSemantic(element) {
  return element.businessObject;
}
function getFillColor(element, defaultColor) {
  var di = getDi(element);
  return di.get("color:background-color") || di.get("bioc:fill") || defaultColor || "white";
}
function getStrokeColor(element, defaultColor) {
  var di = getDi(element);
  return di.get("color:border-color") || di.get("bioc:stroke") || defaultColor || "black";
}
function getLabelColor(element, defaultColor, defaultStrokeColor) {
  var di = getDi(element), label = di.get("label");
  return label && label.get("color:color") || defaultColor || getStrokeColor(element, defaultStrokeColor);
}
function getCirclePath(shape) {
  var cx = shape.x + shape.width / 2, cy = shape.y + shape.height / 2, radius = shape.width / 2;
  var circlePath = [
    ["M", cx, cy],
    ["m", 0, -radius],
    ["a", radius, radius, 0, 1, 1, 0, 2 * radius],
    ["a", radius, radius, 0, 1, 1, 0, -2 * radius],
    ["z"]
  ];
  return componentsToPath(circlePath);
}
function getRoundRectPath(shape, borderRadius) {
  var x = shape.x, y = shape.y, width = shape.width, height = shape.height;
  var roundRectPath = [
    ["M", x + borderRadius, y],
    ["l", width - borderRadius * 2, 0],
    ["a", borderRadius, borderRadius, 0, 0, 1, borderRadius, borderRadius],
    ["l", 0, height - borderRadius * 2],
    ["a", borderRadius, borderRadius, 0, 0, 1, -borderRadius, borderRadius],
    ["l", borderRadius * 2 - width, 0],
    ["a", borderRadius, borderRadius, 0, 0, 1, -borderRadius, -borderRadius],
    ["l", 0, borderRadius * 2 - height],
    ["a", borderRadius, borderRadius, 0, 0, 1, borderRadius, -borderRadius],
    ["z"]
  ];
  return componentsToPath(roundRectPath);
}
function getDiamondPath(shape) {
  var width = shape.width, height = shape.height, x = shape.x, y = shape.y, halfWidth = width / 2, halfHeight = height / 2;
  var diamondPath = [
    ["M", x + halfWidth, y],
    ["l", halfWidth, halfHeight],
    ["l", -halfWidth, halfHeight],
    ["l", -halfWidth, -halfHeight],
    ["z"]
  ];
  return componentsToPath(diamondPath);
}
function getRectPath(shape) {
  var x = shape.x, y = shape.y, width = shape.width, height = shape.height;
  var rectPath = [
    ["M", x, y],
    ["l", width, 0],
    ["l", 0, height],
    ["l", -width, 0],
    ["z"]
  ];
  return componentsToPath(rectPath);
}
function attr(el, name2, val) {
  if (arguments.length == 2) {
    return el.getAttribute(name2);
  }
  if (val === null) {
    return el.removeAttribute(name2);
  }
  el.setAttribute(name2, val);
  return el;
}
var indexOf = [].indexOf;
var indexof = function(arr, obj) {
  if (indexOf)
    return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj)
      return i;
  }
  return -1;
};
var re = /\s+/;
var toString = Object.prototype.toString;
function classes(el) {
  return new ClassList(el);
}
function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error("A DOM element reference is required");
  }
  this.el = el;
  this.list = el.classList;
}
ClassList.prototype.add = function(name2) {
  if (this.list) {
    this.list.add(name2);
    return this;
  }
  var arr = this.array();
  var i = indexof(arr, name2);
  if (!~i)
    arr.push(name2);
  this.el.className = arr.join(" ");
  return this;
};
ClassList.prototype.remove = function(name2) {
  if (toString.call(name2) == "[object RegExp]") {
    return this.removeMatching(name2);
  }
  if (this.list) {
    this.list.remove(name2);
    return this;
  }
  var arr = this.array();
  var i = indexof(arr, name2);
  if (~i)
    arr.splice(i, 1);
  this.el.className = arr.join(" ");
  return this;
};
ClassList.prototype.removeMatching = function(re2) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re2.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};
ClassList.prototype.toggle = function(name2, force) {
  if (this.list) {
    if (typeof force !== "undefined") {
      if (force !== this.list.toggle(name2, force)) {
        this.list.toggle(name2);
      }
    } else {
      this.list.toggle(name2);
    }
    return this;
  }
  if (typeof force !== "undefined") {
    if (!force) {
      this.remove(name2);
    } else {
      this.add(name2);
    }
  } else {
    if (this.has(name2)) {
      this.remove(name2);
    } else {
      this.add(name2);
    }
  }
  return this;
};
ClassList.prototype.array = function() {
  var className = this.el.getAttribute("class") || "";
  var str = className.replace(/^\s+|\s+$/g, "");
  var arr = str.split(re);
  if (arr[0] === "")
    arr.shift();
  return arr;
};
ClassList.prototype.has = ClassList.prototype.contains = function(name2) {
  return this.list ? this.list.contains(name2) : !!~indexof(this.array(), name2);
};
function clear(el) {
  var c;
  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }
  return el;
}
var proto = typeof Element !== "undefined" ? Element.prototype : {};
var vendor = proto.matches || proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;
var matchesSelector = match;
function match(el, selector) {
  if (!el || el.nodeType !== 1)
    return false;
  if (vendor)
    return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el)
      return true;
  }
  return false;
}
function closest(element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;
  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE && currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {
    if (matchesSelector(currentElem, selector)) {
      return currentElem;
    }
    currentElem = currentElem.parentNode;
  }
  return matchesSelector(currentElem, selector) ? currentElem : null;
}
var bind = window.addEventListener ? "addEventListener" : "attachEvent", unbind = window.removeEventListener ? "removeEventListener" : "detachEvent", prefix$6 = bind !== "addEventListener" ? "on" : "";
var bind_1 = function(el, type, fn, capture) {
  el[bind](prefix$6 + type, fn, capture || false);
  return fn;
};
var unbind_1 = function(el, type, fn, capture) {
  el[unbind](prefix$6 + type, fn, capture || false);
  return fn;
};
var componentEvent = {
  bind: bind_1,
  unbind: unbind_1
};
var forceCaptureEvents = ["focus", "blur"];
function bind$1(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }
  return componentEvent.bind(el, type, function(e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}
function unbind$1(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }
  return componentEvent.unbind(el, type, fn, capture);
}
var delegate = {
  bind: bind$1,
  unbind: unbind$1
};
var domify = parse;
var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== "undefined") {
  bugTestDiv = document.createElement("div");
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  innerHTMLBug = !bugTestDiv.getElementsByTagName("link").length;
  bugTestDiv = void 0;
}
var map = {
  legend: [1, "<fieldset>", "</fieldset>"],
  tr: [2, "<table><tbody>", "</tbody></table>"],
  col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
  _default: innerHTMLBug ? [1, "X<div>", "</div>"] : [0, "", ""]
};
map.td = map.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
map.option = map.optgroup = [1, '<select multiple="multiple">', "</select>"];
map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, "<table>", "</table>"];
map.polyline = map.ellipse = map.polygon = map.circle = map.text = map.line = map.path = map.rect = map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', "</svg>"];
function parse(html, doc) {
  if (typeof html != "string")
    throw new TypeError("String expected");
  if (!doc)
    doc = document;
  var m = /<([\w:]+)/.exec(html);
  if (!m)
    return doc.createTextNode(html);
  html = html.replace(/^\s+|\s+$/g, "");
  var tag = m[1];
  if (tag == "body") {
    var el = doc.createElement("html");
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix2 = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement("div");
  el.innerHTML = prefix2 + html + suffix;
  while (depth--)
    el = el.lastChild;
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }
  return fragment;
}
function query(selector, el) {
  el = el || document;
  return el.querySelector(selector);
}
function all(selector, el) {
  el = el || document;
  return el.querySelectorAll(selector);
}
function remove$1(el) {
  el.parentNode && el.parentNode.removeChild(el);
}
function transform(gfx, x, y, angle, amount) {
  var translate2 = createTransform();
  translate2.setTranslate(x, y);
  var rotate2 = createTransform();
  rotate2.setRotate(angle || 0, 0, 0);
  var scale = createTransform();
  scale.setScale(amount || 1, amount || 1);
  transform$1(gfx, [translate2, rotate2, scale]);
}
function translate$1(gfx, x, y) {
  var translate2 = createTransform();
  translate2.setTranslate(x, y);
  transform$1(gfx, translate2);
}
function rotate(gfx, angle) {
  var rotate2 = createTransform();
  rotate2.setRotate(angle, 0, 0);
  transform$1(gfx, rotate2);
}
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var hat_1 = createCommonjsModule(function(module) {
  var hat = module.exports = function(bits, base2) {
    if (!base2)
      base2 = 16;
    if (bits === void 0)
      bits = 128;
    if (bits <= 0)
      return "0";
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base2);
    for (var i = 2; digits === Infinity; i *= 2) {
      digits = Math.log(Math.pow(2, bits / i)) / Math.log(base2) * i;
    }
    var rem = digits - Math.floor(digits);
    var res = "";
    for (var i = 0; i < Math.floor(digits); i++) {
      var x = Math.floor(Math.random() * base2).toString(base2);
      res = x + res;
    }
    if (rem) {
      var b = Math.pow(base2, rem);
      var x = Math.floor(Math.random() * b).toString(base2);
      res = x + res;
    }
    var parsed = parseInt(res, base2);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
      return hat(bits, base2);
    } else
      return res;
  };
  hat.rack = function(bits, base2, expandBy) {
    var fn = function(data) {
      var iters = 0;
      do {
        if (iters++ > 10) {
          if (expandBy)
            bits += expandBy;
          else
            throw new Error("too many ID collisions, use more bits");
        }
        var id2 = hat(bits, base2);
      } while (Object.hasOwnProperty.call(hats, id2));
      hats[id2] = data;
      return id2;
    };
    var hats = fn.hats = {};
    fn.get = function(id2) {
      return fn.hats[id2];
    };
    fn.set = function(id2, value) {
      fn.hats[id2] = value;
      return fn;
    };
    fn.bits = bits || 128;
    fn.base = base2 || 16;
    return fn;
  };
});
function Ids(seed) {
  if (!(this instanceof Ids)) {
    return new Ids(seed);
  }
  seed = seed || [128, 36, 1];
  this._seed = seed.length ? hat_1.rack(seed[0], seed[1], seed[2]) : seed;
}
Ids.prototype.next = function(element) {
  return this._seed(element || true);
};
Ids.prototype.nextPrefixed = function(prefix2, element) {
  var id2;
  do {
    id2 = prefix2 + this.next(true);
  } while (this.assigned(id2));
  this.claim(id2, element);
  return id2;
};
Ids.prototype.claim = function(id2, element) {
  this._seed.set(id2, element || true);
};
Ids.prototype.assigned = function(id2) {
  return this._seed.get(id2) || false;
};
Ids.prototype.unclaim = function(id2) {
  delete this._seed.hats[id2];
};
Ids.prototype.clear = function() {
  var hats = this._seed.hats, id2;
  for (id2 in hats) {
    this.unclaim(id2);
  }
};
var RENDERER_IDS = new Ids();
var TASK_BORDER_RADIUS = 10;
var INNER_OUTER_DIST = 3;
var DEFAULT_FILL_OPACITY = 0.95, HIGH_FILL_OPACITY = 0.35;
var ELEMENT_LABEL_DISTANCE = 10;
function BpmnRenderer(config, eventBus, styles, pathMap, canvas, textRenderer, priority) {
  BaseRenderer.call(this, eventBus, priority);
  var defaultFillColor = config && config.defaultFillColor, defaultStrokeColor = config && config.defaultStrokeColor, defaultLabelColor = config && config.defaultLabelColor;
  var rendererId = RENDERER_IDS.next();
  var markers = {};
  var computeStyle2 = styles.computeStyle;
  function addMarker(id2, options) {
    var attrs = assign({
      fill: "black",
      strokeWidth: 1,
      strokeLinecap: "round",
      strokeDasharray: "none"
    }, options.attrs);
    var ref = options.ref || { x: 0, y: 0 };
    var scale = options.scale || 1;
    if (attrs.strokeDasharray === "none") {
      attrs.strokeDasharray = [1e4, 1];
    }
    var marker2 = create$1("marker");
    attr$1(options.element, attrs);
    append(marker2, options.element);
    attr$1(marker2, {
      id: id2,
      viewBox: "0 0 20 20",
      refX: ref.x,
      refY: ref.y,
      markerWidth: 20 * scale,
      markerHeight: 20 * scale,
      orient: "auto"
    });
    var defs = query("defs", canvas._svg);
    if (!defs) {
      defs = create$1("defs");
      append(canvas._svg, defs);
    }
    append(defs, marker2);
    markers[id2] = marker2;
  }
  function colorEscape(str) {
    return str.replace(/[^0-9a-zA-z]+/g, "_");
  }
  function marker(type, fill, stroke) {
    var id2 = type + "-" + colorEscape(fill) + "-" + colorEscape(stroke) + "-" + rendererId;
    if (!markers[id2]) {
      createMarker(id2, type, fill, stroke);
    }
    return "url(#" + id2 + ")";
  }
  function createMarker(id2, type, fill, stroke) {
    if (type === "sequenceflow-end") {
      var sequenceflowEnd = create$1("path");
      attr$1(sequenceflowEnd, { d: "M 1 5 L 11 10 L 1 15 Z" });
      addMarker(id2, {
        element: sequenceflowEnd,
        ref: { x: 11, y: 10 },
        scale: 0.5,
        attrs: {
          fill: stroke,
          stroke
        }
      });
    }
    if (type === "messageflow-start") {
      var messageflowStart = create$1("circle");
      attr$1(messageflowStart, { cx: 6, cy: 6, r: 3.5 });
      addMarker(id2, {
        element: messageflowStart,
        attrs: {
          fill,
          stroke
        },
        ref: { x: 6, y: 6 }
      });
    }
    if (type === "messageflow-end") {
      var messageflowEnd = create$1("path");
      attr$1(messageflowEnd, { d: "m 1 5 l 0 -3 l 7 3 l -7 3 z" });
      addMarker(id2, {
        element: messageflowEnd,
        attrs: {
          fill,
          stroke,
          strokeLinecap: "butt"
        },
        ref: { x: 8.5, y: 5 }
      });
    }
    if (type === "association-start") {
      var associationStart = create$1("path");
      attr$1(associationStart, { d: "M 11 5 L 1 10 L 11 15" });
      addMarker(id2, {
        element: associationStart,
        attrs: {
          fill: "none",
          stroke,
          strokeWidth: 1.5
        },
        ref: { x: 1, y: 10 },
        scale: 0.5
      });
    }
    if (type === "association-end") {
      var associationEnd = create$1("path");
      attr$1(associationEnd, { d: "M 1 5 L 11 10 L 1 15" });
      addMarker(id2, {
        element: associationEnd,
        attrs: {
          fill: "none",
          stroke,
          strokeWidth: 1.5
        },
        ref: { x: 12, y: 10 },
        scale: 0.5
      });
    }
    if (type === "conditional-flow-marker") {
      var conditionalflowMarker = create$1("path");
      attr$1(conditionalflowMarker, { d: "M 0 10 L 8 6 L 16 10 L 8 14 Z" });
      addMarker(id2, {
        element: conditionalflowMarker,
        attrs: {
          fill,
          stroke
        },
        ref: { x: -1, y: 10 },
        scale: 0.5
      });
    }
    if (type === "conditional-default-flow-marker") {
      var conditionaldefaultflowMarker = create$1("path");
      attr$1(conditionaldefaultflowMarker, { d: "M 6 4 L 10 16" });
      addMarker(id2, {
        element: conditionaldefaultflowMarker,
        attrs: {
          stroke
        },
        ref: { x: 0, y: 10 },
        scale: 0.5
      });
    }
  }
  function drawCircle(parentGfx, width, height, offset2, attrs) {
    if (isObject(offset2)) {
      attrs = offset2;
      offset2 = 0;
    }
    offset2 = offset2 || 0;
    attrs = computeStyle2(attrs, {
      stroke: "black",
      strokeWidth: 2,
      fill: "white"
    });
    if (attrs.fill === "none") {
      delete attrs.fillOpacity;
    }
    var cx = width / 2, cy = height / 2;
    var circle = create$1("circle");
    attr$1(circle, {
      cx,
      cy,
      r: Math.round((width + height) / 4 - offset2)
    });
    attr$1(circle, attrs);
    append(parentGfx, circle);
    return circle;
  }
  function drawRect(parentGfx, width, height, r, offset2, attrs) {
    if (isObject(offset2)) {
      attrs = offset2;
      offset2 = 0;
    }
    offset2 = offset2 || 0;
    attrs = computeStyle2(attrs, {
      stroke: "black",
      strokeWidth: 2,
      fill: "white"
    });
    var rect = create$1("rect");
    attr$1(rect, {
      x: offset2,
      y: offset2,
      width: width - offset2 * 2,
      height: height - offset2 * 2,
      rx: r,
      ry: r
    });
    attr$1(rect, attrs);
    append(parentGfx, rect);
    return rect;
  }
  function drawDiamond(parentGfx, width, height, attrs) {
    var x_2 = width / 2;
    var y_2 = height / 2;
    var points = [{ x: x_2, y: 0 }, { x: width, y: y_2 }, { x: x_2, y: height }, { x: 0, y: y_2 }];
    var pointsString = points.map(function(point) {
      return point.x + "," + point.y;
    }).join(" ");
    attrs = computeStyle2(attrs, {
      stroke: "black",
      strokeWidth: 2,
      fill: "white"
    });
    var polygon = create$1("polygon");
    attr$1(polygon, {
      points: pointsString
    });
    attr$1(polygon, attrs);
    append(parentGfx, polygon);
    return polygon;
  }
  function drawLine(parentGfx, waypoints, attrs) {
    attrs = computeStyle2(attrs, ["no-fill"], {
      stroke: "black",
      strokeWidth: 2,
      fill: "none"
    });
    var line = createLine(waypoints, attrs);
    append(parentGfx, line);
    return line;
  }
  function drawPath(parentGfx, d, attrs) {
    attrs = computeStyle2(attrs, ["no-fill"], {
      strokeWidth: 2,
      stroke: "black"
    });
    var path = create$1("path");
    attr$1(path, { d });
    attr$1(path, attrs);
    append(parentGfx, path);
    return path;
  }
  function drawMarker(type, parentGfx, path, attrs) {
    return drawPath(parentGfx, path, assign({ "data-marker": type }, attrs));
  }
  function as(type) {
    return function(parentGfx, element) {
      return handlers[type](parentGfx, element);
    };
  }
  function renderer(type) {
    return handlers[type];
  }
  function renderEventContent(element, parentGfx) {
    var event = getSemantic(element);
    var isThrowing = isThrowEvent(event);
    if (event.eventDefinitions && event.eventDefinitions.length > 1) {
      if (event.parallelMultiple) {
        return renderer("bpmn:ParallelMultipleEventDefinition")(parentGfx, element, isThrowing);
      } else {
        return renderer("bpmn:MultipleEventDefinition")(parentGfx, element, isThrowing);
      }
    }
    if (isTypedEvent(event, "bpmn:MessageEventDefinition")) {
      return renderer("bpmn:MessageEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:TimerEventDefinition")) {
      return renderer("bpmn:TimerEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:ConditionalEventDefinition")) {
      return renderer("bpmn:ConditionalEventDefinition")(parentGfx, element);
    }
    if (isTypedEvent(event, "bpmn:SignalEventDefinition")) {
      return renderer("bpmn:SignalEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:EscalationEventDefinition")) {
      return renderer("bpmn:EscalationEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:LinkEventDefinition")) {
      return renderer("bpmn:LinkEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:ErrorEventDefinition")) {
      return renderer("bpmn:ErrorEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:CancelEventDefinition")) {
      return renderer("bpmn:CancelEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:CompensateEventDefinition")) {
      return renderer("bpmn:CompensateEventDefinition")(parentGfx, element, isThrowing);
    }
    if (isTypedEvent(event, "bpmn:TerminateEventDefinition")) {
      return renderer("bpmn:TerminateEventDefinition")(parentGfx, element, isThrowing);
    }
    return null;
  }
  function renderLabel(parentGfx, label, options) {
    options = assign({
      size: {
        width: 100
      }
    }, options);
    var text = textRenderer.createText(label || "", options);
    classes$1(text).add("djs-label");
    append(parentGfx, text);
    return text;
  }
  function renderEmbeddedLabel(parentGfx, element, align) {
    var semantic = getSemantic(element);
    return renderLabel(parentGfx, semantic.name, {
      box: element,
      align,
      padding: 5,
      style: {
        fill: getLabelColor(element, defaultLabelColor, defaultStrokeColor)
      }
    });
  }
  function renderExternalLabel(parentGfx, element) {
    var box = {
      width: 90,
      height: 30,
      x: element.width / 2 + element.x,
      y: element.height / 2 + element.y
    };
    return renderLabel(parentGfx, getLabel(element), {
      box,
      fitBox: true,
      style: assign({}, textRenderer.getExternalStyle(), {
        fill: getLabelColor(element, defaultLabelColor, defaultStrokeColor)
      })
    });
  }
  function renderLaneLabel(parentGfx, text, element) {
    var textBox = renderLabel(parentGfx, text, {
      box: {
        height: 30,
        width: element.height
      },
      align: "center-middle",
      style: {
        fill: getLabelColor(element, defaultLabelColor, defaultStrokeColor)
      }
    });
    var top = -1 * element.height;
    transform(textBox, 0, -top, 270);
  }
  function createPathFromConnection(connection) {
    var waypoints = connection.waypoints;
    var pathData = "m  " + waypoints[0].x + "," + waypoints[0].y;
    for (var i = 1; i < waypoints.length; i++) {
      pathData += "L" + waypoints[i].x + "," + waypoints[i].y + " ";
    }
    return pathData;
  }
  var handlers = this.handlers = {
    "bpmn:Event": function(parentGfx, element, attrs) {
      if (!("fillOpacity" in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }
      return drawCircle(parentGfx, element.width, element.height, attrs);
    },
    "bpmn:StartEvent": function(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      var semantic = getSemantic(element);
      if (!semantic.isInterrupting) {
        attrs = {
          strokeDasharray: "6",
          strokeLinecap: "round",
          fill: getFillColor(element, defaultFillColor),
          stroke: getStrokeColor(element, defaultStrokeColor)
        };
      }
      var circle = renderer("bpmn:Event")(parentGfx, element, attrs);
      renderEventContent(element, parentGfx);
      return circle;
    },
    "bpmn:MessageEventDefinition": function(parentGfx, element, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_MESSAGE", {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.235,
          my: 0.315
        }
      });
      var fill = isThrowing ? getStrokeColor(element, defaultStrokeColor) : getFillColor(element, defaultFillColor);
      var stroke = isThrowing ? getFillColor(element, defaultFillColor) : getStrokeColor(element, defaultStrokeColor);
      var messagePath = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill,
        stroke
      });
      return messagePath;
    },
    "bpmn:TimerEventDefinition": function(parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 0.2 * element.height, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var pathData = pathMap.getScaledPath("EVENT_TIMER_WH", {
        xScaleFactor: 0.75,
        yScaleFactor: 0.75,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.5,
          my: 0.5
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 2,
        strokeLinecap: "square",
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      for (var i = 0; i < 12; i++) {
        var linePathData = pathMap.getScaledPath("EVENT_TIMER_LINE", {
          xScaleFactor: 0.75,
          yScaleFactor: 0.75,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.5,
            my: 0.5
          }
        });
        var width = element.width / 2;
        var height = element.height / 2;
        drawPath(parentGfx, linePathData, {
          strokeWidth: 1,
          strokeLinecap: "square",
          transform: "rotate(" + i * 30 + "," + height + "," + width + ")",
          stroke: getStrokeColor(element, defaultStrokeColor)
        });
      }
      return circle;
    },
    "bpmn:EscalationEventDefinition": function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_ESCALATION", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });
      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : "none";
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    "bpmn:ConditionalEventDefinition": function(parentGfx, event) {
      var pathData = pathMap.getScaledPath("EVENT_CONDITIONAL", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.222
        }
      });
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    "bpmn:LinkEventDefinition": function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_LINK", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.57,
          my: 0.263
        }
      });
      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : "none";
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    "bpmn:ErrorEventDefinition": function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_ERROR", {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.2,
          my: 0.722
        }
      });
      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : "none";
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    "bpmn:CancelEventDefinition": function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_CANCEL_45", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.638,
          my: -0.055
        }
      });
      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : "none";
      var path = drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
      rotate(path, 45);
      return path;
    },
    "bpmn:CompensateEventDefinition": function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_COMPENSATION", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.22,
          my: 0.5
        }
      });
      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : "none";
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    "bpmn:SignalEventDefinition": function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_SIGNAL", {
        xScaleFactor: 0.9,
        yScaleFactor: 0.9,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.5,
          my: 0.2
        }
      });
      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : "none";
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill,
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    "bpmn:MultipleEventDefinition": function(parentGfx, event, isThrowing) {
      var pathData = pathMap.getScaledPath("EVENT_MULTIPLE", {
        xScaleFactor: 1.1,
        yScaleFactor: 1.1,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.222,
          my: 0.36
        }
      });
      var fill = isThrowing ? getStrokeColor(event, defaultStrokeColor) : "none";
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill
      });
    },
    "bpmn:ParallelMultipleEventDefinition": function(parentGfx, event) {
      var pathData = pathMap.getScaledPath("EVENT_PARALLEL_MULTIPLE", {
        xScaleFactor: 1.2,
        yScaleFactor: 1.2,
        containerWidth: event.width,
        containerHeight: event.height,
        position: {
          mx: 0.458,
          my: 0.194
        }
      });
      return drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(event, defaultStrokeColor),
        stroke: getStrokeColor(event, defaultStrokeColor)
      });
    },
    "bpmn:EndEvent": function(parentGfx, element) {
      var circle = renderer("bpmn:Event")(parentGfx, element, {
        strokeWidth: 4,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      renderEventContent(element, parentGfx);
      return circle;
    },
    "bpmn:TerminateEventDefinition": function(parentGfx, element) {
      var circle = drawCircle(parentGfx, element.width, element.height, 8, {
        strokeWidth: 4,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return circle;
    },
    "bpmn:IntermediateEvent": function(parentGfx, element) {
      var outer = renderer("bpmn:Event")(parentGfx, element, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, {
        strokeWidth: 1,
        fill: getFillColor(element, "none"),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      renderEventContent(element, parentGfx);
      return outer;
    },
    "bpmn:IntermediateCatchEvent": as("bpmn:IntermediateEvent"),
    "bpmn:IntermediateThrowEvent": as("bpmn:IntermediateEvent"),
    "bpmn:Activity": function(parentGfx, element, attrs) {
      attrs = attrs || {};
      if (!("fillOpacity" in attrs)) {
        attrs.fillOpacity = DEFAULT_FILL_OPACITY;
      }
      return drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, attrs);
    },
    "bpmn:Task": function(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      var rect = renderer("bpmn:Activity")(parentGfx, element, attrs);
      renderEmbeddedLabel(parentGfx, element, "center-middle");
      attachTaskMarkers(parentGfx, element);
      return rect;
    },
    "bpmn:ServiceTask": function(parentGfx, element) {
      var task = renderer("bpmn:Task")(parentGfx, element);
      var pathDataBG = pathMap.getScaledPath("TASK_TYPE_SERVICE", {
        abspos: {
          x: 12,
          y: 18
        }
      });
      drawPath(parentGfx, pathDataBG, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var fillPathData = pathMap.getScaledPath("TASK_TYPE_SERVICE_FILL", {
        abspos: {
          x: 17.2,
          y: 18
        }
      });
      drawPath(parentGfx, fillPathData, {
        strokeWidth: 0,
        fill: getFillColor(element, defaultFillColor)
      });
      var pathData = pathMap.getScaledPath("TASK_TYPE_SERVICE", {
        abspos: {
          x: 17,
          y: 22
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    "bpmn:UserTask": function(parentGfx, element) {
      var task = renderer("bpmn:Task")(parentGfx, element);
      var x = 15;
      var y = 12;
      var pathData = pathMap.getScaledPath("TASK_TYPE_USER_1", {
        abspos: {
          x,
          y
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 0.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var pathData2 = pathMap.getScaledPath("TASK_TYPE_USER_2", {
        abspos: {
          x,
          y
        }
      });
      drawPath(parentGfx, pathData2, {
        strokeWidth: 0.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var pathData3 = pathMap.getScaledPath("TASK_TYPE_USER_3", {
        abspos: {
          x,
          y
        }
      });
      drawPath(parentGfx, pathData3, {
        strokeWidth: 0.5,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    "bpmn:ManualTask": function(parentGfx, element) {
      var task = renderer("bpmn:Task")(parentGfx, element);
      var pathData = pathMap.getScaledPath("TASK_TYPE_MANUAL", {
        abspos: {
          x: 17,
          y: 15
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 0.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    "bpmn:SendTask": function(parentGfx, element) {
      var task = renderer("bpmn:Task")(parentGfx, element);
      var pathData = pathMap.getScaledPath("TASK_TYPE_SEND", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: 21,
        containerHeight: 14,
        position: {
          mx: 0.285,
          my: 0.357
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getFillColor(element, defaultFillColor)
      });
      return task;
    },
    "bpmn:ReceiveTask": function(parentGfx, element) {
      var semantic = getSemantic(element);
      var task = renderer("bpmn:Task")(parentGfx, element);
      var pathData;
      if (semantic.instantiate) {
        drawCircle(parentGfx, 28, 28, 20 * 0.22, { strokeWidth: 1 });
        pathData = pathMap.getScaledPath("TASK_TYPE_INSTANTIATING_SEND", {
          abspos: {
            x: 7.77,
            y: 9.52
          }
        });
      } else {
        pathData = pathMap.getScaledPath("TASK_TYPE_SEND", {
          xScaleFactor: 0.9,
          yScaleFactor: 0.9,
          containerWidth: 21,
          containerHeight: 14,
          position: {
            mx: 0.3,
            my: 0.4
          }
        });
      }
      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    "bpmn:ScriptTask": function(parentGfx, element) {
      var task = renderer("bpmn:Task")(parentGfx, element);
      var pathData = pathMap.getScaledPath("TASK_TYPE_SCRIPT", {
        abspos: {
          x: 15,
          y: 20
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    "bpmn:BusinessRuleTask": function(parentGfx, element) {
      var task = renderer("bpmn:Task")(parentGfx, element);
      var headerPathData = pathMap.getScaledPath("TASK_TYPE_BUSINESS_RULE_HEADER", {
        abspos: {
          x: 8,
          y: 8
        }
      });
      var businessHeaderPath = drawPath(parentGfx, headerPathData);
      attr$1(businessHeaderPath, {
        strokeWidth: 1,
        fill: getFillColor(element, "#aaaaaa"),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var headerData = pathMap.getScaledPath("TASK_TYPE_BUSINESS_RULE_MAIN", {
        abspos: {
          x: 8,
          y: 8
        }
      });
      var businessPath = drawPath(parentGfx, headerData);
      attr$1(businessPath, {
        strokeWidth: 1,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return task;
    },
    "bpmn:SubProcess": function(parentGfx, element, attrs) {
      attrs = assign({
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      }, attrs);
      var rect = renderer("bpmn:Activity")(parentGfx, element, attrs);
      var expanded = isExpanded(element);
      if (isEventSubProcess(element)) {
        attr$1(rect, {
          strokeDasharray: "1,2"
        });
      }
      renderEmbeddedLabel(parentGfx, element, expanded ? "center-top" : "center-middle");
      if (expanded) {
        attachTaskMarkers(parentGfx, element);
      } else {
        attachTaskMarkers(parentGfx, element, ["SubProcessMarker"]);
      }
      return rect;
    },
    "bpmn:AdHocSubProcess": function(parentGfx, element) {
      return renderer("bpmn:SubProcess")(parentGfx, element);
    },
    "bpmn:Transaction": function(parentGfx, element) {
      var outer = renderer("bpmn:SubProcess")(parentGfx, element);
      var innerAttrs = styles.style(["no-fill", "no-events"], {
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS - 2, INNER_OUTER_DIST, innerAttrs);
      return outer;
    },
    "bpmn:CallActivity": function(parentGfx, element) {
      return renderer("bpmn:SubProcess")(parentGfx, element, {
        strokeWidth: 5
      });
    },
    "bpmn:Participant": function(parentGfx, element) {
      var attrs = {
        fillOpacity: DEFAULT_FILL_OPACITY,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      var lane = renderer("bpmn:Lane")(parentGfx, element, attrs);
      var expandedPool = isExpanded(element);
      if (expandedPool) {
        drawLine(parentGfx, [
          { x: 30, y: 0 },
          { x: 30, y: element.height }
        ], {
          stroke: getStrokeColor(element, defaultStrokeColor)
        });
        var text = getSemantic(element).name;
        renderLaneLabel(parentGfx, text, element);
      } else {
        var text2 = getSemantic(element).name;
        renderLabel(parentGfx, text2, {
          box: element,
          align: "center-middle",
          style: {
            fill: getLabelColor(element, defaultLabelColor, defaultStrokeColor)
          }
        });
      }
      var participantMultiplicity = !!getSemantic(element).participantMultiplicity;
      if (participantMultiplicity) {
        renderer("ParticipantMultiplicityMarker")(parentGfx, element);
      }
      return lane;
    },
    "bpmn:Lane": function(parentGfx, element, attrs) {
      var rect = drawRect(parentGfx, element.width, element.height, 0, assign({
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: HIGH_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      }, attrs));
      var semantic = getSemantic(element);
      if (semantic.$type === "bpmn:Lane") {
        var text = semantic.name;
        renderLaneLabel(parentGfx, text, element);
      }
      return rect;
    },
    "bpmn:InclusiveGateway": function(parentGfx, element) {
      var diamond = renderer("bpmn:Gateway")(parentGfx, element);
      drawCircle(parentGfx, element.width, element.height, element.height * 0.24, {
        strokeWidth: 2.5,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return diamond;
    },
    "bpmn:ExclusiveGateway": function(parentGfx, element) {
      var diamond = renderer("bpmn:Gateway")(parentGfx, element);
      var pathData = pathMap.getScaledPath("GATEWAY_EXCLUSIVE", {
        xScaleFactor: 0.4,
        yScaleFactor: 0.4,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.32,
          my: 0.3
        }
      });
      if (getDi(element).isMarkerVisible) {
        drawPath(parentGfx, pathData, {
          strokeWidth: 1,
          fill: getStrokeColor(element, defaultStrokeColor),
          stroke: getStrokeColor(element, defaultStrokeColor)
        });
      }
      return diamond;
    },
    "bpmn:ComplexGateway": function(parentGfx, element) {
      var diamond = renderer("bpmn:Gateway")(parentGfx, element);
      var pathData = pathMap.getScaledPath("GATEWAY_COMPLEX", {
        xScaleFactor: 0.5,
        yScaleFactor: 0.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.26
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return diamond;
    },
    "bpmn:ParallelGateway": function(parentGfx, element) {
      var diamond = renderer("bpmn:Gateway")(parentGfx, element);
      var pathData = pathMap.getScaledPath("GATEWAY_PARALLEL", {
        xScaleFactor: 0.6,
        yScaleFactor: 0.6,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.46,
          my: 0.2
        }
      });
      drawPath(parentGfx, pathData, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return diamond;
    },
    "bpmn:EventBasedGateway": function(parentGfx, element) {
      var semantic = getSemantic(element);
      var diamond = renderer("bpmn:Gateway")(parentGfx, element);
      drawCircle(parentGfx, element.width, element.height, element.height * 0.2, {
        strokeWidth: 1,
        fill: "none",
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var type = semantic.eventGatewayType;
      var instantiate = !!semantic.instantiate;
      function drawEvent() {
        var pathData2 = pathMap.getScaledPath("GATEWAY_EVENT_BASED", {
          xScaleFactor: 0.18,
          yScaleFactor: 0.18,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.36,
            my: 0.44
          }
        });
        var attrs = {
          strokeWidth: 2,
          fill: getFillColor(element, "none"),
          stroke: getStrokeColor(element, defaultStrokeColor)
        };
        drawPath(parentGfx, pathData2, attrs);
      }
      if (type === "Parallel") {
        var pathData = pathMap.getScaledPath("GATEWAY_PARALLEL", {
          xScaleFactor: 0.4,
          yScaleFactor: 0.4,
          containerWidth: element.width,
          containerHeight: element.height,
          position: {
            mx: 0.474,
            my: 0.296
          }
        });
        var parallelPath = drawPath(parentGfx, pathData);
        attr$1(parallelPath, {
          strokeWidth: 1,
          fill: "none"
        });
      } else if (type === "Exclusive") {
        if (!instantiate) {
          var innerCircle = drawCircle(parentGfx, element.width, element.height, element.height * 0.26);
          attr$1(innerCircle, {
            strokeWidth: 1,
            fill: "none",
            stroke: getStrokeColor(element, defaultStrokeColor)
          });
        }
        drawEvent();
      }
      return diamond;
    },
    "bpmn:Gateway": function(parentGfx, element) {
      var attrs = {
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      return drawDiamond(parentGfx, element.width, element.height, attrs);
    },
    "bpmn:SequenceFlow": function(parentGfx, element) {
      var pathData = createPathFromConnection(element);
      var fill = getFillColor(element, defaultFillColor), stroke = getStrokeColor(element, defaultStrokeColor);
      var attrs = {
        strokeLinejoin: "round",
        markerEnd: marker("sequenceflow-end", fill, stroke),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      var path = drawPath(parentGfx, pathData, attrs);
      var sequenceFlow = getSemantic(element);
      var source;
      if (element.source) {
        source = element.source.businessObject;
        if (sequenceFlow.conditionExpression && source.$instanceOf("bpmn:Activity")) {
          attr$1(path, {
            markerStart: marker("conditional-flow-marker", fill, stroke)
          });
        }
        if (source.default && (source.$instanceOf("bpmn:Gateway") || source.$instanceOf("bpmn:Activity")) && source.default === sequenceFlow) {
          attr$1(path, {
            markerStart: marker("conditional-default-flow-marker", fill, stroke)
          });
        }
      }
      return path;
    },
    "bpmn:Association": function(parentGfx, element, attrs) {
      var semantic = getSemantic(element);
      var fill = getFillColor(element, defaultFillColor), stroke = getStrokeColor(element, defaultStrokeColor);
      attrs = assign({
        strokeDasharray: "0.5, 5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: getStrokeColor(element, defaultStrokeColor)
      }, attrs || {});
      if (semantic.associationDirection === "One" || semantic.associationDirection === "Both") {
        attrs.markerEnd = marker("association-end", fill, stroke);
      }
      if (semantic.associationDirection === "Both") {
        attrs.markerStart = marker("association-start", fill, stroke);
      }
      return drawLine(parentGfx, element.waypoints, attrs);
    },
    "bpmn:DataInputAssociation": function(parentGfx, element) {
      var fill = getFillColor(element, defaultFillColor), stroke = getStrokeColor(element, defaultStrokeColor);
      return renderer("bpmn:Association")(parentGfx, element, {
        markerEnd: marker("association-end", fill, stroke)
      });
    },
    "bpmn:DataOutputAssociation": function(parentGfx, element) {
      var fill = getFillColor(element, defaultFillColor), stroke = getStrokeColor(element, defaultStrokeColor);
      return renderer("bpmn:Association")(parentGfx, element, {
        markerEnd: marker("association-end", fill, stroke)
      });
    },
    "bpmn:MessageFlow": function(parentGfx, element) {
      var semantic = getSemantic(element), di = getDi(element);
      var fill = getFillColor(element, defaultFillColor), stroke = getStrokeColor(element, defaultStrokeColor);
      var pathData = createPathFromConnection(element);
      var attrs = {
        markerEnd: marker("messageflow-end", fill, stroke),
        markerStart: marker("messageflow-start", fill, stroke),
        strokeDasharray: "10, 12",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5px",
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      var path = drawPath(parentGfx, pathData, attrs);
      if (semantic.messageRef) {
        var midPoint = path.getPointAtLength(path.getTotalLength() / 2);
        var markerPathData = pathMap.getScaledPath("MESSAGE_FLOW_MARKER", {
          abspos: {
            x: midPoint.x,
            y: midPoint.y
          }
        });
        var messageAttrs = { strokeWidth: 1 };
        if (di.messageVisibleKind === "initiating") {
          messageAttrs.fill = "white";
          messageAttrs.stroke = "black";
        } else {
          messageAttrs.fill = "#888";
          messageAttrs.stroke = "white";
        }
        var message = drawPath(parentGfx, markerPathData, messageAttrs);
        var labelText = semantic.messageRef.name;
        var label = renderLabel(parentGfx, labelText, {
          align: "center-top",
          fitBox: true,
          style: {
            fill: getStrokeColor(element, defaultLabelColor)
          }
        });
        var messageBounds = message.getBBox(), labelBounds = label.getBBox();
        var translateX = midPoint.x - labelBounds.width / 2, translateY = midPoint.y + messageBounds.height / 2 + ELEMENT_LABEL_DISTANCE;
        transform(label, translateX, translateY, 0);
      }
      return path;
    },
    "bpmn:DataObject": function(parentGfx, element) {
      var pathData = pathMap.getScaledPath("DATA_OBJECT_PATH", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0.474,
          my: 0.296
        }
      });
      var elementObject = drawPath(parentGfx, pathData, {
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var semantic = getSemantic(element);
      if (isCollection(semantic)) {
        renderDataItemCollection(parentGfx, element);
      }
      return elementObject;
    },
    "bpmn:DataObjectReference": as("bpmn:DataObject"),
    "bpmn:DataInput": function(parentGfx, element) {
      var arrowPathData = pathMap.getRawPath("DATA_ARROW");
      var elementObject = renderer("bpmn:DataObject")(parentGfx, element);
      drawPath(parentGfx, arrowPathData, { strokeWidth: 1 });
      return elementObject;
    },
    "bpmn:DataOutput": function(parentGfx, element) {
      var arrowPathData = pathMap.getRawPath("DATA_ARROW");
      var elementObject = renderer("bpmn:DataObject")(parentGfx, element);
      drawPath(parentGfx, arrowPathData, {
        strokeWidth: 1,
        fill: "black"
      });
      return elementObject;
    },
    "bpmn:DataStoreReference": function(parentGfx, element) {
      var DATA_STORE_PATH = pathMap.getScaledPath("DATA_STORE", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0,
          my: 0.133
        }
      });
      var elementStore = drawPath(parentGfx, DATA_STORE_PATH, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        fillOpacity: DEFAULT_FILL_OPACITY,
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      return elementStore;
    },
    "bpmn:BoundaryEvent": function(parentGfx, element) {
      var semantic = getSemantic(element), cancel = semantic.cancelActivity;
      var attrs = {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      };
      if (!cancel) {
        attrs.strokeDasharray = "6";
        attrs.strokeLinecap = "round";
      }
      var outerAttrs = assign({}, attrs, {
        fillOpacity: 1
      });
      var innerAttrs = assign({}, attrs, {
        fill: "none"
      });
      var outer = renderer("bpmn:Event")(parentGfx, element, outerAttrs);
      drawCircle(parentGfx, element.width, element.height, INNER_OUTER_DIST, innerAttrs);
      renderEventContent(element, parentGfx);
      return outer;
    },
    "bpmn:Group": function(parentGfx, element) {
      var group = drawRect(parentGfx, element.width, element.height, TASK_BORDER_RADIUS, {
        stroke: getStrokeColor(element, defaultStrokeColor),
        strokeWidth: 1,
        strokeDasharray: "8,3,1,3",
        fill: "none",
        pointerEvents: "none"
      });
      return group;
    },
    "label": function(parentGfx, element) {
      return renderExternalLabel(parentGfx, element);
    },
    "bpmn:TextAnnotation": function(parentGfx, element) {
      var style = {
        "fill": "none",
        "stroke": "none"
      };
      var textElement = drawRect(parentGfx, element.width, element.height, 0, 0, style);
      var textPathData = pathMap.getScaledPath("TEXT_ANNOTATION", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: 0,
          my: 0
        }
      });
      drawPath(parentGfx, textPathData, {
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      var text = getSemantic(element).text || "";
      renderLabel(parentGfx, text, {
        box: element,
        align: "left-top",
        padding: 5,
        style: {
          fill: getLabelColor(element, defaultLabelColor, defaultStrokeColor)
        }
      });
      return textElement;
    },
    "ParticipantMultiplicityMarker": function(parentGfx, element) {
      var markerPath = pathMap.getScaledPath("MARKER_PARALLEL", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: element.width / 2 / element.width,
          my: (element.height - 15) / element.height
        }
      });
      drawMarker("participant-multiplicity", parentGfx, markerPath, {
        strokeWidth: 2,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    "SubProcessMarker": function(parentGfx, element) {
      var markerRect = drawRect(parentGfx, 14, 14, 0, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
      translate$1(markerRect, element.width / 2 - 7.5, element.height - 20);
      var markerPath = pathMap.getScaledPath("MARKER_SUB_PROCESS", {
        xScaleFactor: 1.5,
        yScaleFactor: 1.5,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 - 7.5) / element.width,
          my: (element.height - 20) / element.height
        }
      });
      drawMarker("sub-process", parentGfx, markerPath, {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    "ParallelMarker": function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath("MARKER_PARALLEL", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.parallel) / element.width,
          my: (element.height - 20) / element.height
        }
      });
      drawMarker("parallel", parentGfx, markerPath, {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    "SequentialMarker": function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath("MARKER_SEQUENTIAL", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.seq) / element.width,
          my: (element.height - 19) / element.height
        }
      });
      drawMarker("sequential", parentGfx, markerPath, {
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    "CompensationMarker": function(parentGfx, element, position) {
      var markerMath = pathMap.getScaledPath("MARKER_COMPENSATION", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.compensation) / element.width,
          my: (element.height - 13) / element.height
        }
      });
      drawMarker("compensation", parentGfx, markerMath, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    },
    "LoopMarker": function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath("MARKER_LOOP", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.loop) / element.width,
          my: (element.height - 7) / element.height
        }
      });
      drawMarker("loop", parentGfx, markerPath, {
        strokeWidth: 1,
        fill: getFillColor(element, defaultFillColor),
        stroke: getStrokeColor(element, defaultStrokeColor),
        strokeLinecap: "round",
        strokeMiterlimit: 0.5
      });
    },
    "AdhocMarker": function(parentGfx, element, position) {
      var markerPath = pathMap.getScaledPath("MARKER_ADHOC", {
        xScaleFactor: 1,
        yScaleFactor: 1,
        containerWidth: element.width,
        containerHeight: element.height,
        position: {
          mx: (element.width / 2 + position.adhoc) / element.width,
          my: (element.height - 15) / element.height
        }
      });
      drawMarker("adhoc", parentGfx, markerPath, {
        strokeWidth: 1,
        fill: getStrokeColor(element, defaultStrokeColor),
        stroke: getStrokeColor(element, defaultStrokeColor)
      });
    }
  };
  function attachTaskMarkers(parentGfx, element, taskMarkers) {
    var obj = getSemantic(element);
    var subprocess = taskMarkers && taskMarkers.indexOf("SubProcessMarker") !== -1;
    var position;
    if (subprocess) {
      position = {
        seq: -21,
        parallel: -22,
        compensation: -42,
        loop: -18,
        adhoc: 10
      };
    } else {
      position = {
        seq: -3,
        parallel: -6,
        compensation: -27,
        loop: 0,
        adhoc: 10
      };
    }
    forEach(taskMarkers, function(marker2) {
      renderer(marker2)(parentGfx, element, position);
    });
    if (obj.isForCompensation) {
      renderer("CompensationMarker")(parentGfx, element, position);
    }
    if (obj.$type === "bpmn:AdHocSubProcess") {
      renderer("AdhocMarker")(parentGfx, element, position);
    }
    var loopCharacteristics = obj.loopCharacteristics, isSequential = loopCharacteristics && loopCharacteristics.isSequential;
    if (loopCharacteristics) {
      if (isSequential === void 0) {
        renderer("LoopMarker")(parentGfx, element, position);
      }
      if (isSequential === false) {
        renderer("ParallelMarker")(parentGfx, element, position);
      }
      if (isSequential === true) {
        renderer("SequentialMarker")(parentGfx, element, position);
      }
    }
  }
  function renderDataItemCollection(parentGfx, element) {
    var yPosition = (element.height - 18) / element.height;
    var pathData = pathMap.getScaledPath("DATA_OBJECT_COLLECTION_PATH", {
      xScaleFactor: 1,
      yScaleFactor: 1,
      containerWidth: element.width,
      containerHeight: element.height,
      position: {
        mx: 0.33,
        my: yPosition
      }
    });
    drawPath(parentGfx, pathData, {
      strokeWidth: 2
    });
  }
  this._drawPath = drawPath;
}
inherits$1(BpmnRenderer, BaseRenderer);
BpmnRenderer.$inject = [
  "config.bpmnRenderer",
  "eventBus",
  "styles",
  "pathMap",
  "canvas",
  "textRenderer"
];
BpmnRenderer.prototype.canRender = function(element) {
  return is$1(element, "bpmn:BaseElement");
};
BpmnRenderer.prototype.drawShape = function(parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type];
  return h(parentGfx, element);
};
BpmnRenderer.prototype.drawConnection = function(parentGfx, element) {
  var type = element.type;
  var h = this.handlers[type];
  return h(parentGfx, element);
};
BpmnRenderer.prototype.getShapePath = function(element) {
  if (is$1(element, "bpmn:Event")) {
    return getCirclePath(element);
  }
  if (is$1(element, "bpmn:Activity")) {
    return getRoundRectPath(element, TASK_BORDER_RADIUS);
  }
  if (is$1(element, "bpmn:Gateway")) {
    return getDiamondPath(element);
  }
  return getRectPath(element);
};
var DEFAULT_BOX_PADDING = 0;
var DEFAULT_LABEL_SIZE$1 = {
  width: 150,
  height: 50
};
function parseAlign(align) {
  var parts = align.split("-");
  return {
    horizontal: parts[0] || "center",
    vertical: parts[1] || "top"
  };
}
function parsePadding(padding) {
  if (isObject(padding)) {
    return assign({ top: 0, left: 0, right: 0, bottom: 0 }, padding);
  } else {
    return {
      top: padding,
      left: padding,
      right: padding,
      bottom: padding
    };
  }
}
function getTextBBox(text, fakeText) {
  fakeText.textContent = text;
  var textBBox;
  try {
    var bbox, emptyLine = text === "";
    fakeText.textContent = emptyLine ? "dummy" : text;
    textBBox = fakeText.getBBox();
    bbox = {
      width: textBBox.width + textBBox.x * 2,
      height: textBBox.height
    };
    if (emptyLine) {
      bbox.width = 0;
    }
    return bbox;
  } catch (e) {
    return { width: 0, height: 0 };
  }
}
function layoutNext(lines, maxWidth, fakeText) {
  var originalLine = lines.shift(), fitLine = originalLine;
  var textBBox;
  for (; ; ) {
    textBBox = getTextBBox(fitLine, fakeText);
    textBBox.width = fitLine ? textBBox.width : 0;
    if (fitLine === " " || fitLine === "" || textBBox.width < Math.round(maxWidth) || fitLine.length < 2) {
      return fit(lines, fitLine, originalLine, textBBox);
    }
    fitLine = shortenLine(fitLine, textBBox.width, maxWidth);
  }
}
function fit(lines, fitLine, originalLine, textBBox) {
  if (fitLine.length < originalLine.length) {
    var remainder = originalLine.slice(fitLine.length).trim();
    lines.unshift(remainder);
  }
  return {
    width: textBBox.width,
    height: textBBox.height,
    text: fitLine
  };
}
var SOFT_BREAK = "\xAD";
function semanticShorten(line, maxLength) {
  var parts = line.split(/(\s|-|\u00AD)/g), part, shortenedParts = [], length2 = 0;
  if (parts.length > 1) {
    while (part = parts.shift()) {
      if (part.length + length2 < maxLength) {
        shortenedParts.push(part);
        length2 += part.length;
      } else {
        if (part === "-" || part === SOFT_BREAK) {
          shortenedParts.pop();
        }
        break;
      }
    }
  }
  var last = shortenedParts[shortenedParts.length - 1];
  if (last && last === SOFT_BREAK) {
    shortenedParts[shortenedParts.length - 1] = "-";
  }
  return shortenedParts.join("");
}
function shortenLine(line, width, maxWidth) {
  var length2 = Math.max(line.length * (maxWidth / width), 1);
  var shortenedLine = semanticShorten(line, length2);
  if (!shortenedLine) {
    shortenedLine = line.slice(0, Math.max(Math.round(length2 - 1), 1));
  }
  return shortenedLine;
}
function getHelperSvg() {
  var helperSvg = document.getElementById("helper-svg");
  if (!helperSvg) {
    helperSvg = create$1("svg");
    attr$1(helperSvg, {
      id: "helper-svg",
      width: 0,
      height: 0,
      style: "visibility: hidden; position: fixed"
    });
    document.body.appendChild(helperSvg);
  }
  return helperSvg;
}
function Text(config) {
  this._config = assign({}, {
    size: DEFAULT_LABEL_SIZE$1,
    padding: DEFAULT_BOX_PADDING,
    style: {},
    align: "center-top"
  }, config || {});
}
Text.prototype.createText = function(text, options) {
  return this.layoutText(text, options).element;
};
Text.prototype.getDimensions = function(text, options) {
  return this.layoutText(text, options).dimensions;
};
Text.prototype.layoutText = function(text, options) {
  var box = assign({}, this._config.size, options.box), style = assign({}, this._config.style, options.style), align = parseAlign(options.align || this._config.align), padding = parsePadding(options.padding !== void 0 ? options.padding : this._config.padding), fitBox = options.fitBox || false;
  var lineHeight = getLineHeight(style);
  var lines = text.split(/\u00AD?\r?\n/), layouted = [];
  var maxWidth = box.width - padding.left - padding.right;
  var helperText = create$1("text");
  attr$1(helperText, { x: 0, y: 0 });
  attr$1(helperText, style);
  var helperSvg = getHelperSvg();
  append(helperSvg, helperText);
  while (lines.length) {
    layouted.push(layoutNext(lines, maxWidth, helperText));
  }
  if (align.vertical === "middle") {
    padding.top = padding.bottom = 0;
  }
  var totalHeight = reduce(layouted, function(sum, line, idx) {
    return sum + (lineHeight || line.height);
  }, 0) + padding.top + padding.bottom;
  var maxLineWidth = reduce(layouted, function(sum, line, idx) {
    return line.width > sum ? line.width : sum;
  }, 0);
  var y = padding.top;
  if (align.vertical === "middle") {
    y += (box.height - totalHeight) / 2;
  }
  y -= (lineHeight || layouted[0].height) / 4;
  var textElement = create$1("text");
  attr$1(textElement, style);
  forEach(layouted, function(line) {
    var x;
    y += lineHeight || line.height;
    switch (align.horizontal) {
      case "left":
        x = padding.left;
        break;
      case "right":
        x = (fitBox ? maxLineWidth : maxWidth) - padding.right - line.width;
        break;
      default:
        x = Math.max(((fitBox ? maxLineWidth : maxWidth) - line.width) / 2 + padding.left, 0);
    }
    var tspan = create$1("tspan");
    attr$1(tspan, { x, y });
    tspan.textContent = line.text;
    append(textElement, tspan);
  });
  remove$2(helperText);
  var dimensions = {
    width: maxLineWidth,
    height: totalHeight
  };
  return {
    dimensions,
    element: textElement
  };
};
function getLineHeight(style) {
  if ("fontSize" in style && "lineHeight" in style) {
    return style.lineHeight * parseInt(style.fontSize, 10);
  }
}
var DEFAULT_FONT_SIZE = 12;
var LINE_HEIGHT_RATIO = 1.2;
var MIN_TEXT_ANNOTATION_HEIGHT = 30;
function TextRenderer(config) {
  var defaultStyle = assign({
    fontFamily: "Arial, sans-serif",
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: "normal",
    lineHeight: LINE_HEIGHT_RATIO
  }, config && config.defaultStyle || {});
  var fontSize = parseInt(defaultStyle.fontSize, 10) - 1;
  var externalStyle = assign({}, defaultStyle, {
    fontSize
  }, config && config.externalStyle || {});
  var textUtil = new Text({
    style: defaultStyle
  });
  this.getExternalLabelBounds = function(bounds, text) {
    var layoutedDimensions = textUtil.getDimensions(text, {
      box: {
        width: 90,
        height: 30,
        x: bounds.width / 2 + bounds.x,
        y: bounds.height / 2 + bounds.y
      },
      style: externalStyle
    });
    return {
      x: Math.round(bounds.x + bounds.width / 2 - layoutedDimensions.width / 2),
      y: Math.round(bounds.y),
      width: Math.ceil(layoutedDimensions.width),
      height: Math.ceil(layoutedDimensions.height)
    };
  };
  this.getTextAnnotationBounds = function(bounds, text) {
    var layoutedDimensions = textUtil.getDimensions(text, {
      box: bounds,
      style: defaultStyle,
      align: "left-top",
      padding: 5
    });
    return {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: Math.max(MIN_TEXT_ANNOTATION_HEIGHT, Math.round(layoutedDimensions.height))
    };
  };
  this.createText = function(text, options) {
    return textUtil.createText(text, options || {});
  };
  this.getDefaultStyle = function() {
    return defaultStyle;
  };
  this.getExternalStyle = function() {
    return externalStyle;
  };
}
TextRenderer.$inject = [
  "config.textRenderer"
];
function PathMap() {
  this.pathMap = {
    "EVENT_MESSAGE": {
      d: "m {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}",
      height: 36,
      width: 36,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    "EVENT_SIGNAL": {
      d: "M {mx},{my} l {e.x0},{e.y0} l -{e.x1},0 Z",
      height: 36,
      width: 36,
      heightElements: [18],
      widthElements: [10, 20]
    },
    "EVENT_ESCALATION": {
      d: "M {mx},{my} l {e.x0},{e.y0} l -{e.x0},-{e.y1} l -{e.x0},{e.y1} Z",
      height: 36,
      width: 36,
      heightElements: [20, 7],
      widthElements: [8]
    },
    "EVENT_CONDITIONAL": {
      d: "M {e.x0},{e.y0} l {e.x1},0 l 0,{e.y2} l -{e.x1},0 Z M {e.x2},{e.y3} l {e.x0},0 M {e.x2},{e.y4} l {e.x0},0 M {e.x2},{e.y5} l {e.x0},0 M {e.x2},{e.y6} l {e.x0},0 M {e.x2},{e.y7} l {e.x0},0 M {e.x2},{e.y8} l {e.x0},0 ",
      height: 36,
      width: 36,
      heightElements: [8.5, 14.5, 18, 11.5, 14.5, 17.5, 20.5, 23.5, 26.5],
      widthElements: [10.5, 14.5, 12.5]
    },
    "EVENT_LINK": {
      d: "m {mx},{my} 0,{e.y0} -{e.x1},0 0,{e.y1} {e.x1},0 0,{e.y0} {e.x0},-{e.y2} -{e.x0},-{e.y2} z",
      height: 36,
      width: 36,
      heightElements: [4.4375, 6.75, 7.8125],
      widthElements: [9.84375, 13.5]
    },
    "EVENT_ERROR": {
      d: "m {mx},{my} {e.x0},-{e.y0} {e.x1},-{e.y1} {e.x2},{e.y2} {e.x3},-{e.y3} -{e.x4},{e.y4} -{e.x5},-{e.y5} z",
      height: 36,
      width: 36,
      heightElements: [0.023, 8.737, 8.151, 16.564, 10.591, 8.714],
      widthElements: [0.085, 6.672, 6.97, 4.273, 5.337, 6.636]
    },
    "EVENT_CANCEL_45": {
      d: "m {mx},{my} -{e.x1},0 0,{e.x0} {e.x1},0 0,{e.y1} {e.x0},0 0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z",
      height: 36,
      width: 36,
      heightElements: [4.75, 8.5],
      widthElements: [4.75, 8.5]
    },
    "EVENT_COMPENSATION": {
      d: "m {mx},{my} {e.x0},-{e.y0} 0,{e.y1} z m {e.x1},-{e.y2} {e.x2},-{e.y3} 0,{e.y1} -{e.x2},-{e.y3} z",
      height: 36,
      width: 36,
      heightElements: [6.5, 13, 0.4, 6.1],
      widthElements: [9, 9.3, 8.7]
    },
    "EVENT_TIMER_WH": {
      d: "M {mx},{my} l {e.x0},-{e.y0} m -{e.x0},{e.y0} l {e.x1},{e.y1} ",
      height: 36,
      width: 36,
      heightElements: [10, 2],
      widthElements: [3, 7]
    },
    "EVENT_TIMER_LINE": {
      d: "M {mx},{my} m {e.x0},{e.y0} l -{e.x1},{e.y1} ",
      height: 36,
      width: 36,
      heightElements: [10, 3],
      widthElements: [0, 0]
    },
    "EVENT_MULTIPLE": {
      d: "m {mx},{my} {e.x1},-{e.y0} {e.x1},{e.y0} -{e.x0},{e.y1} -{e.x2},0 z",
      height: 36,
      width: 36,
      heightElements: [6.28099, 12.56199],
      widthElements: [3.1405, 9.42149, 12.56198]
    },
    "EVENT_PARALLEL_MULTIPLE": {
      d: "m {mx},{my} {e.x0},0 0,{e.y1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} -{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z",
      height: 36,
      width: 36,
      heightElements: [2.56228, 7.68683],
      widthElements: [2.56228, 7.68683]
    },
    "GATEWAY_EXCLUSIVE": {
      d: "m {mx},{my} {e.x0},{e.y0} {e.x1},{e.y0} {e.x2},0 {e.x4},{e.y2} {e.x4},{e.y1} {e.x2},0 {e.x1},{e.y3} {e.x0},{e.y3} {e.x3},0 {e.x5},{e.y1} {e.x5},{e.y2} {e.x3},0 z",
      height: 17.5,
      width: 17.5,
      heightElements: [8.5, 6.5312, -6.5312, -8.5],
      widthElements: [6.5, -6.5, 3, -3, 5, -5]
    },
    "GATEWAY_PARALLEL": {
      d: "m {mx},{my} 0,{e.y1} -{e.x1},0 0,{e.y0} {e.x1},0 0,{e.y1} {e.x0},0 0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z",
      height: 30,
      width: 30,
      heightElements: [5, 12.5],
      widthElements: [5, 12.5]
    },
    "GATEWAY_EVENT_BASED": {
      d: "m {mx},{my} {e.x0},{e.y0} {e.x0},{e.y1} {e.x1},{e.y2} {e.x2},0 z",
      height: 11,
      width: 11,
      heightElements: [-6, 6, 12, -12],
      widthElements: [9, -3, -12]
    },
    "GATEWAY_COMPLEX": {
      d: "m {mx},{my} 0,{e.y0} -{e.x0},-{e.y1} -{e.x1},{e.y2} {e.x0},{e.y1} -{e.x2},0 0,{e.y3} {e.x2},0  -{e.x0},{e.y1} l {e.x1},{e.y2} {e.x0},-{e.y1} 0,{e.y0} {e.x3},0 0,-{e.y0} {e.x0},{e.y1} {e.x1},-{e.y2} -{e.x0},-{e.y1} {e.x2},0 0,-{e.y3} -{e.x2},0 {e.x0},-{e.y1} -{e.x1},-{e.y2} -{e.x0},{e.y1} 0,-{e.y0} -{e.x3},0 z",
      height: 17.125,
      width: 17.125,
      heightElements: [4.875, 3.4375, 2.125, 3],
      widthElements: [3.4375, 2.125, 4.875, 3]
    },
    "DATA_OBJECT_PATH": {
      d: "m 0,0 {e.x1},0 {e.x0},{e.y0} 0,{e.y1} -{e.x2},0 0,-{e.y2} {e.x1},0 0,{e.y0} {e.x0},0",
      height: 61,
      width: 51,
      heightElements: [10, 50, 60],
      widthElements: [10, 40, 50, 60]
    },
    "DATA_OBJECT_COLLECTION_PATH": {
      d: "m{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10",
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    "DATA_ARROW": {
      d: "m 5,9 9,0 0,-3 5,5 -5,5 0,-3 -9,0 z",
      height: 61,
      width: 51,
      heightElements: [],
      widthElements: []
    },
    "DATA_STORE": {
      d: "m  {mx},{my} l  0,{e.y2} c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 l  0,-{e.y2} c -{e.x0},-{e.y1} -{e.x1},-{e.y1} -{e.x2},0c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 m  -{e.x2},{e.y0}c  {e.x0},{e.y1} {e.x1},{e.y1} {e.x2},0m  -{e.x2},{e.y0}c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0",
      height: 61,
      width: 61,
      heightElements: [7, 10, 45],
      widthElements: [2, 58, 60]
    },
    "TEXT_ANNOTATION": {
      d: "m {mx}, {my} m 10,0 l -10,0 l 0,{e.y0} l 10,0",
      height: 30,
      width: 10,
      heightElements: [30],
      widthElements: [10]
    },
    "MARKER_SUB_PROCESS": {
      d: "m{mx},{my} m 7,2 l 0,10 m -5,-5 l 10,0",
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    "MARKER_PARALLEL": {
      d: "m{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10",
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    "MARKER_SEQUENTIAL": {
      d: "m{mx},{my} m 0,3 l 10,0 m -10,3 l 10,0 m -10,3 l 10,0",
      height: 10,
      width: 10,
      heightElements: [],
      widthElements: []
    },
    "MARKER_COMPENSATION": {
      d: "m {mx},{my} 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z",
      height: 10,
      width: 21,
      heightElements: [],
      widthElements: []
    },
    "MARKER_LOOP": {
      d: "m {mx},{my} c 3.526979,0 6.386161,-2.829858 6.386161,-6.320661 0,-3.490806 -2.859182,-6.320661 -6.386161,-6.320661 -3.526978,0 -6.38616,2.829855 -6.38616,6.320661 0,1.745402 0.714797,3.325567 1.870463,4.469381 0.577834,0.571908 1.265885,1.034728 2.029916,1.35457 l -0.718163,-3.909793 m 0.718163,3.909793 -3.885211,0.802902",
      height: 13.9,
      width: 13.7,
      heightElements: [],
      widthElements: []
    },
    "MARKER_ADHOC": {
      d: "m {mx},{my} m 0.84461,2.64411 c 1.05533,-1.23780996 2.64337,-2.07882 4.29653,-1.97997996 2.05163,0.0805 3.85579,1.15803 5.76082,1.79107 1.06385,0.34139996 2.24454,0.1438 3.18759,-0.43767 0.61743,-0.33642 1.2775,-0.64078 1.7542,-1.17511 0,0.56023 0,1.12046 0,1.6807 -0.98706,0.96237996 -2.29792,1.62393996 -3.6918,1.66181996 -1.24459,0.0927 -2.46671,-0.2491 -3.59505,-0.74812 -1.35789,-0.55965 -2.75133,-1.33436996 -4.27027,-1.18121996 -1.37741,0.14601 -2.41842,1.13685996 -3.44288,1.96782996 z",
      height: 4,
      width: 15,
      heightElements: [],
      widthElements: []
    },
    "TASK_TYPE_SEND": {
      d: "m {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}",
      height: 14,
      width: 21,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    "TASK_TYPE_SCRIPT": {
      d: "m {mx},{my} c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z m -7,-12 l 5,0 m -4.5,3 l 4.5,0 m -3,3 l 5,0m -4,3 l 5,0",
      height: 15,
      width: 12.6,
      heightElements: [6, 14],
      widthElements: [10.5, 21]
    },
    "TASK_TYPE_USER_1": {
      d: "m {mx},{my} c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5"
    },
    "TASK_TYPE_USER_2": {
      d: "m {mx},{my} m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 "
    },
    "TASK_TYPE_USER_3": {
      d: "m {mx},{my} m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z"
    },
    "TASK_TYPE_MANUAL": {
      d: "m {mx},{my} c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z"
    },
    "TASK_TYPE_INSTANTIATING_SEND": {
      d: "m {mx},{my} l 0,8.4 l 12.6,0 l 0,-8.4 z l 6.3,3.6 l 6.3,-3.6"
    },
    "TASK_TYPE_SERVICE": {
      d: "m {mx},{my} v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 -1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 -0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 -1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 -0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z m 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z"
    },
    "TASK_TYPE_SERVICE_FILL": {
      d: "m {mx},{my} c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z"
    },
    "TASK_TYPE_BUSINESS_RULE_HEADER": {
      d: "m {mx},{my} 0,4 20,0 0,-4 z"
    },
    "TASK_TYPE_BUSINESS_RULE_MAIN": {
      d: "m {mx},{my} 0,12 20,0 0,-12 zm 0,8 l 20,0 m -13,-4 l 0,8"
    },
    "MESSAGE_FLOW_MARKER": {
      d: "m {mx},{my} m -10.5 ,-7 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6"
    }
  };
  this.getRawPath = function getRawPath(pathId) {
    return this.pathMap[pathId].d;
  };
  this.getScaledPath = function getScaledPath(pathId, param) {
    var rawPath = this.pathMap[pathId];
    var mx, my;
    if (param.abspos) {
      mx = param.abspos.x;
      my = param.abspos.y;
    } else {
      mx = param.containerWidth * param.position.mx;
      my = param.containerHeight * param.position.my;
    }
    var coordinates = {};
    if (param.position) {
      var heightRatio = param.containerHeight / rawPath.height * param.yScaleFactor;
      var widthRatio = param.containerWidth / rawPath.width * param.xScaleFactor;
      for (var heightIndex = 0; heightIndex < rawPath.heightElements.length; heightIndex++) {
        coordinates["y" + heightIndex] = rawPath.heightElements[heightIndex] * heightRatio;
      }
      for (var widthIndex = 0; widthIndex < rawPath.widthElements.length; widthIndex++) {
        coordinates["x" + widthIndex] = rawPath.widthElements[widthIndex] * widthRatio;
      }
    }
    var path = format(rawPath.d, {
      mx,
      my,
      e: coordinates
    });
    return path;
  };
}
var tokenRegex = /\{([^{}]+)\}/g, objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
function replacer(all2, key, obj) {
  var res = obj;
  key.replace(objNotationRegex, function(all3, name2, quote, quotedName, isFunc) {
    name2 = name2 || quotedName;
    if (res) {
      if (name2 in res) {
        res = res[name2];
      }
      typeof res == "function" && isFunc && (res = res());
    }
  });
  res = (res == null || res == obj ? all2 : res) + "";
  return res;
}
function format(str, obj) {
  return String(str).replace(tokenRegex, function(all2, key) {
    return replacer(all2, key, obj);
  });
}
var DrawModule$1 = {
  __init__: ["bpmnRenderer"],
  bpmnRenderer: ["type", BpmnRenderer],
  textRenderer: ["type", TextRenderer],
  pathMap: ["type", PathMap]
};
function translate(template2, replacements) {
  replacements = replacements || {};
  return template2.replace(/{([^}]+)}/g, function(_, key) {
    return replacements[key] || "{" + key + "}";
  });
}
var TranslateModule = {
  translate: ["value", translate]
};
var DEFAULT_LABEL_SIZE = {
  width: 90,
  height: 20
};
var FLOW_LABEL_INDENT = 15;
function isLabelExternal(semantic) {
  return is$1(semantic, "bpmn:Event") || is$1(semantic, "bpmn:Gateway") || is$1(semantic, "bpmn:DataStoreReference") || is$1(semantic, "bpmn:DataObjectReference") || is$1(semantic, "bpmn:DataInput") || is$1(semantic, "bpmn:DataOutput") || is$1(semantic, "bpmn:SequenceFlow") || is$1(semantic, "bpmn:MessageFlow") || is$1(semantic, "bpmn:Group");
}
function getFlowLabelPosition(waypoints) {
  var mid = waypoints.length / 2 - 1;
  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];
  var position = getWaypointsMid(waypoints);
  var angle = Math.atan((second.y - first.y) / (second.x - first.x));
  var x = position.x, y = position.y;
  if (Math.abs(angle) < Math.PI / 2) {
    y -= FLOW_LABEL_INDENT;
  } else {
    x += FLOW_LABEL_INDENT;
  }
  return { x, y };
}
function getWaypointsMid(waypoints) {
  var mid = waypoints.length / 2 - 1;
  var first = waypoints[Math.floor(mid)];
  var second = waypoints[Math.ceil(mid + 0.01)];
  return {
    x: first.x + (second.x - first.x) / 2,
    y: first.y + (second.y - first.y) / 2
  };
}
function getExternalLabelMid(element) {
  if (element.waypoints) {
    return getFlowLabelPosition(element.waypoints);
  } else if (is$1(element, "bpmn:Group")) {
    return {
      x: element.x + element.width / 2,
      y: element.y + DEFAULT_LABEL_SIZE.height / 2
    };
  } else {
    return {
      x: element.x + element.width / 2,
      y: element.y + element.height + DEFAULT_LABEL_SIZE.height / 2
    };
  }
}
function getExternalLabelBounds(semantic, element) {
  var mid, size, bounds, di = semantic.di, label = di.label;
  if (label && label.bounds) {
    bounds = label.bounds;
    size = {
      width: Math.max(DEFAULT_LABEL_SIZE.width, bounds.width),
      height: bounds.height
    };
    mid = {
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2
    };
  } else {
    mid = getExternalLabelMid(element);
    size = DEFAULT_LABEL_SIZE;
  }
  return assign({
    x: mid.x - size.width / 2,
    y: mid.y - size.height / 2
  }, size);
}
function roundPoint(point) {
  return {
    x: Math.round(point.x),
    y: Math.round(point.y)
  };
}
function asTRBL(bounds) {
  return {
    top: bounds.y,
    right: bounds.x + (bounds.width || 0),
    bottom: bounds.y + (bounds.height || 0),
    left: bounds.x
  };
}
function getMid(bounds) {
  return roundPoint({
    x: bounds.x + (bounds.width || 0) / 2,
    y: bounds.y + (bounds.height || 0) / 2
  });
}
function elementToString(e) {
  if (!e) {
    return "<null>";
  }
  return "<" + e.$type + (e.id ? ' id="' + e.id : "") + '" />';
}
function elementData(semantic, attrs) {
  return assign({
    id: semantic.id,
    type: semantic.$type,
    businessObject: semantic
  }, attrs);
}
function getWaypoints(bo, source, target) {
  var waypoints = bo.di.waypoint;
  if (!waypoints || waypoints.length < 2) {
    return [getMid(source), getMid(target)];
  }
  return waypoints.map(function(p) {
    return { x: p.x, y: p.y };
  });
}
function notYetDrawn(translate2, semantic, refSemantic, property) {
  return new Error(translate2("element {element} referenced by {referenced}#{property} not yet drawn", {
    element: elementToString(refSemantic),
    referenced: elementToString(semantic),
    property
  }));
}
function BpmnImporter(eventBus, canvas, elementFactory, elementRegistry, translate2, textRenderer) {
  this._eventBus = eventBus;
  this._canvas = canvas;
  this._elementFactory = elementFactory;
  this._elementRegistry = elementRegistry;
  this._translate = translate2;
  this._textRenderer = textRenderer;
}
BpmnImporter.$inject = [
  "eventBus",
  "canvas",
  "elementFactory",
  "elementRegistry",
  "translate",
  "textRenderer"
];
BpmnImporter.prototype.add = function(semantic, parentElement) {
  var di = semantic.di, element, translate2 = this._translate, hidden;
  var parentIndex;
  if (is$1(di, "bpmndi:BPMNPlane")) {
    element = this._elementFactory.createRoot(elementData(semantic));
    this._canvas.setRootElement(element);
  } else if (is$1(di, "bpmndi:BPMNShape")) {
    var collapsed = !isExpanded(semantic), isFrame = isFrameElement$1(semantic);
    hidden = parentElement && (parentElement.hidden || parentElement.collapsed);
    var bounds = semantic.di.bounds;
    element = this._elementFactory.createShape(elementData(semantic, {
      collapsed,
      hidden,
      x: Math.round(bounds.x),
      y: Math.round(bounds.y),
      width: Math.round(bounds.width),
      height: Math.round(bounds.height),
      isFrame
    }));
    if (is$1(semantic, "bpmn:BoundaryEvent")) {
      this._attachBoundary(semantic, element);
    }
    if (is$1(semantic, "bpmn:Lane")) {
      parentIndex = 0;
    }
    if (is$1(semantic, "bpmn:DataStoreReference")) {
      if (!isPointInsideBBox(parentElement, getMid(bounds))) {
        parentElement = this._canvas.getRootElement();
      }
    }
    this._canvas.addShape(element, parentElement, parentIndex);
  } else if (is$1(di, "bpmndi:BPMNEdge")) {
    var source = this._getSource(semantic), target = this._getTarget(semantic);
    hidden = parentElement && (parentElement.hidden || parentElement.collapsed);
    element = this._elementFactory.createConnection(elementData(semantic, {
      hidden,
      source,
      target,
      waypoints: getWaypoints(semantic, source, target)
    }));
    if (is$1(semantic, "bpmn:DataAssociation")) {
      parentElement = null;
    }
    if (is$1(semantic, "bpmn:SequenceFlow")) {
      parentIndex = 0;
    }
    this._canvas.addConnection(element, parentElement, parentIndex);
  } else {
    throw new Error(translate2("unknown di {di} for element {semantic}", {
      di: elementToString(di),
      semantic: elementToString(semantic)
    }));
  }
  if (isLabelExternal(semantic) && getLabel(element)) {
    this.addLabel(semantic, element);
  }
  this._eventBus.fire("bpmnElement.added", { element });
  return element;
};
BpmnImporter.prototype._attachBoundary = function(boundarySemantic, boundaryElement) {
  var translate2 = this._translate;
  var hostSemantic = boundarySemantic.attachedToRef;
  if (!hostSemantic) {
    throw new Error(translate2("missing {semantic}#attachedToRef", {
      semantic: elementToString(boundarySemantic)
    }));
  }
  var host = this._elementRegistry.get(hostSemantic.id), attachers = host && host.attachers;
  if (!host) {
    throw notYetDrawn(translate2, boundarySemantic, hostSemantic, "attachedToRef");
  }
  boundaryElement.host = host;
  if (!attachers) {
    host.attachers = attachers = [];
  }
  if (attachers.indexOf(boundaryElement) === -1) {
    attachers.push(boundaryElement);
  }
};
BpmnImporter.prototype.addLabel = function(semantic, element) {
  var bounds, text, label;
  bounds = getExternalLabelBounds(semantic, element);
  text = getLabel(element);
  if (text) {
    bounds = this._textRenderer.getExternalLabelBounds(bounds, text);
  }
  label = this._elementFactory.createLabel(elementData(semantic, {
    id: semantic.id + "_label",
    labelTarget: element,
    type: "label",
    hidden: element.hidden || !getLabel(element),
    x: Math.round(bounds.x),
    y: Math.round(bounds.y),
    width: Math.round(bounds.width),
    height: Math.round(bounds.height)
  }));
  return this._canvas.addShape(label, element.parent);
};
BpmnImporter.prototype._getEnd = function(semantic, side) {
  var element, refSemantic, type = semantic.$type, translate2 = this._translate;
  refSemantic = semantic[side + "Ref"];
  if (side === "source" && type === "bpmn:DataInputAssociation") {
    refSemantic = refSemantic && refSemantic[0];
  }
  if (side === "source" && type === "bpmn:DataOutputAssociation" || side === "target" && type === "bpmn:DataInputAssociation") {
    refSemantic = semantic.$parent;
  }
  element = refSemantic && this._getElement(refSemantic);
  if (element) {
    return element;
  }
  if (refSemantic) {
    throw notYetDrawn(translate2, semantic, refSemantic, side + "Ref");
  } else {
    throw new Error(translate2("{semantic}#{side} Ref not specified", {
      semantic: elementToString(semantic),
      side
    }));
  }
};
BpmnImporter.prototype._getSource = function(semantic) {
  return this._getEnd(semantic, "source");
};
BpmnImporter.prototype._getTarget = function(semantic) {
  return this._getEnd(semantic, "target");
};
BpmnImporter.prototype._getElement = function(semantic) {
  return this._elementRegistry.get(semantic.id);
};
function isPointInsideBBox(bbox, point) {
  var x = point.x, y = point.y;
  return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
}
function isFrameElement$1(semantic) {
  return is$1(semantic, "bpmn:Group");
}
var ImportModule = {
  __depends__: [
    TranslateModule
  ],
  bpmnImporter: ["type", BpmnImporter]
};
var CoreModule$1 = {
  __depends__: [
    DrawModule$1,
    ImportModule
  ]
};
function getOriginal(event) {
  return event.originalEvent || event.srcEvent;
}
function toPoint(event) {
  if (event.pointers && event.pointers.length) {
    event = event.pointers[0];
  }
  if (event.touches && event.touches.length) {
    event = event.touches[0];
  }
  return event ? {
    x: event.clientX,
    y: event.clientY
  } : null;
}
function isMac() {
  return /mac/i.test(navigator.platform);
}
function isButton(event, button) {
  return (getOriginal(event) || event).button === button;
}
function isPrimaryButton(event) {
  return isButton(event, 0);
}
function isAuxiliaryButton(event) {
  return isButton(event, 1);
}
function hasPrimaryModifier(event) {
  var originalEvent = getOriginal(event) || event;
  if (!isPrimaryButton(event)) {
    return false;
  }
  if (isMac()) {
    return originalEvent.metaKey;
  } else {
    return originalEvent.ctrlKey;
  }
}
function hasSecondaryModifier(event) {
  var originalEvent = getOriginal(event) || event;
  return isPrimaryButton(event) && originalEvent.shiftKey;
}
function allowAll(event) {
  return true;
}
function allowPrimaryAndAuxiliary(event) {
  return isPrimaryButton(event) || isAuxiliaryButton(event);
}
var LOW_PRIORITY$3 = 500;
function InteractionEvents(eventBus, elementRegistry, styles) {
  var self2 = this;
  function fire(type, event, element) {
    if (isIgnored(type, event)) {
      return;
    }
    var target, gfx, returnValue;
    if (!element) {
      target = event.delegateTarget || event.target;
      if (target) {
        gfx = target;
        element = elementRegistry.get(gfx);
      }
    } else {
      gfx = elementRegistry.getGraphics(element);
    }
    if (!gfx || !element) {
      return;
    }
    returnValue = eventBus.fire(type, {
      element,
      gfx,
      originalEvent: event
    });
    if (returnValue === false) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  var handlers = {};
  function mouseHandler(localEventName) {
    return handlers[localEventName];
  }
  function isIgnored(localEventName, event) {
    var filter2 = ignoredFilters[localEventName] || isPrimaryButton;
    return !filter2(event);
  }
  var bindings = {
    click: "element.click",
    contextmenu: "element.contextmenu",
    dblclick: "element.dblclick",
    mousedown: "element.mousedown",
    mousemove: "element.mousemove",
    mouseover: "element.hover",
    mouseout: "element.out",
    mouseup: "element.mouseup"
  };
  var ignoredFilters = {
    "element.contextmenu": allowAll,
    "element.mousedown": allowPrimaryAndAuxiliary,
    "element.mouseup": allowPrimaryAndAuxiliary,
    "element.click": allowPrimaryAndAuxiliary,
    "element.dblclick": allowPrimaryAndAuxiliary
  };
  function triggerMouseEvent(eventName, event, targetElement) {
    var localEventName = bindings[eventName];
    if (!localEventName) {
      throw new Error("unmapped DOM event name <" + eventName + ">");
    }
    return fire(localEventName, event, targetElement);
  }
  var ELEMENT_SELECTOR = "svg, .djs-element";
  function registerEvent(node2, event, localEvent, ignoredFilter) {
    var handler = handlers[localEvent] = function(event2) {
      fire(localEvent, event2);
    };
    if (ignoredFilter) {
      ignoredFilters[localEvent] = ignoredFilter;
    }
    handler.$delegate = delegate.bind(node2, ELEMENT_SELECTOR, event, handler);
  }
  function unregisterEvent(node2, event, localEvent) {
    var handler = mouseHandler(localEvent);
    if (!handler) {
      return;
    }
    delegate.unbind(node2, event, handler.$delegate);
  }
  function registerEvents(svg) {
    forEach(bindings, function(val, key) {
      registerEvent(svg, key, val);
    });
  }
  function unregisterEvents(svg) {
    forEach(bindings, function(val, key) {
      unregisterEvent(svg, key, val);
    });
  }
  eventBus.on("canvas.destroy", function(event) {
    unregisterEvents(event.svg);
  });
  eventBus.on("canvas.init", function(event) {
    registerEvents(event.svg);
  });
  eventBus.on(["shape.added", "connection.added"], function(event) {
    var element = event.element, gfx = event.gfx;
    eventBus.fire("interactionEvents.createHit", { element, gfx });
  });
  eventBus.on([
    "shape.changed",
    "connection.changed"
  ], LOW_PRIORITY$3, function(event) {
    var element = event.element, gfx = event.gfx;
    eventBus.fire("interactionEvents.updateHit", { element, gfx });
  });
  eventBus.on("interactionEvents.createHit", LOW_PRIORITY$3, function(event) {
    var element = event.element, gfx = event.gfx;
    self2.createDefaultHit(element, gfx);
  });
  eventBus.on("interactionEvents.updateHit", function(event) {
    var element = event.element, gfx = event.gfx;
    self2.updateDefaultHit(element, gfx);
  });
  var STROKE_HIT_STYLE = createHitStyle("djs-hit djs-hit-stroke");
  var CLICK_STROKE_HIT_STYLE = createHitStyle("djs-hit djs-hit-click-stroke");
  var ALL_HIT_STYLE = createHitStyle("djs-hit djs-hit-all");
  var HIT_TYPES = {
    "all": ALL_HIT_STYLE,
    "click-stroke": CLICK_STROKE_HIT_STYLE,
    "stroke": STROKE_HIT_STYLE
  };
  function createHitStyle(classNames, attrs) {
    attrs = assign({
      stroke: "white",
      strokeWidth: 15
    }, attrs || {});
    return styles.cls(classNames, ["no-fill", "no-border"], attrs);
  }
  function applyStyle2(hit, type) {
    var attrs = HIT_TYPES[type];
    if (!attrs) {
      throw new Error("invalid hit type <" + type + ">");
    }
    attr$1(hit, attrs);
    return hit;
  }
  function appendHit(gfx, hit) {
    append(gfx, hit);
  }
  this.removeHits = function(gfx) {
    var hits = all(".djs-hit", gfx);
    forEach(hits, remove$2);
  };
  this.createDefaultHit = function(element, gfx) {
    var waypoints = element.waypoints, isFrame = element.isFrame, boxType;
    if (waypoints) {
      return this.createWaypointsHit(gfx, waypoints);
    } else {
      boxType = isFrame ? "stroke" : "all";
      return this.createBoxHit(gfx, boxType, {
        width: element.width,
        height: element.height
      });
    }
  };
  this.createWaypointsHit = function(gfx, waypoints) {
    var hit = createLine(waypoints);
    applyStyle2(hit, "stroke");
    appendHit(gfx, hit);
    return hit;
  };
  this.createBoxHit = function(gfx, type, attrs) {
    attrs = assign({
      x: 0,
      y: 0
    }, attrs);
    var hit = create$1("rect");
    applyStyle2(hit, type);
    attr$1(hit, attrs);
    appendHit(gfx, hit);
    return hit;
  };
  this.updateDefaultHit = function(element, gfx) {
    var hit = query(".djs-hit", gfx);
    if (!hit) {
      return;
    }
    if (element.waypoints) {
      updateLine(hit, element.waypoints);
    } else {
      attr$1(hit, {
        width: element.width,
        height: element.height
      });
    }
    return hit;
  };
  this.fire = fire;
  this.triggerMouseEvent = triggerMouseEvent;
  this.mouseHandler = mouseHandler;
  this.registerEvent = registerEvent;
  this.unregisterEvent = unregisterEvent;
}
InteractionEvents.$inject = [
  "eventBus",
  "elementRegistry",
  "styles"
];
var InteractionEventsModule = {
  __init__: ["interactionEvents"],
  interactionEvents: ["type", InteractionEvents]
};
function getBBox(elements, stopRecursion) {
  stopRecursion = !!stopRecursion;
  if (!isArray$1(elements)) {
    elements = [elements];
  }
  var minX, minY, maxX, maxY;
  forEach(elements, function(element) {
    var bbox = element;
    if (element.waypoints && !stopRecursion) {
      bbox = getBBox(element.waypoints, true);
    }
    var x = bbox.x, y = bbox.y, height = bbox.height || 0, width = bbox.width || 0;
    if (x < minX || minX === void 0) {
      minX = x;
    }
    if (y < minY || minY === void 0) {
      minY = y;
    }
    if (x + width > maxX || maxX === void 0) {
      maxX = x + width;
    }
    if (y + height > maxY || maxY === void 0) {
      maxY = y + height;
    }
  });
  return {
    x: minX,
    y: minY,
    height: maxY - minY,
    width: maxX - minX
  };
}
function getType(element) {
  if ("waypoints" in element) {
    return "connection";
  }
  if ("x" in element) {
    return "shape";
  }
  return "root";
}
function isFrameElement(element) {
  return !!(element && element.isFrame);
}
var LOW_PRIORITY$2 = 500;
function Outline(eventBus, styles, elementRegistry) {
  this.offset = 6;
  var OUTLINE_STYLE = styles.cls("djs-outline", ["no-fill"]);
  var self2 = this;
  function createOutline(gfx, bounds) {
    var outline = create$1("rect");
    attr$1(outline, assign({
      x: 10,
      y: 10,
      width: 100,
      height: 100
    }, OUTLINE_STYLE));
    append(gfx, outline);
    return outline;
  }
  eventBus.on(["shape.added", "shape.changed"], LOW_PRIORITY$2, function(event) {
    var element = event.element, gfx = event.gfx;
    var outline = query(".djs-outline", gfx);
    if (!outline) {
      outline = createOutline(gfx);
    }
    self2.updateShapeOutline(outline, element);
  });
  eventBus.on(["connection.added", "connection.changed"], function(event) {
    var element = event.element, gfx = event.gfx;
    var outline = query(".djs-outline", gfx);
    if (!outline) {
      outline = createOutline(gfx);
    }
    self2.updateConnectionOutline(outline, element);
  });
}
Outline.prototype.updateShapeOutline = function(outline, element) {
  attr$1(outline, {
    x: -this.offset,
    y: -this.offset,
    width: element.width + this.offset * 2,
    height: element.height + this.offset * 2
  });
};
Outline.prototype.updateConnectionOutline = function(outline, connection) {
  var bbox = getBBox(connection);
  attr$1(outline, {
    x: bbox.x - this.offset,
    y: bbox.y - this.offset,
    width: bbox.width + this.offset * 2,
    height: bbox.height + this.offset * 2
  });
};
Outline.$inject = ["eventBus", "styles", "elementRegistry"];
var OutlineModule = {
  __init__: ["outline"],
  outline: ["type", Outline]
};
function Selection(eventBus, canvas) {
  this._eventBus = eventBus;
  this._canvas = canvas;
  this._selectedElements = [];
  var self2 = this;
  eventBus.on(["shape.remove", "connection.remove"], function(e) {
    var element = e.element;
    self2.deselect(element);
  });
  eventBus.on(["diagram.clear", "plane.set"], function(e) {
    self2.select(null);
  });
}
Selection.$inject = ["eventBus", "canvas"];
Selection.prototype.deselect = function(element) {
  var selectedElements = this._selectedElements;
  var idx = selectedElements.indexOf(element);
  if (idx !== -1) {
    var oldSelection = selectedElements.slice();
    selectedElements.splice(idx, 1);
    this._eventBus.fire("selection.changed", { oldSelection, newSelection: selectedElements });
  }
};
Selection.prototype.get = function() {
  return this._selectedElements;
};
Selection.prototype.isSelected = function(element) {
  return this._selectedElements.indexOf(element) !== -1;
};
Selection.prototype.select = function(elements, add2) {
  var selectedElements = this._selectedElements, oldSelection = selectedElements.slice();
  if (!isArray$1(elements)) {
    elements = elements ? [elements] : [];
  }
  var canvas = this._canvas;
  elements = elements.filter(function(element) {
    var plane = canvas.findPlane(element);
    return plane === canvas.getActivePlane();
  });
  if (add2) {
    forEach(elements, function(element) {
      if (selectedElements.indexOf(element) !== -1) {
        return;
      } else {
        selectedElements.push(element);
      }
    });
  } else {
    this._selectedElements = selectedElements = elements.slice();
  }
  this._eventBus.fire("selection.changed", { oldSelection, newSelection: selectedElements });
};
var MARKER_HOVER = "hover", MARKER_SELECTED = "selected";
function SelectionVisuals(events, canvas, selection, styles) {
  this._multiSelectionBox = null;
  function addMarker(e, cls) {
    canvas.addMarker(e, cls);
  }
  function removeMarker(e, cls) {
    canvas.removeMarker(e, cls);
  }
  events.on("element.hover", function(event) {
    addMarker(event.element, MARKER_HOVER);
  });
  events.on("element.out", function(event) {
    removeMarker(event.element, MARKER_HOVER);
  });
  events.on("selection.changed", function(event) {
    function deselect(s) {
      removeMarker(s, MARKER_SELECTED);
    }
    function select(s) {
      addMarker(s, MARKER_SELECTED);
    }
    var oldSelection = event.oldSelection, newSelection = event.newSelection;
    forEach(oldSelection, function(e) {
      if (newSelection.indexOf(e) === -1) {
        deselect(e);
      }
    });
    forEach(newSelection, function(e) {
      if (oldSelection.indexOf(e) === -1) {
        select(e);
      }
    });
  });
}
SelectionVisuals.$inject = [
  "eventBus",
  "canvas",
  "selection",
  "styles"
];
function SelectionBehavior(eventBus, selection, canvas, elementRegistry) {
  eventBus.on("create.end", 500, function(event) {
    var context = event.context, canExecute = context.canExecute, elements = context.elements, hints = context.hints || {}, autoSelect = hints.autoSelect;
    if (canExecute) {
      if (autoSelect === false) {
        return;
      }
      if (isArray$1(autoSelect)) {
        selection.select(autoSelect);
      } else {
        selection.select(elements.filter(isShown));
      }
    }
  });
  eventBus.on("connect.end", 500, function(event) {
    var context = event.context, canExecute = context.canExecute, hover = context.hover;
    if (canExecute && hover) {
      selection.select(hover);
    }
  });
  eventBus.on("shape.move.end", 500, function(event) {
    var previousSelection = event.previousSelection || [];
    var shape = elementRegistry.get(event.context.shape.id);
    var isSelected = find(previousSelection, function(selectedShape) {
      return shape.id === selectedShape.id;
    });
    if (!isSelected) {
      selection.select(shape);
    }
  });
  eventBus.on("element.click", function(event) {
    if (!isPrimaryButton(event)) {
      return;
    }
    var element = event.element;
    if (element === canvas.getRootElement()) {
      element = null;
    }
    var isSelected = selection.isSelected(element), isMultiSelect = selection.get().length > 1;
    var add2 = hasPrimaryModifier(event) || hasSecondaryModifier(event);
    if (isSelected && isMultiSelect) {
      if (add2) {
        return selection.deselect(element);
      } else {
        return selection.select(element);
      }
    } else if (!isSelected) {
      selection.select(element, add2);
    } else {
      selection.deselect(element);
    }
  });
}
SelectionBehavior.$inject = [
  "eventBus",
  "selection",
  "canvas",
  "elementRegistry"
];
function isShown(element) {
  return !element.hidden;
}
var SelectionModule = {
  __init__: ["selectionVisuals", "selectionBehavior"],
  __depends__: [
    InteractionEventsModule,
    OutlineModule
  ],
  selection: ["type", Selection],
  selectionVisuals: ["type", SelectionVisuals],
  selectionBehavior: ["type", SelectionBehavior]
};
function IdGenerator(prefix2) {
  this._counter = 0;
  this._prefix = (prefix2 ? prefix2 + "-" : "") + Math.floor(Math.random() * 1e9) + "-";
}
IdGenerator.prototype.next = function() {
  return this._prefix + ++this._counter;
};
var ids = new IdGenerator("ov");
var LOW_PRIORITY$1 = 500;
function Overlays(config, eventBus, canvas, elementRegistry) {
  this._eventBus = eventBus;
  this._canvas = canvas;
  this._elementRegistry = elementRegistry;
  this._ids = ids;
  this._overlayDefaults = assign({
    show: null,
    scale: true
  }, config && config.defaults);
  this._overlays = {};
  this._overlayContainers = [];
  this._overlayRoot = createRoot(canvas.getContainer());
  this._init();
}
Overlays.$inject = [
  "config.overlays",
  "eventBus",
  "canvas",
  "elementRegistry"
];
Overlays.prototype.get = function(search) {
  if (isString(search)) {
    search = { id: search };
  }
  if (isString(search.element)) {
    search.element = this._elementRegistry.get(search.element);
  }
  if (search.element) {
    var container = this._getOverlayContainer(search.element, true);
    if (container) {
      return search.type ? filter(container.overlays, matchPattern({ type: search.type })) : container.overlays.slice();
    } else {
      return [];
    }
  } else if (search.type) {
    return filter(this._overlays, matchPattern({ type: search.type }));
  } else {
    return search.id ? this._overlays[search.id] : null;
  }
};
Overlays.prototype.add = function(element, type, overlay) {
  if (isObject(type)) {
    overlay = type;
    type = null;
  }
  if (!element.id) {
    element = this._elementRegistry.get(element);
  }
  if (!overlay.position) {
    throw new Error("must specifiy overlay position");
  }
  if (!overlay.html) {
    throw new Error("must specifiy overlay html");
  }
  if (!element) {
    throw new Error("invalid element specified");
  }
  var id2 = this._ids.next();
  overlay = assign({}, this._overlayDefaults, overlay, {
    id: id2,
    type,
    element,
    html: overlay.html
  });
  this._addOverlay(overlay);
  return id2;
};
Overlays.prototype.remove = function(filter2) {
  var overlays = this.get(filter2) || [];
  if (!isArray$1(overlays)) {
    overlays = [overlays];
  }
  var self2 = this;
  forEach(overlays, function(overlay) {
    var container = self2._getOverlayContainer(overlay.element, true);
    if (overlay) {
      remove$1(overlay.html);
      remove$1(overlay.htmlContainer);
      delete overlay.htmlContainer;
      delete overlay.element;
      delete self2._overlays[overlay.id];
    }
    if (container) {
      var idx = container.overlays.indexOf(overlay);
      if (idx !== -1) {
        container.overlays.splice(idx, 1);
      }
    }
  });
};
Overlays.prototype.show = function() {
  setVisible(this._overlayRoot);
};
Overlays.prototype.hide = function() {
  setVisible(this._overlayRoot, false);
};
Overlays.prototype.clear = function() {
  this._overlays = {};
  this._overlayContainers = [];
  clear(this._overlayRoot);
};
Overlays.prototype._updateOverlayContainer = function(container) {
  var element = container.element, html = container.html;
  var x = element.x, y = element.y;
  if (element.waypoints) {
    var bbox = getBBox(element);
    x = bbox.x;
    y = bbox.y;
  }
  setPosition(html, x, y);
  attr(container.html, "data-container-id", element.id);
};
Overlays.prototype._updateOverlay = function(overlay) {
  var position = overlay.position, htmlContainer = overlay.htmlContainer, element = overlay.element;
  var left = position.left, top = position.top;
  if (position.right !== void 0) {
    var width;
    if (element.waypoints) {
      width = getBBox(element).width;
    } else {
      width = element.width;
    }
    left = position.right * -1 + width;
  }
  if (position.bottom !== void 0) {
    var height;
    if (element.waypoints) {
      height = getBBox(element).height;
    } else {
      height = element.height;
    }
    top = position.bottom * -1 + height;
  }
  setPosition(htmlContainer, left || 0, top || 0);
};
Overlays.prototype._createOverlayContainer = function(element) {
  var html = domify('<div class="djs-overlays" style="position: absolute" />');
  this._overlayRoot.appendChild(html);
  var container = {
    html,
    element,
    overlays: []
  };
  this._updateOverlayContainer(container);
  this._overlayContainers.push(container);
  return container;
};
Overlays.prototype._updateRoot = function(viewbox) {
  var scale = viewbox.scale || 1;
  var matrix = "matrix(" + [
    scale,
    0,
    0,
    scale,
    -1 * viewbox.x * scale,
    -1 * viewbox.y * scale
  ].join(",") + ")";
  setTransform(this._overlayRoot, matrix);
};
Overlays.prototype._getOverlayContainer = function(element, raw) {
  var container = find(this._overlayContainers, function(c) {
    return c.element === element;
  });
  if (!container && !raw) {
    return this._createOverlayContainer(element);
  }
  return container;
};
Overlays.prototype._addOverlay = function(overlay) {
  var id2 = overlay.id, element = overlay.element, html = overlay.html, htmlContainer, overlayContainer;
  if (html.get && html.constructor.prototype.jquery) {
    html = html.get(0);
  }
  if (isString(html)) {
    html = domify(html);
  }
  overlayContainer = this._getOverlayContainer(element);
  htmlContainer = domify('<div class="djs-overlay" data-overlay-id="' + id2 + '" style="position: absolute">');
  htmlContainer.appendChild(html);
  if (overlay.type) {
    classes(htmlContainer).add("djs-overlay-" + overlay.type);
  }
  var plane = this._canvas.findPlane(element);
  var activePlane = this._canvas.getActivePlane();
  overlay.plane = plane;
  if (plane !== activePlane) {
    setVisible(htmlContainer, false);
  }
  overlay.htmlContainer = htmlContainer;
  overlayContainer.overlays.push(overlay);
  overlayContainer.html.appendChild(htmlContainer);
  this._overlays[id2] = overlay;
  this._updateOverlay(overlay);
  this._updateOverlayVisibilty(overlay, this._canvas.viewbox());
};
Overlays.prototype._updateOverlayVisibilty = function(overlay, viewbox) {
  var show = overlay.show, plane = overlay.plane, minZoom = show && show.minZoom, maxZoom = show && show.maxZoom, htmlContainer = overlay.htmlContainer, activePlane = this._canvas.getActivePlane(), visible = true;
  if (plane !== activePlane) {
    visible = false;
  } else if (show) {
    if (isDefined(minZoom) && minZoom > viewbox.scale || isDefined(maxZoom) && maxZoom < viewbox.scale) {
      visible = false;
    }
  }
  setVisible(htmlContainer, visible);
  this._updateOverlayScale(overlay, viewbox);
};
Overlays.prototype._updateOverlayScale = function(overlay, viewbox) {
  var shouldScale = overlay.scale, minScale, maxScale, htmlContainer = overlay.htmlContainer;
  var scale, transform2 = "";
  if (shouldScale !== true) {
    if (shouldScale === false) {
      minScale = 1;
      maxScale = 1;
    } else {
      minScale = shouldScale.min;
      maxScale = shouldScale.max;
    }
    if (isDefined(minScale) && viewbox.scale < minScale) {
      scale = (1 / viewbox.scale || 1) * minScale;
    }
    if (isDefined(maxScale) && viewbox.scale > maxScale) {
      scale = (1 / viewbox.scale || 1) * maxScale;
    }
  }
  if (isDefined(scale)) {
    transform2 = "scale(" + scale + "," + scale + ")";
  }
  setTransform(htmlContainer, transform2);
};
Overlays.prototype._updateOverlaysVisibilty = function(viewbox) {
  var self2 = this;
  forEach(this._overlays, function(overlay) {
    self2._updateOverlayVisibilty(overlay, viewbox);
  });
};
Overlays.prototype._init = function() {
  var eventBus = this._eventBus;
  var self2 = this;
  function updateViewbox(viewbox) {
    self2._updateRoot(viewbox);
    self2._updateOverlaysVisibilty(viewbox);
    self2.show();
  }
  eventBus.on("canvas.viewbox.changing", function(event) {
    self2.hide();
  });
  eventBus.on("canvas.viewbox.changed", function(event) {
    updateViewbox(event.viewbox);
  });
  eventBus.on(["shape.remove", "connection.remove"], function(e) {
    var element = e.element;
    var overlays = self2.get({ element });
    forEach(overlays, function(o) {
      self2.remove(o.id);
    });
    var container = self2._getOverlayContainer(element);
    if (container) {
      remove$1(container.html);
      var i = self2._overlayContainers.indexOf(container);
      if (i !== -1) {
        self2._overlayContainers.splice(i, 1);
      }
    }
  });
  eventBus.on("element.changed", LOW_PRIORITY$1, function(e) {
    var element = e.element;
    var container = self2._getOverlayContainer(element, true);
    if (container) {
      forEach(container.overlays, function(overlay) {
        self2._updateOverlay(overlay);
      });
      self2._updateOverlayContainer(container);
    }
  });
  eventBus.on("element.marker.update", function(e) {
    var container = self2._getOverlayContainer(e.element, true);
    if (container) {
      classes(container.html)[e.add ? "add" : "remove"](e.marker);
    }
  });
  eventBus.on("plane.set", function(e) {
    forEach(self2._overlays, function(el) {
      setVisible(el.htmlContainer, el.plane === e.plane);
    });
  });
  eventBus.on("diagram.clear", this.clear, this);
};
function createRoot(parentNode) {
  var root = domify('<div class="djs-overlay-container" style="position: absolute; width: 0; height: 0;" />');
  parentNode.insertBefore(root, parentNode.firstChild);
  return root;
}
function setPosition(el, x, y) {
  assign(el.style, { left: x + "px", top: y + "px" });
}
function setVisible(el, visible) {
  el.style.display = visible === false ? "none" : "";
}
function setTransform(el, transform2) {
  el.style["transform-origin"] = "top left";
  ["", "-ms-", "-webkit-"].forEach(function(prefix2) {
    el.style[prefix2 + "transform"] = transform2;
  });
}
var OverlaysModule = {
  __init__: ["overlays"],
  overlays: ["type", Overlays]
};
var CLASS_PATTERN = /^class /;
function isClass(fn) {
  return CLASS_PATTERN.test(fn.toString());
}
function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}
function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function annotate() {
  var args = Array.prototype.slice.call(arguments);
  if (args.length === 1 && isArray(args[0])) {
    args = args[0];
  }
  var fn = args.pop();
  fn.$inject = args;
  return fn;
}
var CONSTRUCTOR_ARGS = /constructor\s*[^(]*\(\s*([^)]*)\)/m;
var FN_ARGS = /^(?:async )?(?:function\s*)?[^(]*\(\s*([^)]*)\)/m;
var FN_ARG = /\/\*([^*]*)\*\//m;
function parseAnnotations(fn) {
  if (typeof fn !== "function") {
    throw new Error('Cannot annotate "' + fn + '". Expected a function!');
  }
  var match2 = fn.toString().match(isClass(fn) ? CONSTRUCTOR_ARGS : FN_ARGS);
  if (!match2) {
    return [];
  }
  return match2[1] && match2[1].split(",").map(function(arg) {
    match2 = arg.match(FN_ARG);
    return match2 ? match2[1].trim() : arg.trim();
  }) || [];
}
function Module() {
  var providers = [];
  this.factory = function(name2, factory) {
    providers.push([name2, "factory", factory]);
    return this;
  };
  this.value = function(name2, value) {
    providers.push([name2, "value", value]);
    return this;
  };
  this.type = function(name2, type) {
    providers.push([name2, "type", type]);
    return this;
  };
  this.forEach = function(iterator) {
    providers.forEach(iterator);
  };
}
function Injector(modules, parent) {
  parent = parent || {
    get: function(name2, strict) {
      currentlyResolving.push(name2);
      if (strict === false) {
        return null;
      } else {
        throw error2('No provider for "' + name2 + '"!');
      }
    }
  };
  var currentlyResolving = [];
  var providers = this._providers = Object.create(parent._providers || null);
  var instances = this._instances = /* @__PURE__ */ Object.create(null);
  var self2 = instances.injector = this;
  var error2 = function(msg) {
    var stack = currentlyResolving.join(" -> ");
    currentlyResolving.length = 0;
    return new Error(stack ? msg + " (Resolving: " + stack + ")" : msg);
  };
  var get2 = function(name2, strict) {
    if (!providers[name2] && name2.indexOf(".") !== -1) {
      var parts = name2.split(".");
      var pivot = get2(parts.shift());
      while (parts.length) {
        pivot = pivot[parts.shift()];
      }
      return pivot;
    }
    if (hasOwnProp(instances, name2)) {
      return instances[name2];
    }
    if (hasOwnProp(providers, name2)) {
      if (currentlyResolving.indexOf(name2) !== -1) {
        currentlyResolving.push(name2);
        throw error2("Cannot resolve circular dependency!");
      }
      currentlyResolving.push(name2);
      instances[name2] = providers[name2][0](providers[name2][1]);
      currentlyResolving.pop();
      return instances[name2];
    }
    return parent.get(name2, strict);
  };
  var fnDef = function(fn, locals) {
    if (typeof locals === "undefined") {
      locals = {};
    }
    if (typeof fn !== "function") {
      if (isArray(fn)) {
        fn = annotate(fn.slice());
      } else {
        throw new Error('Cannot invoke "' + fn + '". Expected a function!');
      }
    }
    var inject = fn.$inject || parseAnnotations(fn);
    var dependencies = inject.map(function(dep) {
      if (hasOwnProp(locals, dep)) {
        return locals[dep];
      } else {
        return get2(dep);
      }
    });
    return {
      fn,
      dependencies
    };
  };
  var instantiate = function(Type) {
    var def = fnDef(Type);
    var fn = def.fn, dependencies = def.dependencies;
    var Constructor = Function.prototype.bind.apply(fn, [null].concat(dependencies));
    return new Constructor();
  };
  var invoke = function(func, context, locals) {
    var def = fnDef(func, locals);
    var fn = def.fn, dependencies = def.dependencies;
    return fn.apply(context, dependencies);
  };
  var createPrivateInjectorFactory = function(privateChildInjector) {
    return annotate(function(key) {
      return privateChildInjector.get(key);
    });
  };
  var createChild = function(modules2, forceNewInstances) {
    if (forceNewInstances && forceNewInstances.length) {
      var fromParentModule = /* @__PURE__ */ Object.create(null);
      var matchedScopes = /* @__PURE__ */ Object.create(null);
      var privateInjectorsCache = [];
      var privateChildInjectors = [];
      var privateChildFactories = [];
      var provider;
      var cacheIdx;
      var privateChildInjector;
      var privateChildInjectorFactory;
      for (var name2 in providers) {
        provider = providers[name2];
        if (forceNewInstances.indexOf(name2) !== -1) {
          if (provider[2] === "private") {
            cacheIdx = privateInjectorsCache.indexOf(provider[3]);
            if (cacheIdx === -1) {
              privateChildInjector = provider[3].createChild([], forceNewInstances);
              privateChildInjectorFactory = createPrivateInjectorFactory(privateChildInjector);
              privateInjectorsCache.push(provider[3]);
              privateChildInjectors.push(privateChildInjector);
              privateChildFactories.push(privateChildInjectorFactory);
              fromParentModule[name2] = [privateChildInjectorFactory, name2, "private", privateChildInjector];
            } else {
              fromParentModule[name2] = [privateChildFactories[cacheIdx], name2, "private", privateChildInjectors[cacheIdx]];
            }
          } else {
            fromParentModule[name2] = [provider[2], provider[1]];
          }
          matchedScopes[name2] = true;
        }
        if ((provider[2] === "factory" || provider[2] === "type") && provider[1].$scope) {
          forceNewInstances.forEach(function(scope) {
            if (provider[1].$scope.indexOf(scope) !== -1) {
              fromParentModule[name2] = [provider[2], provider[1]];
              matchedScopes[scope] = true;
            }
          });
        }
      }
      forceNewInstances.forEach(function(scope) {
        if (!matchedScopes[scope]) {
          throw new Error('No provider for "' + scope + '". Cannot use provider from the parent!');
        }
      });
      modules2.unshift(fromParentModule);
    }
    return new Injector(modules2, self2);
  };
  var factoryMap = {
    factory: invoke,
    type: instantiate,
    value: function(value) {
      return value;
    }
  };
  modules.forEach(function(module) {
    function arrayUnwrap(type, value) {
      if (type !== "value" && isArray(value)) {
        value = annotate(value.slice());
      }
      return value;
    }
    if (module instanceof Module) {
      module.forEach(function(provider) {
        var name2 = provider[0];
        var type = provider[1];
        var value = provider[2];
        providers[name2] = [factoryMap[type], arrayUnwrap(type, value), type];
      });
    } else if (typeof module === "object") {
      if (module.__exports__) {
        var clonedModule = Object.keys(module).reduce(function(m, key) {
          if (key.substring(0, 2) !== "__") {
            m[key] = module[key];
          }
          return m;
        }, /* @__PURE__ */ Object.create(null));
        var privateInjector = new Injector((module.__modules__ || []).concat([clonedModule]), self2);
        var getFromPrivateInjector = annotate(function(key) {
          return privateInjector.get(key);
        });
        module.__exports__.forEach(function(key) {
          providers[key] = [getFromPrivateInjector, key, "private", privateInjector];
        });
      } else {
        Object.keys(module).forEach(function(name2) {
          if (module[name2][2] === "private") {
            providers[name2] = module[name2];
            return;
          }
          var type = module[name2][0];
          var value = module[name2][1];
          providers[name2] = [factoryMap[type], arrayUnwrap(type, value), type];
        });
      }
    }
  });
  this.get = get2;
  this.invoke = invoke;
  this.instantiate = instantiate;
  this.createChild = createChild;
}
var DEFAULT_RENDER_PRIORITY = 1;
function DefaultRenderer(eventBus, styles) {
  BaseRenderer.call(this, eventBus, DEFAULT_RENDER_PRIORITY);
  this.CONNECTION_STYLE = styles.style(["no-fill"], { strokeWidth: 5, stroke: "fuchsia" });
  this.SHAPE_STYLE = styles.style({ fill: "white", stroke: "fuchsia", strokeWidth: 2 });
  this.FRAME_STYLE = styles.style(["no-fill"], { stroke: "fuchsia", strokeDasharray: 4, strokeWidth: 2 });
}
inherits$1(DefaultRenderer, BaseRenderer);
DefaultRenderer.prototype.canRender = function() {
  return true;
};
DefaultRenderer.prototype.drawShape = function drawShape(visuals, element, attrs) {
  var rect = create$1("rect");
  attr$1(rect, {
    x: 0,
    y: 0,
    width: element.width || 0,
    height: element.height || 0
  });
  if (isFrameElement(element)) {
    attr$1(rect, assign({}, this.FRAME_STYLE, attrs || {}));
  } else {
    attr$1(rect, assign({}, this.SHAPE_STYLE, attrs || {}));
  }
  append(visuals, rect);
  return rect;
};
DefaultRenderer.prototype.drawConnection = function drawConnection(visuals, connection, attrs) {
  var line = createLine(connection.waypoints, assign({}, this.CONNECTION_STYLE, attrs || {}));
  append(visuals, line);
  return line;
};
DefaultRenderer.prototype.getShapePath = function getShapePath(shape) {
  var x = shape.x, y = shape.y, width = shape.width, height = shape.height;
  var shapePath = [
    ["M", x, y],
    ["l", width, 0],
    ["l", 0, height],
    ["l", -width, 0],
    ["z"]
  ];
  return componentsToPath(shapePath);
};
DefaultRenderer.prototype.getConnectionPath = function getConnectionPath(connection) {
  var waypoints = connection.waypoints;
  var idx, point, connectionPath = [];
  for (idx = 0; point = waypoints[idx]; idx++) {
    point = point.original || point;
    connectionPath.push([idx === 0 ? "M" : "L", point.x, point.y]);
  }
  return componentsToPath(connectionPath);
};
DefaultRenderer.$inject = ["eventBus", "styles"];
function Styles() {
  var defaultTraits = {
    "no-fill": {
      fill: "none"
    },
    "no-border": {
      strokeOpacity: 0
    },
    "no-events": {
      pointerEvents: "none"
    }
  };
  var self2 = this;
  this.cls = function(className, traits, additionalAttrs) {
    var attrs = this.style(traits, additionalAttrs);
    return assign(attrs, { "class": className });
  };
  this.style = function(traits, additionalAttrs) {
    if (!isArray$1(traits) && !additionalAttrs) {
      additionalAttrs = traits;
      traits = [];
    }
    var attrs = reduce(traits, function(attrs2, t) {
      return assign(attrs2, defaultTraits[t] || {});
    }, {});
    return additionalAttrs ? assign(attrs, additionalAttrs) : attrs;
  };
  this.computeStyle = function(custom, traits, defaultStyles) {
    if (!isArray$1(traits)) {
      defaultStyles = traits;
      traits = [];
    }
    return self2.style(traits || [], assign({}, defaultStyles, custom || {}));
  };
}
var DrawModule = {
  __init__: ["defaultRenderer"],
  defaultRenderer: ["type", DefaultRenderer],
  styles: ["type", Styles]
};
function remove(collection2, element) {
  if (!collection2 || !element) {
    return -1;
  }
  var idx = collection2.indexOf(element);
  if (idx !== -1) {
    collection2.splice(idx, 1);
  }
  return idx;
}
function add(collection2, element, idx) {
  if (!collection2 || !element) {
    return;
  }
  if (typeof idx !== "number") {
    idx = -1;
  }
  var currentIdx = collection2.indexOf(element);
  if (currentIdx !== -1) {
    if (currentIdx === idx) {
      return;
    } else {
      if (idx !== -1) {
        collection2.splice(currentIdx, 1);
      } else {
        return;
      }
    }
  }
  if (idx !== -1) {
    collection2.splice(idx, 0, element);
  } else {
    collection2.push(element);
  }
}
function round(number, resolution) {
  return Math.round(number * resolution) / resolution;
}
function ensurePx(number) {
  return isNumber(number) ? number + "px" : number;
}
function findRoot(element) {
  while (element.parent) {
    element = element.parent;
  }
  return element;
}
function createContainer(options) {
  options = assign({}, { width: "100%", height: "100%" }, options);
  var container = options.container || document.body;
  var parent = document.createElement("div");
  parent.setAttribute("class", "djs-container");
  assign(parent.style, {
    position: "relative",
    overflow: "hidden",
    width: ensurePx(options.width),
    height: ensurePx(options.height)
  });
  container.appendChild(parent);
  return parent;
}
function createGroup(parent, cls, childIndex) {
  var group = create$1("g");
  classes$1(group).add(cls);
  var index2 = childIndex !== void 0 ? childIndex : parent.childNodes.length - 1;
  parent.insertBefore(group, parent.childNodes[index2] || null);
  return group;
}
var BASE_LAYER = "base";
var HIDDEN_MARKER = "djs-element-hidden";
var PLANE_LAYER_INDEX = 0;
var UTILITY_LAYER_INDEX = 1;
var REQUIRED_MODEL_ATTRS = {
  shape: ["x", "y", "width", "height"],
  connection: ["waypoints"]
};
function Canvas(config, eventBus, graphicsFactory, elementRegistry) {
  this._eventBus = eventBus;
  this._elementRegistry = elementRegistry;
  this._graphicsFactory = graphicsFactory;
  this._init(config || {});
}
Canvas.$inject = [
  "config.canvas",
  "eventBus",
  "graphicsFactory",
  "elementRegistry"
];
Canvas.prototype._init = function(config) {
  var eventBus = this._eventBus;
  var container = this._container = createContainer(config);
  var svg = this._svg = create$1("svg");
  attr$1(svg, { width: "100%", height: "100%" });
  append(container, svg);
  var viewport = this._viewport = createGroup(svg, "viewport");
  this._layers = {};
  this._planes = {};
  if (config.deferUpdate !== false) {
    this._viewboxChanged = debounce(bind$2(this._viewboxChanged, this), 300);
  }
  eventBus.on("diagram.init", function() {
    eventBus.fire("canvas.init", {
      svg,
      viewport
    });
  }, this);
  eventBus.on([
    "shape.added",
    "connection.added",
    "shape.removed",
    "connection.removed",
    "elements.changed",
    "plane.set"
  ], function() {
    delete this._cachedViewbox;
  }, this);
  eventBus.on("diagram.destroy", 500, this._destroy, this);
  eventBus.on("diagram.clear", 500, this._clear, this);
};
Canvas.prototype._destroy = function(emit) {
  this._eventBus.fire("canvas.destroy", {
    svg: this._svg,
    viewport: this._viewport
  });
  var parent = this._container.parentNode;
  if (parent) {
    parent.removeChild(this._container);
  }
  delete this._svg;
  delete this._container;
  delete this._layers;
  delete this._planes;
  delete this._activePlane;
  delete this._viewport;
};
Canvas.prototype._clear = function() {
  var self2 = this;
  var allElements = this._elementRegistry.getAll();
  allElements.forEach(function(element) {
    var type = getType(element);
    if (type === "root") {
      self2.setRootElementForPlane(null, self2.findPlane(element), true);
    } else {
      self2._removeElement(element, type);
    }
  });
  this._activePlane = null;
  this._planes = {};
  delete this._cachedViewbox;
};
Canvas.prototype.getDefaultLayer = function() {
  return this.getLayer(BASE_LAYER, PLANE_LAYER_INDEX);
};
Canvas.prototype.getLayer = function(name2, index2) {
  if (!name2) {
    throw new Error("must specify a name");
  }
  var layer = this._layers[name2];
  if (!layer) {
    layer = this._layers[name2] = this._createLayer(name2, index2);
  }
  if (typeof index2 !== "undefined" && layer.index !== index2) {
    throw new Error("layer <" + name2 + "> already created at index <" + index2 + ">");
  }
  return layer.group;
};
Canvas.prototype._createLayer = function(name2, index2) {
  if (typeof index2 === "undefined") {
    index2 = UTILITY_LAYER_INDEX;
  }
  var childIndex = reduce(this._layers, function(childIndex2, layer) {
    if (index2 >= layer.index) {
      childIndex2++;
    }
    return childIndex2;
  }, 0);
  return {
    group: createGroup(this._viewport, "layer-" + name2, childIndex),
    index: index2
  };
};
Canvas.prototype.getPlane = function(name2) {
  if (!name2) {
    throw new Error("must specify a name");
  }
  return this._planes[name2];
};
Canvas.prototype.createPlane = function(name2, rootElement) {
  if (!name2) {
    throw new Error("must specify a name");
  }
  if (this._planes[name2]) {
    throw new Error("plane " + name2 + " already exists");
  }
  if (!rootElement) {
    rootElement = {
      id: "__implicitroot" + name2,
      children: [],
      isImplicit: true
    };
  }
  var svgLayer = this.getLayer(name2, PLANE_LAYER_INDEX);
  classes$1(svgLayer).add(HIDDEN_MARKER);
  var plane = this._planes[name2] = {
    layer: svgLayer,
    name: name2,
    rootElement: null
  };
  this.setRootElementForPlane(rootElement, plane);
  return plane;
};
Canvas.prototype.setActivePlane = function(plane) {
  if (!plane) {
    throw new Error("must specify a plane");
  }
  if (typeof plane === "string") {
    plane = this.getPlane(plane);
  }
  if (this._activePlane) {
    classes$1(this._activePlane.layer).add(HIDDEN_MARKER);
  }
  this._activePlane = plane;
  classes$1(plane.layer).remove(HIDDEN_MARKER);
  if (plane.rootElement) {
    this._elementRegistry.updateGraphics(plane.rootElement, this._svg, true);
  }
  this._eventBus.fire("plane.set", { plane });
  return plane;
};
Canvas.prototype.getActiveLayer = function() {
  return this.getActivePlane().layer;
};
Canvas.prototype.getActivePlane = function() {
  var plane = this._activePlane;
  if (!plane) {
    plane = this.createPlane(BASE_LAYER);
    this.setActivePlane(BASE_LAYER);
  }
  return plane;
};
Canvas.prototype.findPlane = function(element) {
  if (typeof element === "string") {
    element = this._elementRegistry.get(element);
  }
  var root = findRoot(element);
  return find(this._planes, function(plane) {
    return plane.rootElement === root;
  });
};
Canvas.prototype.getContainer = function() {
  return this._container;
};
Canvas.prototype._updateMarker = function(element, marker, add2) {
  var container;
  if (!element.id) {
    element = this._elementRegistry.get(element);
  }
  container = this._elementRegistry._elements[element.id];
  if (!container) {
    return;
  }
  forEach([container.gfx, container.secondaryGfx], function(gfx) {
    if (gfx) {
      if (add2) {
        classes$1(gfx).add(marker);
      } else {
        classes$1(gfx).remove(marker);
      }
    }
  });
  this._eventBus.fire("element.marker.update", { element, gfx: container.gfx, marker, add: !!add2 });
};
Canvas.prototype.addMarker = function(element, marker) {
  this._updateMarker(element, marker, true);
};
Canvas.prototype.removeMarker = function(element, marker) {
  this._updateMarker(element, marker, false);
};
Canvas.prototype.hasMarker = function(element, marker) {
  if (!element.id) {
    element = this._elementRegistry.get(element);
  }
  var gfx = this.getGraphics(element);
  return classes$1(gfx).has(marker);
};
Canvas.prototype.toggleMarker = function(element, marker) {
  if (this.hasMarker(element, marker)) {
    this.removeMarker(element, marker);
  } else {
    this.addMarker(element, marker);
  }
};
Canvas.prototype.getRootElement = function() {
  var plane = this.getActivePlane();
  return plane.rootElement;
};
Canvas.prototype.setRootElement = function(element, override) {
  var activePlane = this._activePlane;
  if (activePlane) {
    return this.setRootElementForPlane(element, activePlane, override);
  } else {
    var basePlane = this.createPlane(BASE_LAYER, element);
    this.setActivePlane(basePlane);
    return basePlane.rootElement;
  }
};
Canvas.prototype.setRootElementForPlane = function(element, plane, override) {
  if (typeof plane === "string") {
    plane = this.getPlane(plane);
  }
  if (element) {
    this._ensureValid("root", element);
  }
  var currentRoot = plane.rootElement, elementRegistry = this._elementRegistry, eventBus = this._eventBus;
  if (currentRoot) {
    if (!override) {
      throw new Error("rootElement already set, need to specify override");
    }
    eventBus.fire("root.remove", { element: currentRoot });
    eventBus.fire("root.removed", { element: currentRoot });
    elementRegistry.remove(currentRoot);
  }
  if (element) {
    var gfx = plane.layer;
    eventBus.fire("root.add", { element });
    elementRegistry.add(element, gfx);
    eventBus.fire("root.added", { element, gfx });
    if (plane === this._activePlane) {
      this._elementRegistry.updateGraphics(element, this._svg, true);
    }
  }
  plane.rootElement = element;
  return element;
};
Canvas.prototype._ensureValid = function(type, element) {
  if (!element.id) {
    throw new Error("element must have an id");
  }
  if (this._elementRegistry.get(element.id)) {
    throw new Error("element with id " + element.id + " already exists");
  }
  var requiredAttrs = REQUIRED_MODEL_ATTRS[type];
  var valid = every(requiredAttrs, function(attr2) {
    return typeof element[attr2] !== "undefined";
  });
  if (!valid) {
    throw new Error("must supply { " + requiredAttrs.join(", ") + " } with " + type);
  }
};
Canvas.prototype._setParent = function(element, parent, parentIndex) {
  add(parent.children, element, parentIndex);
  element.parent = parent;
};
Canvas.prototype._addElement = function(type, element, parent, parentIndex) {
  parent = parent || this.getRootElement();
  var eventBus = this._eventBus, graphicsFactory = this._graphicsFactory;
  this._ensureValid(type, element);
  eventBus.fire(type + ".add", { element, parent });
  this._setParent(element, parent, parentIndex);
  var gfx = graphicsFactory.create(type, element, parentIndex);
  this._elementRegistry.add(element, gfx);
  graphicsFactory.update(type, element, gfx);
  eventBus.fire(type + ".added", { element, gfx });
  return element;
};
Canvas.prototype.addShape = function(shape, parent, parentIndex) {
  return this._addElement("shape", shape, parent, parentIndex);
};
Canvas.prototype.addConnection = function(connection, parent, parentIndex) {
  return this._addElement("connection", connection, parent, parentIndex);
};
Canvas.prototype._removeElement = function(element, type) {
  var elementRegistry = this._elementRegistry, graphicsFactory = this._graphicsFactory, eventBus = this._eventBus;
  element = elementRegistry.get(element.id || element);
  if (!element) {
    return;
  }
  eventBus.fire(type + ".remove", { element });
  graphicsFactory.remove(element);
  remove(element.parent && element.parent.children, element);
  element.parent = null;
  eventBus.fire(type + ".removed", { element });
  elementRegistry.remove(element);
  return element;
};
Canvas.prototype.removeShape = function(shape) {
  return this._removeElement(shape, "shape");
};
Canvas.prototype.removeConnection = function(connection) {
  return this._removeElement(connection, "connection");
};
Canvas.prototype.getGraphics = function(element, secondary) {
  return this._elementRegistry.getGraphics(element, secondary);
};
Canvas.prototype._changeViewbox = function(changeFn) {
  this._eventBus.fire("canvas.viewbox.changing");
  changeFn.apply(this);
  this._cachedViewbox = null;
  this._viewboxChanged();
};
Canvas.prototype._viewboxChanged = function() {
  this._eventBus.fire("canvas.viewbox.changed", { viewbox: this.viewbox() });
};
Canvas.prototype.viewbox = function(box) {
  if (box === void 0 && this._cachedViewbox) {
    return this._cachedViewbox;
  }
  var viewport = this._viewport, innerBox, outerBox = this.getSize(), matrix, transform2, scale, x, y;
  if (!box) {
    innerBox = this._activePlane && this._activePlane.layer.getBBox() || {};
    transform2 = transform$1(viewport);
    matrix = transform2 ? transform2.matrix : createMatrix();
    scale = round(matrix.a, 1e3);
    x = round(-matrix.e || 0, 1e3);
    y = round(-matrix.f || 0, 1e3);
    box = this._cachedViewbox = {
      x: x ? x / scale : 0,
      y: y ? y / scale : 0,
      width: outerBox.width / scale,
      height: outerBox.height / scale,
      scale,
      inner: {
        width: innerBox.width || 0,
        height: innerBox.height || 0,
        x: innerBox.x || 0,
        y: innerBox.y || 0
      },
      outer: outerBox
    };
    return box;
  } else {
    this._changeViewbox(function() {
      scale = Math.min(outerBox.width / box.width, outerBox.height / box.height);
      var matrix2 = this._svg.createSVGMatrix().scale(scale).translate(-box.x, -box.y);
      transform$1(viewport, matrix2);
    });
  }
  return box;
};
Canvas.prototype.scroll = function(delta2) {
  var node2 = this._viewport;
  var matrix = node2.getCTM();
  if (delta2) {
    this._changeViewbox(function() {
      delta2 = assign({ dx: 0, dy: 0 }, delta2 || {});
      matrix = this._svg.createSVGMatrix().translate(delta2.dx, delta2.dy).multiply(matrix);
      setCTM(node2, matrix);
    });
  }
  return { x: matrix.e, y: matrix.f };
};
Canvas.prototype.scrollToElement = function(element, padding) {
  var defaultPadding = 100;
  if (typeof element === "string") {
    element = this._elementRegistry.get(element);
  }
  var targetPlane = this.findPlane(element);
  if (targetPlane !== this._activePlane) {
    this.setActivePlane(targetPlane);
  }
  if (!padding) {
    padding = {};
  }
  if (typeof padding === "number") {
    defaultPadding = padding;
  }
  padding = {
    top: padding.top || defaultPadding,
    right: padding.right || defaultPadding,
    bottom: padding.bottom || defaultPadding,
    left: padding.left || defaultPadding
  };
  var elementBounds = getBBox(element), elementTrbl = asTRBL(elementBounds), viewboxBounds = this.viewbox(), zoom2 = this.zoom(), dx, dy;
  viewboxBounds.y += padding.top / zoom2;
  viewboxBounds.x += padding.left / zoom2;
  viewboxBounds.width -= (padding.right + padding.left) / zoom2;
  viewboxBounds.height -= (padding.bottom + padding.top) / zoom2;
  var viewboxTrbl = asTRBL(viewboxBounds);
  var canFit = elementBounds.width < viewboxBounds.width && elementBounds.height < viewboxBounds.height;
  if (!canFit) {
    dx = elementBounds.x - viewboxBounds.x;
    dy = elementBounds.y - viewboxBounds.y;
  } else {
    var dRight = Math.max(0, elementTrbl.right - viewboxTrbl.right), dLeft = Math.min(0, elementTrbl.left - viewboxTrbl.left), dBottom = Math.max(0, elementTrbl.bottom - viewboxTrbl.bottom), dTop = Math.min(0, elementTrbl.top - viewboxTrbl.top);
    dx = dRight || dLeft;
    dy = dBottom || dTop;
  }
  this.scroll({ dx: -dx * zoom2, dy: -dy * zoom2 });
};
Canvas.prototype.zoom = function(newScale, center) {
  if (!newScale) {
    return this.viewbox(newScale).scale;
  }
  if (newScale === "fit-viewport") {
    return this._fitViewport(center);
  }
  var outer, matrix;
  this._changeViewbox(function() {
    if (typeof center !== "object") {
      outer = this.viewbox().outer;
      center = {
        x: outer.width / 2,
        y: outer.height / 2
      };
    }
    matrix = this._setZoom(newScale, center);
  });
  return round(matrix.a, 1e3);
};
function setCTM(node2, m) {
  var mstr = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
  node2.setAttribute("transform", mstr);
}
Canvas.prototype._fitViewport = function(center) {
  var vbox = this.viewbox(), outer = vbox.outer, inner2 = vbox.inner, newScale, newViewbox;
  if (inner2.x >= 0 && inner2.y >= 0 && inner2.x + inner2.width <= outer.width && inner2.y + inner2.height <= outer.height && !center) {
    newViewbox = {
      x: 0,
      y: 0,
      width: Math.max(inner2.width + inner2.x, outer.width),
      height: Math.max(inner2.height + inner2.y, outer.height)
    };
  } else {
    newScale = Math.min(1, outer.width / inner2.width, outer.height / inner2.height);
    newViewbox = {
      x: inner2.x + (center ? inner2.width / 2 - outer.width / newScale / 2 : 0),
      y: inner2.y + (center ? inner2.height / 2 - outer.height / newScale / 2 : 0),
      width: outer.width / newScale,
      height: outer.height / newScale
    };
  }
  this.viewbox(newViewbox);
  return this.viewbox(false).scale;
};
Canvas.prototype._setZoom = function(scale, center) {
  var svg = this._svg, viewport = this._viewport;
  var matrix = svg.createSVGMatrix();
  var point = svg.createSVGPoint();
  var centerPoint, originalPoint, currentMatrix, scaleMatrix, newMatrix;
  currentMatrix = viewport.getCTM();
  var currentScale = currentMatrix.a;
  if (center) {
    centerPoint = assign(point, center);
    originalPoint = centerPoint.matrixTransform(currentMatrix.inverse());
    scaleMatrix = matrix.translate(originalPoint.x, originalPoint.y).scale(1 / currentScale * scale).translate(-originalPoint.x, -originalPoint.y);
    newMatrix = currentMatrix.multiply(scaleMatrix);
  } else {
    newMatrix = matrix.scale(scale);
  }
  setCTM(this._viewport, newMatrix);
  return newMatrix;
};
Canvas.prototype.getSize = function() {
  return {
    width: this._container.clientWidth,
    height: this._container.clientHeight
  };
};
Canvas.prototype.getAbsoluteBBox = function(element) {
  var vbox = this.viewbox();
  var bbox;
  if (element.waypoints) {
    var gfx = this.getGraphics(element);
    bbox = gfx.getBBox();
  } else {
    bbox = element;
  }
  var x = bbox.x * vbox.scale - vbox.x * vbox.scale;
  var y = bbox.y * vbox.scale - vbox.y * vbox.scale;
  var width = bbox.width * vbox.scale;
  var height = bbox.height * vbox.scale;
  return {
    x,
    y,
    width,
    height
  };
};
Canvas.prototype.resized = function() {
  delete this._cachedViewbox;
  this._eventBus.fire("canvas.resized");
};
var ELEMENT_ID = "data-element-id";
function ElementRegistry(eventBus) {
  this._elements = {};
  this._eventBus = eventBus;
}
ElementRegistry.$inject = ["eventBus"];
ElementRegistry.prototype.add = function(element, gfx, secondaryGfx) {
  var id2 = element.id;
  this._validateId(id2);
  attr$1(gfx, ELEMENT_ID, id2);
  if (secondaryGfx) {
    attr$1(secondaryGfx, ELEMENT_ID, id2);
  }
  this._elements[id2] = { element, gfx, secondaryGfx };
};
ElementRegistry.prototype.remove = function(element) {
  var elements = this._elements, id2 = element.id || element, container = id2 && elements[id2];
  if (container) {
    attr$1(container.gfx, ELEMENT_ID, "");
    if (container.secondaryGfx) {
      attr$1(container.secondaryGfx, ELEMENT_ID, "");
    }
    delete elements[id2];
  }
};
ElementRegistry.prototype.updateId = function(element, newId) {
  this._validateId(newId);
  if (typeof element === "string") {
    element = this.get(element);
  }
  this._eventBus.fire("element.updateId", {
    element,
    newId
  });
  var gfx = this.getGraphics(element), secondaryGfx = this.getGraphics(element, true);
  this.remove(element);
  element.id = newId;
  this.add(element, gfx, secondaryGfx);
};
ElementRegistry.prototype.updateGraphics = function(filter2, gfx, secondary) {
  var id2 = filter2.id || filter2;
  var container = this._elements[id2];
  if (secondary) {
    container.secondaryGfx = gfx;
  } else {
    container.gfx = gfx;
  }
  attr$1(gfx, ELEMENT_ID, id2);
  return gfx;
};
ElementRegistry.prototype.get = function(filter2) {
  var id2;
  if (typeof filter2 === "string") {
    id2 = filter2;
  } else {
    id2 = filter2 && attr$1(filter2, ELEMENT_ID);
  }
  var container = this._elements[id2];
  return container && container.element;
};
ElementRegistry.prototype.filter = function(fn) {
  var filtered = [];
  this.forEach(function(element, gfx) {
    if (fn(element, gfx)) {
      filtered.push(element);
    }
  });
  return filtered;
};
ElementRegistry.prototype.find = function(fn) {
  var map2 = this._elements, keys = Object.keys(map2);
  for (var i = 0; i < keys.length; i++) {
    var id2 = keys[i], container = map2[id2], element = container.element, gfx = container.gfx;
    if (fn(element, gfx)) {
      return element;
    }
  }
};
ElementRegistry.prototype.getAll = function() {
  return this.filter(function(e) {
    return e;
  });
};
ElementRegistry.prototype.forEach = function(fn) {
  var map2 = this._elements;
  Object.keys(map2).forEach(function(id2) {
    var container = map2[id2], element = container.element, gfx = container.gfx;
    return fn(element, gfx);
  });
};
ElementRegistry.prototype.getGraphics = function(filter2, secondary) {
  var id2 = filter2.id || filter2;
  var container = this._elements[id2];
  return container && (secondary ? container.secondaryGfx : container.gfx);
};
ElementRegistry.prototype._validateId = function(id2) {
  if (!id2) {
    throw new Error("element must have an id");
  }
  if (this._elements[id2]) {
    throw new Error("element with id " + id2 + " already added");
  }
};
var objectRefs = { exports: {} };
var collection = {};
function extend(collection2, refs2, property, target) {
  var inverseProperty = property.inverse;
  Object.defineProperty(collection2, "remove", {
    value: function(element) {
      var idx = this.indexOf(element);
      if (idx !== -1) {
        this.splice(idx, 1);
        refs2.unset(element, inverseProperty, target);
      }
      return element;
    }
  });
  Object.defineProperty(collection2, "contains", {
    value: function(element) {
      return this.indexOf(element) !== -1;
    }
  });
  Object.defineProperty(collection2, "add", {
    value: function(element, idx) {
      var currentIdx = this.indexOf(element);
      if (typeof idx === "undefined") {
        if (currentIdx !== -1) {
          return;
        }
        idx = this.length;
      }
      if (currentIdx !== -1) {
        this.splice(currentIdx, 1);
      }
      this.splice(idx, 0, element);
      if (currentIdx === -1) {
        refs2.set(element, inverseProperty, target);
      }
    }
  });
  Object.defineProperty(collection2, "__refs_collection", {
    value: true
  });
  return collection2;
}
function isExtended(collection2) {
  return collection2.__refs_collection === true;
}
collection.extend = extend;
collection.isExtended = isExtended;
var Collection = collection;
function hasOwnProperty$1(e, property) {
  return Object.prototype.hasOwnProperty.call(e, property.name || property);
}
function defineCollectionProperty(ref, property, target) {
  var collection2 = Collection.extend(target[property.name] || [], ref, property, target);
  Object.defineProperty(target, property.name, {
    enumerable: property.enumerable,
    value: collection2
  });
  if (collection2.length) {
    collection2.forEach(function(o) {
      ref.set(o, property.inverse, target);
    });
  }
}
function defineProperty$1(ref, property, target) {
  var inverseProperty = property.inverse;
  var _value = target[property.name];
  Object.defineProperty(target, property.name, {
    configurable: property.configurable,
    enumerable: property.enumerable,
    get: function() {
      return _value;
    },
    set: function(value) {
      if (value === _value) {
        return;
      }
      var old = _value;
      _value = null;
      if (old) {
        ref.unset(old, inverseProperty, target);
      }
      _value = value;
      ref.set(_value, inverseProperty, target);
    }
  });
}
function Refs$1(a, b) {
  if (!(this instanceof Refs$1)) {
    return new Refs$1(a, b);
  }
  a.inverse = b;
  b.inverse = a;
  this.props = {};
  this.props[a.name] = a;
  this.props[b.name] = b;
}
Refs$1.prototype.bind = function(target, property) {
  if (typeof property === "string") {
    if (!this.props[property]) {
      throw new Error("no property <" + property + "> in ref");
    }
    property = this.props[property];
  }
  if (property.collection) {
    defineCollectionProperty(this, property, target);
  } else {
    defineProperty$1(this, property, target);
  }
};
Refs$1.prototype.ensureRefsCollection = function(target, property) {
  var collection2 = target[property.name];
  if (!Collection.isExtended(collection2)) {
    defineCollectionProperty(this, property, target);
  }
  return collection2;
};
Refs$1.prototype.ensureBound = function(target, property) {
  if (!hasOwnProperty$1(target, property)) {
    this.bind(target, property);
  }
};
Refs$1.prototype.unset = function(target, property, value) {
  if (target) {
    this.ensureBound(target, property);
    if (property.collection) {
      this.ensureRefsCollection(target, property).remove(value);
    } else {
      target[property.name] = void 0;
    }
  }
};
Refs$1.prototype.set = function(target, property, value) {
  if (target) {
    this.ensureBound(target, property);
    if (property.collection) {
      this.ensureRefsCollection(target, property).add(value);
    } else {
      target[property.name] = value;
    }
  }
};
var refs = Refs$1;
objectRefs.exports = refs;
objectRefs.exports.Collection = collection;
var Refs = objectRefs.exports;
var parentRefs = new Refs({ name: "children", enumerable: true, collection: true }, { name: "parent" }), labelRefs = new Refs({ name: "labels", enumerable: true, collection: true }, { name: "labelTarget" }), attacherRefs = new Refs({ name: "attachers", collection: true }, { name: "host" }), outgoingRefs = new Refs({ name: "outgoing", collection: true }, { name: "source" }), incomingRefs = new Refs({ name: "incoming", collection: true }, { name: "target" });
function Base$1() {
  Object.defineProperty(this, "businessObject", {
    writable: true
  });
  Object.defineProperty(this, "label", {
    get: function() {
      return this.labels[0];
    },
    set: function(newLabel) {
      var label = this.label, labels = this.labels;
      if (!newLabel && label) {
        labels.remove(label);
      } else {
        labels.add(newLabel, 0);
      }
    }
  });
  parentRefs.bind(this, "parent");
  labelRefs.bind(this, "labels");
  outgoingRefs.bind(this, "outgoing");
  incomingRefs.bind(this, "incoming");
}
function Shape() {
  Base$1.call(this);
  parentRefs.bind(this, "children");
  attacherRefs.bind(this, "host");
  attacherRefs.bind(this, "attachers");
}
inherits$1(Shape, Base$1);
function Root() {
  Shape.call(this);
}
inherits$1(Root, Shape);
function Label() {
  Shape.call(this);
  labelRefs.bind(this, "labelTarget");
}
inherits$1(Label, Shape);
function Connection() {
  Base$1.call(this);
  outgoingRefs.bind(this, "source");
  incomingRefs.bind(this, "target");
}
inherits$1(Connection, Base$1);
var types$6 = {
  connection: Connection,
  shape: Shape,
  label: Label,
  root: Root
};
function create(type, attrs) {
  var Type = types$6[type];
  if (!Type) {
    throw new Error("unknown type: <" + type + ">");
  }
  return assign(new Type(), attrs);
}
function ElementFactory() {
  this._uid = 12;
}
ElementFactory.prototype.createRoot = function(attrs) {
  return this.create("root", attrs);
};
ElementFactory.prototype.createLabel = function(attrs) {
  return this.create("label", attrs);
};
ElementFactory.prototype.createShape = function(attrs) {
  return this.create("shape", attrs);
};
ElementFactory.prototype.createConnection = function(attrs) {
  return this.create("connection", attrs);
};
ElementFactory.prototype.create = function(type, attrs) {
  attrs = assign({}, attrs || {});
  if (!attrs.id) {
    attrs.id = type + "_" + this._uid++;
  }
  return create(type, attrs);
};
var FN_REF = "__fn";
var DEFAULT_PRIORITY$1 = 1e3;
var slice = Array.prototype.slice;
function EventBus() {
  this._listeners = {};
  this.on("diagram.destroy", 1, this._destroy, this);
}
EventBus.prototype.on = function(events, priority, callback, that) {
  events = isArray$1(events) ? events : [events];
  if (isFunction(priority)) {
    that = callback;
    callback = priority;
    priority = DEFAULT_PRIORITY$1;
  }
  if (!isNumber(priority)) {
    throw new Error("priority must be a number");
  }
  var actualCallback = callback;
  if (that) {
    actualCallback = bind$2(callback, that);
    actualCallback[FN_REF] = callback[FN_REF] || callback;
  }
  var self2 = this;
  events.forEach(function(e) {
    self2._addListener(e, {
      priority,
      callback: actualCallback,
      next: null
    });
  });
};
EventBus.prototype.once = function(event, priority, callback, that) {
  var self2 = this;
  if (isFunction(priority)) {
    that = callback;
    callback = priority;
    priority = DEFAULT_PRIORITY$1;
  }
  if (!isNumber(priority)) {
    throw new Error("priority must be a number");
  }
  function wrappedCallback() {
    wrappedCallback.__isTomb = true;
    var result = callback.apply(that, arguments);
    self2.off(event, wrappedCallback);
    return result;
  }
  wrappedCallback[FN_REF] = callback;
  this.on(event, priority, wrappedCallback);
};
EventBus.prototype.off = function(events, callback) {
  events = isArray$1(events) ? events : [events];
  var self2 = this;
  events.forEach(function(event) {
    self2._removeListener(event, callback);
  });
};
EventBus.prototype.createEvent = function(data) {
  var event = new InternalEvent();
  event.init(data);
  return event;
};
EventBus.prototype.fire = function(type, data) {
  var event, firstListener, returnValue, args;
  args = slice.call(arguments);
  if (typeof type === "object") {
    data = type;
    type = data.type;
  }
  if (!type) {
    throw new Error("no event type specified");
  }
  firstListener = this._listeners[type];
  if (!firstListener) {
    return;
  }
  if (data instanceof InternalEvent) {
    event = data;
  } else {
    event = this.createEvent(data);
  }
  args[0] = event;
  var originalType = event.type;
  if (type !== originalType) {
    event.type = type;
  }
  try {
    returnValue = this._invokeListeners(event, args, firstListener);
  } finally {
    if (type !== originalType) {
      event.type = originalType;
    }
  }
  if (returnValue === void 0 && event.defaultPrevented) {
    returnValue = false;
  }
  return returnValue;
};
EventBus.prototype.handleError = function(error2) {
  return this.fire("error", { error: error2 }) === false;
};
EventBus.prototype._destroy = function() {
  this._listeners = {};
};
EventBus.prototype._invokeListeners = function(event, args, listener) {
  var returnValue;
  while (listener) {
    if (event.cancelBubble) {
      break;
    }
    returnValue = this._invokeListener(event, args, listener);
    listener = listener.next;
  }
  return returnValue;
};
EventBus.prototype._invokeListener = function(event, args, listener) {
  var returnValue;
  if (listener.callback.__isTomb) {
    return returnValue;
  }
  try {
    returnValue = invokeFunction(listener.callback, args);
    if (returnValue !== void 0) {
      event.returnValue = returnValue;
      event.stopPropagation();
    }
    if (returnValue === false) {
      event.preventDefault();
    }
  } catch (error2) {
    if (!this.handleError(error2)) {
      console.error("unhandled error in event listener", error2);
      throw error2;
    }
  }
  return returnValue;
};
EventBus.prototype._addListener = function(event, newListener) {
  var listener = this._getListeners(event), previousListener;
  if (!listener) {
    this._setListeners(event, newListener);
    return;
  }
  while (listener) {
    if (listener.priority < newListener.priority) {
      newListener.next = listener;
      if (previousListener) {
        previousListener.next = newListener;
      } else {
        this._setListeners(event, newListener);
      }
      return;
    }
    previousListener = listener;
    listener = listener.next;
  }
  previousListener.next = newListener;
};
EventBus.prototype._getListeners = function(name2) {
  return this._listeners[name2];
};
EventBus.prototype._setListeners = function(name2, listener) {
  this._listeners[name2] = listener;
};
EventBus.prototype._removeListener = function(event, callback) {
  var listener = this._getListeners(event), nextListener, previousListener, listenerCallback;
  if (!callback) {
    this._setListeners(event, null);
    return;
  }
  while (listener) {
    nextListener = listener.next;
    listenerCallback = listener.callback;
    if (listenerCallback === callback || listenerCallback[FN_REF] === callback) {
      if (previousListener) {
        previousListener.next = nextListener;
      } else {
        this._setListeners(event, nextListener);
      }
    }
    previousListener = listener;
    listener = nextListener;
  }
};
function InternalEvent() {
}
InternalEvent.prototype.stopPropagation = function() {
  this.cancelBubble = true;
};
InternalEvent.prototype.preventDefault = function() {
  this.defaultPrevented = true;
};
InternalEvent.prototype.init = function(data) {
  assign(this, data || {});
};
function invokeFunction(fn, args) {
  return fn.apply(null, args);
}
function getVisual(gfx) {
  return gfx.childNodes[0];
}
function getChildren(gfx) {
  return gfx.parentNode.childNodes[1];
}
function GraphicsFactory(eventBus, elementRegistry) {
  this._eventBus = eventBus;
  this._elementRegistry = elementRegistry;
}
GraphicsFactory.$inject = ["eventBus", "elementRegistry"];
GraphicsFactory.prototype._getChildrenContainer = function(element) {
  var gfx = this._elementRegistry.getGraphics(element);
  var childrenGfx;
  if (!element.parent) {
    childrenGfx = gfx;
  } else {
    childrenGfx = getChildren(gfx);
    if (!childrenGfx) {
      childrenGfx = create$1("g");
      classes$1(childrenGfx).add("djs-children");
      append(gfx.parentNode, childrenGfx);
    }
  }
  return childrenGfx;
};
GraphicsFactory.prototype._clear = function(gfx) {
  var visual = getVisual(gfx);
  clear(visual);
  return visual;
};
GraphicsFactory.prototype._createContainer = function(type, childrenGfx, parentIndex, isFrame) {
  var outerGfx = create$1("g");
  classes$1(outerGfx).add("djs-group");
  if (typeof parentIndex !== "undefined") {
    prependTo(outerGfx, childrenGfx, childrenGfx.childNodes[parentIndex]);
  } else {
    append(childrenGfx, outerGfx);
  }
  var gfx = create$1("g");
  classes$1(gfx).add("djs-element");
  classes$1(gfx).add("djs-" + type);
  if (isFrame) {
    classes$1(gfx).add("djs-frame");
  }
  append(outerGfx, gfx);
  var visual = create$1("g");
  classes$1(visual).add("djs-visual");
  append(gfx, visual);
  return gfx;
};
GraphicsFactory.prototype.create = function(type, element, parentIndex) {
  var childrenGfx = this._getChildrenContainer(element.parent);
  return this._createContainer(type, childrenGfx, parentIndex, isFrameElement(element));
};
GraphicsFactory.prototype.updateContainments = function(elements) {
  var self2 = this, elementRegistry = this._elementRegistry, parents;
  parents = reduce(elements, function(map2, e) {
    if (e.parent) {
      map2[e.parent.id] = e.parent;
    }
    return map2;
  }, {});
  forEach(parents, function(parent) {
    var children = parent.children;
    if (!children) {
      return;
    }
    var childrenGfx = self2._getChildrenContainer(parent);
    forEach(children.slice().reverse(), function(child) {
      var childGfx = elementRegistry.getGraphics(child);
      prependTo(childGfx.parentNode, childrenGfx);
    });
  });
};
GraphicsFactory.prototype.drawShape = function(visual, element) {
  var eventBus = this._eventBus;
  return eventBus.fire("render.shape", { gfx: visual, element });
};
GraphicsFactory.prototype.getShapePath = function(element) {
  var eventBus = this._eventBus;
  return eventBus.fire("render.getShapePath", element);
};
GraphicsFactory.prototype.drawConnection = function(visual, element) {
  var eventBus = this._eventBus;
  return eventBus.fire("render.connection", { gfx: visual, element });
};
GraphicsFactory.prototype.getConnectionPath = function(waypoints) {
  var eventBus = this._eventBus;
  return eventBus.fire("render.getConnectionPath", waypoints);
};
GraphicsFactory.prototype.update = function(type, element, gfx) {
  if (!element.parent) {
    return;
  }
  var visual = this._clear(gfx);
  if (type === "shape") {
    this.drawShape(visual, element);
    translate$1(gfx, element.x, element.y);
  } else if (type === "connection") {
    this.drawConnection(visual, element);
  } else {
    throw new Error("unknown type: " + type);
  }
  if (element.hidden) {
    attr$1(gfx, "display", "none");
  } else {
    attr$1(gfx, "display", "block");
  }
};
GraphicsFactory.prototype.remove = function(element) {
  var gfx = this._elementRegistry.getGraphics(element);
  remove$2(gfx.parentNode);
};
function prependTo(newNode, parentNode, siblingNode) {
  var node2 = siblingNode || parentNode.firstChild;
  if (newNode === node2) {
    return;
  }
  parentNode.insertBefore(newNode, node2);
}
var CoreModule = {
  __depends__: [DrawModule],
  __init__: ["canvas"],
  canvas: ["type", Canvas],
  elementRegistry: ["type", ElementRegistry],
  elementFactory: ["type", ElementFactory],
  eventBus: ["type", EventBus],
  graphicsFactory: ["type", GraphicsFactory]
};
function bootstrap(bootstrapModules) {
  var modules = [], components = [];
  function hasModule(m) {
    return modules.indexOf(m) >= 0;
  }
  function addModule(m) {
    modules.push(m);
  }
  function visit(m) {
    if (hasModule(m)) {
      return;
    }
    (m.__depends__ || []).forEach(visit);
    if (hasModule(m)) {
      return;
    }
    addModule(m);
    (m.__init__ || []).forEach(function(c) {
      components.push(c);
    });
  }
  bootstrapModules.forEach(visit);
  var injector = new Injector(modules);
  components.forEach(function(c) {
    try {
      injector[typeof c === "string" ? "get" : "invoke"](c);
    } catch (e) {
      console.error("Failed to instantiate component");
      console.error(e.stack);
      throw e;
    }
  });
  return injector;
}
function createInjector(options) {
  options = options || {};
  var configModule = {
    "config": ["value", options]
  };
  var modules = [configModule, CoreModule].concat(options.modules || []);
  return bootstrap(modules);
}
function Diagram(options, injector) {
  this.injector = injector = injector || createInjector(options);
  this.get = injector.get;
  this.invoke = injector.invoke;
  this.get("eventBus").fire("diagram.init");
}
Diagram.prototype.destroy = function() {
  this.get("eventBus").fire("diagram.destroy");
};
Diagram.prototype.clear = function() {
  this.get("eventBus").fire("diagram.clear");
};
function Base() {
}
Base.prototype.get = function(name2) {
  return this.$model.properties.get(this, name2);
};
Base.prototype.set = function(name2, value) {
  this.$model.properties.set(this, name2, value);
};
function Factory(model, properties) {
  this.model = model;
  this.properties = properties;
}
Factory.prototype.createType = function(descriptor) {
  var model = this.model;
  var props = this.properties, prototype = Object.create(Base.prototype);
  forEach(descriptor.properties, function(p) {
    if (!p.isMany && p.default !== void 0) {
      prototype[p.name] = p.default;
    }
  });
  props.defineModel(prototype, model);
  props.defineDescriptor(prototype, descriptor);
  var name2 = descriptor.ns.name;
  function ModdleElement(attrs) {
    props.define(this, "$type", { value: name2, enumerable: true });
    props.define(this, "$attrs", { value: {} });
    props.define(this, "$parent", { writable: true });
    forEach(attrs, bind$2(function(val, key) {
      this.set(key, val);
    }, this));
  }
  ModdleElement.prototype = prototype;
  ModdleElement.hasType = prototype.$instanceOf = this.model.hasType;
  props.defineModel(ModdleElement, model);
  props.defineDescriptor(ModdleElement, descriptor);
  return ModdleElement;
};
var BUILTINS = {
  String: true,
  Boolean: true,
  Integer: true,
  Real: true,
  Element: true
};
var TYPE_CONVERTERS = {
  String: function(s) {
    return s;
  },
  Boolean: function(s) {
    return s === "true";
  },
  Integer: function(s) {
    return parseInt(s, 10);
  },
  Real: function(s) {
    return parseFloat(s);
  }
};
function coerceType(type, value) {
  var converter = TYPE_CONVERTERS[type];
  if (converter) {
    return converter(value);
  } else {
    return value;
  }
}
function isBuiltIn(type) {
  return !!BUILTINS[type];
}
function isSimple(type) {
  return !!TYPE_CONVERTERS[type];
}
function parseName(name2, defaultPrefix) {
  var parts = name2.split(/:/), localName, prefix2;
  if (parts.length === 1) {
    localName = name2;
    prefix2 = defaultPrefix;
  } else if (parts.length === 2) {
    localName = parts[1];
    prefix2 = parts[0];
  } else {
    throw new Error("expected <prefix:localName> or <localName>, got " + name2);
  }
  name2 = (prefix2 ? prefix2 + ":" : "") + localName;
  return {
    name: name2,
    prefix: prefix2,
    localName
  };
}
function DescriptorBuilder(nameNs) {
  this.ns = nameNs;
  this.name = nameNs.name;
  this.allTypes = [];
  this.allTypesByName = {};
  this.properties = [];
  this.propertiesByName = {};
}
DescriptorBuilder.prototype.build = function() {
  return pick(this, [
    "ns",
    "name",
    "allTypes",
    "allTypesByName",
    "properties",
    "propertiesByName",
    "bodyProperty",
    "idProperty"
  ]);
};
DescriptorBuilder.prototype.addProperty = function(p, idx, validate) {
  if (typeof idx === "boolean") {
    validate = idx;
    idx = void 0;
  }
  this.addNamedProperty(p, validate !== false);
  var properties = this.properties;
  if (idx !== void 0) {
    properties.splice(idx, 0, p);
  } else {
    properties.push(p);
  }
};
DescriptorBuilder.prototype.replaceProperty = function(oldProperty, newProperty, replace) {
  var oldNameNs = oldProperty.ns;
  var props = this.properties, propertiesByName = this.propertiesByName, rename = oldProperty.name !== newProperty.name;
  if (oldProperty.isId) {
    if (!newProperty.isId) {
      throw new Error("property <" + newProperty.ns.name + "> must be id property to refine <" + oldProperty.ns.name + ">");
    }
    this.setIdProperty(newProperty, false);
  }
  if (oldProperty.isBody) {
    if (!newProperty.isBody) {
      throw new Error("property <" + newProperty.ns.name + "> must be body property to refine <" + oldProperty.ns.name + ">");
    }
    this.setBodyProperty(newProperty, false);
  }
  var idx = props.indexOf(oldProperty);
  if (idx === -1) {
    throw new Error("property <" + oldNameNs.name + "> not found in property list");
  }
  props.splice(idx, 1);
  this.addProperty(newProperty, replace ? void 0 : idx, rename);
  propertiesByName[oldNameNs.name] = propertiesByName[oldNameNs.localName] = newProperty;
};
DescriptorBuilder.prototype.redefineProperty = function(p, targetPropertyName, replace) {
  var nsPrefix = p.ns.prefix;
  var parts = targetPropertyName.split("#");
  var name2 = parseName(parts[0], nsPrefix);
  var attrName = parseName(parts[1], name2.prefix).name;
  var redefinedProperty = this.propertiesByName[attrName];
  if (!redefinedProperty) {
    throw new Error("refined property <" + attrName + "> not found");
  } else {
    this.replaceProperty(redefinedProperty, p, replace);
  }
  delete p.redefines;
};
DescriptorBuilder.prototype.addNamedProperty = function(p, validate) {
  var ns2 = p.ns, propsByName = this.propertiesByName;
  if (validate) {
    this.assertNotDefined(p, ns2.name);
    this.assertNotDefined(p, ns2.localName);
  }
  propsByName[ns2.name] = propsByName[ns2.localName] = p;
};
DescriptorBuilder.prototype.removeNamedProperty = function(p) {
  var ns2 = p.ns, propsByName = this.propertiesByName;
  delete propsByName[ns2.name];
  delete propsByName[ns2.localName];
};
DescriptorBuilder.prototype.setBodyProperty = function(p, validate) {
  if (validate && this.bodyProperty) {
    throw new Error("body property defined multiple times (<" + this.bodyProperty.ns.name + ">, <" + p.ns.name + ">)");
  }
  this.bodyProperty = p;
};
DescriptorBuilder.prototype.setIdProperty = function(p, validate) {
  if (validate && this.idProperty) {
    throw new Error("id property defined multiple times (<" + this.idProperty.ns.name + ">, <" + p.ns.name + ">)");
  }
  this.idProperty = p;
};
DescriptorBuilder.prototype.assertNotDefined = function(p, name2) {
  var propertyName = p.name, definedProperty = this.propertiesByName[propertyName];
  if (definedProperty) {
    throw new Error("property <" + propertyName + "> already defined; override of <" + definedProperty.definedBy.ns.name + "#" + definedProperty.ns.name + "> by <" + p.definedBy.ns.name + "#" + p.ns.name + "> not allowed without redefines");
  }
};
DescriptorBuilder.prototype.hasProperty = function(name2) {
  return this.propertiesByName[name2];
};
DescriptorBuilder.prototype.addTrait = function(t, inherited) {
  var typesByName = this.allTypesByName, types2 = this.allTypes;
  var typeName = t.name;
  if (typeName in typesByName) {
    return;
  }
  forEach(t.properties, bind$2(function(p) {
    p = assign({}, p, {
      name: p.ns.localName,
      inherited
    });
    Object.defineProperty(p, "definedBy", {
      value: t
    });
    var replaces = p.replaces, redefines = p.redefines;
    if (replaces || redefines) {
      this.redefineProperty(p, replaces || redefines, replaces);
    } else {
      if (p.isBody) {
        this.setBodyProperty(p);
      }
      if (p.isId) {
        this.setIdProperty(p);
      }
      this.addProperty(p);
    }
  }, this));
  types2.push(t);
  typesByName[typeName] = t;
};
function Registry(packages2, properties) {
  this.packageMap = {};
  this.typeMap = {};
  this.packages = [];
  this.properties = properties;
  forEach(packages2, bind$2(this.registerPackage, this));
}
Registry.prototype.getPackage = function(uriOrPrefix) {
  return this.packageMap[uriOrPrefix];
};
Registry.prototype.getPackages = function() {
  return this.packages;
};
Registry.prototype.registerPackage = function(pkg) {
  pkg = assign({}, pkg);
  var pkgMap = this.packageMap;
  ensureAvailable(pkgMap, pkg, "prefix");
  ensureAvailable(pkgMap, pkg, "uri");
  forEach(pkg.types, bind$2(function(descriptor) {
    this.registerType(descriptor, pkg);
  }, this));
  pkgMap[pkg.uri] = pkgMap[pkg.prefix] = pkg;
  this.packages.push(pkg);
};
Registry.prototype.registerType = function(type, pkg) {
  type = assign({}, type, {
    superClass: (type.superClass || []).slice(),
    extends: (type.extends || []).slice(),
    properties: (type.properties || []).slice(),
    meta: assign(type.meta || {})
  });
  var ns2 = parseName(type.name, pkg.prefix), name2 = ns2.name, propertiesByName = {};
  forEach(type.properties, bind$2(function(p) {
    var propertyNs = parseName(p.name, ns2.prefix), propertyName = propertyNs.name;
    if (!isBuiltIn(p.type)) {
      p.type = parseName(p.type, propertyNs.prefix).name;
    }
    assign(p, {
      ns: propertyNs,
      name: propertyName
    });
    propertiesByName[propertyName] = p;
  }, this));
  assign(type, {
    ns: ns2,
    name: name2,
    propertiesByName
  });
  forEach(type.extends, bind$2(function(extendsName) {
    var extended = this.typeMap[extendsName];
    extended.traits = extended.traits || [];
    extended.traits.push(name2);
  }, this));
  this.definePackage(type, pkg);
  this.typeMap[name2] = type;
};
Registry.prototype.mapTypes = function(nsName2, iterator, trait) {
  var type = isBuiltIn(nsName2.name) ? { name: nsName2.name } : this.typeMap[nsName2.name];
  var self2 = this;
  function traverseTrait(cls) {
    return traverseSuper(cls, true);
  }
  function traverseSuper(cls, trait2) {
    var parentNs = parseName(cls, isBuiltIn(cls) ? "" : nsName2.prefix);
    self2.mapTypes(parentNs, iterator, trait2);
  }
  if (!type) {
    throw new Error("unknown type <" + nsName2.name + ">");
  }
  forEach(type.superClass, trait ? traverseTrait : traverseSuper);
  iterator(type, !trait);
  forEach(type.traits, traverseTrait);
};
Registry.prototype.getEffectiveDescriptor = function(name2) {
  var nsName2 = parseName(name2);
  var builder = new DescriptorBuilder(nsName2);
  this.mapTypes(nsName2, function(type, inherited) {
    builder.addTrait(type, inherited);
  });
  var descriptor = builder.build();
  this.definePackage(descriptor, descriptor.allTypes[descriptor.allTypes.length - 1].$pkg);
  return descriptor;
};
Registry.prototype.definePackage = function(target, pkg) {
  this.properties.define(target, "$pkg", { value: pkg });
};
function ensureAvailable(packageMap, pkg, identifierKey) {
  var value = pkg[identifierKey];
  if (value in packageMap) {
    throw new Error("package with " + identifierKey + " <" + value + "> already defined");
  }
}
function Properties(model) {
  this.model = model;
}
Properties.prototype.set = function(target, name2, value) {
  var property = this.model.getPropertyDescriptor(target, name2);
  var propertyName = property && property.name;
  if (isUndefined(value)) {
    if (property) {
      delete target[propertyName];
    } else {
      delete target.$attrs[name2];
    }
  } else {
    if (property) {
      if (propertyName in target) {
        target[propertyName] = value;
      } else {
        defineProperty(target, property, value);
      }
    } else {
      target.$attrs[name2] = value;
    }
  }
};
Properties.prototype.get = function(target, name2) {
  var property = this.model.getPropertyDescriptor(target, name2);
  if (!property) {
    return target.$attrs[name2];
  }
  var propertyName = property.name;
  if (!target[propertyName] && property.isMany) {
    defineProperty(target, property, []);
  }
  return target[propertyName];
};
Properties.prototype.define = function(target, name2, options) {
  if (!options.writable) {
    var value = options.value;
    options = assign({}, options, {
      get: function() {
        return value;
      }
    });
    delete options.value;
  }
  Object.defineProperty(target, name2, options);
};
Properties.prototype.defineDescriptor = function(target, descriptor) {
  this.define(target, "$descriptor", { value: descriptor });
};
Properties.prototype.defineModel = function(target, model) {
  this.define(target, "$model", { value: model });
};
function isUndefined(val) {
  return typeof val === "undefined";
}
function defineProperty(target, property, value) {
  Object.defineProperty(target, property.name, {
    enumerable: !property.isReference,
    writable: true,
    value,
    configurable: true
  });
}
function Moddle(packages2) {
  this.properties = new Properties(this);
  this.factory = new Factory(this, this.properties);
  this.registry = new Registry(packages2, this.properties);
  this.typeCache = {};
}
Moddle.prototype.create = function(descriptor, attrs) {
  var Type = this.getType(descriptor);
  if (!Type) {
    throw new Error("unknown type <" + descriptor + ">");
  }
  return new Type(attrs);
};
Moddle.prototype.getType = function(descriptor) {
  var cache = this.typeCache;
  var name2 = isString(descriptor) ? descriptor : descriptor.ns.name;
  var type = cache[name2];
  if (!type) {
    descriptor = this.registry.getEffectiveDescriptor(name2);
    type = cache[name2] = this.factory.createType(descriptor);
  }
  return type;
};
Moddle.prototype.createAny = function(name2, nsUri, properties) {
  var nameNs = parseName(name2);
  var element = {
    $type: name2,
    $instanceOf: function(type) {
      return type === this.$type;
    }
  };
  var descriptor = {
    name: name2,
    isGeneric: true,
    ns: {
      prefix: nameNs.prefix,
      localName: nameNs.localName,
      uri: nsUri
    }
  };
  this.properties.defineDescriptor(element, descriptor);
  this.properties.defineModel(element, this);
  this.properties.define(element, "$parent", { enumerable: false, writable: true });
  this.properties.define(element, "$instanceOf", { enumerable: false, writable: true });
  forEach(properties, function(a, key) {
    if (isObject(a) && a.value !== void 0) {
      element[a.name] = a.value;
    } else {
      element[key] = a;
    }
  });
  return element;
};
Moddle.prototype.getPackage = function(uriOrPrefix) {
  return this.registry.getPackage(uriOrPrefix);
};
Moddle.prototype.getPackages = function() {
  return this.registry.getPackages();
};
Moddle.prototype.getElementDescriptor = function(element) {
  return element.$descriptor;
};
Moddle.prototype.hasType = function(element, type) {
  if (type === void 0) {
    type = element;
    element = this;
  }
  var descriptor = element.$model.getElementDescriptor(element);
  return type in descriptor.allTypesByName;
};
Moddle.prototype.getPropertyDescriptor = function(element, property) {
  return this.getElementDescriptor(element).propertiesByName[property];
};
Moddle.prototype.getTypeDescriptor = function(type) {
  return this.registry.typeMap[type];
};
var fromCharCode = String.fromCharCode;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var ENTITY_PATTERN = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/ig;
var ENTITY_MAPPING = {
  "amp": "&",
  "apos": "'",
  "gt": ">",
  "lt": "<",
  "quot": '"'
};
Object.keys(ENTITY_MAPPING).forEach(function(k) {
  ENTITY_MAPPING[k.toUpperCase()] = ENTITY_MAPPING[k];
});
function replaceEntities(_, d, x, z) {
  if (z) {
    if (hasOwnProperty.call(ENTITY_MAPPING, z)) {
      return ENTITY_MAPPING[z];
    } else {
      return "&" + z + ";";
    }
  }
  if (d) {
    return fromCharCode(d);
  }
  return fromCharCode(parseInt(x, 16));
}
function decodeEntities(s) {
  if (s.length > 3 && s.indexOf("&") !== -1) {
    return s.replace(ENTITY_PATTERN, replaceEntities);
  }
  return s;
}
var XSI_URI = "http://www.w3.org/2001/XMLSchema-instance";
var XSI_PREFIX = "xsi";
var XSI_TYPE$1 = "xsi:type";
var NON_WHITESPACE_OUTSIDE_ROOT_NODE = "non-whitespace outside of root node";
function error$1(msg) {
  return new Error(msg);
}
function missingNamespaceForPrefix(prefix2) {
  return "missing namespace for prefix <" + prefix2 + ">";
}
function getter(getFn) {
  return {
    "get": getFn,
    "enumerable": true
  };
}
function cloneNsMatrix(nsMatrix) {
  var clone = {}, key;
  for (key in nsMatrix) {
    clone[key] = nsMatrix[key];
  }
  return clone;
}
function uriPrefix(prefix2) {
  return prefix2 + "$uri";
}
function buildNsMatrix(nsUriToPrefix) {
  var nsMatrix = {}, uri2, prefix2;
  for (uri2 in nsUriToPrefix) {
    prefix2 = nsUriToPrefix[uri2];
    nsMatrix[prefix2] = prefix2;
    nsMatrix[uriPrefix(prefix2)] = uri2;
  }
  return nsMatrix;
}
function noopGetContext() {
  return { "line": 0, "column": 0 };
}
function throwFunc(err) {
  throw err;
}
function Parser(options) {
  if (!this) {
    return new Parser(options);
  }
  var proxy = options && options["proxy"];
  var onText, onOpenTag, onCloseTag, onCDATA, onError = throwFunc, onWarning, onComment, onQuestion, onAttention;
  var getContext = noopGetContext;
  var maybeNS = false;
  var isNamespace = false;
  var returnError = null;
  var parseStop = false;
  var nsUriToPrefix;
  function handleError(err) {
    if (!(err instanceof Error)) {
      err = error$1(err);
    }
    returnError = err;
    onError(err, getContext);
  }
  function handleWarning(err) {
    if (!onWarning) {
      return;
    }
    if (!(err instanceof Error)) {
      err = error$1(err);
    }
    onWarning(err, getContext);
  }
  this["on"] = function(name2, cb) {
    if (typeof cb !== "function") {
      throw error$1("required args <name, cb>");
    }
    switch (name2) {
      case "openTag":
        onOpenTag = cb;
        break;
      case "text":
        onText = cb;
        break;
      case "closeTag":
        onCloseTag = cb;
        break;
      case "error":
        onError = cb;
        break;
      case "warn":
        onWarning = cb;
        break;
      case "cdata":
        onCDATA = cb;
        break;
      case "attention":
        onAttention = cb;
        break;
      case "question":
        onQuestion = cb;
        break;
      case "comment":
        onComment = cb;
        break;
      default:
        throw error$1("unsupported event: " + name2);
    }
    return this;
  };
  this["ns"] = function(nsMap) {
    if (typeof nsMap === "undefined") {
      nsMap = {};
    }
    if (typeof nsMap !== "object") {
      throw error$1("required args <nsMap={}>");
    }
    var _nsUriToPrefix = {}, k;
    for (k in nsMap) {
      _nsUriToPrefix[k] = nsMap[k];
    }
    _nsUriToPrefix[XSI_URI] = XSI_PREFIX;
    isNamespace = true;
    nsUriToPrefix = _nsUriToPrefix;
    return this;
  };
  this["parse"] = function(xml2) {
    if (typeof xml2 !== "string") {
      throw error$1("required args <xml=string>");
    }
    returnError = null;
    parse2(xml2);
    getContext = noopGetContext;
    parseStop = false;
    return returnError;
  };
  this["stop"] = function() {
    parseStop = true;
  };
  function parse2(xml2) {
    var nsMatrixStack = isNamespace ? [] : null, nsMatrix = isNamespace ? buildNsMatrix(nsUriToPrefix) : null, _nsMatrix, nodeStack = [], anonymousNsCount = 0, tagStart = false, tagEnd = false, i = 0, j = 0, x, y, q, w, v, xmlns, elementName, _elementName, elementProxy;
    var attrsString = "", attrsStart = 0, cachedAttrs;
    function getAttrs() {
      if (cachedAttrs !== null) {
        return cachedAttrs;
      }
      var nsUri, nsUriPrefix, nsName2, defaultAlias = isNamespace && nsMatrix["xmlns"], attrList = isNamespace && maybeNS ? [] : null, i2 = attrsStart, s = attrsString, l = s.length, hasNewMatrix, newalias, value, alias, name2, attrs = {}, seenAttrs = {}, skipAttr, w2, j2;
      parseAttr:
        for (; i2 < l; i2++) {
          skipAttr = false;
          w2 = s.charCodeAt(i2);
          if (w2 === 32 || w2 < 14 && w2 > 8) {
            continue;
          }
          if (w2 < 65 || w2 > 122 || w2 > 90 && w2 < 97) {
            if (w2 !== 95 && w2 !== 58) {
              handleWarning("illegal first char attribute name");
              skipAttr = true;
            }
          }
          for (j2 = i2 + 1; j2 < l; j2++) {
            w2 = s.charCodeAt(j2);
            if (w2 > 96 && w2 < 123 || w2 > 64 && w2 < 91 || w2 > 47 && w2 < 59 || w2 === 46 || w2 === 45 || w2 === 95) {
              continue;
            }
            if (w2 === 32 || w2 < 14 && w2 > 8) {
              handleWarning("missing attribute value");
              i2 = j2;
              continue parseAttr;
            }
            if (w2 === 61) {
              break;
            }
            handleWarning("illegal attribute name char");
            skipAttr = true;
          }
          name2 = s.substring(i2, j2);
          if (name2 === "xmlns:xmlns") {
            handleWarning("illegal declaration of xmlns");
            skipAttr = true;
          }
          w2 = s.charCodeAt(j2 + 1);
          if (w2 === 34) {
            j2 = s.indexOf('"', i2 = j2 + 2);
            if (j2 === -1) {
              j2 = s.indexOf("'", i2);
              if (j2 !== -1) {
                handleWarning("attribute value quote missmatch");
                skipAttr = true;
              }
            }
          } else if (w2 === 39) {
            j2 = s.indexOf("'", i2 = j2 + 2);
            if (j2 === -1) {
              j2 = s.indexOf('"', i2);
              if (j2 !== -1) {
                handleWarning("attribute value quote missmatch");
                skipAttr = true;
              }
            }
          } else {
            handleWarning("missing attribute value quotes");
            skipAttr = true;
            for (j2 = j2 + 1; j2 < l; j2++) {
              w2 = s.charCodeAt(j2 + 1);
              if (w2 === 32 || w2 < 14 && w2 > 8) {
                break;
              }
            }
          }
          if (j2 === -1) {
            handleWarning("missing closing quotes");
            j2 = l;
            skipAttr = true;
          }
          if (!skipAttr) {
            value = s.substring(i2, j2);
          }
          i2 = j2;
          for (; j2 + 1 < l; j2++) {
            w2 = s.charCodeAt(j2 + 1);
            if (w2 === 32 || w2 < 14 && w2 > 8) {
              break;
            }
            if (i2 === j2) {
              handleWarning("illegal character after attribute end");
              skipAttr = true;
            }
          }
          i2 = j2 + 1;
          if (skipAttr) {
            continue parseAttr;
          }
          if (name2 in seenAttrs) {
            handleWarning("attribute <" + name2 + "> already defined");
            continue;
          }
          seenAttrs[name2] = true;
          if (!isNamespace) {
            attrs[name2] = value;
            continue;
          }
          if (maybeNS) {
            newalias = name2 === "xmlns" ? "xmlns" : name2.charCodeAt(0) === 120 && name2.substr(0, 6) === "xmlns:" ? name2.substr(6) : null;
            if (newalias !== null) {
              nsUri = decodeEntities(value);
              nsUriPrefix = uriPrefix(newalias);
              alias = nsUriToPrefix[nsUri];
              if (!alias) {
                if (newalias === "xmlns" || nsUriPrefix in nsMatrix && nsMatrix[nsUriPrefix] !== nsUri) {
                  do {
                    alias = "ns" + anonymousNsCount++;
                  } while (typeof nsMatrix[alias] !== "undefined");
                } else {
                  alias = newalias;
                }
                nsUriToPrefix[nsUri] = alias;
              }
              if (nsMatrix[newalias] !== alias) {
                if (!hasNewMatrix) {
                  nsMatrix = cloneNsMatrix(nsMatrix);
                  hasNewMatrix = true;
                }
                nsMatrix[newalias] = alias;
                if (newalias === "xmlns") {
                  nsMatrix[uriPrefix(alias)] = nsUri;
                  defaultAlias = alias;
                }
                nsMatrix[nsUriPrefix] = nsUri;
              }
              attrs[name2] = value;
              continue;
            }
            attrList.push(name2, value);
            continue;
          }
          w2 = name2.indexOf(":");
          if (w2 === -1) {
            attrs[name2] = value;
            continue;
          }
          if (!(nsName2 = nsMatrix[name2.substring(0, w2)])) {
            handleWarning(missingNamespaceForPrefix(name2.substring(0, w2)));
            continue;
          }
          name2 = defaultAlias === nsName2 ? name2.substr(w2 + 1) : nsName2 + name2.substr(w2);
          if (name2 === XSI_TYPE$1) {
            w2 = value.indexOf(":");
            if (w2 !== -1) {
              nsName2 = value.substring(0, w2);
              nsName2 = nsMatrix[nsName2] || nsName2;
              value = nsName2 + value.substring(w2);
            } else {
              value = defaultAlias + ":" + value;
            }
          }
          attrs[name2] = value;
        }
      if (maybeNS) {
        for (i2 = 0, l = attrList.length; i2 < l; i2++) {
          name2 = attrList[i2++];
          value = attrList[i2];
          w2 = name2.indexOf(":");
          if (w2 !== -1) {
            if (!(nsName2 = nsMatrix[name2.substring(0, w2)])) {
              handleWarning(missingNamespaceForPrefix(name2.substring(0, w2)));
              continue;
            }
            name2 = defaultAlias === nsName2 ? name2.substr(w2 + 1) : nsName2 + name2.substr(w2);
            if (name2 === XSI_TYPE$1) {
              w2 = value.indexOf(":");
              if (w2 !== -1) {
                nsName2 = value.substring(0, w2);
                nsName2 = nsMatrix[nsName2] || nsName2;
                value = nsName2 + value.substring(w2);
              } else {
                value = defaultAlias + ":" + value;
              }
            }
          }
          attrs[name2] = value;
        }
      }
      return cachedAttrs = attrs;
    }
    function getParseContext() {
      var splitsRe = /(\r\n|\r|\n)/g;
      var line = 0;
      var column = 0;
      var startOfLine = 0;
      var endOfLine = j;
      var match2;
      var data;
      while (i >= startOfLine) {
        match2 = splitsRe.exec(xml2);
        if (!match2) {
          break;
        }
        endOfLine = match2[0].length + match2.index;
        if (endOfLine > i) {
          break;
        }
        line += 1;
        startOfLine = endOfLine;
      }
      if (i == -1) {
        column = endOfLine;
        data = xml2.substring(j);
      } else if (j === 0) {
        data = xml2.substring(j, i);
      } else {
        column = i - startOfLine;
        data = j == -1 ? xml2.substring(i) : xml2.substring(i, j + 1);
      }
      return {
        "data": data,
        "line": line,
        "column": column
      };
    }
    getContext = getParseContext;
    if (proxy) {
      elementProxy = Object.create({}, {
        "name": getter(function() {
          return elementName;
        }),
        "originalName": getter(function() {
          return _elementName;
        }),
        "attrs": getter(getAttrs),
        "ns": getter(function() {
          return nsMatrix;
        })
      });
    }
    while (j !== -1) {
      if (xml2.charCodeAt(j) === 60) {
        i = j;
      } else {
        i = xml2.indexOf("<", j);
      }
      if (i === -1) {
        if (nodeStack.length) {
          return handleError("unexpected end of file");
        }
        if (j === 0) {
          return handleError("missing start tag");
        }
        if (j < xml2.length) {
          if (xml2.substring(j).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);
          }
        }
        return;
      }
      if (j !== i) {
        if (nodeStack.length) {
          if (onText) {
            onText(xml2.substring(j, i), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }
        } else {
          if (xml2.substring(j, i).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);
            if (parseStop) {
              return;
            }
          }
        }
      }
      w = xml2.charCodeAt(i + 1);
      if (w === 33) {
        q = xml2.charCodeAt(i + 2);
        if (q === 91 && xml2.substr(i + 3, 6) === "CDATA[") {
          j = xml2.indexOf("]]>", i);
          if (j === -1) {
            return handleError("unclosed cdata");
          }
          if (onCDATA) {
            onCDATA(xml2.substring(i + 9, j), getContext);
            if (parseStop) {
              return;
            }
          }
          j += 3;
          continue;
        }
        if (q === 45 && xml2.charCodeAt(i + 3) === 45) {
          j = xml2.indexOf("-->", i);
          if (j === -1) {
            return handleError("unclosed comment");
          }
          if (onComment) {
            onComment(xml2.substring(i + 4, j), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }
          j += 3;
          continue;
        }
      }
      if (w === 63) {
        j = xml2.indexOf("?>", i);
        if (j === -1) {
          return handleError("unclosed question");
        }
        if (onQuestion) {
          onQuestion(xml2.substring(i, j + 2), getContext);
          if (parseStop) {
            return;
          }
        }
        j += 2;
        continue;
      }
      for (x = i + 1; ; x++) {
        v = xml2.charCodeAt(x);
        if (isNaN(v)) {
          j = -1;
          return handleError("unclosed tag");
        }
        if (v === 34) {
          q = xml2.indexOf('"', x + 1);
          x = q !== -1 ? q : x;
        } else if (v === 39) {
          q = xml2.indexOf("'", x + 1);
          x = q !== -1 ? q : x;
        } else if (v === 62) {
          j = x;
          break;
        }
      }
      if (w === 33) {
        if (onAttention) {
          onAttention(xml2.substring(i, j + 1), decodeEntities, getContext);
          if (parseStop) {
            return;
          }
        }
        j += 1;
        continue;
      }
      cachedAttrs = {};
      if (w === 47) {
        tagStart = false;
        tagEnd = true;
        if (!nodeStack.length) {
          return handleError("missing open tag");
        }
        x = elementName = nodeStack.pop();
        q = i + 2 + x.length;
        if (xml2.substring(i + 2, q) !== x) {
          return handleError("closing tag mismatch");
        }
        for (; q < j; q++) {
          w = xml2.charCodeAt(q);
          if (w === 32 || w > 8 && w < 14) {
            continue;
          }
          return handleError("close tag");
        }
      } else {
        if (xml2.charCodeAt(j - 1) === 47) {
          x = elementName = xml2.substring(i + 1, j - 1);
          tagStart = true;
          tagEnd = true;
        } else {
          x = elementName = xml2.substring(i + 1, j);
          tagStart = true;
          tagEnd = false;
        }
        if (!(w > 96 && w < 123 || w > 64 && w < 91 || w === 95 || w === 58)) {
          return handleError("illegal first char nodeName");
        }
        for (q = 1, y = x.length; q < y; q++) {
          w = x.charCodeAt(q);
          if (w > 96 && w < 123 || w > 64 && w < 91 || w > 47 && w < 59 || w === 45 || w === 95 || w == 46) {
            continue;
          }
          if (w === 32 || w < 14 && w > 8) {
            elementName = x.substring(0, q);
            cachedAttrs = null;
            break;
          }
          return handleError("invalid nodeName");
        }
        if (!tagEnd) {
          nodeStack.push(elementName);
        }
      }
      if (isNamespace) {
        _nsMatrix = nsMatrix;
        if (tagStart) {
          if (!tagEnd) {
            nsMatrixStack.push(_nsMatrix);
          }
          if (cachedAttrs === null) {
            if (maybeNS = x.indexOf("xmlns", q) !== -1) {
              attrsStart = q;
              attrsString = x;
              getAttrs();
              maybeNS = false;
            }
          }
        }
        _elementName = elementName;
        w = elementName.indexOf(":");
        if (w !== -1) {
          xmlns = nsMatrix[elementName.substring(0, w)];
          if (!xmlns) {
            return handleError("missing namespace on <" + _elementName + ">");
          }
          elementName = elementName.substr(w + 1);
        } else {
          xmlns = nsMatrix["xmlns"];
        }
        if (xmlns) {
          elementName = xmlns + ":" + elementName;
        }
      }
      if (tagStart) {
        attrsStart = q;
        attrsString = x;
        if (onOpenTag) {
          if (proxy) {
            onOpenTag(elementProxy, decodeEntities, tagEnd, getContext);
          } else {
            onOpenTag(elementName, getAttrs, decodeEntities, tagEnd, getContext);
          }
          if (parseStop) {
            return;
          }
        }
      }
      if (tagEnd) {
        if (onCloseTag) {
          onCloseTag(proxy ? elementProxy : elementName, decodeEntities, tagStart, getContext);
          if (parseStop) {
            return;
          }
        }
        if (isNamespace) {
          if (!tagStart) {
            nsMatrix = nsMatrixStack.pop();
          } else {
            nsMatrix = _nsMatrix;
          }
        }
      }
      j += 1;
    }
  }
}
function hasLowerCaseAlias(pkg) {
  return pkg.xml && pkg.xml.tagAlias === "lowerCase";
}
var DEFAULT_NS_MAP = {
  "xsi": "http://www.w3.org/2001/XMLSchema-instance",
  "xml": "http://www.w3.org/XML/1998/namespace"
};
var XSI_TYPE = "xsi:type";
function serializeFormat(element) {
  return element.xml && element.xml.serialize;
}
function serializeAsType(element) {
  return serializeFormat(element) === XSI_TYPE;
}
function serializeAsProperty(element) {
  return serializeFormat(element) === "property";
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function aliasToName(aliasNs, pkg) {
  if (!hasLowerCaseAlias(pkg)) {
    return aliasNs.name;
  }
  return aliasNs.prefix + ":" + capitalize(aliasNs.localName);
}
function prefixedToName(nameNs, pkg) {
  var name2 = nameNs.name, localName = nameNs.localName;
  var typePrefix = pkg.xml && pkg.xml.typePrefix;
  if (typePrefix && localName.indexOf(typePrefix) === 0) {
    return nameNs.prefix + ":" + localName.slice(typePrefix.length);
  } else {
    return name2;
  }
}
function normalizeXsiTypeName(name2, model) {
  var nameNs = parseName(name2);
  var pkg = model.getPackage(nameNs.prefix);
  return prefixedToName(nameNs, pkg);
}
function error(message) {
  return new Error(message);
}
function getModdleDescriptor(element) {
  return element.$descriptor;
}
function Context(options) {
  assign(this, options);
  this.elementsById = {};
  this.references = [];
  this.warnings = [];
  this.addReference = function(reference) {
    this.references.push(reference);
  };
  this.addElement = function(element) {
    if (!element) {
      throw error("expected element");
    }
    var elementsById = this.elementsById;
    var descriptor = getModdleDescriptor(element);
    var idProperty = descriptor.idProperty, id2;
    if (idProperty) {
      id2 = element.get(idProperty.name);
      if (id2) {
        if (!/^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i.test(id2)) {
          throw new Error("illegal ID <" + id2 + ">");
        }
        if (elementsById[id2]) {
          throw error("duplicate ID <" + id2 + ">");
        }
        elementsById[id2] = element;
      }
    }
  };
  this.addWarning = function(warning) {
    this.warnings.push(warning);
  };
}
function BaseHandler() {
}
BaseHandler.prototype.handleEnd = function() {
};
BaseHandler.prototype.handleText = function() {
};
BaseHandler.prototype.handleNode = function() {
};
function NoopHandler() {
}
NoopHandler.prototype = Object.create(BaseHandler.prototype);
NoopHandler.prototype.handleNode = function() {
  return this;
};
function BodyHandler() {
}
BodyHandler.prototype = Object.create(BaseHandler.prototype);
BodyHandler.prototype.handleText = function(text) {
  this.body = (this.body || "") + text;
};
function ReferenceHandler(property, context) {
  this.property = property;
  this.context = context;
}
ReferenceHandler.prototype = Object.create(BodyHandler.prototype);
ReferenceHandler.prototype.handleNode = function(node2) {
  if (this.element) {
    throw error("expected no sub nodes");
  } else {
    this.element = this.createReference(node2);
  }
  return this;
};
ReferenceHandler.prototype.handleEnd = function() {
  this.element.id = this.body;
};
ReferenceHandler.prototype.createReference = function(node2) {
  return {
    property: this.property.ns.name,
    id: ""
  };
};
function ValueHandler(propertyDesc, element) {
  this.element = element;
  this.propertyDesc = propertyDesc;
}
ValueHandler.prototype = Object.create(BodyHandler.prototype);
ValueHandler.prototype.handleEnd = function() {
  var value = this.body || "", element = this.element, propertyDesc = this.propertyDesc;
  value = coerceType(propertyDesc.type, value);
  if (propertyDesc.isMany) {
    element.get(propertyDesc.name).push(value);
  } else {
    element.set(propertyDesc.name, value);
  }
};
function BaseElementHandler() {
}
BaseElementHandler.prototype = Object.create(BodyHandler.prototype);
BaseElementHandler.prototype.handleNode = function(node2) {
  var parser2 = this, element = this.element;
  if (!element) {
    element = this.element = this.createElement(node2);
    this.context.addElement(element);
  } else {
    parser2 = this.handleChild(node2);
  }
  return parser2;
};
function ElementHandler(model, typeName, context) {
  this.model = model;
  this.type = model.getType(typeName);
  this.context = context;
}
ElementHandler.prototype = Object.create(BaseElementHandler.prototype);
ElementHandler.prototype.addReference = function(reference) {
  this.context.addReference(reference);
};
ElementHandler.prototype.handleText = function(text) {
  var element = this.element, descriptor = getModdleDescriptor(element), bodyProperty = descriptor.bodyProperty;
  if (!bodyProperty) {
    throw error("unexpected body text <" + text + ">");
  }
  BodyHandler.prototype.handleText.call(this, text);
};
ElementHandler.prototype.handleEnd = function() {
  var value = this.body, element = this.element, descriptor = getModdleDescriptor(element), bodyProperty = descriptor.bodyProperty;
  if (bodyProperty && value !== void 0) {
    value = coerceType(bodyProperty.type, value);
    element.set(bodyProperty.name, value);
  }
};
ElementHandler.prototype.createElement = function(node2) {
  var attributes = node2.attributes, Type = this.type, descriptor = getModdleDescriptor(Type), context = this.context, instance = new Type({}), model = this.model, propNameNs;
  forEach(attributes, function(value, name2) {
    var prop = descriptor.propertiesByName[name2], values;
    if (prop && prop.isReference) {
      if (!prop.isMany) {
        context.addReference({
          element: instance,
          property: prop.ns.name,
          id: value
        });
      } else {
        values = value.split(" ");
        forEach(values, function(v) {
          context.addReference({
            element: instance,
            property: prop.ns.name,
            id: v
          });
        });
      }
    } else {
      if (prop) {
        value = coerceType(prop.type, value);
      } else if (name2 !== "xmlns") {
        propNameNs = parseName(name2, descriptor.ns.prefix);
        if (model.getPackage(propNameNs.prefix)) {
          context.addWarning({
            message: "unknown attribute <" + name2 + ">",
            element: instance,
            property: name2,
            value
          });
        }
      }
      instance.set(name2, value);
    }
  });
  return instance;
};
ElementHandler.prototype.getPropertyForNode = function(node2) {
  var name2 = node2.name;
  var nameNs = parseName(name2);
  var type = this.type, model = this.model, descriptor = getModdleDescriptor(type);
  var propertyName = nameNs.name, property = descriptor.propertiesByName[propertyName], elementTypeName, elementType;
  if (property && !property.isAttr) {
    if (serializeAsType(property)) {
      elementTypeName = node2.attributes[XSI_TYPE];
      if (elementTypeName) {
        elementTypeName = normalizeXsiTypeName(elementTypeName, model);
        elementType = model.getType(elementTypeName);
        return assign({}, property, {
          effectiveType: getModdleDescriptor(elementType).name
        });
      }
    }
    return property;
  }
  var pkg = model.getPackage(nameNs.prefix);
  if (pkg) {
    elementTypeName = aliasToName(nameNs, pkg);
    elementType = model.getType(elementTypeName);
    property = find(descriptor.properties, function(p) {
      return !p.isVirtual && !p.isReference && !p.isAttribute && elementType.hasType(p.type);
    });
    if (property) {
      return assign({}, property, {
        effectiveType: getModdleDescriptor(elementType).name
      });
    }
  } else {
    property = find(descriptor.properties, function(p) {
      return !p.isReference && !p.isAttribute && p.type === "Element";
    });
    if (property) {
      return property;
    }
  }
  throw error("unrecognized element <" + nameNs.name + ">");
};
ElementHandler.prototype.toString = function() {
  return "ElementDescriptor[" + getModdleDescriptor(this.type).name + "]";
};
ElementHandler.prototype.valueHandler = function(propertyDesc, element) {
  return new ValueHandler(propertyDesc, element);
};
ElementHandler.prototype.referenceHandler = function(propertyDesc) {
  return new ReferenceHandler(propertyDesc, this.context);
};
ElementHandler.prototype.handler = function(type) {
  if (type === "Element") {
    return new GenericElementHandler(this.model, type, this.context);
  } else {
    return new ElementHandler(this.model, type, this.context);
  }
};
ElementHandler.prototype.handleChild = function(node2) {
  var propertyDesc, type, element, childHandler;
  propertyDesc = this.getPropertyForNode(node2);
  element = this.element;
  type = propertyDesc.effectiveType || propertyDesc.type;
  if (isSimple(type)) {
    return this.valueHandler(propertyDesc, element);
  }
  if (propertyDesc.isReference) {
    childHandler = this.referenceHandler(propertyDesc).handleNode(node2);
  } else {
    childHandler = this.handler(type).handleNode(node2);
  }
  var newElement = childHandler.element;
  if (newElement !== void 0) {
    if (propertyDesc.isMany) {
      element.get(propertyDesc.name).push(newElement);
    } else {
      element.set(propertyDesc.name, newElement);
    }
    if (propertyDesc.isReference) {
      assign(newElement, {
        element
      });
      this.context.addReference(newElement);
    } else {
      newElement.$parent = element;
    }
  }
  return childHandler;
};
function RootElementHandler(model, typeName, context) {
  ElementHandler.call(this, model, typeName, context);
}
RootElementHandler.prototype = Object.create(ElementHandler.prototype);
RootElementHandler.prototype.createElement = function(node2) {
  var name2 = node2.name, nameNs = parseName(name2), model = this.model, type = this.type, pkg = model.getPackage(nameNs.prefix), typeName = pkg && aliasToName(nameNs, pkg) || name2;
  if (!type.hasType(typeName)) {
    throw error("unexpected element <" + node2.originalName + ">");
  }
  return ElementHandler.prototype.createElement.call(this, node2);
};
function GenericElementHandler(model, typeName, context) {
  this.model = model;
  this.context = context;
}
GenericElementHandler.prototype = Object.create(BaseElementHandler.prototype);
GenericElementHandler.prototype.createElement = function(node2) {
  var name2 = node2.name, ns2 = parseName(name2), prefix2 = ns2.prefix, uri2 = node2.ns[prefix2 + "$uri"], attributes = node2.attributes;
  return this.model.createAny(name2, uri2, attributes);
};
GenericElementHandler.prototype.handleChild = function(node2) {
  var handler = new GenericElementHandler(this.model, "Element", this.context).handleNode(node2), element = this.element;
  var newElement = handler.element, children;
  if (newElement !== void 0) {
    children = element.$children = element.$children || [];
    children.push(newElement);
    newElement.$parent = element;
  }
  return handler;
};
GenericElementHandler.prototype.handleEnd = function() {
  if (this.body) {
    this.element.$body = this.body;
  }
};
function Reader(options) {
  if (options instanceof Moddle) {
    options = {
      model: options
    };
  }
  assign(this, { lax: false }, options);
}
Reader.prototype.fromXML = function(xml2, options, done) {
  var rootHandler = options.rootHandler;
  if (options instanceof ElementHandler) {
    rootHandler = options;
    options = {};
  } else {
    if (typeof options === "string") {
      rootHandler = this.handler(options);
      options = {};
    } else if (typeof rootHandler === "string") {
      rootHandler = this.handler(rootHandler);
    }
  }
  var model = this.model, lax = this.lax;
  var context = new Context(assign({}, options, { rootHandler })), parser2 = new Parser({ proxy: true }), stack = createStack();
  rootHandler.context = context;
  stack.push(rootHandler);
  function handleError(err, getContext, lax2) {
    var ctx = getContext();
    var line = ctx.line, column = ctx.column, data = ctx.data;
    if (data.charAt(0) === "<" && data.indexOf(" ") !== -1) {
      data = data.slice(0, data.indexOf(" ")) + ">";
    }
    var message = "unparsable content " + (data ? data + " " : "") + "detected\n	line: " + line + "\n	column: " + column + "\n	nested error: " + err.message;
    if (lax2) {
      context.addWarning({
        message,
        error: err
      });
      return true;
    } else {
      throw error(message);
    }
  }
  function handleWarning(err, getContext) {
    return handleError(err, getContext, true);
  }
  function resolveReferences() {
    var elementsById = context.elementsById;
    var references = context.references;
    var i, r;
    for (i = 0; r = references[i]; i++) {
      var element = r.element;
      var reference = elementsById[r.id];
      var property = getModdleDescriptor(element).propertiesByName[r.property];
      if (!reference) {
        context.addWarning({
          message: "unresolved reference <" + r.id + ">",
          element: r.element,
          property: r.property,
          value: r.id
        });
      }
      if (property.isMany) {
        var collection2 = element.get(property.name), idx = collection2.indexOf(r);
        if (idx === -1) {
          idx = collection2.length;
        }
        if (!reference) {
          collection2.splice(idx, 1);
        } else {
          collection2[idx] = reference;
        }
      } else {
        element.set(property.name, reference);
      }
    }
  }
  function handleClose() {
    stack.pop().handleEnd();
  }
  var PREAMBLE_START_PATTERN = /^<\?xml /i;
  var ENCODING_PATTERN = / encoding="([^"]+)"/i;
  var UTF_8_PATTERN = /^utf-8$/i;
  function handleQuestion(question) {
    if (!PREAMBLE_START_PATTERN.test(question)) {
      return;
    }
    var match2 = ENCODING_PATTERN.exec(question);
    var encoding = match2 && match2[1];
    if (!encoding || UTF_8_PATTERN.test(encoding)) {
      return;
    }
    context.addWarning({
      message: "unsupported document encoding <" + encoding + ">, falling back to UTF-8"
    });
  }
  function handleOpen(node2, getContext) {
    var handler = stack.peek();
    try {
      stack.push(handler.handleNode(node2));
    } catch (err) {
      if (handleError(err, getContext, lax)) {
        stack.push(new NoopHandler());
      }
    }
  }
  function handleCData(text, getContext) {
    try {
      stack.peek().handleText(text);
    } catch (err) {
      handleWarning(err, getContext);
    }
  }
  function handleText(text, getContext) {
    if (!text.trim()) {
      return;
    }
    handleCData(text, getContext);
  }
  var uriMap = model.getPackages().reduce(function(uriMap2, p) {
    uriMap2[p.uri] = p.prefix;
    return uriMap2;
  }, {
    "http://www.w3.org/XML/1998/namespace": "xml"
  });
  parser2.ns(uriMap).on("openTag", function(obj, decodeStr, selfClosing, getContext) {
    var attrs = obj.attrs || {};
    var decodedAttrs = Object.keys(attrs).reduce(function(d, key) {
      var value = decodeStr(attrs[key]);
      d[key] = value;
      return d;
    }, {});
    var node2 = {
      name: obj.name,
      originalName: obj.originalName,
      attributes: decodedAttrs,
      ns: obj.ns
    };
    handleOpen(node2, getContext);
  }).on("question", handleQuestion).on("closeTag", handleClose).on("cdata", handleCData).on("text", function(text, decodeEntities2, getContext) {
    handleText(decodeEntities2(text), getContext);
  }).on("error", handleError).on("warn", handleWarning);
  return new Promise(function(resolve, reject) {
    var err;
    try {
      parser2.parse(xml2);
      resolveReferences();
    } catch (e) {
      err = e;
    }
    var rootElement = rootHandler.element;
    if (!err && !rootElement) {
      err = error("failed to parse document as <" + rootHandler.type.$descriptor.name + ">");
    }
    var warnings = context.warnings;
    var references = context.references;
    var elementsById = context.elementsById;
    if (err) {
      err.warnings = warnings;
      return reject(err);
    } else {
      return resolve({
        rootElement,
        elementsById,
        references,
        warnings
      });
    }
  });
};
Reader.prototype.handler = function(name2) {
  return new RootElementHandler(this.model, name2);
};
function createStack() {
  var stack = [];
  Object.defineProperty(stack, "peek", {
    value: function() {
      return this[this.length - 1];
    }
  });
  return stack;
}
var XML_PREAMBLE = '<?xml version="1.0" encoding="UTF-8"?>\n';
var ESCAPE_ATTR_CHARS = /<|>|'|"|&|\n\r|\n/g;
var ESCAPE_CHARS = /<|>|&/g;
function Namespaces(parent) {
  var prefixMap = {};
  var uriMap = {};
  var used = {};
  var wellknown = [];
  var custom = [];
  this.byUri = function(uri2) {
    return uriMap[uri2] || parent && parent.byUri(uri2);
  };
  this.add = function(ns2, isWellknown) {
    uriMap[ns2.uri] = ns2;
    if (isWellknown) {
      wellknown.push(ns2);
    } else {
      custom.push(ns2);
    }
    this.mapPrefix(ns2.prefix, ns2.uri);
  };
  this.uriByPrefix = function(prefix2) {
    return prefixMap[prefix2 || "xmlns"];
  };
  this.mapPrefix = function(prefix2, uri2) {
    prefixMap[prefix2 || "xmlns"] = uri2;
  };
  this.getNSKey = function(ns2) {
    return ns2.prefix !== void 0 ? ns2.uri + "|" + ns2.prefix : ns2.uri;
  };
  this.logUsed = function(ns2) {
    var uri2 = ns2.uri;
    var nsKey = this.getNSKey(ns2);
    used[nsKey] = this.byUri(uri2);
    if (parent) {
      parent.logUsed(ns2);
    }
  };
  this.getUsed = function(ns2) {
    function isUsed(ns3) {
      var nsKey = self2.getNSKey(ns3);
      return used[nsKey];
    }
    var self2 = this;
    var allNs = [].concat(wellknown, custom);
    return allNs.filter(isUsed);
  };
}
function lower(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
function nameToAlias(name2, pkg) {
  if (hasLowerCaseAlias(pkg)) {
    return lower(name2);
  } else {
    return name2;
  }
}
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}
function nsName(ns2) {
  if (isString(ns2)) {
    return ns2;
  } else {
    return (ns2.prefix ? ns2.prefix + ":" : "") + ns2.localName;
  }
}
function getNsAttrs(namespaces) {
  return namespaces.getUsed().filter(function(ns2) {
    return ns2.prefix !== "xml";
  }).map(function(ns2) {
    var name2 = "xmlns" + (ns2.prefix ? ":" + ns2.prefix : "");
    return { name: name2, value: ns2.uri };
  });
}
function getElementNs(ns2, descriptor) {
  if (descriptor.isGeneric) {
    return assign({ localName: descriptor.ns.localName }, ns2);
  } else {
    return assign({ localName: nameToAlias(descriptor.ns.localName, descriptor.$pkg) }, ns2);
  }
}
function getPropertyNs(ns2, descriptor) {
  return assign({ localName: descriptor.ns.localName }, ns2);
}
function getSerializableProperties(element) {
  var descriptor = element.$descriptor;
  return filter(descriptor.properties, function(p) {
    var name2 = p.name;
    if (p.isVirtual) {
      return false;
    }
    if (!has(element, name2)) {
      return false;
    }
    var value = element[name2];
    if (value === p.default) {
      return false;
    }
    if (value === null) {
      return false;
    }
    return p.isMany ? value.length : true;
  });
}
var ESCAPE_ATTR_MAP = {
  "\n": "#10",
  "\n\r": "#10",
  '"': "#34",
  "'": "#39",
  "<": "#60",
  ">": "#62",
  "&": "#38"
};
var ESCAPE_MAP = {
  "<": "lt",
  ">": "gt",
  "&": "amp"
};
function escape(str, charPattern, replaceMap) {
  str = isString(str) ? str : "" + str;
  return str.replace(charPattern, function(s) {
    return "&" + replaceMap[s] + ";";
  });
}
function escapeAttr(str) {
  return escape(str, ESCAPE_ATTR_CHARS, ESCAPE_ATTR_MAP);
}
function escapeBody(str) {
  return escape(str, ESCAPE_CHARS, ESCAPE_MAP);
}
function filterAttributes(props) {
  return filter(props, function(p) {
    return p.isAttr;
  });
}
function filterContained(props) {
  return filter(props, function(p) {
    return !p.isAttr;
  });
}
function ReferenceSerializer(tagName) {
  this.tagName = tagName;
}
ReferenceSerializer.prototype.build = function(element) {
  this.element = element;
  return this;
};
ReferenceSerializer.prototype.serializeTo = function(writer) {
  writer.appendIndent().append("<" + this.tagName + ">" + this.element.id + "</" + this.tagName + ">").appendNewLine();
};
function BodySerializer() {
}
BodySerializer.prototype.serializeValue = BodySerializer.prototype.serializeTo = function(writer) {
  writer.append(this.escape ? escapeBody(this.value) : this.value);
};
BodySerializer.prototype.build = function(prop, value) {
  this.value = value;
  if (prop.type === "String" && value.search(ESCAPE_CHARS) !== -1) {
    this.escape = true;
  }
  return this;
};
function ValueSerializer(tagName) {
  this.tagName = tagName;
}
inherits(ValueSerializer, BodySerializer);
ValueSerializer.prototype.serializeTo = function(writer) {
  writer.appendIndent().append("<" + this.tagName + ">");
  this.serializeValue(writer);
  writer.append("</" + this.tagName + ">").appendNewLine();
};
function ElementSerializer(parent, propertyDescriptor) {
  this.body = [];
  this.attrs = [];
  this.parent = parent;
  this.propertyDescriptor = propertyDescriptor;
}
ElementSerializer.prototype.build = function(element) {
  this.element = element;
  var elementDescriptor = element.$descriptor, propertyDescriptor = this.propertyDescriptor;
  var otherAttrs, properties;
  var isGeneric = elementDescriptor.isGeneric;
  if (isGeneric) {
    otherAttrs = this.parseGeneric(element);
  } else {
    otherAttrs = this.parseNsAttributes(element);
  }
  if (propertyDescriptor) {
    this.ns = this.nsPropertyTagName(propertyDescriptor);
  } else {
    this.ns = this.nsTagName(elementDescriptor);
  }
  this.tagName = this.addTagName(this.ns);
  if (!isGeneric) {
    properties = getSerializableProperties(element);
    this.parseAttributes(filterAttributes(properties));
    this.parseContainments(filterContained(properties));
  }
  this.parseGenericAttributes(element, otherAttrs);
  return this;
};
ElementSerializer.prototype.nsTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getElementNs(effectiveNs, descriptor);
};
ElementSerializer.prototype.nsPropertyTagName = function(descriptor) {
  var effectiveNs = this.logNamespaceUsed(descriptor.ns);
  return getPropertyNs(effectiveNs, descriptor);
};
ElementSerializer.prototype.isLocalNs = function(ns2) {
  return ns2.uri === this.ns.uri;
};
ElementSerializer.prototype.nsAttributeName = function(element) {
  var ns2;
  if (isString(element)) {
    ns2 = parseName(element);
  } else {
    ns2 = element.ns;
  }
  if (element.inherited) {
    return { localName: ns2.localName };
  }
  var effectiveNs = this.logNamespaceUsed(ns2);
  this.getNamespaces().logUsed(effectiveNs);
  if (this.isLocalNs(effectiveNs)) {
    return { localName: ns2.localName };
  } else {
    return assign({ localName: ns2.localName }, effectiveNs);
  }
};
ElementSerializer.prototype.parseGeneric = function(element) {
  var self2 = this, body = this.body;
  var attributes = [];
  forEach(element, function(val, key) {
    var nonNsAttr;
    if (key === "$body") {
      body.push(new BodySerializer().build({ type: "String" }, val));
    } else if (key === "$children") {
      forEach(val, function(child) {
        body.push(new ElementSerializer(self2).build(child));
      });
    } else if (key.indexOf("$") !== 0) {
      nonNsAttr = self2.parseNsAttribute(element, key, val);
      if (nonNsAttr) {
        attributes.push({ name: key, value: val });
      }
    }
  });
  return attributes;
};
ElementSerializer.prototype.parseNsAttribute = function(element, name2, value) {
  var model = element.$model;
  var nameNs = parseName(name2);
  var ns2;
  if (nameNs.prefix === "xmlns") {
    ns2 = { prefix: nameNs.localName, uri: value };
  }
  if (!nameNs.prefix && nameNs.localName === "xmlns") {
    ns2 = { uri: value };
  }
  if (!ns2) {
    return {
      name: name2,
      value
    };
  }
  if (model && model.getPackage(value)) {
    this.logNamespace(ns2, true, true);
  } else {
    var actualNs = this.logNamespaceUsed(ns2, true);
    this.getNamespaces().logUsed(actualNs);
  }
};
ElementSerializer.prototype.parseNsAttributes = function(element, attrs) {
  var self2 = this;
  var genericAttrs = element.$attrs;
  var attributes = [];
  forEach(genericAttrs, function(value, name2) {
    var nonNsAttr = self2.parseNsAttribute(element, name2, value);
    if (nonNsAttr) {
      attributes.push(nonNsAttr);
    }
  });
  return attributes;
};
ElementSerializer.prototype.parseGenericAttributes = function(element, attributes) {
  var self2 = this;
  forEach(attributes, function(attr2) {
    if (attr2.name === XSI_TYPE) {
      return;
    }
    try {
      self2.addAttribute(self2.nsAttributeName(attr2.name), attr2.value);
    } catch (e) {
      console.warn("missing namespace information for ", attr2.name, "=", attr2.value, "on", element, e);
    }
  });
};
ElementSerializer.prototype.parseContainments = function(properties) {
  var self2 = this, body = this.body, element = this.element;
  forEach(properties, function(p) {
    var value = element.get(p.name), isReference = p.isReference, isMany = p.isMany;
    if (!isMany) {
      value = [value];
    }
    if (p.isBody) {
      body.push(new BodySerializer().build(p, value[0]));
    } else if (isSimple(p.type)) {
      forEach(value, function(v) {
        body.push(new ValueSerializer(self2.addTagName(self2.nsPropertyTagName(p))).build(p, v));
      });
    } else if (isReference) {
      forEach(value, function(v) {
        body.push(new ReferenceSerializer(self2.addTagName(self2.nsPropertyTagName(p))).build(v));
      });
    } else {
      var asType = serializeAsType(p), asProperty = serializeAsProperty(p);
      forEach(value, function(v) {
        var serializer;
        if (asType) {
          serializer = new TypeSerializer(self2, p);
        } else if (asProperty) {
          serializer = new ElementSerializer(self2, p);
        } else {
          serializer = new ElementSerializer(self2);
        }
        body.push(serializer.build(v));
      });
    }
  });
};
ElementSerializer.prototype.getNamespaces = function(local) {
  var namespaces = this.namespaces, parent = this.parent, parentNamespaces;
  if (!namespaces) {
    parentNamespaces = parent && parent.getNamespaces();
    if (local || !parentNamespaces) {
      this.namespaces = namespaces = new Namespaces(parentNamespaces);
    } else {
      namespaces = parentNamespaces;
    }
  }
  return namespaces;
};
ElementSerializer.prototype.logNamespace = function(ns2, wellknown, local) {
  var namespaces = this.getNamespaces(local);
  var nsUri = ns2.uri, nsPrefix = ns2.prefix;
  var existing = namespaces.byUri(nsUri);
  if (!existing || local) {
    namespaces.add(ns2, wellknown);
  }
  namespaces.mapPrefix(nsPrefix, nsUri);
  return ns2;
};
ElementSerializer.prototype.logNamespaceUsed = function(ns2, local) {
  var element = this.element, model = element.$model, namespaces = this.getNamespaces(local);
  var prefix2 = ns2.prefix, uri2 = ns2.uri, newPrefix, idx, wellknownUri;
  if (!prefix2 && !uri2) {
    return { localName: ns2.localName };
  }
  wellknownUri = DEFAULT_NS_MAP[prefix2] || model && (model.getPackage(prefix2) || {}).uri;
  uri2 = uri2 || wellknownUri || namespaces.uriByPrefix(prefix2);
  if (!uri2) {
    throw new Error("no namespace uri given for prefix <" + prefix2 + ">");
  }
  ns2 = namespaces.byUri(uri2);
  if (!ns2) {
    newPrefix = prefix2;
    idx = 1;
    while (namespaces.uriByPrefix(newPrefix)) {
      newPrefix = prefix2 + "_" + idx++;
    }
    ns2 = this.logNamespace({ prefix: newPrefix, uri: uri2 }, wellknownUri === uri2);
  }
  if (prefix2) {
    namespaces.mapPrefix(prefix2, uri2);
  }
  return ns2;
};
ElementSerializer.prototype.parseAttributes = function(properties) {
  var self2 = this, element = this.element;
  forEach(properties, function(p) {
    var value = element.get(p.name);
    if (p.isReference) {
      if (!p.isMany) {
        value = value.id;
      } else {
        var values = [];
        forEach(value, function(v) {
          values.push(v.id);
        });
        value = values.join(" ");
      }
    }
    self2.addAttribute(self2.nsAttributeName(p), value);
  });
};
ElementSerializer.prototype.addTagName = function(nsTagName) {
  var actualNs = this.logNamespaceUsed(nsTagName);
  this.getNamespaces().logUsed(actualNs);
  return nsName(nsTagName);
};
ElementSerializer.prototype.addAttribute = function(name2, value) {
  var attrs = this.attrs;
  if (isString(value)) {
    value = escapeAttr(value);
  }
  attrs.push({ name: name2, value });
};
ElementSerializer.prototype.serializeAttributes = function(writer) {
  var attrs = this.attrs, namespaces = this.namespaces;
  if (namespaces) {
    attrs = getNsAttrs(namespaces).concat(attrs);
  }
  forEach(attrs, function(a) {
    writer.append(" ").append(nsName(a.name)).append('="').append(a.value).append('"');
  });
};
ElementSerializer.prototype.serializeTo = function(writer) {
  var firstBody = this.body[0], indent = firstBody && firstBody.constructor !== BodySerializer;
  writer.appendIndent().append("<" + this.tagName);
  this.serializeAttributes(writer);
  writer.append(firstBody ? ">" : " />");
  if (firstBody) {
    if (indent) {
      writer.appendNewLine().indent();
    }
    forEach(this.body, function(b) {
      b.serializeTo(writer);
    });
    if (indent) {
      writer.unindent().appendIndent();
    }
    writer.append("</" + this.tagName + ">");
  }
  writer.appendNewLine();
};
function TypeSerializer(parent, propertyDescriptor) {
  ElementSerializer.call(this, parent, propertyDescriptor);
}
inherits(TypeSerializer, ElementSerializer);
TypeSerializer.prototype.parseNsAttributes = function(element) {
  var attributes = ElementSerializer.prototype.parseNsAttributes.call(this, element);
  var descriptor = element.$descriptor;
  if (descriptor.name === this.propertyDescriptor.type) {
    return attributes;
  }
  var typeNs = this.typeNs = this.nsTagName(descriptor);
  this.getNamespaces().logUsed(this.typeNs);
  var pkg = element.$model.getPackage(typeNs.uri), typePrefix = pkg.xml && pkg.xml.typePrefix || "";
  this.addAttribute(this.nsAttributeName(XSI_TYPE), (typeNs.prefix ? typeNs.prefix + ":" : "") + typePrefix + descriptor.ns.localName);
  return attributes;
};
TypeSerializer.prototype.isLocalNs = function(ns2) {
  return ns2.uri === (this.typeNs || this.ns).uri;
};
function SavingWriter() {
  this.value = "";
  this.write = function(str) {
    this.value += str;
  };
}
function FormatingWriter(out, format2) {
  var indent = [""];
  this.append = function(str) {
    out.write(str);
    return this;
  };
  this.appendNewLine = function() {
    if (format2) {
      out.write("\n");
    }
    return this;
  };
  this.appendIndent = function() {
    if (format2) {
      out.write(indent.join("  "));
    }
    return this;
  };
  this.indent = function() {
    indent.push("");
    return this;
  };
  this.unindent = function() {
    indent.pop();
    return this;
  };
}
function Writer(options) {
  options = assign({ format: false, preamble: true }, options || {});
  function toXML(tree, writer) {
    var internalWriter = writer || new SavingWriter();
    var formatingWriter = new FormatingWriter(internalWriter, options.format);
    if (options.preamble) {
      formatingWriter.append(XML_PREAMBLE);
    }
    new ElementSerializer().build(tree).serializeTo(formatingWriter);
    if (!writer) {
      return internalWriter.value;
    }
  }
  return {
    toXML
  };
}
function BpmnModdle(packages2, options) {
  Moddle.call(this, packages2, options);
}
BpmnModdle.prototype = Object.create(Moddle.prototype);
BpmnModdle.prototype.fromXML = function(xmlStr, typeName, options) {
  if (!isString(typeName)) {
    options = typeName;
    typeName = "bpmn:Definitions";
  }
  var reader = new Reader(assign({ model: this, lax: true }, options));
  var rootHandler = reader.handler(typeName);
  return reader.fromXML(xmlStr, rootHandler);
};
BpmnModdle.prototype.toXML = function(element, options) {
  var writer = new Writer(options);
  return new Promise(function(resolve, reject) {
    try {
      var result = writer.toXML(element);
      return resolve({
        xml: result
      });
    } catch (err) {
      return reject(err);
    }
  });
};
var name = "BPMN20";
var uri = "http://www.omg.org/spec/BPMN/20100524/MODEL";
var prefix = "bpmn";
var associations = [];
var types = [
  {
    name: "Interface",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "operations",
        type: "Operation",
        isMany: true
      },
      {
        name: "implementationRef",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Operation",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "inMessageRef",
        type: "Message",
        isReference: true
      },
      {
        name: "outMessageRef",
        type: "Message",
        isReference: true
      },
      {
        name: "errorRef",
        type: "Error",
        isMany: true,
        isReference: true
      },
      {
        name: "implementationRef",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "EndPoint",
    superClass: [
      "RootElement"
    ]
  },
  {
    name: "Auditing",
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "GlobalTask",
    superClass: [
      "CallableElement"
    ],
    properties: [
      {
        name: "resources",
        type: "ResourceRole",
        isMany: true
      }
    ]
  },
  {
    name: "Monitoring",
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "Performer",
    superClass: [
      "ResourceRole"
    ]
  },
  {
    name: "Process",
    superClass: [
      "FlowElementsContainer",
      "CallableElement"
    ],
    properties: [
      {
        name: "processType",
        type: "ProcessType",
        isAttr: true
      },
      {
        name: "isClosed",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "auditing",
        type: "Auditing"
      },
      {
        name: "monitoring",
        type: "Monitoring"
      },
      {
        name: "properties",
        type: "Property",
        isMany: true
      },
      {
        name: "laneSets",
        isMany: true,
        replaces: "FlowElementsContainer#laneSets",
        type: "LaneSet"
      },
      {
        name: "flowElements",
        isMany: true,
        replaces: "FlowElementsContainer#flowElements",
        type: "FlowElement"
      },
      {
        name: "artifacts",
        type: "Artifact",
        isMany: true
      },
      {
        name: "resources",
        type: "ResourceRole",
        isMany: true
      },
      {
        name: "correlationSubscriptions",
        type: "CorrelationSubscription",
        isMany: true
      },
      {
        name: "supports",
        type: "Process",
        isMany: true,
        isReference: true
      },
      {
        name: "definitionalCollaborationRef",
        type: "Collaboration",
        isAttr: true,
        isReference: true
      },
      {
        name: "isExecutable",
        isAttr: true,
        type: "Boolean"
      }
    ]
  },
  {
    name: "LaneSet",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "lanes",
        type: "Lane",
        isMany: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Lane",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "partitionElementRef",
        type: "BaseElement",
        isAttr: true,
        isReference: true
      },
      {
        name: "partitionElement",
        type: "BaseElement"
      },
      {
        name: "flowNodeRef",
        type: "FlowNode",
        isMany: true,
        isReference: true
      },
      {
        name: "childLaneSet",
        type: "LaneSet",
        xml: {
          serialize: "xsi:type"
        }
      }
    ]
  },
  {
    name: "GlobalManualTask",
    superClass: [
      "GlobalTask"
    ]
  },
  {
    name: "ManualTask",
    superClass: [
      "Task"
    ]
  },
  {
    name: "UserTask",
    superClass: [
      "Task"
    ],
    properties: [
      {
        name: "renderings",
        type: "Rendering",
        isMany: true
      },
      {
        name: "implementation",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Rendering",
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "HumanPerformer",
    superClass: [
      "Performer"
    ]
  },
  {
    name: "PotentialOwner",
    superClass: [
      "HumanPerformer"
    ]
  },
  {
    name: "GlobalUserTask",
    superClass: [
      "GlobalTask"
    ],
    properties: [
      {
        name: "implementation",
        isAttr: true,
        type: "String"
      },
      {
        name: "renderings",
        type: "Rendering",
        isMany: true
      }
    ]
  },
  {
    name: "Gateway",
    isAbstract: true,
    superClass: [
      "FlowNode"
    ],
    properties: [
      {
        name: "gatewayDirection",
        type: "GatewayDirection",
        "default": "Unspecified",
        isAttr: true
      }
    ]
  },
  {
    name: "EventBasedGateway",
    superClass: [
      "Gateway"
    ],
    properties: [
      {
        name: "instantiate",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "eventGatewayType",
        type: "EventBasedGatewayType",
        isAttr: true,
        "default": "Exclusive"
      }
    ]
  },
  {
    name: "ComplexGateway",
    superClass: [
      "Gateway"
    ],
    properties: [
      {
        name: "activationCondition",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "default",
        type: "SequenceFlow",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ExclusiveGateway",
    superClass: [
      "Gateway"
    ],
    properties: [
      {
        name: "default",
        type: "SequenceFlow",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "InclusiveGateway",
    superClass: [
      "Gateway"
    ],
    properties: [
      {
        name: "default",
        type: "SequenceFlow",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ParallelGateway",
    superClass: [
      "Gateway"
    ]
  },
  {
    name: "RootElement",
    isAbstract: true,
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "Relationship",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "type",
        isAttr: true,
        type: "String"
      },
      {
        name: "direction",
        type: "RelationshipDirection",
        isAttr: true
      },
      {
        name: "source",
        isMany: true,
        isReference: true,
        type: "Element"
      },
      {
        name: "target",
        isMany: true,
        isReference: true,
        type: "Element"
      }
    ]
  },
  {
    name: "BaseElement",
    isAbstract: true,
    properties: [
      {
        name: "id",
        isAttr: true,
        type: "String",
        isId: true
      },
      {
        name: "documentation",
        type: "Documentation",
        isMany: true
      },
      {
        name: "extensionDefinitions",
        type: "ExtensionDefinition",
        isMany: true,
        isReference: true
      },
      {
        name: "extensionElements",
        type: "ExtensionElements"
      }
    ]
  },
  {
    name: "Extension",
    properties: [
      {
        name: "mustUnderstand",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "definition",
        type: "ExtensionDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ExtensionDefinition",
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "extensionAttributeDefinitions",
        type: "ExtensionAttributeDefinition",
        isMany: true
      }
    ]
  },
  {
    name: "ExtensionAttributeDefinition",
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "type",
        isAttr: true,
        type: "String"
      },
      {
        name: "isReference",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "extensionDefinition",
        type: "ExtensionDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ExtensionElements",
    properties: [
      {
        name: "valueRef",
        isAttr: true,
        isReference: true,
        type: "Element"
      },
      {
        name: "values",
        type: "Element",
        isMany: true
      },
      {
        name: "extensionAttributeDefinition",
        type: "ExtensionAttributeDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Documentation",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "text",
        type: "String",
        isBody: true
      },
      {
        name: "textFormat",
        "default": "text/plain",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Event",
    isAbstract: true,
    superClass: [
      "FlowNode",
      "InteractionNode"
    ],
    properties: [
      {
        name: "properties",
        type: "Property",
        isMany: true
      }
    ]
  },
  {
    name: "IntermediateCatchEvent",
    superClass: [
      "CatchEvent"
    ]
  },
  {
    name: "IntermediateThrowEvent",
    superClass: [
      "ThrowEvent"
    ]
  },
  {
    name: "EndEvent",
    superClass: [
      "ThrowEvent"
    ]
  },
  {
    name: "StartEvent",
    superClass: [
      "CatchEvent"
    ],
    properties: [
      {
        name: "isInterrupting",
        "default": true,
        isAttr: true,
        type: "Boolean"
      }
    ]
  },
  {
    name: "ThrowEvent",
    isAbstract: true,
    superClass: [
      "Event"
    ],
    properties: [
      {
        name: "dataInputs",
        type: "DataInput",
        isMany: true
      },
      {
        name: "dataInputAssociations",
        type: "DataInputAssociation",
        isMany: true
      },
      {
        name: "inputSet",
        type: "InputSet"
      },
      {
        name: "eventDefinitions",
        type: "EventDefinition",
        isMany: true
      },
      {
        name: "eventDefinitionRef",
        type: "EventDefinition",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "CatchEvent",
    isAbstract: true,
    superClass: [
      "Event"
    ],
    properties: [
      {
        name: "parallelMultiple",
        isAttr: true,
        type: "Boolean",
        "default": false
      },
      {
        name: "dataOutputs",
        type: "DataOutput",
        isMany: true
      },
      {
        name: "dataOutputAssociations",
        type: "DataOutputAssociation",
        isMany: true
      },
      {
        name: "outputSet",
        type: "OutputSet"
      },
      {
        name: "eventDefinitions",
        type: "EventDefinition",
        isMany: true
      },
      {
        name: "eventDefinitionRef",
        type: "EventDefinition",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "BoundaryEvent",
    superClass: [
      "CatchEvent"
    ],
    properties: [
      {
        name: "cancelActivity",
        "default": true,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "attachedToRef",
        type: "Activity",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "EventDefinition",
    isAbstract: true,
    superClass: [
      "RootElement"
    ]
  },
  {
    name: "CancelEventDefinition",
    superClass: [
      "EventDefinition"
    ]
  },
  {
    name: "ErrorEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "errorRef",
        type: "Error",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "TerminateEventDefinition",
    superClass: [
      "EventDefinition"
    ]
  },
  {
    name: "EscalationEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "escalationRef",
        type: "Escalation",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Escalation",
    properties: [
      {
        name: "structureRef",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "escalationCode",
        isAttr: true,
        type: "String"
      }
    ],
    superClass: [
      "RootElement"
    ]
  },
  {
    name: "CompensateEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "waitForCompletion",
        isAttr: true,
        type: "Boolean",
        "default": true
      },
      {
        name: "activityRef",
        type: "Activity",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "TimerEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "timeDate",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "timeCycle",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "timeDuration",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      }
    ]
  },
  {
    name: "LinkEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "target",
        type: "LinkEventDefinition",
        isAttr: true,
        isReference: true
      },
      {
        name: "source",
        type: "LinkEventDefinition",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "MessageEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "messageRef",
        type: "Message",
        isAttr: true,
        isReference: true
      },
      {
        name: "operationRef",
        type: "Operation",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ConditionalEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "condition",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      }
    ]
  },
  {
    name: "SignalEventDefinition",
    superClass: [
      "EventDefinition"
    ],
    properties: [
      {
        name: "signalRef",
        type: "Signal",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Signal",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "structureRef",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ImplicitThrowEvent",
    superClass: [
      "ThrowEvent"
    ]
  },
  {
    name: "DataState",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ItemAwareElement",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "itemSubjectRef",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      },
      {
        name: "dataState",
        type: "DataState"
      }
    ]
  },
  {
    name: "DataAssociation",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "sourceRef",
        type: "ItemAwareElement",
        isMany: true,
        isReference: true
      },
      {
        name: "targetRef",
        type: "ItemAwareElement",
        isReference: true
      },
      {
        name: "transformation",
        type: "FormalExpression",
        xml: {
          serialize: "property"
        }
      },
      {
        name: "assignment",
        type: "Assignment",
        isMany: true
      }
    ]
  },
  {
    name: "DataInput",
    superClass: [
      "ItemAwareElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "isCollection",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "inputSetRef",
        type: "InputSet",
        isMany: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "inputSetWithOptional",
        type: "InputSet",
        isMany: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "inputSetWithWhileExecuting",
        type: "InputSet",
        isMany: true,
        isVirtual: true,
        isReference: true
      }
    ]
  },
  {
    name: "DataOutput",
    superClass: [
      "ItemAwareElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "isCollection",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "outputSetRef",
        type: "OutputSet",
        isMany: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "outputSetWithOptional",
        type: "OutputSet",
        isMany: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "outputSetWithWhileExecuting",
        type: "OutputSet",
        isMany: true,
        isVirtual: true,
        isReference: true
      }
    ]
  },
  {
    name: "InputSet",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "dataInputRefs",
        type: "DataInput",
        isMany: true,
        isReference: true
      },
      {
        name: "optionalInputRefs",
        type: "DataInput",
        isMany: true,
        isReference: true
      },
      {
        name: "whileExecutingInputRefs",
        type: "DataInput",
        isMany: true,
        isReference: true
      },
      {
        name: "outputSetRefs",
        type: "OutputSet",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "OutputSet",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "dataOutputRefs",
        type: "DataOutput",
        isMany: true,
        isReference: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "inputSetRefs",
        type: "InputSet",
        isMany: true,
        isReference: true
      },
      {
        name: "optionalOutputRefs",
        type: "DataOutput",
        isMany: true,
        isReference: true
      },
      {
        name: "whileExecutingOutputRefs",
        type: "DataOutput",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "Property",
    superClass: [
      "ItemAwareElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "DataInputAssociation",
    superClass: [
      "DataAssociation"
    ]
  },
  {
    name: "DataOutputAssociation",
    superClass: [
      "DataAssociation"
    ]
  },
  {
    name: "InputOutputSpecification",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "dataInputs",
        type: "DataInput",
        isMany: true
      },
      {
        name: "dataOutputs",
        type: "DataOutput",
        isMany: true
      },
      {
        name: "inputSets",
        type: "InputSet",
        isMany: true
      },
      {
        name: "outputSets",
        type: "OutputSet",
        isMany: true
      }
    ]
  },
  {
    name: "DataObject",
    superClass: [
      "FlowElement",
      "ItemAwareElement"
    ],
    properties: [
      {
        name: "isCollection",
        "default": false,
        isAttr: true,
        type: "Boolean"
      }
    ]
  },
  {
    name: "InputOutputBinding",
    properties: [
      {
        name: "inputDataRef",
        type: "InputSet",
        isAttr: true,
        isReference: true
      },
      {
        name: "outputDataRef",
        type: "OutputSet",
        isAttr: true,
        isReference: true
      },
      {
        name: "operationRef",
        type: "Operation",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Assignment",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "from",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "to",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      }
    ]
  },
  {
    name: "DataStore",
    superClass: [
      "RootElement",
      "ItemAwareElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "capacity",
        isAttr: true,
        type: "Integer"
      },
      {
        name: "isUnlimited",
        "default": true,
        isAttr: true,
        type: "Boolean"
      }
    ]
  },
  {
    name: "DataStoreReference",
    superClass: [
      "ItemAwareElement",
      "FlowElement"
    ],
    properties: [
      {
        name: "dataStoreRef",
        type: "DataStore",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "DataObjectReference",
    superClass: [
      "ItemAwareElement",
      "FlowElement"
    ],
    properties: [
      {
        name: "dataObjectRef",
        type: "DataObject",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ConversationLink",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "sourceRef",
        type: "InteractionNode",
        isAttr: true,
        isReference: true
      },
      {
        name: "targetRef",
        type: "InteractionNode",
        isAttr: true,
        isReference: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ConversationAssociation",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "innerConversationNodeRef",
        type: "ConversationNode",
        isAttr: true,
        isReference: true
      },
      {
        name: "outerConversationNodeRef",
        type: "ConversationNode",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "CallConversation",
    superClass: [
      "ConversationNode"
    ],
    properties: [
      {
        name: "calledCollaborationRef",
        type: "Collaboration",
        isAttr: true,
        isReference: true
      },
      {
        name: "participantAssociations",
        type: "ParticipantAssociation",
        isMany: true
      }
    ]
  },
  {
    name: "Conversation",
    superClass: [
      "ConversationNode"
    ]
  },
  {
    name: "SubConversation",
    superClass: [
      "ConversationNode"
    ],
    properties: [
      {
        name: "conversationNodes",
        type: "ConversationNode",
        isMany: true
      }
    ]
  },
  {
    name: "ConversationNode",
    isAbstract: true,
    superClass: [
      "InteractionNode",
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "participantRef",
        type: "Participant",
        isMany: true,
        isReference: true
      },
      {
        name: "messageFlowRefs",
        type: "MessageFlow",
        isMany: true,
        isReference: true
      },
      {
        name: "correlationKeys",
        type: "CorrelationKey",
        isMany: true
      }
    ]
  },
  {
    name: "GlobalConversation",
    superClass: [
      "Collaboration"
    ]
  },
  {
    name: "PartnerEntity",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "participantRef",
        type: "Participant",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "PartnerRole",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "participantRef",
        type: "Participant",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "CorrelationProperty",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "correlationPropertyRetrievalExpression",
        type: "CorrelationPropertyRetrievalExpression",
        isMany: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "type",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Error",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "structureRef",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "errorCode",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "CorrelationKey",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "correlationPropertyRef",
        type: "CorrelationProperty",
        isMany: true,
        isReference: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Expression",
    superClass: [
      "BaseElement"
    ],
    isAbstract: false,
    properties: [
      {
        name: "body",
        isBody: true,
        type: "String"
      }
    ]
  },
  {
    name: "FormalExpression",
    superClass: [
      "Expression"
    ],
    properties: [
      {
        name: "language",
        isAttr: true,
        type: "String"
      },
      {
        name: "evaluatesToTypeRef",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Message",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "itemRef",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ItemDefinition",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "itemKind",
        type: "ItemKind",
        isAttr: true
      },
      {
        name: "structureRef",
        isAttr: true,
        type: "String"
      },
      {
        name: "isCollection",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "import",
        type: "Import",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "FlowElement",
    isAbstract: true,
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "auditing",
        type: "Auditing"
      },
      {
        name: "monitoring",
        type: "Monitoring"
      },
      {
        name: "categoryValueRef",
        type: "CategoryValue",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "SequenceFlow",
    superClass: [
      "FlowElement"
    ],
    properties: [
      {
        name: "isImmediate",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "conditionExpression",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "sourceRef",
        type: "FlowNode",
        isAttr: true,
        isReference: true
      },
      {
        name: "targetRef",
        type: "FlowNode",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "FlowElementsContainer",
    isAbstract: true,
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "laneSets",
        type: "LaneSet",
        isMany: true
      },
      {
        name: "flowElements",
        type: "FlowElement",
        isMany: true
      }
    ]
  },
  {
    name: "CallableElement",
    isAbstract: true,
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "ioSpecification",
        type: "InputOutputSpecification",
        xml: {
          serialize: "property"
        }
      },
      {
        name: "supportedInterfaceRef",
        type: "Interface",
        isMany: true,
        isReference: true
      },
      {
        name: "ioBinding",
        type: "InputOutputBinding",
        isMany: true,
        xml: {
          serialize: "property"
        }
      }
    ]
  },
  {
    name: "FlowNode",
    isAbstract: true,
    superClass: [
      "FlowElement"
    ],
    properties: [
      {
        name: "incoming",
        type: "SequenceFlow",
        isMany: true,
        isReference: true
      },
      {
        name: "outgoing",
        type: "SequenceFlow",
        isMany: true,
        isReference: true
      },
      {
        name: "lanes",
        type: "Lane",
        isMany: true,
        isVirtual: true,
        isReference: true
      }
    ]
  },
  {
    name: "CorrelationPropertyRetrievalExpression",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "messagePath",
        type: "FormalExpression"
      },
      {
        name: "messageRef",
        type: "Message",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "CorrelationPropertyBinding",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "dataPath",
        type: "FormalExpression"
      },
      {
        name: "correlationPropertyRef",
        type: "CorrelationProperty",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Resource",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "resourceParameters",
        type: "ResourceParameter",
        isMany: true
      }
    ]
  },
  {
    name: "ResourceParameter",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "isRequired",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "type",
        type: "ItemDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "CorrelationSubscription",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "correlationKeyRef",
        type: "CorrelationKey",
        isAttr: true,
        isReference: true
      },
      {
        name: "correlationPropertyBinding",
        type: "CorrelationPropertyBinding",
        isMany: true
      }
    ]
  },
  {
    name: "MessageFlow",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "sourceRef",
        type: "InteractionNode",
        isAttr: true,
        isReference: true
      },
      {
        name: "targetRef",
        type: "InteractionNode",
        isAttr: true,
        isReference: true
      },
      {
        name: "messageRef",
        type: "Message",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "MessageFlowAssociation",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "innerMessageFlowRef",
        type: "MessageFlow",
        isAttr: true,
        isReference: true
      },
      {
        name: "outerMessageFlowRef",
        type: "MessageFlow",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "InteractionNode",
    isAbstract: true,
    properties: [
      {
        name: "incomingConversationLinks",
        type: "ConversationLink",
        isMany: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "outgoingConversationLinks",
        type: "ConversationLink",
        isMany: true,
        isVirtual: true,
        isReference: true
      }
    ]
  },
  {
    name: "Participant",
    superClass: [
      "InteractionNode",
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "interfaceRef",
        type: "Interface",
        isMany: true,
        isReference: true
      },
      {
        name: "participantMultiplicity",
        type: "ParticipantMultiplicity"
      },
      {
        name: "endPointRefs",
        type: "EndPoint",
        isMany: true,
        isReference: true
      },
      {
        name: "processRef",
        type: "Process",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ParticipantAssociation",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "innerParticipantRef",
        type: "Participant",
        isAttr: true,
        isReference: true
      },
      {
        name: "outerParticipantRef",
        type: "Participant",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ParticipantMultiplicity",
    properties: [
      {
        name: "minimum",
        "default": 0,
        isAttr: true,
        type: "Integer"
      },
      {
        name: "maximum",
        "default": 1,
        isAttr: true,
        type: "Integer"
      }
    ],
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "Collaboration",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "isClosed",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "participants",
        type: "Participant",
        isMany: true
      },
      {
        name: "messageFlows",
        type: "MessageFlow",
        isMany: true
      },
      {
        name: "artifacts",
        type: "Artifact",
        isMany: true
      },
      {
        name: "conversations",
        type: "ConversationNode",
        isMany: true
      },
      {
        name: "conversationAssociations",
        type: "ConversationAssociation"
      },
      {
        name: "participantAssociations",
        type: "ParticipantAssociation",
        isMany: true
      },
      {
        name: "messageFlowAssociations",
        type: "MessageFlowAssociation",
        isMany: true
      },
      {
        name: "correlationKeys",
        type: "CorrelationKey",
        isMany: true
      },
      {
        name: "choreographyRef",
        type: "Choreography",
        isMany: true,
        isReference: true
      },
      {
        name: "conversationLinks",
        type: "ConversationLink",
        isMany: true
      }
    ]
  },
  {
    name: "ChoreographyActivity",
    isAbstract: true,
    superClass: [
      "FlowNode"
    ],
    properties: [
      {
        name: "participantRef",
        type: "Participant",
        isMany: true,
        isReference: true
      },
      {
        name: "initiatingParticipantRef",
        type: "Participant",
        isAttr: true,
        isReference: true
      },
      {
        name: "correlationKeys",
        type: "CorrelationKey",
        isMany: true
      },
      {
        name: "loopType",
        type: "ChoreographyLoopType",
        "default": "None",
        isAttr: true
      }
    ]
  },
  {
    name: "CallChoreography",
    superClass: [
      "ChoreographyActivity"
    ],
    properties: [
      {
        name: "calledChoreographyRef",
        type: "Choreography",
        isAttr: true,
        isReference: true
      },
      {
        name: "participantAssociations",
        type: "ParticipantAssociation",
        isMany: true
      }
    ]
  },
  {
    name: "SubChoreography",
    superClass: [
      "ChoreographyActivity",
      "FlowElementsContainer"
    ],
    properties: [
      {
        name: "artifacts",
        type: "Artifact",
        isMany: true
      }
    ]
  },
  {
    name: "ChoreographyTask",
    superClass: [
      "ChoreographyActivity"
    ],
    properties: [
      {
        name: "messageFlowRef",
        type: "MessageFlow",
        isMany: true,
        isReference: true
      }
    ]
  },
  {
    name: "Choreography",
    superClass: [
      "Collaboration",
      "FlowElementsContainer"
    ]
  },
  {
    name: "GlobalChoreographyTask",
    superClass: [
      "Choreography"
    ],
    properties: [
      {
        name: "initiatingParticipantRef",
        type: "Participant",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "TextAnnotation",
    superClass: [
      "Artifact"
    ],
    properties: [
      {
        name: "text",
        type: "String"
      },
      {
        name: "textFormat",
        "default": "text/plain",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Group",
    superClass: [
      "Artifact"
    ],
    properties: [
      {
        name: "categoryValueRef",
        type: "CategoryValue",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Association",
    superClass: [
      "Artifact"
    ],
    properties: [
      {
        name: "associationDirection",
        type: "AssociationDirection",
        isAttr: true
      },
      {
        name: "sourceRef",
        type: "BaseElement",
        isAttr: true,
        isReference: true
      },
      {
        name: "targetRef",
        type: "BaseElement",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "Category",
    superClass: [
      "RootElement"
    ],
    properties: [
      {
        name: "categoryValue",
        type: "CategoryValue",
        isMany: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Artifact",
    isAbstract: true,
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "CategoryValue",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "categorizedFlowElements",
        type: "FlowElement",
        isMany: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "value",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Activity",
    isAbstract: true,
    superClass: [
      "FlowNode"
    ],
    properties: [
      {
        name: "isForCompensation",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "default",
        type: "SequenceFlow",
        isAttr: true,
        isReference: true
      },
      {
        name: "ioSpecification",
        type: "InputOutputSpecification",
        xml: {
          serialize: "property"
        }
      },
      {
        name: "boundaryEventRefs",
        type: "BoundaryEvent",
        isMany: true,
        isReference: true
      },
      {
        name: "properties",
        type: "Property",
        isMany: true
      },
      {
        name: "dataInputAssociations",
        type: "DataInputAssociation",
        isMany: true
      },
      {
        name: "dataOutputAssociations",
        type: "DataOutputAssociation",
        isMany: true
      },
      {
        name: "startQuantity",
        "default": 1,
        isAttr: true,
        type: "Integer"
      },
      {
        name: "resources",
        type: "ResourceRole",
        isMany: true
      },
      {
        name: "completionQuantity",
        "default": 1,
        isAttr: true,
        type: "Integer"
      },
      {
        name: "loopCharacteristics",
        type: "LoopCharacteristics"
      }
    ]
  },
  {
    name: "ServiceTask",
    superClass: [
      "Task"
    ],
    properties: [
      {
        name: "implementation",
        isAttr: true,
        type: "String"
      },
      {
        name: "operationRef",
        type: "Operation",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "SubProcess",
    superClass: [
      "Activity",
      "FlowElementsContainer",
      "InteractionNode"
    ],
    properties: [
      {
        name: "triggeredByEvent",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "artifacts",
        type: "Artifact",
        isMany: true
      }
    ]
  },
  {
    name: "LoopCharacteristics",
    isAbstract: true,
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "MultiInstanceLoopCharacteristics",
    superClass: [
      "LoopCharacteristics"
    ],
    properties: [
      {
        name: "isSequential",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "behavior",
        type: "MultiInstanceBehavior",
        "default": "All",
        isAttr: true
      },
      {
        name: "loopCardinality",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "loopDataInputRef",
        type: "ItemAwareElement",
        isReference: true
      },
      {
        name: "loopDataOutputRef",
        type: "ItemAwareElement",
        isReference: true
      },
      {
        name: "inputDataItem",
        type: "DataInput",
        xml: {
          serialize: "property"
        }
      },
      {
        name: "outputDataItem",
        type: "DataOutput",
        xml: {
          serialize: "property"
        }
      },
      {
        name: "complexBehaviorDefinition",
        type: "ComplexBehaviorDefinition",
        isMany: true
      },
      {
        name: "completionCondition",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "oneBehaviorEventRef",
        type: "EventDefinition",
        isAttr: true,
        isReference: true
      },
      {
        name: "noneBehaviorEventRef",
        type: "EventDefinition",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "StandardLoopCharacteristics",
    superClass: [
      "LoopCharacteristics"
    ],
    properties: [
      {
        name: "testBefore",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "loopCondition",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "loopMaximum",
        type: "Integer",
        isAttr: true
      }
    ]
  },
  {
    name: "CallActivity",
    superClass: [
      "Activity",
      "InteractionNode"
    ],
    properties: [
      {
        name: "calledElement",
        type: "String",
        isAttr: true
      }
    ]
  },
  {
    name: "Task",
    superClass: [
      "Activity",
      "InteractionNode"
    ]
  },
  {
    name: "SendTask",
    superClass: [
      "Task"
    ],
    properties: [
      {
        name: "implementation",
        isAttr: true,
        type: "String"
      },
      {
        name: "operationRef",
        type: "Operation",
        isAttr: true,
        isReference: true
      },
      {
        name: "messageRef",
        type: "Message",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ReceiveTask",
    superClass: [
      "Task"
    ],
    properties: [
      {
        name: "implementation",
        isAttr: true,
        type: "String"
      },
      {
        name: "instantiate",
        "default": false,
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "operationRef",
        type: "Operation",
        isAttr: true,
        isReference: true
      },
      {
        name: "messageRef",
        type: "Message",
        isAttr: true,
        isReference: true
      }
    ]
  },
  {
    name: "ScriptTask",
    superClass: [
      "Task"
    ],
    properties: [
      {
        name: "scriptFormat",
        isAttr: true,
        type: "String"
      },
      {
        name: "script",
        type: "String"
      }
    ]
  },
  {
    name: "BusinessRuleTask",
    superClass: [
      "Task"
    ],
    properties: [
      {
        name: "implementation",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "AdHocSubProcess",
    superClass: [
      "SubProcess"
    ],
    properties: [
      {
        name: "completionCondition",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "ordering",
        type: "AdHocOrdering",
        isAttr: true
      },
      {
        name: "cancelRemainingInstances",
        "default": true,
        isAttr: true,
        type: "Boolean"
      }
    ]
  },
  {
    name: "Transaction",
    superClass: [
      "SubProcess"
    ],
    properties: [
      {
        name: "protocol",
        isAttr: true,
        type: "String"
      },
      {
        name: "method",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "GlobalScriptTask",
    superClass: [
      "GlobalTask"
    ],
    properties: [
      {
        name: "scriptLanguage",
        isAttr: true,
        type: "String"
      },
      {
        name: "script",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "GlobalBusinessRuleTask",
    superClass: [
      "GlobalTask"
    ],
    properties: [
      {
        name: "implementation",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ComplexBehaviorDefinition",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "condition",
        type: "FormalExpression"
      },
      {
        name: "event",
        type: "ImplicitThrowEvent"
      }
    ]
  },
  {
    name: "ResourceRole",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "resourceRef",
        type: "Resource",
        isReference: true
      },
      {
        name: "resourceParameterBindings",
        type: "ResourceParameterBinding",
        isMany: true
      },
      {
        name: "resourceAssignmentExpression",
        type: "ResourceAssignmentExpression"
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ResourceParameterBinding",
    properties: [
      {
        name: "expression",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      },
      {
        name: "parameterRef",
        type: "ResourceParameter",
        isAttr: true,
        isReference: true
      }
    ],
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "ResourceAssignmentExpression",
    properties: [
      {
        name: "expression",
        type: "Expression",
        xml: {
          serialize: "xsi:type"
        }
      }
    ],
    superClass: [
      "BaseElement"
    ]
  },
  {
    name: "Import",
    properties: [
      {
        name: "importType",
        isAttr: true,
        type: "String"
      },
      {
        name: "location",
        isAttr: true,
        type: "String"
      },
      {
        name: "namespace",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "Definitions",
    superClass: [
      "BaseElement"
    ],
    properties: [
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "targetNamespace",
        isAttr: true,
        type: "String"
      },
      {
        name: "expressionLanguage",
        "default": "http://www.w3.org/1999/XPath",
        isAttr: true,
        type: "String"
      },
      {
        name: "typeLanguage",
        "default": "http://www.w3.org/2001/XMLSchema",
        isAttr: true,
        type: "String"
      },
      {
        name: "imports",
        type: "Import",
        isMany: true
      },
      {
        name: "extensions",
        type: "Extension",
        isMany: true
      },
      {
        name: "rootElements",
        type: "RootElement",
        isMany: true
      },
      {
        name: "diagrams",
        isMany: true,
        type: "bpmndi:BPMNDiagram"
      },
      {
        name: "exporter",
        isAttr: true,
        type: "String"
      },
      {
        name: "relationships",
        type: "Relationship",
        isMany: true
      },
      {
        name: "exporterVersion",
        isAttr: true,
        type: "String"
      }
    ]
  }
];
var enumerations = [
  {
    name: "ProcessType",
    literalValues: [
      {
        name: "None"
      },
      {
        name: "Public"
      },
      {
        name: "Private"
      }
    ]
  },
  {
    name: "GatewayDirection",
    literalValues: [
      {
        name: "Unspecified"
      },
      {
        name: "Converging"
      },
      {
        name: "Diverging"
      },
      {
        name: "Mixed"
      }
    ]
  },
  {
    name: "EventBasedGatewayType",
    literalValues: [
      {
        name: "Parallel"
      },
      {
        name: "Exclusive"
      }
    ]
  },
  {
    name: "RelationshipDirection",
    literalValues: [
      {
        name: "None"
      },
      {
        name: "Forward"
      },
      {
        name: "Backward"
      },
      {
        name: "Both"
      }
    ]
  },
  {
    name: "ItemKind",
    literalValues: [
      {
        name: "Physical"
      },
      {
        name: "Information"
      }
    ]
  },
  {
    name: "ChoreographyLoopType",
    literalValues: [
      {
        name: "None"
      },
      {
        name: "Standard"
      },
      {
        name: "MultiInstanceSequential"
      },
      {
        name: "MultiInstanceParallel"
      }
    ]
  },
  {
    name: "AssociationDirection",
    literalValues: [
      {
        name: "None"
      },
      {
        name: "One"
      },
      {
        name: "Both"
      }
    ]
  },
  {
    name: "MultiInstanceBehavior",
    literalValues: [
      {
        name: "None"
      },
      {
        name: "One"
      },
      {
        name: "All"
      },
      {
        name: "Complex"
      }
    ]
  },
  {
    name: "AdHocOrdering",
    literalValues: [
      {
        name: "Parallel"
      },
      {
        name: "Sequential"
      }
    ]
  }
];
var xml = {
  tagAlias: "lowerCase",
  typePrefix: "t"
};
var BpmnPackage = {
  name,
  uri,
  prefix,
  associations,
  types,
  enumerations,
  xml
};
var name$1 = "BPMNDI";
var uri$1 = "http://www.omg.org/spec/BPMN/20100524/DI";
var prefix$1 = "bpmndi";
var types$1 = [
  {
    name: "BPMNDiagram",
    properties: [
      {
        name: "plane",
        type: "BPMNPlane",
        redefines: "di:Diagram#rootElement"
      },
      {
        name: "labelStyle",
        type: "BPMNLabelStyle",
        isMany: true
      }
    ],
    superClass: [
      "di:Diagram"
    ]
  },
  {
    name: "BPMNPlane",
    properties: [
      {
        name: "bpmnElement",
        isAttr: true,
        isReference: true,
        type: "bpmn:BaseElement",
        redefines: "di:DiagramElement#modelElement"
      }
    ],
    superClass: [
      "di:Plane"
    ]
  },
  {
    name: "BPMNShape",
    properties: [
      {
        name: "bpmnElement",
        isAttr: true,
        isReference: true,
        type: "bpmn:BaseElement",
        redefines: "di:DiagramElement#modelElement"
      },
      {
        name: "isHorizontal",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "isExpanded",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "isMarkerVisible",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "label",
        type: "BPMNLabel"
      },
      {
        name: "isMessageVisible",
        isAttr: true,
        type: "Boolean"
      },
      {
        name: "participantBandKind",
        type: "ParticipantBandKind",
        isAttr: true
      },
      {
        name: "choreographyActivityShape",
        type: "BPMNShape",
        isAttr: true,
        isReference: true
      }
    ],
    superClass: [
      "di:LabeledShape"
    ]
  },
  {
    name: "BPMNEdge",
    properties: [
      {
        name: "label",
        type: "BPMNLabel"
      },
      {
        name: "bpmnElement",
        isAttr: true,
        isReference: true,
        type: "bpmn:BaseElement",
        redefines: "di:DiagramElement#modelElement"
      },
      {
        name: "sourceElement",
        isAttr: true,
        isReference: true,
        type: "di:DiagramElement",
        redefines: "di:Edge#source"
      },
      {
        name: "targetElement",
        isAttr: true,
        isReference: true,
        type: "di:DiagramElement",
        redefines: "di:Edge#target"
      },
      {
        name: "messageVisibleKind",
        type: "MessageVisibleKind",
        isAttr: true,
        "default": "initiating"
      }
    ],
    superClass: [
      "di:LabeledEdge"
    ]
  },
  {
    name: "BPMNLabel",
    properties: [
      {
        name: "labelStyle",
        type: "BPMNLabelStyle",
        isAttr: true,
        isReference: true,
        redefines: "di:DiagramElement#style"
      }
    ],
    superClass: [
      "di:Label"
    ]
  },
  {
    name: "BPMNLabelStyle",
    properties: [
      {
        name: "font",
        type: "dc:Font"
      }
    ],
    superClass: [
      "di:Style"
    ]
  }
];
var enumerations$1 = [
  {
    name: "ParticipantBandKind",
    literalValues: [
      {
        name: "top_initiating"
      },
      {
        name: "middle_initiating"
      },
      {
        name: "bottom_initiating"
      },
      {
        name: "top_non_initiating"
      },
      {
        name: "middle_non_initiating"
      },
      {
        name: "bottom_non_initiating"
      }
    ]
  },
  {
    name: "MessageVisibleKind",
    literalValues: [
      {
        name: "initiating"
      },
      {
        name: "non_initiating"
      }
    ]
  }
];
var associations$1 = [];
var BpmnDiPackage = {
  name: name$1,
  uri: uri$1,
  prefix: prefix$1,
  types: types$1,
  enumerations: enumerations$1,
  associations: associations$1
};
var name$2 = "DC";
var uri$2 = "http://www.omg.org/spec/DD/20100524/DC";
var prefix$2 = "dc";
var types$2 = [
  {
    name: "Boolean"
  },
  {
    name: "Integer"
  },
  {
    name: "Real"
  },
  {
    name: "String"
  },
  {
    name: "Font",
    properties: [
      {
        name: "name",
        type: "String",
        isAttr: true
      },
      {
        name: "size",
        type: "Real",
        isAttr: true
      },
      {
        name: "isBold",
        type: "Boolean",
        isAttr: true
      },
      {
        name: "isItalic",
        type: "Boolean",
        isAttr: true
      },
      {
        name: "isUnderline",
        type: "Boolean",
        isAttr: true
      },
      {
        name: "isStrikeThrough",
        type: "Boolean",
        isAttr: true
      }
    ]
  },
  {
    name: "Point",
    properties: [
      {
        name: "x",
        type: "Real",
        "default": "0",
        isAttr: true
      },
      {
        name: "y",
        type: "Real",
        "default": "0",
        isAttr: true
      }
    ]
  },
  {
    name: "Bounds",
    properties: [
      {
        name: "x",
        type: "Real",
        "default": "0",
        isAttr: true
      },
      {
        name: "y",
        type: "Real",
        "default": "0",
        isAttr: true
      },
      {
        name: "width",
        type: "Real",
        isAttr: true
      },
      {
        name: "height",
        type: "Real",
        isAttr: true
      }
    ]
  }
];
var associations$2 = [];
var DcPackage = {
  name: name$2,
  uri: uri$2,
  prefix: prefix$2,
  types: types$2,
  associations: associations$2
};
var name$3 = "DI";
var uri$3 = "http://www.omg.org/spec/DD/20100524/DI";
var prefix$3 = "di";
var types$3 = [
  {
    name: "DiagramElement",
    isAbstract: true,
    properties: [
      {
        name: "id",
        isAttr: true,
        isId: true,
        type: "String"
      },
      {
        name: "extension",
        type: "Extension"
      },
      {
        name: "owningDiagram",
        type: "Diagram",
        isReadOnly: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "owningElement",
        type: "DiagramElement",
        isReadOnly: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "modelElement",
        isReadOnly: true,
        isVirtual: true,
        isReference: true,
        type: "Element"
      },
      {
        name: "style",
        type: "Style",
        isReadOnly: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "ownedElement",
        type: "DiagramElement",
        isReadOnly: true,
        isMany: true,
        isVirtual: true
      }
    ]
  },
  {
    name: "Node",
    isAbstract: true,
    superClass: [
      "DiagramElement"
    ]
  },
  {
    name: "Edge",
    isAbstract: true,
    superClass: [
      "DiagramElement"
    ],
    properties: [
      {
        name: "source",
        type: "DiagramElement",
        isReadOnly: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "target",
        type: "DiagramElement",
        isReadOnly: true,
        isVirtual: true,
        isReference: true
      },
      {
        name: "waypoint",
        isUnique: false,
        isMany: true,
        type: "dc:Point",
        xml: {
          serialize: "xsi:type"
        }
      }
    ]
  },
  {
    name: "Diagram",
    isAbstract: true,
    properties: [
      {
        name: "id",
        isAttr: true,
        isId: true,
        type: "String"
      },
      {
        name: "rootElement",
        type: "DiagramElement",
        isReadOnly: true,
        isVirtual: true
      },
      {
        name: "name",
        isAttr: true,
        type: "String"
      },
      {
        name: "documentation",
        isAttr: true,
        type: "String"
      },
      {
        name: "resolution",
        isAttr: true,
        type: "Real"
      },
      {
        name: "ownedStyle",
        type: "Style",
        isReadOnly: true,
        isMany: true,
        isVirtual: true
      }
    ]
  },
  {
    name: "Shape",
    isAbstract: true,
    superClass: [
      "Node"
    ],
    properties: [
      {
        name: "bounds",
        type: "dc:Bounds"
      }
    ]
  },
  {
    name: "Plane",
    isAbstract: true,
    superClass: [
      "Node"
    ],
    properties: [
      {
        name: "planeElement",
        type: "DiagramElement",
        subsettedProperty: "DiagramElement-ownedElement",
        isMany: true
      }
    ]
  },
  {
    name: "LabeledEdge",
    isAbstract: true,
    superClass: [
      "Edge"
    ],
    properties: [
      {
        name: "ownedLabel",
        type: "Label",
        isReadOnly: true,
        subsettedProperty: "DiagramElement-ownedElement",
        isMany: true,
        isVirtual: true
      }
    ]
  },
  {
    name: "LabeledShape",
    isAbstract: true,
    superClass: [
      "Shape"
    ],
    properties: [
      {
        name: "ownedLabel",
        type: "Label",
        isReadOnly: true,
        subsettedProperty: "DiagramElement-ownedElement",
        isMany: true,
        isVirtual: true
      }
    ]
  },
  {
    name: "Label",
    isAbstract: true,
    superClass: [
      "Node"
    ],
    properties: [
      {
        name: "bounds",
        type: "dc:Bounds"
      }
    ]
  },
  {
    name: "Style",
    isAbstract: true,
    properties: [
      {
        name: "id",
        isAttr: true,
        isId: true,
        type: "String"
      }
    ]
  },
  {
    name: "Extension",
    properties: [
      {
        name: "values",
        isMany: true,
        type: "Element"
      }
    ]
  }
];
var associations$3 = [];
var xml$1 = {
  tagAlias: "lowerCase"
};
var DiPackage = {
  name: name$3,
  uri: uri$3,
  prefix: prefix$3,
  types: types$3,
  associations: associations$3,
  xml: xml$1
};
var name$4 = "bpmn.io colors for BPMN";
var uri$4 = "http://bpmn.io/schema/bpmn/biocolor/1.0";
var prefix$4 = "bioc";
var types$4 = [
  {
    name: "ColoredShape",
    "extends": [
      "bpmndi:BPMNShape"
    ],
    properties: [
      {
        name: "stroke",
        isAttr: true,
        type: "String"
      },
      {
        name: "fill",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ColoredEdge",
    "extends": [
      "bpmndi:BPMNEdge"
    ],
    properties: [
      {
        name: "stroke",
        isAttr: true,
        type: "String"
      },
      {
        name: "fill",
        isAttr: true,
        type: "String"
      }
    ]
  }
];
var enumerations$2 = [];
var associations$4 = [];
var BiocPackage = {
  name: name$4,
  uri: uri$4,
  prefix: prefix$4,
  types: types$4,
  enumerations: enumerations$2,
  associations: associations$4
};
var name$5 = "BPMN in Color";
var uri$5 = "http://www.omg.org/spec/BPMN/non-normative/color/1.0";
var prefix$5 = "color";
var types$5 = [
  {
    name: "ColoredLabel",
    "extends": [
      "bpmndi:BPMNLabel"
    ],
    properties: [
      {
        name: "color",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ColoredShape",
    "extends": [
      "bpmndi:BPMNShape"
    ],
    properties: [
      {
        name: "background-color",
        isAttr: true,
        type: "String"
      },
      {
        name: "border-color",
        isAttr: true,
        type: "String"
      }
    ]
  },
  {
    name: "ColoredEdge",
    "extends": [
      "bpmndi:BPMNEdge"
    ],
    properties: [
      {
        name: "border-color",
        isAttr: true,
        type: "String"
      }
    ]
  }
];
var enumerations$3 = [];
var associations$5 = [];
var BpmnInColorPackage = {
  name: name$5,
  uri: uri$5,
  prefix: prefix$5,
  types: types$5,
  enumerations: enumerations$3,
  associations: associations$5
};
var packages = {
  bpmn: BpmnPackage,
  bpmndi: BpmnDiPackage,
  dc: DcPackage,
  di: DiPackage,
  bioc: BiocPackage,
  color: BpmnInColorPackage
};
function simple(additionalPackages, options) {
  var pks = assign({}, packages, additionalPackages);
  return new BpmnModdle(pks, options);
}
var diRefs = new Refs({ name: "bpmnElement", enumerable: true }, { name: "di", configurable: true });
function is(element, type) {
  return element.$instanceOf(type);
}
function findDisplayCandidate(definitions) {
  return find(definitions.rootElements, function(e) {
    return is(e, "bpmn:Process") || is(e, "bpmn:Collaboration");
  });
}
function BpmnTreeWalker(handler, translate2) {
  var handledElements = {};
  var deferred = [];
  function contextual(fn, ctx) {
    return function(e) {
      fn(e, ctx);
    };
  }
  function handled(element) {
    handledElements[element.id] = element;
  }
  function isHandled(element) {
    return handledElements[element.id];
  }
  function visit(element, ctx) {
    var gfx = element.gfx;
    if (gfx) {
      throw new Error(translate2("already rendered {element}", { element: elementToString(element) }));
    }
    return handler.element(element, ctx);
  }
  function visitRoot(element, diagram) {
    return handler.root(element, diagram);
  }
  function visitIfDi(element, ctx) {
    try {
      var gfx = element.di && visit(element, ctx);
      handled(element);
      return gfx;
    } catch (e) {
      logError(e.message, { element, error: e });
      console.error(translate2("failed to import {element}", { element: elementToString(element) }));
      console.error(e);
    }
  }
  function logError(message, context) {
    handler.error(message, context);
  }
  function registerDi(di) {
    var bpmnElement = di.bpmnElement;
    if (bpmnElement) {
      if (bpmnElement.di) {
        logError(translate2("multiple DI elements defined for {element}", {
          element: elementToString(bpmnElement)
        }), { element: bpmnElement });
      } else {
        diRefs.bind(bpmnElement, "di");
        bpmnElement.di = di;
      }
    } else {
      logError(translate2("no bpmnElement referenced in {element}", {
        element: elementToString(di)
      }), { element: di });
    }
  }
  function handleDiagram(diagram) {
    handlePlane(diagram.plane);
  }
  function handlePlane(plane) {
    registerDi(plane);
    forEach(plane.planeElement, handlePlaneElement);
  }
  function handlePlaneElement(planeElement) {
    registerDi(planeElement);
  }
  function handleDefinitions(definitions, diagram) {
    var diagrams = definitions.diagrams;
    if (diagram && diagrams.indexOf(diagram) === -1) {
      throw new Error(translate2("diagram not part of bpmn:Definitions"));
    }
    if (!diagram && diagrams && diagrams.length) {
      diagram = diagrams[0];
    }
    if (!diagram) {
      throw new Error(translate2("no diagram to display"));
    }
    handleDiagram(diagram);
    var plane = diagram.plane;
    if (!plane) {
      throw new Error(translate2("no plane for {element}", { element: elementToString(diagram) }));
    }
    var rootElement = plane.bpmnElement;
    if (!rootElement) {
      rootElement = findDisplayCandidate(definitions);
      if (!rootElement) {
        throw new Error(translate2("no process or collaboration to display"));
      } else {
        logError(translate2("correcting missing bpmnElement on {plane} to {rootElement}", {
          plane: elementToString(plane),
          rootElement: elementToString(rootElement)
        }));
        plane.bpmnElement = rootElement;
        registerDi(plane);
      }
    }
    var ctx = visitRoot(rootElement, plane);
    if (is(rootElement, "bpmn:Process")) {
      handleProcess(rootElement, ctx);
    } else if (is(rootElement, "bpmn:Collaboration")) {
      handleCollaboration(rootElement);
      handleUnhandledProcesses(definitions.rootElements, ctx);
    } else {
      throw new Error(translate2("unsupported bpmnElement for {plane}: {rootElement}", {
        plane: elementToString(plane),
        rootElement: elementToString(rootElement)
      }));
    }
    handleDeferred();
  }
  function handleDeferred() {
    var fn;
    while (deferred.length) {
      fn = deferred.shift();
      fn();
    }
  }
  function handleProcess(process, context) {
    handleFlowElementsContainer(process, context);
    handleIoSpecification(process.ioSpecification, context);
    handleArtifacts(process.artifacts, context);
    handled(process);
  }
  function handleUnhandledProcesses(rootElements, ctx) {
    var processes = filter(rootElements, function(e) {
      return !isHandled(e) && is(e, "bpmn:Process") && e.laneSets;
    });
    processes.forEach(contextual(handleProcess, ctx));
  }
  function handleMessageFlow(messageFlow, context) {
    visitIfDi(messageFlow, context);
  }
  function handleMessageFlows(messageFlows, context) {
    forEach(messageFlows, contextual(handleMessageFlow, context));
  }
  function handleDataAssociation(association, context) {
    visitIfDi(association, context);
  }
  function handleDataInput(dataInput, context) {
    visitIfDi(dataInput, context);
  }
  function handleDataOutput(dataOutput, context) {
    visitIfDi(dataOutput, context);
  }
  function handleArtifact(artifact, context) {
    visitIfDi(artifact, context);
  }
  function handleArtifacts(artifacts, context) {
    forEach(artifacts, function(e) {
      if (is(e, "bpmn:Association")) {
        deferred.push(function() {
          handleArtifact(e, context);
        });
      } else {
        handleArtifact(e, context);
      }
    });
  }
  function handleIoSpecification(ioSpecification, context) {
    if (!ioSpecification) {
      return;
    }
    forEach(ioSpecification.dataInputs, contextual(handleDataInput, context));
    forEach(ioSpecification.dataOutputs, contextual(handleDataOutput, context));
  }
  function handleSubProcess(subProcess, context) {
    handleFlowElementsContainer(subProcess, context);
    handleArtifacts(subProcess.artifacts, context);
  }
  function handleFlowNode(flowNode, context) {
    var childCtx = visitIfDi(flowNode, context);
    if (is(flowNode, "bpmn:SubProcess")) {
      handleSubProcess(flowNode, childCtx || context);
    }
    if (is(flowNode, "bpmn:Activity")) {
      handleIoSpecification(flowNode.ioSpecification, context);
    }
    deferred.push(function() {
      forEach(flowNode.dataInputAssociations, contextual(handleDataAssociation, context));
      forEach(flowNode.dataOutputAssociations, contextual(handleDataAssociation, context));
    });
  }
  function handleSequenceFlow(sequenceFlow, context) {
    visitIfDi(sequenceFlow, context);
  }
  function handleDataElement(dataObject, context) {
    visitIfDi(dataObject, context);
  }
  function handleLane(lane, context) {
    deferred.push(function() {
      var newContext = visitIfDi(lane, context);
      if (lane.childLaneSet) {
        handleLaneSet(lane.childLaneSet, newContext || context);
      }
      wireFlowNodeRefs(lane);
    });
  }
  function handleLaneSet(laneSet, context) {
    forEach(laneSet.lanes, contextual(handleLane, context));
  }
  function handleLaneSets(laneSets, context) {
    forEach(laneSets, contextual(handleLaneSet, context));
  }
  function handleFlowElementsContainer(container, context) {
    handleFlowElements(container.flowElements, context);
    if (container.laneSets) {
      handleLaneSets(container.laneSets, context);
    }
  }
  function handleFlowElements(flowElements, context) {
    forEach(flowElements, function(e) {
      if (is(e, "bpmn:SequenceFlow")) {
        deferred.push(function() {
          handleSequenceFlow(e, context);
        });
      } else if (is(e, "bpmn:BoundaryEvent")) {
        deferred.unshift(function() {
          handleFlowNode(e, context);
        });
      } else if (is(e, "bpmn:FlowNode")) {
        handleFlowNode(e, context);
      } else if (is(e, "bpmn:DataObject"))
        ;
      else if (is(e, "bpmn:DataStoreReference")) {
        handleDataElement(e, context);
      } else if (is(e, "bpmn:DataObjectReference")) {
        handleDataElement(e, context);
      } else {
        logError(translate2("unrecognized flowElement {element} in context {context}", {
          element: elementToString(e),
          context: context ? elementToString(context.businessObject) : "null"
        }), { element: e, context });
      }
    });
  }
  function handleParticipant(participant, context) {
    var newCtx = visitIfDi(participant, context);
    var process = participant.processRef;
    if (process) {
      handleProcess(process, newCtx || context);
    }
  }
  function handleCollaboration(collaboration) {
    forEach(collaboration.participants, contextual(handleParticipant));
    handleArtifacts(collaboration.artifacts);
    deferred.push(function() {
      handleMessageFlows(collaboration.messageFlows);
    });
  }
  function wireFlowNodeRefs(lane) {
    forEach(lane.flowNodeRef, function(flowNode) {
      var lanes = flowNode.get("lanes");
      if (lanes) {
        lanes.push(lane);
      }
    });
  }
  return {
    handleDeferred,
    handleDefinitions,
    handleSubProcess,
    registerDi
  };
}
function importBpmnDiagram(diagram, definitions, bpmnDiagram) {
  var importer, eventBus, translate2;
  var error2, warnings = [];
  function render(definitions2, bpmnDiagram2) {
    var visitor2 = {
      root: function(element) {
        return importer.add(element);
      },
      element: function(element, parentShape) {
        return importer.add(element, parentShape);
      },
      error: function(message, context) {
        warnings.push({ message, context });
      }
    };
    var walker = new BpmnTreeWalker(visitor2, translate2);
    walker.handleDefinitions(definitions2, bpmnDiagram2);
  }
  return new Promise(function(resolve, reject) {
    try {
      importer = diagram.get("bpmnImporter");
      eventBus = diagram.get("eventBus");
      translate2 = diagram.get("translate");
      eventBus.fire("import.render.start", { definitions });
      render(definitions, bpmnDiagram);
      eventBus.fire("import.render.complete", {
        error: error2,
        warnings
      });
      return resolve({ warnings });
    } catch (e) {
      e.warnings = warnings;
      return reject(e);
    }
  });
}
function wrapForCompatibility(api) {
  return function() {
    if (!window.Promise) {
      throw new Error("Promises is not supported in this environment. Please polyfill Promise.");
    }
    var argLen = arguments.length;
    if (argLen >= 1 && isFunction(arguments[argLen - 1])) {
      var callback = arguments[argLen - 1];
      console.warn(new Error("Passing callbacks to " + api.name + " is deprecated and will be removed in a future major release. Please switch to promises: https://bpmn.io/l/moving-to-promises.html"));
      var argsWithoutCallback = Array.prototype.slice.call(arguments, 0, -1);
      api.apply(this, argsWithoutCallback).then(function(result) {
        var firstKey = Object.keys(result)[0];
        return callback(null, result[firstKey]);
      }, function(err) {
        return callback(err, err.warnings);
      });
    } else {
      return api.apply(this, arguments);
    }
  };
}
var BPMNIO_LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.02 5.57" width="53" height="21" style="vertical-align:middle"><path fill="currentColor" d="M1.88.92v.14c0 .41-.13.68-.4.8.33.14.46.44.46.86v.33c0 .61-.33.95-.95.95H0V0h.95c.65 0 .93.3.93.92zM.63.57v1.06h.24c.24 0 .38-.1.38-.43V.98c0-.28-.1-.4-.32-.4zm0 1.63v1.22h.36c.2 0 .32-.1.32-.39v-.35c0-.37-.12-.48-.4-.48H.63zM4.18.99v.52c0 .64-.31.98-.94.98h-.3V4h-.62V0h.92c.63 0 .94.35.94.99zM2.94.57v1.35h.3c.2 0 .3-.09.3-.37v-.6c0-.29-.1-.38-.3-.38h-.3zm2.89 2.27L6.25 0h.88v4h-.6V1.12L6.1 3.99h-.6l-.46-2.82v2.82h-.55V0h.87zM8.14 1.1V4h-.56V0h.79L9 2.4V0h.56v4h-.64zm2.49 2.29v.6h-.6v-.6zM12.12 1c0-.63.33-1 .95-1 .61 0 .95.37.95 1v2.04c0 .64-.34 1-.95 1-.62 0-.95-.37-.95-1zm.62 2.08c0 .28.13.39.33.39s.32-.1.32-.4V.98c0-.29-.12-.4-.32-.4s-.33.11-.33.4z"/><path fill="currentColor" d="M0 4.53h14.02v1.04H0zM11.08 0h.63v.62h-.63zm.63 4V1h-.63v2.98z"/></svg>';
var BPMNIO_IMG = BPMNIO_LOGO_SVG;
function css(attrs) {
  return attrs.join(";");
}
var LINK_STYLES = css([
  "color: #404040"
]);
var LIGHTBOX_STYLES = css([
  "z-index: 1001",
  "position: fixed",
  "top: 0",
  "left: 0",
  "right: 0",
  "bottom: 0"
]);
var BACKDROP_STYLES = css([
  "width: 100%",
  "height: 100%",
  "background: rgba(40,40,40,0.2)"
]);
var NOTICE_STYLES = css([
  "position: absolute",
  "left: 50%",
  "top: 40%",
  "transform: translate(-50%)",
  "width: 260px",
  "padding: 10px",
  "background: white",
  "box-shadow: 0 1px 4px rgba(0,0,0,0.3)",
  "font-family: Helvetica, Arial, sans-serif",
  "font-size: 14px",
  "display: flex",
  "line-height: 1.3"
]);
var LIGHTBOX_MARKUP = '<div class="bjs-powered-by-lightbox" style="' + LIGHTBOX_STYLES + '"><div class="backdrop" style="' + BACKDROP_STYLES + '"></div><div class="notice" style="' + NOTICE_STYLES + '"><a href="https://bpmn.io" target="_blank" rel="noopener" style="margin: 15px 20px 15px 10px; align-self: center;' + LINK_STYLES + '">' + BPMNIO_IMG + '</a><span>Web-based tooling for BPMN, DMN and CMMN diagrams powered by <a href="https://bpmn.io" target="_blank" rel="noopener">bpmn.io</a>.</span></div></div>';
var lightbox;
function open() {
  if (!lightbox) {
    lightbox = domify(LIGHTBOX_MARKUP);
    delegate.bind(lightbox, ".backdrop", "click", function(event) {
      document.body.removeChild(lightbox);
    });
  }
  document.body.appendChild(lightbox);
}
function BaseViewer(options) {
  options = assign({}, DEFAULT_OPTIONS, options);
  this._moddle = this._createModdle(options);
  this._container = this._createContainer(options);
  addProjectLogo(this._container);
  this._init(this._container, this._moddle, options);
}
inherits$1(BaseViewer, Diagram);
BaseViewer.prototype.importXML = wrapForCompatibility(function importXML(xml2, bpmnDiagram) {
  var self2 = this;
  function ParseCompleteEvent(data) {
    var event = self2.get("eventBus").createEvent(data);
    Object.defineProperty(event, "context", {
      enumerable: true,
      get: function() {
        console.warn(new Error("import.parse.complete <context> is deprecated and will be removed in future library versions"));
        return {
          warnings: data.warnings,
          references: data.references,
          elementsById: data.elementsById
        };
      }
    });
    return event;
  }
  return new Promise(function(resolve, reject) {
    xml2 = self2._emit("import.parse.start", { xml: xml2 }) || xml2;
    self2._moddle.fromXML(xml2, "bpmn:Definitions").then(function(result) {
      var definitions = result.rootElement;
      var references = result.references;
      var parseWarnings = result.warnings;
      var elementsById = result.elementsById;
      definitions = self2._emit("import.parse.complete", ParseCompleteEvent({
        error: null,
        definitions,
        elementsById,
        references,
        warnings: parseWarnings
      })) || definitions;
      self2.importDefinitions(definitions, bpmnDiagram).then(function(result2) {
        var allWarnings = [].concat(parseWarnings, result2.warnings || []);
        self2._emit("import.done", { error: null, warnings: allWarnings });
        return resolve({ warnings: allWarnings });
      }).catch(function(err) {
        var allWarnings = [].concat(parseWarnings, err.warnings || []);
        self2._emit("import.done", { error: err, warnings: allWarnings });
        return reject(addWarningsToError(err, allWarnings));
      });
    }).catch(function(err) {
      self2._emit("import.parse.complete", {
        error: err
      });
      err = checkValidationError(err);
      self2._emit("import.done", { error: err, warnings: err.warnings });
      return reject(err);
    });
  });
});
BaseViewer.prototype.importDefinitions = wrapForCompatibility(function importDefinitions(definitions, bpmnDiagram) {
  var self2 = this;
  return new Promise(function(resolve, reject) {
    self2._setDefinitions(definitions);
    self2.open(bpmnDiagram).then(function(result) {
      var warnings = result.warnings;
      return resolve({ warnings });
    }).catch(function(err) {
      return reject(err);
    });
  });
});
BaseViewer.prototype.open = wrapForCompatibility(function open2(bpmnDiagramOrId) {
  var definitions = this._definitions;
  var bpmnDiagram = bpmnDiagramOrId;
  var self2 = this;
  return new Promise(function(resolve, reject) {
    if (!definitions) {
      var err1 = new Error("no XML imported");
      return reject(addWarningsToError(err1, []));
    }
    if (typeof bpmnDiagramOrId === "string") {
      bpmnDiagram = findBPMNDiagram(definitions, bpmnDiagramOrId);
      if (!bpmnDiagram) {
        var err2 = new Error("BPMNDiagram <" + bpmnDiagramOrId + "> not found");
        return reject(addWarningsToError(err2, []));
      }
    }
    try {
      self2.clear();
    } catch (error2) {
      return reject(addWarningsToError(error2, []));
    }
    importBpmnDiagram(self2, definitions, bpmnDiagram).then(function(result) {
      var warnings = result.warnings;
      return resolve({ warnings });
    }).catch(function(err) {
      return reject(err);
    });
  });
});
BaseViewer.prototype.saveXML = wrapForCompatibility(function saveXML(options) {
  options = options || {};
  var self2 = this;
  var definitions = this._definitions;
  return new Promise(function(resolve) {
    if (!definitions) {
      return resolve({
        error: new Error("no definitions loaded")
      });
    }
    definitions = self2._emit("saveXML.start", {
      definitions
    }) || definitions;
    self2._moddle.toXML(definitions, options).then(function(result) {
      var xml2 = result.xml;
      xml2 = self2._emit("saveXML.serialized", {
        xml: xml2
      }) || xml2;
      return resolve({
        xml: xml2
      });
    });
  }).catch(function(error2) {
    return { error: error2 };
  }).then(function(result) {
    self2._emit("saveXML.done", result);
    var error2 = result.error;
    if (error2) {
      return Promise.reject(error2);
    }
    return result;
  });
});
BaseViewer.prototype.saveSVG = wrapForCompatibility(function saveSVG(options) {
  var self2 = this;
  return new Promise(function(resolve, reject) {
    self2._emit("saveSVG.start");
    var svg, err;
    try {
      var canvas = self2.get("canvas");
      var contentNode = canvas.getDefaultLayer(), defsNode = query("defs", canvas._svg);
      var contents = innerSVG(contentNode), defs = defsNode ? "<defs>" + innerSVG(defsNode) + "</defs>" : "";
      var bbox = contentNode.getBBox();
      svg = '<?xml version="1.0" encoding="utf-8"?>\n<!-- created with bpmn-js / http://bpmn.io -->\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + bbox.width + '" height="' + bbox.height + '" viewBox="' + bbox.x + " " + bbox.y + " " + bbox.width + " " + bbox.height + '" version="1.1">' + defs + contents + "</svg>";
    } catch (e) {
      err = e;
    }
    self2._emit("saveSVG.done", {
      error: err,
      svg
    });
    if (!err) {
      return resolve({ svg });
    }
    return reject(err);
  });
});
BaseViewer.prototype._setDefinitions = function(definitions) {
  this._definitions = definitions;
};
BaseViewer.prototype.getModules = function() {
  return this._modules;
};
BaseViewer.prototype.clear = function() {
  if (!this.getDefinitions()) {
    return;
  }
  this.get("elementRegistry").forEach(function(element) {
    var bo = element.businessObject;
    if (bo && bo.di) {
      delete bo.di;
    }
  });
  Diagram.prototype.clear.call(this);
};
BaseViewer.prototype.destroy = function() {
  Diagram.prototype.destroy.call(this);
  remove$1(this._container);
};
BaseViewer.prototype.on = function(event, priority, callback, target) {
  return this.get("eventBus").on(event, priority, callback, target);
};
BaseViewer.prototype.off = function(event, callback) {
  this.get("eventBus").off(event, callback);
};
BaseViewer.prototype.attachTo = function(parentNode) {
  if (!parentNode) {
    throw new Error("parentNode required");
  }
  this.detach();
  if (parentNode.get && parentNode.constructor.prototype.jquery) {
    parentNode = parentNode.get(0);
  }
  if (typeof parentNode === "string") {
    parentNode = query(parentNode);
  }
  parentNode.appendChild(this._container);
  this._emit("attach", {});
  this.get("canvas").resized();
};
BaseViewer.prototype.getDefinitions = function() {
  return this._definitions;
};
BaseViewer.prototype.detach = function() {
  var container = this._container, parentNode = container.parentNode;
  if (!parentNode) {
    return;
  }
  this._emit("detach", {});
  parentNode.removeChild(container);
};
BaseViewer.prototype._init = function(container, moddle, options) {
  var baseModules = options.modules || this.getModules(), additionalModules = options.additionalModules || [], staticModules = [
    {
      bpmnjs: ["value", this],
      moddle: ["value", moddle]
    }
  ];
  var diagramModules = [].concat(staticModules, baseModules, additionalModules);
  var diagramOptions = assign(omit(options, ["additionalModules"]), {
    canvas: assign({}, options.canvas, { container }),
    modules: diagramModules
  });
  Diagram.call(this, diagramOptions);
  if (options && options.container) {
    this.attachTo(options.container);
  }
};
BaseViewer.prototype._emit = function(type, event) {
  return this.get("eventBus").fire(type, event);
};
BaseViewer.prototype._createContainer = function(options) {
  var container = domify('<div class="bjs-container"></div>');
  assign(container.style, {
    width: ensureUnit(options.width),
    height: ensureUnit(options.height),
    position: options.position
  });
  return container;
};
BaseViewer.prototype._createModdle = function(options) {
  var moddleOptions = assign({}, this._moddleExtensions, options.moddleExtensions);
  return new simple(moddleOptions);
};
BaseViewer.prototype._modules = [];
function addWarningsToError(err, warningsAry) {
  err.warnings = warningsAry;
  return err;
}
function checkValidationError(err) {
  var pattern = /unparsable content <([^>]+)> detected([\s\S]*)$/;
  var match2 = pattern.exec(err.message);
  if (match2) {
    err.message = "unparsable content <" + match2[1] + "> detected; this may indicate an invalid BPMN 2.0 diagram file" + match2[2];
  }
  return err;
}
var DEFAULT_OPTIONS = {
  width: "100%",
  height: "100%",
  position: "relative"
};
function ensureUnit(val) {
  return val + (isNumber(val) ? "px" : "");
}
function findBPMNDiagram(definitions, diagramId) {
  if (!diagramId) {
    return null;
  }
  return find(definitions.diagrams, function(element) {
    return element.id === diagramId;
  }) || null;
}
function addProjectLogo(container) {
  var img = BPMNIO_IMG;
  var linkMarkup = '<a href="http://bpmn.io" target="_blank" class="bjs-powered-by" title="Powered by bpmn.io" style="position: absolute; bottom: 15px; right: 15px; z-index: 100; ' + LINK_STYLES + '">' + img + "</a>";
  var linkElement = domify(linkMarkup);
  container.appendChild(linkElement);
  componentEvent.bind(linkElement, "click", function(event) {
    open();
    event.preventDefault();
  });
}
function Viewer(options) {
  BaseViewer.call(this, options);
}
inherits$1(Viewer, BaseViewer);
Viewer.prototype._modules = [
  CoreModule$1,
  TranslateModule,
  SelectionModule,
  OverlaysModule
];
Viewer.prototype._moddleExtensions = {};
function hasModifier(event) {
  return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
}
function isCmd(event) {
  if (event.altKey) {
    return false;
  }
  return event.ctrlKey || event.metaKey;
}
function isKey(keys, event) {
  keys = isArray$1(keys) ? keys : [keys];
  return keys.indexOf(event.key) !== -1 || keys.indexOf(event.keyCode) !== -1;
}
function isShift(event) {
  return event.shiftKey;
}
var KEYDOWN_EVENT = "keyboard.keydown", KEYUP_EVENT = "keyboard.keyup";
var HANDLE_MODIFIER_ATTRIBUTE = "input-handle-modified-keys";
var DEFAULT_PRIORITY = 1e3;
function Keyboard(config, eventBus) {
  var self2 = this;
  this._config = config || {};
  this._eventBus = eventBus;
  this._keydownHandler = this._keydownHandler.bind(this);
  this._keyupHandler = this._keyupHandler.bind(this);
  eventBus.on("diagram.destroy", function() {
    self2._fire("destroy");
    self2.unbind();
  });
  eventBus.on("diagram.init", function() {
    self2._fire("init");
  });
  eventBus.on("attach", function() {
    if (config && config.bindTo) {
      self2.bind(config.bindTo);
    }
  });
  eventBus.on("detach", function() {
    self2.unbind();
  });
}
Keyboard.$inject = [
  "config.keyboard",
  "eventBus"
];
Keyboard.prototype._keydownHandler = function(event) {
  this._keyHandler(event, KEYDOWN_EVENT);
};
Keyboard.prototype._keyupHandler = function(event) {
  this._keyHandler(event, KEYUP_EVENT);
};
Keyboard.prototype._keyHandler = function(event, type) {
  var eventBusResult;
  if (this._isEventIgnored(event)) {
    return;
  }
  var context = {
    keyEvent: event
  };
  eventBusResult = this._eventBus.fire(type || KEYDOWN_EVENT, context);
  if (eventBusResult) {
    event.preventDefault();
  }
};
Keyboard.prototype._isEventIgnored = function(event) {
  return isInput(event.target) && this._isModifiedKeyIgnored(event);
};
Keyboard.prototype._isModifiedKeyIgnored = function(event) {
  if (!isCmd(event)) {
    return true;
  }
  var allowedModifiers = this._getAllowedModifiers(event.target);
  return !allowedModifiers.includes(event.key);
};
Keyboard.prototype._getAllowedModifiers = function(element) {
  var modifierContainer = closest(element, "[" + HANDLE_MODIFIER_ATTRIBUTE + "]", true);
  if (!modifierContainer || this._node && !this._node.contains(modifierContainer)) {
    return [];
  }
  return modifierContainer.getAttribute(HANDLE_MODIFIER_ATTRIBUTE).split(",");
};
Keyboard.prototype.bind = function(node2) {
  this.unbind();
  this._node = node2;
  componentEvent.bind(node2, "keydown", this._keydownHandler, true);
  componentEvent.bind(node2, "keyup", this._keyupHandler, true);
  this._fire("bind");
};
Keyboard.prototype.getBinding = function() {
  return this._node;
};
Keyboard.prototype.unbind = function() {
  var node2 = this._node;
  if (node2) {
    this._fire("unbind");
    componentEvent.unbind(node2, "keydown", this._keydownHandler, true);
    componentEvent.unbind(node2, "keyup", this._keyupHandler, true);
  }
  this._node = null;
};
Keyboard.prototype._fire = function(event) {
  this._eventBus.fire("keyboard." + event, { node: this._node });
};
Keyboard.prototype.addListener = function(priority, listener, type) {
  if (isFunction(priority)) {
    type = listener;
    listener = priority;
    priority = DEFAULT_PRIORITY;
  }
  this._eventBus.on(type || KEYDOWN_EVENT, priority, listener);
};
Keyboard.prototype.removeListener = function(listener, type) {
  this._eventBus.off(type || KEYDOWN_EVENT, listener);
};
Keyboard.prototype.hasModifier = hasModifier;
Keyboard.prototype.isCmd = isCmd;
Keyboard.prototype.isShift = isShift;
Keyboard.prototype.isKey = isKey;
function isInput(target) {
  return target && (matchesSelector(target, "input, textarea") || target.contentEditable === "true");
}
var LOW_PRIORITY = 500;
var KEYCODE_C = 67;
var KEYCODE_V = 86;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;
var KEYS_COPY = ["c", "C", KEYCODE_C];
var KEYS_PASTE = ["v", "V", KEYCODE_V];
var KEYS_REDO = ["y", "Y", KEYCODE_Y];
var KEYS_UNDO = ["z", "Z", KEYCODE_Z];
function KeyboardBindings(eventBus, keyboard) {
  var self2 = this;
  eventBus.on("editorActions.init", LOW_PRIORITY, function(event) {
    var editorActions = event.editorActions;
    self2.registerBindings(keyboard, editorActions);
  });
}
KeyboardBindings.$inject = [
  "eventBus",
  "keyboard"
];
KeyboardBindings.prototype.registerBindings = function(keyboard, editorActions) {
  function addListener(action, fn) {
    if (editorActions.isRegistered(action)) {
      keyboard.addListener(fn);
    }
  }
  addListener("undo", function(context) {
    var event = context.keyEvent;
    if (isCmd(event) && !isShift(event) && isKey(KEYS_UNDO, event)) {
      editorActions.trigger("undo");
      return true;
    }
  });
  addListener("redo", function(context) {
    var event = context.keyEvent;
    if (isCmd(event) && (isKey(KEYS_REDO, event) || isKey(KEYS_UNDO, event) && isShift(event))) {
      editorActions.trigger("redo");
      return true;
    }
  });
  addListener("copy", function(context) {
    var event = context.keyEvent;
    if (isCmd(event) && isKey(KEYS_COPY, event)) {
      editorActions.trigger("copy");
      return true;
    }
  });
  addListener("paste", function(context) {
    var event = context.keyEvent;
    if (isCmd(event) && isKey(KEYS_PASTE, event)) {
      editorActions.trigger("paste");
      return true;
    }
  });
  addListener("stepZoom", function(context) {
    var event = context.keyEvent;
    if (isKey(["+", "Add", "="], event) && isCmd(event)) {
      editorActions.trigger("stepZoom", { value: 1 });
      return true;
    }
  });
  addListener("stepZoom", function(context) {
    var event = context.keyEvent;
    if (isKey(["-", "Subtract"], event) && isCmd(event)) {
      editorActions.trigger("stepZoom", { value: -1 });
      return true;
    }
  });
  addListener("zoom", function(context) {
    var event = context.keyEvent;
    if (isKey("0", event) && isCmd(event)) {
      editorActions.trigger("zoom", { value: 1 });
      return true;
    }
  });
  addListener("removeSelection", function(context) {
    var event = context.keyEvent;
    if (isKey(["Backspace", "Delete", "Del"], event)) {
      editorActions.trigger("removeSelection");
      return true;
    }
  });
};
var KeyboardModule = {
  __init__: ["keyboard", "keyboardBindings"],
  keyboard: ["type", Keyboard],
  keyboardBindings: ["type", KeyboardBindings]
};
var DEFAULT_CONFIG = {
  moveSpeed: 50,
  moveSpeedAccelerated: 200
};
function KeyboardMove(config, keyboard, canvas) {
  var self2 = this;
  this._config = assign({}, DEFAULT_CONFIG, config || {});
  keyboard.addListener(arrowsListener);
  function arrowsListener(context) {
    var event = context.keyEvent, config2 = self2._config;
    if (!keyboard.isCmd(event)) {
      return;
    }
    if (keyboard.isKey([
      "ArrowLeft",
      "Left",
      "ArrowUp",
      "Up",
      "ArrowDown",
      "Down",
      "ArrowRight",
      "Right"
    ], event)) {
      var speed = keyboard.isShift(event) ? config2.moveSpeedAccelerated : config2.moveSpeed;
      var direction;
      switch (event.key) {
        case "ArrowLeft":
        case "Left":
          direction = "left";
          break;
        case "ArrowUp":
        case "Up":
          direction = "up";
          break;
        case "ArrowRight":
        case "Right":
          direction = "right";
          break;
        case "ArrowDown":
        case "Down":
          direction = "down";
          break;
      }
      self2.moveCanvas({
        speed,
        direction
      });
      return true;
    }
  }
  this.moveCanvas = function(opts) {
    var dx = 0, dy = 0, speed = opts.speed;
    var actualSpeed = speed / Math.min(Math.sqrt(canvas.viewbox().scale), 1);
    switch (opts.direction) {
      case "left":
        dx = actualSpeed;
        break;
      case "up":
        dy = actualSpeed;
        break;
      case "right":
        dx = -actualSpeed;
        break;
      case "down":
        dy = -actualSpeed;
        break;
    }
    canvas.scroll({
      dx,
      dy
    });
  };
}
KeyboardMove.$inject = [
  "config.keyboardMove",
  "keyboard",
  "canvas"
];
var KeyboardMoveModule = {
  __depends__: [
    KeyboardModule
  ],
  __init__: ["keyboardMove"],
  keyboardMove: ["type", KeyboardMove]
};
var CURSOR_CLS_PATTERN = /^djs-cursor-.*$/;
function set(mode) {
  var classes$12 = classes(document.body);
  classes$12.removeMatching(CURSOR_CLS_PATTERN);
  if (mode) {
    classes$12.add("djs-cursor-" + mode);
  }
}
function unset() {
  set(null);
}
var TRAP_PRIORITY = 5e3;
function install(eventBus, eventName) {
  eventName = eventName || "element.click";
  function trap() {
    return false;
  }
  eventBus.once(eventName, TRAP_PRIORITY, trap);
  return function() {
    eventBus.off(eventName, trap);
  };
}
function delta(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
var THRESHOLD = 15;
function MoveCanvas(eventBus, canvas) {
  var context;
  eventBus.on("element.mousedown", 500, function(e) {
    return handleStart(e.originalEvent);
  });
  function handleMove(event) {
    var start = context.start, button = context.button, position = toPoint(event), delta$1 = delta(position, start);
    if (!context.dragging && length(delta$1) > THRESHOLD) {
      context.dragging = true;
      if (button === 0) {
        install(eventBus);
      }
      set("grab");
    }
    if (context.dragging) {
      var lastPosition = context.last || context.start;
      delta$1 = delta(position, lastPosition);
      canvas.scroll({
        dx: delta$1.x,
        dy: delta$1.y
      });
      context.last = position;
    }
    event.preventDefault();
  }
  function handleEnd(event) {
    componentEvent.unbind(document, "mousemove", handleMove);
    componentEvent.unbind(document, "mouseup", handleEnd);
    context = null;
    unset();
  }
  function handleStart(event) {
    if (closest(event.target, ".djs-draggable")) {
      return;
    }
    var button = event.button;
    if (button >= 2 || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    context = {
      button,
      start: toPoint(event)
    };
    componentEvent.bind(document, "mousemove", handleMove);
    componentEvent.bind(document, "mouseup", handleEnd);
    return true;
  }
  this.isActive = function() {
    return !!context;
  };
}
MoveCanvas.$inject = [
  "eventBus",
  "canvas"
];
function length(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}
var MoveCanvasModule = {
  __init__: ["moveCanvas"],
  moveCanvas: ["type", MoveCanvas]
};
function log10(x) {
  return Math.log(x) / Math.log(10);
}
function getStepSize(range, steps) {
  var minLinearRange = log10(range.min), maxLinearRange = log10(range.max);
  var absoluteLinearRange = Math.abs(minLinearRange) + Math.abs(maxLinearRange);
  return absoluteLinearRange / steps;
}
function cap(range, scale) {
  return Math.max(range.min, Math.min(range.max, scale));
}
var sign = Math.sign || function(n) {
  return n >= 0 ? 1 : -1;
};
var RANGE = { min: 0.2, max: 4 }, NUM_STEPS = 10;
var DELTA_THRESHOLD = 0.1;
var DEFAULT_SCALE = 0.75;
function ZoomScroll(config, eventBus, canvas) {
  config = config || {};
  this._enabled = false;
  this._canvas = canvas;
  this._container = canvas._container;
  this._handleWheel = bind$2(this._handleWheel, this);
  this._totalDelta = 0;
  this._scale = config.scale || DEFAULT_SCALE;
  var self2 = this;
  eventBus.on("canvas.init", function(e) {
    self2._init(config.enabled !== false);
  });
}
ZoomScroll.$inject = [
  "config.zoomScroll",
  "eventBus",
  "canvas"
];
ZoomScroll.prototype.scroll = function scroll(delta2) {
  this._canvas.scroll(delta2);
};
ZoomScroll.prototype.reset = function reset() {
  this._canvas.zoom("fit-viewport");
};
ZoomScroll.prototype.zoom = function zoom(delta2, position) {
  var stepSize = getStepSize(RANGE, NUM_STEPS * 2);
  this._totalDelta += delta2;
  if (Math.abs(this._totalDelta) > DELTA_THRESHOLD) {
    this._zoom(delta2, position, stepSize);
    this._totalDelta = 0;
  }
};
ZoomScroll.prototype._handleWheel = function handleWheel(event) {
  if (closest(event.target, ".djs-scrollable", true)) {
    return;
  }
  var element = this._container;
  event.preventDefault();
  var isZoom = event.ctrlKey;
  var isHorizontalScroll = event.shiftKey;
  var factor = -1 * this._scale, delta2;
  if (isZoom) {
    factor *= event.deltaMode === 0 ? 0.02 : 0.32;
  } else {
    factor *= event.deltaMode === 0 ? 1 : 16;
  }
  if (isZoom) {
    var elementRect = element.getBoundingClientRect();
    var offset2 = {
      x: event.clientX - elementRect.left,
      y: event.clientY - elementRect.top
    };
    delta2 = Math.sqrt(Math.pow(event.deltaY, 2) + Math.pow(event.deltaX, 2)) * sign(event.deltaY) * factor;
    this.zoom(delta2, offset2);
  } else {
    if (isHorizontalScroll) {
      delta2 = {
        dx: factor * event.deltaY,
        dy: 0
      };
    } else {
      delta2 = {
        dx: factor * event.deltaX,
        dy: factor * event.deltaY
      };
    }
    this.scroll(delta2);
  }
};
ZoomScroll.prototype.stepZoom = function stepZoom(delta2, position) {
  var stepSize = getStepSize(RANGE, NUM_STEPS);
  this._zoom(delta2, position, stepSize);
};
ZoomScroll.prototype._zoom = function(delta2, position, stepSize) {
  var canvas = this._canvas;
  var direction = delta2 > 0 ? 1 : -1;
  var currentLinearZoomLevel = log10(canvas.zoom());
  var newLinearZoomLevel = Math.round(currentLinearZoomLevel / stepSize) * stepSize;
  newLinearZoomLevel += stepSize * direction;
  var newLogZoomLevel = Math.pow(10, newLinearZoomLevel);
  canvas.zoom(cap(RANGE, newLogZoomLevel), position);
};
ZoomScroll.prototype.toggle = function toggle(newEnabled) {
  var element = this._container;
  var handleWheel2 = this._handleWheel;
  var oldEnabled = this._enabled;
  if (typeof newEnabled === "undefined") {
    newEnabled = !oldEnabled;
  }
  if (oldEnabled !== newEnabled) {
    componentEvent[newEnabled ? "bind" : "unbind"](element, "wheel", handleWheel2, false);
  }
  this._enabled = newEnabled;
  return newEnabled;
};
ZoomScroll.prototype._init = function(newEnabled) {
  this.toggle(newEnabled);
};
var ZoomScrollModule = {
  __init__: ["zoomScroll"],
  zoomScroll: ["type", ZoomScroll]
};
function NavigatedViewer(options) {
  Viewer.call(this, options);
}
inherits$1(NavigatedViewer, Viewer);
NavigatedViewer.prototype._navigationModules = [
  KeyboardMoveModule,
  MoveCanvasModule,
  ZoomScrollModule
];
NavigatedViewer.prototype._modules = [].concat(Viewer.prototype._modules, NavigatedViewer.prototype._navigationModules);
class CustomBpmnViewer extends NavigatedViewer {
}
class CustomBpmnViewerFactory {
}
CustomBpmnViewerFactory.prototype.get_instance = (divIdContainer) => {
  const bpmnViewer2 = new CustomBpmnViewer({
    container: divIdContainer,
    keyboard: {
      bindTo: window
    }
  });
  return bpmnViewer2;
};
var viewer = "";
const init = (sessuuid2) => {
  const sessdata = {
    "id": "1",
    "file_name": "qr-code.bpmn",
    "SESSUUID": sessuuid2,
    "SCREEN_NAME": "Viewer"
  };
  SessionStateStore.saveState(sessuuid2, sessdata);
};
const displayDiagram = async (xml_data, file_name, id2 = "") => {
  try {
    const result = bpmnViewer.importXML(xml_data);
    const { warnings } = result;
    console.log("Open a file :" + file_name);
    $("#file_name").text(file_name);
    $("#id").text(id2);
  } catch (err) {
    console.log(err.message, err.warnings);
    alert("could not import BPMN 2.0 XML, see console");
  }
};
const drawCanvas = (bpmnXML, file_name, id2) => {
  displayDiagram(bpmnXML, file_name, id2);
  const canvas = bpmnViewer.get("canvas");
  canvas.zoom("fit-viewport");
  bpmnViewer.get("overlays");
  const eventBus = bpmnViewer.get("eventBus");
  eventBus.on("element.click", 10, (e) => {
    console.log("element.click!");
    const bo = e.element.businessObject;
    const boParent = e.element.parent.businessObject;
    const context = {
      "id": bo.id,
      "type": bo.$type,
      "name": bo.name,
      "parentid": boParent.id,
      "parentType": boParent.$type,
      "parentName": boParent.name
    };
    console.log(context);
    $("#btn_modal_form").click();
  });
};
const renderHbs = async (sessuuid2) => {
  const stateData = SessionStateStore.loadState(sessuuid2);
  const file_name = stateData.file_name;
  const id2 = stateData.id;
  let STATIC_PATH = $(EL_STATIC_PATH).text();
  if (STATIC_PATH == "") {
    STATIC_PATH = STATIC_PATH_CUSTOMED;
  }
  await HbsUtil.renderComponent(EL_APP, STATIC_PATH + HBS_MAIN_TEMPLATE, stateData);
  $(EL_COMPONENTS).html(divComponents);
  console.log(`render ${STATIC_PATH + HBS_MAIN_TEMPLATE} ...`);
  for (let itm of aryHbsComponents) {
    console.log(`render ${STATIC_PATH + itm.hbsPath} ...`);
    await HbsUtil.renderComponent(itm.el, STATIC_PATH + itm.hbsPath, itm.data);
  }
  const factory = new CustomBpmnViewerFactory();
  bpmnViewer = factory.get_instance(EL_CANVAS);
  $("#btn_modal_form").click(() => {
    console.log("#btn_modal_form clicked!");
    $("#modal-form").show();
  });
  const url = MEDIA_PATH + file_name;
  const bpmnXML = await DataUtil.fetchData(url);
  drawCanvas(bpmnXML, file_name, id2);
};
const MEDIA_PATH = "../../media/xml/";
const HBS_MAIN_TEMPLATE = "./viewer/viewer.hbs";
const aryHbsComponents = [
  { el: "#form-component", data: {}, hbsPath: "./viewer/components/form-component.hbs" }
];
const divComponents = `
  <div id='form-component'></div>
`;
let bpmnViewer = {};
const sessuuid = "999999999999999";
init(sessuuid);
const EL_APP = "#app";
const EL_COMPONENTS = "#div-components";
const EL_CANVAS = "#js-canvas";
const EL_STATIC_PATH = "#STATIC-PATH";
const STATIC_PATH_CUSTOMED = "../../../static/viewer-customed/src/";
$(document).on("load", renderHbs(sessuuid));
