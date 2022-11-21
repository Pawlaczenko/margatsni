import React, { FC } from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem';
import {RiHomeLine, RiSearchLine, RiAddBoxLine, RiUser4Line, RiLogoutCircleLine} from 'react-icons/ri'

const Navigation : FC = () => {
  return (
    <StyledNavigation>
		<NavigationItem to='/'>
			<RiHomeLine /> 
			Strona Główna
		</NavigationItem>
		<NavigationItem to='/search'>
			<RiSearchLine /> 
			Szukaj
		</NavigationItem>
		<NavigationItem to='/create'> 
			<RiAddBoxLine /> 
			Utwórz
		</NavigationItem>
		<NavigationItem to='/profile'>
			<RiUser4Line />
			Profil
		</NavigationItem>
		<NavigationItem to='/logout'>
			<RiLogoutCircleLine />
			Wyloguj
		</NavigationItem>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export default Navigation