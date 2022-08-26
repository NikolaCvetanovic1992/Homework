import { createStyles } from "@mui/styles/";

export default createStyles({
  comments: {
    flexWrap: "wrap",
    width: "100%",
    display: "flex",
    margin: "200px 0 0 0",
    justifyContent: "center",
  },

  comment: {
    backgroundColor: "white",
    padding: "10px",
    width: 200,
    margin: 25,
    borderRadius: 10,
    boxShadow: "5px 5px 5px #888888",
  },

  button: {
    marginTop: "300px",
    display: "flex",
    justifyContent: "center",
  },

  commentText: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: 500,
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
});
