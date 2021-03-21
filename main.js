
//Slider con Vue.Js
var app = new Vue ({
    el: '#root',
    data: {
        counterPhoto: 0,
        photos: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg'
        ]
    },

    //richiama ogni 3 secondi(3000) le img, un carosello continuo//
    // created: function() {
    //     setInterval(() => { 
    //     this.nextPhoto();
    //     }, 3000);
    // },

    methods: {
        prevPhoto: function() {
            this.counterPhoto --;
            //console.log(this.photos.length);
            if (this.counterPhoto < 0) this.counterPhoto = (this.photos.length -1);
        },
        nextPhoto: function() {
            this.counterPhoto ++;

            if (this.counterPhoto > (this.photos.lenght - 1)) this.counterPhoto = 0;
        },
    }
});

