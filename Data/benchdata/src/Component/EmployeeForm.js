import React, { useState } from 'react';
// import '../Style/Employee.css';
import "../Style/EmployeeForm.css"

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    experience: '',
    startDate: '',
    manager: '',
    skills: '',
    remarks: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(formData);
  //     // You can add your submission logic here
  //   };


  // Inside your React component
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/addContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        console.error('Error adding employee');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="form-container">
      <h1>Employee Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" value={formData.department} onChange={handleInputChange} required />

        <label htmlFor="experience">Total Experience:</label>
        <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleInputChange} required />

        <label htmlFor="start-date">Starting Date:</label>
        <input type="date" id="start-date" name="startDate" value={formData.startDate} onChange={handleInputChange} required />

        <label htmlFor="manager">Manager:</label>
        <input type="text" id="manager" name="manager" value={formData.manager} onChange={handleInputChange} required />

        <label htmlFor="skills">Skills:</label>
        <textarea id="skills" name="skills" rows="4" value={formData.skills} onChange={handleInputChange} required></textarea>

        <label htmlFor="remarks">Remarks:</label>
        <textarea id="remarks" name="remarks" rows="4" value={formData.remarks} onChange={handleInputChange}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
