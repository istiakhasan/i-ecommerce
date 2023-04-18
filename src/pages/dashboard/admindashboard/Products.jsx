import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductLanding from "./product/ProductLanding";
import CreateProduct from "./product/CreateProduct";
const Products = () => {
  return (
    <div>
      <Tabs defaultActiveKey="product_list" id="justify-tab-example" >
        <Tab className="py-3" eventKey="product_list" title="Products List">
          <ProductLanding />
        </Tab>
        <Tab eventKey="create_product" title="Create Product">
          <CreateProduct />
        </Tab>
      </Tabs>


    </div>
  );
};

export default Products;
