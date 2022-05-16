import { makeStyles } from "@material-ui/styles";
import { Typography, Chip, Slider } from "@material-ui/core";
import mockData, { chips } from "../mockData";
//import { useState } from "react";
import Result from "./Result";

const SearchPage = () => {
  const classes = useStyles();
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  //const value = useState("false");
  const handleChange = () => {};

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Habitaciones Disponibles
      </Typography>
      <div className={classes.chips}>
        {chips.map(({ key, label }) => {
          return (
            <Chip
              label={label}
              key={key}
              variant="outlined"
              className={classes.chip}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className={classes.selector}>
        <Typography gutterBottom>Precios</Typography>
        <Slider
          //value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
          min={8000}
          max={20000}
          valueLabelDisplay="auto"
          color="secondary"
        />
      </div>
      {mockData
        .filter((data) => data.cat === "room")
        .map(({ src, title, description, stock, price }, index) => {
          return (
            <Result
              title={title}
              key={index}
              src={src}
              description={description}
              price={price}
              stock={stock}
            />
          );
        })}
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  root: {},
  chips: {
    padding: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(1),
  },
  selector: {
    width: "300px",
    margin: theme.spacing(3),
  },
}));
export default SearchPage;
