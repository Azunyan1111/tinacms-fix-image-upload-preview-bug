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

interface MediaListErrorConfig {
  title: string
  message: string
  docsLink: string
}

class MediaListError extends Error {
  public ERR_TYPE = 'MediaListError'
  public title: string
  public docsLink: string

  constructor(config: MediaListErrorConfig) {
    super(config.message)
    this.title = config.title
    this.docsLink = config.docsLink
  }
}

export const E_DEFAULT = new MediaListError({
  title: 'An Error Occurred',
  message: 'Something went wrong fetching your media from S3.',
  docsLink: 'https://tina.io/packages/next-tinacms-s3',
})

export const E_UNAUTHORIZED = new MediaListError({
  title: 'Unauthorized',
  message: "You don't have access to this resource.",
  docsLink: 'https://tina.io/packages/next-tinacms-s3',
})

export const E_CONFIG = new MediaListError({
  title: 'Missing Credentials',
  message:
    'Unable to connect to S3 because one or more environment variables are missing.',
  docsLink: 'https://tina.io/docs/media-s3/',
})

export const E_KEY_FAIL = new MediaListError({
  title: 'Bad Credentials',
  message:
    'Unable to connect to S3 because one or more environment variables are misconfigured.',
  docsLink: 'https://tina.io/docs/media-s3/',
})

export const E_BAD_ROUTE = new MediaListError({
  title: 'Bad Route',
  message: 'The S3 API route is missing or misconfigured.',
  docsLink: 'https://tina.io/packages/next-tinacms-s3/#set-up-api-routes',
})

export const interpretErrorMessage = (message: string) => {
  switch (message) {
    case 'Must supply cloud_name':
    case 'Must supply api_key':
    case 'Must supply api_secret':
      return E_CONFIG
    case 'unknown api_key':
      return E_KEY_FAIL
    default:
      return E_DEFAULT
  }
}
