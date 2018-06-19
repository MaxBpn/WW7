if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.homePage = {
    data: function() {
        return {   
        };
    },
    mounted: function(){
        if (localStorage.getItem('jwtToken') == undefined || localStorage.getItem('jwtToken') == null) {
            document.getElementById("favoris").style.visibility="hidden";
        }
    },
    computed: {
	},
    template:  `
        <div>
    		<div> 
                <b id="homeText"> Bienvenu sur WHICH WATCHER ! </b>
            </div>
            <div> 
                <img id="logo" src="../../img/logo.png">
            </div>
        </div>
    `
};