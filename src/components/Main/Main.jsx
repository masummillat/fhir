import React, {Component} from 'react';
import Panel from '../Panel/Panel';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
export default class Main extends Component {
  constructor(props) {

    super(props);

    this.state = {
      searchParam: [
        {
          'Patient': ["apples", "oranges"]
        }, {
          'Practitioner': ["lemons"]
        }
      ],
      data: []
    }
    console.log(this.state.searchParam);
  }
  handelResource(val) {
    console.log(val[Object.keys(val)[0]]);
    // this.state.searchParam.forEach(item =>{
    //   if (item.hasOwnProperty(val)){
    //     console.log(item[Object.keys(item)[0]]);
    //   }
    // })

  }

  render() {
    const {data} = this.state;
    // const resource = ["Patient", "Practitioner"];
    const resource = this.state.searchParam;

    return (
      <div className="container-fluid Main">
        <div className="col-md-4 col-sm-12">
          <Panel resource={resource} handelResource={this.handelResource.bind(this)}/>
        </div>
        <div className="col-md-8 col-sm-12 Search">
          <div className="col-md-12 SearchGrid1">
            <SearchForm data={data}/>

          </div>

          <div className="col-md-12 SearchGrid2">
            <SearchResult/>
          </div>

        </div>

      </div>
    );
  }
}
