import {useSelector} from 'react-redux';


function SymptomDetail(){
    const details = useSelector((store)=>store.detail);

    console.log(details);

    return (
        <>
        <h1>I am the details you were looking for</h1>
        <p>{JSON.stringify(details)}</p>
        </>
    )
}

export default SymptomDetail;