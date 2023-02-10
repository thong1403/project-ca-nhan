import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import "./css/Login.css";
import Nav from "./Nav";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState([]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values.username, values.password);
    if(user.email ===values.username && user.password === values.password){
      alert('đăng nhập thành công')
    }else{
      alert('đăng nhập thất bại')
    }
    axios
      .get("http://localhost:3000/profile")
      .then((data) => setUser(data.data))

      .catch((err) => console.log(err));
  };
  console.log(user);
 

  return (
    <>
      <Nav />

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 className="title-store">LOGIN CLOTHING STORE</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to= "/register">register now!</Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
