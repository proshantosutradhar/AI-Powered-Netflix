import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { appStore } from './store/appStore.jsx'
import Routing from './component/utils/routing.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <App />
    
  </Provider>
    
  
)
