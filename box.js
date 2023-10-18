AFRAME.registerComponent("move-box",{
    schema:{
        moveY:{ type:"number", default:1},
        rotY:{type:"number", default:45}
    },
    tick: function(){
        
        this.data.rotY = this.data.rotY + 1;
        var rot = this.el.getAttribute("rotation");
        rot.y = -this.data.rotY;
        this.el.setAttribute("rotation", {x: rot.x, y:rot.y, z:rot.z})
    }
})
