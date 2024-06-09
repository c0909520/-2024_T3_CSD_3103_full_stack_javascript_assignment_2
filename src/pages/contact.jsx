import React from "react";
import "../pages/shop/shop.css";

export const Contact = (props) => {
  return (
    <>
    <div className="form_con1">
      <div className="container_form_form">
      <form class="form_form1">
        <div className="holder_form">  
          <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
             {props.form1}
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            {props.form2}
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            {props.form3}
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            {props.form4}
          </label>
          <input
            type="email"
            class="form-control"
            id="validationDefault02"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
           {props.form5}
          </label>
          <input
            type="number"
            class="form-control"
            id="validationDefault02"
            required
          />
        </div>
        <div class="mb-3">
          <label for="validationTextarea" class="form-label">
           {props.form6}
          </label>
          <textarea
            class="form-control area_control"
            id="validationTextarea"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <div class="mb-3">
          <button class="btn btn-primary" type="submit">
           {props.form7}
          </button>
        </div></div>
      
      </form>
      </div>
    </div>
     
    </>
  );
};
