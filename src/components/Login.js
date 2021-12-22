import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { USER_LOGIN } from '../constants';
import { useUserFunction, useUserState } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const userFunction = useUserFunction();
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const [err, setErr] = useState(false);
  const { t } = useTranslation();

  const handleLogin = (e) => {
    setErr(false);
    e.preventDefault();
    userFunction.userLogin(username.current.value, password.current.value).then((res) => {
      if (res) {
        navigate('/home');
      } else {
        setErr(true);
      }
    })
  }

  return (
    <div className={'container'}>
      <form className="mt-5" onSubmit={handleLogin}>
        <div className="row">
          <div className="col-12 col-md-6 my-2 input-field">
            <label htmlFor={'username'}>{t('general.username')}:</label><br />
            <input ref={username} type="text" id="username" name="username" required></input>
          </div>
          <div className="col-12 col-md-6 my-2 input-field">
            <label htmlFor={'password'}>{t('general.password')}:</label><br />
            <input ref={password} type="password" id="password" name="password" required></input>
          </div>
          {err && <span className={'errMsg'}>{t('general.Err')}</span>}
          <div className="col-12 my-2">
            <button type={'submit'} className={'btn btn--submit'}>{t('general.submit')}</button>
          </div>
        </div>
      </form>
    </div>
  )
}