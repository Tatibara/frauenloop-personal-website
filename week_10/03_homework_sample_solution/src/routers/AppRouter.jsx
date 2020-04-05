import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import AboutPage from '../components/AboutPage';
import AddBlogPage from '../components/AddBlogPage';
import BlogDetailPage from '../components/BlogDetailPage';
import BlogPage from '../components/BlogPage';
import EditBlogPage from '../components/EditBlogPage';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import NavigationUrls from './NavigationUrls';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={NavigationUrls.homePageUrl} component={HomePage} />
      <Route path={NavigationUrls.aboutPageUrl} component={AboutPage} />
      <Route exact path={NavigationUrls.blogPageUrl} component={BlogPage} />
      <Route path={NavigationUrls.addBlogPageUrl} component={AddBlogPage} />
      <Route path={`${NavigationUrls.blogDetailPageUrl}/:id`} component={BlogDetailPage} />
      <Route path={`${NavigationUrls.editBlogPageUrl}/:id`} component={EditBlogPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
