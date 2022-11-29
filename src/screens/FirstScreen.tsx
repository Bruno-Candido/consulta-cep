import { Center, Icon, useToast} from 'native-base'
import { useState } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


import { Button } from '../components/Button'
import { Input } from '../components/Input'


export function FirstScreen({ navigation }){
    const [cep, setCep] = useState('')
    const toast = useToast()

    async function handleApi(){
        await fetch(`https://ws.apicep.com/cep.json?code=${cep}`).then((res) =>
        res.json().then((json) => {
            if(json.ok === true){
                navigation.navigate('CepScreen',{
                    code: json.code,
                    state:json.state,
                    city: json.city,
                    district:json.district,
                    address:json.address
                })
                
            }else{
                toast.show({
                    title:'Cep Não encontrado',
                    placement:'top',
                    bgColor: 'red.700'
                })
            }
        }))
    }
    return(
        <Center flex={1} bgColor='gray.900' p={7}>
            <Input
                mb={2}
                placeholder='Informe CEP'
                onChangeText={setCep}
            />
            <Button 
                title='Pesquisar'
                leftIcon={<Icon as={Fontisto} name='search' color='white' size='md'/>}
                mt={6}
                onPress={handleApi}
            />
        </Center>
    )
}