import { makeStyles } from "@material-ui/core/styles";
import kia from "./assets/kia11.jpg";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(${kia})`,
    height: theme.spacing(100),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    borderRadius: 8,
    display: "flex",
    marginLeft: "10px",
    marginTop: "10px",
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    padding: "30px 35px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));
export default useStyles;
