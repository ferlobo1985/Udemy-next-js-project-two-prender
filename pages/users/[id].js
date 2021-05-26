import axios from 'axios';

const User = (props) => {
    return(
        <>
            <h1>I am user {props.user.name}</h1>
        </>
    )
}


export async function getStaticProps(context){
    const {params} = context;
    const request = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)

    return{
        props:{
            user:request.data
        }
    }
}

export async function getStaticPaths(){
    return {
        paths:[
            { params:{id:'1'}},
            { params:{id:'2'}},
            { params:{id:'3'}},
        ],
        fallback:true
    }
}

export default User;