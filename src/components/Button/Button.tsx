import React,{FC} from 'react';
import styled from 'styled-components'

interface IButtonProps{
    children: React.ReactNode;
    isPrimary?: boolean;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}
interface IStyledButtonProps{
    isPrimary?: boolean;
}
const Button:FC<IButtonProps> = ({children, handleClick, isPrimary}) => {
  return (
    <StyledButton isPrimary={isPrimary} onClick={handleClick}>{children}</StyledButton>
  )
}
const StyledButton = styled.button<IStyledButtonProps>`
    background: var(--color-blue);
    background: ${props => props.isPrimary?'var(--color-blue)' : "transparent"};
    border: 1px solid var(--color-grey);
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`

export default Button