import React from "react";

class Maintenance extends React.Component {
    constructor(props){
        super(props)

        this.handleAddClick= this.handleAddClick.bind(this)
        this.handleDeleteClick= this.handleDeleteClick.bind(this)
    }

    handleAddClick(e) {
        e.preventDefault(); // prevent default form submission behavior
        const data = new FormData(e.target); // use FormData to get form data
        fetch(`http://localhost:3001/add`, {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(data)),
        })
        .then((response) => response.json())
        .then((data) => {console.log(data)})
        .catch((error) => {console.error(error)});
      }
      
      
      handleDeleteClick(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch('http://localhost:3001/delete', {
          method: 'POST',
          body: JSON.stringify(Object.fromEntries(data)),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }
          
      
    render(){
        return( <div>
            <h1>Maintenance page</h1>

            <h2>Add </h2>
            <form className="Add">
            <label htmlFor="language">Language</label>
            <input type="text" name="lenguage" required></input>
            <label htmlFor="image">Image link:</label>
            <input type="text" name="image" required></input>
            <label htmlFor="category">Category:</label>
            <input type="category" name="category" ></input>
            <label htmlFor="name" >Name:</label>
            <input type="name" name="name"></input>
            <label htmlFor="location"> Location:</label>
            <input type="location" name="location"></input>
            <label htmlFor="businessName">Business Name:</label>
            <input type="businessName" name="businessName"></input>
            <label htmlFor="description">Description:</label>
            <input type="description" name="description"></input>
            <label htmlFor="begin">Begin:</label>
            <input type="date" name="begin"></input>
            <label htmlFor="end">End:</label>
            <input type="date" name="end"></input>
            <button type="submit" onSubmit={this.handleAddClick}>SEND</button>
            </form>

            <h2>Delete form</h2>
            <form className="delete">
            <label htmlFor="id">Document id:</label>
            <input type="text" name="id" required></input>
            <button type="submit" onSubmit={this.handleDeleteClick}>Delete</button>

            </form>


        </div>)
    }
}

export default Maintenance;