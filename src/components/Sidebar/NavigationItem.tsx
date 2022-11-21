import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface INavItemProps {
	children: React.ReactNode;
	to: string;
};

const NavigationItem : FC<INavItemProps> = ({children, to}) => {
	return (
		<StyledNavigationItem to={to}>{children}</StyledNavigationItem>
	)
}

const StyledNavigationItem = styled(NavLink)`
	font-size: 1.6rem;
	font-family: 'Inter', sans-serif;

	display: flex;
	align-items: center;
	width: 100%;
	padding: .8rem 1rem;
	margin: 1rem 0;
	border-radius: .5rem;
	
	& > svg {
		width: 2.3rem;
		height: 2.3rem;
		margin-right: 1rem;
	}

	&:hover,
	&.active {
		background-color: var(--color-grey-lightest);
		font-weight: bold;
	}
	
`;

export default NavigationItem