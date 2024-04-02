'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MuiDemoRows from '@/app/components/rows/mui-demo-rows';
import MuiDemoColumns from '@/app/components/columns/mui-demo-columns';
import CompaniesRow from '@/app/components/rows/companies-rows';
import CompaniesColumns from '@/app/components/columns/companies-columns';

export default function DataGridDemo() {
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={MuiDemoRows()}
        columns={MuiDemoColumns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
