module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Func;
(function (Func) {
    Func[Func["BackIn"] = 0] = "BackIn";
    Func[Func["BackOut"] = 1] = "BackOut";
    Func[Func["BackInOut"] = 2] = "BackInOut";
    Func[Func["BounceOut"] = 3] = "BounceOut";
    Func[Func["BounceIn"] = 4] = "BounceIn";
    Func[Func["BounceInOut"] = 5] = "BounceInOut";
    Func[Func["CircIn"] = 6] = "CircIn";
    Func[Func["CircOut"] = 7] = "CircOut";
    Func[Func["CircInOut"] = 8] = "CircInOut";
    Func[Func["CubicIn"] = 9] = "CubicIn";
    Func[Func["CubicOut"] = 10] = "CubicOut";
    Func[Func["CubicInOut"] = 11] = "CubicInOut";
    Func[Func["ElasticOut"] = 12] = "ElasticOut";
    Func[Func["ElasticIn"] = 13] = "ElasticIn";
    Func[Func["ElasticInOut"] = 14] = "ElasticInOut";
    Func[Func["ExpoIn"] = 15] = "ExpoIn";
    Func[Func["ExpoOut"] = 16] = "ExpoOut";
    Func[Func["ExpoInOut"] = 17] = "ExpoInOut";
    Func[Func["Linear"] = 18] = "Linear";
    Func[Func["QuadIn"] = 19] = "QuadIn";
    Func[Func["QuadOut"] = 20] = "QuadOut";
    Func[Func["QuadInOut"] = 21] = "QuadInOut";
    Func[Func["QuartIn"] = 22] = "QuartIn";
    Func[Func["QuartOut"] = 23] = "QuartOut";
    Func[Func["QuartInOut"] = 24] = "QuartInOut";
    Func[Func["QuintIn"] = 25] = "QuintIn";
    Func[Func["QuintOut"] = 26] = "QuintOut";
    Func[Func["QuintInOut"] = 27] = "QuintInOut";
    Func[Func["SineIn"] = 28] = "SineIn";
    Func[Func["SineOut"] = 29] = "SineOut";
    Func[Func["SineInOut"] = 30] = "SineInOut";
    Func[Func["QuadraticBezier"] = 31] = "QuadraticBezier";
    Func[Func["CubicBezier"] = 32] = "CubicBezier";
    Func[Func["Bezier"] = 33] = "Bezier";
})(Func = exports.Func || (exports.Func = {}));
;
var Ease = function () {
    function Ease() {}
    Ease.getEase = function (func) {
        // TODO: shitty I know... but want to get it going for now
        var text = Func[func];
        var fname = text.charAt(0).toLowerCase() + text.slice(1);
        return Ease[fname];
    };
    Ease.backIn = function (time, begin, change, duration, overshoot) {
        if (overshoot === void 0) {
            overshoot = 1.70158;
        }
        return change * (time /= duration) * time * ((overshoot + 1) * time - overshoot) + begin;
    };
    Ease.backOut = function (time, begin, change, duration, overshoot) {
        if (overshoot === void 0) {
            overshoot = 1.70158;
        }
        return change * ((time = time / duration - 1) * time * ((overshoot + 1) * time + overshoot) + 1) + begin;
    };
    Ease.backInOut = function (time, begin, change, duration, overshoot) {
        if (overshoot === void 0) {
            overshoot = 1.70158;
        }
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * (time * time * (((overshoot *= 1.525) + 1) * time - overshoot)) + begin;
        } else {
            return change / 2 * ((time -= 2) * time * (((overshoot *= 1.525) + 1) * time + overshoot) + 2) + begin;
        }
    };
    Ease.bounceOut = function (time, begin, change, duration) {
        if ((time /= duration) < 1 / 2.75) {
            return change * (7.5625 * time * time) + begin;
        } else if (time < 2 / 2.75) {
            return change * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + begin;
        } else if (time < 2.5 / 2.75) {
            return change * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + begin;
        } else {
            return change * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + begin;
        }
    };
    Ease.bounceIn = function (time, begin, change, duration) {
        return change - Ease.bounceOut(duration - time, 0, change, duration) + begin;
    };
    Ease.bounceInOut = function (time, begin, change, duration) {
        if (time < duration / 2) {
            return Ease.bounceIn(time * 2, 0, change, duration) * 0.5 + begin;
        } else {
            return Ease.bounceOut(time * 2 - duration, 0, change, duration) * 0.5 + change * 0.5 + begin;
        }
    };
    Ease.circIn = function (time, begin, change, duration) {
        return -change * (Math.sqrt(1 - (time = time / duration) * time) - 1) + begin;
    };
    Ease.circOut = function (time, begin, change, duration) {
        return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
    };
    Ease.circInOut = function (time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
        } else {
            return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
        }
    };
    Ease.cubicIn = function (time, begin, change, duration) {
        return change * (time /= duration) * time * time + begin;
    };
    Ease.cubicOut = function (time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time + 1) + begin;
    };
    Ease.cubicInOut = function (time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time + begin;
        } else {
            return change / 2 * ((time -= 2) * time * time + 2) + begin;
        }
    };
    Ease.elasticOut = function (time, begin, change, duration, amplitude, period) {
        if (amplitude === void 0) {
            amplitude = null;
        }
        if (period === void 0) {
            period = null;
        }
        var overshoot;
        if (time === 0) {
            return begin;
        } else if ((time = time / duration) === 1) {
            return begin + change;
        } else {
            if (!(period != null)) {
                period = duration * 0.3;
            }
            if (!(amplitude != null) || amplitude < Math.abs(change)) {
                amplitude = change;
                overshoot = period / 4;
            } else {
                overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
            }
            return amplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
        }
    };
    Ease.elasticIn = function (time, begin, change, duration, amplitude, period) {
        if (amplitude === void 0) {
            amplitude = null;
        }
        if (period === void 0) {
            period = null;
        }
        var overshoot;
        if (time === 0) {
            return begin;
        } else if ((time = time / duration) === 1) {
            return begin + change;
        } else {
            if (!(period != null)) {
                period = duration * 0.3;
            }
            if (!(amplitude != null) || amplitude < Math.abs(change)) {
                amplitude = change;
                overshoot = period / 4;
            } else {
                overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
            }
            time -= 1;
            return -(amplitude * Math.pow(2, 10 * time)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + begin;
        }
    };
    Ease.elasticInOut = function (time, begin, change, duration, amplitude, period) {
        if (amplitude === void 0) {
            amplitude = null;
        }
        if (period === void 0) {
            period = null;
        }
        var overshoot;
        if (time === 0) {
            return begin;
        } else if ((time = time / (duration / 2)) === 2) {
            return begin + change;
        } else {
            if (!(period != null)) {
                period = duration * (0.3 * 1.5);
            }
            if (!(amplitude != null) || amplitude < Math.abs(change)) {
                amplitude = change;
                overshoot = period / 4;
            } else {
                overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
            }
            if (time < 1) {
                return -0.5 * (amplitude * Math.pow(2, 10 * (time -= 1))) * Math.sin((time * duration - overshoot) * (2 * Math.PI / period)) + begin;
            } else {
                return amplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
            }
        }
    };
    Ease.expoIn = function (time, begin, change, duration) {
        if (time === 0) {
            return begin;
        }
        return change * Math.pow(2, 10 * (time / duration - 1)) + begin;
    };
    Ease.expoOut = function (time, begin, change, duration) {
        if (time === duration) {
            return begin + change;
        }
        return change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
    };
    Ease.expoInOut = function (time, begin, change, duration) {
        if (time === 0) {
            return begin;
        } else if (time === duration) {
            return begin + change;
        } else if ((time = time / (duration / 2)) < 1) {
            return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
        } else {
            return change / 2 * (-Math.pow(2, -10 * (time - 1)) + 2) + begin;
        }
    };
    Ease.linear = function (time, begin, change, duration) {
        return change * time / duration + begin;
    };
    Ease.quadIn = function (time, begin, change, duration) {
        return change * (time = time / duration) * time + begin;
    };
    Ease.quadOut = function (time, begin, change, duration) {
        return -change * (time = time / duration) * (time - 2) + begin;
    };
    Ease.quadInOut = function (time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time + begin;
        } else {
            return -change / 2 * ((time -= 1) * (time - 2) - 1) + begin;
        }
    };
    Ease.quartIn = function (time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time + begin;
    };
    Ease.quartOut = function (time, begin, change, duration) {
        return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
    };
    Ease.quartInOut = function (time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time * time + begin;
        } else {
            return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
        }
    };
    Ease.quintIn = function (time, begin, change, duration) {
        return change * (time = time / duration) * time * time * time * time + begin;
    };
    Ease.quintOut = function (time, begin, change, duration) {
        return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
    };
    Ease.quintInOut = function (time, begin, change, duration) {
        if ((time = time / (duration / 2)) < 1) {
            return change / 2 * time * time * time * time * time + begin;
        } else {
            return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
        }
    };
    Ease.sineIn = function (time, begin, change, duration) {
        return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
    };
    Ease.sineOut = function (time, begin, change, duration) {
        return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
    };
    Ease.sineInOut = function (time, begin, change, duration) {
        return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
    };
    Ease.quadraticBezier = function (time, begin, change, duration, p1y) {
        var t = time / duration;
        var _1t = 1 - t;
        return _1t * _1t * begin + 2 * _1t * t * p1y + t * t * (begin + change);
    };
    Ease.cubicBezier = function (time, begin, change, duration, p1y, p2y) {
        var t = time / duration;
        var _1t = 1 - t;
        return _1t * _1t * _1t * begin + 3 * _1t * _1t * t * p1y + 3 * _1t * t * t * p2y + t * t * t * (begin + change);
    };
    Ease.bezier = function (time, begin, change, duration) {
        var points = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            points[_i - 4] = arguments[_i];
        }
        var t = time / duration;
        var _1t = 1 - t;
        var cnt = points.length + 1;
        var sum = 0;
        for (var i = 1; i < points.length; i++) {
            sum += cnt * Math.pow(_1t, cnt - i) * Math.pow(t, i) * points[i];
        }
        return Math.pow(_1t, cnt) * begin + sum + Math.pow(t, cnt) * (begin + change);
    };
    return Ease;
}();
exports.Ease = Ease;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// TODO: fixed precision or maybe supply generic type (can then use int) or round or maybe a convert function
// TODO: start from begin(0) option


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
var rx = __webpack_require__(1);
var ease_1 = __webpack_require__(0);
__export(__webpack_require__(0));
var Tween = function () {
    function Tween() {}
    Tween.create = function (easeFunc, begin, change, duration, interval) {
        // let func = Ease.getEase(options.easeFunc);
        return Tween.observable(ease_1.Ease.getEase(easeFunc), begin, change, duration, interval);
    };
    Tween.backIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.backIn, begin, change, duration, interval);
    };
    Tween.backOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.backOut, begin, change, duration, interval);
    };
    Tween.backInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.backInOut, begin, change, duration, interval);
    };
    Tween.bounceIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.bounceIn, begin, change, duration, interval);
    };
    Tween.bounceOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.bounceOut, begin, change, duration, interval);
    };
    Tween.bounceInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.bounceInOut, begin, change, duration, interval);
    };
    Tween.circIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.circIn, begin, change, duration, interval);
    };
    Tween.circOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.circOut, begin, change, duration, interval);
    };
    Tween.circInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.circInOut, begin, change, duration, interval);
    };
    Tween.cubicIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.cubicIn, begin, change, duration, interval);
    };
    Tween.cubicOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.cubicOut, begin, change, duration, interval);
    };
    Tween.cubicInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.cubicInOut, begin, change, duration, interval);
    };
    Tween.elasticOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.elasticOut, begin, change, duration, interval);
    };
    Tween.elasticIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.elasticIn, begin, change, duration, interval);
    };
    Tween.elasticInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.elasticInOut, begin, change, duration, interval);
    };
    Tween.expoIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.expoIn, begin, change, duration, interval);
    };
    Tween.expoOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.expoOut, begin, change, duration, interval);
    };
    Tween.expoInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.expoInOut, begin, change, duration, interval);
    };
    Tween.linear = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.linear, begin, change, duration, interval);
    };
    Tween.quadIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quadIn, begin, change, duration, interval);
    };
    Tween.quadOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quadOut, begin, change, duration, interval);
    };
    Tween.quadInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quadInOut, begin, change, duration, interval);
    };
    Tween.quartIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quartIn, begin, change, duration, interval);
    };
    Tween.quartOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quartOut, begin, change, duration, interval);
    };
    Tween.quartInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quartInOut, begin, change, duration, interval);
    };
    Tween.quintIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quintIn, begin, change, duration, interval);
    };
    Tween.quintOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quintOut, begin, change, duration, interval);
    };
    Tween.quintInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.quintInOut, begin, change, duration, interval);
    };
    Tween.sineIn = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.sineIn, begin, change, duration, interval);
    };
    Tween.sineOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.sineOut, begin, change, duration, interval);
    };
    Tween.sineInOut = function (begin, change, duration, interval) {
        return Tween.observable(ease_1.Ease.sineInOut, begin, change, duration, interval);
    };
    Tween.quadraticBezier = function (begin, change, duration, interval, p1y) {
        return Tween.observable(ease_1.Ease.quadraticBezier, begin, change, duration, interval, p1y);
    };
    Tween.cubicBezier = function (begin, change, duration, interval, p1y, p2y) {
        return Tween.observable(ease_1.Ease.cubicBezier, begin, change, duration, interval, p1y, p2y);
    };
    Tween.bezier = function (begin, change, duration, interval) {
        var points = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            points[_i - 4] = arguments[_i];
        }
        return Tween.observable.apply(Tween, [ease_1.Ease.bezier, begin, change, duration, interval].concat(points));
    };
    Tween.observable = function (ease, begin, change, duration, interval) {
        var extra = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            extra[_i - 5] = arguments[_i];
        }
        var end = begin + change;
        if (interval <= 0) {
            var start_1 = undefined;
            var endTime_1 = undefined;
            return rx.Observable.interval(0, rx.Scheduler.animationFrame).timestamp().map(function (time) {
                if (!start_1) {
                    start_1 = Date.now();
                    endTime_1 = start_1 + duration;
                }
                return ease.apply(void 0, [time.timestamp - start_1, begin, change, duration].concat(extra)).toFixed(2);
            }).takeWhile(function (val, index) {
                return Date.now() < endTime_1;
            }).concat(rx.Observable.of(end)).distinct();
        } else {
            var ticks = Math.round(duration / interval);
            return rx.Observable.interval(interval).take(ticks).map(function (tick) {
                return ease.apply(void 0, [tick * interval, begin, end, duration].concat(extra)).toFixed(2);
            }).concat(rx.Observable.of(end)).distinct();
        }
    };
    return Tween;
}();
exports.Tween = Tween;

/***/ })
/******/ ]);
//# sourceMappingURL=tweenRx.js.map