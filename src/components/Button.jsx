      
 import { MdExpandMore } from 'react-icons/md';


export const Button = ({onClick}) => {
  return (
    <button className="Button" onClick={onClick}> <div>Load more</div> <MdExpandMore className='icon'/></button>
  )
}


