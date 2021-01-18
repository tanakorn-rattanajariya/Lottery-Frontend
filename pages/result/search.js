import { Input, Typography } from "antd";
import React from "react";
import { setWinningPrize } from "logics/lotto";
const { Text, Title } = Typography;

export default function SearchResult(props) {
  const { result } = props?.reducer.lotto;
  const [winningPrizes, setWinningPrizes] = React.useState();
  const [winningRunning, setWinningRunning] = React.useState();
  console.log(winningRunning);
  const checkResult = (value) => {
    setWinningPrizes(setWinningPrize(result, value));
    setWinningRunning(
      (result?.runningNumbers || [])
        .map((v) => {
          var length = value?.length;
          switch (v.id) {
            case "runningNumberFrontThree":
              if (
                (v.number || []).filter(
                  (e) => e === value.toString().substring(0, 3)
                ).length > 0
              ) {
                return v;
              }
              return;
            case "runningNumberBackThree":
              if (
                (v.number || []).filter(
                  (e) => e === value.toString().substring(length - 3, length)
                ).length > 0
              ) {
                return v;
              }
              return;
            case "runningNumberBackTwo":
              if (
                (v.number || []).filter(
                  (e) => e === value.toString().substring(length - 2, length)
                ).length > 0
              ) {
                return v;
              }
              return;
            default:
              return;
          }
        })
        .reduce((acc, v) => (v ? { ...acc, [v.id]: v } : acc), {})
    );
  };
  return (
    <div style={{ marginTop: "16px" }}>
      <Input.Search onSearch={(e) => checkResult(e)} />
      {winningPrizes && winningRunning ? (
        Object.keys(winningPrizes).length > 0 ||
        Object.keys(winningRunning).length > 0 ? (
          <div>
            {Object.keys(winningPrizes).map((v) => {
              return (
                <div key={v}>
                  <Text>{winningPrizes[v].id}</Text>
                </div>
              );
            })}
            {Object.keys(winningRunning).map((v) => {
              console.log(v);
              return (
                <div key={v}>
                  <Text>{winningRunning[v].id}</Text>
                </div>
              );
            })}
          </div>
        ) : (
          <Text>คุณไม่ถูกรางวัล</Text>
        )
      ) : null}
    </div>
  );
}
