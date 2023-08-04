import React from 'react'
import { styled } from 'styled-components'
// import format from `timeago.js`
const Wrapper = styled.div`
border: 1px solid white;
min-width: 250px;
height: fit-content;
display: flex;
flex-direction: column;
margin: 10px;
padding: 10px;
    
`
const Title = styled.span`
    height: 60px;
`
const Image = styled.img`
height: 200px;
width: 200px;
    
`
const Span = styled.span`
    
margin: 10px 0px;
`
const SpanHolder = styled.div`
display: flex;
justify-content: space-between;
    
`
const Content = styled.span`
height: 50px;
    
`

const NewsCompenent = (News ) => {
    console.log(News.news?.title.length)
    return (
        <Wrapper>
            <Title>
                {News.news?.title.length>60?News.news?.title.slice(0,60)+"...":News.news?.title}
            </Title>
            <Span>
                {News.news?.content.length>200?News.news?.content.slice(0,200)+"...":News.news?.content}
                {/* {News.news?.content.slice(0,500)} */}
            </Span>
            <Image src={String(News.news?.urlToImage)}/>

            <SpanHolder>
                <Span>
                    {News.news?.author?News.news?.author:"Unknown Author"}
                </Span>
            <Span>
                {News.news?.publishedAt}
            </Span>
            </SpanHolder>
        </Wrapper>
    )
}

export default NewsCompenent