import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { TextInput } from "../../components/Form/TextInput";
import { AddressContainer, AddressForm, AddressHeading, CartContainer, CoffeesOptions, CoffeesSelected, 
    FinalInfos, PaymentContainer, 
    PaymentErrorMessage, 
    PaymentHeading,
    PaymentOptions, Coffee,
    CartTotalInfo,
    CheckoutButton, 
    CoffeeInfo
} from "./style";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash} from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import { Radio } from "../../components/Radio";
import { coffees } from '../../../data.json'
import { Fragment } from "react/jsx-runtime";
import { QuantityInput } from "../../components/Form/QuantityInput";

type FormInputs = {
    cep: number
    street: string
    number: string
    fullAddress: string
    neighborhood: string 
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
    cep: z.number({invalid_type_error: 'Informe o CEP'}),
    street: z.string().min(1, 'informe a rua'), 
    number: z.string().min(1, 'informe o número'), 
    fullAddress: z.string(), 
    neighborhood: z.string().min(1,'Informe o bairro'),
    city: z.string().min(1,'Informe a cidade'),
    state: z.string().min(1,'Informe a UF'),
    paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento', 
    }),

})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Cart() {
    const {
        cart, checkout, 
        incrementItemQuantity, decrementItemQuantity, 
        removeItem,
    } = useCart()

    const coffeesInCart = cart.map((item) => {
        const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)
        if (!coffeeInfo){
            throw new Error('Invalid coffee.')
        }
        return { 
            ...coffeeInfo, quantity: item.quantity,
        }
    })

    const totalItemsPrice = coffeesInCart.reduce((previousValue,currentItem) => { 
        return (previousValue += currentItem.price * currentItem.quantity)
    }, 0)

    const { 
        register, handleSubmit, 
        watch, formState:{ errors }, 
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder), 
    })

    const selectedPaymentMethod = watch('paymentMethod')

    function handleItemIncrement(itemId: string){
        incrementItemQuantity(itemId)
    }
    function handleItemDecrement(itemId: string){
        decrementItemQuantity(itemId)
    }
    function handleRemoveItem(itemId: string){
        removeItem(itemId)
    }

    const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
        if(cart.length === 0){
            return alert('É preciso ter pelo menos um item no carrinho')
        }
        checkout(data)
    }

    return(
        <CartContainer>
            <FinalInfos>
            <h2>Complete seu pedido</h2>

            <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
                <AddressContainer>
                <AddressHeading> 
                    <MapPinLine size={22}></MapPinLine> 
                    <div>      
                    <h3>Endereço de Entrega</h3>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                 </AddressHeading> 
                 <AddressForm>
                         <TextInput
                            placeholder='CEP'
                            type='number'
                            containerProps={{style: { gridArea: 'cep' }}}
                            error={errors.cep}
                            {...register('cep', {valueAsNumber: true})}
                        ></TextInput>

                         <TextInput
                            placeholder='Rua'
                            containerProps={{style: {gridArea: 'street'}}}
                            error={errors.street}
                            {...register('street')}
                        ></TextInput>

                        <TextInput
                            placeholder='Número'
                            type='number'
                            containerProps={{style: {gridArea: 'number'}}}
                            error={errors.number}
                            {...register('number')}
                        ></TextInput>
                        
                         <TextInput
                            placeholder='Complemento'
                            optional
                            containerProps={{style: {gridArea: 'fullAdress'}}}
                            error={errors.fullAddress}
                            {...register('fullAddress')}
                        ></TextInput>

                        <TextInput
                            placeholder='Bairro'
                            containerProps={{style: {gridArea: 'neighborhood'}}}
                            error={errors.neighborhood}
                            {...register('neighborhood')}
                        ></TextInput>
                        
                       <TextInput
                            placeholder='Cidade'
                            containerProps={{style: {gridArea: 'city'}}}
                            error={errors.city}
                            {...register('city')}
                        ></TextInput>

                          <TextInput
                            placeholder='UF'
                            containerProps={{style: {gridArea: 'state'}}}
                            error={errors.state}
                            {...register('state')}
                        ></TextInput>

                 </AddressForm>
                      
                  
                </AddressContainer>

                <PaymentContainer>
                <PaymentHeading>
                    <CurrencyDollar size={22}></CurrencyDollar>
                    <div>
                        <h3>Pagamento</h3>
                        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </PaymentHeading>
                <PaymentOptions>
                    <div>
                        <Radio
                        isSelected={selectedPaymentMethod === 'credit'}
                        {...register('paymentMethod')}
                        value="credit"
                        >
                            <CreditCard size={16}></CreditCard>
                            <span>Cartão de crédito</span>
                        </Radio>

                        <Radio
                        isSelected={selectedPaymentMethod === 'debit'}
                        {...register('paymentMethod')}
                        value="debit"
                        >
                            <Bank size={16}></Bank>
                            <span>Cartão de débito</span>
                        </Radio>

                        <Radio
                        isSelected={selectedPaymentMethod === 'cash'}
                        {...register('paymentMethod')}
                        value="cash"
                        >
                            <Money size={16}></Money>
                            <span>Dinheiro</span>
                        </Radio>
                        
                    </div>
                  
                    {errors.paymentMethod ? (
                        <PaymentErrorMessage role="alert">
                         {errors.paymentMethod.message}
                        </PaymentErrorMessage>
                    ): null}

                </PaymentOptions>
                </PaymentContainer>
                </form>
            </FinalInfos>
           
            <CoffeesSelected>
                <h2>Cafés selecionados</h2>
                <CoffeesOptions>
                    {coffeesInCart.map((coffee) => (
                        <Fragment key={coffee.id}>
                            <Coffee>
                                <div>
                                  <img src={coffee.image} alt={coffee.title} />
                                    <div>
                                      <span>{coffee.title}</span>
                                        
                                    <CoffeeInfo>
                                           <QuantityInput
                                                quantity={coffee.quantity}
                                                incrementQuantity={() => handleItemIncrement(coffee.id)}
                                                decrementQuantity={() => handleItemDecrement(coffee.id)}
                                           />

                                           <button onClick={() => handleRemoveItem(coffee.id)}>
                                                <Trash></Trash>
                                                <span>Remover</span>
                                           </button>
                                    </CoffeeInfo>
                                    </div>
                                </div>
                                    <aside>R$ {coffee.price?.toFixed(2)}</aside>
                            </Coffee>
                            <span></span>
                        </Fragment>
                    ))}

                    <CartTotalInfo>
                        <div>
                            <span>Total de itens </span> 
                            <span>
                             {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL', 
                                style: 'currency'
                             }).format(totalItemsPrice)}
                            </span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>
                             {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL', 
                                style: 'currency'
                             }).format(shippingPrice)}
                            </span>
                        </div>

                        <div>
                            <span>Total</span>
                            <span>
                             {new Intl.NumberFormat('pt-br', {
                                currency: 'BRL', 
                                style: 'currency'
                             }).format(totalItemsPrice + shippingPrice)}
                            </span>
                        </div>                    
                    </CartTotalInfo>

                    <CheckoutButton type="submit" form="order">
                        Confirmar Pedido
                    </CheckoutButton>
                    
                </CoffeesOptions>
            </CoffeesSelected>
        </CartContainer>
    )
}

// Selecionar Palavras Iguais:

// Ctrl + D (ou Cmd + D no macOS):
// Selecione a palavra onde está o cursor e repita o comando para selecionar a próxima ocorrência da mesma palavra.
// Ctrl + Shift + L (ou Cmd + Shift + L no macOS):
// Seleciona todas as ocorrências da palavra onde está o cursor.

// Criar Cursores Manualmente:

// Alt + Click (ou Option + Click no macOS):
// Clique com o mouse onde deseja adicionar cursores adicionais enquanto mantém pressionada a tecla Alt (ou Option no macOS).