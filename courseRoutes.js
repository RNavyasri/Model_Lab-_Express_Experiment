// routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create a new course
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read a single course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }
    res.send(course);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a course
router.patch('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) {
      return res.status(404).send('Course not found');
    }
    res.send(course);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a course
router.delete('/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }
    res.send(course);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
