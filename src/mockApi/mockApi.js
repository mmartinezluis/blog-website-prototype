let dataBase = require('../db.json')
const fs = require('fs')

export function mockAPI(request) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (request.method) {
          case 'get':
              resolve({ status: 200, data: dataBase });
            break;
          case 'addPost':
              const id = dataBase.posts.length + 1;
              const post = JSON.stringify(Object.assign({}, {id}, request.body), null, 2)
            //   debugger
              fs.writeFile('../database/mockDatabase.json', post, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
              })
            //   debugger
            //   dataBase.posts.push(post)
              resolve({ status: 200, message: 'Added Post' });
            break;
          default:
            resolve({ status: 400, message: 'Bad Request' });
        }
      }, 3000);
    });
}





//   export default mockAPI;

// function mockAPI(request) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         switch (request.method) {
//           case 'get':
//             const user = getUser(request);
//             if (user) {
//               resolve({ status: 200, posts: user.posts });
//             } else {
//               resolve({ status: 404, message: 'Not Found' });
//             }
//             break;
//           case 'post':
//             if (passwordIsValid(request)) {
//               addToPosts(request);
//               resolve({ status: 200, message: 'Added Post' });
//             } else {
//               resolve({ status: 401, message: 'Unauthorized' });
//             }
//             break;
//           default:
//             resolve({ status: 400, message: 'Bad Request' });
//         }
//       }, 300);
//     });
//   }