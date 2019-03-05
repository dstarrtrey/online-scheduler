import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { theme } from "./theme.js";
import { format, differenceInCalendarDays } from "date-fns";
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#651010",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "98vw",
    maxHeight: "40vh",
    marginTop: theme.spacing.unit * 3,
    marginLeft: "auto",
    marginRight: "auto",
    overflowX: "scroll",
    overflowY: "scroll"
  },
  table: {
    width: "100%",
    backgroundColor: "white",
    overFlowX: "scroll",
    minWidth: 700
  },
  tabHead: {
    position: "sticky",
    top: 0,
    zIndex: 3
  },
  leftCol: {
    position: "sticky",
    left: 0,
    padding: 5,
    opacity: 0.5
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#dfdfdf"
    }
  },
  column: {
    borderRight: "2px dashed #c1c1c1",
    padding: "0"
  },
  event: {
    backgroundColor: theme.palette.primary.light,
    color: "#651010",
    margin: "5px 10px",
    width: 120,
    height: 60,
    textAlign: "center",
    borderRadius: 10
  },
  date: {
    marginTop: "0"
  },
  dayOfWeek: {
    marginBottom: "0"
  }
});

class TopTemplate extends React.PureComponent {
  dateRange() {
    const start = this.props.startDate;
    const end = this.props.endDate;
    const numOfDays = differenceInCalendarDays(end, start) + 1;
    const numArr = [...Array(numOfDays).keys()];
    const dateArr = numArr.map(x => {
      return (
        format(new Date(
          start.getFullYear(),
          start.getMonth(),
          start.getDate() + x
        ), "iiii MM/dd/yy").split(" ")
      );
    });
    return dateArr;
  }
  render(){

    const allDays = this.dateRange();
    const { classes, events } = this.props;
    function getTimes() {
      const hourArr = [...Array(24).keys()];
      return hourArr.map(x => {
        if (x < 11) return (x += 1) + ":00 am";
        else if (x === 23) return (x -= 11) + ":00 am";
        else if (x === 11) return (x += 1) + ":00 pm"
        else return (x -= 11) + ":00 pm";
      });
    }
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell
                className={`${classes.tabHead} ${classes.firstCol}`}
                align="right"
              >
                <h3>Time</h3>
              </CustomTableCell>
              {allDays.map(day => (
                <CustomTableCell
                  className={classes.tabHead}
                  align="center"
                  key={day[1]}
                >
                  <h3 className={classes.dayOfWeek}>{day[0]}</h3>
                  <p className={classes.date}>{day[1]}</p>
                </CustomTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getTimes().map(hour => (
              <TableRow key={hour+"row"}>
                <CustomTableCell
                  className={classes.leftCol}
                  component="th"
                  scope="row"
                >
                  <b>{hour}</b>
                </CustomTableCell>
                {allDays.map(x => <CustomTableCell key={`${hour}${x}`}className={classes.column}><div className={classes.event}>{format(new Date(x[1]), "MM/dd")} {hour}</div></CustomTableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TopTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles(theme))(TopTemplate);
