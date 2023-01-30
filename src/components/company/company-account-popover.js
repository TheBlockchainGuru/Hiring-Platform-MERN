import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../hooks/use-auth";
import { Cog as CogIcon } from "../../icons/cog";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";
import { SwitchHorizontalOutlined as SwitchHorizontalOutlinedIcon } from "../../icons/switch-horizontal-outlined";

export const CompanyAccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const router = useRouter();
  const { logout } = useAuth();
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    name: "Anika Visser",
  };

  const handleLogout = async () => {
    try {
      onClose?.();
      await logout();
      router.push("/").catch(console.error);
    } catch (err) {
      console.error(err);
      toast.error("Unable to logout.");
    }
  };
  const arr = [
    {
      link: "/company",
      title: "My Account",
    },
    {
      link: "/company",
      title: "Company Account",
    },
    {
      link: "/company",
      title: "Team",
    },
    {
      link: "/company",
      title: "Notification",
    },
    {
      link: "/company",
      title: "Current Plan and Billing Details",
    },
    {
      link: "/company",
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
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      keepMounted
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 300 } }}
      transitionDuration={0}
      {...other}
    >
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
      <Box sx={{ my: 1 }}>
        {arr.map((ele, index) => {
          return (
            <NextLink href={ele.link} key={index} passHref>
              <MenuItem component="a">
                <ListItemText
                  primary={<Typography variant="body1">{ele.title}</Typography>}
                />
              </MenuItem>
            </NextLink>
          );
        })}

        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Logout</Typography>}
          />
        </MenuItem>
      </Box>
    </Popover>
  );
};

CompanyAccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
