import React, {Component} from 'react';

export default class SearchResult extends Component {

  render(){
    return(
      <div>
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#information">Information</a></li>
          <li><a data-toggle="tab" href="#json">Json</a></li>
        </ul>
        <div className="tab-content">
          <div id="information" className="tab-pane fade in active">
            <table className="table">
             <tbody>
               <tr>
                 <td>John</td>
                 <td>Doe</td>
                 <td>john@example.com</td>
               </tr>
               <tr>
                 <td>Mary</td>
                 <td>Moe</td>
                 <td>mary@example.com</td>
               </tr>
               <tr>
                 <td>July</td>
                 <td>Dooley</td>
                 <td>july@example.com</td>
               </tr>
             </tbody>
           </table>
          </div>
          <div id="json" className="tab-pane fade">

          </div>
        </div>
      </div>
    );
  }
}
