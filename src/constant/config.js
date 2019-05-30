const apiDomain = document.location.origin.indexOf('local') < 0 ? document.location.origin : 'dev';
const liveDomain = '';
const staticFile = '';
const AppConfig = {
  apiDomain,
  isDebug: apiDomain !== liveDomain,
  staticImages: `${staticFile}/images/`,
  googleApiKey:
    (window && window.config && window.config.googleMapsKey) ||
    'AIzaSyBbK45238J7Kgp6YIC3grq92sQN8gJq1W4',
};

export default AppConfig;
