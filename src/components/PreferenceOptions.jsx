import { useState, useEffect } from 'react';

export default function PreferenceOptions({sectionName, options, selectedOptions, addOption, removeOption}) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchOption, setSearchOption] = useState('');

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  useEffect(() => {
    let filtered = [];
    filtered = options?.filter(option => option.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1);

    setFilteredOptions(filtered);
  }, [searchOption]);

  const addRemoveSelectedOption = (target) => {
    if (target.checked) {
      addOption(sectionName.toLowerCase(), target.value);
    } else {
      removeOption(sectionName.toLowerCase(), target.value);
    }
  }

  return (
    <>
      <h4 className="mb-2">Selected { sectionName }:</h4>
      <div className="mb-3 p-2 border border-1 rounded">
        {
          selectedOptions?.map((option, index) => (
            <span className="tag bg-blue text-white mx-1" key={index}>
              { option }
              <span
                className="btn-close"
                onClick={() => removeOption(sectionName.toLowerCase(), option)}
                >
                </span>
            </span>
          ))
        }
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Search here..."
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
          />
      </div>

      <div>
        {
          filteredOptions?.map((option, index) => (
            <label className="form-check d-inline-block mx-1 pointer" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(e) => addRemoveSelectedOption(e.target)}
                value={option}
                checked={ (selectedOptions.includes(option) ? true : false) }
                />
              <span className="form-check-label">{ option }</span>
            </label>
          ))
        }
      </div>
    </>
  );
}