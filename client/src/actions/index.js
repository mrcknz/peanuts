
export const actionTypes = {
  SAVE_DOABLE: 'SAVE_DOABLE',
  COMPLETE_DOABLE: 'COMPLETE_DOABLE',
}

export const saveDoable = doable => ({
  type: actionTypes.SAVE_DOABLE,
  doable
})

export const completeDoable = id => ({
  type: actionTypes.COMPLETE_DOABLE,
  id
})

