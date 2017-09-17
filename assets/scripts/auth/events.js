// required files //

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// page funtionality //

// events //

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(onGetAllMyPages)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

const onGetAllPosts = function (event) {
  event.preventDefault()
  api.getAllPosts()
    .then(ui.getAllPostsSuccess)
    .catch(ui.getAllPostsFailure)
}

const onGetAllMyPosts = function (event) {
  event.preventDefault()
  api.getAllMyPosts()
    .then(ui.getAllMyPostsSuccess)
    .catch(ui.getAllMyPostsFailure)
}

const onCreatePost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.createPostFailure)
}

const onEditPost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.editPost(data)
    .then(ui.onEditPostSuccess)
    .catch(ui.onEditPostFailure)
}

const onGetAllPages = function (event) {
  event.preventDefault()
  api.getAllPages()
    .then(ui.getAllPagesSuccess)
    .catch(ui.getAllPagesFailure)
}

const onGetAllMyPages = function () {
  // event.preventDefault()
  api.getAllMyPages()
    .then(ui.getAllMyPagesSuccess)
    .catch(ui.getAllMyPagesFailure)
}

const onGetOnePage = function (event) {
  console.log('onGetOnePage called')
  const dataId = this.getAttribute('data-id')
  console.log('dataId = ' + dataId)
  api.getOnePage(dataId)
    .then(ui.getOnePageSuccess)
    .catch(ui.getOnePageFailure)
}

// TODO add promise to call getAllMyPages
const onCreatePage = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPage(data)
    .then(ui.createPageSuccess)
    .then(onGetAllMyPages)
    .catch(ui.createPageFailure)
}

const onDeletePage = function (event) {
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.deletePage(dataId)
    .then(ui.deletePageSuccess)
    .catch(ui.deletePageFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetAllPosts,
  onGetAllMyPosts,
  onCreatePost,
  onEditPost,
  onGetAllPages,
  onGetAllMyPages,
  onCreatePage,
  onGetOnePage,
  onDeletePage
}
