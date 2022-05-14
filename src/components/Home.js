import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Banner from "./Banner";
import RoomCard from "./RoomCard";
import Date from "./DatePicker";

const Home = () => {
  const classes = styles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.dates}>
          <Date />
        </div>
        <Banner />
        <div className={classes.section}>
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </>
  );
};
//Estilos
const styles = makeStyles((theme) => {
  root: {
  }
});

export default Home;
