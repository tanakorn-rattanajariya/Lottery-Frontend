import { Card, Col, Typography, Tabs, Affix } from "antd";
const { Title, Text } = Typography;
const { TabPane } = Tabs;
import Router from "next/router";

export default function ResultPeriod(props) {
  const _on_click_each_period = (e) => {
    Router.push({
      pathname: "/result",
      query: { period: e },
    });
  };
  const { results } = props?.reducer?.lotto;
  return (
    <Affix offsetTop={65}>
      <Card>
        <Title level={2}>ผลสลากย้อนหลัง</Title>
        <Tabs defaultActiveKey="1">
          {(results || []).map((v, i) => {
            return <TabPane tab={v.date} key={i}></TabPane>;
          })}
        </Tabs>
      </Card>
    </Affix>
  );
}
