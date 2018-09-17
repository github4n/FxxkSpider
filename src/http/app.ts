import * as Koa from "koa";
import "reflect-metadata";
import { useKoaServer } from "routing-controllers";

const createHttpServer = async () => {
    const koa = new Koa();

    useKoaServer(koa, {
        routePrefix: "/api",
        controllers: [
        ],
        classTransformer: false,
    });

    return koa;
};

export default createHttpServer;
