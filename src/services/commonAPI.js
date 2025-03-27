import axios from "axios"


 const commonAPI = async (httpMethod, url, reqbody) => {
    const config = {
        method: httpMethod,
        url,
        data: reqbody,
    }
        return await axios(config).then(res => {
            return res
        }).catch(err => {
            return err
        })

}

export default commonAPI
