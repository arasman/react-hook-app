import { useFetch , useCounter} from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1); 
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

    const {author, quote} = !!data && data[0]; //data = undefined --> !data = true --> !!data = false when is undefined and true when there is data
//   console.log(data, isLoading, hasError);

  // if(isLoading)
  // {
  //     return(<h1>Loading...</h1>)
  // }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading 
        ? <LoadingQuote/>
       : <Quote quote={quote} author={author}/>
       }

      <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>
        Next quote
      </button>
    </>
  );
};
