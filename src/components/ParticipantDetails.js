import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { parseBalance } from "../utils/parsers";
import Label from "./ui/Label";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ParticipantDetails = ({ data, purchases }) => {
  const classes = useStyles();
  const productPrices = purchases.map((p) =>
    p.variants.map((v) => Number(v.price))
  );
  const totalPurchase = productPrices.reduce(function (acc, value) {
    return Number(acc) + Number(value);
  }, 0);
  const parsedBalance = parseBalance(data.balance);
  const balanceLeft = (parsedBalance - totalPurchase).toFixed(2);

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <div>
          <Avatar
            className={classes.large}
            alt={data.name}
            src={`https://ui-avatars.com/api/?rounded=true&name=${data.name}`}
          />
          <Label label="Name" value={data.name} />
        </div>
        <Label
          label="Status"
          value={data.isActive ? "Active" : "Inactive"}
          color={data.isActive ? "textPrimary" : "secondary"}
        />
        <Label label="Email" value={data.email} />
        <Label label="Original Balance" value={parsedBalance} />
        <Label label="Balance Left" value={balanceLeft} />
      </Grid>
    </Grid>
  );
};

export default ParticipantDetails;
