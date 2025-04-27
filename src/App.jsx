import { useState } from "react";
import './App.css'; // Add this line to import custom CSS

function App() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    fathername: '',
    mothername: '',
    city: '',
    state: '',
    country: '',
    college: '',
    semester: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('🎉 Form submitted successfully!');
  };

  return (
    <div className="page-container">
    <div className="form-container">
      <h1 className="form-title">📋 Student Registration Form</h1>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Father Name</label>
          <input name="fathername" value={formData.fathername} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Mother Name</label>
          <input name="mothername" value={formData.mothername} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
        </div>

        <div className="form-group">
          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            <option>Haryana</option>
            <option>Tamil Nadu</option>
            <option>West Bengal</option>
          </select>
        </div>

        <div className="form-group">
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Sri Lanka</option>
            <option>Australia</option>
          </select>
        </div>

        <div className="form-group">
          <label>College</label>
          <select name="college" value={formData.college} onChange={handleChange}>
            <option value="">Select</option>
            <option>IIT Delhi</option>
            <option>IIT Bombay</option>
            <option>NIT Trichy</option>
            <option>VIT Vellore</option>
            <option>NIT Surathkal</option>
          </select>
        </div>

        <div className="form-group">
          <label>Semester</label>
          <select name="semester" value={formData.semester} onChange={handleChange}>
            <option value="">Select</option>
            <option>1</option><option>2</option><option>3</option><option>4</option>
            <option>5</option><option>6</option><option>7</option><option>8</option>
          </select>
        </div>

        <div className="form-group">
          <label>Skills</label>
          <select name="skills" value={formData.skills} onChange={handleChange}>
            <option value="">Select</option>
            <option>C</option>
            <option>Python</option>
            <option>Java</option>
            <option>Front end</option>
            <option>Back end</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>

      </form>
    </div>
    </div>
  );
}

export default App;
