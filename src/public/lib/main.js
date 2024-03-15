import { lastUser, loadUsers, onSelected } from "./socket.js";
import { appendUser, fillForm, onHandleSubmit, renderUsers } from "./ui.js";

onSelected(fillForm)
lastUser(appendUser)
loadUsers(renderUsers)

const userForm = document.querySelector('#userForm')

userForm.addEventListener('submit', onHandleSubmit)