$(document).ready(function () {
  if (!$(".License .widget-content span").hasClass("licenses")) {
    $("body").append("<span class=\"licenses\"></span>");
  }
  $('#data-count').each(function () {
    var _0x1cdf27 = window.atob("aHR0cHM6Ly9CRHRoZW1lWC5ibG9nc3BvdC5jb20==");
    var _0x1ca25f = $(this).attr("data-label");
    $.ajax({
      'url': _0x1cdf27 + '/feeds/posts/default/-/' + _0x1ca25f + '?alt=json-in-script',
      'type': 'get',
      'dataType': "jsonp",
      'success': function (_0x416c1a) {
        var _0x25670e = _0x416c1a.feed.openSearch$totalResults.$t;
        $('#data-count').text(_0x25670e);
      }
    });
  });
  $('.licenses').each(function () {
    var _0x30dd60 = window.atob("aHR0cHM6Ly9CRHRoZW1lWC5ibG9nc3BvdC5jb20==");
    var _0x547c38 = $(this).attr("data-label");
    var _0x2d836e = $(this).attr('data-url');
    var _0x2876fd = $("#data-count").text();
    if ($(this).attr("data-licenses") == '') {
      var _0x4b52e4 = _0x547c38;
    } else {
      var _0x4b52e4 = $(this).attr("data-licenses");
    }
    if (_0x2876fd == 0x0) {
      var _0x4d5e8b = '';
    } else {
      var _0x4d5e8b = "/-/" + _0x547c38 + '';
    }
    $.ajax({
      'url': _0x30dd60 + "/feeds/posts/default" + _0x4d5e8b + "?alt=json-in-script",
      'type': "get",
      'dataType': "jsonp",
      'success': function (_0x55846f) {
        var _0x19f98c = '';
        var _0x3c2bd9 = "<ul id=\"licenses\" style=\"display:none!important\">";
        for (var _0x164aae = 0x0; _0x164aae < _0x55846f.feed.entry.length; _0x164aae++) {
          for (var _0x59c50e = 0x0; _0x59c50e < _0x55846f.feed.entry[_0x164aae].link.length; _0x59c50e++) {
            if (_0x55846f.feed.entry[_0x164aae].link[_0x59c50e].rel == 'alternate') {
              _0x19f98c = _0x55846f.feed.entry[_0x164aae].link[_0x59c50e].href;
              break;
            }
          }
          var _0xba4f4c = _0x55846f.feed.entry[_0x164aae].title.$t;
          var _0x13bde4 = _0x55846f.feed.entry[_0x164aae].content.$t;
          for (var _0x4e0947 = 0x0; _0x4e0947 < _0x55846f.feed.entry[_0x164aae].category.length; _0x4e0947++) {
            var _0x3f959f = _0x55846f.feed.entry[_0x164aae].category[_0x4e0947].term;
          }
          _0x3c2bd9 += "<li>" + _0xba4f4c + " " + _0x13bde4 + " " + _0x3f959f + '</li>';
        }
        _0x3c2bd9 += '</ul>';
        $(".licenses").each(function () {
          $(this).parent().html(_0x3c2bd9);
        });
        function _0x409052(_0x56890e) {
          let _0x43146a = false;
          selector = "#licenses :contains('" + _0x56890e + "')";
          selectedList = $(selector);
          if (selectedList.length) {
            _0x43146a = true;
          }
          return _0x43146a;
        }
        function _0x28ea96() {
          var _0x3c3542 = 0xa;
          document.write("<div style=\"display:grid;background:#00000070;color:#fff;margin:20%;text-align:center;border:1px solid red;justify-items:center;align-items:center\"><div style=\"width:100%;background:#000;padding:10px 0px\">Theme Is Not Activated...!</div><br/><b>We Are Redirecting After...</b><br/><div id=\"CountDown\" style=\"display:flex;background:#ff0000;color:#fff;width:30px;height:30px;align-items:center;justify-content:center;border-radius:100%;border:8px double#ffffff\"></div><br/><b>Seconds.</b><br/></div>");
          $("#CountDown").html(_0x3c3542);
          setInterval(function () {
            _0x3c3542--;
            $('#CountDown').html(_0x3c3542);
            if (_0x3c3542 == 0x0) {
              window.location = window.atob("aHR0cHM6Ly9CRHRoZW1lWC5ibG9nc3BvdC5jb20==");
            }
          }, 0x3e8);
        }
        ;
        function _0x406a57() {
          ans1 = _0x409052(_0x2d836e);
          ans2 = _0x409052(_0x4b52e4);
          ans3 = _0x409052('Activated');
          if (ans1 === ans2 === ans3) {
            $('#licenses').parent().html('');
          } else {
            _0x28ea96($(this));
          }
        }
        _0x406a57();
      }
    });
  });
});