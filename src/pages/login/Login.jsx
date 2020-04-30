import React, { Component } from 'react'
import { Form, Icon, Input, Button ,message} from 'antd';

import {reqLogin} from '../../api'
import logo from './images/logo.png'
import './login.less'



class Login extends Component {


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
              message.info('发送ajax')
            }else{
                message.info('验证失败')
            }
          });
    };

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="" />
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form" name='normal_login'>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                initialValue:'admin',
                                rules: [{ required: true, message: '用户名不能为空' },{min:4,message:'最小长度为4'},{max:12,message:'最大长度为12'},{pattern:/^[0-9a-zA-Z_]+$/,message:'只能是数字、字母、下划线'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                initialValue:'',
                                rules: [{ required: true, message: '密码不能为空' },{min:4,message:'最小长度为4'},{max:12,message:'最大长度为12'},{pattern:/^[0-9a-zA-Z_]+$/,message:'只能是数字、字母、下划线'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
         
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }


}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;



