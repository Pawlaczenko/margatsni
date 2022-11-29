import React from 'react'
import {FC} from 'react';
import Button from '../../components/Button/Button';
import Window from '../../components/Window/Window';
import styled from 'styled-components';
import UserSideBar from '../../components/UserSideBar/UserSideBar';
import FeedItem from '../../components/FeedItem/FeedItem';

const MainFeed : FC = () => {
  
  return (
    <Wrapper>
      <StyledFeed>
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </StyledFeed>
      <UserSideBar />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 3rem 12rem 3rem 3rem;
`

const StyledFeed = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`;

export default MainFeed