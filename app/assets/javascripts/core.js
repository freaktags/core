//= require jquery/jquery
//= require bootstrap/bootstrap
//= require bootbox/bootbox
//= require moment/moment
//= require moment/locale/pt-br
//= require medium-editor
//= require_self

$(function(){
  /**
   * FreakTags Front-end Core
   * @type {Object}
   */
  var FreakTags = {
    version: $("#freaktags-version").val(),
    locale: $("#freaktags-locale").val(),
    dateFormat: "ddd, DD MMM YYYY HH:mm:ss ZZ", // RFC822 Pattern
    CSRF: $('meta[name=csrf-token]').attr('content'),

    /**
     * Booting up front-end core
     * @return {Function}
     */
    init: function() {
      this._momentInit();
      this._mediumInit();
      this._tooltipInit();
      this._bootboxInit();
    },

    /**
     * MomentJS Locale and live update settings
     * @return {Function}
     */
    _momentInit: function() {
      moment.locale(FreakTags.locale);
      FreakTags._momentUpdate();
      setInterval(FreakTags._momentUpdate, 60000);
    },

    /**
     * MomentJS Live update on date/time inputs
     * @return {Function}
     */
    _momentUpdate: function(){
      $("date, time").each(function(i, e) {
        var d = moment.utc($(e).data("source"), FreakTags.dateFormat);
        $(e).html(d.fromNow());
      });
    },

    /**
     * Bootbox buttons init
     * @return {[type]} [description]
     */
    _bootboxInit: function() {

      /* Delete button */
      $("a[data-destroy]").on("click", function (e){
        var self = $(this);
        var link = self.attr('href');
        var message = self.data("destroy-message");
        e.preventDefault();
        bootbox.confirm(message, function(result){
          if (result) {
            window.location.href = link;
          }
        });
      });
    },

    /**
     * Medium editor start
     * @return {Function}
     */
    _mediumInit: function() {
      var e = new MediumEditor('.html-editor', {
        buttonLabels: 'fontawesome',
        cleanPastedHTML: false,
        forcePlainText: false
      });
    },

    /**
     * Bootstrap tooltip ini
     * @return {function}
     */
    _tooltipInit: function() {
       $("[title]").tooltip();
    }
  };

  // Booting up core
  FreakTags.init();
});

