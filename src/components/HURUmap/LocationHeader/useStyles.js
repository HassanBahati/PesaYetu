import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  title: {
    borderBottom: "solid 5px #0067A3",
  },
  description: {
    marginTop: typography.pxToRem(20),
    textTransform: "uppercase",
  },
  icon: {
    position: "relative",
    height: typography.pxToRem(20),
    width: typography.pxToRem(20),
  },
  underline: {
    border: `solid 1px ${palette.divider}`,
  },
  button: {
    borderRadius: "50%",
    backgroundColor: palette.grey.light,
    width: typography.pxToRem(44),
    height: typography.pxToRem(44),
    minWidth: typography.pxToRem(44),
    boxShadow: "none",
  },
  svgIcon: {
    "&.MuiSvgIcon-root": {
      width: typography.pxToRem(44),
      height: typography.pxToRem(44),
      backgroundColor: palette.grey.light,
      borderRadius: "50%",
      padding: typography.pxToRem(11),
    },
  },
}));

export default useStyles;
