// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMiddlewareFuckCors from '../../../app/middleware/middlewareFuckCors';

declare module 'egg' {
  interface IMiddleware {
    middlewareFuckCors: typeof ExportMiddlewareFuckCors;
  }
}
