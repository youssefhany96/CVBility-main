import TemplateContext from "./TemplateContext";
import axiosInstance from "../utils/axiosInstance";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TemplateState(props) {
  const navigate = useNavigate();
  const [template, settemplate] = useState(null);
  const [data, setdata] = useState(null);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [documents, setDocuments] = useState(null);
  const [docList, setdocList] = useState([]);
  const [DocData, setDocData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ContactInfo, setContactInfo] = useState(null);
  const [newId, setNewId] = useState("");
  const Init = () => {
    if (localStorage.getItem("user_data") != null) {
      const userData = JSON.parse(localStorage.getItem("user_data"));
      setdata(userData);
      setToken(userData.token.access);
      setRefreshToken(userData.token.refresh);
    }
  };

  const AllTemplates = async () => {
    const response = await axiosInstance.get("resume_templates/");
    settemplate(response.data);
  };

  const Login = async (data) => {
    const response = await axiosInstance.post("login/", data);
    localStorage.setItem("user_data", JSON.stringify(response.data));
    setdata(response.data);
    setToken(response.data.token.access);
    setRefreshToken(response.data.token.refresh);

    // setInterval(function() {

    // refresh token api
    // }, 5000);
  };
  const Logout = async () => {
    localStorage.removeItem("user_data");
    setdata(null);
    setToken(null);
    setRefreshToken(null);
  };

  const Refresh = async () => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const response = await axiosInstance.post(
      "login/refresh/",
      {
        refresh: userData.token.refresh,
      },
      {
        headers: {
          Authorization: `Bearer ${userData.token.access}`,
        },
      }
    );
    userData.token.access = response.data.access;
    localStorage.setItem("user_data", JSON.stringify(userData));
    setToken(response.data.access);
  };

  const UserRegister = async (data) => {
    const response = await axiosInstance.post("register/", data);

    localStorage.setItem("user_data", JSON.stringify(response.data));
    setdata(response.data);
    setToken(response.data.token.access);
  };

  const CreateDocument = async (data) => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const response = await axiosInstance.post("create-document/", data, {
      headers: {
        Authorization: `Bearer ${userData?.token?.access}`,
      },
    });
    setNewId(response.data.document.docID);
    navigate(`/create/${response.data.document.docID}`);
  };
  const Alldocuments = async (type) => {
    setIsLoading(true);
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const response = await axiosInstance.get(`list/documents/?type=${type}`, {
      headers: {
        Authorization: `Bearer ${userData.token.access}`,
      },
    });

    setDocuments(response.data);
    setdocList(response.data.docs);
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  };

  const Document = async (id, isUpdate,callback) => {
    if(!isUpdate){
      setIsLoading(true);
    }
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const response = await axiosInstance.get(`document/?docID=${id}`, {
      headers: {
        Authorization: `Bearer ${userData?.token?.access}`,
      },
    });
    console.log('response.data: ', response.data);
    setDocData(response.data);
    setContactInfo(response.data.sections[0].sect_data.data);
    if(!isUpdate){
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    }else{
      callback()
    }
  };
  const ChangeDocName = async (data) => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const response = await axiosInstance.put(`document/`, data, {
      headers: {
        Authorization: `Bearer ${userData.token.access}`,
      },
    });
  };
  const ModifyContact = async (data) => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const response = await axiosInstance.put(`modify/contact-details/`, data, {
      headers: {
        Authorization: `Bearer ${userData.token.access}`,
      },
    });
  };
  const ModifyDoc = async (data) => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    const response = await axiosInstance.put(`modify/document/`, data, {
      headers: {
        Authorization: `Bearer ${userData.token.access}`,
      },
    });
  };

  return (
    <TemplateContext.Provider
      value={{
        AllTemplates,
        CreateDocument,
        template,
        Login,
        data,
        Logout,
        UserRegister,
        Init,
        Refresh,
        Alldocuments,
        documents,
        Document,
        DocData,
        ChangeDocName,
        isLoading,
        docList,
        ContactInfo,
        setContactInfo,
        ModifyContact,
        newId,
        ModifyDoc,
      }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
}
