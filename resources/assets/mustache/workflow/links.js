/* made filter name unique for accessibility*/
workflow_report.links = ` 
          <input type="text" class="form-control filter" data-selector=".available_workflow" aria-label="Filter available workflows" name="filter" placeholder="Filter...">
          <ul class="list-group available_workflow" style="margin:10px 0 0">
          {{#data}}{{^unlisted}}<a class="filterable list-group-item" target="_blank" href="/workflow/{{group_id}}/{{slug}}">{{name}}</a>{{/unlisted}}{{/data}}
          </ul>`;