(function () {
  "use strict";

  if (navigator.cookieEnabled && document.cookie.split(/[;=\s]+/).indexOf("welcome-animation") == -1) {
    const svgSource =
      // Enter the SVG code surrounded by backticks (`). See the example below and replace it with your own code. Source of current image: https://upload.wikimedia.org/wikipedia/commons/2/22/James_Webb_Space_Telescope_logo.svg
      `<svg width="513" height="600" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>James Webb Space Telescope logo</title>
      <g transform="matrix(6.0641 0 0 6.0641 -5479.8 -4046.4)" fill="#002b7c">
       <path d="m950.53 698.39-3.0976 3.2109 0.22265 3.4766 3.2031 0.88282 2.9219-2.9141-0.36328-3.9922z"/>
       <path d="m967.83 697.86-3.0547 3.6172 0.13281 3.2148 2.3711 0.47656 3.0781-3.9297-0.16406-3.0977z"/>
       <path d="m970.22 714.61 0.17187-3.3164-2.625-0.44921-2.9414 3.2031-0.19531 3.0234 2.5898 0.62109z"/>
       <path d="m944.68 708.61-0.0391 3.1484 2.7461 0.83203 2.8984-2.457-0.0938-3.1094-2.8516-0.78906z"/>
       <path d="m973.7 706.67-0.0664-3.9141-2.3398-0.26953-3.0312 3.8711-0.0117 3.0391 2.6719 0.46093z"/>
       <path d="m958.95 725.41 0.49219-3.7148-2.1328-0.58985-3.1133 2.6641-0.52344 3.4492 2.2617 0.67187z"/>
       <path d="m966.34 722.36 0.32032-3.2461-2.6016-0.62109-3.0586 2.918-0.48047 3.6406 2.168 0.55079z"/>
       <path d="m957.08 696.14-2.4726 2.7344 0.33984 3.7344 2.4336 0.56641 2.5234-2.875-0.33593-3.707z"/>
       <path d="m944.18 720.95-0.39062 2.9883 2.207 0.76172 3.5195-2.6719 0.30859-3.0703-2.207-0.76562z"/>
       <path d="m941.23 715.36-0.32422 3.5312 2.3828 0.83594 3.3672-2.7031 0.17187-3.0312-2.8711-0.87109z"/>
       <path d="m953.93 714.62 0.0391-2.0508-0.48828-0.58204-2.2539-0.66796-2.875 2.4336-0.17188 3.043 2.3867 0.82812z"/>
       <path d="m956.4 719.91 0.22656-3.4844-0.0742-0.10938-1.7695-0.44531-3.4492 3.0742-0.29297 2.9375 2.2656 0.67187z"/>
       <path d="m960.96 701.38-2.668 3.043 0.11328 3.4062 0.0859 0.12891 1.8516 0.46094 3.0742-3.3789-0.13281-3.1953z"/>
       <path d="m961.23 709.67-0.0781 2.3789 0.12891 0.19531 2.6484 0.55469 2.8047-3.0586 0.0117-3.1406-2.3008-0.46094z"/>
       <path d="m951.7 706.82 0.043 1.5781 0.80469-1.6914 0.94922-0.375 1.2891 0.19922 2.1094 1.1055-0.10156-3.0508-2.3125-0.54297z"/>
       <path d="m963.1 717.32 0.20703-3.1094-2.7812-0.58203-2.4102 2.3203 0.0469 0.0664-0.24219 3.7031 2.0703 0.57422z"/>
       <path d="m958.12 695.26 0.0938-0.12891-0.0273-8e-3z"/>
       <path d="m952 727.24 0.47266-3.3242-2.0547-0.58594-3.1953 2.4688-0.22266 1.4844 3.6758 1.0039z"/>
       <path d="m922.8 691.55-0.53906 3.7773-3.7539 0.69922 3.7773 0.53907 0.70312 3.7539 0.53907-3.7773 3.75-0.70313-3.7774-0.53906z"/>
       <path d="m928.43 705.96c-0.0977-0.082-0.1875-0.16797-0.31641-0.21485-0.39453-0.14062-0.80078 0.0117-1.1094 0.17578-0.15625 0.10157-0.30469 0.22266-0.4375 0.35938 0.14843-0.0586 0.29687-0.0938 0.45703-0.0586 0.66406 0.14062 1.0469 1.1875 0.88281 2.3906-0.0938 0.67578-0.47656 1.7461-1.0938 2.5586-0.0664 0.0898-0.13281 0.17579-0.21875 0.25391-0.15234 0.17188-0.3125 0.33203-0.48828 0.45703-0.46485 0.33985-0.95703 0.46485-1.4609 0.375-0.0195 0-0.55469-0.0859-0.92578-0.67969-0.46484-0.74218-0.45313-1.918 0.0352-3.4805 0.043-0.14063 0.96093-2.9102 2.8047-5.0078-0.91015 0.8086-2.1484 2.4141-3.2109 5.5547-0.0117 0.0352-1.1367 3.8867 1.1016 5.0039 0.0742 0.0351 0.15234 0.0703 0.23437 0.10156 0.0977 0.0117 3.1055 0.45703 4.2891-4.3086 4e-3 -0.0156 0.23437-1.1797 0.082-2.2148z"/>
       <path d="m925.43 707.53c0.10156-0.69922 0.84375-1.5703 1.1133-1.7344 0.0742-0.043 0.16406-0.0977 0.25781-0.14844 0.39453-0.26562 0.83594-0.42187 1.2578-0.44531l-0.48437-0.98047c-0.26172 0.11719-0.51563 0.25781-0.72266 0.42187-0.043 0.0234-1.9414 1.0859-2.6641 4.8906-0.0703 0.35547-0.10547 1.4688 0.37109 1.9492 0.20313 0.20703 0.47657 0.27734 0.82813 0.21094 0.19531-0.0312 0.45312-0.12891 0.69531-0.28125-0.21875 0.043-0.44922 0.0273-0.66016-0.125-0.64453-0.46094-0.92578-1.6758 4e-3 -3.7305z"/>
       <path d="m925.68 715.96c0.625-0.29687 1.4023-0.78515 2.0938-1.5586 0.96093-1.0781 1.9492-2.8047 2.4141-4.8711l-0.42578-0.8711c-0.0352 0.2461-0.0703 0.49219-0.12891 0.76953-8e-3 0.0391-0.71094 3.957-3.9531 6.5312"/>
       <path d="m929.61 689.39c2.7969 8e-3 6.9453-1.0586 10.203-4.0781 1.4648-1.5195 2.0508-2.9141 1.6914-4.0195-0.3711-1.1406-1.6289-1.7539-2.6758-1.9336-0.0547-0.0195-2.9102-1.0195-7.5234 1.7383-0.50782 0.30078-1.6445 1.2852-1.707 2.2305-0.0274 0.42188 0.16406 0.79688 0.57421 1.1172 0.29688 0.23828 0.81641 0.48047 1.3438 0.55078 0.0352 0 0.0664-4e-3 0.0977-4e-3 -0.39453-0.16797-0.79687-0.45703-0.84766-0.96094-0.10937-1.0508 0.86719-2.4062 3.7891-3.3086l0.0391-0.0274c0.78906-0.51953 2.3281-0.57031 2.7266-0.42578 0.10938 0.0312 0.24219 0.0742 0.38281 0.125 0.92969 0.23438 1.7344 0.78125 2.0469 1.5195 0.34766 0.83594 0.37891 2.5547-3.375 4.6875-0.0469 0.0312-5.0938 3.1133-10.973 1.7383 0.875 0.45703 2.3594 1.0469 4.207 1.0508"/>
       <path d="m932.47 679.5c0.0508-0.0234 4.582-1.9726 8.7969-1.6328-0.0859-0.0234-0.18359-0.0508-0.28515-0.0742-1.5078-0.35937-4.5156-0.48437-9.5195 1.6289-0.0469 0.0234-5.4453 2.5703-4.0742 6.1445 0.0859 0.12891 2.4062 3.6992 8.4609 0.52344 0.0351-0.0195 3.8984-2.2422 3.0586-4.3633-0.25781-0.64454-0.92578-0.92969-1.418-1.0938-0.37109-0.0742-0.76172-0.0938-1.1445-0.0469 0.38672 0.0625 0.74219 0.21094 0.92187 0.52734 0.38282 0.67188-0.12109 1.9688-1.625 2.9727-0.75 0.5-2.2031 1.082-3.5898 1.1914-0.15234 0.0156-0.30078 0.0234-0.45703 8e-3 -0.30859 0-0.60938-0.0195-0.89063-0.0781-0.0234-4e-3 -0.043-0.0117-0.0625-0.0156-0.71484-0.17188-1.2539-0.54297-1.6016-1.1016-0.0117-0.0234-0.39453-0.6211-0.13281-1.5 0.33203-1.1367 1.5312-2.1758 3.5625-3.0898"/>
       <path d="m935.08 683.64c1.0273-0.60156 1.5195-1.457 1.3359-1.8828-0.0664-0.15625-0.24219-0.25781-0.47266-0.30859-0.30078-0.0742-0.6914-0.0703-1.0508-0.0234-2.2578 0.51172-3.0664 1.4805-3.0664 2.1562 0 0.39844 0.61719 0.62109 0.90235 0.69922 0.87109 0.0312 1.8086-0.32422 2.3516-0.64063"/>
       <path d="m925.73 739.21 21.641 0.0938-28.137-11.465z"/>
       <path d="m966.39 669.5-40.352-0.17578-20.328 34.855 1.7734 3.0977 5.332 2.0195-2.7188-5.0977 18.117-31.07 35.969 0.15625 7.0117 12.406-0.60156 6.2852-0.14063 0.14843-0.27734-0.0234-0.1875-0.59375-0.66406-0.34766c0.043-0.0586 0.0859-0.11719 0.1289-0.19531 0.85157-1.4648-0.69531-2.0117-0.69531-2.0117l-34.148 5.2266-0.74609-0.24609-2.8633 2.8516 0.0625 1.0039-1.0977 1.6367-0.15234 0.32032 0.0625 0.17578s-0.30078 0.32422-0.26953 0.48437c0.0352 0.15625 11.961 24.395 11.961 24.395l1.5664 0.83204-11.957-25.324 0.0781-0.15625 10.863 13.273 1.0547-0.82421-9.9766-11.832s1.3359-0.19531 1.8398-1.6094c0.50781-1.418 0.80078-1.8594 4e-3 -3.1484l14.559-2.0508 0.92968 0.54688 1.2539-0.375 14.645-3.0586-0.0938 0.10156-2.1719 0.48438-2.3242 2.8555-2.8477 0.16015-0.53125 0.14454-0.24219 0.3164 2.8203 0.95313 0.34375 3.8398 2.3398 0.46875 3.0312-3.5859-0.27734-3.2109-3.0078-0.41797 0.65235-0.82422 4.5352 0.67578 0.16407 4.2031 3.4726 0.4961 0.19922 3.918 2.9883 0.44531 0.46094 1.2969 0.64062 4.4609-0.33593 0.39063-0.3125-1.7891-0.21094-1.6094 0.0781 3.9219-2.5273 2.9492-0.20312 4.2227-3.5117 3.6211-0.45313 4.2109-4.3398 4.0195-3.1289-0.82422-4.1016 3.4922-3.8867-1.168-0.70312 0.59766-6.2969-1.4609-9.8086-4.0625-8.043-3.4023-18.176-8.2031 1.6406 2.8711 27.535 11.383-11.367-4.1758-15.086-5.3164 0.57422 1.0078 1.7344 0.92578-1.5234-0.5625 0.61328 1.082 9.168 4.2226-8.1289-2.4062 2.0391 3.5625 5.3789 2.5352 6.2109 2.2969 24.355 9.1484 10.535 0.0469-9.7226-4.4062 11.773 3.9688 3.0508-5.2344-2.707-0.62891 3.8789-1.3789 4.7539-8.1562 2.8203-4.8359-1.2305-1.9297 0.84375-3.4961-1.0156-2.7109-0.35938-0.42969 0.0117-0.16796 0.35156 0.17187c0.41407-0.45312 0.0781-1.2227 0.16407-1.293 0.24218-0.21094 0.32031-0.67578 0.32031-0.67578s0.0195-0.35156 0.17578-0.52734c0.15625-0.17969-0.0273-0.76953-0.0273-0.76953l2.1602-0.23438 0.13281 0.0977 0.34766-0.125-0.0195-0.1875-0.10938-0.30469-0.20312-0.0234-0.1875 0.16406-2.1094-0.17187s-0.23828-0.25781-0.28906-0.53516c-0.0469-0.27343-0.27344-3.293-0.27344-3.293l-0.83984-0.50781-0.30469-1.4726 0.75391-0.0742-0.0508-2.3984-2.582-0.39844-0.1836-0.51953-1.9922-0.72656-0.61719-0.29297-0.10547-0.76953 0.27734-0.66016-0.28125-0.92578 0.6211-7.25 5.0469 8.9258 2.6094 0.35547 0.0508 4.0625 2.8008 4.8945-2.0234 3.5 2.0039 4.0703 4.4023-7.5508z"/>
       <path d="m936.99 764.25 0.46484-4.5898c0.14063-1.2109 0.17188-2.4375 0.3125-3.6445h0.0781c0 1.4258 0.15625 2.8398 0.20312 4.2656l0.27735 3.9688h1.7812l1.1016-11.043h-1.332l-0.42188 4.6836c-0.10546 0.96484-0.12109 2.1602-0.16796 3.2461h-0.0781c-0.0469-1.1953-0.0625-2.2226-0.17187-3.5703l-0.33985-4.3594h-1.7812l-0.375 3.6289c-0.0742 1.4297-0.18359 2.8555-0.18359 4.2969h-0.0781c-0.0312-1.3164-0.10937-2.6211-0.20312-3.9102l-0.33985-4.0156h-1.6602l1.0078 11.043zm9.293 0v-1.4414h-2.0469v-3.8789h1.9375v-1.4414h-1.9375v-2.8398h2.0156v-1.4414h-3.6602v11.043zm2.9453-9.7852h0.375c0.41797 0 0.58985 0.18359 0.58985 0.82031v1.6758c0 0.63672-0.17188 0.82422-0.58985 0.82422h-0.375zm-1.6406 9.7852h2.3086c1.3789 0 1.9844-1.0078 1.9844-2.3242v-1.7539c0-1.2422-0.52735-1.5195-1.5625-1.7227v-0.0312c0.94531-0.21484 1.5-0.50781 1.5156-1.4726v-1.7539c0-1.1758-0.60156-1.9844-1.9219-1.9844h-2.3242zm1.6406-5.1484h0.32813c0.46484 0 0.68359 0.1875 0.68359 0.86719v2.0976c0 0.67969-0.21875 0.86719-0.68359 0.86719h-0.32813zm5.8945-4.6367h0.3711c0.42187 0 0.59375 0.18359 0.59375 0.82031v1.6758c0 0.63672-0.17188 0.82422-0.59375 0.82422h-0.3711zm-1.6406 9.7852h2.3086c1.3789 0 1.9844-1.0078 1.9844-2.3242v-1.7539c0-1.2422-0.52735-1.5195-1.5664-1.7227v-0.0312c0.94531-0.21484 1.5039-0.50781 1.5195-1.4726v-1.7539c0-1.1758-0.60547-1.9844-1.9219-1.9844h-2.3242zm1.6406-5.1484h0.32813c0.46484 0 0.68359 0.1875 0.68359 0.86719v2.0976c0 0.67969-0.21875 0.86719-0.68359 0.86719h-0.32813z"/>
      </g>
     </svg>`;
    // Specify the duration of the animation in milliseconds. See the example below and replace it with your own code.
    const animationDuration = 1500;
    // Specify the background colour of the animation using CSS standards.
    const backgroundColor = "black";

    // Thanks to Jarosław Foksa for this polyfill for SVG getPathData() and setPathData() methods (https://github.com/jarek-foksa/path-data-polyfill).
    if (!SVGPathElement.prototype.getPathData || !SVGPathElement.prototype.setPathData) {
      (function () {
        var commandsMap = {
          "Z": "Z", "M": "M", "L": "L", "C": "C", "Q": "Q", "A": "A", "H": "H", "V": "V", "S": "S", "T": "T",
          "z": "Z", "m": "m", "l": "l", "c": "c", "q": "q", "a": "a", "h": "h", "v": "v", "s": "s", "t": "t"
        };

        var Source = function (string) {
          this._string = string;
          this._currentIndex = 0;
          this._endIndex = this._string.length;
          this._prevCommand = null;
          this._skipOptionalSpaces();
        };

        var isIE = window.navigator.userAgent.indexOf("MSIE ") !== -1;

        Source.prototype = {
          parseSegment: function () {
            var char = this._string[this._currentIndex];
            var command = commandsMap[char] ? commandsMap[char] : null;

            if (command === null) {
              // Possibly an implicit command. Not allowed if this is the first command.
              if (this._prevCommand === null) {
                return null;
              }

              // Check for remaining coordinates in the current command.
              if (
                (char === "+" || char === "-" || char === "." || (char >= "0" && char <= "9")) && this._prevCommand !== "Z"
              ) {
                if (this._prevCommand === "M") {
                  command = "L";
                }
                else if (this._prevCommand === "m") {
                  command = "l";
                }
                else {
                  command = this._prevCommand;
                }
              }
              else {
                command = null;
              }

              if (command === null) {
                return null;
              }
            }
            else {
              this._currentIndex += 1;
            }

            this._prevCommand = command;

            var values = null;
            var cmd = command.toUpperCase();

            if (cmd === "H" || cmd === "V") {
              values = [this._parseNumber()];
            }
            else if (cmd === "M" || cmd === "L" || cmd === "T") {
              values = [this._parseNumber(), this._parseNumber()];
            }
            else if (cmd === "S" || cmd === "Q") {
              values = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()];
            }
            else if (cmd === "C") {
              values = [
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber()
              ];
            }
            else if (cmd === "A") {
              values = [
                this._parseNumber(),
                this._parseNumber(),
                this._parseNumber(),
                this._parseArcFlag(),
                this._parseArcFlag(),
                this._parseNumber(),
                this._parseNumber()
              ];
            }
            else if (cmd === "Z") {
              this._skipOptionalSpaces();
              values = [];
            }

            if (values === null || values.indexOf(null) >= 0) {
              // Unknown command or known command with invalid values
              return null;
            }
            else {
              return { type: command, values: values };
            }
          },

          hasMoreData: function () {
            return this._currentIndex < this._endIndex;
          },

          peekSegmentType: function () {
            var char = this._string[this._currentIndex];
            return commandsMap[char] ? commandsMap[char] : null;
          },

          initialCommandIsMoveTo: function () {
            // If the path is empty it is still valid, so return true.
            if (!this.hasMoreData()) {
              return true;
            }

            var command = this.peekSegmentType();
            // Path must start with moveTo.
            return command === "M" || command === "m";
          },

          _isCurrentSpace: function () {
            var char = this._string[this._currentIndex];
            return char <= " " && (char === " " || char === "\n" || char === "\t" || char === "\r" || char === "\f");
          },

          _skipOptionalSpaces: function () {
            while (this._currentIndex < this._endIndex && this._isCurrentSpace()) {
              this._currentIndex += 1;
            }

            return this._currentIndex < this._endIndex;
          },

          _skipOptionalSpacesOrDelimiter: function () {
            if (
              this._currentIndex < this._endIndex &&
              !this._isCurrentSpace() &&
              this._string[this._currentIndex] !== ","
            ) {
              return false;
            }

            if (this._skipOptionalSpaces()) {
              if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ",") {
                this._currentIndex += 1;
                this._skipOptionalSpaces();
              }
            }
            return this._currentIndex < this._endIndex;
          },

          // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from
          // Source/core/svg/SVGParserUtilities.cpp.
          // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
          _parseNumber: function () {
            var exponent = 0;
            var integer = 0;
            var frac = 1;
            var decimal = 0;
            var sign = 1;
            var expsign = 1;
            var startIndex = this._currentIndex;

            this._skipOptionalSpaces();

            // Read the sign.
            if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "+") {
              this._currentIndex += 1;
            }
            else if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "-") {
              this._currentIndex += 1;
              sign = -1;
            }

            if (
              this._currentIndex === this._endIndex ||
              (
                (this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") &&
                this._string[this._currentIndex] !== "."
              )
            ) {
              // The first character of a number must be one of [0-9+-.].
              return null;
            }

            // Read the integer part, build right-to-left.
            var startIntPartIndex = this._currentIndex;

            while (
              this._currentIndex < this._endIndex &&
              this._string[this._currentIndex] >= "0" &&
              this._string[this._currentIndex] <= "9"
            ) {
              this._currentIndex += 1; // Advance to first non-digit.
            }

            if (this._currentIndex !== startIntPartIndex) {
              var scanIntPartIndex = this._currentIndex - 1;
              var multiplier = 1;

              while (scanIntPartIndex >= startIntPartIndex) {
                integer += multiplier * (this._string[scanIntPartIndex] - "0");
                scanIntPartIndex -= 1;
                multiplier *= 10;
              }
            }

            // Read the decimals.
            if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ".") {
              this._currentIndex += 1;

              // There must be a least one digit following the .
              if (
                this._currentIndex >= this._endIndex ||
                this._string[this._currentIndex] < "0" ||
                this._string[this._currentIndex] > "9"
              ) {
                return null;
              }

              while (
                this._currentIndex < this._endIndex &&
                this._string[this._currentIndex] >= "0" &&
                this._string[this._currentIndex] <= "9"
              ) {
                frac *= 10;
                decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                this._currentIndex += 1;
              }
            }

            // Read the exponent part.
            if (
              this._currentIndex !== startIndex &&
              this._currentIndex + 1 < this._endIndex &&
              (this._string[this._currentIndex] === "e" || this._string[this._currentIndex] === "E") &&
              (this._string[this._currentIndex + 1] !== "x" && this._string[this._currentIndex + 1] !== "m")
            ) {
              this._currentIndex += 1;

              // Read the sign of the exponent.
              if (this._string[this._currentIndex] === "+") {
                this._currentIndex += 1;
              }
              else if (this._string[this._currentIndex] === "-") {
                this._currentIndex += 1;
                expsign = -1;
              }

              // There must be an exponent.
              if (
                this._currentIndex >= this._endIndex ||
                this._string[this._currentIndex] < "0" ||
                this._string[this._currentIndex] > "9"
              ) {
                return null;
              }

              while (
                this._currentIndex < this._endIndex &&
                this._string[this._currentIndex] >= "0" &&
                this._string[this._currentIndex] <= "9"
              ) {
                exponent *= 10;
                exponent += (this._string[this._currentIndex] - "0");
                this._currentIndex += 1;
              }
            }

            var number = integer + decimal;
            number *= sign;

            if (exponent) {
              number *= Math.pow(10, expsign * exponent);
            }

            if (startIndex === this._currentIndex) {
              return null;
            }

            this._skipOptionalSpacesOrDelimiter();

            return number;
          },

          _parseArcFlag: function () {
            if (this._currentIndex >= this._endIndex) {
              return null;
            }

            var flag = null;
            var flagChar = this._string[this._currentIndex];

            this._currentIndex += 1;

            if (flagChar === "0") {
              flag = 0;
            }
            else if (flagChar === "1") {
              flag = 1;
            }
            else {
              return null;
            }

            this._skipOptionalSpacesOrDelimiter();
            return flag;
          }
        };

        var parsePathDataString = function (string) {
          if (!string || string.length === 0) return [];

          var source = new Source(string);
          var pathData = [];

          if (source.initialCommandIsMoveTo()) {
            while (source.hasMoreData()) {
              var pathSeg = source.parseSegment();

              if (pathSeg === null) {
                break;
              }
              else {
                pathData.push(pathSeg);
              }
            }
          }

          return pathData;
        }

        var setAttribute = SVGPathElement.prototype.setAttribute;
        var removeAttribute = SVGPathElement.prototype.removeAttribute;

        var $cachedPathData = window.Symbol ? Symbol() : "__cachedPathData";
        var $cachedNormalizedPathData = window.Symbol ? Symbol() : "__cachedNormalizedPathData";

        // @info
        //   Get an array of corresponding cubic bezier curve parameters for given arc curve paramters.
        var arcToCubicCurves = function (x1, y1, x2, y2, r1, r2, angle, largeArcFlag, sweepFlag, _recursive) {
          var degToRad = function (degrees) {
            return (Math.PI * degrees) / 180;
          };

          var rotate = function (x, y, angleRad) {
            var X = x * Math.cos(angleRad) - y * Math.sin(angleRad);
            var Y = x * Math.sin(angleRad) + y * Math.cos(angleRad);
            return { x: X, y: Y };
          };

          var angleRad = degToRad(angle);
          var params = [];
          var f1, f2, cx, cy;

          if (_recursive) {
            f1 = _recursive[0];
            f2 = _recursive[1];
            cx = _recursive[2];
            cy = _recursive[3];
          }
          else {
            var p1 = rotate(x1, y1, -angleRad);
            x1 = p1.x;
            y1 = p1.y;

            var p2 = rotate(x2, y2, -angleRad);
            x2 = p2.x;
            y2 = p2.y;

            var x = (x1 - x2) / 2;
            var y = (y1 - y2) / 2;
            var h = (x * x) / (r1 * r1) + (y * y) / (r2 * r2);

            if (h > 1) {
              h = Math.sqrt(h);
              r1 = h * r1;
              r2 = h * r2;
            }

            var sign;

            if (largeArcFlag === sweepFlag) {
              sign = -1;
            }
            else {
              sign = 1;
            }

            var r1Pow = r1 * r1;
            var r2Pow = r2 * r2;

            var left = r1Pow * r2Pow - r1Pow * y * y - r2Pow * x * x;
            var right = r1Pow * y * y + r2Pow * x * x;

            var k = sign * Math.sqrt(Math.abs(left / right));

            cx = k * r1 * y / r2 + (x1 + x2) / 2;
            cy = k * -r2 * x / r1 + (y1 + y2) / 2;

            f1 = Math.asin(parseFloat(((y1 - cy) / r2).toFixed(9)));
            f2 = Math.asin(parseFloat(((y2 - cy) / r2).toFixed(9)));

            if (x1 < cx) {
              f1 = Math.PI - f1;
            }
            if (x2 < cx) {
              f2 = Math.PI - f2;
            }

            if (f1 < 0) {
              f1 = Math.PI * 2 + f1;
            }
            if (f2 < 0) {
              f2 = Math.PI * 2 + f2;
            }

            if (sweepFlag && f1 > f2) {
              f1 = f1 - Math.PI * 2;
            }
            if (!sweepFlag && f2 > f1) {
              f2 = f2 - Math.PI * 2;
            }
          }

          var df = f2 - f1;

          if (Math.abs(df) > (Math.PI * 120 / 180)) {
            var f2old = f2;
            var x2old = x2;
            var y2old = y2;

            if (sweepFlag && f2 > f1) {
              f2 = f1 + (Math.PI * 120 / 180) * (1);
            }
            else {
              f2 = f1 + (Math.PI * 120 / 180) * (-1);
            }

            x2 = cx + r1 * Math.cos(f2);
            y2 = cy + r2 * Math.sin(f2);
            params = arcToCubicCurves(x2, y2, x2old, y2old, r1, r2, angle, 0, sweepFlag, [f2, f2old, cx, cy]);
          }

          df = f2 - f1;

          var c1 = Math.cos(f1);
          var s1 = Math.sin(f1);
          var c2 = Math.cos(f2);
          var s2 = Math.sin(f2);
          var t = Math.tan(df / 4);
          var hx = 4 / 3 * r1 * t;
          var hy = 4 / 3 * r2 * t;

          var m1 = [x1, y1];
          var m2 = [x1 + hx * s1, y1 - hy * c1];
          var m3 = [x2 + hx * s2, y2 - hy * c2];
          var m4 = [x2, y2];

          m2[0] = 2 * m1[0] - m2[0];
          m2[1] = 2 * m1[1] - m2[1];

          if (_recursive) {
            return [m2, m3, m4].concat(params);
          }
          else {
            params = [m2, m3, m4].concat(params);

            var curves = [];

            for (var i = 0; i < params.length; i += 3) {
              var r1 = rotate(params[i][0], params[i][1], angleRad);
              var r2 = rotate(params[i + 1][0], params[i + 1][1], angleRad);
              var r3 = rotate(params[i + 2][0], params[i + 2][1], angleRad);
              curves.push([r1.x, r1.y, r2.x, r2.y, r3.x, r3.y]);
            }

            return curves;
          }
        };

        var clonePathData = function (pathData) {
          return pathData.map(function (seg) {
            return { type: seg.type, values: Array.prototype.slice.call(seg.values) }
          });
        };

        // @info
        //   Takes any path data, returns path data that consists only from absolute commands.
        var absolutizePathData = function (pathData) {
          var absolutizedPathData = [];

          var currentX = null;
          var currentY = null;

          var subpathX = null;
          var subpathY = null;

          pathData.forEach(function (seg) {
            var type = seg.type;

            if (type === "M") {
              var x = seg.values[0];
              var y = seg.values[1];

              absolutizedPathData.push({ type: "M", values: [x, y] });

              subpathX = x;
              subpathY = y;

              currentX = x;
              currentY = y;
            }

            else if (type === "m") {
              var x = currentX + seg.values[0];
              var y = currentY + seg.values[1];

              absolutizedPathData.push({ type: "M", values: [x, y] });

              subpathX = x;
              subpathY = y;

              currentX = x;
              currentY = y;
            }

            else if (type === "L") {
              var x = seg.values[0];
              var y = seg.values[1];

              absolutizedPathData.push({ type: "L", values: [x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "l") {
              var x = currentX + seg.values[0];
              var y = currentY + seg.values[1];

              absolutizedPathData.push({ type: "L", values: [x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "C") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x2 = seg.values[2];
              var y2 = seg.values[3];
              var x = seg.values[4];
              var y = seg.values[5];

              absolutizedPathData.push({ type: "C", values: [x1, y1, x2, y2, x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "c") {
              var x1 = currentX + seg.values[0];
              var y1 = currentY + seg.values[1];
              var x2 = currentX + seg.values[2];
              var y2 = currentY + seg.values[3];
              var x = currentX + seg.values[4];
              var y = currentY + seg.values[5];

              absolutizedPathData.push({ type: "C", values: [x1, y1, x2, y2, x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "Q") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              absolutizedPathData.push({ type: "Q", values: [x1, y1, x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "q") {
              var x1 = currentX + seg.values[0];
              var y1 = currentY + seg.values[1];
              var x = currentX + seg.values[2];
              var y = currentY + seg.values[3];

              absolutizedPathData.push({ type: "Q", values: [x1, y1, x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "A") {
              var x = seg.values[5];
              var y = seg.values[6];

              absolutizedPathData.push({
                type: "A",
                values: [seg.values[0], seg.values[1], seg.values[2], seg.values[3], seg.values[4], x, y]
              });

              currentX = x;
              currentY = y;
            }

            else if (type === "a") {
              var x = currentX + seg.values[5];
              var y = currentY + seg.values[6];

              absolutizedPathData.push({
                type: "A",
                values: [seg.values[0], seg.values[1], seg.values[2], seg.values[3], seg.values[4], x, y]
              });

              currentX = x;
              currentY = y;
            }

            else if (type === "H") {
              var x = seg.values[0];
              absolutizedPathData.push({ type: "H", values: [x] });
              currentX = x;
            }

            else if (type === "h") {
              var x = currentX + seg.values[0];
              absolutizedPathData.push({ type: "H", values: [x] });
              currentX = x;
            }

            else if (type === "V") {
              var y = seg.values[0];
              absolutizedPathData.push({ type: "V", values: [y] });
              currentY = y;
            }

            else if (type === "v") {
              var y = currentY + seg.values[0];
              absolutizedPathData.push({ type: "V", values: [y] });
              currentY = y;
            }

            else if (type === "S") {
              var x2 = seg.values[0];
              var y2 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              absolutizedPathData.push({ type: "S", values: [x2, y2, x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "s") {
              var x2 = currentX + seg.values[0];
              var y2 = currentY + seg.values[1];
              var x = currentX + seg.values[2];
              var y = currentY + seg.values[3];

              absolutizedPathData.push({ type: "S", values: [x2, y2, x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "T") {
              var x = seg.values[0];
              var y = seg.values[1]

              absolutizedPathData.push({ type: "T", values: [x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "t") {
              var x = currentX + seg.values[0];
              var y = currentY + seg.values[1]

              absolutizedPathData.push({ type: "T", values: [x, y] });

              currentX = x;
              currentY = y;
            }

            else if (type === "Z" || type === "z") {
              absolutizedPathData.push({ type: "Z", values: [] });

              currentX = subpathX;
              currentY = subpathY;
            }
          });

          return absolutizedPathData;
        };

        // @info
        //   Takes path data that consists only from absolute commands, returns path data that consists only from
        //   "M", "L", "C" and "Z" commands.
        var reducePathData = function (pathData) {
          var reducedPathData = [];
          var lastType = null;

          var lastControlX = null;
          var lastControlY = null;

          var currentX = null;
          var currentY = null;

          var subpathX = null;
          var subpathY = null;

          pathData.forEach(function (seg) {
            if (seg.type === "M") {
              var x = seg.values[0];
              var y = seg.values[1];

              reducedPathData.push({ type: "M", values: [x, y] });

              subpathX = x;
              subpathY = y;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "C") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x2 = seg.values[2];
              var y2 = seg.values[3];
              var x = seg.values[4];
              var y = seg.values[5];

              reducedPathData.push({ type: "C", values: [x1, y1, x2, y2, x, y] });

              lastControlX = x2;
              lastControlY = y2;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "L") {
              var x = seg.values[0];
              var y = seg.values[1];

              reducedPathData.push({ type: "L", values: [x, y] });

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "H") {
              var x = seg.values[0];

              reducedPathData.push({ type: "L", values: [x, currentY] });

              currentX = x;
            }

            else if (seg.type === "V") {
              var y = seg.values[0];

              reducedPathData.push({ type: "L", values: [currentX, y] });

              currentY = y;
            }

            else if (seg.type === "S") {
              var x2 = seg.values[0];
              var y2 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              var cx1, cy1;

              if (lastType === "C" || lastType === "S") {
                cx1 = currentX + (currentX - lastControlX);
                cy1 = currentY + (currentY - lastControlY);
              }
              else {
                cx1 = currentX;
                cy1 = currentY;
              }

              reducedPathData.push({ type: "C", values: [cx1, cy1, x2, y2, x, y] });

              lastControlX = x2;
              lastControlY = y2;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "T") {
              var x = seg.values[0];
              var y = seg.values[1];

              var x1, y1;

              if (lastType === "Q" || lastType === "T") {
                x1 = currentX + (currentX - lastControlX);
                y1 = currentY + (currentY - lastControlY);
              }
              else {
                x1 = currentX;
                y1 = currentY;
              }

              var cx1 = currentX + 2 * (x1 - currentX) / 3;
              var cy1 = currentY + 2 * (y1 - currentY) / 3;
              var cx2 = x + 2 * (x1 - x) / 3;
              var cy2 = y + 2 * (y1 - y) / 3;

              reducedPathData.push({ type: "C", values: [cx1, cy1, cx2, cy2, x, y] });

              lastControlX = x1;
              lastControlY = y1;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "Q") {
              var x1 = seg.values[0];
              var y1 = seg.values[1];
              var x = seg.values[2];
              var y = seg.values[3];

              var cx1 = currentX + 2 * (x1 - currentX) / 3;
              var cy1 = currentY + 2 * (y1 - currentY) / 3;
              var cx2 = x + 2 * (x1 - x) / 3;
              var cy2 = y + 2 * (y1 - y) / 3;

              reducedPathData.push({ type: "C", values: [cx1, cy1, cx2, cy2, x, y] });

              lastControlX = x1;
              lastControlY = y1;

              currentX = x;
              currentY = y;
            }

            else if (seg.type === "A") {
              var r1 = Math.abs(seg.values[0]);
              var r2 = Math.abs(seg.values[1]);
              var angle = seg.values[2];
              var largeArcFlag = seg.values[3];
              var sweepFlag = seg.values[4];
              var x = seg.values[5];
              var y = seg.values[6];

              if (r1 === 0 || r2 === 0) {
                reducedPathData.push({ type: "C", values: [currentX, currentY, x, y, x, y] });

                currentX = x;
                currentY = y;
              }
              else {
                if (currentX !== x || currentY !== y) {
                  var curves = arcToCubicCurves(currentX, currentY, x, y, r1, r2, angle, largeArcFlag, sweepFlag);

                  curves.forEach(function (curve) {
                    reducedPathData.push({ type: "C", values: curve });
                  });

                  currentX = x;
                  currentY = y;
                }
              }
            }

            else if (seg.type === "Z") {
              reducedPathData.push(seg);

              currentX = subpathX;
              currentY = subpathY;
            }

            lastType = seg.type;
          });

          return reducedPathData;
        };

        SVGPathElement.prototype.setAttribute = function (name, value) {
          if (name === "d") {
            this[$cachedPathData] = null;
            this[$cachedNormalizedPathData] = null;
          }

          setAttribute.call(this, name, value);
        };

        SVGPathElement.prototype.removeAttribute = function (name, value) {
          if (name === "d") {
            this[$cachedPathData] = null;
            this[$cachedNormalizedPathData] = null;
          }

          removeAttribute.call(this, name);
        };

        SVGPathElement.prototype.getPathData = function (options) {
          if (options && options.normalize) {
            if (this[$cachedNormalizedPathData]) {
              return clonePathData(this[$cachedNormalizedPathData]);
            }
            else {
              var pathData;

              if (this[$cachedPathData]) {
                pathData = clonePathData(this[$cachedPathData]);
              }
              else {
                pathData = parsePathDataString(this.getAttribute("d") || "");
                this[$cachedPathData] = clonePathData(pathData);
              }

              var normalizedPathData = reducePathData(absolutizePathData(pathData));
              this[$cachedNormalizedPathData] = clonePathData(normalizedPathData);
              return normalizedPathData;
            }
          }
          else {
            if (this[$cachedPathData]) {
              return clonePathData(this[$cachedPathData]);
            }
            else {
              var pathData = parsePathDataString(this.getAttribute("d") || "");
              this[$cachedPathData] = clonePathData(pathData);
              return pathData;
            }
          }
        };

        SVGPathElement.prototype.setPathData = function (pathData) {
          if (pathData.length === 0) {
            if (isIE) {
              // @bugfix https://github.com/mbostock/d3/issues/1737
              this.setAttribute("d", "");
            }
            else {
              this.removeAttribute("d");
            }
          }
          else {
            var d = "";

            for (var i = 0, l = pathData.length; i < l; i += 1) {
              var seg = pathData[i];

              if (i > 0) {
                d += " ";
              }

              d += seg.type;

              if (seg.values && seg.values.length > 0) {
                d += " " + seg.values.join(" ");
              }
            }

            this.setAttribute("d", d);
          }
        };

        SVGRectElement.prototype.getPathData = function (options) {
          var x = this.x.baseVal.value;
          var y = this.y.baseVal.value;
          var width = this.width.baseVal.value;
          var height = this.height.baseVal.value;
          var rx = this.hasAttribute("rx") ? this.rx.baseVal.value : this.ry.baseVal.value;
          var ry = this.hasAttribute("ry") ? this.ry.baseVal.value : this.rx.baseVal.value;

          if (rx > width / 2) {
            rx = width / 2;
          }

          if (ry > height / 2) {
            ry = height / 2;
          }

          var pathData = [
            { type: "M", values: [x + rx, y] },
            { type: "H", values: [x + width - rx] },
            { type: "A", values: [rx, ry, 0, 0, 1, x + width, y + ry] },
            { type: "V", values: [y + height - ry] },
            { type: "A", values: [rx, ry, 0, 0, 1, x + width - rx, y + height] },
            { type: "H", values: [x + rx] },
            { type: "A", values: [rx, ry, 0, 0, 1, x, y + height - ry] },
            { type: "V", values: [y + ry] },
            { type: "A", values: [rx, ry, 0, 0, 1, x + rx, y] },
            { type: "Z", values: [] }
          ];

          // Get rid of redundant "A" segs when either rx or ry is 0
          pathData = pathData.filter(function (s) {
            return s.type === "A" && (s.values[0] === 0 || s.values[1] === 0) ? false : true;
          });

          if (options && options.normalize === true) {
            pathData = reducePathData(pathData);
          }

          return pathData;
        };

        SVGCircleElement.prototype.getPathData = function (options) {
          var cx = this.cx.baseVal.value;
          var cy = this.cy.baseVal.value;
          var r = this.r.baseVal.value;

          var pathData = [
            { type: "M", values: [cx + r, cy] },
            { type: "A", values: [r, r, 0, 0, 1, cx, cy + r] },
            { type: "A", values: [r, r, 0, 0, 1, cx - r, cy] },
            { type: "A", values: [r, r, 0, 0, 1, cx, cy - r] },
            { type: "A", values: [r, r, 0, 0, 1, cx + r, cy] },
            { type: "Z", values: [] }
          ];

          if (options && options.normalize === true) {
            pathData = reducePathData(pathData);
          }

          return pathData;
        };

        SVGEllipseElement.prototype.getPathData = function (options) {
          var cx = this.cx.baseVal.value;
          var cy = this.cy.baseVal.value;
          var rx = this.rx.baseVal.value;
          var ry = this.ry.baseVal.value;

          var pathData = [
            { type: "M", values: [cx + rx, cy] },
            { type: "A", values: [rx, ry, 0, 0, 1, cx, cy + ry] },
            { type: "A", values: [rx, ry, 0, 0, 1, cx - rx, cy] },
            { type: "A", values: [rx, ry, 0, 0, 1, cx, cy - ry] },
            { type: "A", values: [rx, ry, 0, 0, 1, cx + rx, cy] },
            { type: "Z", values: [] }
          ];

          if (options && options.normalize === true) {
            pathData = reducePathData(pathData);
          }

          return pathData;
        };

        SVGLineElement.prototype.getPathData = function () {
          return [
            { type: "M", values: [this.x1.baseVal.value, this.y1.baseVal.value] },
            { type: "L", values: [this.x2.baseVal.value, this.y2.baseVal.value] }
          ];
        };

        SVGPolylineElement.prototype.getPathData = function () {
          var pathData = [];

          for (var i = 0; i < this.points.numberOfItems; i += 1) {
            var point = this.points.getItem(i);

            pathData.push({
              type: (i === 0 ? "M" : "L"),
              values: [point.x, point.y]
            });
          }

          return pathData;
        };

        SVGPolygonElement.prototype.getPathData = function () {
          var pathData = [];

          for (var i = 0; i < this.points.numberOfItems; i += 1) {
            var point = this.points.getItem(i);

            pathData.push({
              type: (i === 0 ? "M" : "L"),
              values: [point.x, point.y]
            });
          }

          pathData.push({
            type: "Z",
            values: []
          });

          return pathData;
        };
      })();
    };

    async function animate(svgElement, duration) {
      let paths = svgElement.querySelectorAll("path");
      let pathAnimationPromises = [];

      for (let i = 0; i < paths.length; i++) {
        pathAnimationPromises.push(new Promise(resolve => { animatePath(paths[i], duration, resolve)} ));
      }
      await Promise.all(pathAnimationPromises);
    };

    async function animatePath(path, duration, resolve) {
      let pathData = path.getPathData();
      let stepDuration = duration / pathData.length;
      path.setAttribute("d", "");

      function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
      };

      async function load() {
        for (let i = 0; i < pathData.length; i++) {
          path.setAttribute("d", path.getAttribute("d") + " " + pathData[i]["type"] + pathData[i]["values"].join(","));
          await timer(stepDuration);
        }
      };

      await load();

      resolve();
    };

    async function displayWelcomeAnimation(welcomeSvg, animationDuration) {
      const welcomeContainer = document.createElement("div");
      welcomeContainer.setAttribute("style", `display: flex; justify-content: center; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; max-width: 100%; max-height: 100%; cursor: none; background: ${backgroundColor}; padding: 1%`);
      welcomeContainer.insertAdjacentHTML("afterbegin", welcomeSvg);
      
      let renderedSvg = welcomeContainer.querySelector("svg");
      renderedSvg.setAttribute("style", "transition: opacity 1s ease; opacity: 1");
      if (!renderedSvg.getAttribute("viewBox") && (renderedSvg.getAttribute("width") && renderedSvg.getAttribute("height"))) {
        renderedSvg.setAttribute("viewBox", "0 0 " + renderedSvg.getAttribute("width") + " " + renderedSvg.getAttribute("height"));
      }
      renderedSvg.removeAttribute("width");
      renderedSvg.removeAttribute("height");
      renderedSvg.style.width = "";
      renderedSvg.style.height = "";
      document.body.append(welcomeContainer);

      await animate(renderedSvg, animationDuration);

      return welcomeContainer;
    }

    function phaseOutWelcomeAnimation(welcomeContainer) {
      let renderedSvg = welcomeContainer.querySelector("svg");
      renderedSvg.style.transform = "scale(1.03)";
      window.setTimeout(function () { renderedSvg.style.transform = ""; }, 300);
      window.setTimeout(function () { renderedSvg.style.opacity = "0"; }, 800);
      window.setTimeout(function () { welcomeContainer.parentNode.removeChild(welcomeContainer); }, 1100);

      document.cookie = "welcome-animation=true; max-age=" + 60 * 60 * 24 + "; path=/; SameSite=None; Secure";
    }
    
    displayWelcomeAnimation(svgSource, animationDuration).then(welcomeContainer => phaseOutWelcomeAnimation(welcomeContainer));
  }
}) ();