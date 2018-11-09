import { actionTypes } from '../actions';

const initialState = {
  doables: [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
      doable: 'call mom',
      notes: '+41 44 761 69 49',
      isResult: '',
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
      let doables = [...state.doables];
      if (action.doable.id) {
        doables = doables.filter( doable => doable.id !== action.doable.id);
      } else action.doable['id'] = state.doables.length; // TODO get ids from server
      return { ...state, doables: [...doables, action.doable] };

    default:
      return state;
  }
}