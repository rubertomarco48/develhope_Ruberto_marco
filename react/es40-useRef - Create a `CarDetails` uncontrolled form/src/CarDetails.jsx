import React, { useState, useEffect } from 'react';

const CarDetails = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default CarDetails;
