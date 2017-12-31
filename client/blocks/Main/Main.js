import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import MainHeader from './Header/Main-Header';
import MainGrid from './Grid/Main-Grid';

const events = [
    {
        id: 0,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'jill111',
        cols: 2,
    },
    {
        id: 1,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'director90',
    },
    {
        id: 2,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'Danson67',
    },
    {
        id: 3,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'fancycrave1',
    },
    {
        id: 4,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'Hans',
    },
];

/* eslint-disable react/prefer-stateless-function */
class Main extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    static styles = {
        grid: {
            position: 'relative',
            width: '100%',
            'max-width': '1260px',
            height: '100%',
            margin: '0 auto',
        },
        container: {
            'margin-top': '64px',
            padding: '50px 12px 0',
        },
        title: {
            'font-size': '28px',
            'font-weight': 'bold',
        },
        gridContainer: {
            margin: '40px 0',
        },
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.grid}>
                <MainHeader />
                <div className={classes.container}>
                    <Typography type="title" className={classes.title}>
                        Все предстоящие соревнования
                    </Typography>
                    <div className={classes.gridContainer}>
                        <MainGrid events={events} />
                    </div>
                </div>
            </Grid>
        );
    }
}

export default withStyles(Main.styles)(Main);