export const postsAPI = {
    fetchPosts(page, limit, sortBy = 'id', order = 'desc', search = '') {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_sort=${sortBy}&_order=${order}&_page=${page}&_per_page=${limit}&q=${search}`)
                .then((response) => {
                    const totalCount = response.headers.get('X-Total-Count')
                    return response.json().then((posts) => ({
                        posts,
                        totalCount: totalCount
                    }))
                })
        } catch (ex) {
            console.log(ex)
        }
    },

    fetchFreshPosts(limit = 3) {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
                .then((response) => response.json())
                .then((posts) => posts)
        } catch (ex) {
            console.log(ex)
        }
    },

    fetchById(id) {
        try {
            if (!id) {
                throw new Error('Id is broken')
            }

            return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => response.json())
                .then((post) => post)
        } catch (ex) {
            console.log(ex)
        }
    }
}
