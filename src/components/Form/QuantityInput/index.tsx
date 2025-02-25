import { Minus, Plus } from "@phosphor-icons/react"
import { QuantityContainer } from "./style"

type Props = {
    quantity: number
    incrementQuantity: () => void 
    decrementQuantity: () => void 
}

export function QuantityInput({
    quantity, incrementQuantity, decrementQuantity
}: Props){ 
    return(
        <QuantityContainer>
         <button onClick={decrementQuantity}>
            <Minus size={14}></Minus>
         </button>
         <span>{quantity}</span>
         <button onClick={incrementQuantity}>
            <Plus size={14}></Plus>
         </button>
        </QuantityContainer>
    )
}