
const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

//create block 



//draw my block
function addBlock() {
    const block = document.createElement('div');
    block.classList.add('block')
    block.style.left = '100px'
    block.style.right = '50px'

    grid.appendChild(block)
}

addBlock();