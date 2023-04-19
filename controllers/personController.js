const Person = require('../models/personSchema');
const mongoose = require('mongoose');

// Get all persons
const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one person
const getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create one person
const createPerson = async (req, res) => {
  const person = new Person({
    name: req.body.name,
    dob: req.body.dob,
    ownerId: req.body.ownerId,
    gifts: req.body.gifts,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update one person
const updatePersonById = async (req, res) => {
  try {
    // const objectId = mongoose.Types.ObjectId(req.params.id);
    const updatedPerson = await Person.findOneAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Delete one person
const deletePersonById = async (req, res) => {
  try {
    const deletedPerson = await Person.findOneAndDelete(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.json(deletedPerson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePersonById,
  deletePersonById
};
