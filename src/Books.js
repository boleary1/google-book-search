import React, { Component } from 'react';
import SearchArea from './SearchArea';
import Axios from 'axios';
import Card from './card';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''

        }
    }
    searchBook = (e) => {
        e.preventDefault();
        Axios
            .get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField)
            .then((data) => {
                console.log(data);
                this.setState({books:data.data.items})
            })
    }

    handleSearh = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
            <div >
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearh} />
               <div style={{display:"flex", flexDirection:"column"}}>
                {
                    this.state.books.map((book)=>{
                     return  <Card {...book} typeBtn= "Save"/>
                    }
                    )
                }
                
               </div> 
            </div>
        )
    }
}
export default Books;
