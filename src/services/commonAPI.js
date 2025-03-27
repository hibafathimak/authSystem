import axios from "axios"


export const commonAPI = async (httpMethod, url, reqbody, reqheader) => {
    const config = {
        method: httpMethod,
        url,
        data: reqbody,
    }
    try {
        return await axios(config).then(res => {
            return res
        }).catch(err => {
            return err
        })
    } catch (error) {
        console.log(error);

    }
}

