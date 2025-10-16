function getOptions(){
    var count = $("#mySelect option").length;
    var items = [];
    $("#mySelect option").each(function(){
        items.push($(this).text());
    });
    alert("Total items: " + count + "\nItems: " + items.join(", "));
}