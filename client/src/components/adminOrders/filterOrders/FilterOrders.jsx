import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getOrdersByStatus} from '../../../redux/actions/index';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function FilterOrders() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(getOrdersByStatus(event.target.value));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div style={{borderTop: "1px solid lightgray", marginTop: "10px", paddingTop: "15px"}}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={(e) => handleChange(e)}
                >
                    <MenuItem value="Cancel">Cancel</MenuItem>
                    <MenuItem value="Complete">Complete</MenuItem>
                    <MenuItem value="Processing">Processing</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

