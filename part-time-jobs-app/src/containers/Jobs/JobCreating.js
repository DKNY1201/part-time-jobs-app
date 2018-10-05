import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import {updateObject} from '../../shared/utils';
import * as actions from '../../store/actions';

class JobCreating extends Component {
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
        touch: false,
        label: "Name"
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
        touch: false,
	      label: "Description"
      },
      category: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 1, name: 'Clean Up'},
            {value: 2, name: 'Grass Cutting'},
            {value: 3, name: 'Editing'},
            {value: 4, name: 'Writing'},
            {value: 5, name: 'Data Entry'},
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
        touch: false,
	      label: "Category"
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
        touch: false,
	      label: "Location"
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
        touch: false,
	      label: "Hourly rate"
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
        touch: false,
	      label: "Preferred Date"
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
        touch: false,
	      label: "Preferred Time"
      },
    }
  }

  constructor(props) {
    super(props);

	  this.handleInputChange = this.handleInputChange.bind(this);
	  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const formData = {};

    for (let key in this.state.form) {
      formData[key] = this.state.form[key].value;
    }

    const data = {
	    job: formData
    }

    this.props.onCreateJob(data);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const updatedElement = updateObject(this.state.form[name], {value: value});
    const updatedForm = updateObject(this.state.form, {[name]: updatedElement});

    this.setState({
      form: updatedForm
    })
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
          formElementArray.map(formElement =>
            <Input key={formElement.id}
                   changed={this.handleInputChange}
                   elementConfig={formElement.config.elementConfig}
                   elementType={formElement.config.elementType}
                   value={formElement.config.value}
                   label={formElement.config.label}
                   name={formElement.id}
            />)
        }
        <Button btnType="Success" clicked={this.handleFormSubmit}>Create job</Button>
      </form>
    )
    return (
      <Fragment>
        <h1>Job Adding</h1>
        {formData}
        <h1>Job created</h1>
        {this.props.job.jobs.map(job => <h4>{job.name}</h4>)}
      </Fragment>
    )
  }
}

// JobCreating.propTypes = {
//
// }

const mapPropsToState = state => {
  return {
    job: state.job
  }
}

const mapDispatchToState = dispatch => {
  return {
    onCreateJob: (data) => dispatch(actions.createJob(data))
  }
}

export default connect(mapPropsToState, mapDispatchToState)(JobCreating);