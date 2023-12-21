import { Input } from "@/data-models/input";
import axios from "axios";

export class RequestSender{

    private url : string

    headers = {
        'Content-Type': 'application/json',
      }

    constructor(){
        this.url = "http://host.docker.internal:5000/predict";
    }
    
    async sendRequest(method: string,  data: Input[]){
        return await axios.post(this.url, 
            {
            model: method,
            series: data
        }, {
            headers: this.headers
        })
    }
}