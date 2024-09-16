import React, { useState } from "react";
import "../styles/Form.css";
import { BiCustomize, BiUndo } from "react-icons/bi";
import { FaRegEye, FaRegFolder } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiGoogleforms } from "react-icons/si";
import { LiaRedoSolid, LiaUndoSolid } from "react-icons/lia";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import TextEditorQuill from "./TextEditorQuill";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import SectionAppBar from "./SectionAppBar";
import MainCard from "./MainCard";
import FormContainer from "./FormContainer";
import ReactQuill from "react-quill";
import FormOptions from "./FormOptions";
const FormModule = () => {
  const [forms, setForms] = useState([
    {
      form: {
        id: "1234567890",
        formTitle: "sthdjfkg",
        formDes: "adsfh",
        section: [
          {
            sectionId: "123456789",
            sectionTitle: "lskurbgvyesr",
            sectiondes: "thdntfyjmtum",
            questions: [
              {
                id: 1,
                question: "Untitle Question",
                selectedOption: "Short answer",
                required: false,
              },
            ],
          },
        ],
      },
    },
  ]);
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <div className="bg-head">
      <div className="create-form-header-div">
        <div className="header-icons-form">
          <IconContext.Provider value={{ color: "#7248B9", size: "40px" }}>
            <SiGoogleforms />
          </IconContext.Provider>
          <p>Untilted Form</p>
          <div className="form-icons-left">
            <IconContext.Provider value={{ color: "#5F6368", size: "20px" }}>
              <FaRegFolder />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#5F6368", size: "20px" }}>
              <IoIosStarOutline />
            </IconContext.Provider>
          </div>
        </div>
        <div className="form-icons-right">
          <IconContext.Provider
            value={{ color: "#5F6368", size: "20px", fontWeight: "700" }}
          >
            <FaRegEye />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#5F6368", size: "20px", fontWeight: "700" }}
          >
            <LiaUndoSolid />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#5F6368", size: "20px", fontWeight: "700" }}
          >
            <LiaRedoSolid />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "#5F6368", size: "20px", fontWeight: "700" }}
          >
            <CiMenuKebab />
          </IconContext.Provider>
          <button className="send-btn">Send</button>
        </div>
      </div>
      <div className="form-tab">
        <p>Questions</p>
        <Link to="/responses" className="response-lnk">
          Responses
        </Link>
        <p>Settings</p>
      </div>
      <div className="divider-grid">
        {forms.map((form, fIndex) =>
          form.form.section.map((section, sIndex) => (
            <div key={sIndex}>
              <FormDetails
                section={section}
                setvalues={(updatedSection) => {
                  // Update the specific section in the form
                  const updatedForms = [...forms];
                  updatedForms[fIndex].form.section[sIndex] = {
                    ...updatedForms[fIndex].form.section[sIndex],
                    ...updatedSection, // Update only the changed fields
                  };
                  setForms(updatedForms);
                }}
                openQuestion={openQuestion}
                setOpenQuestion={setOpenQuestion}
              >
                {section.questions.map((question, qIndex) => (
                  <FormQuestion
                    key={qIndex}
                    question={question}
                    openQuestion={openQuestion}
                    setOpenQuestion={setOpenQuestion}
                    setQuestion={(updatedQuestion) => {
                      // Update the specific question in the form state
                      const updatedForms = [...forms];
                      updatedForms[fIndex].form.section[sIndex].questions[
                        qIndex
                      ] = {
                        ...updatedForms[fIndex].form.section[sIndex].questions[
                          qIndex
                        ],
                        ...updatedQuestion, // Update only the changed fields
                      };
                      setForms(updatedForms);
                    }}
                  />
                ))}
              </FormDetails>
            </div>
          ))
        )}
        {/* <div className="form-div">
          <form className="form-format">
            <div className="untilted-head">
              <TextEditorQuill />
            </div>
          </form>
          {FormDetails()}
        </div>
        <div>
          <SectionAppBar />
        </div> */}
      </div>
      {/* <div>{FormContainer()}</div> */}
    </div>
  );
};

export default FormModule;

const FormDetails = ({ children, section, setvalues }) => {
  const toolbarOptions = [
    ["bold", "italic", "underline"],
    ["link", "image"],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  const [isFocusedTitle, setIsFocusedTitle] = useState(false);
  const [isFocusedDescription, setIsFocusedDescription] = useState(false);

  const handleChangeTitle = (value) => {
    setvalues({ sectionTitle: value });
  };

  const handleChangeDes = (value) => {
    setvalues({ sectiondes: value });
  };
  return (
    <div className="inner">
      <div className="form-format">
        <div className="reactquill-textEditor">
        <ReactQuill
          theme="snow"
          modules={module}
          value={section.sectionTitle}
          onChange={handleChangeTitle}
          className={`custom-quill ${isFocusedTitle ? "focus" : ""}`}
          onFocus={() => setIsFocusedTitle(true)}
          onBlur={() => setIsFocusedTitle(false)}
          style={{width:"600px",fontSize:"28px"}}
        />
         <ReactQuill
          theme="snow"
          modules={module}
          value={section.sectiondes}
          onChange={handleChangeTitle}
          className={`custom-quill ${isFocusedTitle ? "focus" : ""}`}
          onFocus={() => setIsFocusedDescription(true)}
          onBlur={() => setIsFocusedDescription(false)}
          style={{width:"600px"}}
        />
      </div>
      </div>
      {/* Render children (FormQuestion components) here */}
      {children}
    </div>
  );
};

const FormQuestion = ({
  question,
  setOpenQuestion,
  openQuestion,
  setQuestion,
}) => {
  console.log(question);
  const toolbarOptions = [
    ["bold", "italic", "underline"],
    ["link", "image"],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  const handleQuestion = (value) => {
    setQuestion({ question: value });
  };
  return (
    <div className="form-card">
      <div>
      {/* <ReactQuill
        theme="snow"
        value={question.question}
        modules={module} // Conditionally show or hide toolbar
        onChange={handleQuestion}
        // className={`custom ${openQuestion === question.id ? "focus" : ""}`}
        onFocus={() => setOpenQuestion(question.id)}
        onBlur={() => setOpenQuestion(null)}
      /> */}
      </div>
      <FormOptions/>
    </div>
  );
};