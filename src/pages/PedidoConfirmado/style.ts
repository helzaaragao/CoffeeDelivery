import styled from "styled-components";

export const PedidoConfirmadoContainer = styled.main`
     width: 100vw;
    display: flex; 
    align-items: center;
    justify-content: center;
    padding: 1rem 8rem 1rem 8rem;
    gap: 10rem;
    margin-top: 3rem;
`
export const Details = styled.section``
export const Heading = styled.div`
    h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme['yellow-dark']};
        font-family: 'Baloo 2', sans-serif;
        font-weight: bolder;
    }

    p{ 
        margin-top: 0.6rem; 
    }
`
export const Info = styled.section`

        width: 35rem;
        height: 15rem;
        margin-top: 2rem;
        position: relative;
        border-radius: 0.375rem 2rem;
        background-origin: border-box;
        background-color: white; 

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        padding-left: 2.5rem;
        padding-right: 2.5rem;

        &::before {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            z-index: -1;
            border-radius: 0.375rem 2rem;
            background: linear-gradient(to bottom right, ${({ theme }) => theme['yellow']}, ${({ theme }) => theme['purple']});
        }

        > div{
            display:flex;
            align-items: center;
            gap: 0.6rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
                    > svg {
                       padding: 8px;
                       border-radius: 999px;
                    }
        }

        
`
export const Ilustration = styled.section``
