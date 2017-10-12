import React , { Component } from 'react';

export default class SearchForm extends Component {
  render(){
    const {data}=this.props;
    // console.log(this.props.data);
    // console.log("jadjl");
    return(
      <div className="SearchForm">
        <form className="form-inline">
          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Search : </label>
          <select className="custom-select mb-2 mr-sm-2 mb-sm-0 " id="inlineFormCustomSelect">
            <option defaultValue>Choose...</option>
            {data.map((data,index) =>
              <option className="1" key={index}>{data}</option>
            )}
          </select>

        <label className="mr-sm-2 " htmlFor="valueInput"> Value : </label>
        <input className="form-control" type="text" placeholder="male" id="valueInput"/>

        <button type="submit" className="btn btn-primary ">Search</button>
        </form>
        <p > 25 records found </p>
      </div>
    );
  }
}
