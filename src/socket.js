import userModel from "./models/user.model.js"

export default (io) => {

    io.on('connection', (socket) => {

        const emitUsers = async () => {
            const users = await userModel.find()
            io.emit('server:loadUsers', users)
        }; emitUsers()

        
        socket.on('client:saveUser', async (data) => {
            const user = new userModel(data)
            const resp = await user.save()
            io.emit('server:saveUser', resp)
        })


        socket.on('client:deleteUser', async (id) => {
            await userModel.findByIdAndDelete(id)
            emitUsers()
        })


        socket.on('client:getUser', async (id) => {
            const user = await userModel.findById(id)
            io.emit('server:getUser', user)
        })

        
        socket.on('client:updateUser', async (data) => {
            await userModel.findByIdAndUpdate(data._id, data, {new: true})
            emitUsers()
        })
    })
}