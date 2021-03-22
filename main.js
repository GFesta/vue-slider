
//Slider con Vue.Js
var app = new Vue ({
    el: '#root',
    data: {
        counter: 0,
        circle: ['fas fa-circle', 'fas fa-circle'],
        photos: [
            'img/whale.jpg',
            'img/monkey.jpg',
            'img/turtles.jpg',
            'img/butterfly.jpg'
        ]
    },

    // //richiama ogni 3 secondi(3000) le img, un carosello continuo//
    // created: function() {
    //     setInterval(() => { 
    //     this.nextPhoto();
    //     }, 3000);
    // },

    methods: {
        changeImg: function(index) {
            this.counter = index;
            clearInterval(this.interval);
            this.startInterval();
        },

        prevImg: function() {
            this.counter--;
            clearInterval(this.interval);
            this.startInterval();

            if (this.counter < 0) {
                (this.counter = 3);
            };
        },

        nextImg: function() {
            this.counter++;
            clearInterval(this.interval);
            this.startInterval();
            if (this.counter > 3) {
                (this.counter = 0);
            };
        },

        startInterval: function() {
            this.interval = setInterval(() => {
                this.nextImg();
            }, 2000);
        }
    },
    created: function() {
        this.startInterval();
        document.addEventListener('keyup', (e) => {
            // console.log(e);
            if (e.keyCode == 39) {
                this.nextImg();
            } else if (e.keyCode == 37) {
                this.prevImg();
            }
        })
    },
});

