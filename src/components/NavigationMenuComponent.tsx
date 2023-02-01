import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDown } from 'phosphor-react';

export function NavigationMenuComponent() {
  return (
    <NavigationMenu.Root className='relative'>
      <NavigationMenu.List className='flex flex-col md:flex-row gap-7'>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='text-greyCustom-400 hover:text-black transition-colors flex items-center gap-1'>
            Features
            <CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='bg-white text-start text-greyCustom-400 absolute left-0 top-6 py-8 px-4 rounded-md shadow-xl z-10'>
            <ul className='flex flex-col gap-3'>
              <li className='flex flex-row gap-4'>
                <img src="./images/icon-todo.svg" alt="" />
                <a href="#">Todo List</a>
              </li>
              <li className='flex flex-row gap-4'>
                <img src="./images/icon-calendar.svg" alt="" />
                <a href="#">Calendar</a>
              </li>
              <li className='flex flex-row gap-4'>
                <img src="./images/icon-reminders.svg" alt="" />
                <a href="#">Reminders</a>
              </li>
              <li className='flex flex-row gap-4'>
                <img src="./images/icon-planning.svg" alt="" />
                <a href="#">Planning</a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='text-greyCustom-400 hover:text-black transition-colors flex items-center gap-1'>
            Company
            <CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='bg-white text-start text-greyCustom-400 absolute top-1/2 translate-y-4 left-1/2 lg:top-2 py-8 px-4 rounded-md shadow-2xl z-10'>
            <ul className='flex flex-col gap-3'>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>


        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}