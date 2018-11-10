import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
// import CreatableSelect from 'react-select/lib/Creatable';
import { saveDoable } from '../actions';

// TODO Consider a functional component with hooks instead of class

export class DoableForm extends Component {

  defaultFormState = {
    name: '',
    notes: '',
    isResult: '',
    area: '',
    context: '',
    deadline: '',
    schedule: '',
    reminder: '',
  }

  state = {
    saveable: false,
    data: this.defaultFormState
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveDoable(this.state.data);
    this.setState( state => {
      if (this.props.type && this.props.type === 'quickEntry') {
        return {...state, data: this.defaultFormState, saveable: false}
      }
      else return {...state, saveable: false}
    });
  }

  handleInputChange = ({target}) => {
    this.setState( state => {
      const data = {...state.data, [target.name]: target.value };
      const saveable = data.doable !== '';
      return { ...state, saveable, data };
    });
  }

  componentWillMount = () => {
    if (this.props && this.props.data)
      this.setState( state => ({ ...state, data: {...this.state.data, ...this.props.data} }) );
  }

  render() {
    const { name, notes, area, context } = this.state.data;

    return (
        <form noValidate {...styles.form} onSubmit={this.handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="what needs doing?"
            fullWidth
            required
            autoFocus={this.props.autofocus}
            value={ name }
            onChange={this.handleInputChange}
            disableUnderline
            {...styles.name }
          />
          <TextField
            name="notes"
            label="Notes"
            fullWidth
            value={ notes }
            onChange={this.handleInputChange}
            {...styles.input}
          />
          { !this.props.type &&
          <React.Fragment>
            {/* <CreatableSelect
              isClearable
              options={[{ label: 'Personal', value: 'personal' }, {label: 'Codeworks', value: 'codeworks' } ]}
            /> */}
            <NativeSelect
              name='area'
              value={ area }
              onChange={this.handleInputChange}
              {...styles.input }
            >
              <option value="" disabled>Area</option>
              <option value="home">Home</option>
              <option value="codeworks">Codeworks</option>
            </NativeSelect>
            <NativeSelect
              name='context'
              value={ context }
              onChange={this.handleInputChange}
              {...styles.input }
            >
              <option value="" disabled>Context</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="commute">Commute</option>
              <option value="commute">Mobile</option>
            </NativeSelect>
          </React.Fragment>
          }
          <Button type="submit" variant="contained" disabled={ !this.state.saveable }>
            Save
          </Button>
        </form>
    )
  }
}

const styles = {
  form: {
    style: {
      maxWidth: '800px',
      height: '100vh',
      margin: '0 auto',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  },
  name: {
    style: {
      margin: '8px 0',
      fontSize: '1.618rem'
    }
  },
  input: {
    style: {
      margin: '8px 0',
      overflow: 'hidden',
      width: '100%'
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveDoable: doable => dispatch(saveDoable(doable))
});

export default connect(null, mapDispatchToProps)(DoableForm);
