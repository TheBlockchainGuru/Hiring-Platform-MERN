import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Drawer,
  Link,
  useMediaQuery,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";

const CompanySidebarLink = styled(Link)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "block",
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const CompanySidebar = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handlePathChange = () => {
    if (open) {
      onClose?.();
    }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );
  const arr = [
    {
      link: "/account/my-account",
      title: "My Account",
    },
    {
      link: "/account/company-account",
      title: "Company Account",
    },
    {
      link: "/account/team",
      title: "Team",
    },
    {
      link: "/account/notifications",
      title: "Notification",
    },
    {
      link: "/account/billing",
      title: "Current Plan and Billing Details",
    },
    {
      link: "/account/plan",
      title: "Plan Types",
    },
    {
      link: "/company",
      title: "Integration",
    },
    {
      link: "/company",
      title: "Help",
    },
  ];

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={!lgUp && open}
      PaperProps={{ sx: { width: 256 } }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
      variant="temporary"
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            alignItems: "center",
            p: 2,
            display: "flex",
          }}
        >
          <UserCircleIcon />
          <Box
            sx={{
              ml: 1,
            }}
          >
            <Typography variant="body1">User ID</Typography>
            <Typography color="textSecondary" variant="body2">
              User Name
            </Typography>
          </Box>
        </Box>
        <Divider />

        {arr.map((ele, index) => {
          return (
            <NextLink href={ele.link} key={index} passHref>
              <CompanySidebarLink
                color="textSecondary"
                underline="none"
                variant="subtitle2"
              >
                {ele.title}
              </CompanySidebarLink>
            </NextLink>
          );
        })}
        <Divider />
        <NextLink href="/company" passHref>
          <CompanySidebarLink
            color="textSecondary"
            underline="none"
            variant="subtitle2"
          >
            Logout
          </CompanySidebarLink>
        </NextLink>
      </Box>
    </Drawer>
  );
};

CompanySidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
