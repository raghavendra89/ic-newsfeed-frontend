import { useState } from 'react';
import PreferenceOptions from './PreferenceOptions.jsx';

export default function PreferencesModal() {
  const [activeSection, setActiveSection] = useState('Sources');

  const preferences = {
    sources: ['The Guardian', 'New York Times', 'Sky News'],
    categories: ['The Guardian', 'New York Times', 'Sky News'],
    date: []
  };

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
                ['Sources', 'Categories', 'Date'].map(section => (
                  <div
                    className={"pointer p-2 mx-1 fs-3 " + (activeSection == section ? 'active-filter' : '')}
                    onClick={ () => setActiveSection(section) }
                    >
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-list-details"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 5h8" /><path d="M13 9h5" /><path d="M13 15h8" /><path d="M13 19h5" /><path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
                    <span className="ms-2">{ section }</span>
                  </div>
                ))
              }
            </div>

            <PreferenceOptions name={activeSection} options={preferences[activeSection]} />

          </div>
          <div className="modal-footer">
            <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}