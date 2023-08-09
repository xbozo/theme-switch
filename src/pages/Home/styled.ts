import styled from "styled-components"

export const Content = styled.div`
    display: flex;
    height: 85vh;
    margin-top: 32px;
    gap: 32px;
    padding: 0 32px;
`

export const LeftContent = styled.div`
    width: 70%;
    background-color: ${(props) => props.theme.colors.lightGray};
`

export const RightContent = styled.div`
    width: 30%;
    background-color: ${(props) => props.theme.colors.lightGray};
`