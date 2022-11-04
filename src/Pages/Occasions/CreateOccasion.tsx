import React from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import { useCreateOccasionMutation } from './occasionsSlice';

const CreateOccasion = () => {
    const [UseCreateOccasion] = useCreateOccasionMutation();
    const [form] = Form.useForm();
    const onFinish = async()=>{
        try {
            const data= await form.validateFields();
            const responseD = await UseCreateOccasion(data);
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
        <CreateOccasionContainer>
            <Form form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name={'name'}
                    label={'Occasion Name'}
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
                        <Input placeholder='Enter new Occasion name ...' showCount minLength={3} maxLength={50} />
                        <Button htmlType='submit' type='primary'>Add</Button>
                    </div>
                </Form.Item>
            </Form>
        </CreateOccasionContainer>
    )
}

export default CreateOccasion;

const CreateOccasionContainer = styled.div`
    .hflex{
        display:flex;
    }
`;