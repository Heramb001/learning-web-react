import React, {useRef, useEffect, useState} from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

import UndoButton from "../buttons/UndoButton";
import RedoButton from "../buttons/RedoButton";
import DownloadButton from "../buttons/DownloadButton";

import NavbarComponent from '../../NavbarComponent';

import * as DmnEditor from "@kogito-tooling/kie-editors-standalone/dist/dmn";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    fileNameField:{
        backgroundColor: fade(theme.palette.common.white, 0.05),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.10),
        }
    },
    fileNameInput:{
        color: "inherit",
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(${theme.spacing(1)}px)`,
        width: '100%',

    }
  }));

function DMNeditorComponent(){
    const classes = useStyles();
    const dmnEditorContainer = useRef();
    const [ editor, setEditor] = useState();
    const [ fileName, setfileName] = useState('new-file');

    const handleChange = (event) => {
        setfileName(event.target.value);
    };

    const redoDMN = () => {
        editor.redo();
        console.log("model Saved");
    };

    const undoDMN = () => {
        editor.undo();
        console.log("model undo");
    };

    const downloadDMN = () => {
        editor.getContent().then(content => {
            const link = document.createElement('a');
            link.href = "data:text/plain;charset=utf-8,"+encodeURIComponent(content);
            link.setAttribute("download", fileName+".dmn");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });

        console.log("model downloaded");
    };

    const downloadSVGDMN = () => {
        editor.getContent().then(content => {
            const link = document.createElement('a');
            link.href = "data:text/plain;charset=utf-8,"+encodeURIComponent(content);
            link.setAttribute("download", fileName+".svg");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });
        console.log("model downloaded as svg");
    };

    useEffect(()=>{
        setEditor(DmnEditor.open({
            container: dmnEditorContainer.current,
            initialContent: Promise.resolve(""),
            readOnly: false
        }))
    },[]);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <NavbarComponent classes={classes.menuButton}/>
                    <span className={classes.title}> DMN Editor </span>
                    <div className={classes.fileNameField}>
                        <InputBase placeholder="new-file" 
                            margin="dense" 
                            inputProps={{ disableunderline: "true" }} 
                            className={classes.fileNameInput}
                            onChange={handleChange}/>
                    </div>
                    <UndoButton undoDMN={undoDMN}/>
                    <span>|</span>
                    <RedoButton redoDMN={redoDMN}/>
                    <DownloadButton downloadDMN={downloadDMN}/>
                    <Button onClick={downloadSVGDMN} color="inherit">Download as SVG</Button>
                </Toolbar>
            </AppBar>
            <div id="dmnEditor" ref={dmnEditorContainer}></div>
        </div>
        
    )
}

export default DMNeditorComponent;