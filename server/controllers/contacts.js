const Contact = require('../models').Contact;

module.exports = {
  create(req, res) {
    return Contact
      .create({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone_number: req.body.phone_number,
      })
      .then(contact => res.status(201).send(contact))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Contact
      .all()
      .then(contacts => res.status(200).send(contacts))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Contact
      .findById(req.params.contactId)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Contact Not Found',
          });
        }
        return res.status(200).send(contact);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Contact
      .findById(req.params.contactId)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Contact Not Found',
          });
        }
        return contact
          .update({
            name: req.body.name || todo.name,
            email: req.body.email || contact.email,
            address: req.body.address || contact.address,
            phone_number: req.body.phone_number || contact.phone_number,
          })
          .then(() => res.status(200).send(contact))  // Send back the updated contact.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Contact
      .findById(req.params.contactId)
      .then(contact => {
        if (!contact) {
          return res.status(400).send({
            message: 'Contact Not Found',
          });
        }
        return contact
          .destroy()
          .then(() => res.status(204).send({ message: 'Contact deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
