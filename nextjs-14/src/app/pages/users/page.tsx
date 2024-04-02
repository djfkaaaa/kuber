'use client';

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from 'react-redux'
import { IArticles } from "@/redux/features/articles/article.model";
import { getArticles } from "@/redux/features/articles/article.service";
import { getAllArticles } from "@/redux/features/articles/article.slice";

const usersPage:NextPage = () => {

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
        <table border={1}>
            <thead>
                <tr>
                    <th>title</th>
                    <th>content</th>
                    <th>writer</th>
                    <th>registerDate</th>
                </tr>
            </thead>
            <tbody>
                {allArticles?.map((props: IArticles) => (
                    <tr key={props.id}>
                        <td>{props.title}</td>
                        <td>{props.content}</td>
                        <td>{props.writer}</td>
                        <td>{props.registerDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}
export default usersPage;
