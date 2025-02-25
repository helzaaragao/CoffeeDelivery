import styled from "styled-components";

export const QuantityContainer = styled.div`
    padding: 8px;
    border-radius: 6px;
    display: flex; 
    gap: 4px; 

    background-color: ${({ theme }) => theme['base-button']};
    

    button {    
        display: flex;
        background-color: transparent;
        border-color: transparent;
        align-items: center;
    }

    button svg {
        color:  ${({ theme }) => theme['purple']};

        transition: all 0.2s;

        &:hover {
            color: ${({ theme }) => theme['purple-dark']};
        }
      
    }

    span {
            padding-top: 2px;
            color:${({ theme }) => theme['base-title']} ;
        }


`