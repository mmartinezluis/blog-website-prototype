import { mockAPI } from "../mockApi/mockApi";

export function fetchPosts() {
    const request = {
        method: 'get',
        headers: {
            'Content-type' : 'application/json'
        }
    }
    mockAPI(request).then( (response) => {
        console.log(response.data.posts)
    })
    

}



export function addPost() {

}




export function editPost() {

}