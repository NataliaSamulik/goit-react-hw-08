import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogContentText,
} from '@mui/material';

const ModalDelete = ({ onClose, onDelete, name }) => {
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Delete contact: {name}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDelete}>Delete</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDelete;
