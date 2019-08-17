// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component




function Header() {
    let header = document.createElement('header');
  
    header.classList.add('header');
  
    let span = document.createElement('span')
    let span2 = document.createElement('span')
  
    span.textContent = 'SMARCH 28, 2019'
    span2.textContent = '98'
  
    span.classList.add('date')
    span2.classList.add('temp')
  
    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times'
  
  return Header();
  console.log(header);
  
  }
  
  const header = header();
  
  let headerContainer = document.querySelector('.header-container')
  
  heaaderContainer.appendChild(header)
  



