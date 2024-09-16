import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import MainCard from "./MainCard";
import SectionAppBar from "./SectionAppBar";
import FormOptions from "./FormOptions";

const FormContainer = () => {
  const [forms, setForms] = useState([
    { id: 1, question: "", selectedOption: "Short answer", required: false },
  ]);

  // Function to handle changes in form inputs
  const handleFormChange = (index, field, value) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
  };

  // Function to add a new form
  const handleAddForm = () => {
    setForms([
      ...forms,
      { id: forms.length + 1, question: "", selectedOption: "Short answer", required: false },
    ]);
  };

  // Function to delete a form
  const handleDeleteForm = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  // Function to duplicate a form
  const handleDuplicateForm = (index) => {
    const newForm = { ...forms[index], id: forms.length + 1 };
    setForms([...forms, newForm]);
  };

  return (
    <Box sx={{ ml: 10, maxWidth: 905 }}>
      {forms.map((form, index) => (
        <MainCard
          key={form.id}
          form={form}
          handleChange={(field, value) => handleFormChange(index, field, value)}
          handleDelete={() => handleDeleteForm(index)}
          handleDuplicate={() => handleDuplicateForm(index)}
        />
      ))}
     <Box>
   
     </Box>
      <Box mt={2}>
      {forms.map((form, index) => (
        <SectionAppBar key={index} onClick={handleAddForm} />
      ))}
      </Box>
    </Box>
  );
};

export default FormContainer;
