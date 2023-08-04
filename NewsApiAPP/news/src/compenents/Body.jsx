import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Filter from './Filter'
import NewsCompenent from './NewsCompenent'
import axios from 'axios'
const Wrapper = styled.div`
height: 90.5vh;
border: 1px solid black;
padding: 30px 150px;
display: flex;
flex-direction: column;
    
`
const NewsCompenentHolder = styled.div`
display: flex;
width: 1100px;
flex-direction: row;
/* overflow-x: hidden;
overflow-y: scroll; */
`

const Body = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchNews = async () => {

            const res = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=ca81373a7e384840be54fcde05382ea7`);
            setData(res.data.articles);
        }
        fetchNews();
    }, [])
    return (
        <Wrapper>
            <Filter />
            <NewsCompenentHolder>
                {data?.map((d) => (

                    <NewsCompenent key={d.url} news={d}/>
                ))}
                {/* <NewsCompenent />
                <NewsCompenent />
                <NewsCompenent />
                <NewsCompenent />
                <NewsCompenent />
                <NewsCompenent />
                <NewsCompenent /> */}
            </NewsCompenentHolder>

        </Wrapper>
    )
}

export default Body