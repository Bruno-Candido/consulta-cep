import { Button as ButtonNativeBase, Text, IButtonProps} from 'native-base'

interface Props extends IButtonProps {
    title: string
}

export function Button({title, ...rest}: Props){
    return(
        <ButtonNativeBase
            w='full'
            h={16}
            rounded='sm'
            fontSize='md'
            textTransform='uppercase'
            bg='yellow.500'
            _pressed={{bg:'yellow.600'}}
            _loading={{_spinner:{color: 'red'}}}
            {...rest}
        >
            <Text
                fontSize='lg'
                fontFamily='heading'
                color='white'
            >
                {title}
            </Text>
        </ButtonNativeBase>
    )
}