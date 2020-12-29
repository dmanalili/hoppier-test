import React from "react";
import Typography from "@material-ui/core/Typography";

const Summary = ({ participants, products }) => {
  let productPriceMap = {};
  products.forEach((p) => {
    productPriceMap = {
      ...productPriceMap,
      [p.title]: p.variants
        .map((v) => Number(v.price))
        .reduce(function (acc, value) {
          return Number(acc) + Number(value);
        }, 0),
    };
  });

  const totalPurchase = participants
    .map((p) => productPriceMap[p.purchases])
    .reduce(function (acc, value) {
      return Number(acc) + Number(value);
    }, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h5" color="primary">
        Total Purchase: {totalPurchase.toFixed(2)}
      </Typography>
    </div>
  );
};

export default Summary;
