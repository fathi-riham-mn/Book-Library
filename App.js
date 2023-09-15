import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPageScreen from './components/FirstPage'
import SignInScreen from './components/SignIn'
import SignUpScreen from './components/SignUp'
import SearchScreen from './components/Search'
import CategoriesScreen from "./components/Categories";
import BooksScreen from './components/Books'
import ForgotPassScreen from "./components/ForgotPass";


const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="FirstPage" component={FirstPageScreen} options={{ headerShown:false, drawerItemStyle: { display: 'none' }, }}/>
            <Drawer.Screen name="SignIn" component={SignInScreen} options={{ headerShown:false, drawerItemStyle: { display: 'none' }, }}/>
            <Drawer.Screen name="SignUp" component={SignUpScreen} options={{ headerShown:false,drawerItemStyle: { display: 'none' }, }}/>
            <Drawer.Screen name="ForgotPass" component={ForgotPassScreen} options={{ headerShown:false,drawerItemStyle: { display: 'none' }, }}/>
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Search" component={SearchScreen} />
            <Drawer.Screen name="Books" component={BooksScreen} options={{title:"Book Details"}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default MyStack