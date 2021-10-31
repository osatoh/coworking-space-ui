import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

const heads = [
  '名前',
  '所在地',
  '平日営業時間',
  '土日祝営業時間',
  '定休日',
  '料金/時間',
  '料金/日',
  '駐車場',
  'ホームページ 又は マップ',
]

const spaces = [
  {
    name: 'ocean-21',
    address: '浦添市',
    map:
      'https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92901-2126+%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B5%A6%E6%B7%BB%E5%B8%82%E5%AE%AE%E5%9F%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%91/@26.245529,127.707465,17z/data=!4m5!3m4!1s0x34e56b96b6109731:0x82f31ea88707c133!8m2!3d26.2455294!4d127.7074653?hl=ja',
    weekday_time: '10:00 ~ 18:00',
    weekend_time: '12:00 ~ 18:00',
    holiday: '-',
    price_per_hour: '-',
    price_per_day: '550',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '7',
  },
  {
    name: 'グランドキャビンホテル那覇小禄',
    address: '那覇市',
    map:
      "https://www.google.com/maps/place/26%C2%B011'30.9%22N+127%C2%B039'38.5%22E/@26.191908,127.660693,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.191908!4d127.6606929?hl=ja",
    weekday_time: '10:00 ~ 18:00',
    weekend_time: '12:00 ~ 18:00',
    holiday: '予約制',
    price_per_hour: '330',
    price_per_day: '-',
    hp: 'https://www.instabase.jp/space/6504529072',
    parking: '有',
  },
  {
    name: 'GAKUARU BASE',
    address: '宜野湾市',
    map:
      'https://www.google.com/maps?ll=26.292127,127.777468&z=16&t=m&hl=ja&gl=JP&mapclient=embed&q=%E3%80%92901-2202+%E6%B2%96%E7%B8%84%E7%9C%8C%E5%AE%9C%E9%87%8E%E6%B9%BE%E5%B8%82%E6%99%AE%E5%A4%A9%E9%96%93%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%92%EF%BC%94%E2%88%92%EF%BC%95',
    weekday_time: '10:30 ~ 20:00',
    weekend_time: '-',
    holiday: '土日祝',
    price_per_hour: '500',
    price_per_day: '1000',
    hp: 'https://gakuarubase.jp/coworking/',
    parking: '有料P(200円/日)',
  },
  {
    name: 'LeQu',
    address: '北谷',
    map:
      'https://www.google.com/maps/place/%E3%83%AC%E3%82%AF%E3%83%BC%E6%B2%96%E7%B8%84%E5%8C%97%E8%B0%B7%E3%82%B9%E3%83%91%26%E3%83%AA%E3%82%BE%E3%83%BC%E3%83%88/@26.3175771,127.7527385,17z/data=!4m12!1m2!2m1!1z44Os44Kv44O85rKW57iE5YyX6LC344K544OR77yG44Oq44K-44O844OI!3m8!1s0x34e513c8a7886b81:0x28e5b114055afd81!5m2!4m1!1i2!8m2!3d26.3174972!4d127.7549514!15sCirjg6zjgq_jg7zmspbnuITljJfosLfjgrnjg5HvvIbjg6rjgr7jg7zjg4haLyIt44Os44Kv44O8IOaylue4hCDljJfosLcg44K544ORICYg44Oq44K-44O844OIkgEQaG90X3NwcmluZ19ob3RlbA',
    weekday_time: '14:00 ~ 20:00',
    weekend_time: '14:00 ~ 20:00',
    holiday: 'なし',
    price_per_hour: '500(/3時間)',
    price_per_day: '1000',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '250',
  },
  {
    name: 'SEASIDE OFFICE',
    address: '大宜味',
    map:
      'https://www.google.com/maps?ll=26.705245,128.13607&z=19&t=m&hl=ja&gl=JP&mapclient=embed&cid=313905307541477895',
    weekday_time: '10:00 ~ 19:00',
    weekend_time: '10:00 ~ 19:00',
    holiday: '不定休',
    price_per_hour: '580(/90分)',
    price_per_day: '1700',
    hp: 'https://seasideoffice.site/',
    parking: '有',
  },
  {
    name: 'ACCEA CAFE',
    address: '那覇市',
    map:
      'https://www.google.com/maps?ll=26.216871,127.679979&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=9405836620269239149',
    weekday_time: '8:00 ~ 22:00',
    weekend_time: '10:00 ~ 19:00',
    holiday: '?',
    price_per_hour: '380',
    price_per_day: '2000',
    hp: 'https://cafe.accea.co.jp/map/naha.php',
    parking: '?',
  },
  {
    name: 'エンタメ酒場',
    address: 'うるま市',
    map:
      'https://www.google.com/maps/place/%E3%82%B3%E3%83%AF%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%81%A8%E5%B1%85%E9%85%92%E5%B1%8B%EF%BD%9C%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%A1%E9%85%92%E5%A0%B4NRG%EF%BC%88%E3%82%A8%E3%83%8A%E3%82%B8%E3%83%BC%EF%BC%89/@26.3566028,127.8320643,17z/data=!3m2!4b1!5s0x34e50e6bf26ccb69:0x648cb7b74edefe69!4m5!3m4!1s0x34e50e6bf215e19b:0xb9992f5979e5f5bf!8m2!3d26.356598!4d127.834253!5m1!1e4?hl=ja',
    weekday_time: '9:00 ~ 23:00',
    weekend_time: '9:00 ~ 23:00',
    holiday: '年中無休(貸切営業の場合有り)',
    price_per_hour: '1100(/3時間)',
    price_per_day: '1650',
    hp: 'https://www.nrgokinawa.com/',
    parking: '?',
  },
]

const navigation = [
  { name: '一覧', href: '#', icon: HomeIcon, current: true },
  // { name: 'Team', href: '#', icon: UsersIcon, current: false },
  // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function randomName() {
  return spaces[Math.floor(Math.random() * spaces.length)].name
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [name, setName] = useState('')
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="pt-2 md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 align-middle flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setName(randomName())}
          >
            お店をランダムに表示
          </button>
          <div className="ml-6 text-6xl text-gray-600">{name}</div>
        </div>
        {/* <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div> */}

        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {heads.map((head) => (
                              <th
                                key={head}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                {head}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {spaces.map((space, spaceIdx) => (
                            <tr
                              key={space.name}
                              className={[
                                spaceIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                                space.name === name ? 'bg-red-100' : '',
                              ].join(' ')}
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {space.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a href={space.map}>{space.address}</a>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {space.weekday_time}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {space.weekend_time}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {space.holiday}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {space.price_per_hour} 円
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {space.price_per_day} 円
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {space.parking}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                                <a href={space.hp}>{space.hp}</a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
