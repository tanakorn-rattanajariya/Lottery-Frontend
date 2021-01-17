import React from "react";
import Main from "../Main";
import ShowResult from "./showResult";
import Period from "./period";

export default function ResultPage(props) {
  return (
    <Main>
      <ComponentDidMount />
      <Period {...props} />
      <ShowResult {...props} />
      
    </Main>
  );
}

function ComponentDidMount({ action }) {
  React.useEffect(() => {
    action.lotto("LIST", "RESULT");
    action.lotto("GET", "RESULT", {}, "17012564");
  }, []);
  return <></>;
}
