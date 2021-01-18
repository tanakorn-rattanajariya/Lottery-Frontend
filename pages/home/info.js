import React from "react";
import { Divider, Typography, Row, Col, Avatar } from "antd";
const { Title, Text } = Typography;
import imgServer from "images/server.svg";
export default function HomeInfo(props) {
  const data = [
    {
      title: "เรานับเลขจากสถิติ 1",
      description:
        "วืดซ้อปาสคาลฟิวเจอร์ เบอร์รี เพียว คลาสสิก อุปนายกราเมนไมเกรนหล่อฮังก้วย อิกัวนาแคปแรงใจกษัตริยาธิราช",
    },
    {
      title: "เรานับเลขจากสถิติ 2",
      description:
        "วืดซ้อปาสคาลฟิวเจอร์ เบอร์รี เพียว คลาสสิก อุปนายกราเมนไมเกรนหล่อฮังก้วย",
    },
    {
      title: "เรานับเลขจากสถิติ 3",
      description:
        "ฉลุย สเต็ปสถาปัตย์ แฟ้บออร์แกนิกทอล์คไฟต์ ฟีเวอร์ฮวงจุ้ยซื่อบื้อกรีนบ๊วย ขั้นตอนคอลัมน์อีสเตอร์ลิมิตแช่แข็ง บึมจิ๊กโซลาร์ดีมานด์ สตริงนพมาศปาร์ตี้ควิก บิ๊ก ไอซียูสแล็ก อมาตยาธิปไตยออโต้ไฟลท์",
    },
  ];
  return (
    <>
      <Divider />
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Title level={3}>เลขเด็ด AI คืออะไร ?</Title>
        <Row style={{ marginTop: 48 }} gutter={8}>
          <Col xs={{ span: 0 }} sm={{ span: 3 }}></Col>
          <Col xs={{ span: 0 }} sm={{ span: 18 }}>
            <Row gutter={48}>
              {(data || []).map((v) => (
                <InfoComponent key={v.title} item={v} />
              ))}
            </Row>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 3 }}></Col>
        </Row>
      </div>
    </>
  );
}

function InfoComponent({ item }) {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 8 }}>
      <Avatar size={100}>
        <img src={imgServer} style={{ width: 60, height: 60 }}></img>
      </Avatar>
      <Title style={{ marginTop: 24 }} level={4}>
        {item.title}
      </Title>
      <Text type="description">{item.description}</Text>
    </Col>
  );
}
