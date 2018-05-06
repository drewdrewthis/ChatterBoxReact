const { compose } = require('react-app-rewired');
const rewireCssModules = require('react-app-rewire-css-modules');

//  custom config
module.exports = (config, env) => {
  const rewires = compose(rewireCssModules);
  // do custom config
  // ...
  return rewires(config, env);
};
