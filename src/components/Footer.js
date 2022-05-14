import { makeStyles, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle" gutterBottom>
        2022 Copyright by @Lucas Tabare Web
      </Typography>
      <Typography variant="subtitle" gutterBottom>
        Privacy . Terms . Sitemap
      </Typography>
    </div>
  );
};

//Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "1px solid #ccc",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: theme.spacing(2),
    backgroundColor: "whitesmoke",
  },
}));
export default Footer;
