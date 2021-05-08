import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';

const DownloadButton = (props) => {
    return (
        <IconButton color="inherit" onClick={props.downloadDMN}>
            <GetAppIcon />
        </IconButton>
    );
};

export default DownloadButton;