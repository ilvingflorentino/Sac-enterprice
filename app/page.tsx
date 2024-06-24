"use client";
import React from "react";
import { Button } from "antd";
import { Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import "./index.css";
function Login() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="container">
      <div className="select-container">
        <link rel="icon" href={"Favicon.ico"}></link>
        <img src={"Sac.jpg"} alt="Sac Software Logo" className="custom-image" />

        <div className="horizontal-elements">
          <div className="element">
            {" "}
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ Recuerdame: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Recuerdame</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Link href={"/Home"}>
                  {" "}
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Ingrese a License Creator
                  </Button>
                </Link>
              </Form.Item>
            </Form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
