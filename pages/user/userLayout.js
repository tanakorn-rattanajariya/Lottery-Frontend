import React from 'react';
import {Row,Col} from 'antd';
import UserDetail from './detail';
import UserFeed from './feed';

export default function UserLayout(props){
    return (
        <>
            <Row gutter={16}>
                <Col span={6}>
                    <UserDetail {...props} />
                </Col>
                <Col span={18}>
                    <UserFeed {...props} />
                </Col>
            </Row>
        </>
    )
}