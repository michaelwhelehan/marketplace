export const apiUrl = process.env.REACT_APP_API_URL
export const wsUrl = process.env.REACT_APP_WS_URL
export const sentryDsn = process.env.REACT_APP_SENTRY_DSN
const sampleRate = parseFloat(process.env.REACT_APP_SENTRY_APM)
export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate
export const demoMode = process.env.REACT_APP_DEMO_MODE === 'true'
