import images from '../services/images';

export const expensesList = [
  {
    id: '2323',
    image: images.car,
    title: 'Auto & transport',
    total: '700',
    items: [
      {id: '33', title: 'Auto & transport', total: '350', spent: '200'},
      {id: 'ewe2', title: 'Auto insurance', total: '250', spent: '180'},
    ],
  },
  {
    id: '232424',
    image: images.bills,
    title: 'Bill & Ultilities',
    total: '320',
    items: [
      {id: '234242444', title: 'Subscriptions', total: '50', spent: '50'},
      {id: '2322424424', title: 'House service', total: '138', spent: '128'},
      {id: '2323424', title: 'Maintenance', total: '130', spent: '100'},
    ],
  },
];

export const subscriptionsList = [
  {
    id: 1,
    title: 'Patreon membership',
    package: '$19.99/mo',
    logo: 'https://pbs.twimg.com/media/DCcf5baXYAA5-Lf.jpg',
  },
  {
    id: 2,
    title: 'Netflix',
    package: '$12.00/mo',
    logo: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
  },
  {
    id: 3,
    title: 'Apple Payment',
    package: '$12.00/mo',
    logo: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png',
  },
  {
    id: 4,
    title: 'Spotify',
    package: '$6.00/mo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png',
  },
];

export const creditScoreList = [
  {
    id: 1,
    title: 'On-time patments',
    rate: 'Good',
    missed: '1 missed',
    parentage: '95%',
  },
  {
    id: 2,
    title: 'Credit Utilization',
    rate: 'Not bad',
    missed: '15%',
    parentage: '95%',
  },
  {
    id: 4,
    title: 'Age of credit',
    rate: 'Good',
    parentage: '8 years',
  },
];
