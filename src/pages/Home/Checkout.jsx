import {
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Button,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "./checkut.scss";
const Checkout = () => {
  const { cart } = useSelector((state) => state.CartReducers);
  console.log(cart);
  const { register, handleSubmit, getValues, watch } = useForm({
    defaultValues: {
      name: "John",
      email: "example@gmail.com",
      phone: "01306910346",
      country: "Bangladesh",
      paymentType: 1,
    },
    mode: onchange,
  });
  const radioGroupValue = watch("paymentType");
  const onSubmit = (data) => {
    console.log(data);
  };

  const dispatch = useDispatch();
  return (
    <div className="container-fluid mx-auto  row row-cols-2 gx-5">
      <div className="col ">
        <table className="checkout_table">
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-center">Size</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total Price</th>
              <th></th>
            </tr>
            <tr>
              <th className="head_border" colSpan={4}></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => {
              return (
                <>
                  <tr>
                    <td>
                      <div className="d-flex  align-items-center">
                        <img
                          width={50}
                          height={50}
                          src={item?.images[0]}
                          alt=""
                        />
                        <p className="text-secondary m-0 fw-bold ms-4">
                          {item?.title}
                        </p>
                      </div>
                    </td>
                    <td className="text-center">{item?.size}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          style={{ width: "30px" }}
                          className="common_input_group"
                        >
                          <input
                            onClick={() => {
                              dispatch({
                                type: "DECREMENT_QTY",
                                payload: i,
                              });
                            }}
                            type="button"
                            value="-"
                          />
                        </div>
                        <div
                          style={{ width: "80px" }}
                          className="common_input_group"
                        >
                          <input
                            onChange={(e) => {
                              dispatch({
                                type: "MODIFY_QUANTITY_BY_INPUT",
                                payload: {
                                  id: item?.id,
                                  obj: e.target.value,
                                },
                              });
                            }}
                            type="text"
                            value={item?.orderQuantity}
                          />
                        </div>
                        <div
                          style={{ width: "30px" }}
                          className="common_input_group"
                        >
                          <input
                            onClick={() => {
                              dispatch({
                                type: "INCREMENT_QTY",
                                payload: i,
                              });
                            }}
                            type="button"
                            value="+"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      {" "}
                      <p>
                        <strong>
                          ${item?.currentPrice * item?.orderQuantity}
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}></td>
                  </tr>
                </>
              );
            })}

            <tr
              style={{
                position: "sticky",
                bottom:0,
                background:""
              }}
            >
              <td></td>
              <td className="text-center">
                <strong>Total</strong>
              </td>
              <td className="text-center">
                <strong>
                  {cart.reduce((a, b) => a + +b?.orderQuantity, 0)}
                </strong>
              </td>
              <td className="text-center">
                <strong>
                  $
                  {cart.reduce(
                    (a, b) => a + +b?.currentPrice * +b?.orderQuantity,
                    0
                  )}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col ">
        <form onSubmit={handleSubmit(onSubmit)} className="row">
          <div className="common_input_group col-md-12">
            <input
              {...register("name")}
              type="text"
              placeholder="Your full name"
            />
          </div>
          <div className="common_input_group col-md-8">
            <input
              {...register("email")}
              type="text"
              placeholder="Your email"
            />
          </div>
          <div className="common_input_group col-md-4">
            <input {...register("phone")} type="text" placeholder="Phone No." />
          </div>
          <div className="common_input_group col-md-12">
            <input {...register("country")} type="text" placeholder="Country" />
          </div>
          <div className="common_input_group col-md-6">
            <input {...register("state")} type="text" placeholder="State" />
          </div>
          <div className="common_input_group col-md-6">
            <input {...register("city")} type="text" placeholder="City" />
          </div>
          <div className="common_input_group col-md-12">
            <input {...register("address")} type="text" placeholder="Address" />
          </div>
          <div className="common_input_group col-md-12">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="myRadioGroup"
                value={radioGroupValue}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Cash On Delivery (COD)"
                  {...register("paymentType")}
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Bank Transfer"
                  {...register("paymentType")}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="common_input_group col-md-12">
            <textarea rows={"10"} type="text" placeholder="Address" />
          </div>
          <div className="common_input_group col-md-12">
            <Button
              type="submit"
              className="purchase_button"
              sx={{ marginLeft: "auto", display: "block" }}
              variant="contained"
            >
              Purchase Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
