import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/es/styles/withStyles';

import EventsGridItem from './Item/EventsGrid-Item';

const styles = {
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: -12,
    },
    gridListItem: {
        padding: 12,
        flexBasis: 345,
        flexGrow: 1,
    },
};

const EventsGrid = props => (
    <div className={props.classes.gridList}>
        {props.events.map(event => (
            <div className={props.classes.gridListItem} key={event.id}>
                <EventsGridItem event={event} />
            </div>
        ))}
    </div>
);

EventsGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
};


export default withStyles(styles)(EventsGrid);
