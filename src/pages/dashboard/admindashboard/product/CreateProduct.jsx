import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const CreateProduct = () => {
  return (
    <div>
      <form className="row">
        <div className="col-md-12 row">
          <div className="common_input_group col-md-3">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Product" />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Category</label>
            <input type="text" placeholder="Product category" />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Previous price</label>
            <input type="text" placeholder="Previous price " />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Current price</label>
            <input type="text" placeholder="Current price " />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Ratings</label>
            <input type="text" placeholder="Current price " />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Status</label>
            <input type="text" placeholder="Product status" />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Description</label>
            <textarea rows={1} type="text" placeholder="Description" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="common_input_group">
            <label
              className="px-2 py-2 d-flex align-items-center justify-content-center gap-4"
              style={{
                background: "#2B9238",
                color: "white",
                width: "50%",
                borderRadius: "14px",
                textTransform:"uppercase"
              }}
              htmlFor="file_id"
            >
              <CloudUploadIcon sx={{ color: "white" }} />
              Upload
            </label>
            <input className="d-none" id="file_id" type="file" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
