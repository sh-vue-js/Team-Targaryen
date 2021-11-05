new Vue ({
    el: '#vue-app',
    data: {
            SH1: false,
            SH2: false,
            SH3: true,
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