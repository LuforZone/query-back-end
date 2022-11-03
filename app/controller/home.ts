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
       let infoOBJ : string ="name:"+userInfo.user.name+"  sex:"+userInfo.user.sex+"  age:"+userInfo.user.name;
       const userActive = await this.service.query.find2(Number(phone));
       let uid = JSON.stringify(userActive);
       ctx.body = infoOBJ+"\n"+uid;
     } catch (error) {
       console.error(error);
       ctx.body = "incorrect phone";
     }
    

    
    // ctx.body=userInfo;
    
  }
  public async hello() {
    const { ctx } = this;
    ctx.body = "hello world";

  }
  public async post() {
    const { ctx } = this;
     ctx.body = ctx.request.body.phoneNumber;
}

}
