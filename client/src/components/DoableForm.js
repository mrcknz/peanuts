import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { createNewDoable } from '../actions';

/*
 TODO Consider a functional component with hooks instead of class
*/

const PapersStyles = {
  style: {
    boxSizing: 'border-box',
    margin: '8px',
    padding: '8px',
    height: 'calc(100vh - 16px)'
  }
}

const FormStyles = {
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
}

const DoableStyles = {
  style: {
    margin: '8px 0',
    fontSize: '1.618rem'
  }
}

const InputStyles = {
  style: {
    margin: '8px 0',
    overflow: 'hidden'
  }
}

export class DoableForm extends Component {

  handleSubmit = event => {
    console.log(event);
  }

  render() {
    return (
      <Paper {...PapersStyles}>
        <form noValidate {...FormStyles} onSubmit={this.handleSubmit}>
          <Input
            id="doable"
            name="doable"
            type="text"
            placeholder="what needs doing?"
            autoFocus
            fullWidth
            required
            value={ this.props.data && (this.props.data.doable || "") } // * apparently necessary because otherwise the TextField will be rendered with value "undefined" or "null"
            onChange={this.handleInputChange}
            disableUnderline
            {...DoableStyles }
          ></Input>
          <Input
            id="notes"
            name="notes"
            placeholder="Notes"
            type="text"
            fullWidth
            multiline
            value={ this.props.data && (this.props.data.notes || "") } // * apparently necessary because otherwise the TextField will be rendered with value "undefined" or "null"
            onChange={this.handleInputChange}
            {...InputStyles }
          ></Input>
          <Button type="submit" variant="contained">
            Save
          </Button>
          { this.props.type && this.props.type !== 'quickEntry' &&
            <p>cool</p>
          }
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  doables:  state.doables
});

const mapDispatchToProps = () => ({
  createNewDoable: doable => createNewDoable(doable)
});

export default connect(mapStateToProps, mapDispatchToProps)(DoableForm);
