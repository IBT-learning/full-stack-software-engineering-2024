function CheckOut() {
  return (
    <>
      <div className="payment-info">
        <h4>Please fill out your payment information...</h4>
      </div>
      <div className="card-info">
        <h3>Card Information</h3>
        <span>
          <p>Card Number</p>
          <input
            className="card-details"
            type="text"
            placeholder="type here..."
            required
          />
        </span>
        <span>
          <p>CVV</p>
          <input
            className="card-details"
            type="text"
            placeholder="type here..."
            required
          />
        </span>
        <span>
          <p>Name on Card</p>
          <input
            className="card-details"
            type="text"
            placeholder="type here..."
            required
          />
        </span>
        <span>
          <p>Expiry Date</p>
          <input
            className="card-details"
            type="text"
            placeholder="type here..."
            required
          />
        </span>
        <span>
          <p>Country</p>
          <input
            className="card-details"
            type="text"
            placeholder="type here..."
            required
          />
        </span>
        {/* TODO: Use conditional rendering to ensure the
        unlock premium is selected/ applies the hover effect
         only when all the fields are filled */}
        <div className="submit-payment-wrapper">
          <button className="submit-payment">UNLOCK PREMIUM</button>
        </div>
      </div>
    </>
  )
}

export default CheckOut
