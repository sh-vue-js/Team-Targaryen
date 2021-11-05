new Vue ({
    el: '#desktop-view',
    data: {
            SH1: true,
            SH2: false,
            SH3: false,
            SH4: false

                       
    },

    methods: {
        
     
        

    },

    computed: {

     backChange: function(){
         return{
             bgcolor1: this.SH1,
             bgcolor2: this.SH2,
             bgcolor3: this.SH3,
             bgcolor4: this.SH4
         }
     }


    }

});







new Vue ({
    el: '#mobile-view',
    data: {
           

                       
    },

    methods: {
        
     
        

    },

    computed: {

    


    }

});