import App from './App'
import router from './routes/index.js'

// index.html과 연결

const root = document.querySelector('#root')
root.append(new App().el)
//router 호출, 라우터 기능 사용해야하기 때문에
router()