const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");
const detail = document.getElementById("detail");
const table = document.getElementById("table")

const data1 = [];

function Detailsfilm() {
    fetch(`https://parkcinema-opal.vercel.app/landing/${id}`)
        .then(res => res.json())
        .then(details => {
            data1.length = 0;
            data1.push(details); 
            showfilm();
        })
}
  Detailsfilm();

function showfilm() {
  detail.innerHTML = "";
    data1.map(item => {
        detail.innerHTML += `
 <div id="detail" class="bg-[#373737] text-white min-h-screen p-6 flex flex-col gap-6">
  <div class="flex flex-col lg:flex-row gap-6">
    <div class="flex flex-col lg:flex-row gap-6 lg:w-2/3">
      <div class="lg:w-[40%] flex-shrink-0 flex flex-col gap-4">
        <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" alt="${item.name}" class="rounded-2xl shadow-lg w-full" />
      </div>
      <div class="lg:w-[60%] flex flex-col gap-2">
        <h1 class="text-3xl font-bold">${item.name}</h1>
        <p class="text-sm text-gray-400">Trillerlər</p>
        <p><span class="font-semibold">Dil:</span> ${item.languages}</p>
        <p><span class="font-semibold">Altyazı:</span> ${item.subtitles}</p>
        <p><span class="font-semibold">Müddət:</span> ${item.duration}</p>
        <p><span class="font-semibold">İl:</span> ${item.year}</p>
        <p><span class="font-semibold">Ölkə:</span> ${item.country}</p>
        <p><span class="font-semibold">Rejissor:</span> ${item.director}</p>
        <p><span class="font-semibold">Aktyorlar:</span> ${item.actors}</p>
        <p><span class="font-semibold">Yaş Həddi:</span> 
          ${item.ageLimit === 'SIXTEEN' ? '16+' : item.ageLimit === 'EIGHTEEN' ? '18+' : '12+'}
        </p>
        <p><span class="font-semibold">Nümayiş Tarixi:</span> ${item.firstScreeningDate?.split('T')[0]}</p>
      </div>
    </div>
    <div class="lg:w-1/3">
      <div class="aspect-video w-full">
        <iframe 
          class="w-full h-full rounded-xl" 
          src="${item.youtubeUrl.replace('watch?v=', 'embed/')}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
  <div class="text-gray-300 text-justify">
    ${item.description}
  </div>
</div>



        `
    })}

    