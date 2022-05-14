import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { InputBase, Typography, Button } from "@material-ui/core";
import { People } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const DatePicker = () => {
  const classes = styles();
  const handleSelect = () => {};
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <DateRange ranges={[selectionRange]} onChange={handleSelect} />
      <div className={classes.inputSection}>
        <Typography variant="h5">Numero de visitantes</Typography>
        <div className={classes.people}>
          <InputBase
            placeholder="2"
            inputProps={{ className: classes.input }}
          />
          <People />
        </div>

        <Button onClick={() => navigate("/search")}>Ver Habitaciones</Button>
      </div>
    </div>
  );
};

//Estilos
const styles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    alignItems: "center",
    top: "13vh",
    left: "40vw",
    zIndex: "50",
    [theme.breakpoints.down("sm")]: {
      top: "16vh",
      left: "10vw",
    },
  },
  inputSection: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#86868B",
    "& h5": {
      textAlign: "center",
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    },
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "6vw",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(1),
  },
}));
export default DatePicker;
