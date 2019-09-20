import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';

import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import PaperScreen from './PaperScreen';
import FirstScreen from './FirstScreen';
import PostsScreen from './PostsScreen';
import ComponentsShowcaseScreen from './ComponentsShowcaseScreen';

const TabsNavigator = createMaterialTopTabNavigator({
    Posts: {
        screen: PostsScreen,
        navigationOptions: {
            title: 'Posts'
        },
    },
    Components: {
        screen: ComponentsShowcaseScreen,
        navigationOptions: {
            title: 'Show Case'
        },
    },
}, {
        // tabBarComponent: (props) => {
        //     console.log(props)
        //     return (
        //         <View>
        //             <Button onPress={() => props.navigation.navigate('Posts')}>Posts</Button>
        //             <Button onPress={() => props.navigation.navigate('Components')}>Show Case</Button>
        //         </View>
        //     )
        // }
    });

const DrawerButton = withNavigation(props => {
    return (
        <IconButton
            icon="menu"
            size={24}
            onPress={() => props.navigation.openDrawer()}
        />
    )
});

const StackNavigator = createStackNavigator({
    Paper: {
        screen: PaperScreen,
        navigationOptions: {
            title: 'Paper screen',
            headerLeft: DrawerButton,
        }
    },
    First: {
        screen: FirstScreen,
        navigationOptions: {
            title: 'First screen'
        }
    },
    Tabs: {
        screen: TabsNavigator,
        navigationOptions: {
            title: 'Tab navigator'
        }
    }
});

const DrawerNavigator = createDrawerNavigator({
    Paper: {
        screen: StackNavigator,
        navigationOptions: {
            title: 'Paper screen',
        }
    },
    First: {
        screen: FirstScreen,
        navigationOptions: {
            title: 'First screen'
        }
    },
    Tabs: {
        screen: TabsNavigator,
        navigationOptions: {
            title: 'Tab navigator'
        }
    }
});

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
