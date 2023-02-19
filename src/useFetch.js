import { useState, useEffect } from "react";
const useFetch = (url) =>{
    const [data , setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>{
        const abortCont = new AbortController();

        setTimeout(()=>{
          fetch(url, {signal: abortCont.signal })
              .then(res => {
                  //console.log(res);
                  if (!res.ok) {
                      throw Error('Datayı fetchleyemedim.');
                  }
                  return res.json();
              })
              .then(data => {
                //console.table(data)
                  setData(data);
                  setIsPending(false);
                  setError(null);
              })
              .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch iptal edildi.')
                   
                }
                else{

                    setIsPending(false);
                    setError(err.message);
                }
              })
        },500)

        return () =>{
          if(!abortCont.signal.aborted){
            abortCont.abort();
          }
        }
      }, [url]);

      return { data, isPending, error}
}

export default useFetch;