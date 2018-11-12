
export const actionTypes = {
  SAVE_DOABLE: 'SAVE_DOABLE',
  COMPLETE_DOABLE: 'COMPLETE_DOABLE',
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

export const createOption = (option, type) => ({
  type: actionTypes.CREATE_OPTION,
  data: {option, type}
})
