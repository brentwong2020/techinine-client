import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();

  return (
    <div className={'container'}>
      <div className="mt-5">{t('general.Welcome')}</div>
    </div>
  )
}