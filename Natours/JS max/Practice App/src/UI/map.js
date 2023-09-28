export class Map{
    constructor(coords){
       // this.cordinates = coords
        this.render(coords)


    }
    render(cordinates){
        if(!google){
            alert('Could not load maps library')
            return
        }

        new google.maps.Map(document.getElementById('map'),{
         center:this.cordinates,
        zoom: 16
    })

    new google.maps.Marker({
        position: this.cordinates,
        map: map
    })
    }
}