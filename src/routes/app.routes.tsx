import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AddressBook, Info} from 'phosphor-react-native'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'

import { FirstScreen } from '../screens/FirstScreen'
import { CepScreen } from '../screens/CepScreen'
import { About } from '../screens/About'




const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes(){
    const { colors } = useTheme()
    
    return(
        <Navigator screenOptions={{
            headerShown:false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor:colors.yellow[500],
            tabBarInactiveTintColor:colors.gray[400],
            tabBarStyle:{
                position:'absolute',
                height:87,
                borderTopWidth: 0,
                backgroundColor: colors.gray[800]
            },
            tabBarItemStyle:{
                position:'relative',
                top: Platform.OS === 'android' ? -10 : 0
            }
            }}>

            <Screen 
                name='FisrtScreen' 
                component={FirstScreen}
                options={{
                    tabBarIcon: ({ color }) => <AddressBook color={color}/>,
                    tabBarLabel:'Cep'
            }}
            />
            <Screen 
                name='Sobre' 
                component={About}
                options={{
                    tabBarIcon: ({ color }) => <Info color={color}/>,
                    tabBarLabel:'Sobre'
                }}
                />
                <Screen 
                name='CepScreen' 
                component={CepScreen}
                options={{ tabBarButton:() => null }}
                />

        </Navigator>
    )
}