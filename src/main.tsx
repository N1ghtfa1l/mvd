import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import './index.css'
import App from './app/App.tsx'
import { MainProvider } from './app/Provider/MainProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Theme>
        <MainProvider>
          <App />
        </MainProvider>
      </Theme>
  </StrictMode>,
)
