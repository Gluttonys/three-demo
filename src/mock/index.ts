import {createServer, Registry} from 'miragejs'
import {Server} from "miragejs/server";
import * as _Mock from 'mockjs'

type RouterConfig = {
  path: string,
  methods: "get" | "pst",
  result: Record<string, any> | Array<any>
}


class Mock {

  server: Server<Registry<any, any>>

  routers: RouterConfig[] = [
    {
      path: "/users",
      methods: "get",
      result: _Mock.mock({
        "list|1-10": [{
          "id|+1": 1,
          "name": _Mock.Random.name(true),
          "desc": _Mock.Random.color(),

          "goodsClass": "女装",
          "goodsId|+1": 1,
          "goodsName": "@ctitle(10)",
          "goodsAddress": "@county(true)",
          "goodsStar|1-5": "★",
          "goodsImg": "@Image('100x100','@color','小甜甜')",
          "goodsSale|30-500": 30
        }]
      })
    },
    {
      path: "/gender",
      methods: "get",
      result: [1, 2, 3]
    }
  ]


  constructor() {
    this.initServer()
    this.initRouters()
  }

  /** 初始化服务 */
  initServer() {
    this.server = createServer({
      urlPrefix: "http://localhost:8080/",
      namespace: "api",
      logging: false
    })
  }

  /** 初始化路由 */
  initRouters() {

    this.routers.forEach(route => {
      const {path, methods, result} = route
      this.server[methods](path, () => result)
    })


  }
}


export default Mock
