import { useEffect, useState } from 'react';
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'


const News = () => {
    const [news, setNews] = useState([]);

    const getNews = async () => {

        const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '757ecf22b6mshdddfd0a1fdf7078p1dc914jsn7fc56c2bb903',
                'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setNews(result?.data);
            console.log(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={6} >

            {
                news.map((val) => {
                    return (
                        <div className="col my-3" >
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={val.thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <p className="card-text word-wrap-wrap" >{val.description}</p>
                                    <a href={val.url} className="btn btn-primary" target='_blank'>Read Full Article</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </Grid>
    )
}

export default News;