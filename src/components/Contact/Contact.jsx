import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';

import ModalDelete from '../ModalDelete/ModalDelete';
import ModalChange from '../ModalChange/ModalChange';
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id } }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openChange, setOpenChange] = useState(false);

  const dispatch = useDispatch();

  const notify = name => toast(`The contact ${name} has been deleted `);

  const handleCloseModalDelete = () => {
    setOpenDelete(false);
  };

  const onClickDelete = () => {
    dispatch(deleteContact(id));
    notify(name);
  };

  const onClickChange = (name, number) => {
    console.log(name);
    dispatch(updateContact({ id: id, name: name, number: number }));
    setOpenChange(false);
  };

  const handleCloseModalChange = () => {
    setOpenChange(false);
  };

  const handleOpenChange = () => {
    setOpenChange(true);
  };

  return (
    <>
      <Toaster />
      <div>
        <p className={css.contactData}>
          <BsPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.contactData}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.buttonBox}>
        <button className={css.btn} type="click" onClick={setOpenDelete}>
          <MdDelete className={css.icon} />
        </button>
        <button className={css.btn} type="click" onClick={handleOpenChange}>
          <MdEdit className={css.icon} />
        </button>
      </div>

      {openDelete && (
        <ModalDelete
          onClose={handleCloseModalDelete}
          onDelete={onClickDelete}
          name={name}
        />
      )}
      {openChange && (
        <ModalChange
          onChange={onClickChange}
          onClose={handleCloseModalChange}
          name={name}
          number={number}
        />
      )}
    </>
  );
};
export default Contact;
