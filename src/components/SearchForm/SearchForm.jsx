import React , { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      propertyName:'',
      search_input:'',


    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){

    this.setState({
      [event.target.name]: event.target.value,


    });
    //console.log(this.state.value);
  }
  handleSubmit(event){
    console.log(this.state.search_input);
    console.log(this.state.propertyName);

    var url="site.com/"+this.props.resourceName[0]+"?"+this.state.propertyName+"="+this.state.search_input;
    console.log(url);
    event.preventDefault();


  }



  render(){
    const {data}=this.props;
    const resourceName=this.props.resourceName[0];
    console.log(resourceName);
     console.log(this.props.data);
    console.log("=========");
    console.log(data);
    const resource_type = Object.keys(data);
    const mydata =data[Object.keys(data)];
   console.log(data[Object.keys(data)[1]]);
   console.log(mydata);




    // console.log("resource type "+ resource_type.values);
    // console.log(typeof(resource_type));
    // const mydata = data[Object.keys(data)];
    // console.log(Object.values(data));
    // for(key in data) {
    //     if(data.hasOwnProperty(key)) {
    //         var value = data[key];
    //         //do something with value;
    //         console.log(value);
    //     }
    // }



    var arr=[];
    for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      var val = data[key];
      arr=val;

    }
}
    console.log(arr);
    console.log(data[key]);



    return(
      <div className="SearchForm">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Search : </label>
          <select name="propertyName" className="custom-select mb-2 mr-sm-2 mb-sm-0 "value={this.state.propertyName} onChange={this.handleChange} id="inlineFormCustomSelect">
            <option defaultValue>Choose...</option>
              {data.map((data,index)=>
                  <option key={index}> {data}</option>
              )}
          </select>


        <label className="mr-sm-2 " htmlFor="valueInput"> Value : </label>
        <input name="search_input" className="form-control" type="text" placeholder="male" id="valueInput"
          value={this.state.search_input} onChange={this.handleChange}/>

        <button type="submit" className="btn btn-primary">Search</button>
        </form>
        <div>
          <p className="SearchUrl">Url</p>
          <p className="SearchRecord"> 25 records found </p>
        </div>
      </div>
    );
  }
}
