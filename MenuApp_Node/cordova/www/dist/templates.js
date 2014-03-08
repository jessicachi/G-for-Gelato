angular.module('mobileClone').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('cordova/platforms/ios/www/demo/partials/view-details.html',
    "<mc-page id=\"view-details\" title=\"Details Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\">Back</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <div class=\"strap\">\n" +
    "            <div class=\"jumbotron\">\n" +
    "\n" +
    "                <div class=\"container\">\n" +
    "                    <h1>{{title}}</h1>\n" +
    "\n" +
    "                    <p>{{description}}</p>\n" +
    "\n" +
    "                    <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more</a></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-12 col-lg-6\">\n" +
    "                        <div class=\"btn-group btn-group-justified\">\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Left</a>\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Middle</a>\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Right</a>\n" +
    "                        </div>\n" +
    "                        <br>\n" +
    "\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\">@</span>\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "                        </div>\n" +
    "                        <br>\n" +
    "                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button\n" +
    "                        </button>\n" +
    "                        <button type=\"button\" class=\"btn btn-default btn-lg btn-block\">Block level button\n" +
    "                        </button>\n" +
    "                        <br>\n" +
    "                        <ul class=\"list-group\">\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">14</span>\n" +
    "                                Cras justo odio\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">2</span>\n" +
    "                                Dapibus ac facilisis in\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">1</span>\n" +
    "                                Morbi leo risus\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('cordova/platforms/ios/www/demo/partials/view-done.html',
    "<mc-page id=\"view-done\" title=\"Done Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\">Back</mc-nav>\n" +
    "        <mc-nav position=\"right\" change-to=\"view-home\" action=\"true\">Done</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <h1>Done!</h1>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('cordova/platforms/ios/www/demo/partials/view-home.html',
    "<mc-page id=\"view-home\" title=\"Test Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\">Menu</mc-nav>\n" +
    "        <mc-nav position=\"right\" change-to=\"view-done\" action=\"true\">Info</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <mc-list items=\"items\" change-to=\"view-details\" param=\"id\"></mc-list>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('cordova/www/demo/partials/view-details.html',
    "<mc-page id=\"view-details\" title=\"Details Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\">Back</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <div class=\"strap\">\n" +
    "            <div class=\"jumbotron\">\n" +
    "\n" +
    "                <div class=\"container\">\n" +
    "                    <h1>{{title}}</h1>\n" +
    "\n" +
    "                    <p>{{description}}</p>\n" +
    "\n" +
    "                    <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more</a></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-12 col-lg-6\">\n" +
    "                        <div class=\"btn-group btn-group-justified\">\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Left</a>\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Middle</a>\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Right</a>\n" +
    "                        </div>\n" +
    "                        <br>\n" +
    "\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\">@</span>\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "                        </div>\n" +
    "                        <br>\n" +
    "                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button\n" +
    "                        </button>\n" +
    "                        <button type=\"button\" class=\"btn btn-default btn-lg btn-block\">Block level button\n" +
    "                        </button>\n" +
    "                        <br>\n" +
    "                        <ul class=\"list-group\">\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">14</span>\n" +
    "                                Cras justo odio\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">2</span>\n" +
    "                                Dapibus ac facilisis in\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">1</span>\n" +
    "                                Morbi leo risus\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('cordova/www/demo/partials/view-done.html',
    "<mc-page id=\"view-done\" title=\"Done Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\">Back</mc-nav>\n" +
    "        <mc-nav position=\"right\" change-to=\"view-home\" action=\"true\">Done</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <h1>Done!</h1>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('cordova/www/demo/partials/view-home.html',
    "<mc-page id=\"view-home\" title=\"Test Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\">Menu</mc-nav>\n" +
    "        <mc-nav position=\"right\" change-to=\"view-done\" action=\"true\">Info</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <mc-list items=\"items\" change-to=\"view-details\" param=\"id\"></mc-list>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('demo/partials/view-details.html',
    "<mc-page id=\"view-details\" title=\"Details Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\" change-to=\"view-home\">Back</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <div class=\"strap\">\n" +
    "            <div class=\"jumbotron\">\n" +
    "\n" +
    "                <div class=\"container\">\n" +
    "                    <h1>{{title}}</h1>\n" +
    "\n" +
    "                    <p>{{description}}</p>\n" +
    "\n" +
    "                    <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more</a></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-12 col-lg-6\">\n" +
    "                        <div class=\"btn-group btn-group-justified\">\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Left</a>\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Middle</a>\n" +
    "                            <a class=\"btn btn-default\" role=\"button\">Right</a>\n" +
    "                        </div>\n" +
    "                        <br>\n" +
    "\n" +
    "                        <div class=\"input-group\">\n" +
    "                            <span class=\"input-group-addon\">@</span>\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n" +
    "                        </div>\n" +
    "                        <br>\n" +
    "                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Block level button\n" +
    "                        </button>\n" +
    "                        <button type=\"button\" class=\"btn btn-default btn-lg btn-block\">Block level button\n" +
    "                        </button>\n" +
    "                        <br>\n" +
    "                        <ul class=\"list-group\">\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">14</span>\n" +
    "                                Cras justo odio\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">2</span>\n" +
    "                                Dapibus ac facilisis in\n" +
    "                            </li>\n" +
    "                            <li class=\"list-group-item\">\n" +
    "                                <span class=\"badge\">1</span>\n" +
    "                                Morbi leo risus\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('demo/partials/view-done.html',
    "<mc-page id=\"view-done\" title=\"Done Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\" change-to=\"view-home\">Back</mc-nav>\n" +
    "        <mc-nav position=\"right\" change-to=\"view-home\" action=\"true\">Done</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <h1>Done!</h1>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );


  $templateCache.put('demo/partials/view-home.html',
    "<mc-page id=\"view-home\" title=\"Test Page\">\n" +
    "    <header>\n" +
    "        <mc-nav position=\"left\" back=\"true\" change-to=\"view-done\">Menu</mc-nav>\n" +
    "        <mc-nav position=\"right\" change-to=\"view-done\" action=\"true\">Info</mc-nav>\n" +
    "    </header>\n" +
    "    <mc-content>\n" +
    "        <mc-list items=\"items\" change-to=\"view-details\" param=\"id\"></mc-list>\n" +
    "    </mc-content>\n" +
    "</mc-page>\n"
  );

}]);
