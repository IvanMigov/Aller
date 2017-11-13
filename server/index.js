console.log('index.js is running');

const app = require('./app');

app.listen(3050, () => {
  console.log('Running on port 3050');
});
