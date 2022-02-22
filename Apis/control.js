const { details } = require("./server")

module.exports = {
    getuserData: async (req, res) => {
        const getdata = await details(req.url)
        if (getdata[0] == undefined) {
            return res.status(200).json({
                success: 0,
                message: "data not found"
            })
        }
        return res.status(200).json({
            success: 1,
            data: getdata
        })
    }
}