import { MoonIcon } from '@/assets/icons'
import { Menu } from '@headlessui/react'

const accents = [
  {
    value: 'default',
    label: 'Yellow',
    bg: 'bg-default-accent',
  },
  {
    value: 'green',
    label: 'Green',
    bg: 'bg-green-accent',
  },
  {
    value: 'purple',
    label: 'Purple',
    bg: 'bg-purple-accent',
  },
]

export function ThemeSelector() {
  return (
    <Menu
      as="div"
      role="theme-menu"
      className="relative inline-block text-left"
    >
      <Menu.Button className="h-5" aria-label="Button for change theme">
        <MoonIcon />
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right border-secondary border divide-y divide-secondary bg-primary focus:outline-none z-20">
        <Menu.Item
          as="button"
          className="text-xl w-full m-auto text-center px-2 py-2 bg-secondary text-primary"
          onClick={handleChangeMode}
        >
          Dark/Light
        </Menu.Item>

        <section>
          {accents.map((accent) => (
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && 'bg-secondary text-primary'
                  } flex gap-3 px-2 py-2 w-full text-xl`}
                  onClick={() => handleChangeAccent(accent.value)}
                >
                  <div className={`${accent.bg} rounded-full w-6 h-6`} />
                  {accent.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </section>
      </Menu.Items>
    </Menu>
  )
}

function handleChangeMode() {
  const currentMode = document.documentElement.getAttribute('data-mode')

  if (currentMode === 'dark')
    return document.documentElement.setAttribute('data-mode', 'light')

  return document.documentElement.setAttribute('data-mode', 'dark')
}

function handleChangeAccent(newAccent: string) {
  document.documentElement.setAttribute('data-accent', newAccent)
}
