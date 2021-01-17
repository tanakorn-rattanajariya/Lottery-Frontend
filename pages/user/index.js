import Main from '../Main';
import React from 'react';
import UserLayout from './userLayout';

export default function UserPage(props) {
    return(
        <Main>
            <ComponentDidMount />
            <UserLayout {...props}/>
        </Main>
    )
};

function ComponentDidMount({ action }) {
    return <></>;
}