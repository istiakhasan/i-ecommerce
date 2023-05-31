import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { json } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const files = e.target.files
    const formData = new FormData();

    for (const field in data) {
      if (Object.hasOwnProperty.call(data, field)) {
        const element = data[field];
        if (field === "file") {
          formData.append("files", element[0]);
        } else {
          formData.append(field, element);
        }
      }
    }
    fetch("http://localhost:5000/api/v1/product", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Product create successfully.");
          reset();
          console.log(data, "data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-12 row">
          <div className="common_input_group col-md-3">
            <label htmlFor="">Product Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Product"
            />
            {errors.name && (
              <small
                style={{
                  color: "red",
                  fontWeight: "600",
                }}
              >
                This field is required
              </small>
            )}
          </div>

          <div className="common_input_group col-md-3">
            <label htmlFor="">Previous price</label>
            <input
              {...register("previousPrice", { required: true })}
              type="text"
              placeholder="Previous price "
            />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Current price</label>
            <input
              {...register("currentPrice", { required: true })}
              type="text"
              placeholder="Current price "
            />
          </div>

          <div className="common_input_group col-md-3">
            <label htmlFor="">Quantity</label>
            <input
              {...register("qty", { required: true })}
              type="number"
              placeholder="qty"
            />
          </div>
          <div className="common_input_group col-md-3">
            <label htmlFor="">Description</label>
            <textarea
              {...register("description", { required: true })}
              rows={1}
              type="text"
              placeholder="Description"
            />
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
                fontSize: "14px",
                borderRadius: "14px",
              }}
              htmlFor="file_id"
            >
              <CloudUploadIcon sx={{ color: "white" }} />
              Upload
            </label>
            <input
              type="file"
              {...register("file", { required: true })}
              className="d-none"
              id="file_id"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className=" border-0  d-flex align-items-center justify-content-center gap-4"
            type="submit"
            style={{
              background: "#2B9238",
              color: "white",
              borderRadius: "14px",
              fontWeight: "bold",
              fontSize: "14px",
              padding: "5px 80px",
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
