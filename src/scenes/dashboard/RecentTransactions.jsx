import { mockTransactions } from "../../data/mockData";
import { Box, Typography, useTheme, Grid, Chip } from "@mui/material";
import { tokens } from "../../theme";

const RecentTransactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ 
            height:  "inherit", 
            // maxHeight: "310px", 
            overflowY: "auto",
            // minHeight:"290px"
    }}
    >
      <Grid
        item
        md={12}
        borderBottom={`4px solid ${colors.primary[500]}`}
        backgroundColor={colors.primary[400]}
        p={2}
      >
        <Typography variant="h5">Recent Transactions</Typography>
      </Grid>
      {mockTransactions.map((item) => {
        return (
          <Grid
            container
            item
            md={12}
            borderBottom={`4px solid ${colors.primary[500]}`}
            backgroundColor={colors.primary[400]}
            p={2}
            alignItems="center"
          >
            <Grid item md={3}>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {item?.txId}
              </Typography>
              <Typography>{item?.user}</Typography>
            </Grid>
            <Grid item md={4} textAlign="center">
              <Typography>{item?.date}</Typography>
            </Grid>
            <Grid item md={4} textAlign="right">
              <Chip
                label={`$${item?.cost}`}
                sx={{
                  backgroundColor: `${colors.greenAccent[500]}`,
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RecentTransactions;
