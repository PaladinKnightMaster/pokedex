import { appState } from "../AppState.js"
import { Poke } from "../Models/Poke.js"
import { setHTML } from "../Utils/Writer.js"


function _drawSelectedPoke() {
  if (appState.activePoke == null) { return }
  // debugger
  setHTML('selected-poke', appState.activePoke.SelectedPokeTemplate)
}
export class SelectedPokeController {
  constructor() {
    _drawSelectedPoke()
    appState.on('activePoke', _drawSelectedPoke)
  }


}