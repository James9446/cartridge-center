const snes = `
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Cartridge Center</title>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script src="js/main.js"></script>
    <script>
        ! function() {
            var analytics = window.analytics = window.analytics || [];
            if (!analytics.initialize)
                if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
                else {
                    analytics.invoked = !0;
                    analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
                    analytics.factory = function(t) {
                        return function() {
                            var e = Array.prototype.slice.call(arguments);
                            e.unshift(t);
                            analytics.push(e);
                            return analytics
                        }
                    };
                    for (var t = 0; t < analytics.methods.length; t++) {
                        var e = analytics.methods[t];
                        analytics[e] = analytics.factory(e)
                    }
                    analytics.load = function(t, e) {
                        var n = document.createElement("script");
                        n.type = "text/javascript";
                        n.async = !0;
                        n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(n, a);
                        analytics._loadOptions = e
                    };
                    analytics.SNIPPET_VERSION = "4.1.0";
                    analytics.load("xQ2ZFnTRkpV6hNrDTURThOh6zxcqv4Qv");
                    analytics.page();
                }
        }();
    </script>
</head>

<body>

    <header>
        <nav class="nav-container">
            <div class="nav-sub-1">
                <!-- <div class="nav">Cartridge Center</div>
            <div class="nav">NES</div>
            <div class="nav">Super Nintendo</div>
            <div class="nav">N64</div> -->
                <!-- <div class="nav">HOME</div> -->
                <div class="nav">
                    <a href="index.html">
                        <image src="/images/nintendo_controller.png" height="200px" width="200px"></image>
                    </a>
                </div>
                <div class="nav-active">
                    <a href="snes.html">
                        <image src="/images/super_nintendo_controller.png" height="200px" width="200px"></image>
                    </a>
                </div>
                <div class="nav">
                    <a href="n64.html">
                        <image src="/images/N64_controller.png" height="200px" width="200px"></image>
                    </a>
                </div>
            </div>

            <!-- <div class="nav-sub-2">
            <div class="search">
                <input type="text" class="search-input" placeholder="Search">
            </div>
            <div class="nav login">Login</div>
        </div> -->
        </nav>
    </header>

    <!-- <p>I am building a directory of the sweetest travel destinations.</p>
    <form name="travel">
        What is your favorite travel destination?
        <input name="destination" required="" size="81" type="text" />
        <br><br><br> Any recommendations (cool things to do, places to visit or restaurants to eat)?
        <br><br>
        <textarea cols="81" name="details" required="" rows="10">
    </textarea>
        <br><br> Name: <input name="fullname" required="" size="75" type="text" />
        <br><br> Email: <input name="email" required="" size="75" type="email" />
        <br><br>
        <input name="submit" type="submit" value="submit" />
    </form> -->

</body>

</html>`

module.exports.snes = snes;