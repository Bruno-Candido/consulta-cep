import { VStack, Heading } from 'native-base'

import { Header } from '../components/Header'


export function About(){
    return(
        <VStack flex={1} bgColor='gray.900'>
            <Header title='Sobre'/>
            <Heading color='white' fontFamily='heading' fontSize='xl' mb={8} textAlign='center' pt={50}>
                App simples de consulta de CEP{'\n'} 
                usando uma Api publica {'\n'}
                https://apicep.com/api-de-consulta/{'\n'}
            </Heading>
        </VStack>
        
    )
}