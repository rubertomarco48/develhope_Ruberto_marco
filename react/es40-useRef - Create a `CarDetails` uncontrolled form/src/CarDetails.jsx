import React, { useRef, useEffect } from 'react';

const CarDetails = ({ initialData }) => {
  const modelRef = useRef(null);
  const yearRef = useRef(null);
  const colorRef = useRef(null);

  useEffect(() => {
    modelRef.current.value = initialData.model || '';
    yearRef.current.value = initialData.year || '';
    colorRef.current.value = initialData.color || '';
  }, [initialData]);

  return (
    <form>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          ref={modelRef}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          ref={yearRef}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          ref={colorRef}
        />
      </div>
    </form>
  );
};

export default CarDetails;
