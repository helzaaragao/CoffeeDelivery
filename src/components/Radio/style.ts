import styled from 'styled-components'

export const RadioContainer = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    background-color:  ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    cursor: pointer; 
    font-size: 0.71rem;
    padding: 1rem;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: all 0.2s;
    gap: 12px;

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }

    &[data-state='true']{
      background-color: ${({ theme }) => theme['purple-light']};
      border-color: ${({ theme }) => theme['purple']};
    }
    


    input {
      display:none;
    }

    svg { 
        color:  ${({ theme }) => theme['purple']};
    }

`