import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react'
import {RadioContainer} from './style'

type Props = InputHTMLAttributes<HTMLInputElement> & { 
    isSelected: boolean
}

export const Radio = forwardRef(function Radio(
    { children, isSelected, ...rest}: Props, ref: LegacyRef<HTMLInputElement>, 
) { 
    return(
        <RadioContainer data-state={isSelected}>
            <input type="radio" ref={ref} {...rest}></input>
            {children}
        </RadioContainer>
    )
}

)