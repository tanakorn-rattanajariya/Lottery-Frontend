import { Card, Col, Typography, Tabs, Affix, Skeleton } from "antd";
const { Title, Text } = Typography;
const { TabPane } = Tabs;
import Router from "next/router";
import ResultShowResult from "./showResult";
export default function ResultPeriod(props) {
  const { setCurrent } = props;
  const { results } = props.reducer.lotto;
  const { loading_results } = props.reducer.component;
  const onChageTab = (e) => {
    setCurrent(e);
  };
  return (
    <Affix offsetTop={65}>
      <Card>
        <Tabs onChange={onChageTab} defaultActiveKey="1">
          {(results || []).map((v, i) => {
            return (
              <TabPane
                tab={
                  loading_results ? (
                    <Skeleton.Button
                      size="small"
                      style={{ width: 100 }}
                      active={true}
                    />
                  ) : (
                    v.date
                  )
                }
                key={v.id}
              ></TabPane>
            );
          })}
        </Tabs>
      </Card>
    </Affix>
  );
}
