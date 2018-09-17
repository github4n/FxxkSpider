import { createHttpServer } from "./http";
import config from "./http/config";

(async () => {
    try {
        const app = await createHttpServer();
        const server = app.listen(config.PORT, () => {
            console.log(`Server is listening on ${config.PORT}`);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();
