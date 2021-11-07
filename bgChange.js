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

    sideBarChange(bgColor){
        this.$refs.sideBar.style.backgroundColor = bgColor
    },

    btnChange(bgColor){
        this.$refs.btn.style.backgroundColor = bgColor
    },

    iconChange(bgColor){
        this.$refs.iconBg.style.fill = bgColor
    },

    

    changeToColor1(){
        this.backgroundChange(this.bgColor1)
        this.sideBarChange(this.bgColor4)
        this.btnChange(this.bgColor2)
        this.iconChange(this.bgColor2)
    },
    
    changeToColor2(){
        this.backgroundChange(this.bgColor2)
        this.sideBarChange(this.bgColor4)
        this.btnChange(this.bgColor1)
        this.iconChange(this.bgColor1)
    },

    changeToColor3(){
        this.backgroundChange(this.bgColor3)
        this.sideBarChange(this.bgColor4)
        this.btnChange(this.bgColor1)
        this.iconChange(this.bgColor1)
    },

    changeToColor4(){
        this.backgroundChange(this.bgColor4)
        this.sideBarChange(this.bgColor1)
        this.btnChange(this.bgColor2)
        this.iconChange(this.bgColor2)
    },


     
        

    },

    computed: {

    
   

    }

});

new Vue ({
    el: '#mobile-view',
    data: {
        bgColor1: '#0392BF',
        bgColor2: '#FBEC06',
        bgColor3: '#B3D4E0',
        bgColor4: '#ED48BA',

                       
    },

    methods: {

        backgroundChange(bgColor){
            this.$refs.mobileBg.style.backgroundColor = bgColor
            this.$refs.modalUp.style.backgroundColor = bgColor
            
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
        },
    },

    computed: {

    


    }

});