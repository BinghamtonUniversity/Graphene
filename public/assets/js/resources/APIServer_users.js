$(".navbar-header .nav a h4").html("Users");
url = "/api/proxy/" + slug + "/users";
api=url;
$.ajax({
  url: url,
  success: function(data){
    grid = new GrapheneDataGrid({...tableConfig,
      data: data,
      name:'users',
      schema: [
        {name: 'id', type:'hidden'},
        { label: "Unique ID", name: "unique_id", required: true},
        {
          label: "Name",
          name: "name",
          required: true
        },
        {
          label: "Developer",
          name: "developer",
          value: true,
          type: "checkbox",
          template:
              "{{#attributes.developer}}Yes{{/attributes.developer}}{{^attributes.developer}}No{{/attributes.developer}}",
          options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 },
          ],
        },
        {
          label: "Admin",
          name: "admin",
          value: true,
          type: "checkbox",
          template:
              "{{#attributes.admin}}Yes{{/attributes.admin}}{{^attributes.admin}}No{{/attributes.admin}}",
          options: [
            { label: "No", value: 0 },
            { label: "Yes", value: 1 },
          ],
        },
        {
          label: "Active",
          name: "active",
          value: true,
          type: "checkbox",
          template:
              "{{#attributes.active}}Yes{{/attributes.active}}{{^attributes.active}}No{{/attributes.active}}",
          options: [
            { label: "Inactive", value: 0 },
            { label: "Active", value: 1 },
          ],
        }
      ]
    })

  }
});
