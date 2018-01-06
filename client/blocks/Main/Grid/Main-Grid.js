import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import withStyles from 'material-ui/es/styles/withStyles';

const styles = {
    gridItem: {
        height: '100%',
        boxSizing: 'border-box',
        border: '1px solid #80808029',
    },
};

const MainGrid = props => (
    <GridList cellHeight={400} cols={4} spacing={24}>
        {props.events.map(event => (
            <GridListTile key={event.id}>
                <img src={event.img} alt={event.title} className={props.classes.gridItem} />
                <GridListTileBar
                    title={event.title}
                    subtitle={<span>by: {event.author}</span>}
                />
            </GridListTile>
        ))}
    </GridList>
);

MainGrid.propTypes = {
    events: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainGrid);
