import React, { useState } from "react";
import { Table, Button } from "antd";

const CommonTable = ({
  data,
  columns,
  tableTitle,
  rowClickable,
  settingModalDataFunction,
}) => {
  return (
    <>
      <div className='card ctm-border-radius shadow-sm'>
        <div className='card-header'>
          <h4 className='card-title mb-0'>{tableTitle}</h4>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <Table
              className='table-striped'
              dataSource={data}
              columns={columns}
              rowKey={(record) => record.id}
              onRow={(record, index) => ({
                onClick: () =>
                  rowClickable ? settingModalDataFunction(record) : null,
              })}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonTable;
