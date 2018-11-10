import { actionTypes } from '../actions';

const initialState = {
  doables: [
    {
      id: 0,
      doable: 'get almond milk',
      notes: 'http://amzn.eu/d/0KIJc45',
      isResult: false,
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    },
    {
      id: 1,
      doable: 'rule the world',
      notes: '',
      isResult: false,
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    },
    {
      id: 2,
      doable: 'call mom',
      notes: '+41 44 761 69 49',
      isResult: false,
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DOABLE:
      let doables;
      if ('id' in action.doable) { // checking if property id exist
        doables = state.doables.map( doable => doable.id !== action.doable.id ? doable : action.doable )
      } else doables = [
        ...state.doables,
          { id: state.doables.length, ...action.doable, createdAt: Date.now() }
      ]
      return ({
        ...state,
          doables
      })

    default:
      return state;
  }
}