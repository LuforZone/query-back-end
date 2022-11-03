import { Service } from 'egg';
export default class QueryService extends Service {



    
    public async find1(phone ) {
        const user = await (this.app as any).mysql.get('users', { phone });
        return { user };
    }
    public async find2(phone){
        const active = await(this.app as any).mysql.select('tickets',{phone});
        let ticketList = new Array();
         for(let i in active){
            if(Boolean( active[i].is_check_in)==false){

                ticketList.push(active[i].ticket_id);

            }
        } 
        return(ticketList);
        
    }
}

