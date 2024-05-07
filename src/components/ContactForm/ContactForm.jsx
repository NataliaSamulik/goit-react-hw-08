import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

const initialValues = { name: '', number: '' };

const FeedbackSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFildId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(addContact({ name: value.name, number: value.number }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.inputBox}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </div>
        <div className={css.inputBox}>
          <label htmlFor={numberFildId}>Number</label>
          <Field type="text" name="number" id={numberFildId} />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </div>

        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
