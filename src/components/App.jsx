
import { Button } from "./Button";
import { Searchbar } from "./Searchbar";
 import { Loader } from "./Loader";
import { ImageGallery } from "./ImageGallery";
import { Toaster } from 'react-hot-toast';
import { fetchGallery } from "./api";
import { useState } from "react";
import { useEffect } from "react";

export const  App =()=>{
  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setisLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const [error, setError]=useState(null)


  useEffect(() => {
    // console.log("useeffect")
    if (!query) {
      // console.log("empty q")
      return
    }
    async function fetchImg() {
      try {
        // console.log(query, page)
        setError(null)
        setisLoading(true)
      const imagesFetch = await fetchGallery(query, page);
// console.log(imagesFetch)
      if (!imagesFetch) {
        throw new Error(console.log("ooops"))
      }
        
    setImages(prevState => (prevState.concat(imagesFetch.hits)))
        setTotal(imagesFetch.totalHits)
        
    } catch (error) {
      setError(error);
    } finally {
     setisLoading(false );
    }

    }
  fetchImg()
  }, [page, query]

  )
  

  const handleOnSubmit = (query) =>
  {
    // console.log(query)
    setQuery(query)
    setPage(1)
    setImages([])
  
  }
  

 const loadMore = () => {
     setPage(pS =>pS+1)
  
  }
    

  return (
    <div className="App" >
      <Searchbar handleOnSubmit={handleOnSubmit} isLoading={isLoading} />
      {error && <h2 style={{color:"teal"}}>Please try again </h2>}
      
      {images && (<ImageGallery images={images} />)} 
      {isLoading && <Loader  />}
      {total > 12 * page && !error && !isLoading && <Button onClick={loadMore} />}
      { total>1 && total <= 12 * page  && <p style={{color:"teal"}}>End of search </p>}
      <Toaster  toastOptions={{duration: 500}} />
    </div>
  );
  
};


// import React, { Component } from "react";

// import { Searchbar } from "./Form";
// import { ImageGallery } from "./Gallery";
// import  { Toaster } from 'react-hot-toast';

// export class App extends Component{
//   state = {
//     query: "null",
   
//  }

//   handleOnSubmit = (query) =>
//   {
//     console.log(query)
//     this.setState({ query })
//   }
  

  
    
//   render() {
//   const { query } = this.state;
//   return (
//     <div>
//       <Searchbar handleOnSubmit={this.handleOnSubmit} />
      
//       {query && ( <ImageGallery query={query}  />)}     

//       <Toaster  toastOptions={{duration: 500}} />
//     </div>
//   );
// }
  
// };


