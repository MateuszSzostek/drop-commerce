"use client";

import translations from "@/translations/translations.pl";
import useRegisterForm from "./useRegisterForm";

export default function RegisterForm() {
  const { handleSubmitCustomerRegister, formErrors } = useRegisterForm();

  return (
    <>
      <div className="col-md-6 col-sm-6 create-new-account">
        <h4 className="checkout-subtitle">
          {translations.SignIn["register-label"]}
        </h4>
        <p className="text title-tag-line">
          {translations.SignIn["register-label"]}
        </p>
        <form
          className="register-form outer-top-xs"
          role="form"
          onSubmit={handleSubmitCustomerRegister}
        >
          <div className="form-group">
            <label className="info-title" htmlFor="email">
              {translations.SignIn["email-address"]}
              <span>*</span>
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
            <label className="info-title" htmlFor="name">
              {translations.SignIn["name"]} <span>*</span>
            </label>
            <input
              type="name"
              className="form-control unicase-form-control text-input"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="surname">
              {translations.SignIn["surname"]} <span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="surname"
              name="surname"
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
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="confirmPassword">
              {translations.SignIn["confirm-password"]} <span>*</span>
            </label>
            <input
              type="password"
              className="form-control unicase-form-control text-input"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>
          <div className="form-group checkbox outer-xs">
            <label>
              <input type="checkbox" name="privacyPolicy" id="privacyPolicy" />
              {translations.SignIn["privacy-policy"]}
            </label>
          </div>
          <button
            type="submit"
            className="btn-upper btn btn-primary checkout-page-button"
          >
            {translations.SignIn["register-button"]}
          </button>
        </form>
        <ul>
          {Object.keys(formErrors).map((key) => (
            <li style={{ color: "red" }}>{formErrors[key]}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
