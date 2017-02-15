import * as Rx from 'rxjs';

import { Ease, EaseFunc, EaseShape } from 'ease';

export interface ITweenOptions {
  begin: number,
  change: number,
  duration: number,
  interval: number
}

export interface ITweenEaseOptions extends ITweenOptions {
  easeFunc: EaseFunc;
  easeShape: EaseShape;
}

export class Tween {
  static create(options: ITweenEaseOptions): Rx.Observable<number> {
    let func = Ease.getEase(options.easeFunc, options.easeShape);
    return Tween.observable(options, func);
  }

  static backIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.backIn);
  }

  static backOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.backOut);
  }

  static backInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.backInOut);
  }

  static bounceIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.bounceIn);
  }

  static bounceOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.bounceOut);
  }

  static bounceInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.bounceInOut);
  }

  static circIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.circIn);
  }

  static circOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.circOut);
  }

  static circInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.circInOut);
  }

  static cubicIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.cubicIn);
  }

  static cubicOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.cubicOut);
  }

  static cubicInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.cubicInOut);
  }

  static elasticOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.elasticOut);
  }

  static elasticIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.elasticIn);
  }

  static elasticInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.elasticInOut);
  }

  static expoIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.expoIn);
  }

  static expoOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.expoOut);
  }

  static expoInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.expoInOut);
  }

  // static linearNone   = Observable.linear;
  // static linearIn     = Observable.linear;
  // static linearOut    = Observable.linear;
  // static linearInOut  = Observable.linear;

  static linear(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.linear);
  }

  static quadIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quadIn);
  }

  static quadOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quadOut);
  }

  static quadInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quadInOut);
  }

  static quartIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quartIn);
  }

  static quartOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quartOut);
  }

  static quartInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quartInOut);
  }

  static quintIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quintIn);
  }

  static quintOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quintOut);
  }

  static quintInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.quintInOut);
  }

  static sineIn(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.sineIn);
  }

  static sineOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.sineOut);
  }

  static sineInOut(options: ITweenOptions): Rx.Observable<number> {
    return Tween.observable(options, Ease.sineInOut);
  }

  private static observable(options: ITweenOptions, ease: any): Rx.Observable<number> {
    const end = options.begin + options.change;
    if (options.interval <= 0) { //asume request animation frame
      let start = Date.now();
      let endTime = start + options.duration;
      return Rx.Observable
        .interval(0, Rx.Scheduler.animationFrame)
        .timestamp()
        .map((time) => {
          return ease(time.timestamp - start, options.begin, options.change, options.duration)
        })
        .takeWhile((val, index) => Date.now() < endTime)
        .concat(Rx.Observable.of(end))
        .distinct();
    } else { //might need to sanity check this !!!
      const ticks = Math.round(options.duration / options.interval);
      return Rx.Observable.interval(options.interval)
        .take(ticks)
        .map(tick => ease(tick * options.interval, options.begin, end, options.duration))
        .concat(Rx.Observable.of(end))
        .distinct();        
    }
  }  
}
