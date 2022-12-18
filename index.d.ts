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

    constructor({ host, port, password }:torParams)
    connect():Promise<void>;
    sendCommand(command:string):Promise<torResponse>;
    quit():Promise<void>;
    setConf(request:string):Promise<torResponse>;
    resetConf(request:string):Promise<torResponse>;
    getConf(request:string):Promise<torResponse>;
    getEvents(request:string):Promise<torResponse>;
    saveConf(request:string):Promise<torResponse>;
    addOnion(port:number,host?:string,privateKey?:string):Promise<hiddenService>;
    delOnion(serviceId:string):Promise<void>;

    signal(signal:string):Promise<void>;
    signalReload():Promise<void>;
    signalHup():Promise<void>;
    signalShutdown():Promise<void>;
    signalDump():Promise<void>;
    signalUsr1():Promise<void>;
    signalDebug():Promise<void>;
    signalUsr2():Promise<void>;
    signalHalt():Promise<void>;
    signalTerm():Promise<void>;
    signalInt():Promise<void>;
    signalNewnym():Promise<void>;
    signalCleardnscache():Promise<void>;
}