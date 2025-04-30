import styled from "styled-components"

const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
`

export function Column({children, colProps}){
    return (
        <StyledRow {...colProps}>
            {children}
        </StyledRow>
    )
}