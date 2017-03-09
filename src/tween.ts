// TODO: fixed precision or maybe supply generic type (can then use int) or round or maybe a convert function
// TODO: start from begin(0) option

import * as rx from 'rxjs';

import { Func, Ease }  from './ease';

export * from './ease';

export class Tween {
  static create(easeFunc: Func, begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    // let func = Ease.getEase(options.easeFunc);
    return Tween.observable(Ease.getEase(easeFunc), begin, change, duration, interval);
  }

  static backIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.backIn, begin, change, duration, interval);
  }

  static backOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.backOut, begin, change, duration, interval);
  }

  static backInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.backInOut, begin, change, duration, interval);
  }

  static bounceIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.bounceIn, begin, change, duration, interval);
  }

  static bounceOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.bounceOut, begin, change, duration, interval);
  }

  static bounceInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.bounceInOut, begin, change, duration, interval);
  }

  static circIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.circIn, begin, change, duration, interval);
  }

  static circOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.circOut, begin, change, duration, interval);
  }

  static circInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.circInOut, begin, change, duration, interval);
  }

  static cubicIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.cubicIn, begin, change, duration, interval);
  }

  static cubicOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.cubicOut, begin, change, duration, interval);
  }

  static cubicInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.cubicInOut, begin, change, duration, interval);
  }

  static elasticOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.elasticOut, begin, change, duration, interval);
  }

  static elasticIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.elasticIn, begin, change, duration, interval);
  }

  static elasticInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.elasticInOut, begin, change, duration, interval);
  }

  static expoIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.expoIn, begin, change, duration, interval);
  }

  static expoOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.expoOut, begin, change, duration, interval);
  }

  static expoInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.expoInOut, begin, change, duration, interval);
  }

  static linear(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.linear, begin, change, duration, interval);
  }

  static quadIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quadIn, begin, change, duration, interval);
  }

  static quadOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quadOut, begin, change, duration, interval);
  }

  static quadInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quadInOut, begin, change, duration, interval);
  }

  static quartIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quartIn, begin, change, duration, interval);
  }

  static quartOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quartOut, begin, change, duration, interval);
  }

  static quartInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quartInOut, begin, change, duration, interval);
  }

  static quintIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quintIn, begin, change, duration, interval);
  }

  static quintOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quintOut, begin, change, duration, interval);
  }

  static quintInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.quintInOut, begin, change, duration, interval);
  }

  static sineIn(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.sineIn, begin, change, duration, interval);
  }

  static sineOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.sineOut, begin, change, duration, interval);
  }

  static sineInOut(begin: number, change: number, duration: number, interval: number): rx.Observable<number> {
    return Tween.observable(Ease.sineInOut, begin, change, duration, interval);
  }

  static quadraticBezier(begin: number, change: number, duration: number, interval: number, p1y: number): rx.Observable<number> {
    return Tween.observable(Ease.sineInOut, begin, change, duration, interval);
  }

  static cubicBezier(begin: number, change: number, duration: number, interval: number, p1y: number, p2y: number): rx.Observable<number> {
    return Tween.observable(Ease.sineInOut, begin, change, duration, interval);
  }  

  static bezier(begin: number, change: number, duration: number, interval: number, ...points): rx.Observable<number> {
    return Tween.observable(Ease.bezier, begin, change, duration, interval, ...points);
  }  

  private static observable(ease: any, begin: number, change: number, duration: number, interval: number, ...extra): rx.Observable<number> {
    const end = begin + change;
    if (interval <= 0) { //asume request animation frame
      let start = undefined;
      let endTime = undefined;
      return rx.Observable
        .interval(0, rx.Scheduler.animationFrame)
        .timestamp()
        .map((time) => {
          if (!start) {
            start = Date.now();
            endTime = start + duration;
          }          
          return ease(time.timestamp - start, begin, change, duration, ...extra).toFixed(2)
        })
        .takeWhile((val, index) => Date.now() < endTime)
        .concat(rx.Observable.of(end))
        .distinct();
    } else { //might need to sanity check this !!!
      const ticks = Math.round(duration / interval);
      return rx.Observable.interval(interval)
        .take(ticks)
        .map(tick => ease(tick * interval, begin, end, duration, ...extra).toFixed(2))
        .concat(rx.Observable.of(end))
        .distinct();        
    }
  }  
}
