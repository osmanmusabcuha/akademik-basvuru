const verifyTCKN = async (tcNo, firstName, lastName, birthYear) => {
  tcNo = Number(tcNo);
  const soapRequest = `
    <?xml version="1.0" encoding="utf-8"?>
    <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
      <soap12:Body>
        <TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
          <TCKimlikNo>${tcNo}</TCKimlikNo>
          <Ad>${firstName}</Ad>
          <Soyad>${lastName}</Soyad>
          <DogumYili>${birthYear}</DogumYili>
        </TCKimlikNoDogrula>
      </soap12:Body>
    </soap12:Envelope>
  `;

  try {
    const response = await fetch(
      "https://tckimlik.nvi.gov.tr/service/kpspublic.asmx",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/soap+xml; charset=utf-8", // SOAP 1.2 Content-Type
        },
        body: soapRequest.trim(),
      }
    );

    const responseText = await response.text();
    const result = responseText.match(
      /<TCKimlikNoDogrulaResult>(.*?)<\/TCKimlikNoDogrulaResult>/
    );

    return result && result[1] === "true";
  } catch (error) {
    console.error("T.C. Kimlik Numarası doğrulama hatası:", error);
    throw new Error("T.C. Kimlik Numarası doğrulama başarısız.");
  }
};

export default verifyTCKN;
