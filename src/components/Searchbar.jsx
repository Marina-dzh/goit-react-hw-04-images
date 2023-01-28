
import toast from 'react-hot-toast';
import { BiSearchAlt } from 'react-icons/bi';

export const  Searchbar =({handleOnSubmit,isLoading})=>{
  


 const  onSearch = (e) => {
      e.preventDefault();
      
      const input = e.target.elements.searchQuery.value

      if (input === '') {
          toast.error('Search field is empty!');
          
          return
      }
    handleOnSubmit(input)
     e.target.reset()
  }
    
        return (
    <header className="Searchbar">
  <form className="SearchForm " onSubmit={onSearch}>
    <button type="submit" className="SearchForm-button" disabled={isLoading}><BiSearchAlt className="icon"/>
    </button>

        <input name="searchQuery"
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  )
    

}