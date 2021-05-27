import Link from 'next/link';

const CarsMain = (props) => {
    return(
        <>
            <h1>Cars</h1>
            { props.cars.map(item => (
                <div key={item}>
                    <Link href={`/cars/${item}`}>{item}</Link>
                </div>
            ))}
        </>
    )
}

export const getServerSideProps = async(context) => {

    console.log(context.params)
    console.log(context.req)
    console.log(context.res)

    return {
        props:{
            cars:['nissan','ford','mazda','ferrari']
        }
    }
}


export default CarsMain;