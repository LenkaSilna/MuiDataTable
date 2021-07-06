import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './styles.css';

const styles = (theme) =>
  createStyles({
    root: {
      minWidth: 0,
      minHeight: 0,
    },
  });

class InnerMyTable extends React.Component {
  render() {
    const { classes } = this.props;

    const columns = ['Name', 'Workspace', 'Campain Mode', 'Date Created'];

    const data = [
      ['fy bbfb', 'Startup', 'Batch', '5th Jul 2021 at 09:54 AM'],
      ['Creative upload', 'Startup', 'Batch', '21st Jun 2021 at 01:14 PM'],
      [
        'Batch before release 21.6.',
        'Motionlab',
        'Batch',
        '21st Jun 2021 at 10:48 AM',
      ],
      [
        'API before relase 21.6.',
        'Motionlab',
        'API',
        '21st Jun 2021 at 10:47 AM',
      ],
      ['Warning info', 'Startup', 'Batch', '16th Jun 2021 at 01:24 PM'],
      ['Fonts Testing II', 'Startup', 'Batch', '15th Jun 2021 at 01:53 PM'],
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
      responsive: 'scrollFullHeight',
      // responsive: 'scroll',
      selectableRows: 'none',
      download: false,
      print: false,
      viewColumns: false,
    };

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <MUIDataTable options={tableOptions} columns={columns} data={data} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export const MyTable = withStyles(styles)(InnerMyTable);
