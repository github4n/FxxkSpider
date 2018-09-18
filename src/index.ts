import { createHttpServer } from "./http";
import config from "./http/config";

(async () => {
    try {
        const app = await createHttpServer();
        app.listen(config.PORT, async () => {
            console.log(`Server is listening on ${config.PORT}`);
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();
