import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);
const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleAddCourse = async (newCourse) => {
    try {
      const response = await axios.post('/api/courses', newCourse);
      setCourses([...courses, response.data]);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };
  return (
    <div>
      <h2>Course Management</h2>
    </div>
  );
};

export default CourseManagement;
