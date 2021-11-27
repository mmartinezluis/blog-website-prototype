import { mockAPI } from "../mockApi/mockApi";

export function addPost(postData) {
    const request = {
        method: 'addPost',
        body: {
            title: postData.slice(0,10),
            body: postData
        }
    }
    mockAPI(request)
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
          console.log(error)
      })
}

export function editPost(postData) {
    const request = {
        method: 'addPost',
        body: {
            title: postData.slice(0,10),
            body: postData
        }
    }
    mockAPI(request)
      .then((response) => {
          console.log(response.data)
      })
      .catch((error) => {
          console.log(error)
      })
}

