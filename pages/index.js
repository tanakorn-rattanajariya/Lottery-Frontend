import React from "react";
import { Card } from "antd";
import Main from "./Main";
import HomeHighlight from "./home/highlight";
import HomeTopPredict from "./home/topPredict";
import HomeInfo from "./home/info";
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
