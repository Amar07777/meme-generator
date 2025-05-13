document.getElementById('memeForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  const res = await fetch('/generate', {
    method: 'POST',
    body: formData
  });

  const data = await res.json();
  document.getElementById('result').innerHTML = `<h3>Meme Generated:</h3><img src="${data.url}" width="400"/>`;
});
