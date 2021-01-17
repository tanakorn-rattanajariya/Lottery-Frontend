import React from "react";
import Main from "../Main";
import ResultPeriod from "./period";
import ResultShowResult from "./showResult";
import { useRouter } from "next/router";

export default function ResultPage(props) {
  return (
    <Main>
      <ComponentDidMount />
      <MainComponent />
    </Main>
  );
}

function ComponentDidMount({ action }) {
  var params = useRouter();
  React.useEffect(() => {
    action.lotto("GET", "RESULT", {}, params.query?.period || "17012564");
    action.lotto("LIST", "RESULT");
  }, []);
  return <></>;
}
function MainComponent(props) {
  return (
    <>
      <ResultPeriod {...props} />
      <ResultShowResult {...props} />
    </>
  );
}
