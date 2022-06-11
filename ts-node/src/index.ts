import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "pikachu";

charmander.savePokemonToDB(1000);
