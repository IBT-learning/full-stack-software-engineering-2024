import { NavLink } from "react-router-dom"

function Membership() {
  return (
    <>
      <div className="membership">
        <p className="stars">🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟</p>
        <p className="stars">
          This section is an exclusive haven for premium members only!{" "}
        </p>
        <p>
          As a member, you'll enjoy access to transformative coaching
          sessions—both live and recorded—designed to teach you everything about
          nurturing your 4C hair. Our team of professionals will be available to
          answer your questions, address your concerns, and tackle any
          challenges you might face along the way.
        </p>
        <p>
          You will also gain the privilege of scheduling personalized one-on-one
          sessions with our expert stylists. Plus, there will be special
          events—both online and in-person—available exclusively to our premium
          members. This is more than just a subscription; it's your gateway to
          embracing the magic of your crown!
        </p>
        <div className="plans">
          <p>Our subscription plans are:</p>
          <h5>$10 monthly</h5>
          <h5>$100 anually - save 17% if you pay anually</h5>
        </div>
        <div className="btn-wrapper">
          <NavLink to="payment">
            <button className="membership-btn">Join our exclusive space</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Membership
