export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=iILE0WT6MNYVGpucRODT5bSfS2n6MGTz&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))

    return gifs;

}