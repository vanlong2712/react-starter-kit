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
