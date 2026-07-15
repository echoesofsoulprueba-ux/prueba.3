import { Input } from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
}

export const Default = { args: { placeholder: 'Escribí algo…' } }
export const WithValue = { args: { defaultValue: 'Texto ingresado', placeholder: 'Escribí algo…' } }
export const Disabled = { args: { placeholder: 'Escribí algo…', disabled: true } }
export const Error = { args: { placeholder: 'Escribí algo…', error: true, errorMessage: 'Este campo es obligatorio' } }
