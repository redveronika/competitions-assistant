import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Typography, withStyles } from 'material-ui';

const styles = {
    modal: {
        position: 'absolute',
        width: 600,
        height: 300,
        top: 'calc(50% - 150px)',
        left: 'calc(50% - 300px)',
        border: '1px solid #e5e5e5',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
        padding: 8 * 4,
    },
    buttonsBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        width: 300,
        height: 50,
        marginTop: 20,
    },
};

const AuthModal = props => (
    <Modal
        aria-labelledby="authorization-modal"
        aria-describedby="sign in with you favorite social service"
        open={props.openModal}
        onClose={props.handleModalClose}
    >
        <div className={props.classes.modal}>
            <Typography type="title" id="modal-title">
                Авторизация
            </Typography>
            <Typography type="subheading" id="simple-modal-description">
                Авторизуйтесь с помощью одного из сервисов из списка ниже.
            </Typography>
            <div className={props.classes.buttonsBlock}>
                <Button raised color="primary" className={props.classes.button}>
                    ВКОНТАКТЕ
                </Button>
                <Button raised color="primary" className={props.classes.button}>
                    Яндекс
                </Button>
                <Button raised color="primary" className={props.classes.button}>
                    Google
                </Button>
            </div>
        </div>
    </Modal>
);

AuthModal.propTypes = {
    openModal: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthModal);
