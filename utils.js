const generateUUID = () => { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};


const getTables = () => {
    $.get("/api/tables", function(data) {
      console.log(data);
      if (data) {
        $("#reso").show();
        $("#name").text(data.name);
        $("#email").text(data.role);
        $("#phone").text(data.age);
        $("#force-points").text(data.forcePoints);
      }
      else {
        $("#name").text("The force is not strong with this one. Your character was not found.");
        $("#stats").hide();
      }
    });
}
