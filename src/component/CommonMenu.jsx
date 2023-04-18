import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function AccountMenu({ children, test }) {
  const { cart } = useSelector((state) => state.CartReducers);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const navigate=useNavigate()
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{}}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {children}
        </IconButton>
      </Box>
      {cart.length > 0 && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          //   onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="cart_product_wraper">
            {cart?.length > 0 &&
              cart.map((v, i) => {
                // console.log(rest,"rest");
                return (
                  <>
                    <div className="cart_product">
                      <img src={v.images[0]} alt="" />
                      <p>{v.title}</p>
                      <p>${v.currentPrice}</p>
                      <p
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_TO_CART",
                            payload: i,
                          })
                        }
                      >
                        <DeleteIcon sx={{ cursor: "pointer" }} color="error" />
                      </p>
                    </div>
                    <Divider sx={{marginBottom:"14px"}} />
                  </>
                );
            })}
            <Button onClick={()=>navigate("/checkout")} className="purchase_button" sx={{marginLeft:"auto",display:"block"}} variant="contained">Purchase Now</Button>
          </div>
        </Menu>
      )}
    </>
  );
}
