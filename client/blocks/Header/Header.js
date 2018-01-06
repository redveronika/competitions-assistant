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

const Header = props => (
    <AppBar>
        <Toolbar className={props.classes.toolbar}>
            <Typography type="title">
                Competitions assistant
            </Typography>
            <IconButton onClick={props.onClickUser}>
                <AccountIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onClickUser: PropTypes.func.isRequired,
};


export default withStyles(styles)(Header);
