import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import { ListItemAvatar, ListItemIcon } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CardProfile from './Card';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ data }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="subtitle1" onClick={handleClickOpen}>
        Setting
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <List></List>
        <DialogTitle id="form-dialog-title">Account</DialogTitle>
        <DialogContent>
          <ListItem>
            <Typography variant="subtitle1" component="h2">
              Name:
            </Typography>
            <Chip
              label={data.firstName}
              onDelete={() => console.log('HERE')}
              color="default"
              style={{ marginLeft: 15 }}
              deleteIcon={<EditIcon style={{ marginLeft: 30 }} />}
            />
            <Chip
              label={data.lastName}
              onDelete={() => console.log('HERE')}
              color="default"
              style={{ paddingLeft: 15, marginLeft: 5 }}
              deleteIcon={
                <EditIcon color="primary" style={{ marginLeft: 30 }} />
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Typography variant="subtitle1" component="h2">
              Username:
            </Typography>
            <Chip
              label={data.firstName}
              onDelete={() => console.log('HERE')}
              color="default"
              style={{ marginLeft: 15 }}
              deleteIcon={<EditIcon style={{ marginLeft: 30 }} />}
            />
          </ListItem>
          <Divider style={{ marginBottom: 15 }} />
          <Typography variant="subtitle1" component="h2">
            Change Profile Image:
          </Typography>
          <CardProfile userData={data} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
