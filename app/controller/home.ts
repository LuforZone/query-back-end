import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = ctx.query;

  }
  public async request() {
    const ctx = this.ctx;


    try {
      const phone: string = (ctx.params.phoneNumber as string).trim();
      const userInfo = await this.service.query.find1(Number(phone));
      //const infoOBJ : string = 'name:' + userInfo.user.name + '  sex:' + userInfo.user.sex + '  age:' + userInfo.user.age;
      const userActive = await this.service.query.find2(Number(phone));
      //const uid = JSON.stringify(userActive);
      
      ctx.body = {
        "name":userInfo.user.name,
        "sex":userInfo.user.sex,
        "age":userInfo.user.age,
        "active":userActive
      }/* infoOBJ + '\n' + uid; */
    } catch (error) {
      console.error(error);
      ctx.body =  {"incorrect phone":"there is no data connect to this phone number"} //'incorrect phone';
    }


    // ctx.body=userInfo;

  }
  public async hello() {
    const { ctx } = this;
    ctx.body = 'hello world';

  }
  public async post() {
    const { ctx } = this;
    ctx.body = ctx.request.body.phoneNumber;
  }

}
