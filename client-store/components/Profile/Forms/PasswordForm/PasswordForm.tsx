import usePasswordForm from "./usePasswordForm";
import "./PasswordForm.styles.css";

interface IPasswordForm {
  onClose: () => void;
  onSuccess: () => void;
}

export default function PasswordForm({ onSuccess, onClose }: IPasswordForm) {
  const { handleSubmitForm } = usePasswordForm();

  return (
    <form className="outer-top-xs" role="form" onSubmit={handleSubmitForm}>
      <h3 style={{ marginBottom: "32px" }}>Zmien haslo</h3>
      <div className="acc-data-form__row">
        <div className="acc-data-form__col">
          <div className="form-group">
            <label className="info-title" htmlFor="old-password">
              Stare haslo<span>*</span>
            </label>
            <input
              type="password"
              className="form-control unicase-form-control text-input"
              id="old-password"
              name="old-password"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="new-password">
              Nowe haslo<span>*</span>
            </label>
            <input
              type="password"
              className="form-control unicase-form-control text-input"
              id="new-password"
              name="new-password"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="new-password-repeat">
              Powtorz nowe haslo<span>*</span>
            </label>
            <input
              type="password"
              className="form-control unicase-form-control text-input"
              id="new-password-repeat"
              name="new-password-repeat"
              required
            />
          </div>
        </div>
      </div>

      <button
        style={{ marginRight: "12px" }}
        type="submit"
        className="btn-upper btn btn-primary checkout-page-button"
      >
        ZAPISZ
      </button>

      <button
        onClick={onClose}
        type="button"
        className="btn-upper btn btn-secondary checkout-page-button"
      >
        ANULUJ
      </button>
    </form>
  );
}
