let data = [
    {
        photo: 'photos/apples-5543778_1920.jpg',
        title: 'From the autumn garden',
        description: 'In the fall we are all looking forward to picking apples'
    },
    {
        photo: 'photos/autumn-5511935_1920.jpg',
        title: 'Autumn alley',
        description: 'Typical view of the autumn alley'
    },
    {
        photo: 'photos/bo-leaf-5351180_1920.jpg',
        title: 'Autumn colors',
        description: 'Only autumn can create such colors'
    },
    {
        photo: 'photos/grapes-5603367_1920.jpg',
        title: 'Autumn grapes',
        description: 'Autumn grapes for the production of ice wine'
    },
    {
        photo: 'photos/landscape-5591270_1920.jpg',
        title: 'Waiting for winter',
        description: 'The autumn landscape is ready for the arrival of winter'
    },
    {
        photo: 'photos/park-3116883_1920.jpg',
        title: 'Autumn hoarfrost',
        description: 'Even in autumn, hoarfrost is already forming in the parks'
    },
    {
        photo: 'photos/pumpkins-5646939_1920.jpg',
        title: 'Pumpkins',
        description: 'preparation for helowin can begin'
    },
]

let currentPhoto=0;
let imagesData = [data[0],data[1],data[2],data[3],data[4],data[5],data[6]];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', data[photoNumber].photo);
    // ...
  }
  loadPhoto(currentPhoto);
  $('#previous').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;  
      }
      loadPhoto(currentPhoto);
    });

  $('#next').click(() => {
    if(currentPhoto < 6) {
        currentPhoto++;  
      }
      loadPhoto(currentPhoto);
    });

