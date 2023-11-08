import { MoonIcon } from '@/assets/icons'
import { Menu } from '@headlessui/react'

const themes = [
  {
    value: 'light',
    label: 'Light (default)',
    bg_color: 'bg-default-accent',
  },
  {
    value: 'dark',
    label: 'Dark (default)',
    bg_color: 'bg-default-accent',
  },
  {
    value: 'green',
    label: 'Green',
    bg_color: 'bg-green-accent',
  },
  {
    value: 'green-dark',
    label: 'Green Dark',
    bg_color: 'bg-green-accent',
  },
  {
    value: 'purple',
    label: 'Purple',
    bg_color: 'bg-purple-accent',
  },
  {
    value: 'purple-dark',
    label: 'Purple Dark',
    bg_color: 'bg-purple-accent',
  },
]

export function ThemeSelector() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="h-5" aria-label="Button for change theme">
        <MoonIcon />
      </Menu.Button>

      <Menu.Items className="absolute -right-3 mt-2 w-56 origin-top-right border-secondary border divide-y divide-secondary bg-primary focus:outline-none z-20">
        {themes.map((theme) => (
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active && 'bg-secondary text-primary'
                } flex gap-3 px-2 py-2 w-full text-xl`}
                onClick={() => handleChangeTheme(theme.value)}
              >
                <div className={`${theme.bg_color} rounded-full w-6 h-6`} />
                {theme.label}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

function handleChangeTheme(newTheme: string) {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const selectedTheme = currentTheme === newTheme ? currentTheme : newTheme
  document.documentElement.setAttribute('data-theme', selectedTheme)
}
