import { deleteUser, getUser, saveUser, updateUser } from './socket.js'

const usersList = document.querySelector('#usersList')
let userId = ''

const userUI = user => {
    const div = document.createElement('div')
    div.innerHTML += `
        <div class="card card-body rounded-0 mb-2 animate__animated animate__bounceInLeft">
            <div class="d-flex justify-content-between">
                <h5>${user.fullname}</h5>
                <div>
                    <button class="btn btn-delete" dat-id="${user._id}">❌</button>
                    <button class="btn btn-update" data-id="${user._id}">🎯</button>
                </div> 
            </div>
            <div>
                PUEBLO: ${user.direccion} / TELEFONO: ${user.telefono}
            </div>
        </div>
    `
    
    div.querySelector('.btn-delete').addEventListener('click', () => {
        deleteUser(user._id)
    })

    div.querySelector('.btn-update').addEventListener('click', () => {
        getUser(user._id)
    })

    return div
}

export const renderUsers = (users) => {
    usersList.innerHTML = ''
    users.forEach(user => usersList.append(userUI(user)))
}

export const onHandleSubmit = (e) => {
    e.preventDefault()
    if(userId){
        updateUser(userId, userForm['fullname'].value)
    }else {
        saveUser(userForm['fullname'].value)
    }
}

export const appendUser = user => {
    usersList.append(userUI(user))
}

export const fillForm = (user) => {
    userForm['fullname'].value = user.fullname
    userId = user._id
}