
export const actionTypes = {
  SAVE_DOABLE: 'SAVE_DOABLE'
}

export const saveDoable = doable => ({
  type: actionTypes.SAVE_DOABLE,
  doable
})
