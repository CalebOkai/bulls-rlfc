import { ReactElement } from "react";
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import 'react-responsive-modal/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from "./styles/GlobalStyles";
import { AuthRoute, NonAuthRoute, ScrollToTop } from "./components";
import {
  Home,
  Page404,
} from "./pages";


export const paths = {
  HOME: "/",
}
export interface RouteType {
  path: string;
  element: ReactElement;
  exact?: boolean;
  redirect?: string;
}

const nonAuthRoutes: RouteType[] = [

];


interface AuthRouteType extends RouteType {
  pageTitle?: string;
}
const authRoutes: AuthRouteType[] = [
]

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <ScrollToTop />
          <GlobalStyles />
          <Routes>
            <Route path={paths.HOME} element={<Home />} />
            {/* Authenticated Routes */}
            <Route element={<AuthRoute />}>
              {authRoutes.map((route: any, index) => {
                const exact = route.exact === undefined || route.exact;
                if (!route.redirect)
                  return <Route key={index} {...route} exact={exact} />;
                else
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={<Navigate to={route.redirect} replace />}
                    />
                  )
              })}
            </Route>
            {/* Non-authenticated Routes */}
            <Route element={<NonAuthRoute />}>
              {nonAuthRoutes.map((route: any, index) => {
                const exact = route.exact === undefined || route.exact;
                if (!route.redirect)
                  return <Route key={index} {...route} exact={exact} />;
                else
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={<Navigate to={route.redirect} replace />}
                    />
                  )
              })}
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;