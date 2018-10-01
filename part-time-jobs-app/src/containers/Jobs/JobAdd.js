import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';


class JobAdd extends Component {
  state = {
    form: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
      description: {
        elementType: 'textarea',
        elementConfig: {
          placeholder: 'Description'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
      category: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 1, name: 'Clean Up'},
            {value: 2, name: 'Grass Cutting'},
            {value: 3, name: 'Editing'},
            {value: 4, name: 'Writing'},
            {value: 5, name: 'Date Entry'},
            {value: 6, name: 'Event Planning'},
            {value: 7, name: 'Fixing Machine'},
            {value: 8, name: 'Advertising'},
            {value: 9, name: 'Washing Car'}
          ]
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
      location: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Location'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
      hourlyRate: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Hourly rate'
        },
        value: '',
        validation: {
          required: true,
          number: true
        },
        valid: false,
        touch: false
      },
      preferredDate: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Preferred Date'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
      preferredTime: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Preferred Time'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
    }
  }

  constructor(props) {
    super(props);
  }

  handleFormSubmit() {

  }

  render() {
    const formElementArray = [];

    for (let key in this.state.form) {
      formElementArray.push({
        id: key,
        config: this.state.form[key]
      });
    }

    const formData = (
      <form onSubmit={this.handleFormSubmit}>
        {
          formElementArray.map(formElement => <input key={formElement.id} />)
        }
      </form>
    )
    return (
      <Fragment>
        <h1>Job Adding</h1>
        {formData}
      </Fragment>
    )
  }
}

const mapPropsToState = state => {
  return {

  }
}

const mapDispatchToState = dispatch => {
  return {

  }
}

export default connect(mapPropsToState, mapDispatchToState)(JobAdd);