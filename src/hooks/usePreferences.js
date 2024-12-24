import { useState } from 'react';
import api from '@/lib/api.js';

export default function usePreferences() {
  const [selectedOptions, setSelectedOptions] = useState({
    sources: [],
    categories: [],
    authors: []
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

  const clearOptions = () => {
    setSelectedOptions({
      sources: [],
      categories: [],
      authors: []
    });
  }

  const saveOptions = () => {
    api.post('user/preferences', selectedOptions)
        .then(data => {
            console.log(data);
            new Modal(document.getElementById('perferences-modal'), {}).hide();
        }).catch(error => {
        });
  }

  const getOptions = () => {
    api.get('user/preferences', selectedOptions)
        .then(data => {
            setSelectedOptions(data.data);
        }).catch(error => {
        });
  }

  getOptions();

  return [selectedOptions, addOption, removeOption, clearOptions, saveOptions];
}