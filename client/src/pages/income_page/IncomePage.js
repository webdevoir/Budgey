import React, { Component } from "react";
import { Container } from "reactstrap";
import SpendingSummary from "./components/SpendingSummary";
import IncomeTable from "./components/IncomeTable";
import NewIncomeEntry from "./components/NewIncomeEntry";
import axios from "axios";
import Popup from "reactjs-popup";
import { Redirect } from 'react-router-dom';


class IncomePage extends Component {

  update (){
    const { id } = this.props.match.params
    axios.get(`/api/v1/category/${id}`)
         .then(response => {
           this.setState({
             category: response.data[0],
             entries: response.data[1]
           });
          })
         .catch(error => console.log(error))

  }

  componentDidMount() {
    this.update();

  }


  render() {

    if (!localStorage.getItem('jwtToken') && !localStorage.getItem('fbUser') && !localStorage.getItem('googleUser')) {
      return <Redirect to='/login' />
    }

    return (
      <Container>
        { this.state && this.state.entries &&
          <div>
            <h1>Income Source - {this.state.category.name}</h1>
            <SpendingSummary entries={this.state.entries}/>
            <br/>
            <Popup trigger={
                <button type="button" className="btn btn-primary px-4">
                  Add Entry
                </button>} modal closeOnDocumentClick>
                <NewIncomeEntry update={this.update.bind(this)}
                updateHome={this.props.update} state_category={this.state.category} state_entry={this.state.entry}/>
            </Popup>
            <IncomeTable entries={this.state.entries}
            id={this.state.category.id}
            update={this.update.bind(this)} updateHome={this.props.update} />
          </div>
        }

      </Container>
    );
  }
}

export default IncomePage;
