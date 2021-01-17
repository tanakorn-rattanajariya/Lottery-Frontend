import { Row, Col, Card, Typography, Divider, List } from "antd";
const { Title, Text } = Typography;

const styles = {
  prizeFirst: {
    style: { fontSize: 30 },
    span: 24,
    textType: "danger",
    titleLevel: 3,
  },
  runningNumberFrontThree: {
    style: { fontSize: 18 },
    span: 12,
    titleLevel: 5,
  },
  runningNumberBackThree: {
    style: { fontSize: 18 },
    span: 12,
    titleLevel: 5,
  },
  runningNumberBackTwo: {
    style: { fontSize: 24 },
    span: 24,
    titleLevel: 4,
  },
};

export default function ResultShowResult(props) {
  var firstPrize = (props?.reducer?.lotto.result?.prizes || [])
    .filter((v) => v.id === "prizeFirst")
    .reduce((acc, v) => {
      return { ...acc, [v.id]: v };
    }, {});
  var otherTier = (props?.reducer?.lotto.result?.prizes || [])
    .filter((v) => v.id !== "prizeFirst")
    .sort((a, b) => a.amount - b.amount)
    .reduce((acc, v) => {
      return {
        ...acc,
        [v.id]: v,
      };
    }, {});
  var runningNumbers = (
    props?.reducer.lotto.result?.runningNumbers || []
  ).reduce((acc, v) => {
    return { ...(acc || {}), [v.id]: { ...v } };
  }, {});
  return (
    <Card style={{ marginBottom: "12px" }}>
      <Row style={{ textAlign: "center" }} gutter="16">
        <FirstTier firstTier={{ ...firstPrize, ...runningNumbers }} />
      </Row>
      <OtherTier otherTier={otherTier} />
    </Card>
  );
}

function FirstTier(props) {
  return (
    <>
      {props.firstTier &&
        (Object.keys(props.firstTier) || []).map((v) => {
          return (
            <Col
              key={props.firstTier[v].id}
              style={styles[props.firstTier[v].id].style || {}}
              span={styles[props.firstTier[v].id].span || 24}
            >
              {(props.firstTier[v].number || []).map((e) => {
                return (
                  <Text type={styles[props.firstTier[v].id].textType}>{e}</Text>
                );
              })}
              <Title
                level={styles[props.firstTier[v].id].titleLevel || 0}
                style={{ marginTop: "0px" }}
              >
                {props.firstTier[v].name}
              </Title>
            </Col>
          );
        })}
    </>
  );
}

function OtherTier({ otherTier }) {
  return (Object.keys(otherTier || {}) || []).map((v) => {
    return (
      <Row
        key={v}
        style={{ textAlign: "center", fontSize: 16 }}
        gutter="16"
        justify="center"
      >
        <Divider />
        <Col span={24}>
          <Title level={5} style={{ marginTop: "0px" }}>
            {otherTier[v]?.name}
          </Title>
        </Col>
        {(otherTier[v]?.number || []).map((e) => (
          <Col key={e} span={4}>
            {e}
          </Col>
        ))}
      </Row>
    );
  });
  return null;
}
