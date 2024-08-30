import React from "react";
import Layout from "../../components/Layout/Layout";
import Carousel from "@/components/Carousel/Carousel";
import "./basket.styles.css";
import TrashSvg from "@/components/Icons/TrashSvg";

export default function Checkout() {
  return (
    <Layout>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Basket</li>
            </ul>
          </div>
          {/*<!-- /.breadcrumb-inner -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.breadcrumb -->*/}

      <div className="body-content">
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
                <div className="basket__progress-bar-step-number">2</div>
                <p className="basket__progress-bar-title">Dostawa i platnosc</p>
              </div>
              <div className="basket__progress-bar-step-bar" />
            </div>

            <div className="basket__progress-bar-step-col">
              <div className="basket__progress-bar-description">
                <div className="basket__progress-bar-step-number">3</div>
                <p className="basket__progress-bar-title">Gotowe</p>
              </div>
              <div className="basket__progress-bar-step-bar" />
            </div>
          </div>
          <div className="basket__container">
            <div className="basket__progress-container">
              <div className="basket__basket-provider">
                <div className="basket__delivery-from">
                  <span>Przesylka od:</span>
                  <span>IKONKA</span>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket-footer">
                  <button>DOBIERZ PRODUKTY OD IKONKA</button>
                  <div className="basket__product-in-basket-footer-delivery-cost">
                    <span>dostawa od:</span>
                    <span>9,88 zl</span>
                  </div>
                </div>
              </div>
              <div className="basket__basket-provider">
                <div className="basket__delivery-from">
                  <span>Przesylka od:</span>
                  <span>IKONKA</span>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket-footer">
                  <button>DOBIERZ PRODUKTY OD IKONKA</button>
                  <div className="basket__product-in-basket-footer-delivery-cost">
                    <span>dostawa od:</span>
                    <span>9,88 zl</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basket__summary-container">
              <div className="basket__summary-products-price">
                <span>Wartosc produktow</span>
                <span>2345,21 zl</span>
              </div>
              <div className="basket__summary-delivery-from">
                <span>Dostawa od</span>
                <span>50,51 zl</span>
              </div>
              <div className="basket__summary-delivery-divider"></div>
              <div className="basket__summary-total-price">
                <span>Razem z dostawa</span>
                <span>5678,32 zl</span>
              </div>
              <button className="basket__summary-confirm-btn">
                PRZEJDZ DO DOSTAWY I PLATNOSCI
              </button>
              <button className="basket__summary-continue-btn">
                KONTYNUUJ ZAKUPY
              </button>
            </div>
          </div>
          <div className="basket__container">
            <div className="basket__progress-container">
              <div className="basket__basket-provider">
                <div className="basket__delivery-from">
                  <span>Przesylka od:</span>
                  <span>IKONKA</span>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket-footer">
                  <button>DOBIERZ PRODUKTY OD IKONKA</button>
                  <div className="basket__product-in-basket-footer-delivery-cost">
                    <span>dostawa od:</span>
                    <span>9,88 zl</span>
                  </div>
                </div>
              </div>
              <div className="basket__basket-provider">
                <div className="basket__delivery-from">
                  <span>Przesylka od:</span>
                  <span>IKONKA</span>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket">
                  <div className="basket__product-in-basket-product-info">
                    <img
                      className="basket__product-in-basket-picture"
                      src="https://picsum.photos/200"
                    />
                    <p className="basket__product-in-basket-title">
                      Narzedzia ogrodowe bla bla bla
                    </p>
                  </div>
                  <div className="basket__product-in-basket-amount-options">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <div className="basket__product-in-basket-price">
                    <span>245,</span>
                    <span>20</span>
                    <span>zl</span>
                  </div>
                  <button className="basket__product-in-basket-delete-button">
                    <TrashSvg />
                  </button>
                </div>
                <div className="basket__product-in-basket-footer">
                  <button>DOBIERZ PRODUKTY OD IKONKA</button>
                  <div className="basket__product-in-basket-footer-delivery-cost">
                    <span>dostawa od:</span>
                    <span>9,88 zl</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="basket__summary-container">
              <div className="basket__summary-products-price">
                <span>Wartosc produktow</span>
                <span>2345,21 zl</span>
              </div>
              <div className="basket__summary-delivery-from">
                <span>Dostawa od</span>
                <span>50,51 zl</span>
              </div>
              <div className="basket__summary-delivery-divider"></div>
              <div className="basket__summary-total-price">
                <span>Razem z dostawa</span>
                <span>5678,32 zl</span>
              </div>
              <button className="basket__summary-confirm-btn">
                PRZEJDZ DO DOSTAWY I PLATNOSCI
              </button>
              <button className="basket__summary-continue-btn">
                KONTYNUUJ ZAKUPY
              </button>
            </div>
          </div>
          {/*<!-- /.logo-slider -->*/}
          {/*<!-- ============================================== BRANDS CAROUSEL : END ============================================== -->*/}{" "}
        </div>
        {/*<!-- /.container -->*/}
      </div>
      {/*<!-- /.body-content -->*/}
    </Layout>
  );
}
