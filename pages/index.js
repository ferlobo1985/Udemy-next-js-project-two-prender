import axios from 'axios';
import Link from 'next/link';

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

      <div>
        <div>
          <Link href="/users/1">User one</Link>
        </div>
        <div>
          <Link href="/users/2">User two</Link>
        </div>
        <div>
          <Link href="/users/4">User four</Link>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const request = await axios.get('https://jsonplaceholder.typicode.com/users');
  
  // if(request.data.length > 8 ){
  //   return {
  //     redirect:{
  //       destination:'/someplace_else'
  //     }
  //     //notFound:true
  //   }
  // }

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