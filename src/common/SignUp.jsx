import React, { useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

//!
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Form,
  Input,
  InputNumber,
  ConfigProvider,
  Steps,
  theme,
  message,
  Select,
  DatePicker,
  Space,
  AutoComplete,
  Flex
} from "antd";

function SignUp({ isMoved, onClick }) {
  const { RangePicker } = DatePicker;
  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "صفخه دوم",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  //! ثبت نام چندرحله ای
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle = {
    // lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      {/* <ConfigProvider direction="rtl"> */}
        {isMoved && (
          <motion.div
            className="w-100 px-3 !py-9 !my-10 !ml-8  rounded-lg !bg-gray-300 shadow-2xl shadow-gray-600 text-center content-center absolute top-0 left-0"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            
            {/* //! فرم */}
            <Steps current={current} items={items} />
            <div style={contentStyle} className="!h-75  !border-0">
              {/* //! مرحله اول */}
              {current === 0 ? (
                
                <Form
                  {...layout}
                  name="nest-messages"
                  onFinish={onFinish}
                 
                  layout="horizontal"
                  labelAlign="right"
                  labelCol={{ span:6 }}      // عرض لیبل
                  wrapperCol={{ flex:"auto" }}   // عرض اینپوت
                  style={{ direction: "rtl" }}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name={["user", "name"]}
                    label="نام"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="لطفا، نام خود را وارد کنید"
                      rootClassName=""
                    />
                  </Form.Item>
                  <Form.Item
                    name={["user", "familyName"]}
                    label="نام خانوادگی"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="لطفا، نام خانوادگی خود را وارد کنید" />
                  </Form.Item>
                  {/* <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                  <Input placeholder="لطفا، ایمیل خود را وارد کنید" />
                </Form.Item> */}

                  <Form.Item
                    label="تاریخ تولد"
                    name="DatePicker"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <DatePicker  className=" w-full !py-0 !pr-0" />
                  </Form.Item>

                  <Form.Item
                    name={["user", "phoneNumber"]}
                    label=" شماره موبایل"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="لطفا شماره موبایل خود را وارد کنید"/>
                  </Form.Item>
                  {/* <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item> */}
                </Form>
               
              ) : current === 1 ? (
                //! مرحله دوم
                // steps[current].content
                <>
               <ConfigProvider >

              
                
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    // layout="vertical" // یا horizontal بسته به نیاز
                    // labelAlign="right" // لیبل‌ها رو راست‌چین کنه
                    layout="horizontal"
                    labelAlign="right"
                    labelCol={{ span: 6 }}      // عرض لیبل
                    wrapperCol={{span:18 }}   // عرض اینپوت
                    style={{ direction: "rtl" }}
                    validateMessages={validateMessages}
                    
                  
                  >
                    {/* //! نام کاربری */}
                    <Form.Item
                      name="nickname"
                      label="نام کاربری"
                      className="!text-right"
                      // style={{ textAlign: "right" }}
                      tooltip="  دیگران شما رو با این اسم می بینن !  "
                      rules={[
                        {
                          required: true,
                          message: "Please input your nickname!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input placeholder="نام کاربری خود را وارد کنید"/>
                    </Form.Item>

                    {/* //! ایمیل */}
                    <Form.Item
                      name="email"
                      label="ایمیل"
                     rootClassName="!mb-7"

                      // rootClassName="bg-yellow-200   "
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input placeholder="ایمیل خود را بنویسید"/>
                    </Form.Item>

                    {/* //! پسورد */}
                    <Form.Item
                      name="password"
                      label="پسورد"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password className="!py-0 !px-4 !pr-0"  placeholder="پسورد خود را وارد کنید"/>
                    </Form.Item>

                    {/* //! تایید پسورد */}
                    <Form.Item
                      name="confirm"
                      label="تایید پسورد"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The new password that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password className="!py-0 !px-4 !pr-0" placeholder="پسورد خود را مجددا وارد کنید" />
                    </Form.Item>
                  </Form>
             
                </ConfigProvider>
                </>
              ) : (
                //! مرحله سوم
                <>
                  <div className="flex items-center justify-center bg-[#185FEC] h-full rounded-2xl text-white w-full  "> 
                    
                      <div className="py-2 ">
                      <div className="flex items-center justify-center">
                      <p> <IoCheckmarkDoneCircleSharp className="text-5xl mb-2 text-[#2BE84B]"/></p>
                      <p className="font-sans text-[18px] font-bold"> .ثبت نام شما تکمیل شد</p>
                      </div>
                       <p className="font-sans text-[15px] leading-7 font-bold w-8/10 mx-auto">به جمع ما خوش اومدی و امیدواریم از اموزش ها لذت ببری و لحظات خوشی در کنار هم داشته باشیم.</p>
                       <button className="btn btn-link underline-offset-6"> بازگشت به صفحه اصلی</button>


                      </div>
                   
                 
                  </div>
                </>
              )}
            </div>
            <div  className="flex flex-row-reverse justify-center  !mt-2">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  بعدی
                </Button>
              )}

              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  پایان !
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }}  onClick={() => prev()}>
                  قبلی
                </Button>
              )}
            </div>
           
            <button className="btn btn-link underline-offset-6 !mt-2 !text-gray-600 " onClick={onClick}>
              {isMoved ? "حساب کاربری دارم" : "ثبت نام "}
            </button>
            {/*  </motion.div> */}

          </motion.div>
        )}
      {/* </ConfigProvider> */}
    </>
  );
}

export default SignUp;
