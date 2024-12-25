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
            document.getElementById('close-preferences-modal').click();
            const backdrops = document.getElementsByClassName('modal-backdrop');
            for (var i = 0; i < backdrops.length; i++) {
              backdrops.item(i).remove();
            }

            // Show toast
            location.reload();
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

  return [selectedOptions, addOption, removeOption, clearOptions, getOptions, saveOptions];
}