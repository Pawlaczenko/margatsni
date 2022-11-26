import React,{FC} from 'react';
import styled from 'styled-components'

interface IButtonProps{
    children: React.ReactNode;
    isPrimary: boolean;
    handleClick: React.MouseEvent<HTMLElement>;
}
interface IStyledButtonProps{
    isPrimary: boolean;
}
const Button:FC<IButtonProps> = ({children, handleClick, isPrimary}) => {
  return (
    <StyledButton isPrimary={isPrimary} onClick={handleClick}>{children}</StyledButton>
  )
}
const StyledButton = styled.button<IStyledButtonProps>`
    background: ${props => props.isPrimary?'var(--color-blue)' : 'var(--color-grey-light)'};
`
export default Button