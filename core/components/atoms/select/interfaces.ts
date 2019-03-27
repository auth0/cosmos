export interface ISelectOption {
  [key: string]: any
  label?: string
  text?: string
  value?: any
  disabled?: boolean
}

export interface ISelectGroupOption {
  groupName: string
  items?: ISelectOption[]
}

export type ISelectOptions = (ISelectOption | ISelectGroupOption)[]