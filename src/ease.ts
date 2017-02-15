export enum EaseFunc {
  Back,
  Bounce,
  Circ,
  Cubic,
  Elastic,
  Expo,
  Linear,
  Quad,
  Quart,
  Quint,
  Sine
};

export enum EaseShape {
  In,
  Out,
  InOut
};

export class Ease {

  static getEase(func: EaseFunc, shape: EaseShape) {
    let name = Ease.getMember(func, shape);
    return Ease[name];
  }

  private static getMember(func: EaseFunc, shape: EaseShape = EaseShape.In): string {
    if (func == EaseFunc.Linear) {
      shape = EaseShape.In;
    }
    return EaseFunc[func].toLowerCase() + EaseShape[shape];
  }

  static backIn(time, begin, change, duration, overshoot = 1.70158) {
    return change * (time /= duration) * time * ((overshoot + 1) * time - overshoot) + begin;
  }

  static backOut(time, begin, change, duration, overshoot = 1.70158) { 
    return change * ((time = time / duration - 1) * time * ((overshoot + 1) * time + overshoot) + 1) + begin;
  }

  static backInOut(time, begin, change, duration, overshoot = 1.70158) {
    if ((time = time / (duration / 2)) < 1) {
      return change / 2 * (time * time * (((overshoot *= 1.525) + 1) * time - overshoot)) + begin;
    } else {
      return change / 2 * ((time -= 2) * time * (((overshoot *= 1.525) + 1) * time + overshoot) + 2) + begin;
    }
  }

  static bounceOut(time, begin, change, duration) {
    if ((time /= duration) < 1 / 2.75) {
      return change * (7.5625 * time * time) + begin;
    } else if (time < 2 / 2.75) {
      return change * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + begin;
    } else if (time < 2.5 / 2.75) {
      return change * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + begin;
    } else {
      return change * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + begin;
    }
  }

  static bounceIn(time, begin, change, duration) {
    return change - Ease.bounceOut(duration - time, 0, change, duration) + begin;
  }

  static bounceInOut(time, begin, change, duration) {
    if (time < duration / 2) {
      return Ease.bounceIn(time * 2, 0, change, duration) * 0.5 + begin;
    } else {
      return Ease.bounceOut(time * 2 - duration, 0, change, duration) * 0.5 + change * 0.5 + begin;
    }
  }

  static circIn(time, begin, change, duration) {
    return -change * (Math.sqrt(1 - (time = time / duration) * time) - 1) + begin;
  }

  static circOut(time, begin, change, duration) {
    return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
  }

  static circInOut(time, begin, change, duration) {
    if ((time = time / (duration / 2)) < 1) {
      return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
    } else {
      return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
    }
  }

  static cubicIn(time, begin, change, duration) {
    return change * (time /= duration) * time * time + begin;
  }

  static cubicOut(time, begin, change, duration) {
    return change * ((time = time / duration - 1) * time * time + 1) + begin;
  }

  static cubicInOut(time, begin, change, duration) {
    if ((time = time / (duration / 2)) < 1) {
      return change / 2 * time * time * time + begin;
    } else {
      return change / 2 * ((time -= 2) * time * time + 2) + begin;
    }
  }

  static elasticOut(time, begin, change, duration, amplitude = null, period = null) {
    let overshoot;
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
      return (amplitude * Math.pow(2, -10 * time)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
    }
  }

  static elasticIn(time, begin, change, duration, amplitude = null, period = null) {
    let overshoot;
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
  }

  static elasticInOut(time, begin, change, duration, amplitude = null, period = null) {
    let overshoot;
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
        return -0.5 * (amplitude * Math.pow(2, 10 * (time -= 1))) * Math.sin((time * duration - overshoot) * ((2 * Math.PI) / period)) + begin;
      } else {
        return amplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
      }
    }
  }

  static expoIn(time, begin, change, duration) {
    if (time === 0) {
      return begin;
    }
    return change * Math.pow(2, 10 * (time / duration - 1)) + begin;
  }

  static expoOut(time, begin, change, duration) {
    if (time === duration) {
      return begin + change;
    }
    return change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
  }

  static expoInOut(time, begin, change, duration) {
    if (time === 0) {
      return begin;
    } else if (time === duration) {
      return begin + change;
    } else if ((time = time / (duration / 2)) < 1) {
      return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
    } else {
      return change / 2 * (-Math.pow(2, -10 * (time - 1)) + 2) + begin;
    }
  }

  // static linearNone   = Observable.linear;
  // static linearIn     = Observable.linear;
  // static linearOut    = Observable.linear;
  // static linearInOut  = Observable.linear;

  static linear(time, begin, change, duration) {
    return change * time / duration + begin;
  }

  static quadIn(time, begin, change, duration) {
    return change * (time = time / duration) * time + begin;
  }

  static quadOut(time, begin, change, duration) {
    return -change * (time = time / duration) * (time - 2) + begin;
  }

  static quadInOut(time, begin, change, duration) {
    if ((time = time / (duration / 2)) < 1) {
      return change / 2 * time * time + begin;
    } else {
      return -change / 2 * ((time -= 1) * (time - 2) - 1) + begin;
    }
  }

  static quartIn(time, begin, change, duration) {
    return change * (time = time / duration) * time * time * time + begin;
  }

  static quartOut(time, begin, change, duration) {
    return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
  }

  static quartInOut(time, begin, change, duration) {
    if ((time = time / (duration / 2)) < 1) {
      return change / 2 * time * time * time * time + begin;
    } else {
      return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
    }
  }

  static quintIn(time, begin, change, duration) {
    return change * (time = time / duration) * time * time * time * time + begin;
  }

  static quintOut(time, begin, change, duration) {
    return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
  }

  static quintInOut(time, begin, change, duration) {
    if ((time = time / (duration / 2)) < 1) {
      return change / 2 * time * time * time * time * time + begin;
    } else {
      return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
    }
  }

  static sineIn(time, begin, change, duration) {
    return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
  }

  static sineOut(time, begin, change, duration) {
    return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
  }

  static sineInOut(time, begin, change, duration) {
    return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
  }
}
