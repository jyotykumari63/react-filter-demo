import React from 'react';

  export default class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
    }      
     

    render() {
      console.log(this.props);
      return (
          <div style={{margin:'50px'}}>
            <div>
              <h2 style={{'textAlign':'center',color:'#8f3181'}} >Product List</h2>
            </div>
          </div>
      );
    }
  }


