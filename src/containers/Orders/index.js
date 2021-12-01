import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { generatePublicUrl } from "../../urlConfig";

import "./style.css";

/**
 * @author 
 * @function Orders
 **/

const Orders = (props) => {
  const order = useSelector((state) => state.order);
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  return (
    <Layout sidebar>
      <div className="categoryCont" >
        <h3>Orders</h3>
      </div>
      {order.orders.map((orderItem, index) => (
       <div key={index} >
        <Card
          style={{
            margin: "10px 0",
          }}
          key={index}
          headerLeft={index+1}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "50px 50px",
            }}
          >
            <div>
              <div className="title">Items</div>
              {orderItem.items.map((item, index) => (
                <div style={{ display : "flex", justifyContent : "center", alignItems : "center" }} className="value" key={index}>
                  <div style={{margin : "20px"}} >
                      <div style={{ maxWidth : "180px" }} >
                         {item.productId.name}
                      </div>
                      <div style={{ fontSize : "16px", fontWeight : "500" }} >
                        Created By -
                      </div>
                      <div style={{ marginLeft : "15px" }} >
                         {`${item.productId.createdBy.firstName} ${item.productId.createdBy.lastName}`}
                      </div>
                      <div style={{ marginLeft : "15px" }} >
                         {item.productId.createdBy.email}
                      </div>
                  </div>
                  <div style={{margin : "20px"}} >
                     <img style={{ maxWidth : "70px", maxHeight : "120px" }} src={ item.productId.productPictures[0].img.data != undefined ? `data:image/${item.productId.productPictures[0].img.contentType};base64,${item.productId.productPictures[0].img.data.toString('base64')}` : null} />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <span className="title">Total Price</span>
              <br />
              <span className="value">{orderItem.totalAmount}</span>
            </div>

            <div>
              <span className="title">Customer Details</span>
              <br />
              <span className="value">{`${orderItem.user.firstName} ${orderItem.user.lastName}`}</span>
              <br/>
              <span className="value" >{orderItem.user.email}</span>
              <br/>
              <span className="value" >{orderItem.user.contactNumber}</span>
            </div>

            <div style={{maxWidth : "300px"}} >
              <span className="title">Delivery Address</span>
              <br />
              <span className="value"><span style={{fontWeight : "700", fontSize : "12px"}} >Name</span>{` - ${orderItem.UserName && orderItem.UserName}`}</span>
              <br/>
              <span className="value" ><span style={{fontWeight : "700", fontSize : "12px"}} >Address</span>{` - ${orderItem.address && orderItem.address}`}</span>
              <br/>
              <span className="value" ><span style={{fontWeight : "700", fontSize : "12px"}} >City/Town</span>{` - ${orderItem.cityDistricTown && orderItem.cityDistricTown}`}</span>
              <br/>
              <span className="value" ><span style={{fontWeight : "700", fontSize : "12px"}} >State</span>{` - ${orderItem.State && orderItem.State}`}</span>
              <br/>
              <span className="value" ><span style={{fontWeight : "700", fontSize : "12px"}} >Pin</span>{` - ${orderItem.pinCode && orderItem.pinCode}`}</span>
              <br/>
              <span className="value" ><span style={{fontWeight : "700", fontSize : "12px"}} >Phone No.</span>{` - ${orderItem.mobileNumber && orderItem.mobileNumber}`}</span>
              <br/>
              <span className="value" ><span style={{fontWeight : "700", fontSize : "12px"}} >Alt Phone No.</span>{` - ${orderItem.alternatePhone && orderItem.alternatePhone}`}</span>
              <br/>
              <span className="value" ><span style={{fontWeight : "700", fontSize : "12px"}} >Address Type</span>{` - ${orderItem.addressType && orderItem.addressType}`}</span>
            </div>

            <div>
              <span className="title">Payment Type</span> <br />
              <span className="value">{orderItem.paymentType}</span>
            </div>
            <div>
              <span className="title">Payment Status</span> <br />
              <span className="value">{orderItem.paymentStatus}</span>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              padding: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="orderTrack">
              {orderItem.orderStatus.map((status, index) => (
                <div
                  className={`orderStatus ${status.isCompleted ? "active" : ""}`}
                  key={index}
                >
                  <div
                    className={`point ${status.isCompleted ? "active" : ""}`}
                  ></div>
                  <div className="orderInfo">
                    <div className="status">{status.type}</div>
                    <div style={{ width : "70px" }} >{formatDate(status.date)}</div>
                  </div>
                </div>
              ))}
            </div> 

            {/* select input to apply order action */}
            <div
              style={{
                padding: "0 50px",
                boxSizing: "border-box",
              }}
            >
              <select onChange={(e) => setType(e.target.value)}>
                <option value={""}>select status</option>
                {orderItem.orderStatus.map((status) => {
                  return (
                    <>
                      {!status.isCompleted ? (
                        <option key={status.type} value={status.type}>
                          {status.type}
                        </option>
                      ) : null}
                    </>
                  );
                })}
              </select>
            </div>
            {/* button to confirm action */}

            <div
              style={{
                padding: "0 50px",
                boxSizing: "border-box",
              }}
            >
              <button onClick={() => onOrderUpdate(orderItem._id)}>
                confirm
              </button>
            </div>
          </div>
        </Card>
      </div>
      ))}
    </Layout>
  );
};

export default Orders;