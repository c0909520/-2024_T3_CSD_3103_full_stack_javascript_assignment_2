import { useState } from "react";


const Checkout = (props) => {
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
          <form className="form_form1" method="get" action="/userinfo" >
            <div className="holder_form">
              <div className="col-md-4">
                <label htmlFor="validationDefault01" className="form-label" >
                 {props.info1}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  required
                  name="name"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="validationDefault02" className="form-label">
                  {props.info2}
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
                 {props.info3}
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
               {props.info4}
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
                  {props.info5}
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
                   {props.info6}
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
                 
                {props.info7}
                </button>
                <button style={{marginLeft:"10px"}} className="btn btn-primary" type="button" onClick={clearForm}>
                  {props.info8}
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
