import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import CommonModal from "../../component/CommonModal";
import Header from "./Header";

const Home = () => {
  const { cart } = useSelector((state) => state.CartReducers);
  const [photoGallary, setPhotoGallary] = useState({});
  const [imgUrl, setimgUrl] = useState("");
  const products = [
    {
      id: 1,
      status: "sale",//e
      title: "Black Smart Watches",//name
      currentPrice: 119,//e
      previousPrice: 140,//3
      discount: 25,
      rating: 4,
      size:"SM",
      s_color: "#FE9931",
      quantity: 120,//qty
      images: [
        "https://www.apptus.com/static/images/resources/guides/beauty-ecommerce-10-tips/beauty-ecommerce-products.jpg",
        "https://sellercloud.com/a/2022/09/Beauty-Cosmetics-Face-3.jpg",
        "https://www.smallbizdaily.com/wp-content/uploads/2021/08/shutterstock_1754040101.jpg",
      ],//e
    },
    {
      id: 2,
      status: "sale",
      title: "Black Smart Watches",
      currentPrice: 119,
      previousPrice: 140,
      discount: 25,
      rating: 4,
      quantity: 120,
      size:"SM",
      s_color: "#FE9931",
      images: [
        "https://i0.wp.com/coslaw.eu/wp-content/uploads/2022/10/two-cosmetic-products-white-labels-scaled.jpeg?fit=2560%2C1707&ssl=1",
        "https://media.istockphoto.com/id/1300459022/photo/natural-organic-spa-cosmetic-products-set-with-eucalyptus-leaves-top-view-herbal-skincare.jpg?b=1&s=170667a&w=0&k=20&c=6_z9QmxfFDMvwLdM41BUHswrHLOFkLtIkewZ9aBkFZk=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGeskesMtpx1-hodQKbNT4bAKh_N7HGvgm1dMc_QW7kuoK_rQOPu1ZLb8B7wF0xgT5No&usqp=CAU",
      ],
    },
    {
      id: 3,
      status: "new",
      title: "Black Smart Watches",
      currentPrice: 119,
      previousPrice: 140,
      discount: 25,
      rating: 4,
      size:"SM",
      quantity: 120,
      images: [
        "https://media.allure.com/photos/625c1ef52189e0a73f07aed9/master/pass/april%20hair%20launches.png",
        "https://static-bebeautiful-in.unileverservices.com/5-must-have-hair-styling-products-for-the-party-seasonmobilehome.jpg",
        "https://hips.hearstapps.com/cosmopolitan-uk/15/25/nrm_1434385303-styling-products.jpg",
      ],
    },
    {
      id: 4,
      status: "sale",
      title: "Black Smart Watches",
      currentPrice: 119,
      previousPrice: 140,
      discount: 25,
      rating: 4,
      size:"SM",
      quantity: 120,
      s_color: "#FE9931",
      images: [
        "https://www.oberlo.com/media/1603958036-new-products.jpg",
        "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
        "https://cdn.shopify.com/s/files/1/0070/7032/files/table-runner.png?format=jpg&quality=90&v=1662754723",
      ],
    },
    {
      id: 5,
      status: "sale",
      title: "Black Smart Watches",
      currentPrice: 119,
      previousPrice: 140,
      discount: 25,
      rating: 4,
      size:"SM",
      quantity: 120,
      s_color: "#FE9931",
      images: [
        "https://www.motherearth.co.nz/media/1658/mother-earth-nut-range.png?mode=boxpad&width=768&height=432&format=jpg&bgcolor=white&rnd=132883791670000000",
        "https://cdn11.bigcommerce.com/s-3oxcprqsip/images/stencil/1280x1280/products/50386/60567/5297897__12353.1666313975.png?c=1",
        "https://missvickie.com/wp-content/uploads/2020/10/how-to-salt-unsalted-nuts.jpg",
      ],
    },
    {
      id: 6,
      status: "sale",
      title: "Black Smart Watches",
      currentPrice: 119,
      previousPrice: 140,
      discount: 25,
      rating: 4,
      size:"SM",
      quantity: 120,
      s_color: "#FE9931",
      images: [
        "https://cdna.4imprint.com/qtz/homepage/categories/images21/drinkware0222.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w_ODtH6cbjKEp3epl4atT8j3rFn7GuIrPLMJSLujjCK5ygrR6l6kLnK71cjGJ5h39N8&usqp=CAU",
        "https://cdn3.successories.com/static/images/promotional-products/Promotional-Products-Logo-Drinkware.jpg",
      ],
    },
    {
      id: 7,
      status: "sale",
      title: "Black Smart Watches",
      currentPrice: 119,
      previousPrice: 140,
      discount: 25,
      rating: 4,
      size:"SM",
      quantity: 120,
      s_color: "#FE9931",
      images: [
        "https://pyxis.nymag.com/v1/imgs/c3c/028/f79d167d262322a14d41d62d22d4695d77-redness.rsquare.w700.jpg",
        "https://cdn-www.thefashionspot.com/assets/uploads/gallery/skin-care-products-with-stick-applicators-are-the-easiest-beauty-products-around/elf-cosmetics-pore-toner-balm.jpg",
        "https://edited.beautybay.com/wp-content/uploads/2022/11/ELFC0323F_1.jpg",
      ],
    },
    {
      id: 8,
      status: "sale",
      title: "Black Smart Watches",
      currentPrice: 119,
      previousPrice: 140,
      discount: 25,
      rating: 4,
      size:"SM",
      quantity: 120,
      s_color: "#FE9931",
      images: [
        "https://i.insider.com/5d112143e3ecba0dcc3d3a96",
        "https://pyxis.nymag.com/v1/imgs/720/b04/686cd4a0931c68e59347e3105ba9933cc2-9-glossier.rvertical.w330.jpg",
        "https://cdn.shopify.com/s/files/1/0564/1653/4575/products/gold-lip-gloss-PDP-04-FPO__2_fb0deb14-45d1-4bd0-9362-a811c2aa7b2f_750x.jpg?v=1669131859",
      ],
    },
  ];
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch();
  return (
   <>
   {/* <Navbar /> */}
    <div className="shop_container">
      <CommonModal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      >
        <div
          style={{
            width: "400px",
            height: "300px",
            display: "flex",
            gap: "10px",
            transition: "all 2s ",
          }}
        >
          <img style={{ width: "75%" }} src={imgUrl} alt="" />
          <div
            style={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            {Object.keys(photoGallary).map((v, k) => {
              return (
                <img
                  onClick={() => setimgUrl(photoGallary[v])}
                  style={{ width: "100%", cursor: "pointer", flex: "1" }}
                  src={photoGallary[v]}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </CommonModal>
      <Header />
      <div className="shop_wraper">
        {products.map((product, i) => {
          const { images, title, currentPrice, previousPrice } = product;
          const checkIsExist = cart.some((cv) => cv.id === product.id);
          return (
            <div key={i} className={`product_card ${checkIsExist ?"check_is_exist":""}`}>
              <span
                style={{ background: `${product.s_color}` }}
                className="status"
              >
                {product.status}
              </span>
              <span className="card_icon_wraper">
                <FavoriteBorderIcon
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {...product,orderQuantity:1},
                    })
                  }
                  className="card_icon_hover"
                />
                <ZoomInIcon
                  onClick={() => {
                    setPhotoGallary(product.images);
                    setimgUrl(product.images[0]);
                    openModal();
                  }}
                  className="card_icon_hover"
                />
                <FavoriteBorderIcon className="card_icon_hover" />
                <FavoriteBorderIcon className="card_icon_hover" />
              </span>
              <img className="image" src={images[0]} alt="" />
              <img className="hover_image image" src={images[1]} alt="" />
              <article style={{ margin: "30px 10px" }}>
                <p style={{ marginBottom: "8px" }} className="shop_card_title">
                  {title}
                </p>
                <div style={{ display: "flex", marginBottom: "8px" }}>
                  <p style={{ marginRight: "10px" }} className="shop_price">
                    ${currentPrice}
                  </p>
                  <del className="shop_price prev">${previousPrice}</del>
                </div>
                <p style={{ display: "flex", alignItems: "center" }}>
                  {[...Array(product.rating).keys()].map((item,j) => (
                    <span key={j}>
                      <StarIcon sx={{ color: "goldenrod", fontSize: "16px" }} />{" "}
                    </span>
                  ))}
                  <span>({product.rating})</span>
                </p>
              </article>
            </div>

          );
        })}
      </div>
    </div>
   </>
  );
};

export default Home;
