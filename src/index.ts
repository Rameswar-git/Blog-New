/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
/**
 * Import the global styles
 */

/**
 * Temporary Import angular
 * see: https://github.com/Microsoft/TypeScript/issues/10178
 */

import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { moduleName as coreModule} from './core/core.module';

/**
 * Bootstrap the application using the imported moduleName
 */
const bootstrapModuleName = angular.module('application.bootstrap', [
  coreModule
]).name;
