import useInvoiceDataForm from "./useInvoiceDataForm";
import "./InvoiceDataForm.styles.css";

interface IInvoiceDataForm {
  onClose: () => void;
  onSuccess: () => void;
  isEditing: boolean;
  invoiceDataId: string;
}

export default function InvoiceDataForm({
  onSuccess,
  onClose,
  isEditing,
  invoiceDataId,
}: IInvoiceDataForm) {
  const { handleSubmitAddInvoiceDataForm, handleSubmitEditInvoiceDataForm } =
    useInvoiceDataForm({ onSuccess, isEditing, invoiceDataId });

  return (
    <form
      className="outer-top-xs"
      role="form"
      onSubmit={
        isEditing
          ? handleSubmitEditInvoiceDataForm
          : handleSubmitAddInvoiceDataForm
      }
    >
      <h3 style={{ marginBottom: "32px" }}>Dodaj nowy adres dostawy</h3>
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
            <label className="info-title" htmlFor="surname">
              Nazwa odbiorcy<span>*</span>
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
            <label className="info-title" htmlFor="nip">
              NIP<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="nip"
              name="nip"
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
            <label className="info-title" htmlFor="street-name">
              Nazw ulicy<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="street-name"
              name="street-name"
              required
            />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="street-number">
              Numer ulicy/domu<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="street-number"
              name="street-number"
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
            <label className="info-title" htmlFor="post-code">
              Kod Pocztowy<span>*</span>
            </label>
            <input
              type="text"
              className="form-control unicase-form-control text-input"
              id="post-code"
              name="post-code"
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
        {isEditing === true ? "ZAPISZ" : "DODAJ"}
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
