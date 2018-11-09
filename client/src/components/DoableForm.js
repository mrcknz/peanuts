import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
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
    overflow: 'hidden',
    width: '100%'
  }
}

export class DoableForm extends Component {

  state = {
    savable: false
  }

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
          />
          <Input
            id="notes"
            name="notes"
            placeholder="Notes"
            type="text"
            fullWidth
            multiline // TODO multiline prop seems to cause rendering of multiple TextAreas that cause layout issues
            value={ this.props.data && (this.props.data.notes || "") } // * apparently necessary because otherwise the TextField will be rendered with value "undefined" or "null"
            onChange={this.handleInputChange}
            {...InputStyles }
          />
          { !this.props.type &&
            <Select
              id="area"
              label="Action Area"
              value={ this.props.data && (this.props.data.area || "") }
              // onChange={this.handleChange('currency')}
              SelectProps={{
                native: true,
                // MenuProps: {
                //   className: classes.menu,
                // },
              }}
              helperText="Select area of action"
              {...InputStyles }
            />
            // <Select
            //   id="context"
            //   select
            //   label="Context"
            //   value={ this.props.data && (this.props.data.context || "") }
            //   // onChange={this.handleChange('currency')}
            //   SelectProps={{
            //     native: true,
            //     // MenuProps: {
            //     //   className: classes.menu,
            //     // },
            //   }}
            //   helperText="Select area of action"
            // />
          }
          <Button type="submit" variant="contained" disabled={ !this.state.savable }>
            Save
          </Button>
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
