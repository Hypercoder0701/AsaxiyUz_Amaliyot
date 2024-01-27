import { useDebugValue, useEffect, useRef } from "react";
import "./App.css";
import Katalog from "./Katalog";
import Links from "./Links";
import SearchBar from "./SearchBar";

function App() {
  const firstHorizontalSwiperRef = useRef(null);

  useEffect(() => {
    const firstHorizontalSwiperContainer = firstHorizontalSwiperRef.current;
    const params = {
      pagination: true,
      loop: true,

      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            width: 8px;
            height:24px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 100%;
            color: red;
          }

          .swiper-button-prev {
            background-image: url("/box-arrow-in-left.svg");
          }

          .swiper-button-next {
            background-image: url("/box-arrow-in-right.svg");
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            background-color: #008dff;
          }
      `,
      ],
    };

    Object.assign(firstHorizontalSwiperContainer, params);
    firstHorizontalSwiperContainer.initialize();
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <img src="asaxiy-logo.svg" alt="" width={102} />
        <Katalog />
        <SearchBar />
        <Links />
      </div>

      <div className="horizontal-swipers">
        <div className="first-horizontal-swiper">
          <swiper-container ref={firstHorizontalSwiperRef} init="false">
            <swiper-slide>
              <img src="first-hr-sw-img01.webp" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img02.webp" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img03.webp" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img04.webp" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img05.webp" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="first-hr-sw-img06.webp" alt="" />
            </swiper-slide>
          </swiper-container>
        </div>

        <div className="second-horizontal-swiper">
          <span>Hafta chegirmalari</span>
          <swiper-container loop="true" slides-per-view="3" autoplay="true">
            <swiper-slide>
              <img src="second-hr-sw-img01.webp" alt="" />
              <div className="description">
                <span className="product-name">
                  Uolter Ayzekson: Kod Buzar.
                </span>
                <div className="product-price">
                  <span className="price">99900</span> <span>31%</span>
                </div>
                <div className="product-deadline">
                  <span>629000</span>
                  <span>
                    <img src="star.svg" />5
                  </span>
                </div>
                <button>03.02.2024</button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="second-hr-sw-img02.webp" alt="" />
              <div className="description">
                <span className="product-name">
                  Uolter Ayzekson: Kod Buzar.
                </span>
                <div className="product-price">
                  <span className="price">99900</span> <span>31%</span>
                </div>
                <div className="product-deadline">
                  <span>629000</span>
                  <span>
                    <img src="star.svg" />5
                  </span>
                </div>
                <button>03.02.2024</button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="second-hr-sw-img03.webp" alt="" />
              <div className="description">
                <span className="product-name">
                  Uolter Ayzekson: Kod Buzar.
                </span>
                <div className="product-price">
                  <span className="price">99900</span> <span>31%</span>
                </div>
                <div className="product-deadline">
                  <span>629000</span>
                  <span>
                    <img src="star.svg" />5
                  </span>
                </div>
                <button>03.02.2024</button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="second-hr-sw-img04.webp" alt="" />
              <div className="description">
                <span className="product-name">
                  Uolter Ayzekson: Kod Buzar.
                </span>
                <div className="product-price">
                  <span className="price">99900</span> <span>31%</span>
                </div>
                <div className="product-deadline">
                  <span>629000</span>
                  <span>
                    <img src="star.svg" />5
                  </span>
                </div>
                <button>03.02.2024</button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="second-hr-sw-img05.webp" alt="" />
              <div className="description">
                <span className="product-name">
                  Uolter Ayzekson: Kod Buzar.
                </span>
                <div className="product-price">
                  <span className="price">99900</span> <span>31%</span>
                </div>
                <div className="product-deadline">
                  <span>629000</span>
                  <span>
                    <img src="star.svg" />5
                  </span>
                </div>
                <button>03.02.2024</button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="second-hr-sw-img06.webp" alt="" />
              <div className="description">
                <span className="product-name">
                  Uolter Ayzekson: Kod Buzar.
                </span>
                <div className="product-price">
                  <span className="price">99900</span> <span>31%</span>
                </div>
                <div className="product-deadline">
                  <span>629000</span>
                  <span>
                    <img src="star.svg" />5
                  </span>
                </div>
                <button>03.02.2024</button>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  );
}

export default App;
