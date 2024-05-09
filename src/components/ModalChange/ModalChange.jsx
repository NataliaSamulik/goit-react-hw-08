import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Stack,
  TextField,
  FormControl,
} from '@mui/material';
import { useState } from 'react';

const ModalChange = ({ onChange, onClose, name, number }) => {
  const [nameChange, setNameChange] = useState(name);
  const [numberChange, setNumberChange] = useState(number);

  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <FormControl>
        <DialogContent>
          <Stack
            component="form"
            sx={{
              width: '50ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="name"
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              value={nameChange}
              onChange={event => {
                setNameChange(event.target.value);
              }}
            />
            <TextField
              label="number"
              id="filled-hidden-label-normal"
              variant="filled"
              value={numberChange}
              onChange={event => {
                setNumberChange(event.target.value);
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onChange(nameChange, numberChange);
            }}
          >
            Change
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </FormControl>
    </Dialog>
  );
};

export default ModalChange;
