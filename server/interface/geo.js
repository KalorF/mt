import Router from 'koa-router'
import axios from 'axios'
import Menu from '../dbs/models/menu'
import Province from '../dbs/models/province'
import City from '../dbs/models/city'

const router = new Router({ prefix: '/geo' })

// const sign = '1558166324'

router.get('/getPosition', async (ctx) => {
  const result = await axios.get('http://pv.sohu.com/cityjson?ie=utf-8')
  const city = result.data
  ctx.body = {
    city
  }
})

router.get('/province', async (ctx) => {
  const province = await Province.find()
  ctx.body = {
    province: province.map((item) => {
      return {
        id: item.id,
        name: item.value[0]
      }
    })
  }
})

router.get('/province/:id', async (ctx) => {
  const city = await City.findOne({ id: ctx.params.id })

  ctx.body = {
    code: 0,
    city: city.value.map((item) => {
      return { province: item.province, id: item.id, name: item.name }
    })
  }
  // let {status, data: {
  //     city
  //   }} = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}?sign=${sign}`)
  // if (status === 200) {
  //   ctx.body = {
  //     city
  //   }
  // } else {
  //   ctx.body = {
  //     city: []
  //   }
  // }
})

router.get('/city', async (ctx) => {
  let city = []
  const result = await City.find()
  result.forEach((item) => {
    city = city.concat(item.value)
  })
  ctx.body = {
    code: 0,
    city: city.map((item) => {
      return {
        province: item.province,
        id: item.id,
        name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
          ? item.province
          : item.name
      }
    })
  }
  // let {status, data: {
  //     city
  //   }} = await axios.get(`http://cp-tools.cn/geo/city?sign=${sign}`);
  // if (status === 200) {
  //   ctx.body = {
  //     city
  //   }
  // } else {
  //   ctx.body = {
  //     city: []
  //   }
  // }
})

router.get('/hotCity', async (ctx) => {
  const list = [
    '北京市',
    '上海市',
    '广州市',
    '深圳市',
    '天津市',
    '西安市',
    '杭州市',
    '南京市',
    '武汉市',
    '成都市'
  ]
  const result = await City.find()
  let nList = []
  result.forEach((item) => {
    nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
  })
  ctx.body = {
    hots: nList
  }
  // let {status, data: {
  //     hots
  //   }} = await axios.get(`http://cp-tools.cn/geo/hotCity?sign=${sign}`);
  // if (status === 200) {
  //   ctx.body = {
  //     hots
  //   }
  // } else {
  //   ctx.body = {
  //     hots: []
  //   }
  // }
})

router.get('/menu', async (ctx) => {
  const result = await Menu.findOne()
  ctx.body = {
    menu: result.menu
  }
})

export default router
