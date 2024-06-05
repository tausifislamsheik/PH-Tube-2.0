const handleCategory = async () =>{
  
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categoryContainer = document.getElementById('category-container');
    data.data.forEach(category =>{
      const div = document.createElement('div');
      div.innerHTML = `
      
      <button onclick="handleCategoryData('${category.category_id}')" class="btn btn-outline hover:bg-red-600 tab focus:bg-red-600 focus:text-white">${category.category}</button>
      
    </div>
      
      `;

      categoryContainer.appendChild(div);
    })
    
    

}

const handleCategoryData = async (categoryId) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data = await res.json();
  const cardDetails = data.data;
   const cardContainer = document.getElementById('card-container');
   const emptyContainer = document.getElementById('empty-data-container');
   cardContainer.innerHTML = "";
   emptyContainer.innerHTML = "";
   if(cardDetails.length > 0){
    cardDetails?.forEach(card =>{
      console.log(card)
      const div = document.createElement('div');
      div.innerHTML = `
       <figure><img class="h-[200px] rounded-lg" src="${card?.thumbnail}" alt="Shoes" /></figure>
      <div class="flex m-4 gap-2">
         <div>
          <img class="rounded-full w-12 h-12" src="${card?.authors[0]?.profile_picture}" alt="Shoes" />
         </div>
         <div>
           <p class="font-bold">${card?.title}</p>
           <h1>${card?.authors[0]?.profile_name} <span>${card.authors[0].verified ? '<i class="fa-solid fa-circle-check text-blue-500 ml-2"></i>' : ""}</span></h1>
           <p>${card?.others.views}</p>
         </div>
  
      </div> 
      `
      cardContainer.appendChild(div);
     })
   }else{
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="text-center my-28 space-y-5">
      <img src="images/Icon.png" alt="" class="mx-auto">
      <h3 class="text-2xl font-bold">Oops!! Sorry, There is no <br> content here</h3>
      </div>
      `
      emptyContainer.appendChild(div);
   }
   
}



handleCategory();
handleCategoryData("1000");





