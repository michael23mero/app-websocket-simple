const socket = io()

export const loadUsers = (callback) => {
    socket.on('server:loadUsers', callback)
}

export const saveUser = (fullname) => {
    socket.emit('client:saveUser', {
        fullname
    })
}

export const lastUser = (callback) => {
    socket.on('server:saveUser', callback)
}

export const deleteUser = id => {
    socket.emit('client:deleteUser', id)
}

export const getUser = id => {
    socket.emit('client:getUser', id)
}

export const onSelected = (callback) => {
    socket.on('server:getUser', callback)
}

export const updateUser = (_id, fullname) => {
    socket.emit('client:updateUser', {
        _id, fullname
    })
}