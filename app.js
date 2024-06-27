const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel orci posuere, efficitur eros vehicula, egestas lacus. Proin orci tellus, convallis quis convallis sed, porttitor ac nibh. Praesent pellentesque at diam nec auctor. Suspendisse potenti. Donec gravida, purus quis sagittis pharetra, arcu nisi varius risus, id lacinia neque mauris sit amet enim. Suspendisse ultricies aliquet mauris non auctor. Mauris dictum fringilla erat, ac tincidunt risus interdum nec. Morbi est ipsum, sagittis eu est ut, sagittis auctor magna. Sed sapien ante, tristique sed dolor eu, placerat porta purus.',
    'Cras venenatis pretium elit, ut gravida dolor scelerisque sed. Nunc quis iaculis augue. Sed hendrerit molestie pellentesque. Nulla accumsan, est sed mollis tristique, est metus hendrerit ligula, ut tempor nisi risus a elit. Curabitur sed neque odio. Nam volutpat gravida arcu laoreet dapibus. Maecenas erat enim, lobortis a pretium at, dignissim ut nisi.',
    'Mauris quis condimentum urna, et imperdiet orci. Ut fringilla pulvinar augue, in tristique lectus. Nulla auctor mi vitae tincidunt accumsan. Donec quis nulla vitae massa aliquet porta. Suspendisse et neque eget leo ultrices interdum. Pellentesque porta orci augue, efficitur ornare quam euismod vel. In fermentum sollicitudin felis, nec hendrerit leo blandit cursus. Phasellus molestie eget mauris at consequat. Mauris malesuada viverra nisi quis maximus. Cras rutrum lobortis dui, non accumsan diam convallis ac. Morbi sodales, lectus id egestas maximus, arcu purus tempor metus, at tempor lacus est nec elit. Maecenas gravida at ex iaculis semper.',
    'Suspendisse eu cursus risus. Quisque vitae scelerisque justo. Fusce gravida massa augue, vel lobortis nulla volutpat et. Sed nunc mi, porttitor in iaculis sit amet, semper at lectus. Nunc quis urna tellus. Sed a tortor nunc. Phasellus luctus, nibh vel ultricies eleifend, enim ex tristique orci, sed dictum augue leo ut felis.',
    'Vestibulum a felis quis nunc fermentum accumsan. Aliquam ullamcorper pretium ultrices. Ut vehicula eros eget bibendum molestie. Integer iaculis, est et varius interdum, felis quam ultrices mauris, et pharetra risus risus euismod turpis. Quisque mollis dignissim lacus, nec sollicitudin augue hendrerit ac. Aenean rutrum urna finibus diam interdum sollicitudin. Nam luctus ut est sed auctor. Pellentesque vitae mi blandit, vehicula nibh sit amet, dapibus sapien. Vestibulum quis urna cursus tellus luctus dapibus. Morbi sed consectetur massa, sed sollicitudin ipsum.',
    'Duis nec lorem tempor dolor elementum blandit. Aenean felis velit, ultrices non pharetra a, ultrices eu justo. Donec finibus, nibh eu sagittis euismod, libero lacus tempor lacus, quis euismod tellus magna a metus. Donec dapibus nisi eu neque auctor, a ultrices nisl malesuada. Pellentesque vestibulum turpis id magna dictum, eu placerat est volutpat. In quam turpis, rhoncus volutpat sollicitudin ut, venenatis et purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ultricies finibus nisl. Aliquam erat volutpat. Sed vel quam tortor. Aenean a est ac sem bibendum mollis. Proin facilisis pulvinar lacinia. Aliquam semper nibh faucibus ante lacinia pretium. Aenean efficitur nunc sit amet ligula finibus luctus.',
    'Vivamus orci eros, tincidunt in tincidunt eget, gravida vel purus. Nunc ullamcorper orci nec interdum dapibus. Pellentesque aliquet, lorem at porta auctor, urna est lobortis neque, ultricies cursus ex ipsum eget diam. Donec non mauris suscipit, eleifend arcu in, consequat orci. Duis malesuada tortor ullamcorper commodo commodo. Aenean orci nibh, luctus vel nisl vel, cursus auctor purus. Quisque in sem a arcu ultrices convallis. Sed accumsan, lectus nec ultrices eleifend, purus mi tincidunt ipsum, pretium molestie elit odio sed ante. Nullam non turpis elit. Nulla facilisi.',
    'Proin et neque id justo hendrerit elementum. Nullam ornare magna eros, ac sagittis tortor eleifend ac. Aliquam tristique nulla vitae consectetur condimentum. Cras placerat et nibh et consequat. Nullam accumsan lorem elit, vel eleifend nulla accumsan non. Mauris condimentum libero a ipsum consequat laoreet. Ut cursus, enim sit amet laoreet semper, libero diam mollis mauris, sit amet sagittis libero ante ut metus. Fusce tortor tellus, sagittis vel fringilla id, aliquam et dolor. Mauris eleifend nisl metus, quis fermentum augue gravida quis. Nunc malesuada enim vel purus ornare commodo. Integer commodo augue diam, a laoreet magna volutpat et. Integer accumsan, ligula in convallis semper, quam enim dignissim lacus, in porta mauris purus in sem. Phasellus velit eros, luctus nec porta ac, vulputate vitae sapien. Proin elementum, nulla vitae scelerisque efficitur, justo nulla fermentum nisl, id suscipit dolor odio at eros. Morbi a aliquam tellus. Donec at leo eros.',
    'In molestie tristique justo, ullamcorper dignissim metus laoreet vel. Cras eleifend ipsum nec suscipit varius. Aenean pulvinar leo laoreet vulputate dapibus. Nunc pharetra felis sed blandit luctus. Quisque fringilla justo velit, at facilisis nisl facilisis consectetur. Fusce ultrices erat non elit ornare congue. In sit amet fermentum neque.'
];

const inputText = document.getElementById('inputText')
const data = document.getElementById('data')

function shuffle(array){

    let currentIndex = array.lenght;
    let randomIndex

    if(currentIndex!=0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;

        [array[currentIndex],array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array;
}

function generate() {
    
    if (inputText.value ==0) {
        alert('The valor ingresado no puede ser zero')
    }else if(inputText.value>paragraphs.length){
        const randomIndex = Math.floor(Math.random()*paragraphs.length)
        data.innerHTML = `<p>${paragraphs[randomIndex]}</p>`
    }else{
        const shuffleParagraphs = paragraphs
        shuffle(paragraphs);
        const selectParagraphs = shuffleParagraphs.slice(0, inputText.value)
        const paragraphsHTML = selectParagraphs.map(paragraphs=>`<p>${paragraphs}</p>`).join("")
        data.innerHTML = paragraphsHTML
    }
}
