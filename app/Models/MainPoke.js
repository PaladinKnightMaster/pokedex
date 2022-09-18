
export class MainPoke {

  constructor(data) {
    this.name = data.name
    this.url = data.url
  }

  get MainPokeList() {
    return `
            <div class="d-flex justify-content-start align-items-center py-1 selectable rounded-2" onclick="app.mainPokesController.getSelectedPoke('${this.url}')">
              <i class="mdi mdi-pokeball text-center me-2"></i>
              <h6 class="mb-0 text-center">${this.name}</h6>
            </div>
    `
  }

}