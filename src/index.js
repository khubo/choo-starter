import choo from 'choo'
import html from 'choo/html'
import store from './store'
import main from './views/main'

const app = choo()

app.use(store)
app.route('/', main)
app.mount('div')