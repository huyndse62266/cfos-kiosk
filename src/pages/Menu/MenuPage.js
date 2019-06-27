import React, { Component } from 'react'
import { Layout } from 'antd';
import {Route, Link,BrowserRouter as Router,Switch } from "react-router-dom"
import TopBar from '../../components/TopBar.js';
import PopularScreen from '../../components/screen/PopularScreen';
import PromotionScreen from '../../components/screen/PromotionScreen';
import DishScreen from '../../components/screen/DishScreen';
import DrinkScreen from '../../components/screen/DrinkScreen';
import RestaurantScreen from '../../components/screen/RestaurantScreen';
import MiniCart from '../../components/Cart/MiniCart'

const { Header, Footer, Sider, Content } = Layout;
export default class MenuPage extends Component {
    
    render() {
        const {match} = this.props;
        console.log(match);
        return (
            <Layout>
                <Header className="text-left">
                    <TopBar/>
                </Header>
            <Layout>
                <Content>
                    <Switch>
                        <Route exact path={match.path}  component={PopularScreen}></Route>
                        <Route  path={match.path + '/popular'}  component={PopularScreen}></Route>
                        <Route  path={match.path + '/promotion'}   component={PromotionScreen}></Route>
                        <Route  path={match.path + '/meal'}   component={DishScreen}></Route>
                        <Route  path={match.path + '/drink'}   component={DrinkScreen}></Route>
                        <Route  path={match.path + '/combo'}   component={RestaurantScreen}></Route>
                        <Route  path={match.path + '/restaurant'}   component={RestaurantScreen}></Route>
                    </Switch>
                </Content>
                {/* <Sider><MiniCart /></Sider> */}
            </Layout>
          </Layout>
        )
    }
}
