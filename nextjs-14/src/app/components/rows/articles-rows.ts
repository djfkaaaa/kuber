import { API } from "@/redux/common/enums/API"
import { useEffect, useState } from "react"
import AxiosConfig from "../../../redux/common/configs/axios-config"
import axios from "axios";

 export default function ArticleRow () {
    
    const [contentlists, setContentlists] = useState([])
    const url = `${API.SERVER}/api/articles`
    const config = AxiosConfig()

    useEffect(() => {
        axios.get(url, config)
            .then(res => {
                const message = res.data.message
                console.log((message))
                if (message === 'SUCCESS') {
                    const arr = res.data.result
                    for (const i of arr) {
                        console.log(i);
                    }
                    setContentlists(res.data.result)
                } else if (message === 'FAIL') {
                    console.log("게시글이 없습니다.");
                } else {
                    console.log("지정되지 않은값");
                }
            })
    }, [])
 }