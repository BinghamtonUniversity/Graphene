$('.navbar-header .nav a h4').html('API Developers');
url = "/api/proxy/"+slug+"/apis/"+resource_id+"/developers";

$.ajax({
  url: url,
  success: function (data) {
    tableConfig.schema = [
      {name: 'id', type:'hidden'},
      {label: 'Developer', name:'user_id', required: true,type:'select',options:'/api/proxy/'+slug+'/users',format:{label:"{{name}}",value:function(item){return item.id;}}},
    ];
    tableConfig.actions = [
      { name: "create" },
      "|",
      { name: "delete" },
    ];

    tableConfig.data = data;
    tableConfig.name = "api_developers";
    grid = new GrapheneDataGrid(tableConfig);
    grid
        .on("model:created", function (grid_event) {
          grid_event.preventDefault()
          $.ajax({
            url: url + "/" + grid_event.model.attributes.user_id,
            type: "POST",
            data: grid_event.model.attributes
          });
        }).on("model:deleted",function(grid_event){
          grid_event.preventDefault()
          $.ajax({
            url: url + "/" + grid_event.model.attributes.user_id,
            type: "DELETE",
            data: grid_event.model.attributes
          });
        })
  },
});
