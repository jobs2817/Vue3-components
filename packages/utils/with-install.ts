import { Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

export default function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = (app) => {
    const { name } = comp as unknown as { name: string }

    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}
