import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import accounting from "accounting";

const Result = ({ src, title, description, price, stock }) => {
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <div className={classes.left}>
        <img src={src} className={classes.img} alt={title} />
      </div>
      <div className={classes.right}>
        <Typography variante="h6">
          <span className={classes.number}>{title}</span>
        </Typography>
        <Typography variante="body1">{description}</Typography>
        <Typography variante="h6">
          Precion por noche:{"  "}{" "}
          <span className={classes.number}>
            {accounting.formatMoney(price, "$$")}
          </span>
        </Typography>
        <Typography variante="body1">
          Habitaciones disponibles:{" "}
          <span className={classes.number}>{stock}</span>
        </Typography>
      </div>
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "flexStart",
      margin: theme.spacing(2, 5, 5, 5),
    },
  },
  left: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    margin: theme.spacing(2, 5, 5, 5),
  },
  img: {
    maxWidth: "500px",

    height: "auto",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "230px",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(2, 0, 0, 0),
    },
  },
  number: {
    fontWeight: "1000",
    marginLeft: theme.spacing(2),
    fontSize: "1.1rem",
  },
  right: {},
}));

export default Result;
