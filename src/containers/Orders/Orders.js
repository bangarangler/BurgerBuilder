import React from 'react';

import Order from '../../components/Order/Order';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    )
  }
}

export default Orders;
