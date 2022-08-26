import { createStyles } from "@mui/styles";
import { colors } from "../../theme";

export default createStyles({
  container: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.white,
    width: "444px",
    maxWidth: 444,
    padding: "24px 24px 16px 24px",
    borderRadius: "8px",
    outline: "none",
    boxShadow:
      "0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",
  },

  modalInner: {
    display: "flex",
    justifyContent: "space-between",
  },

  modalButtons: {},

  modalInnertwo: {
    marginTop: "50px",
    marginLeft: "10px",
    height: 30,
    width: 30,
  },
});
