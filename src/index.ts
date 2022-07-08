import { platform } from 'os'
import bindings from 'bindings'
import type { Drive } from './types'

let drivelistBindings: ReturnType<typeof bindings>

function _getBindings() {
  if (!drivelistBindings)
    drivelistBindings = bindings('drivelist-windows')

  return drivelistBindings
}

function bindingsList(): Promise<Drive[]> {
  return new Promise((resolve, reject) => {
    _getBindings().list((error: Error, drives: Drive[]) => {
      if (error)
        reject(error)

      else
        resolve(drives)
    })
  })
}
export async function list(debug = false): Promise<Drive[]> {
  const plat = platform()
  if (plat === 'win32' || debug) {
    const list = await bindingsList()
    return list
  }

  throw new Error(`Your OS is not supported by this module: ${plat}`)
}
