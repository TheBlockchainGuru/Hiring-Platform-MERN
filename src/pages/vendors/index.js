import NextLink from "next/link";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "../../icons/check-circle-outlined";
import { MainLayout } from "../../components/main-layout";
import { Users as UsersIcon } from "../../icons/users";
import { Star as StarIcon } from "../../icons/star";
import { Template as TemplateIcon } from "../../icons/template";

const Vendors = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "background.paper",
        pt: 6,
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography align="center" variant="h1">
          Vendors
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle1" sx={{ py: 3 }}>
          Gather objective data on applicants and employees, identify top candidates, easily conduct structured interviews — all with Hire Success.
        </Typography>
      </Container>
    </Box>
  );
};

Vendors.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Vendors;
