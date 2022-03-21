import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "./../../Store/actions/language";

export default function ChangeLanguage() {
  const lang = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();
  const changeLanguageFunc = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
  };

 return (
    <div>
      {/* <h1>Current language : {lang}</h1>
      <button className="btn btn-primary" onClick={() => changeLanguageFunc()}>
        Change Language
      </button> */}
    </div>
  );
}