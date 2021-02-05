import React, { useEffect } from 'react';

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=> {
    const timeout = setTimeout(()=> {
      removeAlert();
    }, 3000);
    return ()=> clearTimeout(timeout);
  }, [list]);  //alert znika po 3 sek, drugi param list gwarantuje ponowne odliczanie po każdym załadowaniu listy
  return <p className={`alert alert-${type}`}>{msg}</p>;

};

export default Alert;
