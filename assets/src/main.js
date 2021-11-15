if (import.meta.env.MODE !== 'development') {
  import('vite/modulepreload-polyfill')
}
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
