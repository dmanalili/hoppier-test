import React, { useEffect, useState } from "react";
import axios from "axios";
import MOCK_PARTICIPANTS_DATA from "../data/MOCK_PARTICIPANTS.json";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://ca.desknibbles.com/products.json?limit=250")
      .then(function (response) {
        // handle success
        setProducts(response.data.products);
        console.log(products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    setParticipants([
      ...new Set(MOCK_PARTICIPANTS_DATA.map((p) => p.purchases)),
    ]);
  }, []);

  return (
    <div>
      <h1>Participants' purchases</h1>
      {participants.map((p) => (
        <div>{p}</div>
      ))}

      <h1>Products</h1>
      {products.length &&
        [...new Set(products.map((p) => p.product_type))].map((p) => (
          <div>{p}</div>
        ))}

      <h1>Test</h1>
      {products.length &&
        [...new Set(products.map((p) => p.tags.join("|")))].map((p) => (
          <div>{p}</div>
        ))}

      <h1>Title</h1>
      {products.length &&
        [...new Set(products.map((p) => p.title))].map((p) => <div>{p}</div>)}

      <h1>Title</h1>
      {products.length &&
        [...new Set(products.map((p) => p.vendor))].map((p) => <div>{p}</div>)}
    </div>
  );
};

export default Main;
