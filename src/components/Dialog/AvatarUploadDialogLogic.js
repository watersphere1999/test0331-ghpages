import React, { useRef, useState } from "react";
import AvatarUploadDialog from "./AvatarUploadDialog";

const AvatarUploadDialogLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef();
  const openDialog = () => {
    //開彈跳視窗
    setIsOpen(true);
  };
  const closeDialog = () => {
    //關彈跳視窗
    setIsOpen(false);
  };
  const triggerImageInput = () => {
    //觸發頭貼input
    inputRef.current.click();
  };

  return { isOpen, openDialog, closeDialog, inputRef, triggerImageInput };
};

export default AvatarUploadDialogLogic;
