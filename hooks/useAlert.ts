import { useState } from 'react';

type AlertState = {
  show: boolean;
  text: string;
  type: 'danger' | 'success';
};

type ShowAlertProps = {
  text: string;
  type?: 'danger' | 'success';
};

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }: ShowAlertProps) => setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
