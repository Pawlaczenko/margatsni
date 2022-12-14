import React from 'react'
import {FC} from 'react';
import Button from '../../components/Button/Button';
import Window from '../../components/Window/Window';
import styled from 'styled-components';
import UserSideBar from '../../components/UserSideBar/UserSideBar';

const MainFeed : FC = () => {
  
  return (
    <Wrapper>
      <UserSideBar />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 3rem;
`

export default MainFeed