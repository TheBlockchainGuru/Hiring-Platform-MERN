import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NextLink from "next/link";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import { Button, TextField, Stack, Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Chart } from "../chart";

const data = {
  series: [{ data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5] }],
  categories: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

export const ScriptInsights = (props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#00ab57"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: "vertical",
      },
      type: "gradient",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
    },
    markers: {
      size: 6,
      strokeColors: theme.palette.background.default,
      strokeWidth: 3,
    },
    stroke: {
      curve: "smooth",
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: data.categories,
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };

  const chartSeries = data.series;
  const arr = [
    { number: "0", title: "CANDIDATES" },
    { number: "0", title: "SHARE LINK" },
    { number: "0", title: "EMAIL INVITATION" },
    { number: "0", title: "IN PROGRESS" },
    { number: "0", title: "EXPIRED" },
    { number: "0min", title: "AVG COMPLETION TIME" },
    { number: "0", title: "HIRED" },
  ];
  return (
    <Box sx={{ width: "100%", backgroundColor: "background.paper", my: 5 }}>
      <Stack flexDirection="row" sx={{ py: 3, px: 2 }}>
        <Box sx={{ flex: 2 }}>
          <Typography sx={{ my: 1 }} fontSize="small">
            CANDIDATES
          </Typography>
          <Box sx={{ display: "flex" }}>
            {arr.map((ele, index) => {
              return (
                <Box sx={{ flex: 1 }} key={index}>
                  <Typography variant="h5" sx={{ my: 1 }}>
                    {ele.number}
                  </Typography>
                  <Typography fontSize="small">{ele.title}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography fontSize="small">CANDIDATE RATING</Typography>
          <Typography variant="h5" sx={{ my: 1 }}>
            -/5(0)
          </Typography>
          <Typography fontSize="small">CSAT RATING</Typography>
        </Box>
      </Stack>
      <Divider />
      <Box sx={{ p: 3 }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" sx={{ my: 2 }}>
            Candidate Completions
          </Typography>
          <Chart
            height={350}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" sx={{ my: 2 }}>
            Score Distribution
          </Typography>
          <Chart
            height={350}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" sx={{ my: 2 }}>
            Question by Question Insightsinfo
          </Typography>
          <Chart
            height={350}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </Box>
      </Box>
    </Box>
  );
};
