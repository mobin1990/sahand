import React, { useState } from "react";
//!
import { motion, AnimatePresence } from "framer-motion";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Space } from 'antd';
import Password from "antd/es/input/Password";
import { style } from "framer-motion/client";
function LoginForm({ isMoved, onClick }) {
    // const [passwordVisible, setPasswordVisible] = useState(false); //! برای نمایش پسورد

    const onFinish = values => {
        console.log('Received values of form: ', values);
      };
      
  return (
    <>
      {!isMoved && (
        <motion.div
          className=" w-1/2  h-screen text-center content-center absolute top-0 right-0"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

<div  className="  flex flex-col w-75/100 font-dirooz text-2xl  justify-center mr-8">
<Form
      name="login"
      initialValues={{ remember: true }}
        
      onFinish={onFinish}
       rootClassName=" !bg-gray-300 shadow-2xl shadow-gray-600 !rounded-2xl !py-18 !px-6 w-full h-auto  "
       
       style={{padding:"16px",fontFamily:"var(--font-vazir)",fontSize:"24px"}}
     
    >
     
     <Form.Item
        name="username"
        
        rootClassName="!mb-9"
        
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
         <Input  prefix={<UserOutlined className=" text-xl"/>} placeholder="Username" />
      </Form.Item>
    
      <Form.Item
        name="password"
        rootClassName="!mb-4"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined  className=" text-xl" />} type="password" placeholder="Password" />
      </Form.Item>
        
       

      <Form.Item  rootClassName="!my-8">
        <Flex justify="space-between" align="center" >
          <a href=""  style={{textDecoration:"underline", textUnderlineOffset:"8px"}} className="underline-offset-4 font-sans text-[14px] px-2"> فراموشی رمز عبور </a>
          <Form.Item name="remember" valuePropName="unChecked" noStyle>
            <Checkbox rootClassName=" !font-sans !text-[14px]"> مرا بخاطر بسپار!</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" rootClassName="!font-sans !text-[16px] !font-bold">
          ورود به حساب
        </Button>
       <div className="my-2"> 
       <span className="font-sans text-[13px] pl-1">حساب کاربری نداری؟</span>
         {/* //! دکمه ای که صفحه رو عوض میکنه */}
       <button onClick={onClick} className="btn btn-link underline-offset-6 pr-0 !font-sans text-[12px]" href="">{isMoved ? " ورود" : " همین حالا بسازش!"}   </button>
       </div>
      </Form.Item>
    </Form>





        
        
          </div>
        </motion.div>
      )}
    </>
  );
}

export default LoginForm;
