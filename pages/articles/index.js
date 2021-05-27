import { useEffect, useState } from 'react';
import axios from 'axios';

const ArticlesPage = (props) => {
    const [articles,setArticles] = useState(props.articles);

    const loadPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_start=5').
        then(response => {
            setArticles([
                ...articles,
                ...response.data
            ])
        })
    }

    return(
        <ul>
            { articles.map( item => (
                <li>{item.title}</li>
            ))}
            <button onClick={ ()=>loadPosts() }>
                Get more
            </button>
        </ul>
    )
}

export const getStaticProps = async() => {
    const request = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')

    return {
        props:{
            articles: request.data
        }
    }

}


export default ArticlesPage;