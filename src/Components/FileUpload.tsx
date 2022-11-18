import React, { useEffect, useState } from 'react'
import { Button, Tooltip, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import type { RcFile, UploadProps } from 'antd/es/upload';
import styled from 'styled-components';
import { FaUpload } from 'react-icons/fa'
import axios from 'axios';

type Props = {
    imageUrlArray: string[],
    fileCount?: number
};
const uploadButton = (
    <div>
        <FaUpload />
        <div
            style={{
                marginTop: 8,
            }}
        >
            Select Files
        </div>
    </div>
);

const createUploadUrl = (urls: string[]) => {
    const newList: UploadFile[] = urls.map((item) => { return { url: item } as UploadFile });
    return newList;
}
const FileUpload = (props: Props) => {
    const [fileList, setFileList] = useState<UploadFile[]>([...createUploadUrl(props.imageUrlArray)]);
    const [uploadLoading, setUploadLoading] = useState(false);
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);
    const beforeUpload = (file: UploadFile) => {
        console.log("inbside", file)
        setFileList([...fileList, file]);
        return false;
    }
    const uploadFiles = async() => {
        const formData = new FormData();
        fileList.forEach((file)=>{
            formData.append('file[]',file as RcFile)
        });
        setUploadLoading(true);
        try{
            // const response = await axios.post('https://api.upload.io/v2/accounts/FW25axi/uploads/binary',formData,{headers:{"Authorization": "Bearer public_FW25axiAFa4euLhTEpqVY6Y8Gfcm","Content-Type":"image/jpeg"}});
            // console.log('success',response);
        }
        catch(err)
        {
            console.error("failed",err)
        }
        finally
        {
            setUploadLoading(false);
        }

    }
    const deleteFiles = async()=>{
        setUploadLoading(true);
        try{
            const response = await axios.delete('https://api.imgur.com/3/image',{headers:{"Authorization": "Bearer public_FW25axiAFa4euLhTEpqVY6Y8Gfcm","content-type":"image/jpeg"}});
            console.log('success',response);
        }
        catch(err)
        {
            console.error("failed",err)
        }
        finally
        {
            setUploadLoading(false);
        }
    }
    console.log("upload rendered")
    return (
        <File_Upload_Container>
            <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                beforeUpload={beforeUpload}
                onRemove={deleteFiles}
            >
                {fileList.length >= (props.fileCount || 8) ? null : uploadButton}
            </Upload>
            <Tooltip title={fileList.length > 0 ? "Are you sure this files will be uploaded ?" : "Select atleast 1 file to upload !"}>
                <Button onClick={uploadFiles} disabled={(fileList.length <= 0 || uploadLoading) ? true : false} type='primary'>Upload</Button>
            </Tooltip>
        </File_Upload_Container>
    )
}

export default FileUpload;

const File_Upload_Container = styled.div`
    text-align:center;
    .ant-upload-list{
        padding:0.5rem;
        margin-bottom:0.5rem;
        border: 1px dotted white !important;
        display: flex !important;
        flex-wrap: wrap !important;
        justify-content: center !important;
        width: 100% !important;
    }

    .ant-upload-select-picture-card{
        background-color: transparent !important;
    }
`;

// Joe Bloogs
// teyeger430@lidely.com
// Wtf@987654321
// https://upload.io/dashboard/files/uploads/2022/11/14