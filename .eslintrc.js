// .eslintrc.js
// This file is a bridge to load the config from your .eslintrc.mjs file

// Use dynamic import to load the ESM config file
// This is necessary because this .eslintrc.js file might be treated as CommonJS
// by default depending on your Node.js and package.json settings.
// The 'default' property is because your .eslintrc.mjs uses 'export default'.
module.exports = (async () => {
  const { default: config } = await import('./.eslintrc.mjs');
  return config;
})();
