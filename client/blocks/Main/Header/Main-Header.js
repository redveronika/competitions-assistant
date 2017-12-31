import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Typography } from 'material-ui';
import AccountIcon from 'material-ui-icons/AccountCircle';
import { withStyles } from 'material-ui/styles';

const styles = {
    toolbar: {
        'justify-content': 'space-between',
    },
};

const MainHeader = props => (
    <AppBar>
        <Toolbar className={props.classes.toolbar}>
            <Typography type="title">
                Competitions assistant
            </Typography>
            <IconButton>
                <AccountIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);

MainHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainHeader);
