import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            <Content> hi there...</Content>
        </Container>
    )
}

const Container = styled.section`
    height: 100vh;
    display: flex;
    text-align: center;
    flex-direction: column;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: rebeccapurple;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 40px;
    /* margin-bottom: 10vw; */
`

export default Login