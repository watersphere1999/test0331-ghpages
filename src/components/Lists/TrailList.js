import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, GridList, Divider } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  // thumb: {
  //   float: "right",
  //   marginRight: 16,
  //   borderRadius: "6px",
  //   width: 104,
  //   height: 72
  // },
  gridCell: {
    marginBottom: 14
  },
  title: {
    fontSize: 16,
    fontWeight: 500
  },
  location: {
    fontSize: 14,
    color: "#979797"
  },
  distance: {
    fontSize: 12,
    color: "#979797"
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  background: {
    height: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.12)"
  },
  favorite: {
    color: "#FFF",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  mediaAvatar: {
    position: "relative",
    marginRight: 16,
    "& img": {
      borderRadius: "4px",
      minWidth: "104px",
      width: "100%",
      height: "72px",
      objectFit: "cover"
    }
  }
}));

const TrailList = props => {
  const classes = useStyles();
  //api回傳資料
  const data = props.data;
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={classes.root}>
      <GridList cellHeight={72} cols={1}>
        {data.map(trail => (
          <>
            <Grid
              key={trail.id}
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
              className={classes.gridCell}
              item
              xs={12}
              xl={12}
            >
              <Grid item xs={4} xl={4}>
                <div className={classes.mediaAvatar}>
                  <img
                    src={trail.coverImage}
                    alt={trail.title}
                    className={classes.thumb}
                  />
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    icon={<FavoriteBorder fontSize={"small"} />}
                    checkedIcon={
                      <Favorite fontSize={"small"} style={{ color: "#FFF" }} />
                    }
                    className={classes.favorite}
                    name="favorite"
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={8}
                xl={8}
                container
                direction="column"
                alignItems="flex-start"
              >
                <Grid item xs={12} className={classes.title}>
                  <div style={{ marginTop: 2 }}>{trail.title}</div>
                </Grid>
                <Grid item xs={12} className={classes.location}>
                  <div style={{ marginTop: 2 }}>{trail.location.name}</div>
                </Grid>
                <Grid item xs={12} className={classes.distance}>
                  <div style={{ marginTop: 2 }}>全程約{trail.distance}公里</div>
                </Grid>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={8}>
                <Divider />
              </Grid>
            </Grid>
          </>
        ))}
      </GridList>
    </div>
  );
};
export default TrailList;
