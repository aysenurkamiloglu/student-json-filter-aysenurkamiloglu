import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Ayşenur Kamiloğlu</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

let result = await fetch("data.json") //verileri data.json dosyasından çekip data değişkenine aktardık
  .then(response => response.json()) // dosyanın içeriği yazdırıldı

var groupByColour = function () {
  return result.reduce(function (acc, current) { //reduce metodu kullandım, acc= toplam, current = şimdiki değer olarak düşünülebilir
    (acc[current.group] = acc[current.group] || []).push(current); //json dosyasındaki nesneler üzerinde dolanarak toplama işlemi yapılıyor
    return acc; //renk gruplarına göre sonuç döndürülür
  }, {});
};

console.log(groupByColour());

//filter metodu ile asistanları json dosyasından filtreleyip konsola bastım
async function findAssistants() {
  const assistants = result.filter(data => data.assistant === true)
  console.log(assistants)
}
findAssistants(); 





