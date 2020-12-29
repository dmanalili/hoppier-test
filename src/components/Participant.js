import React, { Fragment } from "react";
import ParticipantDetails from "../components/ParticipantDetails";
import Product from "../components/Product";

const Participant = ({ details, purchases }) => {
  return (
    <Fragment>
      <ParticipantDetails data={details} purchases={purchases} />
      <Product data={purchases} />
    </Fragment>
  );
};

export default Participant;
