import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import api from "../api";
import MOCK_PARTICIPANTS_DATA from "../data/MOCK_PARTICIPANTS.json";
import Participants from "../components/Participants";
import Summary from "../components/Summary";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Main = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    api
      .get("https://ca.desknibbles.com/products.json?limit=250")
      .then(function (response) {
        if (response && response.products) {
          const filteredProducts = response.products.filter((product) => {
            return MOCK_PARTICIPANTS_DATA.some((participant) => {
              return (
                participant.purchases.toLowerCase() ===
                product.title.toLowerCase()
              );
            });
          });

          // Add a filter to make sure products are unique since there are items with the same title
          const uniqueFilteredProducts = [
            ...new Map(
              filteredProducts.map((product) => [product.title, product])
            ).values(),
          ];

          // Get only participants that made a purchase to the above products list
          const filteredParticipants = MOCK_PARTICIPANTS_DATA.filter(
            (participant) => {
              return filteredProducts.some((product) => {
                return (
                  participant.purchases.toLowerCase() ===
                  product.title.toLowerCase()
                );
              });
            }
          );

          setProducts(uniqueFilteredProducts);
          setParticipants(filteredParticipants);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Summary participants={participants} products={products} />
        </Grid>
        <Grid item xs={12}>
          <Participants data={participants} products={products} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
