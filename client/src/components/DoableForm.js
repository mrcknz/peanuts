import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreatableSelect from 'react-select/lib/Creatable';
import { toast } from '@mobiscroll/react';
import { saveDoable } from '../actions';
import { debounce } from '../utils';

// TODO generate select options dynamically

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

  // TODO figure out better way to handle local UI state
  componentWillMount = () => {
    if (!this.props.isQuickEntry)
      this.setState( state => ({ ...state, data: {...this.state.data, ...this.props.data} }) );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.undebouncedSave(this.state.data)
    this.setState( state => {
      if ('quickEntry' in this.props) {
        return {...state, data: this.defaultFormState, saveable: false}
      }
      else return {...state, saveable: false}
    });
  }

  showToast = (msg, target) => {
    toast({
      message: msg,
      duration: 1000
    });
  }

  undebouncedSave = (doable, target) => {
    this.props.saveDoable(doable);
    this.showToast('Saved!'); // TODO prevent toast from stealing focus (or bring it back)
  }

  save = debounce(this.undebouncedSave, 250);

  handleInputChange = ({target}) => {
    const data = { ...this.state.data, [target.name]: target.value };
    const saveable = data.doable !== '';
    if (!this.props.quickEntry && saveable) {
      this.save(data, target);
    }
    this.setState( state => {
      return { ...state, saveable, data };
    });
  }

  handleSelectChange = ({value}, targetName) => {
    const data = {...this.state.data, [targetName]: value };
    if (!this.props.quickEntry) {
      this.save(data);
      this.showToast('Saved!');
    }
    this.setState( state => {
      return { ...state, data };
    });
  }

  handleContextChange = (newValue) => {
    this.handleSelectChange(newValue, 'context');
  }

  handleAreaChange = (newValue) => {
    this.handleSelectChange(newValue, 'area');
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
          { !this.props.quickEntry &&
          <React.Fragment>
            <CreatableSelect
              isSearchable
              styles={styles.reactSelect}
              options={Object.entries(this.props.areas).map( entries => ({ value: entries[0], label: entries[1].name }) )}
              value={ area ? { label: this.props.areas[area].name, value: area } : ''}
              onChange={this.handleAreaChange}
            />
            <CreatableSelect
              isClearable
              isSearchable
              styles={styles.reactSelect}
              options={Object.entries(this.props.contexts).map( entries => ({ value: entries[0], label: entries[1].name }) )}
              value={ context ? { label: this.props.contexts[context].name, value: context } : ''}
              onChange={this.handleContextChange}
            />
          </React.Fragment>
          }
          { this.props.quickEntry && <Button type="submit" variant="contained" disabled={ !this.state.saveable }>
            Save
          </Button>}
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
      width: '100%',
      position: 'relative'
    }
  },
  reactSelect: {
    container: () => ({
      position: 'relative',
      width: '100%',
      margin: '8px 0'
    })
  }
}

const mapDispatchToProps = dispatch => ({
  saveDoable: doable => dispatch(saveDoable(doable))
});

const mapStateToProps = (state, ownProps) => ({
    areas: state.areas,
    contexts: state.contexts,
    data: state.doables.find( doable => doable.id === ownProps.doableId )
});

export default connect(mapStateToProps, mapDispatchToProps)(DoableForm);
