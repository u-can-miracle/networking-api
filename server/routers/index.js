import api from './api'
import OAuthLogin from './OAuthLogin'
import serverRender from './serverRender'

export default function rootRouter(app){
  app.use(api)
  app.use(OAuthLogin)

  app.get('*', serverRender)
}
