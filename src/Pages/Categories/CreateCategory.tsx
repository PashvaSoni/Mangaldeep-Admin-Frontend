import React from 'react';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import { useCreateCategoryMutation } from './CategorySlice';

const CreateCategory = () => {
    const [UseCreateCategory] = useCreateCategoryMutation();
    const [form] = Form.useForm();
    const onFinish = async()=>{
        try {
            const data= await form.validateFields();
            const responseD = await UseCreateCategory(data);
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
        <CreateCategoryContainer>
            <Form form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name={'name'}
                    label={'Category Name'}
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
                        <Input placeholder='Enter new category name ...' showCount minLength={3} maxLength={50} />
                        <Button htmlType='submit' type='primary'>Add</Button>
                    </div>
                </Form.Item>
            </Form>
        </CreateCategoryContainer>
    )
}

export default CreateCategory;

const CreateCategoryContainer = styled.div`
    .hflex{
        display:flex;
    }
`;