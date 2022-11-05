import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Phonebook = lazy(() => import('./pages/PhonebookPage/Phonebook'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
          <Route path="/contacts" element={<Phonebook />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
};