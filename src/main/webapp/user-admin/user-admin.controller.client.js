var $usernameFld
var $passwordFld
var $firstnameFld
var $lastnameFld
var $roleFld
var $createBtn
var theTablebody
var $updateBtn
var userService = new AdminUserServiceClient()

var users = [];


function createUser(user){
    userService.createUser(user)
        .then(function (actualUser){
            users.push(actualUser)
            renderUsers(users)
        })
}


var selectedUser = null
function selectUser(event){
    var selectBtn = jQuery(event.currentTarget)
    var theId = selectBtn.attr('id')
    selectedUser = users.find(user => user._id === theId)
    $usernameFld.val(selectedUser.Username)
    $passwordFld.val(selectedUser.Password)
    $firstnameFld.val(selectedUser.FirstName)
    $lastnameFld.val(selectedUser.LastName)
    $roleFld.val(selectedUser.Role)
}





function deleteUser(event){
    console.log(event.currentTarget)
    var deleteBtn = jQuery(event.currentTarget)
    var theClass = deleteBtn.attr('class')
    var theIndex = deleteBtn.attr('id')
    var theId = users[theIndex]._id
    console.log(theClass)
    console.log(theIndex)

    userService.deleteUser(theId)
        .then(function (status){
            users.splice(theIndex,1)
            renderUsers(users)
        })

}


function renderUsers(users) {
    theTablebody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        theTablebody.append(`
                        <tr>
                        <td>${user.Username}</td>
                        <td>${user.Password}</td>
                        <td>${user.FirstName}</td>
                        <td>${user.LastName}</td>
                        <td>${user.Role}</td>
                        <td>
                            <button class="wbdv-delete" id="${i}">
                                <i class="fa fa-times"></i>
                            </button>
                            <button class="wbdv-select" id="${user._id}">
                                <i class="fa fa-pencil"></i>
                            </button>
                        </td>
                        </tr>
                        `)
    }
    jQuery(".wbdv-delete")
        .click(deleteUser)
    jQuery(".wbdv-select")
        .click(selectUser)
}
// renderUsers(users)


function updateUser (){
    selectedUser.Username = $usernameFld.val()
    selectedUser.Password = $passwordFld.val()
    selectedUser.FirstName = $firstnameFld.val()
    selectedUser.LastName = $lastnameFld.val()
    selectedUser.Role = $roleFld.val()
    userService.updateUser(selectedUser._id,selectedUser).then(function (status){
        var index = users.findIndex(user => user._id === selectedUser._id)
        users[index] = selectedUser
        renderUsers(users)
    })
    $usernameFld.val('')
    $passwordFld.val('')
    $firstnameFld.val('')
    $lastnameFld.val('')
    $roleFld.val('')
}



function init(){
    $usernameFld = $(".wbdv-username-fld")
    $passwordFld = $(".wbdv-password-fld")
    $firstnameFld = $(".wbdv-firstname-fld")
    $lastnameFld = $(".wbdv-lastname-fld")
    $roleFld = $(".wbdv-role-fld")
    $createBtn = $(".wbdv-create-btn")
    $updateBtn = $(".wbdv-update-btn")
    theTablebody = jQuery("tbody")



    $updateBtn.click(updateUser)

    $createBtn.click(function (){
        var newUser = {
            Username: $usernameFld.val(),
            Password: $passwordFld.val(),
            FirstName: $firstnameFld.val(),
            LastName : $lastnameFld.val(),
            Role: $roleFld.val()}
        createUser(newUser)
        $usernameFld.val('')
        $passwordFld.val('')
        $firstnameFld.val('')
        $lastnameFld.val('')
        $roleFld.val('')


    }
    )
    userService.findAllUsers()
        .then(function (actualUsersFromServer){
        users = actualUsersFromServer
            renderUsers(users)
        })


}
jQuery(init)