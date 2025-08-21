var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey: "public_zaj6ziAf2WrA2n8avWoEKwqDxb0=",
    privateKey: "private_RIAYCvIS8dtgUaYnGbuXQ/nxxa4=",
    urlEndpoint: "https://ik.imagekit.io/gaxmekqtag"
});


async function uploadFile(file, fileName) {
    const result = await imagekit.upload({
        file,
        fileName
    })

    return result
}

module.exports = uploadFile