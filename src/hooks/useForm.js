import { useState } from "react";

export default function useForm(initialFormState) {
  // States
  const [formData, setFormData] = useState(initialFormState);
  // End of states

  // Set the states values of the form
  function handleInputChange(e, property) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [property]: e.target.value,
      };
    });
  }

  function resetForm() {
    setFormData(initialFormState);
  }

  return {
    resetForm,
    handleInputChange,
    formData,
    setFormData,
  };
}
