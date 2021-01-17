import {Card,Col,Typography} from "antd";
const {Title,Text} = Typography;
import Router from "next/router";

export default function Period(props){
    const _on_click_each_period = (e)=>{
        Router.push({
            pathname: '/result',
            query: { period: e}
        });
    }
    return (
        <Card>
            <Title level={2}>ผลสลากย้อนหลัง</Title>
            {(props?.reducer?.lotto.results||[]).map(v=>{
                return(
                    <div key={v.id} style={{padding:"8px 0"}}>
                        <a onClick={()=>_on_click_each_period(v.url)}>{v.date}</a>    
                    </div>
                )
            })}
        </Card>
    )
}