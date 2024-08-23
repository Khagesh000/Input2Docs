import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear } from 'date-fns';

const YearPicker = ({ selectedYear, onChange, className, placeholder }) => {
  const handleChange = (date) => {
    if (date) {
      onChange(getYear(date).toString()); // Extract the year as a string
    }
  };

  const parsedYear = selectedYear ? new Date(`${selectedYear}-01-01`) : null;

  return (
    <DatePicker
      selected={parsedYear}
      onChange={handleChange}
      showYearPicker
      dateFormat="yyyy"
      className={className}
      placeholderText={placeholder}
    />
  );
};

export default YearPicker;
