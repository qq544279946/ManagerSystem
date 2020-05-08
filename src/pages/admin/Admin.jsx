import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils';
import LeftNav from '../../components/left-nav/left-nav';
import MyHeader from '../../components/header/header';

import Home from '../home/home'
import Category from '../category/category'
import Pie from '../charts/pie'
import Line from '../charts/line'
import Bar from '../charts/bar'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'



const { Header, Footer, Sider, Content } = Layout;


export default class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        if (!user._id) {
            return <Redirect to='/login' />
        }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header style={{ backgroundColor: 'grey', height: '80px' }}>
                        <MyHeader />
                    </Header>
                    <Content style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/charts/pie' component={Pie} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/product' component={Product} />
                            <Route path='/role' component={Role} />
                            <Route path='/user' component={User} />
                            <Redirect to='/home'/>
                        </Switch>

                    </Content>
                    <Footer style={{ textAlign: 'center', color: 'rgba(0,0,0,0.5)' }}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}
