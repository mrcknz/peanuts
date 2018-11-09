import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
// import CreatableSelect from 'react-select/lib/Creatable';
import { saveDoable } from '../actions';

/*
 TODO Consider a functional component with hooks instead of class
*/

const styles = {
  paper: {
    style: {
      boxSizing: 'border-box',
      margin: '8px',
      padding: '8px',
      height: 'calc(100vh - 16px)'
    }
  },
  form: {
    style: {
      width: 'calc(100vw - 32px)',
      maxWidth: '800px',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  doable: {
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

export class DoableForm extends Component {

  defaultFormState = {
    doable: '',
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
    data: this.props.data || this.defaultFormState
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveDoable(this.state.data);
    this.setState( state => ({...state, data: this.defaultFormState}));
  }

  handleInputChange = ({target}) => {
    this.setState( state => {
      const data = {...state.data, [target.name]: target.value };
      const saveable = data.doable !== '';
      return { ...state, saveable, data };
    });
  }

  render() {
    const { doable, notes, area, context } = this.state.data;

    return (
      <Paper {...styles.paper}>
        <form noValidate {...styles.form} onSubmit={this.handleSubmit}>
          <Input
            name="doable"
            type="text"
            placeholder="what needs doing?"
            autoFocus
            fullWidth
            required
            value={ doable }
            onChange={this.handleInputChange}
            disableUnderline
            {...styles.doable }
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
            <Select
              name="area"
              label="Action Area"
              value={ area }
              // onChange={this.handleChange('currency')}
              {...styles.input }
            />
            <Select
              name="context"
              label="Context"
              value={ context }
              // onChange={this.handleChange('currency')}
              {...styles.input }
            />
          </React.Fragment>
          }
          <Button type="submit" variant="contained" disabled={ !this.state.saveable }>
            Save
          </Button>
        </form>
      </Paper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveDoable: doable => dispatch(saveDoable(doable))
});

export default connect(null, mapDispatchToProps)(DoableForm);
