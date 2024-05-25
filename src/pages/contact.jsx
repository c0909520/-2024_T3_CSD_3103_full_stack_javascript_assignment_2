import React from "react";

export const Contact = () => {
 
  return (
    <>
      <div style={{ padding: "20px" }}>
        <form class="">
          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Textarea
            </label>
            <textarea
              class="form-control"
              id="validationTextarea"
              placeholder="Enter your message"
              required
            ></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">
                First name
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
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );

 
};
