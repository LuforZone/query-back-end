import { Controller } from 'egg';
export default class HomeController extends Controller {
    index(): Promise<void>;
    request(): Promise<void>;
    hello(): Promise<void>;
    post(): Promise<void>;
}
