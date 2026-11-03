# luftbilder.berlin.codefor.de

On [luftbilder.berlin.codefor.de](https://luftbilder.berlin.codefor.de), you can browse aerial images of Berlin
from almost 100 years, from 1928 until today, from the [Geoportal Berlin](https://gdi.berlin.de), and see how the
city has changed.

This is a project of the [OK Lab Berlin](https://codefor.de/berlin).


## Related projects

* [github.com/jochenklar/maps](https://github.com/jochenklar/maps) is the app to compare tiled maps side by side,
  which this site is built with
* [github.com/codeforberlin/maps.berlin.codefor.de](https://github.com/codeforberlin/maps.berlin.codefor.de) is
  the sister site [maps.berlin.codefor.de](https://maps.berlin.codefor.de), which shows many more maps from the
  Geoportal Berlin, like historical maps and the urban development of Berlin since 1650
* [github.com/codeforberlin/gdal-tiles-api](https://github.com/codeforberlin/gdal-tiles-api) is the API which cuts
  out the tiles from Cloud Optimized GeoTIFFs and other datasets using GDAL
* [github.com/codeforberlin/tiles-config](https://github.com/codeforberlin/tiles-config) is the configuration of
  [tiles.codefor.de](https://tiles.codefor.de), which serves the tiles for the different maps with the GDAL Tiles API


## Data source

The aerial images are provided by the City of Berlin in the [Geoportal Berlin](https://gdi.berlin.de), formerly
known as the FIS Broker. The code to fetch them is at
[github.com/codeforberlin/fis-broker](https://github.com/codeforberlin/fis-broker).


## Development

The site is a small [Vite](https://vite.dev) app, the maps are configured in `maps.json` and the rest of the
config in `maps.config.js`, see the README of [@jochenklar/maps](https://github.com/jochenklar/maps). Install the
dependencies and start the development server with:

```bash
make install
make dev
```

`make build` builds the static site into `dist/` and `make preview` serves it locally. `make local` uses a
checkout of `@jochenklar/maps` in `../maps` instead of the release from npm, and `make deploy` copies the build to
the server set as `DEPLOY=host:/path` in `.env`.
