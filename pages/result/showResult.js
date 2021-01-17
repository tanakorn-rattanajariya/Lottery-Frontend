import { Row, Col, Card, Typography, Divider, List } from "antd";
const { Title, Text } = Typography;

const styles = {
  BIGREWARD: {
    style: { fontSize: 30 },
    span: 24,
    textType: "danger",
    titleLevel: 3,
  },
  THREEFIRST: {
    style: { fontSize: 18 },
    span: 12,
    titleLevel: 5,
  },
  THREELAST: {
    style: { fontSize: 18 },
    span: 12,
    titleLevel: 5,
  },
  TWOLAST: {
    style: { fontSize: 24 },
    span: 24,
    titleLevel: 4,
  },
};

export default function ShowResult(props) {
  console.log(props);
  var firstTier = (props?.reducer?.lotto.resultList || []).filter(
    (v) => v.tier === 1
  );
  var otherTier = {};
  (props?.reducer?.lotto.resultList || [])
    .filter((v) => v.tier != 1)
    .map((v) => {
      otherTier = {
        ...otherTier,
        [v.tier]: {
          resultList: [...(otherTier[v.tier]?.resultList || []), v],
          description: v.description,
          type: v.type,
        },
      };
    });
  return (
    <Card style={{margin: "12px 0"}}>
      <Row style={{ textAlign: "center" }} gutter="16">
        <FirstTier firstTierList={firstTier} />
      </Row>
      <OtherTier otherTier={otherTier} />
    </Card>
  );
}

function FirstTier(props) {
  return (
    <>
      {(props.firstTierList || []).map((v) => {
        return (
          <Col
            key={v.number}
            style={styles[v.type].style || {}}
            span={styles[v.type].span || 24}
          >
            <Text type={styles[v.type].textType}>{v.number}</Text>
            <Title
              level={styles[v.type].titleLevel || 0}
              style={{ marginTop: "0px" }}
            >
              {v.description}
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
            {otherTier[v]?.description}
          </Title>
        </Col>
        {(otherTier[v]?.resultList || []).map((e) => (
          <Col key={e?.number} span={4}>
            {e?.number}
          </Col>
        ))}
      </Row>
    );
  });
}
