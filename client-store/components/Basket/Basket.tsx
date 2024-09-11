"use client";

import { prepareStringPrice } from "@/utils";
import TrashSvg from "../Icons/TrashSvg";
import "./basket.styles.css";
import useBasket from "./useBasket";

export default function Basket() {
  const {
    basketData,
    totalGrossPrice,
    currentStep,
    handleContinueToDeliveryAndPayment,
    handleContinueShoping,
    handleGoBackToYourBasket,
  } = useBasket();

  return (
    <div className="container">
      <div className="basket__progress-bar-container">
        <div className="basket__progress-bar-step-col">
          <div className="basket__progress-bar-description">
            <div className="basket__progress-bar-step-number active">1</div>
            <p className="basket__progress-bar-title">Twoj Koszyk</p>
          </div>
          <div className="basket__progress-bar-step-bar active" />
        </div>

        <div className="basket__progress-bar-step-col">
          <div className="basket__progress-bar-description">
            <div
              className={`basket__progress-bar-step-number ${
                (currentStep === "delivery-and-payment" ||
                  currentStep === "end") &&
                "active"
              }`}
            >
              2
            </div>
            <p className="basket__progress-bar-title">Dostawa i platnosc</p>
          </div>
          <div
            className={`basket__progress-bar-step-bar ${
              (currentStep === "delivery-and-payment" ||
                currentStep === "end") &&
              "active"
            }`}
          />
        </div>

        <div className="basket__progress-bar-step-col">
          <div className="basket__progress-bar-description">
            <div className="basket__progress-bar-step-number">3</div>
            <p className="basket__progress-bar-title">Gotowe</p>
          </div>
          <div className="basket__progress-bar-step-bar" />
        </div>
      </div>
      {currentStep === "your-basket" && (
        <div className="basket__container">
          <div className="basket__progress-container">
            {basketData?.providers?.map((provider) => (
              <div className="basket__basket-provider">
                <div className="basket__delivery-from">
                  <span>Przesylka od:</span>
                  <span>{provider?.provider}</span>
                </div>
                {provider?.items?.map((item) => (
                  <div className="basket__product-in-basket">
                    <div className="basket__product-in-basket-product-info">
                      <img
                        className="basket__product-in-basket-picture"
                        src={item?.picture}
                      />
                      <p className="basket__product-in-basket-title">
                        {item?.productName} x {item?.quantity}
                      </p>
                    </div>
                    <div className="basket__product-in-basket-amount-options">
                      <button>-</button>
                      <span>{item?.quantity}</span>
                      <button>+</button>
                    </div>
                    <div className="basket__product-in-basket-price">
                      <span>{item?.totalPriceInt},</span>
                      <span>{item?.totalPriceDecimal}</span>
                      <span>zl</span>
                    </div>
                    <button className="basket__product-in-basket-delete-button">
                      <TrashSvg />
                    </button>
                  </div>
                ))}

                <div className="basket__product-in-basket-footer">
                  <button>DOBIERZ PRODUKTY OD IKONKA</button>
                  <div className="basket__product-in-basket-footer-delivery-cost">
                    <span>dostawa od:</span>
                    <span>{provider?.deliveryCost} zl</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basket__summary-container">
            <div className="basket__summary-products-price">
              <span>Wartosc produktow</span>
              <span>{totalGrossPrice}</span>
            </div>
            <div className="basket__summary-delivery-from">
              <span>Dostawa od</span>
              <span>
                {basketData?.providers?.reduce(
                  (acc, cur) => (acc += cur?.deliveryCost),
                  0
                )}
              </span>
            </div>
            <div className="basket__summary-delivery-divider"></div>
            <div className="basket__summary-total-price">
              <span>Razem z dostawa</span>
              <span>
                {(
                  totalGrossPrice +
                  basketData?.providers?.reduce(
                    (acc, cur) => (acc += cur?.deliveryCost),
                    0
                  )
                ).toFixed(2)}
              </span>
            </div>

            <button
              className="basket__summary-confirm-btn"
              onClick={handleContinueToDeliveryAndPayment}
            >
              PRZEJDZ DO DOSTAWY I PLATNOSCI
            </button>
            <button
              className="basket__summary-continue-btn"
              onClick={handleContinueShoping}
            >
              KONTYNUUJ ZAKUPY
            </button>
          </div>
        </div>
      )}
      {currentStep === "delivery-and-payment" && (
        <div className="basket__container">
          <div className="basket__progress-container">
            <div className="basket__basket-provider">
              <div className="basket__delivery-from">
                <span>Dane odbiorcy</span>
              </div>
              <div className="basket__summary-delivery-divider"></div>
              <div style={{ margin: "24px 0px" }}>
                <p>MATEUSZ SZOSTEK</p>
                <p>Jodlowa 1</p>
                <p>13-230 Jamielnik</p>
                <p>+48 535 701 251</p>
              </div>

              <button
                className="basket__summary-confirm-btn"
                onClick={handleContinueToDeliveryAndPayment}
              >
                ZMIEN LUB DODAJ NOWY ADRES
              </button>
            </div>

            {basketData?.providers?.map((provider) => (
              <div className="basket__basket-provider">
                <div className="basket__delivery-from">
                  <span>Przesylka od:</span>
                  <span>{provider?.provider}</span>
                </div>
                {provider?.items?.map((item) => (
                  <div className="basket__product-in-basket">
                    <div className="basket__product-in-basket-product-info">
                      <img
                        className="basket__product-in-basket-picture"
                        src={item?.picture}
                      />
                      <p className="basket__product-in-basket-title">
                        {item?.productName} x {item?.quantity}
                      </p>
                    </div>
                    <div className="basket__product-in-basket-amount-options">
                      <button>-</button>
                      <span>{item?.quantity}</span>
                      <button>+</button>
                    </div>
                    <div className="basket__product-in-basket-price">
                      <span>{item?.totalPriceInt},</span>
                      <span>{item?.totalPriceDecimal}</span>
                      <span>zl</span>
                    </div>
                    <button className="basket__product-in-basket-delete-button">
                      <TrashSvg />
                    </button>
                  </div>
                ))}

                <div className="basket__product-in-basket-footer">
                  <button>DOBIERZ PRODUKTY OD IKONKA</button>
                  <div className="basket__product-in-basket-footer-delivery-cost">
                    <span>dostawa od:</span>
                    <span>{provider?.deliveryCost} zl</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basket__summary-container">
            <div>
              <span className="basket__summary-title">Podsumowanie</span>
            </div>
            <div className="basket__summary-delivery-divider"></div>
            <div className="basket__summary-products-price">
              <span>Wartosc produktow</span>
              <span>{totalGrossPrice}</span>
            </div>
            <div className="basket__summary-delivery-from">
              <span>Dostawa od</span>
              <span>
                {basketData?.providers?.reduce(
                  (acc, cur) => (acc += cur?.deliveryCost),
                  0
                )}
              </span>
            </div>
            <div className="basket__summary-delivery-divider"></div>
            <div className="basket__summary-total-price">
              <span>Razem z dostawa</span>
              <span>
                {(
                  totalGrossPrice +
                  basketData?.providers?.reduce(
                    (acc, cur) => (acc += cur?.deliveryCost),
                    0
                  )
                ).toFixed(2)}
              </span>
            </div>

            <button
              className="basket__summary-confirm-btn"
              onClick={handleContinueToDeliveryAndPayment}
            >
              POTWIERDZ I ZAPLAC
            </button>
            <button
              className="basket__summary-continue-btn"
              onClick={handleGoBackToYourBasket}
            >
              WROC DO KOSZYKA
            </button>
          </div>
        </div>
      )}
      {/*<!-- /.logo-slider -->*/}
      {/*<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->*/}{" "}
    </div>
  );
}
