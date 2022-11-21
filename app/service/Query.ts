import { Service } from 'egg';
export default class QueryService extends Service {


  public async find1(phone) {
    const user = await (this.app as any).mysql.get('users', { phone });
    return { user };
  }
  public async find2(phone) {
    const active = await (this.app as any).mysql.select('tickets', {
      where: { phone },
    });
    const ticketList: any = [];
    for (const i in active) {
      if (active[i].is_check_in === 1) {
        ticketList.push(active[i].ticket_id);
      }
    }
    console.log(ticketList);
    return (ticketList);
  }
}

