function addToCart(proId){
    $.ajax({
        url:'/add-to-cart/'+proId,
        type:'get',
        dataType:'json',
        success:(response)=>{
            if(response.status){
                let count=$('#cart-count').html()
                count=parseInt(count)+1
                $("#cart-count").html(count)
                
            }
            
            
        }
    })
}
