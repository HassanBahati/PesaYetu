import { Tab, Divider, Tabs as MuiTabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import TabPanel from "@/pesayetu/components/Tabs/TabPanel";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    borderBottom: `4px solid transparent`,
  },
  indicator: {
    display: "none",
  },
  activeWrapper: {
    borderBottom: `4px solid ${palette.primary.main}`,
    color: palette.primary.main,
  },
  divider: {
    marginTop: typography.pxToRem(-8),
    backgroundColor: "#F0F0F0",
    height: typography.pxToRem(2),
  },
  tabs: {
    textTransform: "none",
    minHeight: typography.pxToRem(23),
  },
  firstTab: {
    textTransform: "uppercase",
    letterSpacing: typography.pxToRem(1.6),
    fontWeight: 600,
    fontSize: typography.pxToRem(16),
    minHeight: typography.pxToRem(23),
    color: "#666666",
    "&:hover": {
      color: palette.primary.main,
    },
    "&$selected": {
      color: palette.primary.main,
      fontWeight: 600,
      fontSize: "16px",
    },
    "&:focus": {
      color: palette.primary.main,
    },
  },
  secondTab: {
    textTransform: "uppercase",
    letterSpacing: typography.pxToRem(1.6),
    fontWeight: 600,
    fontSize: typography.pxToRem(16),
    minHeight: typography.pxToRem(23),
    color: "#666666",
    "&:hover": {
      color: "#666666",
    },
    "&$selected": {
      color: "#666666",
      fontWeight: 600,
      fontSize: typography.pxToRem(16),
    },
    "&:focus": {
      color: "#666666",
    },
  },
  tabsContent: {
    backgroundColor: palette.background.default,
  },
  tabpanel: {
    backgroundColor: palette.background.default,
    padding: `${typography.pxToRem(32)} ${typography.pxToRem(16)}`,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Tabs({ firstLabel, secondLabel, firstChild, secondChild, ...props }) {
  const classes = useStyles(props);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabsContent}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs"
          classes={{
            root: classes.tabs,
            indicator: classes.indicator,
          }}
        >
          <Tab
            label={firstLabel}
            {...a11yProps(0)}
            disableRipple
            classes={{
              root: classes.firstTab,
              wrapper: value === 0 ? classes.activeWrapper : classes.wrapper,
            }}
          />
          <Tab
            label={secondLabel}
            {...a11yProps(1)}
            disableRipple
            classes={{
              root: classes.secondTab,
              wrapper: classes.wrapper,
            }}
          />
        </MuiTabs>
        <Divider className={classes.divider} />
      </div>
      <div className={classes.tabpanel}>
        <TabPanel value={value} index={0}>
          {firstChild}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {secondChild}
        </TabPanel>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  firstLabel: PropTypes.string,
  secondLabel: PropTypes.string,
  firstChild: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  secondChild: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Tabs.defaultProps = {
  firstLabel: undefined,
  secondLabel: undefined,
  firstChild: undefined,
  secondChild: undefined,
};

export default Tabs;
