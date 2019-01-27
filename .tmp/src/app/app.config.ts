export class AppConfig {

  /* Parse Server URL */
  public static get SERVER_URL(): string {
    return 'https://nearmev4.quanlabs.com/parse';
  }

  /* Parse App ID  */
  public static get APP_ID(): string {
    return 'myAppId';
  }

  /* Google Maps API Key */
  public static get GOOGLE_MAPS_API_KEY(): string {
    return 'AIzaSyCyl-AkaRDB5oKekmKn87p_27evrotVEQw';
  }

  /* AdMob Banner ID  */
  public static get BANNER_ID(): string {
    return '';
  }

  /* Google Analytics Tracking ID  */
  public static get TRACKING_ID(): string {
    return '';
  }

  /* Header color (only Android Multitask view)  */
  public static get HEADER_COLOR(): string {
    return '#FF7676';
  }

  /* Unit: km or mi  */
  public static get DEFAULT_UNIT(): string {
    return 'mi';
  }

  public static get DEFAULT_LANG(): string {
    return 'en';
  }
}
