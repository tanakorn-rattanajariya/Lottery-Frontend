import React from 'react';
import {Card,Avatar,Typography,Divider,Button } from 'antd';
const {Text,Title} = Typography;
import { PhoneOutlined, MobileOutlined, HomeOutlined,BellOutlined } from '@ant-design/icons';


export default function UserDetail(props){
    const profile =props?.reducer.user?.profile;
    console.log(profile)
    return (
        <>
            {profile &&
                <div style={{textAlign: 'center'}}>
                    <Avatar
                        size={100}
                        src="https://i.pinimg.com/originals/73/53/c5/7353c51b554cd1458feda80eb57b753d.jpg"
                        style={{margin:"16px"}}
                    />
                    <Title level={2}>{profile.firstName+' '+profile.lastName}</Title>
                    <Card style={{textAlign:'left'}}>
                        <div style={{position:'absolute',top:'2%',right:'5%'}}>
                            <Button style={{backgroundColor:"initial"}} type="text" icon={<BellOutlined />}/>
                        </div>
                        <div>
                            <Text><MobileOutlined style={{padding:'6px'}}/>{profile.homePhone}</Text>
                        </div>
                        <div>
                            <Text><PhoneOutlined style={{padding:'6px'}}/>{profile.mobilePhone}</Text>
                        </div>
                        <div>
                            <Text><HomeOutlined style={{padding:'6px'}}/>{profile.address}</Text>
                        </div>
                        <Divider/>
                        <div><Text>{profile.description}</Text></div>
                    </Card>
                </div>
            }
        </>
    )
}