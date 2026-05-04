workflow_report.links = ` 
          <label for="available_workflow_filter" class="sr-only">Available Workflow Filter</label><input id="available_workflow_filter" type="text" class="form-control filter" data-selector=".available_workflow" id="available_workflow_filter" name="filter" placeholder="Filter...">
          <ul class="list-group available_workflow" style="margin:10px 0 0">
          {{#data}}{{^unlisted}}<a class="filterable list-group-item" target="_blank" href="/workflow/{{group_id}}/{{slug}}">{{name}}</a>{{/unlisted}}{{/data}}
          </ul>`;