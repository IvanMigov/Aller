const Controller = require('../controllers/main_controller');

module.exports = (app) => {
  app.post('/api/parse', Controller.parse);
  app.put('/api/suggestion', Controller.create);
  app.get('/api/articles', Controller.index);
  app.patch('/api/approve', Controller.approve);
};
