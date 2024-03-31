import QRCode from "qrcode.react";
import { useState } from "react";

const QRcodeComponent = () => {
  // set the code
  const [code, setCode] = useState("");
  const [codeValue, setCodeValue] = useState("");

  const generateQRCode = () => {
    setCodeValue(code);
  };

  return (
    <>
      <div className=" flex items-center justify-center min-h-screen flex-col">
        <h1 className="text-2xl text-center p-4 text-dark-blue font-bold">
          {" "}
          QR Code Generator
        </h1>
        <div className="bg-light-white rounded-xl p-4 w-[300px] ">
          <div className="bg-blue-500 p-14 rounded-xl">
            <QRCode
              value={codeValue || ""}
              size={150}
              fgColor="#ffffff"
              bgColor="#3b82f6"
            />
          </div>
          <div className="flex px-4 pt-4 justify-center flex-col items-center">
            <div className="text-center">
              <input
                className="text-dark-blue text-xl text-center outline-none border-2 border-dark-blue w-full rounded-xl p-2"
                placeholder="Enter the text here"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></input>
            </div>

            <p className="text-grayish-blue text-sm pt-2 text-center">
              Generate QR Codes by clicking the below button 🎇
            </p>

            <div className="pt-2">
              <button
                className="bg-blue-500 p-3 rounded-xl hover:bg-blue-400"
                onClick={generateQRCode}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRcodeComponent;
