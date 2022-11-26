import React,{ FC, useState} from 'react';
import { useActionData, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';

const Profile:FC = () => {
    let {id} = useParams();
    return (
    <ProfileDetails></ProfileDetails>
  )
}

export default Profile