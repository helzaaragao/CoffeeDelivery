import styled from "styled-components";

export const CartContainer = styled.main`
     /* padding-right: 5rem; */
     display: flex; 
     justify-content: center;
     gap: 2rem; 
     line-height: 130%;
     padding: 1rem 8rem 1rem 8rem;
`
export const FinalInfos = styled.section`
     h2{ 
          color: ${({ theme }) => theme['base-subtitle']};
          font-family: 'Baloo 2', sans-serif;
          font-size: 1.125rem;
          margin-bottom: 0.938rem;

     }

     form { 
          width: 40rem; 
          height: 36.938rem; 
          gap: 0.75rem; 
     } 

`
export const AddressContainer = styled.div`
     min-height: 23.25rem;
     padding: 2.5rem; 
     background-color: ${({ theme }) => theme['base-card']};
     margin-bottom: 0.6rem;
`
export const AddressHeading = styled.div`
     display: flex; 
     gap: 0.5rem; 
     margin-bottom: 2rem;

      svg { 
          color: ${({ theme }) => theme['yellow-dark']}
      }

      div { 
          h3{ 
              color: ${({ theme }) => theme['base-subtitle']};
              font-size: 1rem; 
              font-weight: normal;
          }

          span{ 
               color: ${({ theme }) => theme['base-text']};
               font-size: 0.875rem; 
          }
      }
     
`
export const AddressForm = styled.div`
     min-height: 13.5rem;
     display: grid; 
     grid-template-areas: 
     'cep . .'
     'street street street'
     'number fullAdress fullAddress'
     'neighborhood city state';
     grid-template-columns: 200px 1fr 60px;
     grid-gap: 16px 12px;
    
    
`
export const PaymentContainer = styled.div`
     min-height: 12.938rem; 
     padding: 2.5rem; 
     background-color: ${({ theme }) => theme['base-card']};
`
export const PaymentHeading = styled.div`
     display: flex; 
     gap: 0.5rem; 
     margin-bottom: 2rem;

     svg { 
          color: ${({ theme }) => theme['purple']};
     }
     div { 
          h3{ 
              color: ${({ theme }) => theme['base-subtitle']};
              font-size: 1rem; 
              font-weight: normal;
          }

          span{ 
               color: ${({ theme }) => theme['base-text']};
               font-size: 0.875rem; 
          }
      }
` 
export const PaymentOptions = styled.div`
     display: flex;
     flex-direction: column;
     gap: 0.75rem; 

     > div{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
     }

`
export const PaymentErrorMessage = styled.p`
     width: 100%;
     font-size: 0.8rem;
     color: ${({ theme }) => theme['error']};
`
export const CoffeesSelected = styled.section`
     h2{ 
          color: ${({ theme }) => theme['base-subtitle']};
          font-family: 'Baloo 2', sans-serif;
          font-size: 1.125rem;
          margin-bottom: 0.938rem;

     }

`
export const CoffeesOptions = styled.div`
         background-color: ${({ theme }) => theme['base-card']};     
         width: 100%;
         min-width: 448px; 
         padding: 40px;
         border-radius: 6px 36px;

    > span {
        display:block;
        height: 1px;
        background-color: ${({ theme }) => theme['base-button']};
        margin: 24px 0;
     }
`
export const Coffee = styled.div`
    display: flex; 
    justify-content: space-between;

    > div{
               > img { 
               width: 64px;
               height: 64px;
          }
          display: flex;
          align-items: stretch;
          gap: 20px;

          > div{ 
               display: flex;
               flex-direction: column;
               justify-content: space-between;
          }
    }
   > aside { 
               font-weight: bold;
          }
    
`

// export const CoffeeTitle = styled.div `
//      display: flex;   
//      gap: 0.5rem; 
     
//      span{ 
//           font-size: 1rem;
//           color: ${({ theme }) => theme['base-subtitle']};
//      }

//      aside{
//           font-weight: bolder;
//      }
// `
export const CoffeeInfo = styled.div`
     display:flex;
     gap: 8px;


    > button {
          background-color: ${({ theme }) => theme['base-button']};
          border-color: transparent;
          display: flex;
          gap: 8px;
          border-radius: 6px;
          padding: 6px 8px;

          transition: all 0.2s;

          &:hover{
              color: ${({ theme }) => theme['base-hover']};
          }
         
          > svg{ 
             color: ${({ theme }) => theme['purple']};
          }
         > span { 
               font-size: 0.75rem;
               text-transform: uppercase;
               color: ${({ theme }) => theme['base-text']};
          }
     }
`
export const CartTotalInfo = styled.div`
     display:flex; 
     flex-direction: column; 
     gap: 12px;

      div{ 
          display: flex;
          align-items: center;
          justify-content: space-between;

          span:first-child { 
           font-size: 0.875rem;
           }
           span:last-child{
               font-size:1rem;
           }
         
     }
     

     div:last-child {
          span {
               font-size:1.25rem;
               font-weight: bold;
          }
  }
  
     
`
export const CheckoutButton = styled.button`
     width: 100%; 
     height: 2.875rem;
     margin-top: 1rem;
     text-transform: uppercase;
     font-weight: bold;

     border-radius:0;
     border-color: transparent;
     color: ${({ theme }) => theme['base-white']};
     background-color: ${({ theme }) => theme['yellow']};
     padding: 0.5rem;
`

