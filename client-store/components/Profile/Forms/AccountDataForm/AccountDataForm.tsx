import useAccountDataForm from "./useAccountDataForm";
import "./AccountDataForm.styles.css";

interface IAccountDataForm {
  onClose: () => void;
  onSuccess: () => void;
}

export default function AccountDataForm({
  onSuccess,
  onClose,
}: IAccountDataForm) {
  const { handleSubmitUpdateAccountDataForm } = useAccountDataForm({
    onSuccess,
  });

  return (
    <form
      className="outer-top-xs"
      role="form"
      onSubmit={handleSubmitUpdateAccountDataForm}
    >
      <h3 style={{ marginBottom: "32px" }}>Dane konta</h3>
      <div className="acc-data-form__row">
        <div className="acc-data-form__col">
          <div className="form-group">
            <label className="info-title" htmlFor="name">
              Imie<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="surname">
              Nazwisko<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="surname"
              name="surname"
              required
            />
          </div>

          <div className="form-group">
            <label className="info-title" htmlFor="userName">
              Nazwa uzytkownika<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="userName"
              name="userName"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="phone">
              Numer telefonu<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="phone"
              name="phone"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="place">
              Miejscowosc<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="place"
              name="place"
              required
            />
          </div>
        </div>
        <div className="acc-data-form__col">
          <div className="form-group">
            <label className="info-title" htmlFor="streetName">
              Nazw ulicy<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="streetName"
              name="streetName"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="streetNumber">
              Numer ulicy/domu<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="streetNumber"
              name="streetNumber"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="post">
              Poczta<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="post"
              name="post"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="postCode">
              Kod Pocztowy<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="postCode"
              name="postCode"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="commune">
              Gmina<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="commune"
              name="commune"
              required
            />
          </div>

          <div className="form-group">
            <label className="info-title" htmlFor="voivodeship">
              Wojewodztwo<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="voivodeship"
              name="voivodeship"
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
