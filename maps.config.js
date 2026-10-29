import { defaults } from '@jochenklar/maps'

import infoDe from './info.de.html?raw'
import infoEn from './info.en.html?raw'
import maps from './maps.json'

export default {
  brand: {
    text: {
      de: 'Luftbilder von Berlin',
      en: 'Aerial images of Berlin',
    },
  },
  info: {
    de: infoDe,
    en: infoEn,
  },
  view: {
    center: [52.51, 13.37628],
    zoom: 14,
  },
  panes: {
    maxLevel: 2,
  },
  show: {
    modal: false,
    filmstrip: true,
  },
  // the Großer Stern
  thumbnail: '16/35198/21494',
  // the other site of the OK Lab Berlin, which opens with the current view
  external: [
    ...defaults.external,
    {
      name: 'maps.berlin.codefor.de',
      url: 'https://maps.berlin.codefor.de/',
    },
  ],
  maps,
}
