import withInstall from '../../utils/with-install'
import _CascaderPanel from './src/index.vue'

const CascaderPanel = withInstall(_CascaderPanel)

export default _CascaderPanel

// export * from './src/icon'

declare module 'vue' {
  export interface GlobalComponents {
    'ZDCascader': typeof CascaderPanel
  }
}
