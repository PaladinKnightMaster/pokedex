import { appState } from "../AppState.js";
import { mainPokesService } from "../Services/MainPokesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawMain() {
  let template = ''
  appState.mainPokes.forEach(p => template += p.MainPokeList)
  setHTML('main-pokes-list', template)
}
export class MainPokesController {

  constructor() {
    appState.on('mainPokes', _drawMain)
    this.getMainPokes()
  }

  async getSelectedPoke(url) {
    try {
      await mainPokesService.getSelectedPoke(url)
    } catch (error) {
      console.error(error);
    }
  }

  async getMainPokes() {
    try {
      await mainPokesService.getMainPokes()
    } catch (error) {
      console.error();
    }
  }

}



