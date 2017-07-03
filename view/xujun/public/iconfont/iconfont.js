;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M 319.893 1011.8 l 471.292 -475.279 c 12.285 -12.373 12.285 -32.434 0 -44.807 l -471.292 -475.279 c -12.287 -12.373 -32.157 -12.373 -44.447 0 c -12.239 12.372 -12.239 32.416 0 44.807 l 449.093 452.885 l -449.093 452.862 c -12.239 12.395 -12.239 32.441 0 44.813 c 6.123 6.183 14.186 9.289 22.244 9.289 c 8.02 0 16.038 -3.107 22.203 -9.29 Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M733.230545 959.790545c-139.845818-148.270545-279.691636-296.541091-419.514182-444.811636 138.658909-152.203636 277.364364-304.384 416.046545-456.587636 25.204364-27.648-15.825455-68.933818-41.146182-41.146182C543.581091 176.407273 398.545455 335.569455 253.533091 494.731636c-11.729455 12.869818-9.029818 28.625455-0.325818 39.074909 1.256727 2.373818 2.746182 4.724364 4.864 6.935273 144.686545 153.390545 289.349818 306.804364 434.013091 460.171636C717.893818 1028.258909 758.946909 987.042909 733.230545 959.790545z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)