export default {
  setBandColor: (state, currentBandList) => {
    state.results.currentBandList = [].concat(currentBandList)
  }
}
