import { Row, Col, Card, Typography, Divider, Spin } from "antd";
import { setResultEqual,setResultNotEqual } from "logics/lotto";
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
  const { loading_result } = props.reducer.component;
  const {result} = props?.reducer?.lotto;
  var firstPrize = setResultEqual(result,"prizes", "prizeFirst");
  var otherTier = setResultNotEqual(result,"prizes", "prizeFirst");
  var runningNumbers = setResultNotEqual(result,"runningNumbers",null);
  return (
    <Card style={{ marginTop: 16 }}>
      {loading_result ? (
        <Spin style={{ display: "block", margin: "auto" }} />
      ) : (
        <>
          <Row style={{ textAlign: "center" }} gutter="16">
            <FirstTier firstTier={{ ...firstPrize, ...runningNumbers }} />
          </Row>
          <OtherTier otherTier={otherTier} />
        </>
      )}
    </Card>
  );
}

function FirstTier({firstTier}) {
  return (
    <>
      {firstTier &&
        (Object.keys(firstTier) || [])
        .sort((a, b) => firstTier[a].amount - firstTier[b].amount)
        .map((v, i) => {
          return (
            <Col
              key={v}
              style={styles[firstTier[v].id].style || {}}
              span={styles[firstTier[v].id].span || 24}
            >
              <Row key={i} justify='center' gutter={12}>
                {(firstTier[v].number || []).map((e, i) => {
                  return (
                      <Col key={e} xs={12} sm={8} lg={5} >
                        <Text type={styles[firstTier[v].id].textType}>
                          {e}
                        </Text>
                      </Col>
                  );
                })}
              </Row>
              <Title
                level={styles[firstTier[v].id].titleLevel || 0}
                style={{ marginTop: "0px" }}
              >
                {firstTier[v].name}
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
          <Col key={e} xs={8} sm={6} lg={4}>
            {e}
          </Col>
        ))}
      </Row>
    );
  });
}
