const apiDomain = document.location.origin.indexOf('local') < 0 ? document.location.origin : 'dev';
const liveDomain = '';
const staticFile = '';
const AppConfig = {
  apiDomain,
  isDebug: apiDomain !== liveDomain,
  staticImages: `${staticFile}/images/`,
};

export default AppConfig;
