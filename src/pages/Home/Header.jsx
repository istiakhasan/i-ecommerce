import React, { Fragment, useState } from "react";
import CommonIcon from "../../component/CommonIcon"
import DarkVariantExample from "./Carousel";

const Header = () => {
  const [image, setImage] = useState([
    "https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg",
    "https://st2.depositphotos.com/1158045/10108/i/450/depositphotos_101089268-stock-photo-woman-holding-shopping-bags.jpg",
  ]);
  const [url, setUrl] = useState(image[0]);

  const Categories = [
    {
      id: 1,
      title: "Television",
      icon: "television",
    },
    {
      id: 1,
      title: "Mobile",
      icon: "mobile",
    },
    {
      id: 1,
      title: "Headphone",
      icon: "headphone",
    },
    {
      id: 1,
      title: "Watches",
      icon: "watches",
    },
    {
      id: 1,
      title: "Game",
      icon: "game",
    },
    {
      id: 1,
      title: "Camera",
      icon: "camera",
    },
    {
      id: 1,
      title: "Audio",
      icon: "audio",
    },
    {
      id: 1,
      title: "Mobile & Tablet",
      icon: "mobileandtablet",
    },
    {
      id: 1,
      title: "Accessories",
      icon: "accessories",
    },
    {
      id: 1,
      title: "Home Audio & Theater",
      icon: "homeaudio",
    },
  ];

  return (
    <div className="header_container">
      <div className="header_filter">
        {Categories.map((item, i) => (
          <Fragment key={i}>
            <div className="category_list_wraper">
              <span className="category_icon">
                <CommonIcon name={item?.icon} />
              </span>
              <span className="category_title">{item?.title}</span>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="slick_slider">
       <DarkVariantExample />
      </div>
    </div>
  );
};

export default Header;
