import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLanguage } from './hooks/useLanguage'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

export default function App() {
  const { lang, t, toggleLang } = useLanguage()

  return (
    <BrowserRouter>
      <Layout t={t} lang={lang} toggleLang={toggleLang}>
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
