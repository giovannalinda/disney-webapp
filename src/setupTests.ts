import { configure } from '@testing-library/react'

import '@testing-library/jest-dom'
import 'jest-styled-components'
import nock from 'nock'

configure({ asyncUtilTimeout: 5000 })

expect.extend({
  mockToBeDone(received) {
    const description = Object.keys(received.keyedInterceptors).join('')

    if (received.isDone()) {
      return {
        message: () => `expected ${description} not to have been done`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${description} to be done`,
        pass: false,
      }
    }
  },
})

beforeEach(() => {
  nock.cleanAll()
})

afterEach(() => {
  const pendingMocks = nock.pendingMocks()

  if (pendingMocks.length > 0) {
    const message =
      `Were found ${pendingMocks.length} pending mocks:\n\n` +
      pendingMocks.join('\n')

    throw new Error(message)
  }
})

process.env = Object.assign(process.env, {
  VITE_API_URL: 'http://localhost',
})

module.exports = 'test-file-stub'

export {}
