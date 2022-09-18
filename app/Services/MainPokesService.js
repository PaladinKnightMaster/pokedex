import { appState } from "../AppState.js"
import { MainPoke } from "../Models/MainPoke.js";
import { Poke } from "../Models/Poke.js";
import { MainPokesServer, SelectedPokeServer } from "./AxiosService.js"

class MainPokesService {
  async getSelectedPoke(url) {
    const res = await SelectedPokeServer.get(url)
    appState.activePoke = new Poke(res.data)
  }
  async getMainPokes() {
    // debugger
    const res = await MainPokesServer.get('/pokemon')
    console.log(res.data);
    appState.mainPokes = res.data.results.map(p => new MainPoke(p))
    console.log(appState.mainPokes);
  }

}

export const mainPokesService = new MainPokesService