const path = require('path');
const cpy = require('cpy');

(async () => {
  await cpy(
    path.resolve(__dirname, '../dist/**/*.html'),
    path.resolve(__dirname, '../dist/'),
  );
  // eslint-disable-next-line no-console
  console.log('Files copied!');
})();
