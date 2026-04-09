import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: 'Aditya', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted for Aditya:", formData);
      setFormData({ name: 'Aditya', email: '', password: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
      </div>
      <div>
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>
      <div>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;