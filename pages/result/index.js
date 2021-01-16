import React from "react";
import Main from "../Main";
import ShowResult from "./showResult";
export default function ResultPage(props) {
    console.log(props);
    return (
        <Main>
            <ComponentDidMount />
            <ShowResult {...props}/>
        </Main>
    );
}

function ComponentDidMount(props) {
    return <></>;
  }
  

