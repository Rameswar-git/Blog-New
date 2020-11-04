// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';
import 'angular-toastr';

/**
 * Import Module Components
 */
// import { App } from './components/app/app.component';
import { Home } from './components/home/home.component';
import { View } from './components/view/view.component';
import { Profile } from './components/profile/profile.component';
import { Manage } from './components/manage/manage.component';
// import { myDirective } from './components/blogDirective/BlogPostDirective';
import { blogPostDirective } from './components/blogDirective/BlogPostDirective';
import { BlogEntries } from './components/entries/entries.component';
import MockdataService  from './services/MockDataService';

/**
 * Import Module Configuration
 */
import { configuration } from './core.configuration';
import { routing } from './core.routes';

export const moduleName =
  angular.module('application.core', [
      'ui.router',
      'toastr'
  ])
  .component(Home.selector, Home)
  .component(View.selector, View)
  .component(Profile.selector, Profile)
  .component(Manage.selector, Manage)
  .component(BlogEntries.selector, BlogEntries)
  .directive(blogPostDirective.Name, blogPostDirective.factory())
  .service('MockdataService', MockdataService)
  .config(configuration)
  .config(routing)
  .name;
