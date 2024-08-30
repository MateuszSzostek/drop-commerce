"use client";

import translations from "@/translations/translations.pl";
import useLoginForm from "./useLoginForm";

export default function LoginForm() {
  const { handleSubmitCustomerLogin, handleTestNotification } = useLoginForm();

  return (
    <>
      {/*<!-- Sign-in -->*/}
      <div className="col-md-6 col-sm-6 sign-in">
        <h4 className="">{translations.SignIn["sign-in"]}</h4>
        <p className="">{translations.SignIn["login-label"]}</p>

        <form
          className="register-form outer-top-xs"
          role="form"
          onSubmit={handleSubmitCustomerLogin}
        >
          <div className="form-group">
            <label className="info-title" htmlFor="email">
              {translations.SignIn["email-address"]}
            </label>
            <input
              type="email"
              className="form-control unicase-form-control text-input"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="password">
              {translations.SignIn["password"]} <span>*</span>
            </label>
            <input
              type="password"
              className="form-control unicase-form-control text-input"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form-group checkbox outer-xs">
            <label>
              <input
                type="checkbox"
                name="shouldRemember"
                id="shouldRemember"
              />
              {translations.SignIn["remember"]}
            </label>
            <a href="#" className="forgot-password pull-right">
              {translations.SignIn["forgot-password-link"]}
            </a>
          </div>
          <button
            type="submit"
            className="btn-upper btn btn-primary checkout-page-button"
          >
            {translations.SignIn["login-button"]}
          </button>
        </form>

        <button onClick={handleTestNotification}>NOTIFICATION</button>
      </div>
      {/*<!-- Sign-in -->*/}
    </>
  );
}
