import { useState, useEffect, useContext } from 'react';
import PreferenceOptions from './PreferenceOptions.jsx';
import {NewsContext} from '@/lib/NewsContext.js';
import useFilters from '@/hooks/useFilters.js';
import {Litepicker} from 'litepicker';

export default function FilterModal() {
  const [activeSection, setActiveSection] = useState('Sources');
  const [selectedOptions, addOption, removeOption, setDate, clearOptions] = useFilters();

  const [
    news,
    preferedNews,
    preferencesEmpty,
    preferenceOptions,
    fetchNews
  ] = useContext(NewsContext);

  return (
    <div className="modal modal-blur fade" id="filter-modal" tabIndex="-1" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select Filter Options</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div className="d-flex mb-3">
              {
                ['Sources', 'Categories', 'Date'].map((section, index) => (
                  <div
                    className={"pointer p-2 mx-1 fs-3 " + (activeSection == section ? 'active-filter' : '')}
                    onClick={ () => setActiveSection(section) }
                    key={index}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-list-details"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 5h8" /><path d="M13 9h5" /><path d="M13 15h8" /><path d="M13 19h5" /><path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
                    <span className="ms-2">{ section }</span>
                  </div>
                ))
              }
            </div>

            {
              activeSection !== 'Date' &&
              <PreferenceOptions
                sectionName={activeSection}
                options={preferenceOptions[activeSection.toLowerCase()]}
                selectedOptions={selectedOptions[activeSection.toLowerCase()]}
                addOption={addOption}
                removeOption={removeOption}
                />
            }

            {
              activeSection === 'Date' &&
              <FilterDates
                setDate={setDate}
                selectedOptions={selectedOptions}
                />
            }

          </div>
          <div className="modal-footer">
            <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => clearOptions()}
              >Clear All</button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => fetchNews('/', '', selectedOptions)}
              >Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterDates({ setDate, selectedOptions }) {

  useEffect(() => {
    const picker1 = new Litepicker({ 
      element: document.getElementById('from-datepicker'),
      setup: (picker) => {console.log(picker);
        picker.on('selected', (date1, date2) => {
          setDate('from_date', date1)
        })
      }
    });

    const picker2 = new Litepicker({ 
      element: document.getElementById('to-datepicker'),
      setup: (picker) => {
        picker.on('selected', (date1, date2) => {
          setDate('to_date', date1)
        })
      }
    });
  })

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">From Date:</label>
            <input
              className="form-control mb-2"
              placeholder="Select a date"
              id="from-datepicker"
              value={selectedOptions.from_date}
              onChange={() => {}}
              />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">To Date:</label>
            <input
              className="form-control mb-2"
              placeholder="Select a date"
              id="to-datepicker"
              value={selectedOptions.to_date}
              onChange={() => {}}
              />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 my-5 py-5">
        </div>
      </div>
    </>
  );
}