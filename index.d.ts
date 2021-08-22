import net from "net";


interface torParams{
    host:string;
    port:number;
    password:string;
}

interface torResponse{
    type:number,
    message:string,
    data:string
}
interface hiddenService{
    port:number;
    host:string;
    PrivateKey:string;
    ServiceID:string;
}

export declare class Tor{
    private connection:net.Socket;
    private opts:torParams

    constructor({ host, port, password }:torParams = {})
    async connect():void;
    async sendCommand(command:string):torResponse;
    async quit ():void;
    async setConf (request:string):torResponse;
    async resetConf (request:string):torResponse;
    async getConf (request:string):torResponse;
    async getEvents (request:string):torResponse;
    async saveConf (request:string):torResponse;
    async addOnion (port:number,host?:string,privateKey?:string):hiddenService;
    async delOnion (serviceId):void;

    async signal (signal:string):void;
    async signalReload () :void;
    async signalHup ():void;
    async signalShutdown ():void;
    async signalDump ():void;
    async signalUsr1 ():void;
    async signalDebug ():void;
    async signalUsr2 ():void;
    async signalHalt ():void;
    async signalTerm ():void;
    async signalInt ():void;
    async signalNewnym ():void;
    async signalCleardnscache ():void;
}