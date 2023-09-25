import { Typography, useTheme, Grid, Button, Box } from "@mui/material";
import { tokens } from "../../theme";
import Widget from "./Widget";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/charts/LineChart";
import BarChart from "../../components/charts/BarChart";
import RecentTransactions from "./RecentTransactions";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GeographyChart from "../../components/charts/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box p={2}>
      <Typography variant="h2" fontWeight="bold">
        DASHBOARD
      </Typography>

      <Grid container item spacing={3}>
        <Grid item md={10} xs={12} sm={12}>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Welcome to your dashboard
          </Typography>
        </Grid>
        <Grid item md={2} xs={12} sm={12}>
          <Button>DOWNLOAD REPORTS</Button>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Widget
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            kpi={12361}
            subtitle="Emails Sent"
            percentage={14}
          />
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Widget
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            kpi={431225}
            subtitle="Sales Obtained"
            percentage={21}
          />
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Widget
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            kpi={32441}
            subtitle="New Clients"
            percentage={5}
          />
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Widget
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            kpi={1325134}
            subtitle="Traffic Received"
            percentage={43}
          />
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <Grid
            container
            backgroundColor={colors.primary[400]}
            pt={2}
            pl={3}
            sx={{ height: "300px" }}
          >
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" fontWeight="bold">
                Revenue Generated
              </Typography>
            </Grid>

            <Grid item md={10} sm={6} xs={6}>
              <Typography variant="h3" fontWeight="bolder">
                $59,342.32
              </Typography>
            </Grid>
            <Grid item md={2} sm={6} xs={6}>
              <Button>DOWNLOAD REPORTS</Button>
            </Grid>

            <Grid item height="80%" md={12} mb={2} xs={12} sm={12}>
              <LineChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={12} xs={12} sx={{ height: "300px" }}>
          <RecentTransactions />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Grid container backgroundColor={colors.primary[400]} pt={2} pl={3}  height="300px">
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" fontWeight="bold">
                Campaign
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12} textAlign="center"  height="65%">
              <CircularProgressbar
                value={80}
                strokeWidth={8}
                styles={buildStyles({
                  pathColor: "#4cceac",
                  trailColor: "#6870fa",
                })}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} textAlign="center">
              <Typography variant="h5" color={colors.greenAccent[400]}>
                $48,352 revenue generated
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12} textAlign="center">
              <Typography variant="h6">
                Includes extra misc expenditures and costs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={12} xs={12} height="280px">
          <Grid container backgroundColor={colors.primary[400]} pt={2} pl={3} height="300px">
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" fontWeight="bold">
                Sales Quantity
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12} textAlign="center" pb={2} height="100%">
              <BarChart/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={12} xs={12} height="280px">
          <Grid container backgroundColor={colors.primary[400]} pt={2} pl={3} height="300px">
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" fontWeight="bold">
                Geography Based Traffic
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12} textAlign="center" pb={2} height="100%">
              <GeographyChart/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
