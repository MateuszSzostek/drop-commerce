"use client";

import "./profile.styles.css";
import useBasket from "./useProfile";
import Modal from "../Modal/Modal";
import AccountDataForm from "./Forms/AccountDataForm/AccountDataForm";
import DeliveryAddressForm from "./Forms/DeliveryAddressForm/DeliveryAddressForm";
import InvoiceDataForm from "./Forms/InvoiceDataForm/InvoiceDataForm";
import PasswordForm from "./Forms/PasswordForm/PasswordForm";

export default function Profile() {
  const {
    currentOption,
    handleChangeOption,
    handleOpenEditAccountDataModal,
    handleOpeAddNewDeliveryAddressModal,
    handleOpenAddNewInvoiceDataModal,
    handleOpenChangePassswordModal,
    handleCloseEditAccountDataModal,
    handleCloseAddNewDeliveryAddressModal,
    handleCloseAddNewInvoiceDataModal,
    handleCloseChangePassswordModal,
    isOpenEditAccountData,
    isOpenAddNewAddressModal,
    isOpenAddNewInvoiceDataModal,
    isOpenChangePasswordModal,
    isEditing,
    currentDeliveryAddressId,
    currentInvoiceDataId,
    isOpenRemoveDeliveryAddressModal,
    isOpenRemoveInvoiceDataModal,
    handleOpenRemoveDeliverAddressModal,
    handleOpenRemoveInvoiceDataModal,
    handleCloseRemoveDeliverAddressModal,
    handleCloseRemoveInvoiceDataModal,
    handleRemoveDeliveryAddress,
    handleRemoveInvoiceData,
    allDeliveryAdresses,
    isFetchingAllDeliveryAdresses,
    accountData,
    isFetchingAccountData,
  } = useBasket();

  return (
    <>
      <div className="container">
        <div className="profile__options-row">
          <button
            onClick={() => handleChangeOption("account-info")}
            className={`profile__option-btn ${
              currentOption === "account-info" && "active"
            }`}
          >
            Dane konta
          </button>
          <button
            onClick={() => handleChangeOption("adressess")}
            className={`profile__option-btn ${
              currentOption === "adressess" && "active"
            }`}
          >
            Adresy do wysylki
          </button>
          <button
            onClick={() => handleChangeOption("invoices-data")}
            className={`profile__option-btn ${
              currentOption === "invoices-data" && "active"
            }`}
          >
            Dane do faktury
          </button>
          <button
            onClick={() => handleChangeOption("security")}
            className={`profile__option-btn ${
              currentOption === "security" && "active"
            }`}
          >
            Bezpieczenstwo
          </button>
          <button
            onClick={() => handleChangeOption("orders-history")}
            className={`profile__option-btn ${
              currentOption === "orders-history" && "active"
            }`}
          >
            Historia zakupow
          </button>
        </div>
        <div className="profile__option-content">
          {currentOption === "account-info" && (
            <div className="profile__account-data">
              {!isFetchingAccountData && (
                <div className="profile__option-data-row">
                  <div className="profile__option-data-col">
                    <div className="profile__data-cell">
                      <span className="profile__data-label">
                        IMIE I NAZWISKO
                      </span>
                      <span className="profile__data-content">
                        {accountData?.data?.name} {accountData?.data?.surname}
                      </span>
                    </div>
                    <div className="profile__data-cell">
                      <span className="profile__data-label">
                        TELEFON KOMORKOWY
                      </span>
                      <span className="profile__data-content">
                        {accountData?.data?.phone
                          ? accountData?.data?.phone
                          : "Brak"}
                      </span>
                    </div>
                    <div className="profile__data-cell">
                      <span className="profile__data-label">
                        NAZWA UZYTKOWNIKA
                      </span>
                      <span className="profile__data-content">
                        {accountData?.data?.userName
                          ? accountData?.data?.userName
                          : "Brak"}
                      </span>
                    </div>
                  </div>

                  <div className="profile__option-data-col">
                    <div className="profile__data-cell">
                      <span className="profile__data-label">MIEJSCOWOSC</span>
                      <span className="profile__data-content">
                        {accountData?.data?.place
                          ? accountData?.data?.place
                          : "Brak"}
                      </span>
                    </div>
                    <div className="profile__data-cell">
                      <span className="profile__data-label">ULICA</span>
                      <span className="profile__data-content">
                        {accountData?.data?.streetName
                          ? `ul. ${accountData?.data?.streetName}
                        ${accountData?.data?.streetNumber}`
                          : "Brak"}
                      </span>
                    </div>
                    <div className="profile__data-cell">
                      <span className="profile__data-label">
                        KOD POCZTOWY I POCZTA
                      </span>
                      <span className="profile__data-content">
                        {accountData?.data?.postCode
                          ? `${accountData?.data?.postCode} ${accountData?.data?.post}`
                          : "Brak"}
                      </span>
                    </div>
                    <div className="profile__data-cell">
                      <span className="profile__data-label">GMINA</span>
                      <span className="profile__data-content">
                        {accountData?.data?.commune
                          ? accountData?.data?.commune
                          : "Brak"}
                      </span>
                    </div>

                    <div className="profile__data-cell">
                      <span className="profile__data-label">WOJEWODZTWO</span>
                      <span className="profile__data-content">
                        {accountData?.data?.voivodeship
                          ? accountData?.data?.voivodeship
                          : "Brak"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleOpenEditAccountDataModal}
                style={{ maxWidth: "240px" }}
                className="profile__primary-btn"
              >
                EDYTUJ DANE KONTA
              </button>
            </div>
          )}
          {currentOption === "adressess" && (
            <div className="profile__account-data">
              <div className="profile__option-data-row address">
                <div className="profile__data-cell">
                  <span className="profile__data-label">LISTA ADRESOW</span>
                </div>
              </div>
              <div className="profile__option-data-row ">
                {!isFetchingAllDeliveryAdresses &&
                  allDeliveryAdresses &&
                  "data" in allDeliveryAdresses &&
                  allDeliveryAdresses?.data?.map((el) => (
                    <div className="profile__data-cell address" key={el?.id}>
                      <span className="profile__data-content">{el?.place}</span>
                      <span className="profile__data-content">
                        ul. {el?.streetName} {el?.streetNumber}
                      </span>
                      <span className="profile__data-content">
                        {el?.postCode} {el?.post}
                      </span>
                      <span className="profile__data-content">
                        {el?.voivodeship}
                      </span>
                      <span>
                        <button
                          onClick={() =>
                            handleOpenRemoveDeliverAddressModal(
                              el?.id as string
                            )
                          }
                          className="profile__delete-btn"
                        >
                          USUN
                        </button>
                        <button
                          onClick={() =>
                            handleOpeAddNewDeliveryAddressModal(
                              true,
                              el?.id as string
                            )
                          }
                          className="profile__edit-btn"
                        >
                          EDYTUJ
                        </button>
                      </span>
                    </div>
                  ))}
              </div>

              <button
                onClick={() => handleOpeAddNewDeliveryAddressModal(false, "")}
                style={{ maxWidth: "240px" }}
                className="profile__primary-btn"
              >
                DODAJ NOWY ADRES
              </button>
            </div>
          )}

          {currentOption === "invoices-data" && (
            <div className="profile__account-data">
              <div className="profile__option-data-row address">
                <div className="profile__data-cell">
                  <span className="profile__data-label">
                    LISTA DANYCH DO FAKTOR
                  </span>
                </div>
              </div>
              <div className="profile__option-data-row ">
                <div className="profile__data-cell address">
                  <span className="profile__data-content">Chamsk</span>
                  <span className="profile__data-content">ul. Parkowa 6</span>
                  <span className="profile__data-content">09-300 Zuromin</span>
                  <span className="profile__data-content">Mazowieckie</span>
                  <span>
                    <button className="profile__delete-btn">USUN</button>
                    <button
                      onClick={() => handleOpenAddNewInvoiceDataModal(true, "")}
                      className="profile__edit-btn"
                    >
                      EDYTUJ
                    </button>
                  </span>
                </div>
                <div className="profile__data-cell address">
                  <span className="profile__data-content">Chamsk</span>
                  <span className="profile__data-content">ul. Parkowa 6</span>
                  <span className="profile__data-content">09-300 Zuromin</span>
                  <span className="profile__data-content">Mazowieckie</span>
                  <span>
                    <button className="profile__delete-btn">USUN</button>
                    <button
                      onClick={() => handleOpenAddNewInvoiceDataModal(true, "")}
                      className="profile__edit-btn"
                    >
                      EDYTUJ
                    </button>
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleOpenAddNewInvoiceDataModal(false, null)}
                style={{ maxWidth: "320px" }}
                className="profile__primary-btn"
              >
                DODAJ NOWE DANE DO FAKTURY
              </button>
            </div>
          )}

          {currentOption === "security" && (
            <div className="profile__account-data">
              <div className="profile__option-data-row ">
                <div className="profile__data-cell">
                  <span className="profile__data-label">HASLO</span>
                  <span className="profile__data-content">***</span>
                </div>
              </div>

              <button
                onClick={handleOpenChangePassswordModal}
                style={{ maxWidth: "240px" }}
                className="profile__primary-btn"
              >
                ZMIEN HASLO
              </button>
            </div>
          )}
        </div>
      </div>
      {isOpenEditAccountData && (
        <Modal isOpen={isOpenEditAccountData}>
          <AccountDataForm
            onClose={handleCloseEditAccountDataModal}
            onSuccess={handleCloseEditAccountDataModal}
          />
        </Modal>
      )}
      {isOpenAddNewAddressModal && (
        <Modal isOpen={isOpenAddNewAddressModal}>
          <DeliveryAddressForm
            isEditing={isEditing}
            onClose={handleCloseAddNewDeliveryAddressModal}
            onSuccess={handleCloseAddNewDeliveryAddressModal}
            deliveryAddressId={currentDeliveryAddressId as string}
          />
        </Modal>
      )}
      {isOpenAddNewInvoiceDataModal && (
        <Modal isOpen={isOpenAddNewInvoiceDataModal}>
          <InvoiceDataForm
            isEditing={isEditing}
            onClose={handleCloseAddNewInvoiceDataModal}
            onSuccess={handleCloseAddNewInvoiceDataModal}
            invoiceDataId={currentInvoiceDataId as string}
          />
        </Modal>
      )}
      {isOpenChangePasswordModal && (
        <Modal isOpen={isOpenChangePasswordModal}>
          <PasswordForm
            onClose={handleCloseChangePassswordModal}
            onSuccess={handleCloseChangePassswordModal}
          />
        </Modal>
      )}

      {isOpenRemoveDeliveryAddressModal && (
        <Modal isOpen={isOpenRemoveDeliveryAddressModal}>
          <h2>Czy napewno chcesz usunac ten adres?</h2>
          <button
            className="btn-upper btn btn-primary checkout-page-button"
            onClick={handleRemoveDeliveryAddress}
          >
            Tak, usun
          </button>
          <button
            className="btn-upper btn btn-secondary checkout-page-button"
            onClick={handleCloseRemoveDeliverAddressModal}
          >
            Anuluj
          </button>
        </Modal>
      )}
      {isOpenRemoveInvoiceDataModal && (
        <Modal isOpen={isOpenRemoveInvoiceDataModal}>
          <h2>Czy napewno chcesz usunac te dane faktury?</h2>
          <button
            className="btn-upper btn btn-primary checkout-page-button"
            onClick={handleRemoveInvoiceData}
          >
            Tak, usun
          </button>
          <button
            className="btn-upper btn btn-secondary checkout-page-button"
            onClick={handleCloseRemoveInvoiceDataModal}
          >
            Anuluj
          </button>
        </Modal>
      )}
    </>
  );
}
