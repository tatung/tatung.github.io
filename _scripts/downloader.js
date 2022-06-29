const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

module.exports = function (url, dest){
    const file = fs.createWriteStream(dest);
    const request = http.get(url, function(response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Download Completed");
        });
    });
}

// url = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6d090558-1d6e-4a83-ad09-656fd95f32b7/F1DB8D6E-A5CB-4EAC-B310-FA8DBA2B8222.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T152904Z&X-Amz-Expires=3600&X-Amz-Signature=23b9298035586ea855ab4f1583a4488498d8a18ef83fa9bc0ffeb4b31ae2471e&X-Amz-SignedHeaders=host&x-id=GetObject"
// dest = "asset/img/uploads/2022-06-29-no-wifi-in-raspberry-pi-2-model-b.png"
// download(url, dest)

// const file = fs.createWriteStream("file.jpg");
// const request = http.get("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6d090558-1d6e-4a83-ad09-656fd95f32b7/F1DB8D6E-A5CB-4EAC-B310-FA8DBA2B8222.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220629T152904Z&X-Amz-Expires=3600&X-Amz-Signature=23b9298035586ea855ab4f1583a4488498d8a18ef83fa9bc0ffeb4b31ae2471e&X-Amz-SignedHeaders=host&x-id=GetObject", function(response) {
//    response.pipe(file);

//    // after download completed close filestream
//    file.on("finish", () => {
//        file.close();
//        console.log("Download Completed");
//    });
// });