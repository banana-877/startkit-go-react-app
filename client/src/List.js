import { useEffect, useState } from "react";
import styled from 'styled-components'
import { TabBodyContainer } from "./components/tab-body-container";
import { server } from "./const/apiBase";
import axios from 'axios';

const ListItem = styled.div`
padding: 8px 16px;

&:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
}
`


export const List = ({ aaa }) => {
    const [books, setBooks] = useState(aaa)

    useEffect(() => {
        axios.get(server)
            .then(res => {
                const bbb = [];
                console.log('axiosの中');
                for (const booklist of res.data) {
                    bbb.push(booklist.title)
                }
                console.log("aaaの中身");
                console.log(bbb);
                setBooks(bbb.map((number) =>
                    <ListItem key={number.toString()}>
                        {number}
                    </ListItem>
                ))
            })
            .catch((error) => {
                console.log('通信失敗');
                console.log(error.status);
            });
        return () => {
            console.log('List.jsのuseEffectのunmountが走った')
        }
    }, [])
    return (
        <TabBodyContainer title="取ってきたデータリスト（API未実装）">
            {books}
        </TabBodyContainer>
    )
}