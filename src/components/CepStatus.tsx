import { VStack, Text } from 'native-base'

interface CepProps {
    code: string
    state: string
    city: string
    district: string
    address: string

}

interface Props {
    data: CepProps
}

export function CepStatus({ data }: Props) {
    return(
        <VStack flex={1} bgColor='gray.900' justifyItems='center'>
            <Text>Cep: {data.code}</Text>
            <Text>Estado: {data.state}</Text>
            <Text>Cidade: {data.city}</Text>
            <Text>Setor: {data.district}</Text>
            <Text>Endereço: {data.address}</Text>
        </VStack>
    )
}