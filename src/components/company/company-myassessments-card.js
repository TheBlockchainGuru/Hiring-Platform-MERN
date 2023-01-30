import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { Menu, MenuItem, Stack } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const CompanyMyassessmentCard = (props) => {
  const { info } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card>
      <CardHeader
        avatar={<UserCircleIcon />}
        action={
          <Box>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              sx={{ mx: 2 }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Preview</MenuItem>
              <MenuItem onClick={handleClose}>Copy Preview Link</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Setting</MenuItem>
              <MenuItem onClick={handleClose}>Invite Candidates</MenuItem>
              <MenuItem onClick={handleClose}>Duplicate</MenuItem>
              <MenuItem onClick={handleClose}>Close Assessment</MenuItem>
            </Menu>
          </Box>
        }
        title="Personal Assistant"
        subheader={info.date}
      />
      <CardContent>
        <Stack gap={3} flexDirection="row">
          <Box>
            <Typography>CANDIDATES</Typography>
            <Typography>{info.candidates}</Typography>
          </Box>{" "}
          <Box>
            <Typography>COMPLETIONS</Typography>
            <Typography>{info.completion}</Typography>
          </Box>{" "}
          <Box>
            <Typography>HIRES</Typography>
            <Typography>{info.hires}</Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Box>
          <Button
            variant="container"
            sx={{
              bgcolor: "green",
              color: "white",
              " &:hover": { bgcolor: "#008000ad" },
            }}
          >
            Open
          </Button>
        </Box>
        <Box>
          <IconButton aria-label="add to favorites">
            <EqualizerIcon />
          </IconButton>
          <IconButton aria-label="share">
            <NotificationsNoneIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};
