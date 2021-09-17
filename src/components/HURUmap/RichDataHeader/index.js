import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SvgIcon,
} from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

import { ReactComponent as Pin } from "@/pesayetu/assets/icons/pin.svg";
import { ReactComponent as Print } from "@/pesayetu/assets/icons/print.svg";

const RichDataHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Typography variant="h3" className={classes.title}>
          Isiolo
        </Typography>
        <SvgIcon component={Print} className={classes.svgIcon} />
      </Grid>
      <Typography variant="subtitle2" className={classes.description}>
        A COUNTY IN KENYA
      </Typography>
      <hr className={classes.underline} />
      <Grid container>
        <Button variant="contained" className={classes.button}>
          <SvgIcon component={Pin} className={classes.svgIconButton} />
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="temp-id" className={classes.inputLabel}>
            <Typography variant="caption" className={classes.label}>
              PIN AND COMPARE
            </Typography>
          </InputLabel>
          <Select
            labelId="temp-id"
            id="simple-select"
            className={classes.select}
            value={2}
          >
            <MenuItem value={2} className={classes.currentItem}>
              <Typography variant="caption" className={classes.placeholder}>
                Select location
              </Typography>
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <hr className={classes.underline} />
    </div>
  );
};

export default RichDataHeader;
