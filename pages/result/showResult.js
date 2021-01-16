import {Row,Col,Card,Typography} from "antd";
const { Title, Text } = Typography;

const styles = {
    BIGPRIZE: {
        style:{fontSize: 30},
        span: 24,
        textType:"danger",
        titleLevel:3
    },
    THREEFIRST: {
        style:{fontSize: 18},
        span: 12,
        titleLevel:5
    },
    THREELAST: {
        style:{fontSize: 18},
        span: 12,
        titleLevel:5
    },
    TWOLAST:{
        style:{fontSize: 24},
        span: 24,
        titleLevel:4
    }
};

export default function ShowResult(props){
    console.log(props);
    const resultList = [
        { number: "000000",type:"BIGPRIZE",description:"รางวัลที่ 1" },
        { number:"01",type:"TWOLAST",description:"รางวัลเลขท้าย 2 ตัว"},
        { number:"555",type:"THREEFIRST",description:"รางวัลเลขหน้า 3 ตัว"},
        { number:"333",type:"THREELAST",description:"รางวัลเลขท้าย 3 ตัว"}
    ];
    return (
        <Card>
            <Row style={{textAlign:"center"}} gutter="16px">
                {(resultList||[]).map(v=>{
                    return (
                        <Col style={styles[v.type].style || {}} span={styles[v.type].span || 24}>
                            <Text type={styles[v.type].textType}>{v.number}</Text>
                            <Title level={styles[v.type].titleLevel} style={{marginTop:"0px"}}>{v.description}</Title>
                        </Col>
                    )
                })}
            </Row>
        </Card>
    )
}