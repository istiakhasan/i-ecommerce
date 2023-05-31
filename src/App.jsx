import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { instance } from "./Axios/Axios";
import MainLayout from "./mainlayout/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Checkout from "./pages/Home/Checkout";
import Shop from "./pages/Shop/Shop";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLanding from "./pages/dashboard/DashboardLanding";
import Products from "./pages/dashboard/admindashboard/Products";
import AllProducts from "./pages/products/AllProducts";

function App() {
  const [treeArray, setArray] = useState([
    {
      id: 1,
      child: [
        {
          id: 2,
          child: [
            {
              id: 3,
              child: [
                {
                  id: 4,
                  child: [
                    {
                      id: 7,
                      child: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          child: [],
        },
      ],
    },
  ]);
  const insertNode = (key, arr, obj) => {
    const _data = [...arr];
    for (let i = 0; i < _data.length; i++) {
      if (_data[i].id === key) {
        _data[i].child.push(obj);
      }
      if (_data[i].child.length) {
        insertNode(key, _data[i].child, obj);
      }
    }
    setArray(_data);
  };
  const handleLoop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].child.length) {
        console.log(arr[i]);
        handleLoop(arr[i].child);
      }
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "product",
          element: <Shop />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "/all/products",
          element: <AllProducts />,
        },
        {
          path: "*",
          element: <h1>404 not found</h1>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          element: <DashboardLanding />,
          index: true,
        },
        {
          element: <Products />,
          path: "products",
        },
      ],
    },
  ]);
  return (
    <div>
      {/* <ParentNode node={treeArray} treeArray={treeArray} insertNode={insertNode} setArray={setArray}/> */}

      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
export default App;
const ParentNode = ({ node, insertNode, treeArray, setArray }) => {
  const [click, setIsClick] = useState(false);
  var val = Math.floor(1000 + Math.random() * 9000);
  return (
    <>
      {node.map((item) => (
        <>
          <span
            style={{
              border: "1px solid black",
              width: "fit-content",
              padding: "4px 12px",
            }}
            onClick={() => setIsClick(true)}
          >
            item number = {item?.id}{" "}
          </span>
          <button
            onClick={() => {
              insertNode(item?.id, treeArray, { id: val, child: [] }, setArray);
            }}
          >
            Add Child
          </button>{" "}
          <br />
          <br />
          {item?.child && click && (
            <p style={{ marginLeft: "10px" }}>
              <ParentNode
                node={item?.child}
                treeArray={treeArray}
                insertNode={insertNode}
                setArray={setArray}
              />
            </p>
          )}
        </>
      ))}
    </>
  );
};
