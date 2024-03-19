import { createColumnHelper } from '@tanstack/react-table';
import { Tag } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const columnHelper = createColumnHelper<any>();

export const walletTableColumn = [
  columnHelper.accessor('_id', {
    header: () => 'Transaction Id',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('rechargeCode', {
    header: () => <span>Recharge Code</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: () => 'Status',
    cell: (info) => {
      if (info.getValue() === 'Succeeded') {
        return (
          <div>
            <Tag icon={<CheckCircleOutlined />} color='success'>
            Succeeded
            </Tag>
          </div>
        );
      } else if (info.getValue() === 'Failed') {
        return (
          <div>
            <Tag icon={<CloseCircleOutlined />} color='error'>
              Failed
            </Tag>
          </div>
        );
      }
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('studentId', {
    header: () => <span>Student Id</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('createdAt', {
    header: 'Created At',
    cell: (info) => <div>{new Date(info.getValue()).toLocaleString()}</div>,
    footer: (info) => info.column.id,
  }),
];
