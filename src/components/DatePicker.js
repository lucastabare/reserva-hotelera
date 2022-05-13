import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const DatePicker = () => {
  const classes = useStyles();
  const handleSelect = () => {};

  return (
    <div className={classes.root}>
      <DateRange ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "13vh",
    left: "30vw",
    [theme.breakpoints.down("sm")]: {
      top: " 16vh",
      left: "10vw",
    },
  },
}));
export default DatePicker;
