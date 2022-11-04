import React, { useState } from 'react'
import { Button, Form, Input, Popconfirm, Spin, Table } from 'antd'
import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa'

import { useDeleteClassMutation, useGetAllClassQuery, useUpdateClassMutation } from './ClassSlice'

import Loading from '../../Components/Loading';
import { config } from '../../Constant';
import { FixedType } from 'rc-table/lib/interface';
import CreateClass from './CreateClass';

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
    fixed: FixedType;
}



const ClassListing = () => {

    const [editingKey, setEditingKey] = useState('');
    const [UseUpdateClass] = useUpdateClassMutation();
    const [UseDeleteClass] = useDeleteClassMutation();
    const { data, isLoading, isFetching, isError, isSuccess, error } = useGetAllClassQuery({});
    const [form] = Form.useForm();

    const isEditing = (records: Item) => {
        return records._id === editingKey
    }

    const onUpdate = (records: Item) => {
        console.log(records.name)
        form.setFieldsValue({ name: records.name });
        setEditingKey(records._id)
    }

    const onDelete = (record: Item) => {
        console.log(record);
        UseDeleteClass(record);
    }

    const onSave = async () => {
        try {
            const row = await form.validateFields();
            const responseD = await UseUpdateClass({ _id: editingKey, name: row.name }).unwrap();
            console.log(responseD);
            setEditingKey('');
        }
        catch (err) {
            console.error(err)
        }
    }

    const onCancel = () => {
        setEditingKey('');
    }

    const columns = [
        {
            title: "Class Name",
            dataIndex: "name",
            editable: true,
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            editable: false,
            align: 'center' as const,
            render: (_: any, records: Item) => {
                return <span>{records?.createdAt?.split('T')[0]}</span>
            }
        },
        {
            title: "Last Modified",
            dataIndex: "updatedAt",
            align: 'center' as const,
            editable: false,
            render: (_: any, records: Item) => {
                return <span>{records?.updatedAt?.split('T')[0]}</span>
            }
        },
        {
            title: "Actions",
            width: 210,
            fixed: 'right' as const,
            render: (_: any, records: Item) => {
                const editable = isEditing(records);
                return editable ?
                    (<div className='hflex'>
                        <Popconfirm icon={<FaInfoCircle className='icon' />} onConfirm={() => onSave()} cancelButtonProps={{ type: 'primary' }} okText="Update" placement="topRight" title={`This will update the Class ${records.name} !`}>
                            <Button type='primary'>Save</Button>
                        </Popconfirm>
                        <Button type='primary' onClick={() => onCancel()} >Cancel</Button>
                    </div>)
                    : (<div className='hflex'>
                        <Button type='primary' onClick={() => onUpdate(records)} >Update</Button>
                        <Popconfirm onConfirm={() => onDelete(records)} placement="topRight" cancelButtonProps={{ type: 'primary' }} okText="Delete" title={`This will permanently delete the Class ${records.name} !`}>
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
                        <Input placeholder='Class Name ...' showCount maxLength={50} minLength={3} />
                    </Form.Item>)
                    : (
                        children
                    )
                }
            </td>
        );
    }




    let content;
    if (isLoading || isFetching) {
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
                scroll={{
                    x: 1100,
                }}
            />
        </Form>
    }
    else {
        content = <pre>{JSON.stringify(error)}</pre>
    }

    return (<>
        <CreateClass />
        <Class_List_Container>
            <Class_List>
                {content}
            </Class_List>
        </Class_List_Container>
    </>)
}

export default ClassListing;

const Class_List_Container = styled.div`
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

const Class_List = styled.div`
    display:flex;
    margin:auto auto;
    justify-content:center;
    width:100%;
`;
