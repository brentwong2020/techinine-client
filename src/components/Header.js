import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserState, useUserFunction } from '../context/UserProvider';

import { USER_LOGOUT } from '../constants';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const userState = useUserState();
  const userFunction = useUserFunction();
  const navigate = useNavigate();

  const { isAuthenticated } = userState;
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(null);

  function handleLogout() {
    userFunction.userLogout();
    navigate('/');
  }

  useEffect(() => {
    if (lang !== null) i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <div className="w-100 d-flex justify-content-end">
          <div className="position-relative dropdown-list custom-nav-item">
            <div className="dropdown-title py-2 px-3">{t('general.Language')}</div>
            <ul className="dropdown-content">
              <li><button className="py-2 px-3 btn" type="button" onClick={() => setLang('en-US')}>EN</button></li>
              <li><button className="py-2 px-3 btn" type="button" onClick={() => setLang('zh-HK')}>HK</button></li>
            </ul>
          </div>
          {isAuthenticated &&
            <div className="py-2 px-3 custom-nav-item">
              <button className="btn" type="button" onClick={handleLogout}>{t('general.Logout')}</button>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}