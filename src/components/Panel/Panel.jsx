import React , { Component } from 'react';


export default class Panel extends Component {

  onRsourceClick(val){
    //  console.log("resoure clicked " +Object.keys(val));
    this.props.handelResource(val);
    console.log(val);

  }
  render(){
  let {resource} = this.props;
  console.log(resource);
    return(

        <div className="panel panel-primary Panelcss ">
          <div className="panel-heading">Resource</div>
          <div className="panel-body">
            <ul className="list-group">
              {resource.map((resource,index)=>
                <li key={index} className="list-group-item " style={{cursor:"pointer"}} onClick={this.onRsourceClick.bind(this,resource)} >
                    <span className="badge">15</span>
                    {/* {resource} */}
                    {Object.keys(resource)[0]}
                  </li>
              )}

            </ul>
          </div>
        </div>


          );
  }
}
