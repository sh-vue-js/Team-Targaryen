new Vue ({
    el: '#desktop-view',
    data: {
            bgColor1: '#0392BF',
            bgColor2: '#ED48BA',
            bgColor3: '#FBEC06',
            bgColor4: '#B3D4E0',
            
            
                       
    },

    methods: {
        
    backgroundChange(bgColor){
        this.$refs.body.style.backgroundColor = bgColor
    },

    changeToColor1(){
        this.backgroundChange(this.bgColor1)
    },
    
    changeToColor2(){
        this.backgroundChange(this.bgColor2)
    },

    changeToColor3(){
        this.backgroundChange(this.bgColor3)
    },

    changeToColor4(){
        this.backgroundChange(this.bgColor4)
    }


     
        

    },

    computed: {

    
   

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