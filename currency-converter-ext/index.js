window.onload = async () => {
  const convertFrom = document.querySelector(
    "select[name='currencies_from'] option"
  ).value;
  const convertTo = document.querySelector(
    "select[name='currencies_to'] option"
  ).value;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let result;
  try {
    [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => getSelection().toString(),
    });
  } catch (e) {
    return e;
  }
  document.getElementById("convert-from").value = result;
  document.getElementById("convert-to").value = await conversion(
    convertFrom,
    convertTo,
    result
  );
};

window.onchange = () => {
  const convertFrom = document.querySelector(
    "select[name='currencies_from'] option"
  ).value;
  const convertTo = document.querySelector(
    "select[name='currencies_to'] option"
  ).value;
  const amount = document.getElementById("convert-from").value;
  conversion(convertFrom, convertTo, amount)
    .then((result) => {
      document.getElementById("convert-to").value = result;
    })
    .catch(() => {
      document.getElementById("convert-from").value = "";
      document.getElementById("convert-to").value = "";
    });
};

async function conversion(from, to, amount) {
  const options = {
    method: "GET",
    headers: {
      apikey: "0AXMKtIcshuoTlO1F0vu6X2c4BaMbJLC",
    },
  };
  const resp = await fetch(
    `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
    options
  );
  const data = await resp.json();
  const convertedAmount = await data.result.toFixed(2);
  return convertedAmount;
}
