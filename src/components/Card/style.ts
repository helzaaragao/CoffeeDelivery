import styled from 'styled-components'

export const CardContainer = styled.main`
    display: flex; 
    flex-direction: column;
    align-items: center;
    text-align: center; 

    color: ${({ theme }) => theme['base-subtitle']} ;
    background-color: ${({ theme }) => theme['base-card']};

    width: 16rem; 
    height: 19.375rem; 
    border-radius: 6px 36px;
    padding: 1rem; 
    gap: 0.8rem;
    line-height: 130%;
`

export const CoffeImg = styled.img`
    margin-top: -1.9rem; 

`
export const Tags = styled.div`
    
    span{
        font-size: 0.625rem;
        font-weight: bold;
        padding: 4px 8px; 
        border-radius: 100px; 
        gap: 0.3rem; 




        color: ${({ theme }) => theme['yellow-dark']};
        background-color: ${({ theme }) => theme['yellow-light']};
        text-transform: uppercase;
    }
   

`
export const Title = styled.h3`
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
      font-size: 1.25rem;
`
export const Description = styled.span`
       font-size: 0.875rem;
       color: ${({ theme }) => theme['base-label']};
`
export const Control  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`
export const Price = styled.div`
    color: ${({ theme }) => theme['base-text']};

        span { 
            font-size: 0.9rem;
        }

        strong {
            font-size: 1.3rem;
        }
`
export const Order = styled.div<{ $itemAdded?: boolean}>`
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 0.5rem; 

   > button {
        background-color:  ${({ theme }) => theme['purple-dark']};
        border-color: transparent;
        padding: 8px 8px; 
        border-radius: 6px; 

    }
`