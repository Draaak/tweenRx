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


var EaseFunc;
(function (EaseFunc) {
    EaseFunc[EaseFunc["Back"] = 0] = "Back";
    EaseFunc[EaseFunc["Bounce"] = 1] = "Bounce";
    EaseFunc[EaseFunc["Circ"] = 2] = "Circ";
    EaseFunc[EaseFunc["Cubic"] = 3] = "Cubic";
    EaseFunc[EaseFunc["Elastic"] = 4] = "Elastic";
    EaseFunc[EaseFunc["Expo"] = 5] = "Expo";
    EaseFunc[EaseFunc["Linear"] = 6] = "Linear";
    EaseFunc[EaseFunc["Quad"] = 7] = "Quad";
    EaseFunc[EaseFunc["Quart"] = 8] = "Quart";
    EaseFunc[EaseFunc["Quint"] = 9] = "Quint";
    EaseFunc[EaseFunc["Sine"] = 10] = "Sine";
})(EaseFunc = exports.EaseFunc || (exports.EaseFunc = {}));
;
var EaseShape;
(function (EaseShape) {
    EaseShape[EaseShape["In"] = 0] = "In";
    EaseShape[EaseShape["Out"] = 1] = "Out";
    EaseShape[EaseShape["InOut"] = 2] = "InOut";
})(EaseShape = exports.EaseShape || (exports.EaseShape = {}));
;
var Ease = function () {
    function Ease() {}
    Ease.getEase = function (func, shape) {
        var name = Ease.getMember(func, shape);
        return Ease[name];
    };
    Ease.getMember = function (func, shape) {
        if (shape === void 0) {
            shape = EaseShape.In;
        }
        if (func == EaseFunc.Linear) {
            shape = EaseShape.In;
        }
        return EaseFunc[func].toLowerCase() + EaseShape[shape];
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
    Tween.create = function (options) {
        var func = ease_1.Ease.getEase(options.easeFunc, options.easeShape);
        return Tween.observable(options, func);
    };
    Tween.backIn = function (options) {
        return Tween.observable(options, ease_1.Ease.backIn);
    };
    Tween.backOut = function (options) {
        return Tween.observable(options, ease_1.Ease.backOut);
    };
    Tween.backInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.backInOut);
    };
    Tween.bounceIn = function (options) {
        return Tween.observable(options, ease_1.Ease.bounceIn);
    };
    Tween.bounceOut = function (options) {
        return Tween.observable(options, ease_1.Ease.bounceOut);
    };
    Tween.bounceInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.bounceInOut);
    };
    Tween.circIn = function (options) {
        return Tween.observable(options, ease_1.Ease.circIn);
    };
    Tween.circOut = function (options) {
        return Tween.observable(options, ease_1.Ease.circOut);
    };
    Tween.circInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.circInOut);
    };
    Tween.cubicIn = function (options) {
        return Tween.observable(options, ease_1.Ease.cubicIn);
    };
    Tween.cubicOut = function (options) {
        return Tween.observable(options, ease_1.Ease.cubicOut);
    };
    Tween.cubicInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.cubicInOut);
    };
    Tween.elasticOut = function (options) {
        return Tween.observable(options, ease_1.Ease.elasticOut);
    };
    Tween.elasticIn = function (options) {
        return Tween.observable(options, ease_1.Ease.elasticIn);
    };
    Tween.elasticInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.elasticInOut);
    };
    Tween.expoIn = function (options) {
        return Tween.observable(options, ease_1.Ease.expoIn);
    };
    Tween.expoOut = function (options) {
        return Tween.observable(options, ease_1.Ease.expoOut);
    };
    Tween.expoInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.expoInOut);
    };
    Tween.linear = function (options) {
        return Tween.observable(options, ease_1.Ease.linear);
    };
    Tween.quadIn = function (options) {
        return Tween.observable(options, ease_1.Ease.quadIn);
    };
    Tween.quadOut = function (options) {
        return Tween.observable(options, ease_1.Ease.quadOut);
    };
    Tween.quadInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.quadInOut);
    };
    Tween.quartIn = function (options) {
        return Tween.observable(options, ease_1.Ease.quartIn);
    };
    Tween.quartOut = function (options) {
        return Tween.observable(options, ease_1.Ease.quartOut);
    };
    Tween.quartInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.quartInOut);
    };
    Tween.quintIn = function (options) {
        return Tween.observable(options, ease_1.Ease.quintIn);
    };
    Tween.quintOut = function (options) {
        return Tween.observable(options, ease_1.Ease.quintOut);
    };
    Tween.quintInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.quintInOut);
    };
    Tween.sineIn = function (options) {
        return Tween.observable(options, ease_1.Ease.sineIn);
    };
    Tween.sineOut = function (options) {
        return Tween.observable(options, ease_1.Ease.sineOut);
    };
    Tween.sineInOut = function (options) {
        return Tween.observable(options, ease_1.Ease.sineInOut);
    };
    Tween.observable = function (options, ease) {
        var end = options.begin + options.change;
        if (options.interval <= 0) {
            var start_1 = Date.now();
            var endTime_1 = start_1 + options.duration;
            return rx.Observable.interval(0, rx.Scheduler.animationFrame).timestamp().map(function (time) {
                return ease(time.timestamp - start_1, options.begin, options.change, options.duration);
            }).takeWhile(function (val, index) {
                return Date.now() < endTime_1;
            }).concat(rx.Observable.of(end)).distinct();
        } else {
            var ticks = Math.round(options.duration / options.interval);
            return rx.Observable.interval(options.interval).take(ticks).map(function (tick) {
                return ease(tick * options.interval, options.begin, end, options.duration);
            }).concat(rx.Observable.of(end)).distinct();
        }
    };
    return Tween;
}();
exports.Tween = Tween;

/***/ })
/******/ ]);
//# sourceMappingURL=tweenRx.js.map