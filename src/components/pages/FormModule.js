import React, { useState } from "react";
import "../styles/Form.css";
import { FaRegEye, FaRegFolder } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiGoogleforms } from "react-icons/si";
import { LiaRedoSolid, LiaUndoSolid } from "react-icons/lia";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import FormOptions from "./FormOptions";

const FormModule = () => {
  const [forms, setForms] = useState([
    {
      form: {
        id: "1234567890",
        formTitle: "UnTitled Form",
        formDes: "UnTitled Description",
        section: [
          {
            sectionId: "123456789",
            sectionTitle: "Contact",
            sectiondes: "UserDetails",
            questions: [
              {
                id: 1,
                question: "Untitled Question",
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
          <p>Untitled Form</p>
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
            <FormDetails
              key={section.sectionId}
              section={section}
              setvalues={(updatedSection) => {
                const updatedForms = [...forms];
                updatedForms[fIndex].form.section[sIndex] = {
                  ...updatedForms[fIndex].form.section[sIndex],
                  ...updatedSection,
                };
                setForms(updatedForms);
              }}
              openQuestion={openQuestion}
              setOpenQuestion={setOpenQuestion}
            >
              {section.questions.map((question, qIndex) => (
                <FormQuestion
                  key={question.id}
                  question={question}
                  openQuestion={openQuestion}
                  setOpenQuestion={setOpenQuestion}
                  setQuestion={(updatedQuestion) => {
                    const updatedForms = [...forms];
                    updatedForms[fIndex].form.section[sIndex].questions[qIndex] =
                      {
                        ...updatedForms[fIndex].form.section[sIndex].questions[
                          qIndex
                        ],
                        ...updatedQuestion,
                      };
                    setForms(updatedForms);
                  }}
                />
              ))}
            </FormDetails>
          ))
        )}
      </div>
    </div>
  );
};

export default FormModule;

const FormDetails = ({ children, section, setvalues }) => {
  const toolbarOptions = [["bold", "italic", "underline"], ["link", "image"]];
  const module = { toolbar: toolbarOptions };

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
            style={{ width: "600px", fontSize: "28px" }}
          />
          <ReactQuill
            theme="snow"          
            modules={module}
            value={section.sectiondes}
            onChange={handleChangeDes} // Updated function 
            className={`custom-quill ${isFocusedDescription ? "focus" : ""}`}
            onFocus={() => setIsFocusedDescription(true)}
            onBlur={() => setIsFocusedDescription(false)}
            style={{ width: "600px" }}
          />
        </div>
      </div>
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
  const toolbarOptions = [["bold", "italic", "underline"], ["link", "image"]];
  const module = { toolbar: toolbarOptions };

  const handleQuestion = (value) => {
    setQuestion({ question: value });
  };

  return (
    <div className="form-card">
      <ReactQuill
        theme="snow"
        value={question.question}
        modules={module}
        onChange={handleQuestion}
        className={`custom ${openQuestion === question.id ? "focus" : ""}`}
        onFocus={() => setOpenQuestion(question.id)}
        onBlur={() => setOpenQuestion(null)}
      />
  
      </div>
  );
};
