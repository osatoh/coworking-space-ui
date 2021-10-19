import React, { useState } from 'react'

const spaces = [
  { name: 'ocean-21', address: 'https://co-learning-space.ocean-21.co.jp/' },
  { name: 'instabase', address: 'https://www.instabase.jp/space/6504529072' },
  { name: 'nrgokinawa', address: 'https://www.nrgokinawa.com/' },
  { name: 'accea', address: 'https://cafe.accea.co.jp/map/naha.php' },
  { name: 'okinawa-now', address: 'https://okinawa-now.com/1445-2/' },
  { name: 'l-base', address: 'https://l-base.net/' },
  { name: 'vessel-hotel', address: 'https://www.vessel-hotel.jp/lequ/okinawa/map/' },
  { name: 'gakuarubase', address: 'https://gakuarubase.jp/facilities/' },
  {
    name: 'key',
    address:
      'https://www.google.co.jp/maps/place/%E3%82%AD%E3%83%BC%E3%82%BA+%E3%82%AB%E3%83%95%E3%82%A7+%E5%8C%97%E8%B0%B7%E3%83%8F%E3%83%B3%E3%83%93%E3%83%BC%E5%BA%97/@26.3052113,127.7603373,17z/data=!3m1!4b1!4m5!3m4!1s0x34e5131f1e5eca61:0x7fbb3f17ad9552c8!8m2!3d26.3052065!4d127.762526?shorturl=1',
  },
]

export default function Example() {
  const [name, setName] = useState('')
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {spaces.map((space, spaceIdx) => (
                  <tr key={space.name} className={spaceIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {space.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href={space.address}>{space.address}</a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setName(spaces[Math.floor(Math.random() * spaces.length)].name)}
          >
            Button text
          </button>
          <div className="text-xl text-gray-600">
            次行くのは<span className="text-red-300"> {name} </span>です！
          </div>
        </div>
      </div>
    </div>
  )
}
