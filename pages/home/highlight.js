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
  return (
    <>
      <Card
        style={{
          textAlign: "center",
        }}
      >
        <Title style={{ fontSize: 90 }}>47</Title>
        <AIRecommendComponent {...props} />
      </Card>
    </>
  );
}
function AIRecommendComponent(props) {
  return (
    <div>
      <Text style={styles.aiText} strong>
        38
      </Text>
      <Text style={styles.aiText} strong>
        50
      </Text>
      <Text style={styles.aiText} strong>
        62
      </Text>
    </div>
  );
}
