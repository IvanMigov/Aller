const Controller = require('../controllers/main_controller');

module.exports = (app) => {
  app.post('/api/parse', Controller.parse);
  // app.put('/api/drivers/:id', Controller.edit);
  // app.delete('/api/drivers/:id', Controller.delete);
  // app.get('/api/drivers', Controller.index);
};
