import { createMuiTheme } from 'material-ui/styles';
import { lime } from 'material-ui/colors';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: lime,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

export default theme;
