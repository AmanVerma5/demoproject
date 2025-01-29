import './Searchbar.css';
import searchlogo from '../../images/searchlogo.png';




const Searchbar=()=>{

    return(
        <div className='searchbar'>
                <div className='search-logo mx-2'>
                    <img src={searchlogo} width="20px" alt="logo" />
                </div>
                <div className='search-input'>
                    <input type="text" name="search" id="search"  placeholder='Search here' />
                </div>
        </div>
    )


}




export default Searchbar


