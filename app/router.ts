import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.hello);
  router.get('/getGirl', controller.home.index);
  router.get('/request/:phoneNumber', controller.home.request);
  router.post('/request', controller.home.post);
};
