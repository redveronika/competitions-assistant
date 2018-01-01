import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/es/styles/withStyles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        minWidth: 300,
        height: 400,
        flexShrink: 0,
    },
    media: {
        height: 280,
        backgroundSize: 'contain!important',
    },
};

const EventsGridItem = (props) => {
    const { classes, event } = props;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={event.img}
                title="Contemplative Reptile"
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
