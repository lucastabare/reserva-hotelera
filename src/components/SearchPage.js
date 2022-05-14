import { makeStyles } from "@material-ui/styles";
import { Typography, Chip } from "@material-ui/core";
import { chips } from "../mockData";
import { HighlightOffIcon } from "'@mui/material'";

const SearchPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Habitaciones Disponibles
      </Typography>
      <div className={classes.chips}>
        {chips.map((data) => {
          let icon = <HighlightOffIcon />;
          return (
            <Chip
              label={data.label}
              key={data.key}
              icon={icon}
              variant="outlined"
              className={classes.chip}
              // onClick={handleClick}
              // onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default SearchPage;
