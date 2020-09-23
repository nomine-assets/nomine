(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://localhost',
            routes : [{"host":null,"methods":["GET","HEAD"],"uri":"api\/user","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":null,"action":"App\Http\Controllers\Frontpage\IndexController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"logister","name":null,"action":"App\Http\Controllers\Frontpage\AuthController@logister"},{"host":null,"methods":["POST"],"uri":"user\/login","name":"user.login","action":"App\Http\Controllers\Frontpage\AuthController@login"},{"host":null,"methods":["POST"],"uri":"user\/register","name":"user.register","action":"App\Http\Controllers\Frontpage\AuthController@register"},{"host":null,"methods":["GET","HEAD"],"uri":"product\/detail\/{product_code}","name":"product.detail","action":"App\Http\Controllers\Frontpage\DetailProductController@index"},{"host":null,"methods":["POST"],"uri":"category\/search","name":"category.search","action":"App\Http\Controllers\Frontpage\CategoryController@search"},{"host":null,"methods":["GET","HEAD"],"uri":"category\/{slug}\/{search}","name":"category.detail","action":"App\Http\Controllers\Frontpage\CategoryController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"wishlist\/get","name":"get.wishlist","action":"App\Http\Controllers\Frontpage\WishlistController@getData"},{"host":null,"methods":["GET","HEAD"],"uri":"wishlist","name":"wishlist.index","action":"App\Http\Controllers\Frontpage\WishlistController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"wishlist\/create","name":"wishlist.create","action":"App\Http\Controllers\Frontpage\WishlistController@create"},{"host":null,"methods":["POST"],"uri":"wishlist","name":"wishlist.store","action":"App\Http\Controllers\Frontpage\WishlistController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"wishlist\/{wishlist}","name":"wishlist.show","action":"App\Http\Controllers\Frontpage\WishlistController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"wishlist\/{wishlist}\/edit","name":"wishlist.edit","action":"App\Http\Controllers\Frontpage\WishlistController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"wishlist\/{wishlist}","name":"wishlist.update","action":"App\Http\Controllers\Frontpage\WishlistController@update"},{"host":null,"methods":["DELETE"],"uri":"wishlist\/{wishlist}","name":"wishlist.destroy","action":"App\Http\Controllers\Frontpage\WishlistController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"whislist\/delete\/{wishlist}","name":null,"action":"App\Http\Controllers\Frontpage\WishlistController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"cart\/get","name":"get.cart","action":"App\Http\Controllers\Frontpage\CartController@getData"},{"host":null,"methods":["GET","HEAD"],"uri":"cart\/delete\/{id}","name":"cart.delete","action":"App\Http\Controllers\Frontpage\CartController@delete"},{"host":null,"methods":["POST"],"uri":"cart\/change-qty","name":"cart.change_qty","action":"App\Http\Controllers\Frontpage\CartController@changeQty"},{"host":null,"methods":["GET","HEAD"],"uri":"cart","name":"cart.index","action":"App\Http\Controllers\Frontpage\CartController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"cart\/create","name":"cart.create","action":"App\Http\Controllers\Frontpage\CartController@create"},{"host":null,"methods":["POST"],"uri":"cart","name":"cart.store","action":"App\Http\Controllers\Frontpage\CartController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"cart\/{cart}","name":"cart.show","action":"App\Http\Controllers\Frontpage\CartController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"cart\/{cart}\/edit","name":"cart.edit","action":"App\Http\Controllers\Frontpage\CartController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"cart\/{cart}","name":"cart.update","action":"App\Http\Controllers\Frontpage\CartController@update"},{"host":null,"methods":["DELETE"],"uri":"cart\/{cart}","name":"cart.destroy","action":"App\Http\Controllers\Frontpage\CartController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"payment","name":"payment.index","action":"App\Http\Controllers\Frontpage\PaymentController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"payment\/create","name":"payment.create","action":"App\Http\Controllers\Frontpage\PaymentController@create"},{"host":null,"methods":["POST"],"uri":"payment","name":"payment.store","action":"App\Http\Controllers\Frontpage\PaymentController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"payment\/{payment}","name":"payment.show","action":"App\Http\Controllers\Frontpage\PaymentController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"payment\/{payment}\/edit","name":"payment.edit","action":"App\Http\Controllers\Frontpage\PaymentController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"payment\/{payment}","name":"payment.update","action":"App\Http\Controllers\Frontpage\PaymentController@update"},{"host":null,"methods":["DELETE"],"uri":"payment\/{payment}","name":"payment.destroy","action":"App\Http\Controllers\Frontpage\PaymentController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"checkout","name":"checkout","action":"App\Http\Controllers\Frontpage\CheckoutController@index"},{"host":null,"methods":["POST"],"uri":"checkout\/store","name":"checkout.store","action":"App\Http\Controllers\Frontpage\CheckoutController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"testimoni","name":"testimoni.index","action":"App\Http\Controllers\Frontpage\TestimoniController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"testimoni\/create","name":"testimoni.create","action":"App\Http\Controllers\Frontpage\TestimoniController@create"},{"host":null,"methods":["POST"],"uri":"testimoni","name":"testimoni.store","action":"App\Http\Controllers\Frontpage\TestimoniController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"testimoni\/{testimoni}","name":"testimoni.show","action":"App\Http\Controllers\Frontpage\TestimoniController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"testimoni\/{testimoni}\/edit","name":"testimoni.edit","action":"App\Http\Controllers\Frontpage\TestimoniController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"testimoni\/{testimoni}","name":"testimoni.update","action":"App\Http\Controllers\Frontpage\TestimoniController@update"},{"host":null,"methods":["DELETE"],"uri":"testimoni\/{testimoni}","name":"testimoni.destroy","action":"App\Http\Controllers\Frontpage\TestimoniController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"contact","name":"contact.index","action":"App\Http\Controllers\Frontpage\AboutController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"contact\/create","name":"contact.create","action":"App\Http\Controllers\Frontpage\AboutController@create"},{"host":null,"methods":["POST"],"uri":"contact","name":"contact.store","action":"App\Http\Controllers\Frontpage\AboutController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"contact\/{contact}","name":"contact.show","action":"App\Http\Controllers\Frontpage\AboutController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"contact\/{contact}\/edit","name":"contact.edit","action":"App\Http\Controllers\Frontpage\AboutController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"contact\/{contact}","name":"contact.update","action":"App\Http\Controllers\Frontpage\AboutController@update"},{"host":null,"methods":["DELETE"],"uri":"contact\/{contact}","name":"contact.destroy","action":"App\Http\Controllers\Frontpage\AboutController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"account","name":"account.profil","action":"App\Http\Controllers\Frontpage\AccountController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"account\/history\/transaksi","name":"account.history","action":"App\Http\Controllers\Frontpage\AccountController@historyTransaksi"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/size\/{color_id}","name":"get.size","action":"App\Http\Controllers\Frontpage\APIController@size"},{"host":null,"methods":["POST"],"uri":"api\/cart","name":null,"action":"App\Http\Controllers\Frontpage\APIController@cart"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/get-cart","name":null,"action":"App\Http\Controllers\Frontpage\APIController@getCart"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/category\/filter","name":null,"action":"App\Http\Controllers\Frontpage\CategoryController@filter"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/province","name":"rajaongkir.province","action":"App\Http\Controllers\Frontpage\APIController@province"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/city","name":"rajaongkir.city","action":"App\Http\Controllers\Frontpage\APIController@city"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/cost","name":"rajaongkir.cost","action":"App\Http\Controllers\Frontpage\APIController@cost"},{"host":null,"methods":["POST"],"uri":"api\/product\/filter","name":"product.filter","action":"App\Http\Controllers\Frontpage\CategoryController@productFilter"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard","name":null,"action":"App\Http\Controllers\Dashboard\IndexController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/product","name":"product.index","action":"App\Http\Controllers\Dashboard\ProductController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/product\/create","name":"product.create","action":"App\Http\Controllers\Dashboard\ProductController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/product","name":"product.store","action":"App\Http\Controllers\Dashboard\ProductController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/product\/{product}","name":"product.show","action":"App\Http\Controllers\Dashboard\ProductController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/product\/{product}\/edit","name":"product.edit","action":"App\Http\Controllers\Dashboard\ProductController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/product\/{product}","name":"product.update","action":"App\Http\Controllers\Dashboard\ProductController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/product\/{product}","name":"product.destroy","action":"App\Http\Controllers\Dashboard\ProductController@destroy"},{"host":null,"methods":["POST"],"uri":"dashboard\/product\/status\/change","name":"product.change-status","action":"App\Http\Controllers\Dashboard\ProductController@changeStatus"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/product\/image\/delete\/{id}","name":"product.image.delete","action":"App\Http\Controllers\Dashboard\ImageController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/category","name":"category.index","action":"App\Http\Controllers\Dashboard\CategoryController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/category\/create","name":"category.create","action":"App\Http\Controllers\Dashboard\CategoryController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/category","name":"category.store","action":"App\Http\Controllers\Dashboard\CategoryController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/category\/{category}","name":"category.show","action":"App\Http\Controllers\Dashboard\CategoryController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/category\/{category}\/edit","name":"category.edit","action":"App\Http\Controllers\Dashboard\CategoryController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/category\/{category}","name":"category.update","action":"App\Http\Controllers\Dashboard\CategoryController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/category\/{category}","name":"category.destroy","action":"App\Http\Controllers\Dashboard\CategoryController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/bank","name":"bank.index","action":"App\Http\Controllers\Dashboard\BankController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/bank\/create","name":"bank.create","action":"App\Http\Controllers\Dashboard\BankController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/bank","name":"bank.store","action":"App\Http\Controllers\Dashboard\BankController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/bank\/{bank}","name":"bank.show","action":"App\Http\Controllers\Dashboard\BankController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/bank\/{bank}\/edit","name":"bank.edit","action":"App\Http\Controllers\Dashboard\BankController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/bank\/{bank}","name":"bank.update","action":"App\Http\Controllers\Dashboard\BankController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/bank\/{bank}","name":"bank.destroy","action":"App\Http\Controllers\Dashboard\BankController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/banner","name":"banner.index","action":"App\Http\Controllers\Dashboard\BannerController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/banner\/create","name":"banner.create","action":"App\Http\Controllers\Dashboard\BannerController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/banner","name":"banner.store","action":"App\Http\Controllers\Dashboard\BannerController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/banner\/{banner}","name":"banner.show","action":"App\Http\Controllers\Dashboard\BannerController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/banner\/{banner}\/edit","name":"banner.edit","action":"App\Http\Controllers\Dashboard\BannerController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/banner\/{banner}","name":"banner.update","action":"App\Http\Controllers\Dashboard\BannerController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/banner\/{banner}","name":"banner.destroy","action":"App\Http\Controllers\Dashboard\BannerController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/slider","name":"slider.index","action":"App\Http\Controllers\Dashboard\SliderController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/slider\/create","name":"slider.create","action":"App\Http\Controllers\Dashboard\SliderController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/slider","name":"slider.store","action":"App\Http\Controllers\Dashboard\SliderController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/slider\/{slider}","name":"slider.show","action":"App\Http\Controllers\Dashboard\SliderController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/slider\/{slider}\/edit","name":"slider.edit","action":"App\Http\Controllers\Dashboard\SliderController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/slider\/{slider}","name":"slider.update","action":"App\Http\Controllers\Dashboard\SliderController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/slider\/{slider}","name":"slider.destroy","action":"App\Http\Controllers\Dashboard\SliderController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/voucher","name":"voucher.index","action":"App\Http\Controllers\Dashboard\VoucherController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/voucher\/create","name":"voucher.create","action":"App\Http\Controllers\Dashboard\VoucherController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/voucher","name":"voucher.store","action":"App\Http\Controllers\Dashboard\VoucherController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/voucher\/{voucher}","name":"voucher.show","action":"App\Http\Controllers\Dashboard\VoucherController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/voucher\/{voucher}\/edit","name":"voucher.edit","action":"App\Http\Controllers\Dashboard\VoucherController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/voucher\/{voucher}","name":"voucher.update","action":"App\Http\Controllers\Dashboard\VoucherController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/voucher\/{voucher}","name":"voucher.destroy","action":"App\Http\Controllers\Dashboard\VoucherController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/user","name":"user.index","action":"App\Http\Controllers\Dashboard\UserController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/user\/create","name":"user.create","action":"App\Http\Controllers\Dashboard\UserController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/user","name":"user.store","action":"App\Http\Controllers\Dashboard\UserController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/user\/{user}","name":"user.show","action":"App\Http\Controllers\Dashboard\UserController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/user\/{user}\/edit","name":"user.edit","action":"App\Http\Controllers\Dashboard\UserController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/user\/{user}","name":"user.update","action":"App\Http\Controllers\Dashboard\UserController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/user\/{user}","name":"user.destroy","action":"App\Http\Controllers\Dashboard\UserController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/user\/export","name":null,"action":"App\Http\Controllers\Dashboard\UserController@export"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-testimoni","name":"dashboard-testimoni.index","action":"App\Http\Controllers\Dashboard\TestimoniController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-testimoni\/create","name":"dashboard-testimoni.create","action":"App\Http\Controllers\Dashboard\TestimoniController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/dashboard-testimoni","name":"dashboard-testimoni.store","action":"App\Http\Controllers\Dashboard\TestimoniController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-testimoni\/{dashboard_testimoni}","name":"dashboard-testimoni.show","action":"App\Http\Controllers\Dashboard\TestimoniController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-testimoni\/{dashboard_testimoni}\/edit","name":"dashboard-testimoni.edit","action":"App\Http\Controllers\Dashboard\TestimoniController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/dashboard-testimoni\/{dashboard_testimoni}","name":"dashboard-testimoni.update","action":"App\Http\Controllers\Dashboard\TestimoniController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/dashboard-testimoni\/{dashboard_testimoni}","name":"dashboard-testimoni.destroy","action":"App\Http\Controllers\Dashboard\TestimoniController@destroy"},{"host":null,"methods":["POST"],"uri":"dashboard\/image","name":"image.upload","action":"App\Http\Controllers\Dashboard\ImageController@upload"},{"host":null,"methods":["POST"],"uri":"dashboard\/size","name":"size.store","action":"App\Http\Controllers\Dashboard\SizeController@store"},{"host":null,"methods":["POST"],"uri":"dashboard\/size\/update","name":"size.update","action":"App\Http\Controllers\Dashboard\SizeController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/size\/edit\/{id}","name":"size.edit","action":"App\Http\Controllers\Dashboard\SizeController@edit"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/size\/delete\/{id}","name":"size.delete","action":"App\Http\Controllers\Dashboard\SizeController@delete"},{"host":null,"methods":["POST"],"uri":"dashboard\/color","name":"color.store","action":"App\Http\Controllers\Dashboard\ColorController@store"},{"host":null,"methods":["POST"],"uri":"dashboard\/color\/update","name":"color.update","action":"App\Http\Controllers\Dashboard\ColorController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/color\/edit\/{id}","name":"color.edit","action":"App\Http\Controllers\Dashboard\ColorController@edit"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/color\/delete\/{id}","name":"color.delete","action":"App\Http\Controllers\Dashboard\ColorController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/sosmed","name":"sosmed.index","action":"App\Http\Controllers\Dashboard\SosmedController@index"},{"host":null,"methods":["POST"],"uri":"dashboard\/sosmed\/update","name":"sosmed.update","action":"App\Http\Controllers\Dashboard\SosmedController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-order","name":"dashboard-order.index","action":"App\Http\Controllers\Dashboard\OrderController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-order\/create","name":"dashboard-order.create","action":"App\Http\Controllers\Dashboard\OrderController@create"},{"host":null,"methods":["POST"],"uri":"dashboard\/dashboard-order","name":"dashboard-order.store","action":"App\Http\Controllers\Dashboard\OrderController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-order\/{dashboard_order}","name":"dashboard-order.show","action":"App\Http\Controllers\Dashboard\OrderController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dashboard-order\/{dashboard_order}\/edit","name":"dashboard-order.edit","action":"App\Http\Controllers\Dashboard\OrderController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"dashboard\/dashboard-order\/{dashboard_order}","name":"dashboard-order.update","action":"App\Http\Controllers\Dashboard\OrderController@update"},{"host":null,"methods":["DELETE"],"uri":"dashboard\/dashboard-order\/{dashboard_order}","name":"dashboard-order.destroy","action":"App\Http\Controllers\Dashboard\OrderController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard\/dasboard-order\/get-payment\/{order_id}","name":"order-dashboard.get.payment.order","action":"App\Http\Controllers\Dashboard\OrderController@getPayment"},{"host":null,"methods":["POST"],"uri":"dashboard\/dasboard-order\/approve","name":"order-dashboard.set.approve","action":"App\Http\Controllers\Dashboard\OrderController@approve"},{"host":null,"methods":["POST"],"uri":"dashboard\/dasboard-order\/send","name":"order-dashboard.set.send","action":"App\Http\Controllers\Dashboard\OrderController@send"},{"host":null,"methods":["POST"],"uri":"dashboard\/dasboard-order\/done","name":"order-dashboard.set.done","action":"App\Http\Controllers\Dashboard\OrderController@done"},{"host":null,"methods":["POST"],"uri":"dashboard\/dasboard-order\/cancel","name":"order-dashboard.set.cancel","action":"App\Http\Controllers\Dashboard\OrderController@cancel"},{"host":null,"methods":["POST"],"uri":"dashboard\/dasboard-order\/filter","name":"order-dashboard.filter","action":"App\Http\Controllers\Dashboard\OrderController@filter"},{"host":null,"methods":["GET","HEAD"],"uri":"logout","name":null,"action":"App\Http\Controllers\HomeController@revoke"},{"host":null,"methods":["GET","HEAD"],"uri":"login","name":"login","action":"App\Http\Controllers\Auth\LoginController@showLoginForm"},{"host":null,"methods":["POST"],"uri":"login","name":null,"action":"App\Http\Controllers\Auth\LoginController@login"},{"host":null,"methods":["POST"],"uri":"logout","name":"logout","action":"App\Http\Controllers\Auth\LoginController@logout"},{"host":null,"methods":["GET","HEAD"],"uri":"register","name":"register","action":"App\Http\Controllers\Auth\RegisterController@showRegistrationForm"},{"host":null,"methods":["POST"],"uri":"register","name":null,"action":"App\Http\Controllers\Auth\RegisterController@register"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset","name":"password.request","action":"App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm"},{"host":null,"methods":["POST"],"uri":"password\/email","name":"password.email","action":"App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset\/{token}","name":"password.reset","action":"App\Http\Controllers\Auth\ResetPasswordController@showResetForm"},{"host":null,"methods":["POST"],"uri":"password\/reset","name":"password.update","action":"App\Http\Controllers\Auth\ResetPasswordController@reset"},{"host":null,"methods":["GET","HEAD"],"uri":"home","name":"home","action":"App\Http\Controllers\HomeController@index"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);

