import React,{useState} from 'react'
import { Form, Input, Button, Select, Row, DatePicker } from 'antd'
import styled from 'styled-components';
import FileUpload from '../../Components/FileUpload';
import {selectAllOffers} from './OfferSlice'
import { useSelector } from 'react-redux';
import { useGetAllOffersQuery } from './OfferSlice';

const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';

const OfferForm = () => {
  const [loading,setLoading] = useState(false);
  const {data}=useGetAllOffersQuery({});
  const [formData,setFormData] = useState({});
  const test = useSelector(state=>selectAllOffers(state));
  const [form] = Form.useForm();
  const onFinish = (val: any) => {
    console.log("Finished : ", val);
  }
  console.log(data);
  console.log("test",test);
  return (
    <Offer_Form_Container>
      <Form form={form}
        style={{ width: "100%" }}
        onFinish={onFinish}
        labelWrap={true}
        labelCol={{ flex: '130px' }}
        labelAlign="left"
        disabled={loading}
      >
        <div className='hflex' >
          <Form.Item
            label="Title"
            name="title"
            rules={[{
              required: true, message: 'Offer Title is required !'
            },
            {
              type: 'string',
              message: 'Title should be string !'
            },
            {
              min: 5,
              message: 'Title should be minimum 5 character long !'
            },
            {
              max: 100,
              message: 'Title can maximum be 100 character long !'
            }
            ]}
          >
            <Input name='title' placeholder='Enter Offer Title' />
          </Form.Item>
          <Form.Item
            label="Target URL"
            name="targetlink"
            rules={[{
              required: true
            },
            {
              type: 'url',
            },
            {
              min: 5,
            },
            {
              max: 100,
            }
            ]}
          >
            <Input name='targetlink' placeholder='Enter Target Url' />
          </Form.Item>
        </div>
        <div className='hflex' >
          <Form.Item
            label="Start Date"
            name="startdate"
          >
            <DatePicker name='startdate' placeholder='Select Start Date' />
          </Form.Item>
          <Form.Item
            label="End Date"
            name="enddate"
          >
            <DatePicker name='enddate' placeholder='Select End Date' format={dateFormat} onChange={(val:any)=>{console.log("Date Value :",val.toISOString(true))}}/>
          </Form.Item>
        </div>
        <Form.Item
          label="Description"
          name="description"
          rules={[{
            required: true
          }, {
            type: 'string'
          },
          {
            min: 10
          },
          {
            max: 250
          }
          ]}
        >
          <TextArea placeholder='Enter Offer Description' name='description' />
        </Form.Item>
        <FileUpload fileCount={3} imageUrlArray={['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png','https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']}  />
        <Form.Item>
          <Button htmlType='submit' type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Offer_Form_Container>
  )
}

export default OfferForm;

const Offer_Form_Container = styled.div`
  display:flex;
  // border:1px solid yellow;
  
  .ant-picker{
    width:100% !important;
  }
  .hflex{
    display:flex;
    gap:0.5rem;
    // border:1px solid red;
  }
  .hflex>*{
    width:100%;
  }

  @media ${(prop) => prop.theme.device.mobile} { 
    .hflex{
      flex-direction:column;
    }
  }
  @media ${(prop) => prop.theme.device.tablet} {
  }
  @media ${(prop) => prop.theme.device.laptop} { 
  }
`;