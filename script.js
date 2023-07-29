
  
   
   function createGrid(gridSize){
      const grid = document.querySelector('#myGrid');
      
      removeGrid();
      const pixelSize = 500/gridSize; // 500px is the size I established for the grid

      for(let i=0;i<gridSize;i++){
         for(let j=0;j<gridSize;j++){
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel');
            pixelDiv.style.width = pixelSize+"px"; 
            pixelDiv.style.height = pixelSize+"px";
            pixelDiv.style.opacity = 0.1;
            grid.appendChild(pixelDiv);
         }
      }
   }

   function removeGrid(){
      const pixel = document.querySelectorAll('.pixel');
      pixel.forEach(pixel=> pixel.remove());
   }

   function paint(){
      /* Painting on the grid */
      const pixel = document.querySelectorAll('.pixel');
      pixel.forEach(pixel=>pixel.addEventListener('mouseover', function(e) {
         pixel.style.backgroundColor = color;
         pixel.style.opacity = parseFloat(this.style.opacity) + 0.1;
      }));
   }

   createGrid(16); // The original size they ask is 16
   paint();
   
    /* For selecting the color */
    let color = "#000000";
   const colorControl = document.querySelector('#color');
   colorControl.addEventListener('change', function(e) {
      color = this.value; // We establish our local variable as the value selected
   });

   /* For selecting the grid size */
   const gridControl = document.querySelector('#gridSize');
   const selectedGrid = document.querySelector('#selectedRange');
   gridControl.addEventListener('change', function(e) {
      selectedGrid.textContent = this.value + " x " + this.value;
      createGrid(this.value);
      paint();
   });

   

   

