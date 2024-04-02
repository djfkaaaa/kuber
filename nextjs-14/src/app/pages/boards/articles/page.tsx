'use client';

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from 'react-redux'
import { IArticles } from "@/redux/features/articles/article.model";
import { getArticles } from "@/redux/features/articles/article.service";
import { getAllArticles } from "@/redux/features/articles/article.slice";
import Columns from "@/app/components/articles/columns";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const articlesPage:NextPage = ({data}:any) => {

    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
        console.log('allArticles is not defined')
        console.log('lenght is = ' + allArticles.length)
        for(let i = 0; i<allArticles.length; i++){
            console.log(JSON.stringify(allArticles[i]))
        }
    }else{
        console.log('allArticles is undefined')
    }

    useEffect(() => {
        dispatch(getArticles(1))
    }, [])

    
    return (<>
        <h2>개인페이지 Article</h2>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={Columns()}
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
    </>)
}
export default articlesPage;
