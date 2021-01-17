import {Card,Image,Typography,Avatar,Divider,Row,Col,Button} from 'antd';
const {Text,Title} = Typography;
import { LikeOutlined,CommentOutlined,ShareAltOutlined } from '@ant-design/icons';

export default function UserFeed(props){
    const feedList = props?.reducer.user?.feedList||[];
    
    return(
        <> 
            {feedList.map(v=>{
                return(
                    <Card>
                       <FeedDetail item={v} {...props}/>
                       <InteractionDetail item={v}/>
                    </Card>
                )
            })}
        </>
    )
}

function FeedDetail(props){
    const profile =props?.reducer.user?.profile;
    return(
        <>
             <div style={{display:"inline-block"}}>
                <Avatar
                    size={30}
                    src="https://i.pinimg.com/originals/73/53/c5/7353c51b554cd1458feda80eb57b753d.jpg"
                />
            </div>
                        
            <span style={{display:"inline-block"}}>
                <Title level={5}>{profile.firstName+' '+profile.lastName}</Title>
                <Text>{props?.item.date}</Text>
            </span>
            <div style={{textAlign: 'center',margin:'12px'}}>{props?.item.image && <Image src={props?.item.image} width={300} />}</div>
            <div>
                <Text><div dangerouslySetInnerHTML={{ __html: props?.item.text||'' }} /></Text>
            </div>
        </>
    )
}

function InteractionDetail(props){
    return(
        <div style={{marginTop:'6px'}}>
            <Row>
                <Col span={12}>
                    <LikeOutlined />
                    <Text style={{marginLeft:'4px'}}>{props?.item.like}</Text>
                </Col>
                <Col span={12} style={{textAlign:'right'}}>
                    <Text>Comment {props?.item.comments?.length}</Text>
                    <Text style={{marginLeft:'6px'}}>Share {props?.item.share}</Text>
                </Col>
            </Row>
            <Divider style={{margin:'12px 0'}} />
            <Row>
                <Col><Button style={{backgroundColor:"initial"}} type="text" icon={<LikeOutlined />}>Like</Button></Col>
                <Col><Button style={{backgroundColor:"initial"}} type="text" icon={<CommentOutlined />}>Comment</Button></Col>
                <Col><Button style={{backgroundColor:"initial"}} type="text" icon={<ShareAltOutlined />}>Share</Button></Col>
            </Row>
        </div>
    )
}