import React, { Children, useCallback, userState, useState } from "react";
import apiRequest from "../libs/apiRequest";
import { SmallButton } from "./Buttons";
import MessageBox from "./MessageBox";
import { useTranslation } from "react-i18next";

const FileUpload = ({
   Children, 
   gid,
   location,
   color,
   imageOnly,
   single,
   done,
   callback,
   width,

}) => {
     const [message, setMessage] = useState('');

     const { t } = useTranslation(single);

     const onButtonClick = useCallback(() => {



        
     })
}