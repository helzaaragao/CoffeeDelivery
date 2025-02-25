import { ShoppingCart, Package, Coffee, Timer } from '@phosphor-icons/react'
import { CoffeeBanner, CoffeeBannerContent, CoffeeList, Heading, Info } from './styles'
import coffeBanner from '../../assets/coffeBanner.svg'
import { useTheme } from 'styled-components'
import { Card } from '../../components/Card'
import { coffees } from '../../../data.json'

export function Home(){ 
  const theme = useTheme();

    return(
        <main>
           <CoffeeBanner>
                <CoffeeBannerContent>
                    <div>
                        <Heading>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                        </Heading>
                        <Info>
                           <div>
                            <ShoppingCart
                             size={25} 
                             weight='fill'
                             style={{ backgroundColor:theme['yellow-dark'], color: theme['base-background']}}></ShoppingCart>
                            <span>Compra simples e segura</span>
                           </div>
                           <div>
                           <Package
                             size={25} 
                             weight='fill'
                             style={{ backgroundColor:theme['base-text'], color: theme['base-background']}}
                             ></Package>
                            <span>Embalagem mantém o café intacto</span>
                           </div>
                           <div>
                           <Timer
                              size={25} 
                             weight='fill'
                             style={{ backgroundColor:theme['yellow'], color: theme['base-background']}}
                             ></Timer>
                            <span>Entrega rápida e rastreada</span>
                           </div>
                           <div>
                           <Coffee
                             size={25} 
                             weight='fill'
                             style={{ backgroundColor:theme['purple'], color: theme['base-background']}}
                             ></Coffee>
                            <span>O café chega fresquinho até você</span>
                           </div>
                        </Info>
                    </div>

                  <img src={coffeBanner} alt="" />
                </CoffeeBannerContent>
                 
           </CoffeeBanner>
           <CoffeeList>
              <h2>Nossos cafés</h2>
               
               <div>
                  {coffees.map((coffee) => (
                     <Card key={coffee.id} coffee={coffee}></Card>
                   ))} 
               </div>
           </CoffeeList>
        </main>
    )
}