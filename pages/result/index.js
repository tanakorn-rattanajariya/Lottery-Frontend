import React from "react";
import Main from "../Main";
import ResultLayout from "./ResultLayout";
import { useRouter } from 'next/router'

export default function ResultPage(props) {
  return (
    <Main>
      <ComponentDidMount />
      <ResultLayout {...props} />
    </Main>
  );
}

function ComponentDidMount({ action }) {
  
  var params = useRouter();
  console.log(params);
  React.useEffect(() => {
    action.lotto("GET", "RESULT", {}, params.query?.period||"17012564");
    action.lotto("LIST", "RESULT");
  }, []);
  return <></>;
}
