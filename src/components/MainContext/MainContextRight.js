import React, { useState } from "react";

const INIT_Query = {
  name: "",
  email: "",
  contactNo: "",
  message: "",
  date: "",
  noOfPeople: "",
};
function MainContextRight() {
  const [query, setQuery] = useState(INIT_Query);

  const handleChange = (e) => {
    console.log(e.target.value);
    const {name, value} = e.target
    setQuery(prevState => ({...prevState,[name]:value}))
    console.log(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="MainContextRight">
      <div className="priceCard">
        <div className="card text-dark bg-light mb-3">
          <div className="card-header text-center">Offer Price</div>
          <div className="card-body text-center">
            <div className="price">
              <h6>Rs. 4000</h6>
              <h2 className="card-title">Rs. 2999</h2>
            </div>

            <p className="card-text">Valid from 1 Jan till 1 feb 22</p>
          </div>
          <div className="card-footer bg-transparent text-center">
            <button type="button" className="btn btn-success">
              View Itinerary
            </button>
          </div>
        </div>
        {/* <div className="CardLable">
          <span>Popular</span>
        </div>
        <div className="offerLable">
          <span>Offer Price</span>
        </div>
        <div className="priceBox">
          <div className="price">
            <span className="originalPrice">Rs.4000</span>
            <span className="discountPrice">Rs. 2999</span>
          </div>
          <span>Valid till 1 Jan till 1 feb 22</span>
        </div>
        <div className="priceButton">
          <button>View Itinerary</button>
        </div> */}
      </div>
      <div className="FormDiv">
        <form onSubmit={handleSubmit}>
          <div className="FormItem">
            <label>Your Name</label>
            <input type="text" value={query.name} onChange={handleChange} />
          </div>
          <div className="FormItem">
            <label>Email</label>
            <input type="email" value={query.email} onChange={handleChange} />
          </div>
          <div className="FormItem">
            <label>Contact No.</label>
            <input
              type="number"
              value={query.contactNo}
              onChange={handleChange}
            />
          </div>
          <div className="FormItem">
            <label>Message</label>
            <textarea
              rows="4"
              cols="30"
              value={query.message}
              onChange={handleChange}
            />
          </div>
          <div className="FormItem">
            <label>Date of Travel</label>
            <input type="date" value={query.date} onChange={handleChange} />
          </div>
          <div className="FormItem">
            <label>No. of People </label>
            <input
              type="number"
              value={query.noOfPeople}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="FormBtn">
            Submit your query
          </button>
        </form>
      </div>
    </div>
  );
}

export default MainContextRight;
