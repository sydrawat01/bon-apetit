import { createRoot } from 'react-dom/client'
import App from './App'

// React 18.0+, use createRoot
const root = createRoot(document.getElementById('root')!)
root.render(<App />)
