import { VStack, Heading } from 'native-base'

import { Header } from '../components/Header'


export function CepScreen(props){
    return(
        <VStack flex={1} bgColor='gray.900'>
            <Header title='C E P'/>
            <Heading color='white' fontFamily='heading' fontSize='xl' mb={8} textAlign='center'>
                Cep: {props.route.params.code}{'\n'}
                Estado: {props.route.params.state}{'\n'}
                Cidade: {props.route.params.city}{'\n'}
                Setor: {props.route.params.district}{'\n'}
                Endereço: {props.route.params.address}
            </Heading>
        </VStack>
    )
}