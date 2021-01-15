import React from "react";
import { Card } from "antd";
import Main from "../Main";
import HomeHighlight from "./highlight";
import HomeTopPredict from "./topPredict";
import HomeInfo from "./info";
export default function Home() {
  return (
    <Main>
      <ComponentDidMount />
      <HomeHighlight />
      <HomeTopPredict />
      <HomeInfo />
    </Main>
  );
}

function ComponentDidMount(props) {
  return <></>;
}
