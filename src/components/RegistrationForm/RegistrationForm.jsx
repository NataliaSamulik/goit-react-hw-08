import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';

import css from './RegistrationForm.module.css';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.inputBox}>
          <label htmlFor={usernameFieldId}>Username</label>
          <Field type="text" name="username" id={usernameFieldId} />
        </div>
        <div className={css.inputBox}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="text" name="email" id={emailFieldId} />
        </div>
        <div className={css.inputBox}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="text" name="password" id={passwordFieldId} />
        </div>
        <button className={css.btnForm} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
