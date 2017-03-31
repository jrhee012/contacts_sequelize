const contactsController = require('../controllers').contacts;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Contacts API!',
  }));

  app.post('/api/contacts', contactsController.create);
  app.get('/api/contacts', contactsController.list);
  app.get('/api/contacts/:contactId', contactsController.retrieve);
  app.put('/api/contacts/:contactId', contactsController.update);
  app.delete('/api/contacts/:contactId', contactsController.destroy);

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};
