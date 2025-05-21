const container = document.getElementById('cryptoPrices');

const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=idr';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal mengambil data harga kripto');
    }
    return response.json();
  })
  .then(data => {
    container.innerHTML = `
      <div class="crypto"><strong>Bitcoin (BTC):</strong> Rp ${data.bitcoin.idr.toLocaleString()}</div>
      <div class="crypto"><strong>Ethereum (ETH):</strong> Rp ${data.ethereum.idr.toLocaleString()}</div>
      <div class="crypto"><strong>Dogecoin (DOGE):</strong> Rp ${data.dogecoin.idr.toLocaleString()}</div>
    `;
  })
  .catch(error => {
    container.innerHTML = `<p style="color:red;">${error.message}</p>`;
    console.error('Error:', error);
  });
