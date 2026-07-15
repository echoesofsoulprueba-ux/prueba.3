import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'error'] },
  },
}

export const Default = { args: { variant: 'default', children: 'Etiqueta' } }
export const Primary = { args: { variant: 'primary', children: 'Nuevo' } }
export const Success = { args: { variant: 'success', children: 'Activo' } }
export const Warning = { args: { variant: 'warning', children: 'Pendiente' } }
export const Error = { args: { variant: 'error', children: 'Vencido' } }
