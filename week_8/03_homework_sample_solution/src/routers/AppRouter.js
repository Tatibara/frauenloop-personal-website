import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import BlogPage from "../components/BlogPage";
import BlogDetailPage from "../components/BlogDetailPage";
import NotFoundPage from "../components/NotFoundPage";

import NavigationUrls from "./NavigationUrls";

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path={NavigationUrls.homePageUrl} component={HomePage} />
          <Route path={NavigationUrls.aboutPageUrl} component={AboutPage} />
          <Route path={NavigationUrls.blogPageUrl} component={BlogPage} />
          <Route path={`${NavigationUrls.blogDetailPageUrl}/:id`} component={BlogDetailPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
  );

export default AppRouter;
