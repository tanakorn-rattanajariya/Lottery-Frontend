import React from "react";
import { Row, Col, Card, Typography } from "antd";
const { Title, Text } = Typography;
const styles = {
  aiText: {
    margin: "0 16px",
    fontSize: 30,
  },
};
export default function HomeHighlight(props) {
  const { reducer } = props;
  const { top1 } = reducer.lotto.dashboard;
  return (
    <>
      <Card
        style={{
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 30 }}>เลขเด็ดงวดนี้</div>
        <div style={{ fontSize: 90, fontWeight: 600 }}>{top1}</div>
        <AIRecommendComponent {...props} />
      </Card>
    </>
  );
}
function AIRecommendComponent(props) {
  const { reducer } = props;
  const { top2, top3, top4, top5 } = reducer.lotto.dashboard;
  return (
    <div>
      <span style={styles.aiText}>{top2}</span>
      <span style={styles.aiText}>{top3}</span>
      <span style={styles.aiText}>{top4}</span>
      <span style={styles.aiText}>{top5}</span>
    </div>
  );
}
