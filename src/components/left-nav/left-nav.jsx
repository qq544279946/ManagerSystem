import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';


import './left-nav.less';
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig';

const { SubMenu } = Menu;

class LeftNav extends Component {
    createMenuList = (list)=>{
        
        return list.map(item=>{
            
            if(!item.children){
                return (
                        <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }

            if(item.children.find((i)=>i.key === this.props.location.pathname)){
                this.openkey = item.key;
            }
            
            return (
                <SubMenu
                         key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.createMenuList(item.children)}
                        
                    </SubMenu>
            )
        })
    }

    
    componentWillMount(){
         this.nodeList = this.createMenuList(menuList);
    }
    render() {
        
        

        return (
            <div className='left-nav'>
                <header>
                    <Link to='/home' className='home'>
                        <img src={logo} alt="logo" className='logo'/>
                        <h2>后台管理</h2>
                    </Link>
                </header>
                <Menu
                    selectedKeys={[this.props.location.pathname]}
                    defaultOpenKeys={[this.openkey]}
                    mode="inline"
                    theme="dark"
                    
                >
                    {
                        
                        this.nodeList
                    }
                   
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav);