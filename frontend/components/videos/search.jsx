import React from 'react';
import { render } from 'react-dom';

class Search extends React.Component {
    constructor(props){
        super(props);
    }


    // componentDidMount(){
    //     const input = document.getElementById("search-input");
    //     const searchBtn = document.getElementById("search-btn");
    
    //     const expand = () => {
    //         searchBtn.classList.toggle("close");
    //         input.classList.toggle("square");
    //     };
    
    //     searchBtn.addEventListener("click", expand);

    // }



    
    render() {
        console.log(this.props)
        return(
            <form onSubmit={this.props.handleChange} id="content">
                
             <input 
                type='text' 
                htmlFor='search' 
                value={this.props.inputValue} 
                onChange={this.props.update('inputValue')}
                className='search-input'>
                
            </input>
                {/* <button type="reset" class="search" id="search-btn"></button> */}
            </form>
            )
        }
};

export default Search;
        