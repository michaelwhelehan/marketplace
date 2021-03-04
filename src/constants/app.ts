export const apiUrl = 'http://futurefemales.taskdropper.com:8000/graphql/' // 'https://api-staging.taskdropper.com/graphql/'
export const wsUrl = 'ws://futurefemales.taskdropper.com:8000/graphql/' // 'wss://api-staging.taskdropper.com/graphql/'
export const sentryDsn = process.env.SENTRY_DSN
const sampleRate = parseFloat(process.env.SENTRY_APM)
export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate
export const demoMode = process.env.DEMO_MODE === 'true'
