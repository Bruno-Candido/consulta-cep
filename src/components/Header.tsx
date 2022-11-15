import { Text, HStack, Box } from 'native-base'

interface Props {
    title:string
}

export function Header({ title }: Props) {
    return(
        <HStack 
            w='full'
            h='24' 
            bgColor='gray.800' 
            alignItems='flex-end'
            pb={5}
            px={5}
        >
            <HStack w='full' alignItems='center' justifyContent='space-between'>
                <Text color='white' fontFamily='heading' fontSize='md' textAlign='center'>
                    {title}
                </Text>
            </HStack>
        </HStack>
    )
}