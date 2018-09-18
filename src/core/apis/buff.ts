import { getGoodsList, parseGoodsList } from "../services";
import { sleep } from "../helpers";

export const getGoodsListFromPage = async (gameName= "csgo", startPage: number = 1, endPage: number, ms: number) => {
    let res = [];

    for (let nowPage = startPage; nowPage <= endPage; nowPage++) {
        const goodsList = await getGoodsList(gameName, nowPage);
        res = [...res, ...goodsList.data.items];
        nowPage = nowPage + 1;
        await sleep(ms);
    }

    res = parseGoodsList(res);

    return res;
};
