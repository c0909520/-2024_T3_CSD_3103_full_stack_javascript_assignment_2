import { useState } from "react";

const Checkout = () => {
  const [hover, setHover] = useState(true);

  const handleOnMouseOver = () => {
    setHover(false);
  };
  const handleOnMouseLeave = () => {
    setHover(true);
  };

  const clearForm = () => {
    document.getElementById("validationDefault01").value = "";
    document.getElementById("validationDefault02").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("card").value = "";
  };

  return (
    <>
      <div className="form_con1">
        <div className="container_form_form">
          <form className="form_form1" action="/userinfo" >
            <div className="holder_form">
              <div className="col-md-4">
                <label htmlFor="validationDefault01" className="form-label" >
                  First name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="validationDefault02" className="form-label">
                  Last name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="phone" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="card" className="form-label">
                  Enter Card Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="card"
                  required
                />
              </div>

              <div style={{marginTop:"10px"}} className="mb-3">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
                <button style={{marginLeft:"10px"}} className="btn btn-primary" type="button" onClick={clearForm}>
                  Clear
                </button>
              </div>
            </div>
            <div
              className="img"
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
            >
              {hover ? (
                <img
                  src="https://cdn.pixabay.com/photo/2016/05/31/10/52/contact-us-1426589_1280.png"
                  style={{ width: "100px" }}
                />
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2016/05/31/10/52/call-now-1426588_1280.png"
                  style={{ width: "100px" }}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
