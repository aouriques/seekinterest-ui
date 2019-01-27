var AppConfig = (function () {
    function AppConfig() {
    }
    Object.defineProperty(AppConfig, "SERVER_URL", {
        /* Parse Server URL */
        get: function () {
            return 'https://nearmev4.quanlabs.com/parse';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "APP_ID", {
        /* Parse App ID  */
        get: function () {
            return 'myAppId';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "GOOGLE_MAPS_API_KEY", {
        /* Google Maps API Key */
        get: function () {
            return 'AIzaSyCyl-AkaRDB5oKekmKn87p_27evrotVEQw';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "BANNER_ID", {
        /* AdMob Banner ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "TRACKING_ID", {
        /* Google Analytics Tracking ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "HEADER_COLOR", {
        /* Header color (only Android Multitask view)  */
        get: function () {
            return '#FF7676';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_UNIT", {
        /* Unit: km or mi  */
        get: function () {
            return 'mi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_LANG", {
        get: function () {
            return 'en';
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());
export { AppConfig };
//# sourceMappingURL=app.config.js.map