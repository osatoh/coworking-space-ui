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
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
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
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
    holiday: '予約制',
    price_per_hour: '275~330',
    price_per_day: '-',
    hp: 'https://www.instabase.jp/space/6504529072',
    parking: '有',
  },
  {
    name: 'ocean-21',
    address: '浦添市',
    map:
      'https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92901-2126+%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B5%A6%E6%B7%BB%E5%B8%82%E5%AE%AE%E5%9F%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%91/@26.245529,127.707465,17z/data=!4m5!3m4!1s0x34e56b96b6109731:0x82f31ea88707c133!8m2!3d26.2455294!4d127.7074653?hl=ja',
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
    holiday: 'なし',
    price_per_hour: '-',
    price_per_day: '550',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '7',
  },
  {
    name: 'ocean-21',
    address: '浦添市',
    map:
      'https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92901-2126+%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B5%A6%E6%B7%BB%E5%B8%82%E5%AE%AE%E5%9F%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%91/@26.245529,127.707465,17z/data=!4m5!3m4!1s0x34e56b96b6109731:0x82f31ea88707c133!8m2!3d26.2455294!4d127.7074653?hl=ja',
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
    holiday: 'なし',
    price_per_hour: '-',
    price_per_day: '550',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '7',
  },
  {
    name: 'ocean-21',
    address: '浦添市',
    map:
      'https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92901-2126+%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B5%A6%E6%B7%BB%E5%B8%82%E5%AE%AE%E5%9F%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%91/@26.245529,127.707465,17z/data=!4m5!3m4!1s0x34e56b96b6109731:0x82f31ea88707c133!8m2!3d26.2455294!4d127.7074653?hl=ja',
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
    holiday: 'なし',
    price_per_hour: '-',
    price_per_day: '550',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '7',
  },
  {
    name: 'ocean-21',
    address: '浦添市',
    map:
      'https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92901-2126+%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B5%A6%E6%B7%BB%E5%B8%82%E5%AE%AE%E5%9F%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%91/@26.245529,127.707465,17z/data=!4m5!3m4!1s0x34e56b96b6109731:0x82f31ea88707c133!8m2!3d26.2455294!4d127.7074653?hl=ja',
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
    holiday: 'なし',
    price_per_hour: '-',
    price_per_day: '550',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '7',
  },
  {
    name: 'ocean-21',
    address: '浦添市',
    map:
      'https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92901-2126+%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B5%A6%E6%B7%BB%E5%B8%82%E5%AE%AE%E5%9F%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%91/@26.245529,127.707465,17z/data=!4m5!3m4!1s0x34e56b96b6109731:0x82f31ea88707c133!8m2!3d26.2455294!4d127.7074653?hl=ja',
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
    holiday: 'なし',
    price_per_hour: '-',
    price_per_day: '550',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '7',
  },
  {
    name: 'ocean-21',
    address: '浦添市',
    map:
      'https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92901-2126+%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B5%A6%E6%B7%BB%E5%B8%82%E5%AE%AE%E5%9F%8E%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%91/@26.245529,127.707465,17z/data=!4m5!3m4!1s0x34e56b96b6109731:0x82f31ea88707c133!8m2!3d26.2455294!4d127.7074653?hl=ja',
    weekday_time: '10 ~ 18',
    weekend_time: '12 ~ 18',
    holiday: 'なし',
    price_per_hour: '-',
    price_per_day: '550',
    hp: 'https://co-learning-space.ocean-21.co.jp/',
    parking: '7',
  },
  // { name: 'nrgokinawa', address: 'https://www.nrgokinawa.com/' },
  // { name: 'accea', address: 'https://cafe.accea.co.jp/map/naha.php' },
  // { name: 'okinawa-now', address: 'https://okinawa-now.com/1445-2/' },
  // { name: 'l-base', address: 'https://l-base.net/' },
  // { name: 'vessel-hotel', address: 'https://www.vessel-hotel.jp/lequ/okinawa/map/' },
  // { name: 'gakuarubase', address: 'https://gakuarubase.jp/facilities/' },
  // {
  //   name: 'key',
  //   address:
  //     // 'https://www.google.co.jp/maps/place/%E3%82%AD%E3%83%BC%E3%82%BA+%E3%82%AB%E3%83%95%E3%82%A7+%E5%8C%97%E8%B0%B7%E3%83%8F%E3%83%B3%E3%83%93%E3%83%BC%E5%BA%97/@26.3052113,127.7603373,17z/data=!3m1!4b1!4m5!3m4!1s0x34e5131f1e5eca61:0x7fbb3f17ad9552c8!8m2!3d26.3052065!4d127.762526?shorturl=1',
  //     'map',
  // },
]

export default function Example() {
  return (
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
                  <tr key={space.name} className={spaceIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {space.name}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      <a href={space.map}>{space.address}</a>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      {space.weekday_time}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      {space.weekend_time}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      {space.holiday}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      {space.price_per_hour} 円
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      {space.price_per_day} 円
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      {space.parking}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-blue-500">
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
  )
}
