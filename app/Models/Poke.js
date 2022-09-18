
export class Poke {
  constructor(data) {
    // debugger
    this.id = data.id
    this.name = data.name
    this.type1 = data.types[0].type.name
    // NOTE why doesnt this work?????
    this.type2 = data.types[1] ? data.types[1].type.name : 'nah'
    this.weight = data.weight
    this.height = data.height
    this.img = data.sprites.front_default
    // NOTE why string interp no work here either??
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`
    // NOTE Why is this so stupid?
    // this.img = data.sprites.other['official-artwork']


  }

  get SelectedPokeTemplate() {
    return `
            <div class="card p-2 bg-danger1 text-center elevation-2">
              <h2 class="m-0 bg-light border border-4 border-secondary rounded ">${this.name}</h2>
            </div>
            <div>
              <img src="${this.img}" alt="Pokemon Image Here :)"
                class="img-fluid my-4">
            </div>
            <div class="card p-2 bg-danger1 text-center elevation-2">
              <div class="bg-light border border-4 border-secondary rounded p-2">
                <div class="">
                  <h5>Height: ${this.height}</h5>
                  <h5 class="mx-3">Weight: ${this.weight}lbs</h5>
                  <h5>Type 1: ${this.type1}</h5>
                  <h5>Type 2: ${this.type2}</h5>
                </div>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-outline-danger" onclick="app.selectedPokeController()">CATCH</button>
                </div>
              </div>
            </div>
`
  }
}