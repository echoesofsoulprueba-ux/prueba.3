import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
}

export const Primary = { args: { children: 'Click me', variant: 'primary', size: 'md' } }
export const Secondary = { args: { children: 'Click me', variant: 'secondary', size: 'md' } }
export const Ghost = { args: { children: 'Click me', variant: 'ghost', size: 'md' } }
export const Small = { args: { children: 'Click me', variant: 'primary', size: 'sm' } }
export const Large = { args: { children: 'Click me', variant: 'primary', size: 'lg' } }
export const Disabled = { args: { children: 'Click me', disabled: true } }
