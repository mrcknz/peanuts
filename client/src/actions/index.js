
export const actionTypes = {
  SAVE_DOABLE: 'SAVE_DOABLE',
  COMPLETE_DOABLE: 'COMPLETE_DOABLE',
  DELETE_DOABLE: 'DELETE_DOABLE',
  UPDATE_DOABLE_ORDER: 'UPDTE_ORDER',
  CREATE_OPTION: 'CREATE_OPTION'
}

export const saveDoable = doable => ({
  type: actionTypes.SAVE_DOABLE,
  doable
})

export const completeDoable = id => ({
  type: actionTypes.COMPLETE_DOABLE,
  id
})

export const deleteDoable = id => ({
  type: actionTypes.DELETE_DOABLE,
  id
})

export const updateDoableOrder = arrayOfDoableIDs => ({
  type: actionTypes.DELETE_DOABLE,
  arrayOfDoableIDs
})

export const createOption = (option, type) => ({
  type: actionTypes.CREATE_OPTION,
  data: {option, type}
})
