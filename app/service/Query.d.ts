import { Service } from 'egg';
export default class QueryService extends Service {
    find1(phone: any): Promise<{
        user: any;
    }>;
    find2(phone: any): Promise<any[]>;
}
