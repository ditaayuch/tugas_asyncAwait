const url = 'https://pokeapi.co/api/v2/pokemon';
const imageBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const splitUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
}

const pokemon = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        for (const dataPokemon of data.results) {
            const id = splitUrl(dataPokemon.url);
            const imageUrl = `${imageBaseUrl}${id}.png`;

            console.log(`Name: ${dataPokemon.name}`);
            console.log(`URL: ${dataPokemon.url}`);
            console.log(`Image URL: ${imageUrl}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

pokemon();