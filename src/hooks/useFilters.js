import { useState } from 'react';
import api from '@/lib/api.js';

export default function useFilters() {
  const [selectedOptions, setSelectedOptions] = useState({
    sources: [],
    categories: [],
    from_date: '',
    to_date: ''
  });

  const addOption = (section, option) => {
    let currentOptions = {...selectedOptions};

    currentOptions[section].push(option);

    setSelectedOptions(currentOptions);
  }

  const removeOption = (section, option) => {
    let currentOptions = {...selectedOptions};

    currentOptions[section] = currentOptions[section].filter(currentOption => currentOption !== option);

    setSelectedOptions(currentOptions);
  }

  const setDate = (field, date) => {
    if (! ['from_date', 'to_date'].includes(field)) {
      return;
    }

    let currentOptions = {...selectedOptions};
    currentOptions[field] = date.format('MM-DD-YYYY');
    setSelectedOptions(currentOptions);
  }

  const clearOptions = () => {
    setSelectedOptions({
      sources: [],
      categories: [],
      from_date: '',
      to_date: ''
    });
  }

  return [selectedOptions, addOption, removeOption, setDate, clearOptions];
}