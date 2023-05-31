import { Button } from "@mui/material";
import React, { useState } from "react";

const AllProducts = () => {
  const [userField, setUserField] = useState([
    {
      name: "",
      age: "",
      depertment: "",
      address: "",
    },
  ]);

  console.log(userField);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pro", "kashem");
    formData.append("pro", "kashem");
    formData.append("pro", "kashem");
    formData.append("pro", "kashem");
    console.log(formData.getAll("pro"), "data");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container  mx-auto row py-3">
        <div className="col-md-12 my-3">
          <Button
            onClick={() => {
              setUserField([
                ...userField,
                {
                  name: "",
                  age: "",
                  depertment: "",
                  address: "",
                },
              ]);
            }}
            color="primary"
            size="small"
            variant="contained"
          >
            Add
          </Button>
        </div>

        {userField.map((item, i) => (
          <>
            <div className="common_input_group col-md-3">
              <input
                onChange={(e) => {
                  const _data = [...userField];
                  _data[i].name = e.target.value;
                  setUserField(_data);
                }}
                name="name"
                type="text"
                value={item?.name}
                placeholder="Enter person name"
              />
            </div>
            <div className="common_input_group col-md-3">
              <input name="age" type="text" placeholder="Enter person age" />
            </div>
            <div className="common_input_group col-md-3">
              <input
                name="depertment"
                type="text"
                placeholder="Enter person depertment"
              />
            </div>
            <div className="common_input_group col-md-3">
              <input name="address" type="text" placeholder="Address" />
            </div>
            <div className="common_input_group col-md-3">
              <Button
                onClick={() => {
                  const _data = [...userField];
                  const data = _data.splice(i, 1);
                  console.log(data, "data");
                  setUserField(_data);
                }}
                color="error"
                size="small"
                variant="contained"
              >
                Delete
              </Button>
            </div>
            <div className="col-md-12"></div>
          </>
        ))}

        <div className="col-md-12">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default AllProducts;
