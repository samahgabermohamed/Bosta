import React from 'react';
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