import { Button } from "@mui/material";
import React from "react";

const ProductLanding = () => {
  return (
    <div>
      <div className="common_table">
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>Product</th>
              <th>Name</th>
              <th className="text-center">Size</th>
              <th className="text-center">Stock</th>
              <th className="text-center">UOM</th>
              <th>Description</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10).keys()].map((item) => (
              <tr>
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
                      src="https://cdna.4imprint.com/qtz/homepage/categories/images21/drinkware0222.jpg"
                      alt=""
                    />
                  </figure>
                </td>
                <td style={{ maxWidth: "150px" }}>
                  Natural organic botany and scientific glassware, Alternative
                  herb medicine, Natural skin care beauty products
                </td>
                <td className="text-center">sm/md/lg /xl/xxl/2xl</td>
                <td className="text-center">
                  <strong>1850</strong>
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
