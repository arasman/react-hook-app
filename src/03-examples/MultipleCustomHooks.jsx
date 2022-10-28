import { useFetch } from "../hooks/useFetch";
import { useCounter} from "../hooks/useCounter";
import { useEffect } from "react";

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
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>
        Next quote
      </button>
    </>
  );
};
