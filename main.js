var updatedImage = [
    'https://i.postimg.cc/MKdhy06Z/family.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png',
];

var updatedName = [
    'My Family',
    'bob',
    'patrick',
    'squidward',
]

var currentIndex = 0;

document.getElementById("family_member_image").src = updatedImage[currentIndex];
document.getElementById("family_member_name").innerHTML = updatedName[currentIndex];

function update() {
    currentIndex = currentIndex + 1;
    if (currentIndex >= updatedImage.length) currentIndex = 0;
    // console.log(currentIndex);
    document.getElementById("family_member_image").src = updatedImage[currentIndex];
    document.getElementById("family_member_name").innerHTML = updatedName[currentIndex];
}

