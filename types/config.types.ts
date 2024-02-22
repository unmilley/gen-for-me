import type { NuxtAppConfig } from 'nuxt/schema'

export interface NuxtConfigApp {
  baseURL: string
  buildAssetsDir: string
  cdnURL: string
  head: NuxtAppConfig['head']
  layoutTransition: NuxtAppConfig['layoutTransition']
  pageTransition: NuxtAppConfig['pageTransition']
  viewTransition: NuxtAppConfig['viewTransition']
  keepalive: NuxtAppConfig['keepalive']
  rootId: string | false
  rootTag: string
}
