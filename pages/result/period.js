import {Card,Col,Typography} from "antd";
const {Title,Text} = Typography;

export default function Period(props){
    console.log(props.reducer.lotto)
    return (
        <Card>
            <Title level={2}>ผลสลากย้อนหลัง</Title>
            {(props?.reducer?.lotto.results||[]).map(v=>{
                return(
                    <div style={{padding:"12px"}}>{v.date}</div>
                )
            })}
        </Card>
    )
}