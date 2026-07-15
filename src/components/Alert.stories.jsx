import { Alert } from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: ['success', 'warning', 'error'] },
    title: { control: 'text' },
  },
}

export const Success = { args: { variant: 'success', title: 'Listo', children: 'La operación se completó con éxito.' } }
export const Warning = { args: { variant: 'warning', title: 'Atención', children: 'Revisá los datos antes de continuar.' } }
export const Error = { args: { variant: 'error', title: 'Error', children: 'Ocurrió un problema al procesar la solicitud.' } }
