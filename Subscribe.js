import React ,{ Component } from "react";
import { Container } from "react-bootstrap";

class Subscribe extends Component{

    constructor()
    {
        super();
        this.state = {
            email:''
        }
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e)
    {
        e.preventDefault();
        if(this.state.email === '')
            alert('please enter your email');
        else
            
            return true;
    }

    handleChange(e)
    {
        console.log(e.target.value);
        this.setState({
            email:e.target.value
        })
    }
    render()
    {
        return (
            <Container>
                <form onSubmit={this.handleSubmit} method = "GET" action="#">
                    <input type="email" onChange={this.handleChange} value= {this.state.email}/>
                    <input type="submit"/>
                </form>
            </Container>
        )
    }
}

export default Subscribe;