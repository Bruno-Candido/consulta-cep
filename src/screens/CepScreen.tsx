import { VStack, Box, Text } from 'native-base'
import { useRoute} from '@react-navigation/native'

import { Header } from '../components/Header'

interface RouteParams {
    code: string
    state: string
    city: string
    district: string
    address: string
}

export function CepScreen(){
    const route = useRoute()
    const {code, state, city, district, address} = route.params as RouteParams

    return(
        <VStack flex={1} bgColor='gray.900'>
            <Header title='C E P'/>
                <Box pt={4}>
                    <Text color='gray.300' fontSize='xl' textAlign='center' fontWeight='bold'>
                        Cep: {code} {'\n'}
                        Estado: {state}{'\n'}
                        Cidade: {city}{'\n'}
                        Setor: {district}{'\n'}
                        Endereço: {address}{'\n'}
                    </Text>
                </Box>
        </VStack>
    )
}