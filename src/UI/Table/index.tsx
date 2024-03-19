import React from 'react';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

export const Table = ({ data, columns }: { data: any[]; columns: any[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='max-w-full overflow-hidden overflow-x-auto'>
      <table className='w-full min-w-[1000px] rounded-lg overflow-hidden'>
        <thead className='bg-gray-100 border rounded-lg text-left'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className='px-3 py-2 border-r' key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='border'>
          {table.getRowModel().rows.map((row) => (
            <tr className='border hover:bg-indigo-50 duration-300' key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className='border-r text-left px-3 py-2' key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
