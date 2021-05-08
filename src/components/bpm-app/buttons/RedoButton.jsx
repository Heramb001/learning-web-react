import IconButton from '@material-ui/core/IconButton';
import RedoIcon from '@material-ui/icons/Redo';

const RedoButton = (props) => {
    return (
        <IconButton color="inherit" onClick={props.redoDMN}>
            <RedoIcon />
        </IconButton>
    );
};

export default RedoButton;