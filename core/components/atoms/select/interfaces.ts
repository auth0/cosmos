export interface ISelectOption {
  text: string
  value: any
  disabled?: boolean
}

export interface ISelectGroupOption {
  groupName: string
  items?: ISelectOption[]
}