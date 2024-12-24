import { useState } from 'react';
import useLogin from '@/hooks/useLogin.js';
import { parseValidationErrors } from '@/lib/helpers.js';
import Errors from '@/components/Errors.jsx';

export default function SignInModal() {
  const [
    loginFromData,
    loginValidations,
    updateLoginFromData,
    login
  ] = useLogin();

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState([]);

  const handleClick = () => {
    setErrors([]);
    setStatus('submitting');

    login().then(response => {
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
      <div className="modal modal-blur fade" id="signin-modal" tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In for NewsFeed</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-2">

              <div className="mb-2 text-center">
                {
                  status == 'submitting' &&
                  <span className="text-primary">Logging in... Please wait...</span>
                }

                {
                  status == 'success' &&
                  <strong className="text-success">Login successful! Please wait while the page is refreshed...</strong>
                }
              </div>

              <Errors errors={errors} />

              <div className="mb-2">
                <label className="form-label required mb-1">Email</label>
                <input
                  type="email"
                  className={"form-control " + (loginValidations.email ? 'is-invalid' : '')}
                  name="email"
                  placeholder="Email Address..."
                  value={loginFromData.email}
                  onChange={(e) => updateLoginFromData('email', e.target.value)}
                  />
                  <div className="invalid-feedback">{ loginValidations.email }</div>
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Password</label>
                <input
                  type="password"
                  className={"form-control " + (loginValidations.password ? 'is-invalid' : '')}
                  name="password"
                  placeholder="Password"
                  value={loginFromData.password}
                  onChange={(e) => updateLoginFromData('password', e.target.value)}
                  />
                  <div className="invalid-feedback">{ loginValidations.password }</div>
              </div>

              <div className="text-center">
                <p className="mb-0">
                  Don't have an account? 
                  <span className="text-blue pointer" data-bs-toggle="modal" data-bs-target="#signup-modal"> Sign Up here</span>.
                </p>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn me-auto" data-bs-dismiss="modal">Close</button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={ () => handleClick() }
                >Sign In!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}