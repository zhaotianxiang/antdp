import React, { useRef } from 'react';
import { Button } from 'antd';
import moment from 'moment';
export const baseItems = () => [
  {
    name: 'range-picker',
    label: '开始时间',
    type: 'rangePicker',
    initialValue: [
      moment('2021/06/01', 'YYYY/MM/DD'),
      moment('2021/06/02', 'YYYY/MM/DD'),
    ],
    attributes: {
      allowClear: true,
      // showTime: true,
      format: 'YYYY/MM/DD',
    },
    rules: [
      {
        type: 'array',
        required: true,
        message: '开始时间不能为空',
      },
    ],
  },
  {
    label: '消息对象',
    name: 'name2',
    type: 'input',
    rules: [
      {
        required: true,
        message: '消息对象不能为空',
      },
    ],
  },
  {
    label: '消息名称',
    name: 'name3',
    type: 'input',
  },
];

export const columns = () => [
  {
    title: '序号',
    dataIndex: 'order',
    align: 'center',
  },
  {
    title: '消息类型',
    dataIndex: 'messageType',
    align: 'center',
  },
  {
    title: '消息对象',
    dataIndex: 'messageObj',
    align: 'center',
  },
  {
    title: '消息名称',
    dataIndex: 'messageName',
    align: 'center',
  },
  {
    title: '操作',
    align: 'center',
    render: (tag) => (
      <React.Fragment>
        <Button type="link">是否发送</Button>
        <Button type="link">编辑消息</Button>
      </React.Fragment>
    ),
  },
];

export const detailItems = (fileList, setFileList) => [
  {
    label: '备注',
    name: 'remark',
    type: 'input',
    initialValue: 'zz爱ff',
  },
  {
    label: '水果',
    name: 'fruit',
    type: 'select',
    options: [{ label: '苹果', value: 1 }],
    initialValue: 1,
  },
  {
    label: '蔬菜',
    name: 'fruits',
    type: 'radio',
    options: [
      { label: '青菜', value: 1 },
      { label: '黄瓜', value: 2 },
    ],
    initialValue: 2,
  },
  {
    label: '上报时间',
    name: 'time',
    type: 'datePicker',
    initialValue: moment(),
  },
  {
    label: '照片',
    name: 'picture',
    type: 'UploadGrid',
    full: true,
    attributes: {
      fileList: fileList,
      onChange: ({ fileList }) => setFileList(fileList),
      action: '',
      listType: 'picture-card',
      showUploadList: {
        showRemoveIcon: false,
      },
    },
  },
];
