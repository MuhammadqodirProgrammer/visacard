import React from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(
  "pk_test_51NXaxbKG2iFLQa9A0dJjdonRx1D7mN7kNjYxJv1AU146OZLmMuVZTuwCHD5pz9FYlaFqmEVn9X4qbiaYorOZRrJX00H1Mgq4sq"
);
function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

export default Stripe;
