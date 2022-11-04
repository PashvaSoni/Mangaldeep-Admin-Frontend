import React from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import { useCreateClassMutation } from './ClassSlice';

const CreateClass = () => {
    const [UseCreateClass] = useCreateClassMutation();
    const [form] = Form.useForm();
    const onFinish = async()=>{
        try {
            const data= await form.validateFields();
            const responseD = await UseCreateClass(data);
            console.log(responseD);
            form.setFieldsValue({name:''});
        }
        catch(err)
        {
            console.error(err);
        }
    }
    const onFinishFailed=()=>{
        
    }
    return (
        <CreateClassContainer>
            <Form form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name={'name'}
                    label={'Class Name'}
                    labelAlign='left'
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            message: `Please Input proper name!`,
                        },
                    ]}
                >
                    <div className='hflex'>
                        <Input placeholder='Enter new Class name ...' showCount minLength={3} maxLength={50} />
                        <Button htmlType='submit' type='primary'>Add</Button>
                    </div>
                </Form.Item>
            </Form>
        </CreateClassContainer>
    )
}

export default CreateClass;

const CreateClassContainer = styled.div`
    .hflex{
        display:flex;
    }
`;