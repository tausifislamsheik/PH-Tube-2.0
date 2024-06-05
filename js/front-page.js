const handleCategory = async () =>{
  
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categoryContainer = document.getElementById('category-container');
    data.data.forEach(category =>{
      const div = document.createElement('div');
      div.innerHTML = `

      <button class="btn btn-outline hover:bg-red-600">${category.category}</button>
      `;

      categoryContainer.appendChild(div);
    })
    
    console.log(data.data)

}

handleCategory();

