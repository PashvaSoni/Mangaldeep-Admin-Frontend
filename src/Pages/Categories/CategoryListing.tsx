import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Popconfirm, Spin, Table } from 'antd'
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa'

import { useGetAllCategoriesQuery } from './CategorySlice'

import Loading from '../../Components/Loading';
import { config } from '../../Constant';

interface Item {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'text'; // <---
    record: Item;
    index: string; // <---
    children: React.ReactNode;
}



const CategoryListing = () => {
    const [editingKey, setEditingKey] = useState('');
    const { data, isLoading, isFetching, isError, isSuccess, error } = useGetAllCategoriesQuery({});
    const [form] = Form.useForm();

    const isEditing = (records: Item) => {
        return records._id === editingKey
    }

    const onUpdate = (records:Item) => {
        console.log(records.name)
        form.setFieldsValue({ name: records.name});
        setEditingKey(records._id)
    }
    const onDelete = () => {

    }
    const onSave = () => {

    }
    const onCancel = () => {
        setEditingKey('');
    }

    const columns = [
        {
            title: "Category Name",
            dataIndex: "name",
            editable: true,
            width:"30%"
        },
        {
            title: "Created At",
            dataIndex: "created_date",
            editable: false
        },
        {
            title: "Last Modified",
            dataIndex: "modify_date",
            editable: false
        },
        {
            title: "Actions",
            render: (_: any, records: Item) => {
                const editable = isEditing(records);
                return editable ?
                    (<div className='hflex'>
                        <Popconfirm icon={<FaInfoCircle className='icon' />} onConfirm={() => console.log("Save " + records._id)} okText="Update" title={`This will update the category ${records.name} !`}>
                            <Button type='primary'>Save</Button>
                        </Popconfirm>
                        <Button type='primary' onClick={() => onCancel()} >Cancel</Button>
                    </div>)
                    : (<div className='hflex'>
                        <Button type='primary' onClick={()=>onUpdate(records)} >Update</Button>
                        <Popconfirm icon={<FaInfoCircle className='icon' />} onConfirm={() => console.log("Delete " + records._id)} okText="Delete" title={`This will permanently delete the category ${records.name} !`}>
                            <Button type='primary'>Delete</Button>
                        </Popconfirm>
                    </div>);
            }
        }
    ]
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const EditTableCell: React.FC<EditableCellProps> = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        return (
            <td {...restProps}>
                {editing ?
                    (<Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        <Input placeholder='Category Name ...' showCount maxLength={50} minLength={3}  />
                    </Form.Item>)
                    : (
                        children
                    )
                }
            </td>
        );
    }




    let content;
    if (isLoading) {
        content = <Spin />;
    }
    else if (isSuccess) {
        content = <Form form={form} component={false}>
            <Table
                sticky
                components={{
                    body: {
                        cell: EditTableCell,
                    },
                }}
                dataSource={data?.data}
                columns={mergedColumns}
            />
        </Form>
    }
    else {
        content = <pre>{JSON.stringify(error)}</pre>
    }

    return <Category_List_Container>
        <Category_List>
            {content}
        </Category_List>
    </Category_List_Container>
}

export default CategoryListing;

const Category_List_Container = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    height:100%;
    overflow:scroll;

    .icon:{
        color:red;

    }
    .hflex{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
    }
    .vflex{
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;
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

const Category_List = styled.div`
    display:flex;
    margin:auto auto;
    justify-content:center;
    width:100%;
`;
// const StyledTable = styled((props) => <Table {...props} />)`
//   && tbody > tr:hover > td {
//     background: ${(prop)=>prop.theme.color.color2};
//   }
// `
