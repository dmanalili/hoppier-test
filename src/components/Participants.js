import React from "react";
import Grid from "@material-ui/core/Grid";
import Participant from "./Participant";

const Participants = ({ data, products }) => {
  return (
    <Grid container spacing={6}>
      {data.map((participant) => (
        <Grid key={participant._id} item xs={4}>
          <Participant
            details={participant}
            purchases={products.filter(
              (product) => product.title === participant.purchases
            )}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Participants;
