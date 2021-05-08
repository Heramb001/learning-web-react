import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';

const UndoButton = (props) => {
    return (
        <IconButton color="inherit" onClick={props.undoDMN}>
            <UndoIcon />
        </IconButton>
    );
};

export default UndoButton;