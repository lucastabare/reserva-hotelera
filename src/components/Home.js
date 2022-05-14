import { CssBaseline, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Banner from "./Banner";
import RoomCard from "./RoomCard";
import DatePicker from "./DatePicker";
import { useState } from "react";
import mockData from "../mockData";

const Home = () => {
  const classes = styles();
  const [showDate, setShowDate] = useState(false);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <Button onClick={() => setShowDate(!showDate)}>
            {showDate ? "Cerrar" : "Ver Fechas Disponibles"}
          </Button>
        </div>
        {showDate && <DatePicker />}
        <Banner />
        <Grid container className={classes.section} spacing={1}>
          {mockData.map(({ src, title, description }, index) => (
            <Grid item sm="6" md="4" lg="3">
              <RoomCard
                src={src}
                title={title}
                description={description}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
//Estilos
const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      color: "rgba(255,103,31,0.4)",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
    },
  },
  section: {},
}));

export default Home;
