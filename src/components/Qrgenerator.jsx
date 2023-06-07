import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import QRCode from "qrcode.react";

const QrGenerator = () => {
  const [data, setData] = useState("");

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  const generateQRCode = (data) => {
    const qrCodeDataUrl = document
      .querySelector("canvas")
      .toDataURL("image/png");
    const qrCodeImage = new Image();
    qrCodeImage.src = qrCodeDataUrl;
    const qrCodeDownloadLink = document.createElement("a");
    qrCodeDownloadLink.href = qrCodeDataUrl;
    qrCodeDownloadLink.download = "qrcode.png";
    qrCodeDownloadLink.click();
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <Card style={{ width: "fit-content", padding: "15px" }}>

        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          value={data}
          onChange={handleInputChange}
        />
        <br />

        <QRCode value={data} style={{ margin: "auto" }} />
        <br />
        {data && (
          <Button onClick={() => generateQRCode(data)}>Download QR Code</Button>
        )}
      </Card>
    </div>
  );
};

export default QrGenerator;
