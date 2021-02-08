// var titleFld
// var $seatsFld
// var $semesterFld
// var $createBtn
// var addCourseBtn
// var theTableBody
// var $updateBtn
// var courseService = new CourseServiceClient()
//
// function addCourse() {
//     createCourse({
//         title: 'NEW COURSE',
//         seats: 100,
//         semester: 'Fall'
//     })
// }
// var courses = [];
//
// function createCourse(course) {
//     courseService.createCourse(course)
//         .then(function (actualCourse) {
//             courses.push(actualCourse)
//             renderCourses(courses)
//         })
// }
//
// // createCourse({title: 'CS1111', seats: 11, semester: 'Fall'})
// // createCourse({title: 'CS2222', seats: 22, semester: 'Fall'})
// // createCourse({title: 'CS3333', seats: 33, semester: 'Fall'})
// // createCourse({title: 'CS4444', seats: 44, semester: 'Fall'})
//
// var selectedCourse = null
// function selectCourse(event) {
//     var selectBtn = jQuery(event.target)
//     var theId = selectBtn.attr("id")
//     selectedCourse = courses.find(course => course._id === theId)
//     titleFld.val(selectedCourse.title)
//     $seatsFld.val(selectedCourse.seats)
//     $semesterFld.val(selectedCourse.semester)
// }
//
// function deleteCourse(event) {
//     console.log(event.target)
//     var deleteBtn = jQuery(event.target)
//     var theClass = deleteBtn.attr("class")
//     var theIndex = deleteBtn.attr("id")
//     var theId = courses[theIndex]._id
//     console.log(theClass)
//     console.log(theIndex)
//
//     courseService.deleteCourse(theId)
//         .then(function (status) {
//             courses.splice(theIndex, 1)
//             renderCourses(courses)
//         })
// }
//
// function renderCourses(courses) {
//     theTableBody.empty()
//     for (var i = 0; i < courses.length; i++) {
//         var course = courses[i]
//         theTableBody
//             .prepend(`
//     <tr>
//         <td>${course.title}</td>
//         <td>${course.seats}</td>
//         <td>${course.semester}</td>
//         <td>
//             <button class="wbdv-delete" id="${i}">Delete</button>
//             <button class="wbdv-select" id="${course._id}">Select</button>
//         </td>
//     </tr>
//   `)
//     }
//     jQuery(".wbdv-delete")
//         .click(deleteCourse)
//     jQuery(".wbdv-select")
//         .click(selectCourse)
// }
// // renderCourses(courses)
//
// function updateCourse() {
//     console.log(selectedCourse)
//     selectedCourse.title = titleFld.val()
//     selectedCourse.seats = $seatsFld.val()
//     selectedCourse.semester = $semesterFld.val()
//     courseService.updateCourse(selectedCourse._id, selectedCourse)
//         .then(function (status) {
//             var index = courses.findIndex(course => course._id === selectedCourse._id)
//             courses[index] = selectedCourse
//             renderCourses(courses)
//         })
// }
//
// function init() {
//     titleFld = $(".wbdv-title-fld")
//     $seatsFld = $(".wbdv-seats-fld")
//     $semesterFld = $(".wbdv-semester-fld")
//     $createBtn = $(".wbdv-create-btn")
//     addCourseBtn = jQuery("#wbdv-create-course")
//     addCourseBtn.click(addCourse)
//     $updateBtn = $(".wbdv-update-btn")
//     theTableBody = jQuery("tbody")
//
//     $updateBtn.click(updateCourse)
//     $createBtn.click(() => {
//             createCourse({
//                 title: titleFld.val(),
//                 seats: $seatsFld.val(),
//                 semester: $semesterFld.val()
//             })
//             titleFld.val("")
//             $seatsFld.val()
//         }
//     )
//
//     courseService.findAllCourses()
//         .then(function (actualCoursesFromServer) {
//             courses = actualCoursesFromServer
//             renderCourses(courses)
//         })
// }
// jQuery(init)

var $usernameFld
var $passwordFld
var $firstnameFld
var $lastnameFld
var $roleFld
var $createBtn
var theTablebody

var users =[];


function createUser(user){
    users.push(user)
    renderUsers(users)

}


function deleteUser(event){
    var deleteBtn = jQuery(event.target)
    theClass = deleteBtn.attr("class")
    theId = deleteBtn.attr("id")
    // courses.splice()
    // console.log(theId)
    users.splice(theId,1)
    renderUsers(users)
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
                            <button class="wbdv-delete" id="${i}">Delete</button>
                            <button>Select</button>
                        </td>
                        </tr>
                        `)
    }
    jQuery(".wbdv-delete")
        .click(deleteUser)

    )
}
// renderUsers(users)



function init(){
    $usernameFld = $(".wbdv-username-fld")
    $passwordFld = $(".wbdv-password-fld")
    $firstnameFld = $(".wbdv-firstname-fld")
    $lastnameFld = $(".wbdv-lastname-fld")
    $roleFld = $(".wbdv-role-fld")
    $createBtn = $(".wbdv-create-btn")
    theTablebody = jQuery("tbody")

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


    })
}
jQuery(init)