

export default function AuthModals() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
    </>
  );
}

function SignUpModal() {
  return (
    <>
      <div className="modal modal-blur fade" id="signup-modal" tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up for NewsFeed</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="mb-2 text-center">
                <small>Takes less than 20 seconds!</small>
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Name</label>
                <input type="text" className="form-control" name="name" placeholder="Full Name..." />
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Email</label>
                <input type="email" className="form-control" name="email" placeholder="Email Address..." />
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" />
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Confirm Password</label>
                <input type="password" className="form-control" name="password_confirmation" placeholder="Password" />
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
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Sign Up!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SignInModal() {
  return (
    <>
      <div className="modal modal-blur fade" id="signin-modal" tabIndex="-1" aria-modal="true" role="dialog">
        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In for NewsFeed</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="mb-2">
                <label className="form-label required mb-1">Email</label>
                <input type="email" className="form-control" name="email" placeholder="Email Address..." />
              </div>

              <div className="mb-2">
                <label className="form-label required mb-1">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" />
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
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Sign In!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}