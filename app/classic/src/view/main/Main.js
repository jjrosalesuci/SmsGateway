/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('smsfront.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'widget.treelist',

        'smsfront.view.main.MainController',
    ],

    controller: 'main',
    viewModel: 'main',
    //plugins: 'viewport',

    ui: 'navigation',

    layout: {
        type: "vbox",
        align: "stretch"
    },
    
    items: [{
        xtype: "toolbar",
        cls: "sencha-dash-dash-headerbar shadow",
        height: 64,
        itemId: "headerBar",
        items: [{
                xtype: "component",
                reference: "senchaLogo",
                cls: "sencha-logo",
                html: '<div class="main-logo"><img src="resources/images/company-logo.png">Sencha</div>',
                width: 250
            }, {
                margin: "0 0 0 8",
                ui: "header",
                iconCls: "x-fa fa-navicon",
                id: "main-navigation-btn",
                //handler: "onToggleNavigationSize"
            }, "->",{
                iconCls: "x-fa fa-search",
                ui: "header",
                href: "#searchresults",
                hrefTarget: "_self",
                tooltip: "See latest search"
            }, {
                iconCls: "x-fa fa-envelope",
                ui: "header",
                href: "#email",
                hrefTarget: "_self",
                tooltip: "Check your email"
            }, {
                iconCls: "x-fa fa-question",
                ui: "header",
                href: "#faq",
                hrefTarget: "_self",
                tooltip: "Help / FAQ's"
            }, {
                iconCls: "x-fa fa-th-large",
                ui: "header",
                href: "#profile",
                hrefTarget: "_self",
                tooltip: "See your profile"
            }, {
                xtype: "tbtext",
                text: "Goff Smith",
                cls: "top-user-name"
            }, {
                xtype: "image",
                cls: "header-right-profile-image",
                height: 35,
                width: 35,
                alt: "current user image",
                src: "resources/images/user-profile/2.png"
            }
        ]},
        {
            xtype: "treelist",
            //reference: "navigationTreeList",
            itemId: "navigationTreeList",
            ui: "navigation",
           // store: "NavigationTree",
            width: 250,
            expanderFirst: false,
            expanderOnly: false,
            listeners: {
                //selectionchange: "onNavigationTreeSelectionChange"
            },
            store: {
                root: {
                    expanded: false,
                    children: [{
                        text: "Dashboard",
                        iconCls: "x-fa fa-desktop",
                        rowCls: "nav-tree-badge nav-tree-badge-new",
                        viewType: "admindashboard",
                        routeId: "dashboard",
                        leaf: true
                    }, {
                        text: "Email",
                        iconCls: "x-fa fa-send",
                        rowCls: "nav-tree-badge nav-tree-badge-hot",
                        viewType: "email",
                        leaf: true
                    }, {
                        text: "Profile",
                        iconCls: "x-fa fa-user",
                        viewType: "profile",
                        leaf: true
                    }, {
                        text: "Search results",
                        iconCls: "x-fa fa-search",
                        viewType: "searchresults",
                        leaf: true
                    }, {
                        text: "FAQ",
                        iconCls: "x-fa fa-question",
                        viewType: "faq",
                        leaf: true
                    }, {
                        text: "Pages",
                        iconCls: "x-fa fa-leanpub",
                        expanded: false,
                        selectable: false,
                        children: [{
                            text: "Blank Page",
                            iconCls: "x-fa fa-file-o",
                            viewType: "pageblank",
                            leaf: true
                        }, {
                            text: "404 Error",
                            iconCls: "x-fa fa-exclamation-triangle",
                            viewType: "page404",
                            leaf: true
                        }, {
                            text: "500 Error",
                            iconCls: "x-fa fa-times-circle",
                            viewType: "page500",
                            leaf: true
                        }, {
                            text: "Lock Screen",
                            iconCls: "x-fa fa-lock",
                            viewType: "lockscreen",
                            leaf: true
                        }, {
                            text: "Login",
                            iconCls: "x-fa fa-check",
                            viewType: "login",
                            leaf: true
                        }, {
                            text: "Register",
                            iconCls: "x-fa fa-pencil-square-o",
                            viewType: "register",
                            leaf: true
                        }, {
                            text: "Password Reset",
                            iconCls: "x-fa fa-lightbulb-o",
                            viewType: "passwordreset",
                            leaf: true
                        }]
                    }, {
                        text: "Widgets",
                        iconCls: "x-fa fa-flask",
                        viewType: "widgets",
                        leaf: true
                    }, {
                        text: "Forms",
                        iconCls: "x-fa fa-edit",
                        viewType: "forms",
                        leaf: true
                    }, {
                        text: "Charts",
                        iconCls: "x-fa fa-pie-chart",
                        viewType: "charts",
                        leaf: true
                    }]
                }
            }
        },
        {
            xtype: "container",
            flex: 1,
            //reference: "mainCardPanel",
            cls: "sencha-dash-right-main-container",
            itemId: "contentPanel",
            layout: {
                type: "card",
                anchor: "100%"
            }
        }
    ]
});