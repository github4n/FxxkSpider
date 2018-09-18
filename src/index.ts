import { createHttpServer } from "./http";
import config from "./http/config";
import { getGoodsListFromPage } from "./core/apis";

(async () => {
    try {
        const app = await createHttpServer();
        app.listen(config.PORT, async () => {
            console.log(`Server is listening on ${config.PORT}`);
            console.log(await getGoodsListFromPage("csgo", 1, 10, 1000));
        });
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();
