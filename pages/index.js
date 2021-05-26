import axios from 'axios';
import { useEffect } from 'react';

const Home = (props) => {



  return (
    <div>
      <h1>Hello {props.name}</h1>
      <span>Nothing to see here just a span, {props.value}</span>
      <ul>
        { props.theRequest.map( item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}


export async function getStaticProps() {
  const request = await axios.get('https://jsonplaceholder.typicode.com/users');
  
  return {
    props:{
      name:'Francis',
      value:'Just a boy here',
      theRequest: request.data
    },
    revalidate:60
  }
}



export default Home;