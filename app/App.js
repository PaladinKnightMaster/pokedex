import { MainPokesController } from "./Controllers/MainPokesController.js";
import { SelectedPokeController } from "./Controllers/SelectedPokeController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  mainPokesController = new MainPokesController();

  selectedPokeController = new SelectedPokeController();


}

window["app"] = new App();
