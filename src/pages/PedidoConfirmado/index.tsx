import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Details, Heading, Ilustration, Info, PedidoConfirmadoContainer } from "./style";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ilustration from '../../assets/Illustration.svg'
import { useTheme } from "styled-components";

export function PedidoConfirmado(){
    const {orders} = useCart()
    const {orderId} = useParams()
    const orderInfo = orders.find((order) => order.id === Number(orderId))
    const paymentMethod = { 
        credit: 'Cartão de Crédito', 
        debit: 'Cartão de Débito', 
        cash: 'Dinheiro'
    }

    if (!orderInfo?.id) {
        return null
      }

      const theme = useTheme()

    return (
        <PedidoConfirmadoContainer>
            <Details>
                <Heading>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </Heading>
             
                <Info>
                    <div>
                        <MapPin
                            color={theme['base-white']}
                            style={{ backgroundColor: theme['purple'] }}
                            weight="fill"
                            size={32}
                        ></MapPin>
                        <div>
                                <span>Entregue em <strong>{orderInfo.street}, {orderInfo.number} </strong>
                                </span>
                                
                                <span> {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}</span>
                        </div>
                    </div>
                    <div>
                        <Timer  color={theme['base-white']}
                            style={{ backgroundColor: theme['yellow'] }}
                            weight="fill"
                            size={32}

                        ></Timer>
                        <span>
                            Previsão de entrega<strong> 40 min - 60 min </strong>
                        </span>
                    </div>
                    <div>
                        <CurrencyDollar color={theme['base-white']}
                         style={{ backgroundColor: theme['yellow-dark'] }}
                         size={32}
                        ></CurrencyDollar>
                        <span>Pagamento na entrega <strong>{paymentMethod[orderInfo.paymentMethod]}</strong></span>
                    </div>
                </Info>
              
            </Details>
            <Ilustration>
                <img src={ilustration} alt="" />
            </Ilustration>

        </PedidoConfirmadoContainer>
    )
}