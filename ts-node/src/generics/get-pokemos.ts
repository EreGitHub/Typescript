import axios from "axios";

export const getPokemon = async (pokemonId: number): Promise<number> => {
	const resp = await axios.get<string>(
		`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
	);
	console.log(resp.data);
	return 1;
};
