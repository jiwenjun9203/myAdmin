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
                <LoginForm/>
             </div>
            </div>
        </div>
        )
    }
}
//包含<Form>的被包装组件
class LoginForm extends Component{
    clicklogin = ()=> {
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('11111111111',values)
            }
        })

    }
    checkPassword = (rule,value,callback) =>{
        if(!value){
            callback('请输入密码')
        }else if(value.length<4||value.length>8){
            callback('密码长度位4-8位')
        }else{
            callback()
        }
    }

    render(){
        const {getFieldDecorator} = this.props.form
        return(
            <Form className='login-form'>
                <Form.Item>
                    {
                        getFieldDecorator('username',{
                            rules:[
                                {required:true,message:'请输入用户名'},
                                {min:4,message:'长度不能小于4位'}
                                ]
                        })(
                            <Input placeholder='请输入用户名'prefix={<Icon type='username'/>}/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password',{
                            rules: [{validator: this.checkPassword}]
                        })(
                            <Input placeholder='请输入密码'prefix={<Icon type='lock'/>}type='password'/>
                        )
                    }

                </Form.Item>
                <Button type='primary' className='login-form-button' onClick={this.clicklogin}>登录</Button>
            </Form>
        )
    }
}
//包装包含<Form>的组件生成一个新的包装组件
//会向被包装组件传递Form属性
LoginForm = Form.create()(LoginForm)