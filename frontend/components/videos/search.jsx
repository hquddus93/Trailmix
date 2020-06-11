import React from 'react';
import { render } from 'react-dom';

class Search extends React.Component {
    constructor(props){
        super(props);

      
        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputValue: "", videos: ""
            // videos: this.props.videos
        }
    }

    update(field) {

        return e => (
            this.setState({ [field]: e.target.value })
        )
    }


    handleChange(e) {
        e.preventDefault();
        this.setState({ videos: this.props.searchVideos(this.state.inputValue) });
        debugger
        this.props.searchVideos(this.state.inputValue)

        debugger
        // <Redirect to='/search_results' videos={this.props.searchVideos(this.state.inputValue)} />
     
        this.props.history.push('/search_results')
      

    }



    // componentDidMount() {
    //     debugger
    //     this.props.searchVideos(this.state.inputValue)
    // }


    
    render() {
        // console.log(this.this.props)
        // if (this.state.inputValue === "") {
        //     return <></>
        // } else {
        return(
            <form onSubmit={this.handleChange} id="content">
                {/* <div className="searchbar">
                    <a className="iconSizes"><img className="searchIcon unopenedSearch" id="searchIconId" src={window.search} onClick={this.toggleSearchShow} /></a>
                    <input className="inputsearch unopenedSearchBar" placeholder="Titles" id="searchBarId" type="text" value={this.state.search} onChange={this.persistedHandleChange} />

                </div> */}
                
             <input 
                type='text' 
                htmlFor='search' 
                value={this.state.inputValue} 
                onChange={this.update('inputValue')}
                className='search-input'>
                
            </input>
                {/* <button type="reset" class="search" id="search-btn"></button> */}
            </form>
            )
        }
    // }
};

export default Search;
        