import React, { Fragment, useEffect, useState } from "react";
import "./dashboard.scss";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [menuLink, setMenuLink] = useState([
    {
      id: 1,
      link: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      link: "Category",
    },
    {
      id: 3,
      link: "Products",
      path: "/dashboard/products",
    },
    {
      id: 4,
      link: "Users",
    },
    {
      id: 5,
      link: "Orders",
    },
    {
      id: 5,
      link: "Blog",
    },

    {
      id: 5,
      link: "Review",
    },
    {
      id: 5,
      link: "My Profile",
    },
    {
      id: 5,
      link: "Ad",
    },
    {
      id: 5,
      link: "FAQ",
    },
  ]);
  const [collapesMenu, setCollapesMenu] = useState(true);
  const [activeLink, setActiveLink] = useState(menuLink[0].link);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setCollapesMenu(false);
      } else {
        setCollapesMenu(true);
      }
    });
    if (window.innerWidth < 700) {
      setCollapesMenu(false);

    }
  }, [window.innerWidth]);
  return (
    <div className="dashboard_container">
      <aside
        style={
          collapesMenu?{

            zIndex:"1000",
            height:"100vh",
            left:0,
            width:"300px"

          }:{
            position:"absolute",
            left:"-200%",
            width:0
          }
        }
        // style={collapesMenu ? { width: "0px", padding: "0", opacity: 0 } : {}}
      >
        <figure className="profile_image" style={{ whiteSpace: "nowrap" }}>
          <Link to={"/"}>
            {" "}
            <img
              src="https://hindinow.org/wp-content/uploads/2023/01/Funny-DP-4.jpg"
              alt=""
            />{" "}
          </Link>
        </figure>
        {menuLink?.map((item, i) => (
          <li
            onClick={() => setActiveLink(item?.link)}
            className={activeLink == item.link ? "active" : ""}
          >
            <Link to={item?.path}>
              <span>{item?.link}</span>
            </Link>
          </li>
        ))}

        <li className="logout">
          <a href="#">
            <span>LogOut</span>
          </a>
        </li>
      </aside>
      <main className="me-lg-3">
        <div className="dashboard_nav">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
