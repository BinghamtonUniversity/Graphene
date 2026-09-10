$('.navbar-header .nav a h4').html('API Developers');
url = "/api/proxy/"+slug+"/apis/"+resource_id+"/developers";

$.ajax({
  url: url,
  success: function (data) {
    custom_config = {}
    custom_config.el = '#table'
    custom_config.schema = [
      {name: 'id', type:'hidden'},
      {label: 'Developer', name:'user_id', required: true,type:'smallcombo',options:'/api/proxy/'+slug+'/users',format:{label:"{{name}}",value:function(item){return item.id;}}},
    ];
    custom_config.actions = [
      { name: "create" ,label:"New",type:"success"},
      "|",
      { name: "delete",label:"Delete",type:"danger" },
    ];
    custom_config.data = data;
    custom_config.name = "api_developers";
    grid = new GrapheneDataGrid(custom_config);
    grid.on("model:created", function (grid_event) {
        $.ajax({
          url: url + "/" + grid_event.model.attributes.user_id,
          type: "POST",
          success: function (data) {
          toastr.success("Successfully added the developer!")
          },
          error: function (e) {
            toastr.error(e.statusText, "ERROR");
          },
        });
    }).on("model:deleted",function(grid_event){
            grid_event.preventDefault()
            $.ajax({
              url: url + "/" + grid_event.model.attributes.user_id,
              type: "DELETE",
              data: grid_event.model.attributes,
              success: function (data) {
                toastr.success("Developer removed!")
              }
            });
      })
  },
});
