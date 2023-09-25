import { Grid, Typography, useTheme } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { tokens } from "../../theme";
import "react-circular-progressbar/dist/styles.css";

const Widget = ({ icon, kpi, subtitle, percentage }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container backgroundColor={colors.primary[400]}>
     
      <Grid
        container
        
        pt={2}
        pl={3}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item md={8}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item pb={1}>
              {icon}
            </Grid>
            <Grid item pb={1}>
              <Typography variant="h4" fontWeight="bold">
                {kpi.toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <CircularProgressbar
            value={percentage}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: "#4cceac",
              trailColor: "#6870fa",
            })}
          />
        </Grid>
      </Grid>
      <Grid
        container
        pl={3}
        pb={3}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item md={8}>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            {subtitle}
          </Typography>
        </Grid>
        <Grid item md={4} xs={5} sm={5}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-center"
          >
            <Grid item md={8} xs={7} sm={7}>
              <Typography
                variant="h5"
                color={colors.greenAccent[400]}
                sx={{ fontStyle: "italic" }}
              >
                +{percentage}%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Widget;
