import ShowResult from "./showResult";
import Period from "./period";
import {Row,Col} from "antd";

export default function ResultLayout(props){
    return(
        <Row gutter={16}>
            <Col xl={17} md={24}>
                <ShowResult {...props} />
            </Col>
            <Col xl={7} md={24}>
                <Period {...props} />
            </Col>
        </Row>
        )
}