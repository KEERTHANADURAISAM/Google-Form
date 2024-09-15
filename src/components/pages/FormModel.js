import React from "react";
import "../styles/Form.css";
import { BiCustomize, BiUndo } from "react-icons/bi";
import { FaRegEye, FaRegFolder } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiGoogleforms } from "react-icons/si";
import { LiaRedoSolid, LiaUndoSolid } from "react-icons/lia";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";

import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import SectionAppBar from "./SectionAppBar";
import MainCard from "./MainCard";
import TextEditorQuill from "./TextEditorQuill";
import FormContainer from "./FormContainer";
const FormModel = () => {
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
      <div className="form-div">
        <form className="form-format">
          <div className="untilted-head">
            <TextEditorQuill/>
          
          </div>
        </form>
      </div>
      <div>
        <SectionAppBar/>
      </div>
      </div>
      <div>
        <FormContainer/>
      </div>
    </div>
  
    
   
  );
};

export default FormModel;
