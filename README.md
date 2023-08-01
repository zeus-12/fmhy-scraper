# fmhy-scraper

A cron-job which scrapes the github page of FMHY, and update the db periodically.

- to setup, run `yarn watch` on one terminal and `yarn start` on another.
- Built using Prisma, Typescript, Node, PlanetScale
- Set `QUERY_BATCH_SIZE=15000` as env => else prisma will close connections [reference](https://github.com/prisma/prisma/discussions/7389)
