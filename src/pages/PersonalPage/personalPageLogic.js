import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://e372773410ac.ngrok.io"
});

const PersonalPageLogic = (info = null) => {
  const [isLoading, setisLoading] = useState(info ? false : true);
  const [personalInfo, setpersonalInfo] = useState(info ? info : {});
  const [nameValidation, setnameValidation] = useState("");
  const [genderValidation, setgenderValidation] = useState("");
  const [phoneValidation, setphoneValidation] = useState("");
  const [birthValidation, setbirthValidation] = useState("");
  const [countyValidation, setcountyValidation] = useState("");

  useEffect(() => {
    if (!info) getPersonalInfo(1);
  }, [info]);
  const getPersonalInfo = async id => {
    console.log("getting");
    await api.get("/api/user/" + id).then(res => {
      setisLoading(false);
      res.data.users.gender = res.data.users.gender ? "男" : "女";
      console.log(res.data.users.name)
      setpersonalInfo(res.data);
    });
  };

  const handleNameChange = event => {
    const value = event.target.value;
    setpersonalInfo({ ...personalInfo, name: value });
    if (value == "") {
      setnameValidation("姓名不可為空");
    } else {
      setnameValidation("");
    }
  };

  const handleSexChange = event => {
    const value = event.target.value;
    setpersonalInfo({ ...personalInfo, gender: value });
    if (value == "男" || value == "女") {
      setgenderValidation("");
    } else {
      setgenderValidation("請填入 男 或 女");
    }
  };

  const handleTelChange = event => {
    const value = event.target.value;
    setpersonalInfo({ ...personalInfo, phone_number: value });
    let reg = new RegExp(/^\d*$/).test(value);
    if (reg) {
      setphoneValidation("");
    } else {
      setphoneValidation("只允許數字");
    }
  };
  const handleBirthChange = event => {
    setpersonalInfo({ ...personalInfo, birth: event.target.value });
  };

  const handleCountyChange = event => {
    const value = event.target.value;
    setpersonalInfo({
      ...personalInfo,
      county: { ...personalInfo.county, name: value }
    });
  };
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const updateInfo = async (id, data) => {
    setisLoading(true);
    if (data.croppedImage) {
      let blob = await fetch(data.croppedImage).then(r => r.blob());
      const file = new File([blob], "1234567890.jpg", {
        lastModified: new Date(),
        type: "image/jpeg"
      });
      const b64 = await getBase64(file);
      data.croppedImage = b64;
    }
    return api
      .put("/api/user/" + id, {
        name: data.name,
        gender: data.gender,
        phone_number: data.phone_number,
        birth: data.birth,
        image: data.croppedImage ? data.croppedImage : data.image,
        county: data.county
      })
      .then(res => {
        return res.status;
      });
  };

  return {
    isLoading,
    personalInfo,
    handleNameChange,
    handleSexChange,
    handleTelChange,
    handleBirthChange,
    handleCountyChange,
    updateInfo,
    getPersonalInfo,
    validations: {
      nameValidation,
      genderValidation,
      phoneValidation,
      birthValidation,
      countyValidation
    }
  };
};
export default PersonalPageLogic;
