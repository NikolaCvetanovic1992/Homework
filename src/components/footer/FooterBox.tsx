import { makeStyles } from "@mui/styles";
import style from "./FooterBox.styles";

const useStyles = makeStyles(style);

const FooterBox = () => {
  const classes = useStyles();

  return <div className={classes.container}></div>;
};
export default FooterBox;
