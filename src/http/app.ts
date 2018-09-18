import * as Koa from "koa";
import * as serve from "koa-static";
import ms = require("ms");
import "reflect-metadata";
import { useKoaServer } from "routing-controllers";
import Environment from "./config";

const createHttpServer = async () => {
    const koa = new Koa();

    koa.use(serve(__dirname + "/../page/dist", {
        maxAge: Environment.NAME === "production" ? ms("20d") : 0,
    }));

    useKoaServer(koa, {
        routePrefix: "/api",
        controllers: [
        ],
        classTransformer: false,
    });

    return koa;
};

export default createHttpServer;
