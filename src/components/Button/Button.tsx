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
    background: ${props => props.isPrimary?'var(--color-blue)' : 'var(--color-grey-light)'};
`
export default Button