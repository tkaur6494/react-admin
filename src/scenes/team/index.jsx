import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Grid, useTheme, Chip } from "@mui/material";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName:"name-column--cell"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Chip
            sx={{
              width: "50%",
              color: colors.grey[100],
              borderRadius:"5px",
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700],
            }}
            icon={
              access == "admin" ? (
                <AdminPanelSettingsOutlinedIcon />
              ) : access == "manager" ? (
                <SecurityOutlinedIcon />
              ) : (
                <LockOpenOutlinedIcon />
              )
            }
            label={access}
          />
        );
      },
    },
  ];
  return (
    <Box
      p={2}
      sx={{
        "& .MuiDataGrid-columnHeaders":{
            background: colors.blueAccent[700],
            borderBottom: "none",
        },
        "& .MuiDataGrid-footerContainer":{
            background: colors.blueAccent[700],
            borderBottom: "none",
        },
        "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
        
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        TEAM
      </Typography>
      <Grid container item spacing={3}>
        <Grid item md={12} xs={12} sm={12}>
          <Typography variant="h5" color={colors.greenAccent[400]}>
            Managing the Team Members
          </Typography>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <DataGrid
            sx={{ width: "100%" }}
            rows={mockDataTeam}
            columns={columns}
            checkboxSelection
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Team;
