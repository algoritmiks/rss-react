import { afterEach, beforeAll, afterAll } from 'vitest'
import { server } from './mocks/node'

afterEach(() => {
  server.resetHandlers()
})

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})
