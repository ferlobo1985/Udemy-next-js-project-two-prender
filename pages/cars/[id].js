import axios from 'axios';

const CarsByIdComp = (props) => {
    return(
        <>
            <h1>{props.car.name}</h1>
        </>
    )
}


export const getServerSideProps = async({params}) => {
    try {
        const request = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            name:params.id
        })

        if(!request.data){
            return{ notFound:true}
        }
    
        return {
            props:{
                car: request.data
            }
        }
    } catch(error){
        return{
            notFound:true
        }
    }

}



export default CarsByIdComp;