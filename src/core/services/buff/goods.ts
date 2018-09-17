import Axios from "axios";

export const getGoodsList = async (gameName: string= "csgo", pageNum: number= 1) => {
    const res = await Axios.get(`https://buff.163.com/api/market/goods?game=${gameName}&page_num=${pageNum}`);
    return res.data;
};
