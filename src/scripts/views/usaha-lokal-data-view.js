import { getDatabase, ref, get } from 'firebase/database';
import { database } from './firebase';

const umkmDataView = async () => {
  const dbRef = ref(database, 'umkm');
  const snapshot = await get(dbRef);

  if (snapshot.exists()) {
    const umkmDatas = snapshot.val();
    const umkmList = document.querySelector('.umkm-list');
    umkmList.innerHTML = '';

    umkmDatas.forEach((umkm) => {
      console.log(umkm);

      umkmList.innerHTML += `
      <div class="w-[396px] h-auto rounded-3xl flex flex-col bg-white pb-6">
        <div class="w-full h-[200px] overflow-hidden rounded-t-3xl">
          <img src="${umkm.image}" alt="Image" class="w-full h-full object-cover">
        </div>
        <div class="px-8 w-full flex flex-col items-start">
          <div class="flex justify-between items-center mt-8 w-full">
            <a href="detail.html"><h3 class="text-xl font-semibold">${umkm.name}</h3></a>
            <p class="font-medium"><i class="fa-solid fa-star text-[#F9BD22] pe-2"></i>${umkm.rating}</p>
          </div>
          <p class="text-sm font-medium text-gray-400 mt-3"><i class="fa-solid fa-location-dot pe-2"></i>${umkm.location}</p>
          <p class="w-full text-base mt-5 line-clamp">${umkm.description}</p>
          <a href="#" class="text-center text-white py-2 w-full rounded-xl bg-princetonOrange mt-6">Selengkapnya</a>
        </div>
      </div>
      `;
    });
  } else {
    console.log('No data available');
  }
};

export default umkmDataView;
