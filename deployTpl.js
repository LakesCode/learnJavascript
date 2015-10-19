angular.module('deployTpl', ['views/alert.html', 'views/confirm.html', 'views/dashboard.html', 'views/deploy/deploy.html', 'views/footer.html', 'views/header.html', 'views/inventory/addGroupTpl.html', 'views/inventory/addNodeTpl.html', 'views/inventory/editGroupTpl.html', 'views/inventory/inventory.html', 'views/inventory/inventoryGroup.html', 'views/inventory/inventoryNode.html', 'views/inventory/updateNodeTpl.html', 'views/log/log.html', 'views/log/logDetailTpl.html', 'views/main.html', 'views/orchestration.html', 'views/package/3PartyTpl.html', 'views/package/package.html', 'views/package/packageDetailTpl.html', 'views/package/securityTpl.html', 'views/package/serviceTpl.html', 'views/profile.html', 'views/register.html', 'views/security.html', 'views/server/deployInfo.html', 'views/server/deploySetting.html', 'views/server/packageTpl.html', 'views/server/server.html', 'views/server/settingTpl.html', 'views/setting.html', 'views/sidebar.html', 'views/task/task.html', 'views/task/taskDetailTpl.html', 'views/task/taskExcuteTpl.html']);

angular.module("views/alert.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/alert.html",
    "<div class=\"page-notification-wrap page-notification-bottom-right\"><div ng-repeat=\"notify in messages\" ng-show=\"notify.time !== -3\" class=\"page-notification alert-{{notify.msg.type}}\"><button ng-show=\"notify.time !==-2\" ng-click=hide($index) class=\"page-notification-close-button icon-close\"></button><div class=page-notification-message ng-bind-html=notify.msg.content></div></div></div>");
}]);

angular.module("views/confirm.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/confirm.html",
    "<div class=modal-header><h2 class=modal-title>{{confirmInfo.title}}</h2></div><div class=modal-body><div style=\"padding: 15px 0px;text-align: left\">{{confirmInfo.content}}</div></div><div class=modal-footer><button class=\"btn btn-primary\" ng-click=ok()>{{confirmInfo.ok}}</button> <button class=\"btn btn-warning\" ng-click=cancel()>{{confirmInfo.cancel}}</button></div>");
}]);

angular.module("views/dashboard.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/dashboard.html",
    "<div>dash 别急啊，人家还没有准备好。。。</div>");
}]);

angular.module("views/deploy/deploy.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/deploy/deploy.html",
    "<div><header class=stepHeader><ul class=\"stepBar clearfix\"><li class=stepBox ng-class=\"{stepBoxCheck:step.curStep == 1, stepDone:step.curStep > 1}\"><div class=stepInfo><span class=stepText>Deploy Option</span> <i class=stepIcon></i> <span class=stepNum></span></div><div class=stepLine>-</div></li><li class=stepBox ng-class=\"{stepBoxCheck:step.curStep == 2 , stepDone:step.curStep > 2}\"><div class=stepInfo><span class=stepText>Deploy User Definition</span> <i class=stepIcon></i> <span class=stepNum></span></div><div class=stepLine>-</div></li><li class=\"stepBox stepEnd\" ng-class=\"{stepBoxCheck:step.curStep == 3, stepDone:step.curStep > 3}\"><div class=stepInfo><span class=stepText>Deploy Progress</span> <i class=stepIcon></i> <span class=stepNum></span></div><div class=stepLine>-</div></li></ul></header></div>");
}]);

angular.module("views/footer.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/footer.html",
    "<div class=page-footer-inner>版权所有 © 华为软件技术有限公司 2015。 保留一切权利。苏ICP备09062682号- 13</div><div class=scroll-to-top><i class=icon-back-toTop1></i></div>");
}]);

angular.module("views/header.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/header.html",
    "<div class=page-header-inner><div class=page-logo><a href=\"#/\" class=logo><span class=logo-prefix>Auto</span><span class=logo-after>Deploy</span></a></div><div class=top-menu><ul class=\"nav navbar-nav pull-right\"><li><a href=javascript:; class=top-language ng-click=switchEnglish()>English</a> <span class=top-vertical-line>|</span> <a href=javascript:; class=top-language ng-click=switchChinese()>中文</a></li><li class=\"dropdown dropdown-user\"><a href=# class=dropdown-toggle dropdown-menu-hover data-toggle=dropdown data-close-others=true><img alt=\"\" class=img-circle src=\"/images/user-head.png\"> <span class=\"username username-hide-on-mobile\">Nick</span> <i class=\"fa fa-angle-down\"></i></a><ul class=\"dropdown-menu dropdown-menu-default\"><li><a href=#/profile/dashboard><i class=icon-user></i> My Profile</a></li><li><a href=javascript:void(0); ng-click=logout()><i class=icon-key></i> Log Out</a></li></ul></li><li class=\"dropdown dropdown-quick-sidebar-toggler\"><a href=javascript:; class=dropdown-toggle><i class=icon-logout></i></a></li></ul></div></div>");
}]);

angular.module("views/inventory/addGroupTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/inventory/addGroupTpl.html",
    "<div class=modal-header><h3 class=modal-title>Add Node</h3></div><div class=modal-body><form class=form-horizontal><div class=form-group><label for=name class=\"col-sm-3 control-label\">GroupName:</label><div class=col-sm-9><input class=form-control ng-model=groupInfo.node_name id=name placeholder=GroupName></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=ok()>OK</button> <button class=\"btn btn-warning\" type=button ng-click=cancel()>Cancel</button></div>");
}]);

angular.module("views/inventory/addNodeTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/inventory/addNodeTpl.html",
    "<div class=modal-header><h3 class=modal-title>Add Node</h3></div><div class=modal-body><form class=form-horizontal><div class=form-group><label for=name class=\"col-sm-3 control-label\">NodeName:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.node_name id=name placeholder=NodeName></div></div><div class=form-group><label for=ip class=\"col-sm-3 control-label\">IP/FQDN:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.ip id=ip placeholder=IP/FQDN></div></div><div class=form-group><label for=user class=\"col-sm-3 control-label\">ssh_user:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.user_name id=user placeholder=ssh_user></div></div><div class=form-group><label for=user_passwd class=\"col-sm-3 control-label\">user_password:</label><div class=col-sm-9><input type=password class=form-control ng-model=nodeInfo.user_passwd id=user_passwd placeholder=Password></div></div><div class=form-group><label for=sudo_user class=\"col-sm-3 control-label\">sudo_user:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.sudu_name id=sudo_user placeholder=sudo_user></div></div><div class=form-group><label for=sudo_passwd class=\"col-sm-3 control-label\">sudo_password:</label><div class=col-sm-9><input type=password class=form-control ng-model=nodeInfo.sudo_passwd id=sudo_passwd placeholder=Password></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=ok()>OK</button> <button class=\"btn btn-warning\" type=button ng-click=cancel()>Cancel</button></div>");
}]);

angular.module("views/inventory/editGroupTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/inventory/editGroupTpl.html",
    "<div class=modal-header><h3 class=modal-title>Edit Group</h3></div><div class=modal-body><form class=form-horizontal><div class=form-group><label for=ip_list class=\"col-sm-2 control-label\">IP List:</label><div class=col-sm-10><textarea class=form-control ng-model=groupInfo.ip_list id=ip_list placeholder=ip_list></textarea></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=ok()>OK</button> <button class=\"btn btn-warning\" type=button ng-click=cancel()>Cancel</button></div>");
}]);

angular.module("views/inventory/inventory.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/inventory/inventory.html",
    "<div class=inventory-wrap><tabset><tab heading={{i18n.inventory_group}}><div class=tab-content ng-include=\"'views/inventory/inventoryGroup.html'\"></div></tab><tab heading={{i18n.inventory_node}}><div class=tab-content ng-include=\"'views/inventory/inventoryNode.html'\"></div></tab></tabset></div>");
}]);

angular.module("views/inventory/inventoryGroup.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/inventory/inventoryGroup.html",
    "<div class=title-wrap><button type=button class=\"btn btn-primary\" ng-click=addGroup()>{{i18n.inventory_add_group}}</button></div><div class=dataTable><table class=\"table table-bordered table-hover no-footer\"><col width=\"20%\"><col width=\"30%\"><col width=\"40%\"><thead><tr><th>GroupName</th><th>Node</th><th>Operations</th></tr></thead><tbody><tr ng-repeat=\"row in group.myData\"><td>{{row.group_name}}</td><td></td><td><div class=operate><a href=javascript:void(0); ng-click=editGroup(row);$event.stopPropagation();>edit</a> <a href=javascript:void(0); ng-click=removeGroup(row);$event.stopPropagation();>remove</a></div></td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"group.myData.length > 0\"><pagination ng-model=group.pagingOptions.currentPage items-per-page=group.pagingOptions.pageSize total-items=group.totalServerItems max-size=group.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/inventory/inventoryNode.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/inventory/inventoryNode.html",
    "<div class=title-wrap><button type=button class=\"btn btn-primary\" ng-click=addNode()>{{i18n.inventory_add_node}}</button></div><div class=dataTable><table class=\"table table-bordered table-hover no-footer\"><col width=\"15%\"><col width=\"20%\"><col width=\"35%\"><col width=\"30%\"><thead><tr><th>NodeName</th><th>IP</th><th>Users</th><th>Operations</th></tr></thead><tbody><tr ng-repeat=\"row in node.myData\"><td>{{row.node_name}}</td><td>{{row.ip}}</td><td>{{row.users}}</td><td><div class=operate><a href=javascript:void(0); ng-click=editNode(row);$event.stopPropagation();>edit</a> <a href=javascript:void(0); ng-click=removeNode(row);$event.stopPropagation();>remove</a></div></td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"node.myData.length > 0\"><pagination ng-model=node.pagingOptions.currentPage items-per-page=node.pagingOptions.pageSize total-items=node.totalServerItems max-size=node.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/inventory/updateNodeTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/inventory/updateNodeTpl.html",
    "<div class=modal-header><h3 class=modal-title>Edit Node</h3></div><div class=modal-body><form class=form-horizontal><div class=form-group><label for=name class=\"col-sm-3 control-label\">NodeName:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.node_name id=name placeholder=NodeName></div></div><div class=form-group><label for=ip class=\"col-sm-3 control-label\">IP/FQDN:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.ip id=ip placeholder=IP/FQDN></div></div><div class=form-group><label for=user class=\"col-sm-3 control-label\">ssh_user:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.user_name id=user placeholder=ssh_user></div></div><div class=form-group><label for=user_passwd class=\"col-sm-3 control-label\">user_password:</label><div class=col-sm-9><input type=password class=form-control ng-model=nodeInfo.user_passwd id=user_passwd placeholder=Password></div></div><div class=form-group><label for=sudo_user class=\"col-sm-3 control-label\">sudo_user:</label><div class=col-sm-9><input class=form-control ng-model=nodeInfo.sudu_name id=sudo_user placeholder=sudo_user></div></div><div class=form-group><label for=sudo_passwd class=\"col-sm-3 control-label\">sudo_password:</label><div class=col-sm-9><input type=password class=form-control ng-model=nodeInfo.sudo_passwd id=sudo_passwd placeholder=Password></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=ok()>OK</button> <button class=\"btn btn-warning\" type=button ng-click=cancel()>Cancel</button></div>");
}]);

angular.module("views/log/log.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/log/log.html",
    "<div class=deploy-log-wrap><div class=form-bg><form class=\"form-inline clearfix\"><div class=\"form-group col-md-3\"><label for=level class=control-label>level:</label><select class=\"form-control log-select\" id=level ng-model=query.level ng-options=\"a.value as a.title for a in data.levels\"></select></div><div class=\"form-group col-md-3\"><label for=result class=control-label>result:</label><select class=\"form-control log-select\" id=result ng-model=query.result ng-options=\"a.value as a.title for a in data.results\"></select></div><div class=\"form-group col-md-3\"><label for=user class=control-label>user:</label><input class=\"form-control log-select\" ng-model=query.user id=user placeholder=user></div><div class=\"form-group col-md-3 operation_name\"><label for=operationName class=control-label>OperationName:</label><input class=\"form-control log-select\" ng-model=query.operationName id=operationName placeholder=operationName></div></form><form class=\"form-inline clearfix mt20\"><div class=\"form-group col-md-3\"><label for=startTime class=control-label>startTime:</label><input class=\"form-control log-select\" ng-model=query.startTime id=startTime end-time=query.endTime placeholder=startTime dateptimepicker></div><div class=\"form-group col-md-3\"><label for=endTime class=control-label>endTime:</label><input class=\"form-control log-select\" ng-model=query.endTime id=endTime start-time=query.startTime placeholder=endTime dateptimepicker></div><div class=\"form-group col-md-3\"><button type=button class=\"btn btn-primary search-btn\" ng-click=search()>Search</button></div></form></div><div class=\"dataTable table-content\"><table class=\"table table-bordered table-hover no-footer\"><col width=\"12%\"><col width=\"12%\"><col width=\"12%\"><col width=\"17%\"><col width=\"17%\"><col width=\"15%\"><col width=\"15%\"><thead><tr><th>Level</th><th>operationName</th><th>User</th><th>StartTime</th><th>EndTime</th><th>Result</th><th>Detail</th></tr></thead><tbody><tr ng-repeat=\"row in log.myData\"><td>{{row.operation_level}}</td><td>{{row.operation_name}}</td><td>{{row.operation_executer}}</td><td>{{row.operation_start_time}}</td><td>{{row.operation_end_time}}</td><td>{{row.operation_result}}</td><td><div class=operate><a href=javascript:void(0); ng-click=detail(row);$event.stopPropagation();>detail</a></div></td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"log.myData.length > 0\"><pagination ng-model=log.pagingOptions.currentPage items-per-page=log.pagingOptions.pageSize total-items=log.totalServerItems max-size=log.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div></div>");
}]);

angular.module("views/log/logDetailTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/log/logDetailTpl.html",
    "<div class=modal-header><h3 class=modal-title>Log Detail</h3></div><div class=modal-body><div hljs source=detail></div></div><div class=modal-footer><button class=\"btn btn-warning\" type=button ng-click=cancel()>close</button></div>");
}]);

angular.module("views/main.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/main.html",
    "<div ui-view class=main-content-wrap></div>");
}]);

angular.module("views/orchestration.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/orchestration.html",
    "<div>och 别急啊，人家还没有准备好。。。</div>");
}]);

angular.module("views/package/3PartyTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/package/3PartyTpl.html",
    "<div class=\"dataTable table-content\"><table class=\"table table-bordered table-hover no-footer\"><col width=\"25%\"><col width=\"25%\"><col width=\"25%\"><col width=\"25%\"><thead><tr><th>Service</th><th>Latest Released Version</th><th>Latest Released Time</th><th>Historical Version</th></tr></thead><tbody><tr ng-repeat=\"row in party.myData\"><td>{{row.service_name}}</td><td>{{row.release_version}}</td><td>{{row.release_date}}</td><td><div class=operate><a href=javascript:void(0); ng-click=party.detail(row)>detail</a></div></td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"party.myData.length > 0\"><pagination ng-model=party.pagingOptions.currentPage items-per-page=party.pagingOptions.pageSize total-items=party.totalServerItems max-size=party.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/package/package.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/package/package.html",
    "<div class=upload-wrap><div class=upload-top-wrap><div class=\"fileUpload btn btn-success\"><span>Select File</span> <input type=file class=upload-file nv-file-select=\"\" uploader=uploader id=upload_file_name name=\"upload_file_name\"></div><button type=button class=\"btn btn-success\" ng-click=uploader.queue[0].upload() ng-disabled=!uploader.getNotUploadedItems().length><span class=\"glyphicon glyphicon-upload\"></span> Upload</button> <button type=button class=\"btn btn-danger\" ng-click=uploader.clearQueue() ng-disabled=!uploader.queue.length><span class=\"glyphicon glyphicon-trash\"></span> Remove</button></div><div ng-show=uploader.isHTML5 nv-file-drop=\"\" uploader=uploader><div class=file-drop-zone nv-file-over=\"\" uploader=uploader over-class=file-drop-zone-over>Drop here</div></div><div class=portlet-body><table class=\"table table-light\"><col width=\"40%\"><col width=\"10%\"><col width=\"40%\"><col width=\"10%\"><tbody><tr ng-repeat=\"item in uploader.queue\"><td><strong>{{ item.file.name }}</strong></td><td ng-show=uploader.isHTML5 nowrap>{{ item.file.size/1024/1024|number:2 }} MB</td><td ng-show=uploader.isHTML5><div class=\"progress progress-sm\" style=\"margin-bottom: 0\"><div class=\"progress-bar progress-bar-info\" role=progressbar ng-style=\"{ 'width': item.progress + '%' }\"></div></div></td><td class=text-center><span ng-show=item.isSuccess class=text-success><i class=\"glyphicon glyphicon-ok\"></i></span> <span ng-show=item.isCancel class=text-info><i class=\"glyphicon glyphicon-ban-circle\"></i></span> <span ng-show=item.isError class=text-danger><i class=\"glyphicon glyphicon-remove\"></i></span></td></tr></tbody></table></div></div><div class=\"dataTable table-content\"><table class=\"table table-bordered table-hover no-footer\"><col width=\"20%\"><col width=\"20%\"><col width=\"20%\"><col width=\"20%\"><col width=\"20%\"><thead><tr><th>Type</th><th>Service</th><th>Latest Released Version</th><th>Latest Released Time</th><th>Historical Version</th></tr></thead><tbody><tr ng-repeat=\"row in service.myData\"><td>{{row.package_type}}</td><td>{{row.service_name}}</td><td>{{row.release_version}}</td><td>{{row.release_date}}</td><td><div class=operate><a href=javascript:void(0); ng-click=service.detail(row)>detail</a></div></td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"service.myData.length > 0\"><pagination ng-model=service.pagingOptions.currentPage items-per-page=service.pagingOptions.pageSize total-items=service.totalServerItems max-size=service.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/package/packageDetailTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/package/packageDetailTpl.html",
    "<div class=modal-header><h3 class=modal-title>Package Detail</h3><div class=close-wrap><i class=icon-close ng-click=cancel()></i></div></div><div class=modal-body><div class=\"dataTable table-content package-detail-table\"><table class=\"table table-bordered table-hover no-footer\"><col width=\"15%\"><col width=\"20%\"><col width=\"55%\"><col width=\"10%\"><thead><tr><th>Release Version</th><th>Release Time</th><th>Release Note</th><th>Operation</th></tr></thead><tbody><tr ng-repeat=\"row in packageDetail.myData\"><td>{{row.release_version}}</td><td>{{row.release_date}}</td><td><div class=note-wrap><i href=javascript:void(0) class=\"note-operation icon-chevron-thin-down\" ng-class=\"{'icon-chevron-thin-down': !row.expand, 'icon-chevron-thin-up': row.expand}\" ng-click=\"row.expand = !row.expand\"></i><div class=note-content ng-class=\"{'note-expand': row.expand,'note-collapse': !row.expand}\" hljs source=row.release_note></div></div></td><td><div class=operate><a href=javascript:void(0); ng-click=packageDetail.remove(row)>Remove</a></div></td></tr></tbody></table></div><div class=deploy-pagination-container ng-show=\"packageDetail.myData.length > 0\"><pagination ng-model=packageDetail.pagingOptions.currentPage items-per-page=packageDetail.pagingOptions.pageSize total-items=packageDetail.totalServerItems max-size=packageDetail.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/package/securityTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/package/securityTpl.html",
    "<div class=\"dataTable table-content\"><table class=\"table table-bordered table-hover no-footer\"><col width=\"25%\"><col width=\"25%\"><col width=\"25%\"><col width=\"25%\"><thead><tr><th>Service</th><th>Latest Released Version</th><th>Latest Released Time</th><th>Historical Version</th></tr></thead><tbody><tr ng-repeat=\"row in security.myData\"><td>{{row.service_name}}</td><td>{{row.release_version}}</td><td>{{row.release_date}}</td><td><div class=operate><a href=javascript:void(0); ng-click=security.detail(row)>detail</a></div></td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"security.myData.length > 0\"><pagination ng-model=security.pagingOptions.currentPage items-per-page=security.pagingOptions.pageSize total-items=security.totalServerItems max-size=security.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/package/serviceTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/package/serviceTpl.html",
    "");
}]);

angular.module("views/profile.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/profile.html",
    "<form class=form-horizontal name=myProfileForm novalidate><div class=form-group><label for=userName class=\"col-md-1 control-label\">用户名</label><div class=col-md-4><input class=form-control id=userName name=userName placeholder=用户名 ng-model=user.userName required></div><span class=col-md-7 style=\"color:red; padding-top: 7px\" ng-show=\"myProfileForm.userName.$dirty && myProfileForm.userName.$invalid\"><span ng-show=myProfileForm.userName.$error.required>请填写用户名</span></span></div><div class=form-group><label for=oldPassword class=\"col-md-1 control-label\">原密码</label><div class=col-md-4><input type=password class=form-control id=oldPassword name=oldPassword placeholder=请输入原密码 ng-model=user.oldPassword ng-pattern=\"/^[a-zA-Z0-9\\u4e00-\\u9fa5]+$/\" required></div><span class=col-md-7 style=\"color:red; padding-top: 7px\" ng-show=\"myProfileForm.oldPassword.$dirty && myProfileForm.oldPassword.$invalid\"><span ng-show=myProfileForm.oldPassword.$error.required>请输入密码</span> <span ng-show=\"myProfileForm.oldPassword.$invalid && !myProfileForm.oldPassword.$error.required\">密码格式为英文大小写和数字</span></span></div><div class=form-group><label for=newPassword class=\"col-md-1 control-label\">修改密码</label><div class=col-md-4><input type=password class=form-control id=newPassword name=newPassword placeholder=修改密码 ng-model=user.newPassword ng-pattern=\"/^[a-zA-Z0-9\\u4e00-\\u9fa5]+$/\" required></div><span class=col-md-7 style=\"color:red; padding-top: 7px\" ng-show=\"myProfileForm.newPassword.$dirty && myProfileForm.newPassword.$invalid\"><span ng-show=myProfileForm.newPassword.$error.required>请输入您的新密码</span> <span ng-show=\"myProfileForm.newPassword.$invalid && !myProfileForm.newPassword.$error.required\">密码格式为英文大小写和数字</span></span></div><div class=form-group><label for=rePassword class=\"col-md-1 control-label\">确认密码</label><div class=col-md-4><input type=password class=form-control id=rePassword name=rePassword placeholder=请再次输入密码 ng-model=user.rePassword ng-change=checkRepassword() ng-pattern=\"/^[a-zA-Z0-9\\u4e00-\\u9fa5]+$/\" required></div><span class=col-md-7 style=\"color:red; padding-top: 7px\" ng-show=myProfileForm.rePassword.$dirty><span ng-show=myProfileForm.rePassword.$error.required>请输入确认密码</span> <span ng-show=\"passwordDiff && !myProfileForm.rePassword.$error.required && !myProfileForm.rePassword.$invalid\">两次密码不一致</span> <span ng-show=\"myProfileForm.rePassword.$invalid && !myProfileForm.rePassword.$error.required\">密码格式为英文大小写和数字</span></span></div><div class=form-group><div class=\"col-md-4 col-md-offset-1\"><button type=submit class=\"btn btn-primary\" ng-disabled=myProfileForm.$invalid ng-click=sureChange()>确认修改</button></div></div></form>");
}]);

angular.module("views/register.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/register.html",
    "<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title></title></head><body></body></html>");
}]);

angular.module("views/security.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/security.html",
    "<div>security 别急啊，人家还没有准备好。。。</div>");
}]);

angular.module("views/server/deployInfo.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/server/deployInfo.html",
    "<div class=dataTable><table class=\"table table-bordered table-hover no-footer\"><col width=\"25%\"><col width=\"35%\"><col width=\"40%\"><thead><tr><th>Name</th><th>IP</th><th>Version</th></tr></thead><tbody><tr ng-repeat=\"row in node.myData\"><td>{{row.name}}</td><td>{{row.ip}}</td><td>{{row.version}}</td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"node.myData.length > 0\"><pagination ng-model=node.pagingOptions.currentPage items-per-page=node.pagingOptions.pageSize total-items=node.totalServerItems max-size=node.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/server/deploySetting.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/server/deploySetting.html",
    "<div class=deploy-setting><form class=form-horizontal><div class=form-group ng-show=data.selectVersion><label class=\"col-sm-3 control-label\">Version:</label><div class=col-sm-9><div class=form-control-static>{{data.selectVersion}}</div></div></div><div class=form-group><label for=executeFile class=\"col-sm-3 control-label\">Execute File:</label><div class=col-sm-9><select class=form-control id=executeFile ng-model=data.executeFile ng-options=\"a for a in data.executeFiles\"></select></div></div><div class=form-group><label for=ssh_password class=\"col-sm-3 control-label\">ssh_password:</label><div class=col-sm-9><input class=form-control ng-model=data.ssh_password id=ssh_password placeholder=ssh_password></div></div><div class=form-group><label for=sudo_password class=\"col-sm-3 control-label\">sudo_password:</label><div class=col-sm-9><input class=form-control ng-model=data.sudo_password id=sudo_password placeholder=sudo_password></div></div><button class=\"btn btn-primary\" type=button ng-click=execute()>Execute</button></form></div><div class=custom-progress-modal ng-show=showExecuteProgress><div class=custom-progress-wrap><div class=\"progress-striped active progress\"><div class=\"progress-bar progress-bar-warning\"></div></div><div class=progress-title>正在部署...</div></div></div>");
}]);

angular.module("views/server/packageTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/server/packageTpl.html",
    "<div class=package-wrap><div class=package-title><h3>部署准备</h3></div><form class=form-horizontal><div class=form-group><label for=version class=\"col-sm-2 control-label\">选择版本:</label><div class=col-sm-3><select class=form-control id=result ng-model=data.version placeholder=选择版本 ng-options=\"a for a in data.versions\" id=version></select></div></div><div class=\"form-group col-md-2\"><button type=button class=\"btn btn-primary\" ng-click=importPackage() ng-disabled=!data.version>同步安装包</button></div></form></div><div class=custom-progress-modal ng-show=showProgress><div id=J_ProgressBar class=custom-progress-wrap><div class=\"progress-striped active progress\"><div class=\"progress-bar progress-bar-warning\"></div></div><div class=progress-title>正在同步安装包...</div></div></div>");
}]);

angular.module("views/server/server.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/server/server.html",
    "<div class=server-wrap><div class=server-switch-wrap><select class=form-control id=result ng-model=data.service ng-change=changeService() ng-options=\"a for a in data.services\"></select></div><tabset><tab heading=安装包准备><div class=tab-content ng-include=\"'views/server/packageTpl.html'\"></div></tab><tab heading=文件配置><div class=tab-content ng-include=\"'views/server/settingTpl.html'\"></div></tab><tab heading=部署操作 select=getSelectVersion()><div class=tab-content ng-include=\"'views/server/deploySetting.html'\"></div></tab><tab heading=部署信息><div class=tab-content ng-include=\"'views/server/deployInfo.html'\"></div></tab></tabset></div>");
}]);

angular.module("views/server/settingTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/server/settingTpl.html",
    "<div class=title-wrap><button type=button class=\"btn btn-primary\" ng-click=importHosts()>从环境导入hosts</button> <button type=button class=\"btn btn-primary\" ng-click=saveHosts() ng-disabled=\"data.selectGroups.length <= 0\">生成hosts</button> <span>导入hosts或者编辑完后需点击”生成hosts“按钮才会同步到后台，保存数据</span></div><div class=dataTable><table class=\"table table-bordered table-hover no-footer\"><col width=\"5%\"><col width=\"20%\"><col width=\"35%\"><col width=\"30%\"><thead><tr><th><input type=checkbox ng-change=selectGroupAll() ng-checked=data.selectAll ng-model=\"data.selectAll\"></th><th>Group Name</th><th>IP List</th><th>Operations</th></tr></thead><tbody><tr ng-repeat=\"row in data.groups\"><td><input type=checkbox ng-change=selectGroup(row) ng-checked=row.selected ng-model=\"row.selected\"></td><td>{{row.group_name}}</td><td>{{row.ip_list}}</td><td><div class=operate><a href=javascript:void(0); ng-click=eidtGroup(row);$event.stopPropagation();>edit</a></div></td></tr></tbody></table></div>");
}]);

angular.module("views/setting.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/setting.html",
    "<div>setting 别急啊，人家还没有准备好。。。</div>");
}]);

angular.module("views/sidebar.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/sidebar.html",
    "<div class=\"page-sidebar navbar-collapse collapse\"><div class=sidebar-wrap><div class=\"sidebar-toggler icon-paragraph-justify\"></div></div><ul class=page-sidebar-menu data-keep-expanded=false data-auto-scroll=true data-slide-speed=200 ng-class=\"{'page-sidebar-menu-closed': settings.layout.pageSidebarClosed}\"><li><a href=#/main/server><i class=icon-tasks title={{i18n.common_term_server}}></i> <span class=title>{{i18n.common_term_server}}</span></a></li><li><a href=#/main/deploy><i class=icon-briefcase title={{i18n.common_term_deploy}}></i> <span class=title>{{i18n.common_term_deploy}}</span></a></li><li><a href=#/main/task><i class=icon-tasks title={{i18n.common_term_task}}></i> <span class=title>{{i18n.common_term_task}}</span></a></li><li><a href=#/main/inventory><i class=icon-inventory title={{i18n.common_term_inventory}}></i> <span class=title>{{i18n.common_term_inventory}}</span></a></li><li><a href=#/main/package><i class=icon-package title={{i18n.common_term_package}}></i> <span class=title>{{i18n.common_term_package}}</span></a></li><li><a href=#/main/security><i class=icon-security title={{i18n.common_term_security}}></i> <span class=title>{{i18n.common_term_security}}</span></a></li><li><a href=#/main/log><i class=icon-log title={{i18n.common_term_log}}></i> <span class=title>{{i18n.common_term_log}}</span></a></li><li><a href=#/main/setting><i class=icon-cog title={{i18n.common_term_setting}}></i> <span class=title>{{i18n.common_term_setting}}</span></a></li><li><a href=#/main/profile><i class=icon-key title={{i18n.common_term_profile}}></i> <span class=title>{{i18n.common_term_profile}}</span></a></li></ul></div>");
}]);

angular.module("views/task/task.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/task/task.html",
    "<div class=dataTable><table class=\"table table-bordered table-hover no-footer\"><col width=\"8%\"><col width=\"8%\"><col width=\"28%\"><col width=\"16%\"><col width=\"8%\"><col width=\"10%\"><col width=\"10%\"><col width=\"6%\"><col width=\"\"><thead><tr><th>Type</th><th>TaskName</th><th>Action</th><th>Inventory Group</th><th>Executer</th><th>StartTime</th><th>EndTime</th><th>Status</th><th>Log</th></tr></thead><tbody><tr ng-repeat=\"row in task.myData\"><td>{{row.types}}</td><td>{{row.taskname}}</td><td>{{row.action}}</td><td>{{row.hostgroup}}</td><td>{{row.executer}}</td><td>{{row.startat}}</td><td>{{row.endat}}</td><td>{{row.status}}</td><td><div class=operate><a href=javascript:void(0); ng-click=detail(row);$event.stopPropagation();>detail</a></div></td></tr></tbody></table><div class=deploy-pagination-container ng-show=\"task.myData.length > 0\"><pagination ng-model=task.pagingOptions.currentPage items-per-page=task.pagingOptions.pageSize total-items=task.totalServerItems max-size=task.pagingOptions.pageSize class=pagination-sm boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></pagination></div></div>");
}]);

angular.module("views/task/taskDetailTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/task/taskDetailTpl.html",
    "<div class=modal-header><h3 class=modal-title>Task Detail</h3></div><div class=modal-body><div hljs source=detail></div></div><div class=modal-footer><button class=\"btn btn-warning\" type=button ng-click=cancel()>close</button></div>");
}]);

angular.module("views/task/taskExcuteTpl.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("views/task/taskExcuteTpl.html",
    "<div class=modal-header><h3 class=modal-title>部署</h3></div><div class=modal-body><form class=form-horizontal><div class=form-group><label for=path class=\"col-sm-3 control-label\">path:</label><div class=col-sm-9><input class=form-control ng-model=deploy.path id=path placeholder=path></div></div><div class=form-group><label for=command class=\"col-sm-3 control-label\">command:</label><div class=col-sm-9><input class=form-control ng-model=deploy.command id=command placeholder=command></div></div><div class=form-group><label for=user_passwd class=\"col-sm-3 control-label\">user_password:</label><div class=col-sm-9><input type=password class=form-control ng-model=deploy.user_passwd id=user_passwd placeholder=Password></div></div><div class=form-group><label for=sudo_passwd class=\"col-sm-3 control-label\">sudo_password:</label><div class=col-sm-9><input type=password class=form-control ng-model=deploy.sudo_passwd id=sudo_passwd placeholder=Password></div></div></form></div><div class=modal-footer><button class=\"btn btn-primary\" type=button ng-click=ok()>OK</button> <button class=\"btn btn-warning\" type=button ng-click=cancel()>Cancel</button></div>");
}]);
