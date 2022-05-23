import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SymptomItem from '../SymptomItem/SymptomItem.jsx';

function SymptomTracker() {
    useEffect(() => {
        dispatch({
          type: 'FETCH_SYMPTOMS'
        })
      }, [])
      const symptoms = useSelector(store => store.symptom)
      const dispatch = useDispatch();

  return (
    <>
    {symptoms.map( (symptom) => {
        return(
            <SymptomItem symptom={symptom}/>
      )}) 
 }
    </>
  );
}
export default SymptomTracker;
