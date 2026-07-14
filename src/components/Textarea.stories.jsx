import { Textarea } from './Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
}

export const Default = { args: { placeholder: 'Escribí un mensaje…', rows: 4 } }
export const WithValue = { args: { defaultValue: 'Texto de varias líneas ingresado por el usuario.', rows: 4 } }
export const Disabled = { args: { placeholder: 'Escribí un mensaje…', rows: 4, disabled: true } }
export const Error = { args: { placeholder: 'Escribí un mensaje…', rows: 4, error: true, errorMessage: 'Este campo es obligatorio' } }
