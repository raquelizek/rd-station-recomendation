import { useCallback, useState } from 'react';

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

   const resetForm = useCallback(
    () => setFormData(initialValues),
    [initialValues]
  );

  return { formData, handleChange, resetForm };
};

export default useForm;
