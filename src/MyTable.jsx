import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import './styles.css';

const styles = (theme) =>
  createStyles({
    root: {
      minWidth: 0,
      minHeight: 0,
    },
    centerCell: {
      minWidth: 0,
      minHeight: 0,
    },
  });

class InnerMyTable extends React.Component {
  render() {
    const { classes } = this.props;

    const columns = ['Col1', 'Col2'];

    const data = [
      ['Item1-Col1', 'Item1-Col2'],
      ['Item2-Col1', 'Item2-Col2'],
      ['Item3-Col1', 'Item3-Col2'],
      ['Item4-Col1', 'Item4-Col2'],
      ['Item5-Col1', 'Item5-Col2'],
      ['Item6-Col1', 'Item6-Col2'],
      ['Item7-Col1', 'Item7-Col2'],
      ['Item8-Col1', 'Item8-Col2'],
      ['Item9-Col1', 'Item9-Col2'],
      ['Item10-Col1', 'Item10-Col2'],
      ['Item11-Col1', 'Item11-Col2'],
      ['Item12-Col1', 'Item12-Col2'],
    ];

    const theme = createMuiTheme({
      overrides: {
        MUIDataTable: {
          responsiveScroll: {
            maxHeight: 'none',
          },
        },
      },
    });

    const tableOptions = {
      responsive: 'scroll',
      download: false,
      print: false,
      viewColumns: false,
    };

    return (
      <div className={classes.root}>
        <div className={classes.centerCell}>
          <MuiThemeProvider theme={theme}>
            <MUIDataTable
              options={tableOptions}
              columns={columns}
              data={data}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export const MyTable = withStyles(styles)(InnerMyTable);
