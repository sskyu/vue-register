export const bandList = state => Object.values(state.entities.bandList)

export const currentBands = state => {
  return state.results.currentBands.map(bandId => state.entities.bandList[bandId])
}

export const getBandById = state => id => state.entities.bandList[id]
