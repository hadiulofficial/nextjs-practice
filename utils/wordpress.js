const BASE_URL = 'https://nextwp.hadiul-islam.me/wp-json/wp/v2'

export const getPosts = async () => {
    const resPosts = await fetch(BASE_URL + '/posts')
    const post = await resPosts.json()
    return post;
}