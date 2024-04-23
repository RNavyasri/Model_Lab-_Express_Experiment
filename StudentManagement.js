// src/components/StudentManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = async (newStudent) => {
    try {
      const response = await axios.post('/api/students', newStudent);
      setStudents([...students, response.data]);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  // Define other CRUD operations (update, delete) as needed

  return (
    <div>
      <h2>Student Management</h2>
    </div>
  );
};

export default StudentManagement;
