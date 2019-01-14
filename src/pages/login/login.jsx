import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Form,Input,Icon,Button} from "antd";

import './index.less'
import img from '../../assets/images/logo.png'
export default class Login extends Component{
    render(){
        return(
        <div className='login '>
            <header className='login-header'>
                <img src={img} className='img'/>
                React项目: 后台管理系
            </header>
            <div className='login-content'>
             <div className='login-box'>
                        <div className='title'>用户登录</div>
                        <Form className='login-form'>
                            <Form.Item>
                                <Input/>
                            </Form.Item>
                            <Form.Item>
                                <Input/>
                            </Form.Item>
                            <Button className='login-form-button'>登录</Button>

                        </Form>
                    </div>
            </div>
        </div>
        )
    }
}