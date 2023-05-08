import React, { useState } from "react";

export default function AuctionForm() {
  // const [product_image,setproduct_image]=useState()
  // const [product_name,setproduct_name]=useState()
  // const [product_price,setproduct_price]=useState()
  // const [expiry_time,setexpiry_time]=useState()
  // const [expiry_date,setexpiry_date]=useState()
  // const [category,setcategory]=useState()
  const [formData, setFormData] = useState({
    product_image: "",
    product_name: "",
    product_price: "",
    expiry_time: "",
    expiry_date: "",
    category: "",
  });

  const handleChange = (event) => {
    console.log(formData);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log("handleSubmt");
    console.log(formData);
    event.preventDefault();
    fetch("/createAuction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ marginTop: "70px", fontStyle: "normal" }}>
      <div className="col-sm-9 mb-3 mb-sm-0 ">
        <div
          className="card text-green"
          style={{
            marginLeft: "350px",
            borderRadius: "20px",
            borderColor: "#75d2dd",
            borderWidth: "20px",
          }}
        >
          <div className="card-body">
            <h1 className="card-title ">Create An Auction</h1>
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="nameField">Product Name</label>
                <input
                  type="text"
                  id="nameField"
                  placeholder="Enter here"
                  className="form-control"
                  name="product_name"
                  onChange={handleChange}
                  value={formData.product_name}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="price">Product Price (in INR)</label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter here"
                  className="form-control"
                  name="product_price"
                  onChange={handleChange}
                  value={formData.product_price}
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="expiry_date">Expiry</label>
                <input
                  type="date"
                  id="expiry"
                  placeholder="Enter here"
                  className="form-control"
                  name="expiry_date"
                  onChange={handleChange}
                  value={formData.expiry_date}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="expiry">Expiry</label>
                <input
                  type="time"
                  id="expiry_time"
                  placeholder="Enter here"
                  className="form-control"
                  name="expiry_time"
                  onChange={handleChange}
                  value={formData.expiry_time}
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="category">Product Category</label>
                <select
                  className="form-select"
                  id="category"
                  aria-label="Default select example"
                  name="category"
                  onChange={handleChange}
                  value={formData.category}
                >
                  <option defaultValue>Select Product Category</option>
                  <option value="1">Automobile</option>
                  <option value="2">Electronics</option>
                  <option value="3">Furniture</option>
                </select>
              </div>

              <div className="form-group mt-4">
                <label htmlFor="imgField">Product Image</label>
                <input
                  id="imgField"
                  name="product_image"
                  type="file"
                  className="form-control"
                />
              </div>

              <div className="form-group mt-4 text-center">
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
