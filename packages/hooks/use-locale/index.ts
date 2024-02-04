
import { computed, getCurrentInstance, inject, provide, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import English from '@element-plus/locale/lang/en'
import type { Language } from '@element-plus/locale'

type Translator = (...args: any[]) => string

export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export const LocaleInjectionKey =
  'ElLocaleInjection' as unknown as InjectionKey<LocaleContext>

let localeObjCache: LocaleContext

export const useLocaleInject = () => {
  return inject(
    LocaleInjectionKey,
    localeObjCache || {
      lang: ref(English.name),
      locale: ref(English),
      t: (...args) => {
        const [path, option] = args
        return translate(path, option, English)
      },
    }
  )
}

function translate(path, option, current) {
  const paths = path.split('.')
  let value
  for (let i = 0, j = paths.length; i < j; i++) {
    const property = paths[i]
    value = current[property]
    if (i === j - 1) return template(value, option)
    if (!value) return ''
    current = value
  }
}

function template(str: string, option) {
  if (!str || !option) return str
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key]
  })
}