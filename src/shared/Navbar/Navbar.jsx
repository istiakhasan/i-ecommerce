import React, { Fragment, useEffect, useState } from "react";
import MenuIcon from "../../assets/menu-two.png";
import MenuIconThree from "../../assets/menu-threee.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import "./navbar.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import AccountMenu from "../../component/CommonMenu";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { cart } = useSelector((state) => state.CartReducers);
  const location=useLocation()
  const pathLink = location.pathname;
  useEffect(() => {
    setActiveLink(pathLink);
  }, [pathLink]);
  const menuLink = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Products",
      path: "/all/products",
    },
    // {
    //   id: 3,
    //   title: "Shop",
    //   path: "/shop",
    // },
    // {
    //   id: 3,
    //   title: "Checkout",
    //   path: "/checkout",
    // },
    {
      id: 4,
      title: "Blog",
      path:"/blog"
    },
    {
      id: 5,
      title: "Faq",
      path:"/faq"
    },
    {
      id: 6,
      title: "Contact",
      path:"/contact"
    },
    {
      id: 6,
      title: "Dashboard",
      path:"/dashboard"
    },
  ];

  return (
    <nav>
      <div className={`side_bar ${toggleSidebar ? "show" : "hide"}`}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setToggleSidebar(false)}
          className="close_btn"
        >
          <ArrowBackIosIcon sx={{ margin: "0 4px" }} />
        </div>
      </div>
      <a className="logo">
        <span>IIT</span>
        <img
          onClick={() => setToggleSidebar(true)}
          src={MenuIconThree}
          alt=""
        />
      </a>
      <ul className="nav_wraper">
        {menuLink.map((item, i) => (
          <Fragment key={i}>
            <li>
              <Link
                to={item?.path}
                onClick={() => setActiveLink(item?.path)}
                className={item?.path === activeLink ? "active" : null}
              >
                {item.title}
              </Link>
            </li>
          </Fragment>
        ))}
      </ul>
      <ul className="icon_wraper_group">
        <Badge color="error" badgeContent={110}>
          <PersonIcon fontSize="medium" sx={{ color: "#fff" }} />
        </Badge>
        <Badge color="error" badgeContent={110}>
          <FavoriteBorderIcon fontSize="medium" sx={{ color: "#fff" }} />
        </Badge>
        <Badge color="error" badgeContent={cart.length || 0}>
          <AccountMenu>
            <ShoppingCartCheckoutIcon
              fontSize="medium"
              sx={{ color: "#fff" }}
            />
          </AccountMenu>
        </Badge>
      </ul>
    </nav>
  );
};

export default Navbar;
