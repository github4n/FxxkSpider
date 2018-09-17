import { createHttpServer } from "./http";

(async () => {
    try {
        const app = await createHttpServer();
        console.log(process.env.NODE_ENV);
        const server = app.listen(9999, () => {
            console.log(`Server is listening on 9999`);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();
