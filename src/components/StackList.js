import React, {Component} from 'react';
import stacks from '../data/stacks.json';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStack } from '../actions';

class StackList extends Component {
  render(){
console.log('stacklist props', this.props)

    return(
      <div>
      {
        stacks.map(stack => {
          return(
            <Link to='/stack'
             key={stack.id}
            onClick={() => this.props.setStack(stack)}
             >
              < h4 key={ stack.id }>{stack.title}</h4>
            </Link>
          )
        })
      }
      </div>
    )
  }
}


export default connect(null, { setStack })(StackList);
