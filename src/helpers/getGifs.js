
    export const getGifs = async (category) => {
        const url = new URL('https://api.giphy.com/v1/gifs/search')
        
        const params = {
            api_key:'mDJQHz1D4Ezf4mhT9X0fO0rkzkAHLC7u', 
            q:category,
            limit:10,
        } 
            
        url.search = new URLSearchParams(params).toString()

        const resp = await fetch(url)

        const {data} = await resp.json()

        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium?.url
            }
        })

        return gifs

    }