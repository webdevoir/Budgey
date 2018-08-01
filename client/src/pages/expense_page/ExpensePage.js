import React, { Component } from "react";
import { Container } from "reactstrap";
import SpendingSummary from "./components/SpendingSummary";
import ExpenseTable from "./components/ExpenseTable";
import axios from "axios";
import NewEntryModal from "./components/NewEntryModal";
import Popup from "reactjs-popup";
import { Redirect } from 'react-router-dom';

class ExpensePage extends Component {

  update() {
    axios.get(`http://localhost:3002/api/v1/category/${this.props.match.params['id']}.json`)
         .then(response => {
           this.setState({
             category: response.data[0],
             entries: response.data[1]
           });
          })
         .catch(error => console.log(error));

  }

  componentDidMount() {
    this.update()
  }

  render() {

    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to='/login' />
    }
    return (
      <Container>
        { this.state && this.state.entries &&
          <div>
            <h1>Expenses - {this.state.category.name}</h1>
            <SpendingSummary category={this.state.category}/>
            <br/>
            <Popup trigger={
              <button type="button" className="btn btn-primary px-4">
              Add Entry
              </button>} modal closeOnDocumentClick>
              <NewEntryModal update={this.update.bind(this)} id={this.state.category.id} updateHome={this.props.update}/>
            </Popup>
            <ExpenseTable entries={this.state.entries} id={this.state.category.id} update={this.update.bind(this)} updateHome={this.props.update}/>
          </div>
        }
      </Container>
    );
  }
}

export default ExpensePage;
