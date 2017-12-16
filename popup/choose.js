$(function() {
    console.log("New instance");
    
    var bookmTr = browser.bookmarks.getTree(function(tree){
        var bookm = tree[0].children[1].children;
        //console.log(bookm[0]);
        for(var i = 0; i<bookm.length; i++){
            var item = bookm[i];
            //console.log(item);
            try{
                var s = '<a to="';
                s+=item.url;
                s+='">';
                s+='<img src="http://www.google.com/s2/favicons?domain=';
                var slidx=item.url.indexOf("//");
                s+=item.url.slice(slidx+2,item.url.length);
                s+='"><div class="description">';
                s+=item.title.length> 15 ? item.title.slice(0,15)+'...': item.title;
                s+='</div></a>';
                //console.log(s);
                $(".wrapper").append(s);
            }
            catch{}
        }
    })
    $('a').bind("click", function(){
        console.log("WAU");
        browser.tabs.update({url: $(this).attr("to")});
    });
    console.log("binded");
});
   