import { makeStyles } from "@material-ui/styles";
import { Typography, Chip, Slider } from "@material-ui/core";
import mockData, { chips } from "../mockData";
import { useSelector } from "react-redux";
import Result from "./Result";
import { useState } from "react";
import { selectStart } from "../features/startSlice";
import { selectEnd } from "../features/endSlice";

const SearchPage = () => {
  const classes = useStyles();
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);

  const [value, setValue] = useState(22000);
  const handleChange = (e, newValue) => {
    setValue(newValue);
    //console.log(value);
  };

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
          value={value}
          onChange={handleChange}
          aria-label="Temperature"
          min={8000}
          max={22000}
          marks
          valueLabelDisplay="auto"
          color="secondary"
          step={2000}
        />
      </div>
      {mockData
        .filter((data) => data.cat === "room")
        .filter((data) => data.price < value)
        .filter(
          (data) => end < data.notAvailablestart || start > data.notAvailableend
        )
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
