import { createRoot } from 'react-dom/client'
import App from './App'

import '../src/styles/main.scss'

// React 18.0+, use createRoot
const root = createRoot(document.getElementById('root')!)
root.render(<App />)
