const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URLBACKEND_URL || 'http://localhost:8000'

export const getBackendUrl = () => {
    return BACKEND_URL
}

export const getApiUrl = () => {
    return BACKEND_URL.concat('/api')
}
