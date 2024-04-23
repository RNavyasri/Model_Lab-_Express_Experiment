// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read a single student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a student
router.patch('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
