import { FocusEvent, forwardRef, HTMLAttributes, InputHTMLAttributes, LegacyRef, useState } from "react";
import { FieldError } from 'react-hook-form'
import { Box, ErrorMessage, InputContainer } from "./style";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    optional?: boolean
    containerProps?: HTMLAttributes<HTMLDivElement>
    error?: FieldError
}

export const TextInput = forwardRef(function TextInput({
    optional, error, containerProps, onFocus, onBlur, ...rest}: 
    Props, ref: LegacyRef<HTMLInputElement>, 
) {
    const [isFocused, setIsFocused] = useState(false)

    function handleFocus(event: FocusEvent<HTMLInputElement, Element>){
        setIsFocused(true)
        onFocus?.(event)
    }

    function handleBlur(event: FocusEvent<HTMLInputElement, Element>){
        setIsFocused(false)
        onBlur?.(event)
    }

    return(
        <Box {...containerProps}>
            <InputContainer data-state={isFocused ? 'focused' : 'blurred'}>
                <input type="text" 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={ref}
                    {...rest}
                />
                {optional ? <span>Opcional</span> : null}
            </InputContainer>
            {error?.message ? (
                <ErrorMessage role="alert">{error.message}</ErrorMessage>
            ) : null}
        </Box>
    )
})