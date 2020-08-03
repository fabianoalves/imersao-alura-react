import { useState } from 'react';

function useForm(valuesInit) {
  const [values, setValues] = useState(valuesInit);
  function setValue(name, value) {
    setValues({
      ...values,
      [name]: value,
    });
  }
  function clearForm() {
    setValue(valuesInit);
  }
  function handleChangeValue(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  return {
    values,
    handleChangeValue,
    clearForm,
  };
}

export default useForm;
