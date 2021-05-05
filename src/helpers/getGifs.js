export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=7&api_key=ezaHYqA1fXVX0r0WlYymgm4P70Z3y7JD&q=${encodeURI(category)}&rating=g`

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    })
    return gifs;
}