import passport from 'koa-passport'
import LocalStratege from 'passport-local' // 本地策略
import UserModel from '../../dbs/models/users'

passport.use(new LocalStratege(async function (username, password, done) {
  const where = {
    username
  }
  const result = await UserModel.findOne(where)
  if (result !== null) {
    if (result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

// 用户每次进来通过session进行验证并且存储到session中
// 序列化
passport.serializeUser(function (user, done) {
  done(null, user)
})
// 逆序列
passport.deserializeUser(function (user, done) {
  return done(null, user)
})

export default passport
