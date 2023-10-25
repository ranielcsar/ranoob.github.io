import {
  HomePage,
  ProjectsPage,
  ExperienciesPage,
  CurriculumPage,
} from '@/pages'

import { Route, Routes, browserHistory } from 'react-router-dom'

export function AppRoutes() {
  const history = createMemoryHistory(location)
  
  return (
    <Routes history={browserHistory}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experiences" element={<ExperienciesPage />} />
      <Route path="/curriculum" element={<CurriculumPage />} />
    </Routes>
  )
}
