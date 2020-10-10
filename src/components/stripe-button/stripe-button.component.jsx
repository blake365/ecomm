import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HaoN2DByMDJReQotk9WDRN97b48wWY7z24JKNpv0mpV7CvWO7xEOKmXIYP2SFefi6PL1zGZRTTdBHsMJJpt8e0g00BUEgAhZk";

  const onToken = (token) => {
    console.log(token);
    alert("payment Success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Blake Clothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
