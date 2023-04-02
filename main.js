// Extract image and buttons elements
let imgElement = document.querySelector('#big-cat')
let buttonPrev = document.querySelector('.left');
let buttonNext = document.querySelector('.right');

// Keep index in a var
let index =-1;
// Define empty array for list of url's
let urlList = [];

// Write function to get API
async function nextBigCat() {
    // Store API data in variable
    let response = await fetch('https://randombig.cat/roar.json');
    // Extract json
    let data = await response.json();
    // Extract URL
    let bigCatUrl = data.url;
    // Increase index by 1
    index+=1
    // Add url to image url list array
    urlList.push(bigCatUrl);
    // Test if image is extracted and if it changes when refreshing the page
    console.log(bigCatUrl);
    imgElement.setAttribute('src',bigCatUrl);
    // Test if array and count are increasing
    console.log(urlList);
    console.log(index);
   }

// Call function so an image is loaded when opening the page
nextBigCat()

// Write function to display previous Image
function previousCat() {
    if (index <= 0) {
        index=-1;
        urlList=[];
        imgElement.setAttribute('src','./no_more_cats.jpg');
        console.log('index: ',index, 'list: ', urlList); // Test
    }
    else {
        index-=1;
        urlList.pop();
        console.log('index: ',index, 'list: ', urlList); // Test
        imgElement.setAttribute('src',urlList[index]);
    }
}

// Add event listeners to buttons
buttonPrev.addEventListener('click', previousCat);
buttonNext.addEventListener('click',nextBigCat)