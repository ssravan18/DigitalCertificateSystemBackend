
// * Used to download the certificates from IPFS

const {getData} = require('../../services/IpfsManager');

const downloadCertificateHandler = async (req, res) => {
    try {
        const {cid} = req.body;
        const pdfBuffer = await getData(cid);
        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer)
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message)
    }
}

module.exports = {downloadCertificateHandler}