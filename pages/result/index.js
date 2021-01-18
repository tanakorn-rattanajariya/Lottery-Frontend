import React from "react";
import Main from "../Main";
import ResultPeriod from "./period";
import ResultShowResult from "./showResult";
import SearchResult from './search';
import { useRouter } from "next/router";

export default function ResultPage(props) {
  /**
   * @desc current period
   */
  const [current, setCurrent] = React.useState();
  return (
    <Main>
      <ComponentDidMount current={current} setCurrent={setCurrent} />
      <MainComponent setCurrent={setCurrent} />
    </Main>
  );
}

function ComponentDidMount({ action, current, reducer, setCurrent }) {
  var params = useRouter();
  const { results } = reducer.lotto;
  /**
   * @desc initial state
   */
  React.useEffect(() => {
    action.lotto("LIST", "RESULT");
  }, []);
  /**
   * @desc get current period from results
   * @param { [{id,key,url,date}] } results
   */
  React.useEffect(() => {
    if ((results || []).length > 0) {
      setCurrent(results.last().id);
    }
  }, [results]);
  /**
   * @desc hadler when current period change
   * @param { id } current
   */
  React.useEffect(() => {
    if (current) {
      action.lotto("GET", "RESULT", {}, current);
    }
  }, [current]);
  return <></>;
}
function MainComponent(props) {
  return (
    <>
      <ResultPeriod {...props} />
      <SearchResult {...props} />
      <ResultShowResult {...props} />
    </>
  );
}
