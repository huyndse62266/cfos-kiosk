import React, { Component } from 'react'
import { Layout } from 'antd';
import {Route,Switch } from "react-router-dom"
import TopBar from '../../components/Header/TopBar';
import PopularScreen from '../../components/Screen/PopularScreen';
import PromotionScreen from '../../components/Screen/PromotionScreen';
import DishScreen from '../../components/Screen/DishScreen';
import DrinkScreen from '../../components/Screen/DrinkScreen';
import RestaurantScreen from '../../components/Screen/RestaurantScreen';
import ComboScreen from '../../components/Screen/ComboScreen';
const { Header, Content } = Layout;
export default class MenuPage extends Component {
    
    render() {
        const {match} = this.props;
        return (    
            <Layout>
                <Header style={{padding: 0, backgroundColor: 'white', position: 'fixed', zIndex: 50, width: '100%', lineHeight: 0}}>
                   <TopBar/>
                </Header>
                <Content style={{backgroundColor:'white'}} className="pt-3">
                    <Switch>
                        <Route exact path={match.path}  component={({history}) => <PopularScreen history={history}/>}></Route>
                        <Route  path={match.path + '/popular'} component={({history}) => <PopularScreen history={history}/>}></Route>
                        <Route  path={match.path + '/promotion'} component={({history}) => <PromotionScreen history={history}/>} ></Route>
                        <Route  path={match.path + '/meal'}  component={({history}) => <DishScreen history={history}/>}></Route>
                        <Route  path={match.path + '/drink'}  component={({history}) => <DrinkScreen history={history}/>}></Route>
                        <Route  path={match.path + '/combo'} component={({history}) => <ComboScreen history={history}/>}></Route>
                        <Route  path={match.path + '/restaurant'}  component={({history}) => <RestaurantScreen history={history}/>}></Route>
                    </Switch>   
                </Content>
          </Layout>
        )
    }
}
