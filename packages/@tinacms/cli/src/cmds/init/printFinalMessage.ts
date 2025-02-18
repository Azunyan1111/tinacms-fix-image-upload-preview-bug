/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import chalk from 'chalk'
import { logger } from '../../logger'

export async function successMessage(ctx: any, next: () => void, options) {
  logger.info(`Tina setup ${chalk.underline.green('done')} ✅\n`)

  logger.info('Next Steps: \n')

  logger.info(`${chalk.bold('Run your site with Tina')}`)
  logger.info(`  yarn dev \n`)

  logger.info(`${chalk.bold('Start Editing')}`)
  logger.info(`  Go to 'http://localhost:3000/admin' \n`)

  logger.info(`${chalk.bold('Read the docs')}`)
  logger.info(
    `  Check out 'https://tina.io/docs/introduction/tina-init/#adding-tina' for help getting started with Tina \n`
  )

  logger.info(`Enjoy Tina! 🦙`)

  next()
}
