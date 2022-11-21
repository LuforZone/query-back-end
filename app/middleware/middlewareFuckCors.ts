const fuckCors = async (ctx, next) => {
  await next();
  // allow header get,postm,put,delete,patch,head,options
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Origin', '*');

  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
};

const middlewareFuckCors = (options: any) => {
  console.log(options);
  return fuckCors;
};

export default middlewareFuckCors;
