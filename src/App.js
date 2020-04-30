/**
 * 应用根组件
 */

import React,{Component} from 'react'
import {BrowserRouter,HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'

export default class App extends Component{
 
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Admin}/>
          
        </Switch>
      </BrowserRouter>
    )
  }

}