import { navigate } from '@reach/router';
import AppConfig from '../constant/config';

export const goTo = path => navigate(path);

export const replaceTo = path => navigate(path, { replace: true });

export const goBack = () => {
  window.history && window.history.back();
};

export const consoleLog = value => {
  if (AppConfig.isDebug) {
    console.log(value);
  }
};

export const deepEqual = (x, y) => {
  if (x === y) {
    return true;
  }
  if (typeof x === 'object' && x != null && (typeof y === 'object' && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length) {
      return false;
    }

    for (const prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }
  return false;
};

export const deepClone = value => JSON.parse(JSON.stringify(value));
