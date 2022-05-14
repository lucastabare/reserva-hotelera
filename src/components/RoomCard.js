import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const RoomCard = ({ src, title, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <figure className={classes.imgWrapper}>
        <img className={classes.img} src={src} alt={title} />
      </figure>
      <Typography variant="h5" colo="textPrimary">
        {title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {description}
      </Typography>
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down("xs")]: {
      "& h6": {
        wordWrap: "break-word",
      },
    },
  },
  imgWrapper: {
    overflow: "hidden",
    margin: theme.spacing(4, 0, 2, 0),
    display: "flex",
    justifyContent: "center",
  },
  img: {
    height: "400px",
    width: "600px",
    objectFit: "cover",
    transform: "scale(1.1)",
    WebkitTransform: "scale(1.1)",
    transition: ".4s ease-in-out",
    WebkitTransition: ".4s ease-in-out",
    "&:hover": {
      transform: "scale(1)",
      WebkitTransform: "scale(1)",
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      width: "300px",
    },
  },
}));

export default RoomCard;
