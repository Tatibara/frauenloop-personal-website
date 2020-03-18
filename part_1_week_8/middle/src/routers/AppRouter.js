import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import BlogPage from "../components/BlogPage";

import NavigationUrls from "./NavigationUrls";

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path={NavigationUrls.homePageUrl} component={HomePage} />
          <Route path={NavigationUrls.aboutPageUrl} component={AboutPage} />
          <Route path={NavigationUrls.blogPageUrl} component={BlogPage} />
        </Switch>
    </BrowserRouter>
  );

export default AppRouter;
