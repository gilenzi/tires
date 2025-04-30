import styled from "styled-components"

const StyledRow = styled.div`
    display: flex;
`

export function Row({children, rowProps}){
    return (
        <StyledRow {...rowProps}>
            {children}
        </StyledRow>
    )
}