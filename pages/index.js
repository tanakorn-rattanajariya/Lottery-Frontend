import React from "react";
import { Card } from "antd";
import Main from "./Main";
import HomeHighlight from "./home/highlight";
import HomeTopPredict from "./home/topPredict";
import HomeInfo from "./home/info";
import HomeFooter from "./home/footer";
export default function Home() {
  return (
    <Main>
      <ComponentDidMount />
      <HomeHighlight />
      <HomeTopPredict />
      <HomeInfo />
      <HomeFooter />
    </Main>
  );
}

function ComponentDidMount(props) {
  return <></>;
}
