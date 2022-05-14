import { Typography, Button, makeStyles } from "@material-ui/core";
import imgFondo from "../assets/imgFondo.jpg";
const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant="h2">Planifica tu escapada ...</Typography>
        <Button variant="contained">Consulta nuestras habitaciones</Button>
      </div>
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    position: "relative",
    backgroundImage: `url(${imgFondo})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  info: {
    backgroundColor: "#000",
    color: "#fff",
    width: "350px",
    padding: theme.spacing(2),
    "& h2": {
      marginBottom: theme.spacing(4),
    },
    "& button": {
      backgroundColor: "rgba(255,103,31)",
      color: "#fff",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "#fff",
      color: "rgba(255,103,31)",
    },
  },
}));

export default Banner;
