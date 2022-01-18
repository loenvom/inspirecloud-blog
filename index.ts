import Koa from "koa"
import KoaStatic from "koa-static"
import path from "path"
const app = new Koa()
app.use(KoaStatic(path.join(__dirname, "./public")))
app.listen(3000)



