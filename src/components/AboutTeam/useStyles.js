import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.background.paper,
    padding: `${typography.pxToRem(40)} 0`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  cardRoot: {
    boxShadow: "none",
    backgroundColor: "unset",
    padding: `0 ${typography.pxToRem(20)}`,
    [breakpoints.up("md")]: {
      marginRight: typography.pxToRem(16),
      padding: 0,
    },
  },
  cardMedia: {
    height: typography.pxToRem(278),
    width: typography.pxToRem(278),
    position: "relative",
  },
  title: {
    textAlign: "center",
    paddingBottom: typography.pxToRem(40),
    [breakpoints.only("md")]: {
      paddingBottom: typography.pxToRem(80),
    },
  },
  section: {
    paddingBottom: typography.pxToRem(40),
    [breakpoints.only("md")]: {
      paddingBottom: typography.pxToRem(80),
    },
  },
  container: {
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  dots: {
    margin: `0 ${typography.pxToRem(30)}`,
    paddingTop: `${typography.pxToRem(40)}`,
    position: "unset",
    "& button": {
      borderColor: "#000",
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
      background: palette.background.paper,
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#000",
      background: "#000",
    },
  },
}));

export default useStyles;
