//@desc GET all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

//@desc Get contact
//@route POST /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(201).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts
//@access public
const updateContact = (req, res) => {
  res.status(201).json({ message: `Update Contact for ${req.params.id}` });
};

//@desc Delete new contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
  res.status(201).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
