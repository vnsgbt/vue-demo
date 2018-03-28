
const appEl = "#app"

const message = 'You loaded this page on ' + new Date().toLocaleString()
const seen = true
const todos =
    [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
    ]

const groceryList =
    [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]

const data = {
    groceryList,
    message,
    todos,
    seen,
}

function reverseMessage() {
    this.message = this.message.split('').reverse().join('')
}

const methods = {
    reverseMessage
}

const todoItem = 'todo-item'
const template = '<li>{{todo.text}}</li>'
const props = ['todo']
const todoTempl = { template, props }
Vue.component(todoItem, todoTempl)

const app = new Vue({
    el: appEl,
    data: data,
    methods: methods
})


