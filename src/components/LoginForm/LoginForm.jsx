import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

import css from './LoginForm.module.css'

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
    .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

      actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div className={css.inputBox}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="text" name="email" id={emailFieldId} />
        </div>
        <div className={css.inputBox}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="text" name="password" id={passwordFieldId} />
        </div>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
