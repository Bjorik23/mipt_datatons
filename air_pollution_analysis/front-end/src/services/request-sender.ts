import { Input } from "@/data-models/input";
import axios from "axios";

export class RequestSender{

    private url : string

    headers = {
        'Content-Type': 'application/json',
      }

    constructor(){
        if(process.env.URL == undefined){
            console.warn(process.env)
            this.url ="http://127.0.0.1:5000/predict"
        }
        else{
            this.url = process.env.URL
        }
  
    }
    
    async sendRequest(method: string,  data: Input[]): Promise<number[]> {
        console.warn(data)
        let res = await axios.post(this.url, 
            {
            model: method,
            series: data
        }, {
            headers: this.headers
        })
        return res.data;
    }
}