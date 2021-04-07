import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  details: {
    display: "flex",
    fledDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    "& imgWrapper": {
      float: "left",
    },
    "& abilitesWrapper": {
      paddingBottom: 5,
    },
  },
});

export default useStyles;
