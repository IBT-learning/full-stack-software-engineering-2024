import { NavLink } from "react-router-dom"

function PaymentDetails() {
  return (
    <>
      <div className="payment-intro">
        <p>
          I'm thrilled that you're considering joining our exclusive space! It's
          a decision that will undoubtedly open doors to incredible resources
          and opportunities for your 4C hair journey. From personalized coaching
          to expert advice, you'll find everything you need to help your crown
          flourish—and we can't wait to have you on board!
        </p>
        <p></p>
        <h4>Choose a payment plan...</h4>
      </div>
      <div className="payment-option">
        <span>
          <button className="submit-monthly">
            Pay Monthly
            <p>$ 10.00</p>
          </button>
        </span>
        <span>
          <button className="submit-annually">
            Pay Annually
            <p>$ 100.00</p>
          </button>
        </span>
      </div>
      {/* TODO: Use conditional rendering such that checkout cannot
      be selected unless someone chooses a plan, so it will apply
      the hover effect when someone chooses a plan */}
      <div className="pay">
        <NavLink to="checkout">
          <button className="payment">CHECKOUT</button>
        </NavLink>
      </div>
    </>
  )
}

export default PaymentDetails
