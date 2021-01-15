import React from "react";
import { List, Avatar, Row, Col, Button } from "antd";
import { LikeOutlined } from "@ant-design/icons";
export default function HomeTopPredict(props) {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
  ];
  return (
    <Row style={{ marginTop: 48 }}>
      <Col xs={{ span: 2 }} sm={{ span: 6 }}></Col>
      <Col xs={{ span: 20 }} sm={{ span: 12 }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    size="large"
                    src="https://i.pinimg.com/originals/73/53/c5/7353c51b554cd1458feda80eb57b753d.jpg"
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={
                  <>
                    <div style={{ marginBottom: 8 }}>
                      {
                        "Ant Design, a design language for background applications, is refined by Ant UED Team"
                      }
                    </div>
                    <a>
                      <LikeOutlined style={{ marginRight: 4 }} />
                      157
                    </a>
                  </>
                }
              />
            </List.Item>
          )}
        />
        <Button
          size="large"
          style={{ margin: "16px auto", display: "block", width: 200 }}
        >
          ดูเพิ่มเติม
        </Button>
      </Col>
      <Col xs={{ span: 2 }} sm={{ span: 6 }}></Col>
    </Row>
  );
}
