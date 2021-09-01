import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.grey.main,
  },
  section: {
    padding: `${typography.pxToRem(60)} ${typography.pxToRem(
      20
    )} 0 ${typography.pxToRem(20)}`,
    [breakpoints.up("md")]: {
      padding: `${typography.pxToRem(80)} 0`,
    },
  },
  title: {
    marginBottom: typography.pxToRem(40),
    textAlign: "center",
  },
  dots: {
    margin: `0 ${typography.pxToRem(30)}`,
    paddingTop: typography.pxToRem(40),
    paddingBottom: typography.pxToRem(50),
    position: "unset",
    "& button": {
      borderColor: "#000",
      height: typography.pxToRem(16),
      marginRight: typography.pxToRem(12),
      width: typography.pxToRem(16),
      background: palette.grey.main,
    },
    "& .react-multi-carousel-dot--active button": {
      borderColor: "#000",
      background: "#000",
    },
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(0),
    },
  },
}));

export default useStyles;