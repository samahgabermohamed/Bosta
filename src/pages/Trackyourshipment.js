// import { useState, useEffect } from "react";
// import UserData from "../components/UserData/UserData";

// import ChangeLanguage from "../components/change-lang/Changelanguage";

// function Trackyourshipment() {

//   return (
//     <>
//      {/* <ChangeLanguage /> */}
// {/* 
//     </>
//   );
// }

// export default Trackyourshipment; */}






import React from "react";
import { connect } from "react-redux";
import ChangeLanguage from "../components/change-lang/Changelanguage";
import { changeLanguage } from "../Store/actions/language";

class Trackyourshipment extends React.Component {
  render() {
    console.log("RENDER");
    console.log(this.props);
    return (
      <>
        <ChangeLanguage />
        {/* <hr />
        <h3 className="text-success">
          Class Component Language : {this.props.lang}
        </h3>
        <h1>Hello from Class Component</h1>
        <button className="btn btn-danger" onClick={() => this.props.changeLanguage(this.props.lang === "ar" ? "en" : "ar")}>
          Change Lang
        </button> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.language.lang,
  };
};

export default connect(mapStateToProps, {
  changeLanguage,
})(Trackyourshipment);