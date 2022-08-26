import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import GlassesContextProvider from "./context/context";
import "./App.css";
import FooterBox from "./components/footer/FooterBox";
import MainHeader from "./components/HeaderBox";
import ModalCart from "./components/modalCart/Modal";

interface RouteType {
  path: string;
  exact?: boolean;
  component: any;
}

const App: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <GlassesContextProvider>
          <div>
            <div style={{ width: "100vw", height: "100vh" }}>
              <MainHeader showCart={cartHandler} />
              {showCart && <ModalCart showCart={cartHandler} />}
              <Switch>
                {ROUTES.map((route: RouteType) => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              </Switch>
              <FooterBox />
            </div>
          </div>
        </GlassesContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
