import React,{ FC, useState} from 'react';
import { useActionData, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface IUser {
	id: String,
	name: String,
	username: String,
	email: String,
	phone: String
}
const Profile:FC = () => {
    let {id} = useParams();
    return (
    <></>
  )
}

export default Profile