import { useState } from 'react';
import useRegistration from '@/hooks/useRegistration.js';
import { parseValidationErrors } from '@/lib/helpers.js';
import Errors from '@/components/Errors.jsx';

export default function SignUpModal() {
  const [
    registerFromData,
    registerValidations,
    updateRegisterFromData,
    register
  ] = useRegistration();

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState([]);

  const handleClick = () => {
    setErrors([]);
    setStatus('submitting');

    register().then(response => {
      if (response === false) {
          setStatus('');
          return;
      }

      if (response?.status == 422) {
        setErrors(parseValidationErrors(response));
        setStatus('');
        return;
      }

      setStatus('success');
      setTimeout(() => {
        location.reload();
      }, 2000);
    })
  };

  return (
    <>
      <div className="modal modal-blur fade" id="signup-modal" tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up for NewsFeed</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-2">

              <div className="mb-2 text-center">
                {
                  status == '' &&
                  <small>Takes less than 20 seconds!</small>
                }

                {
                  status == 'submitting' &&
                  <span className="text-primary">Registering... Please wait...</span>
                }

                {
                  status == 'success' &&
                  <strong className="text-success">Registration successful! Please wait while the page is refreshed...</strong>
                }
              </div>

              <Errors errors={errors} />

              <div className="mb-2">
                <label className="form-label required mb-1">First Name</label>
                <input
                  type="text"
                  className={"form-control " + (registerValidations.first_name ? 'is-invalid' : '')}
                  name="first_name"
                  placeholder="Full Name..."
                  value={registerFromData.first_name}
                  onChange={(e) => updateRegisterFromData('first_name', e.target.value)}
                  />
                  <div className="invalid-feedback">{ registerValidations.first_name }</div>
              </div>

              <div className="mb-2">
                <label className="form-label mb-1">Last Name</label>
                <input
                  type="text"
                  className={"form-control " + (registerValidations.last_name ? 'is-invalid' : '')}
                  name="last_name"
                  placeholder="Full Name..."
                  value={registerFromData.last_name}
                  onChange={(e) => updateRegisterFromData('last_name', e.target.value)}
                  />
                  <div className="invalid-feedback">{ registerValidations.last_name }</div>
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Email</label>
                <input
                  type="email"
                  className={"form-control " + (registerValidations.email ? 'is-invalid' : '')}
                  name="email"
                  placeholder="Email Address..."
                  value={registerFromData.email}
                  onChange={(e) => updateRegisterFromData('email', e.target.value)}
                  />
                  <div className="invalid-feedback">{ registerValidations.email }</div>
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Password</label>
                <input
                  type="password"
                  className={"form-control " + (registerValidations.password ? 'is-invalid' : '')}
                  name="password"
                  placeholder="Password"
                  value={registerFromData.password}
                  onChange={(e) => updateRegisterFromData('password', e.target.value)}
                  />
                  <div className="invalid-feedback">{ registerValidations.password }</div>
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Confirm Password</label>
                <input
                  type="password"
                  className={"form-control " + (registerValidations.password_confirmation ? 'is-invalid' : '')}
                  name="password_confirmation"
                  placeholder="Password"
                  value={registerFromData.password_confirmation}
                  onChange={(e) => updateRegisterFromData('password_confirmation', e.target.value)}
                  />
                  <div className="invalid-feedback">{ registerValidations.password_confirmation }</div>
              </div>

              <div className="text-center">
                <p className="mb-0">
                  Already registered? 
                  <span className="text-blue pointer" data-bs-toggle="modal" data-bs-target="#signin-modal"> Sign In here</span>.
                </p>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={ () => handleClick() }
                >Sign Up!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}