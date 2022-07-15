#! /usr/bin/env node

const { execSync } = require('child_process')
const os = require('os')

function where() {
  let where = 'where'
  try {
    execSync(where)
  }
  catch (error) {
    where = 'which'
  }
  return where
}

function pacakgerManager() {
  let packageManager = 'npm'
  try {
    execSync(`${where()} pnpm`)
    packageManager = 'pnpm'
  }
  catch (e) {
    try {
      console.info('Installing Pnpm...')
      execSync('npm install -g pnpm')
      packageManager = 'pnpm'
    }
    catch (error) {
      console.info('Pnpm installed failed.')
    }
  }
  return packageManager
}

if (os.platform() === 'win32') {
  const manager = pacakgerManager()
  execSync(`${manager} run preRebuild`, {
    stdio: 'inherit',
  })
}
