export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com' // atjkndeycykabaih  zmapntcrexzfbehc
    },
    get user() {
      return '867965327@qq.com'
    },
    get pass() {
      return 'vwuyvubjwmgtbecc'
    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase() // 转为大写
      }
    },
    // 过期时间
    get expire() {
      return () => {
        return new Date().getTime() * 60 * 60 * 1000
      }
    }
  }
}
