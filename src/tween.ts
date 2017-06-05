// TODO: fixed precision or maybe supply generic type (can then use int) or round or maybe a convert function
// TODO: start from begin(0) option

import * as rx from 'rxjs';

import { Ease }  from './ease';

export * from './ease';

export class Tween {
  private _obs: rx.Observable<number>;

  constructor(private targets: any[], private update: any, private ease: any, private begin: number, private change: number, private duration: number, private interval: number, ...extra) {
    this._obs = Tween.observable(ease, begin, change, duration, interval, extra);
  }

  play() {
    this._obs.subscribe((val:number) => {
      this.targets.forEach((x) => this.update(x))
    });
  }

  stop() {

  }

  reverse() {

  }



  static observable(ease: any, begin: number, change: number, duration: number, interval: number, ...extra): rx.Observable<number> {
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
