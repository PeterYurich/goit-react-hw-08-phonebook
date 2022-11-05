import css from './App.module.scss'

import Header from "components/Header/Header";
import { UserRoutes } from 'UserRoutes';


const App = () =>
(
  <div className={css.container}>
      <Header></Header>
      <UserRoutes></UserRoutes>
  </div>
)

export default App