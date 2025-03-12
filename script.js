var nasaImages = $('#nasa-images');
var input = $('#datepicker').datepicker({dateFormat:'yy-mm-dd'});
const Key = "dKJxrN8RIzxdwOkKfNEUg7gTsuHjod4o8nQfQHeF";

$('form button').click(function(e){
    e.preventDefault();
    var date = input.val();
    console.log(date);

    if(date===""){
        alert("please fill the field");
        return ;
    }

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=dKJxrN8RIzxdwOkKfNEUg7gTsuHjod4o8nQfQHeF";

    $.get(url,function(data){
        let photos = data.photos;

        if(photos.length===0){
            alert("not photos avalaible for this data");
            return;
        }

        $('#nasa-images img').remove();

        for(let photo of photos){
            nasaImages.append(`<img src="${photo.img_src}" alt="${photo.id}">`);
        }

        console.log(data.status);

    });

})


// dKJxrN8RIzxdwOkKfNEUg7gTsuHjod4o8nQfQHeF


// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=20-09-09&api_key=dKJxrN8RIzxdwOkKfNEUg7gTsuHjod4o8nQfQHeF