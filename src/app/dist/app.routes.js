"use strict";
exports.__esModule = true;
exports.routes = void 0;
var app_delivery_component_1 = require("./app-delivery/app-delivery.component");
var register_component_1 = require("./register/register.component");
exports.routes = [
    { path: '', redirectTo: 'delivery', pathMatch: 'full' },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'delivery', component: app_delivery_component_1.AppDeliveryComponent }
];
