import React,{useSta, useState} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
 
export default (): React.ReactNode => {
  const intl = useIntl();
  const [fileList,setFileList] =useState<any>([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ])
  const handleChange = (info:any) => {
    let filelist = [...info.fileList];
    console.log(filelist)
    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    // filelist = fileList.slice(-2);

    // // 2. Read from response and show file link
    // filelist = filelist.map(file => {
    //   if (file.response) {
    //     // Component will show file.url as link
    //     file.url = file.response.url;
    //   }
    //   return file;
    // });

    // setFileList({ fileList });
  };
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true,
    // onRemove:()=>{
    //   setFileList([])
    // }
  };
  
  return (
    <PageContainer>
      <div onClick={()=>{setFileList([])}}>123</div>
      <Upload {...props} fileList={fileList}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </PageContainer>
  );
};
