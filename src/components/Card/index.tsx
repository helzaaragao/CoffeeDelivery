import { useEffect, useState } from "react"
import { CardContainer, CoffeImg, 
            Description, Price, 
                Tags, Title, Control,
                Order} from "./style"
import { QuantityInput } from "../Form/QuantityInput"
import { CheckFat, ShoppingCart } from "@phosphor-icons/react"
import { useTheme } from "styled-components"
import { useCart } from "../../hooks/useCart"

  type Props = { 
        coffee: {
            id: string
            title: string
            description: string
            tags: string[]
            price: number
            image: string
        }
    }

export function Card({coffee}: Props) {
    const [isItemAdded, setIsItemAdded] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const theme = useTheme()
    const { addItem } = useCart()

    function incrementQuantity() {
        setQuantity((state) => state + 1)
    }

    function decrementQuantity() {
        if(quantity > 1) {
            setQuantity((state) => state - 1 )
        }
    }

    function handleAddItem() {
        addItem({ id: coffee.id, quantity })
        setIsItemAdded(true)
        setQuantity(1)
    }

    useEffect(() => {
        let timeout: number
        
        if(isItemAdded) {
            timeout = setTimeout(() => {
                setIsItemAdded(false)
            }, 1000)
        }

        return () => {
            if(timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isItemAdded])


    return(
        <CardContainer>
            <CoffeImg src={coffee.image} alt={coffee.title}></CoffeImg>

            <Tags>
                {coffee.tags.map((tag) => (
                <span 
                key={tag}>
                    {tag} 
                 </span>
                ))}
            </Tags>

            <Title>
                {coffee.title}
            </Title>

            <Description>
                {coffee.description}
            </Description>

            <Control>
                <Price>
                    <span>R$</span>
                    <strong>{coffee.price.toFixed(2)}</strong>
                </Price>

                <Order $itemAdded={isItemAdded}>
                    <QuantityInput
                        quantity={quantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                    ></QuantityInput>

                    <button disabled={isItemAdded} onClick={handleAddItem}>
                        {isItemAdded ? (
                            <CheckFat
                                weight="fill"
                                size={22}
                                style={{color: theme['base-card']}}
                            ></CheckFat> ) : (
                                <ShoppingCart size={22}
                                   style={{color: theme['base-card']}}
                                    />
                        )}
                    </button>
                </Order>
            </Control>
            
       
        
        </CardContainer>
    )
}