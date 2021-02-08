// function UserServiceClient() {
//     this.createUser = createUser;
//     this.findAllUsers = findAllUsers;
//     this.findUserById = findUserById;
//     this.deleteUser = deleteUser;
//     this.updateUser = updateUser;
//     this.url = 'https://wbdv-generic-server.herokuapp.com/api/001315994/users';
//     var self = this;
//     function createUser(user) {
//         return fetch(self.url,{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         }).then(function (response) {
//             return response.json()
//         })
//     }
//     function findAllUsers() {
//         return fetch(self.url)
//             .then(function (response) {
//                 return response.json()
//             })
//     }
//     function findCourseById(Username) {
//
//     }
//     function updateCourse(username, user) {
//         return fetch(`${self.url}/${username}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         }).then(response => response.json())
//     }
//     function deleteCourse(courseId) {
//         return fetch(`${self.url}/${courseId}`,
//             {method: 'DELETE'})
//     }
// }




function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001315994/users';
    var self = this;
    function createUser(user) {
        return fetch(self.url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(function (response){
            return response.json()
        })
    }
    function findAllUsers() {
        return fetch(self.url)
            .then(function(response){
            return response.json()
        })
    }
    function findUserById(username) {

    }
    function updateUser(username, user) {
        return fetch(`${self.url}/${username}`,
            {
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            }).then(response => response.json())


    }
    function deleteUser(username) {
        return fetch(`${self.url}/${username}`,
        {method:'DELETE'})
    }
}
