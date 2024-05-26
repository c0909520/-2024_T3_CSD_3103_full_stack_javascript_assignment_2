import React from "react";
import "../pages/shop/shop.css";

export const Contact = () => {
  return (
    <>
      <form class="form_form1">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            First name:
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
            Last name:
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
            User Name:
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
            Email Address:
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
            Phone Number:
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
            Contact us:
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
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};
