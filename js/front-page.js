const handleCategory = async () =>{
  
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categoryContainer = document.getElementById('category-container');
    data.data.forEach(category =>{
      const div = document.createElement('div');
      div.innerHTML = `

      <button onclick="handleCategoryData('${category.category_id}')" class="btn btn-outline hover:bg-red-600">${category.category}</button>
      `;

      categoryContainer.appendChild(div);
    })
    
    

}

const handleCategoryData = async (categoryId) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data = await res.json();
   const cardContainer = document.getElementById('card-container');
   data.data.forEach(card =>{
    console.log(card)
    const div = document.createElement('div');
    div.innerHTML = `
     <figure><img src="${card?.thumbnail}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        Shoes!
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
    </div> 
    `
    cardContainer.appendChild(div);
   })
}





handleCategory();

