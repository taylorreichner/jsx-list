export const getCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await res.json();

    return results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        image: character.image,
    }))
}

export const getCharacterById = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const character = await res.json();

    return character;
}

