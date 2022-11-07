import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectAuth } from "redux/selectors";
import Phonebook from "pages/PhonebookPage/Phonebook";

export const PrivateRoute = () => {
    const isLoggedIn = useSelector(selectAuth).isLoggedIn;

  return !isLoggedIn ? <Navigate to="/login"/> : <Outlet/>
}

export const PublicRoute = ({restricted}) => {
    const isLoggedIn = useSelector(selectAuth).isLoggedIn;
    // const shouldNavigate = isLoggedIn && restricted

  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet/>
}