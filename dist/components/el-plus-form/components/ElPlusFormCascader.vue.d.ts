declare const _default: import('vue').DefineComponent<
  {
    modelValue: {
      type: import('vue').PropType<string | string[] | null>
    }
    field: {
      type: import('vue').PropType<string>
      required: true
    }
    desc: {
      type: import('vue').PropType<{
        [key: string]: any
      }>
      required: true
    }
    formData: {
      type: import('vue').PropType<{
        [key: string]: any
      }>
      required: true
    }
    disabled: {
      type: import('vue').PropType<boolean>
    }
  },
  {},
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  'update:modelValue'[],
  'update:modelValue',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      modelValue: {
        type: import('vue').PropType<string | string[] | null>
      }
      field: {
        type: import('vue').PropType<string>
        required: true
      }
      desc: {
        type: import('vue').PropType<{
          [key: string]: any
        }>
        required: true
      }
      formData: {
        type: import('vue').PropType<{
          [key: string]: any
        }>
        required: true
      }
      disabled: {
        type: import('vue').PropType<boolean>
      }
    }>
  > & {
    'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined
  },
  {},
  {}
>
export default _default
