import { setupWorker, rest } from 'msw'
import { pages } from "./pages"
import { carousel } from "./carousel"
import { featured } from './featured-product'
import { campaign } from './campaign'
import { branches } from './branches'
import { kulah, tabak } from './product'
import { stores } from './stores'
import { about } from './about'
import { contact } from './contact'

const worker = setupWorker(
  rest.get('https://chilled-bills/pages', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(pages),
    )
  }),
  rest.get('https://chilled-bills/carousel', (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200, 'Mocked status'),
      ctx.json(carousel),
    )
  }),
  rest.get('https://chilled-bills/featured-product', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(featured),
    )
  }),
  rest.get('https://chilled-bills/campaign', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(campaign),
    )
  }),
  rest.get('https://chilled-bills/branches', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(branches),
    )
  }),
  rest.get('https://chilled-bills/product/kulah', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(kulah),
    )
  }),
  rest.get('https://chilled-bills/product/tabak', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(tabak),
    )
  }),
  rest.get('https://chilled-bills/stores', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(stores),
    )
  }),
  rest.get('https://chilled-bills/about', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(about),
    )
  }),
  rest.get('https://chilled-bills/contact', (req, res, ctx) => {
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json(contact),
    )
  }),
  rest.post('https://chilled-bills/contact', (req, res, ctx) => {
    const { name, email, title, content } = req.body;
    return res(
      ctx.delay(800),
      ctx.status(200, 'Mocked status'),
      ctx.json({
        "name": name,
        "email": email,
        "title": title,
        "content": content
      }),
    )
  })
)

worker.start();