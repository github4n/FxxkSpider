import { getGoodsList } from "./core/services";

getGoodsList()
    .then(data => console.log(data.data.items));
