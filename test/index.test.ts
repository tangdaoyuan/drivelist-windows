import { expect, it } from 'vitest'
import { list } from '@'

it('runs', async() => {
  const ans = await list()
  expect(ans.length).toBeDefined()
})
