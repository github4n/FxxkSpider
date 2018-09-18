import Axios from "axios";
import { IBuffGoodsListResponse } from "../../@types/buffGoods";

export const getGoodsList = async (gameName: string, pageNum: number) => {
    const res = await Axios.get<IBuffGoodsListResponse>(`https://buff.163.com/api/market/goods?game=${gameName}&page_num=${pageNum}`);
    return res.data;
};
