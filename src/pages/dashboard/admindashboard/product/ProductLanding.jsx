import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const ProductLanding = () => {
  const [products, setProducts] = useState([]);
  const loadAllProduct = async () => {
    const res = await fetch("http://localhost:5000/api/v1/product");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    loadAllProduct();
  }, []);
  return (
    <div style={{ height: "700px", overflow: "scroll", overflowX: "hidden" }}>
      <div className="common_table ">
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>Image</th>
              <th>Name</th>
              <th className="text-center">Size</th>
              <th className="text-center">Stock</th>
              <th className="text-center">UOM</th>
              <th>Description</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item) => (
              <tr>
                {console.log(item, "item")}
                <td style={{ width: "50px" }}>
                  <input type="checkbox" />
                </td>
                <td>
                  <figure
                    className="d-flex align-items-center m-0"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <img
                      className="w-100 h-100 "
                      style={{ objectFit: "cover" }}
                      src={`data:image/png;base64,${item?.image?.img}`}
                      alt=""
                    />
                  </figure>
                </td>
                <td style={{ maxWidth: "150px" }}>{item?.name}</td>
                <td className="text-center">sm/md/lg /xl/xxl/2xl</td>
                <td className="text-center">
                  <strong>{item?.qty}</strong>
                </td>
                <td className="text-center">PCS</td>
                <td style={{ maxWidth: "180px" }}>
                  {" "}
                  Natural organic botany and scientific glassware, Alternative
                  herb medicine, Natural skin care beauty products
                </td>
                <td className="text-end">
                  <Button color="error" size="small" variant="contained">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductLanding;
