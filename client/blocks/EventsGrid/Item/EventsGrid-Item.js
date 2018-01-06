import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/es/styles/withStyles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        minWidth: 300,
        height: 400,
        flexShrink: 0,
    },
    media: {
        width: '100%',
        height: 280,
        objectFit: 'contain',
    },
};

const EventsGridItem = (props) => {
    const { classes, event } = props;
    return (
        <Card className={classes.card}>
            <img
                className={classes.media}
                src={event.img}
                alt={`Афиша ${event.title}`}
            />
            <CardContent>
                <Typography type="headline" component="h2">
                    {event.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button dense color="primary">
                    Поделиться
                </Button>
                <Button dense color="primary">
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    );
};

EventsGridItem.propTypes = {
    event: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(EventsGridItem);
