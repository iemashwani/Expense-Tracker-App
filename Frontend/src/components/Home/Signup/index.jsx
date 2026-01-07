import { Button, Card, Form, Input } from "antd";
import { LoginOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Item } = Form;
import Homelayout from "../../../Layout/Homelayout";

const Signup = () => {
  return (
    <Homelayout>
      <div className="flex">
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img
            src="/exp-img.jpg"
            alt="Bank Image"
            className="w-4/5 object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-2 md:p-6 bg-white">
          <Card className="w-full max-w-sm shadow-xl">
            <h2 className="font-bold text-[#437de8] text-2xl text-center mb-6">
              Register to Track Your Expense
            </h2>
            <Form name="login-form" layout="vertical">
              <Item
                name="fullname"
                label="Fullname"
                rules={[{ required: true }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your fullname"
                />
              </Item>

              <Item
                name="mobile"
                label="Contact Number"
                rules={[{ required: true }]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="Enter your contact number"
                />
              </Item>

              <Item name="email" label="Email" rules={[{ required: true }]}>
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your email"
                />
              </Item>
              <Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
              >
                <Input.Password
                  prefix={<LoginOutlined />}
                  placeholder="Enter your password"
                />
              </Item>
              <Item>
                <Button
                  type="text"
                  htmlType="submit"
                  className="bg-[#437de8]! text-white! font-bold!"
                  block
                >
                  Signup
                </Button>
              </Item>
            </Form>
            <div className="flex justify-center items-center">
              <Link
                style={{ textDecoration: "underline" }}
                to="/"
                className="text-[#437de8]! font-bold!"
              >
                Already have an Account?
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </Homelayout>
  );
};

export default Signup;
