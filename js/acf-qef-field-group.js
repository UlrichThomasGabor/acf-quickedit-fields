!function r(d,u,i){function f(t,e){if(!u[t]){if(!d[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var a=u[t]={exports:{}};d[t][0].call(a.exports,function(e){return f(d[t][1][e]||e)},a,a.exports,r,d,u,i)}return u[t].exports}for(var l="function"==typeof require&&require,e=0;e<i.length;e++)f(i[e]);return f}({1:[function(e,t,n){(function(e){"use strict";var t,a=(t="undefined"!=typeof window?window.jQuery:void 0!==e?e.jQuery:null)&&t.__esModule?t:{default:t};acf.add_action("add_field",function(e){e.closest('[data-type="repeater"],[data-type="flexible_content"]').length&&e.find('tr[data-name="show_column"],tr[data-name="show_column_weight"],tr[data-name="allow_quickedit"],tr[data-name="allow_bulkedit"]').remove()});function n(e,t){var n=(0,a.default)(t).prop("checked"),o=(0,a.default)(t).closest("td.acf-input");o.find('[data-name="show_column_sortable"] [type="checkbox"]').prop("disabled",!n),o.find('[data-name="show_column_weight"] [type="number"]').prop("readonly",!n)}(0,a.default)(document).on("change",'[data-name="show_column"] [type="checkbox"]',function(e){return n(0,e.target)}).ready(function(){return(0,a.default)('[data-name="show_column"] [type="checkbox"]').each(n)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWNmLXFlZi1maWVsZC1ncm91cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJmIiwiYyIsInJlcXVpcmUiLCJ1IiwiYSIsIkVycm9yIiwiY29kZSIsInAiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJfanF1ZXJ5Iiwid2luZG93IiwiZ2xvYmFsIiwiYWNmIiwiYWRkX2FjdGlvbiIsIiRlbCIsImNsb3Nlc3QiLCJmaW5kIiwicmVtb3ZlIiwic2V0X3NvcnRhYmxlX2Rpc2FibGVkIiwic2hvd19jb2xfaW5wIiwiY2hlY2tlZCIsImRlZmF1bHQiLCJwcm9wIiwiJHBhcmVudCIsImRvY3VtZW50Iiwib24iLCJ0YXJnZXQiLCJyZWFkeSIsImVhY2giXSwibWFwcGluZ3MiOiJDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxJQUFBSixFQUFBRyxHQUFBLENBQUEsSUFBQUosRUFBQUksR0FBQSxDQUFBLElBQUFFLEVBQUEsbUJBQUFDLFNBQUFBLFFBQUEsSUFBQUYsR0FBQUMsRUFBQSxPQUFBQSxFQUFBRixHQUFBLEdBQUEsR0FBQUksRUFBQSxPQUFBQSxFQUFBSixHQUFBLEdBQUEsSUFBQUssRUFBQSxJQUFBQyxNQUFBLHVCQUFBTixFQUFBLEtBQUEsTUFBQUssRUFBQUUsS0FBQSxtQkFBQUYsRUFBQSxJQUFBRyxFQUFBWCxFQUFBRyxHQUFBLENBQUFTLFFBQUEsSUFBQWIsRUFBQUksR0FBQSxHQUFBVSxLQUFBRixFQUFBQyxRQUFBLFNBQUFkLEdBQUEsT0FBQUksRUFBQUgsRUFBQUksR0FBQSxHQUFBTCxJQUFBQSxJQUFBYSxFQUFBQSxFQUFBQyxRQUFBZCxFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLE9BQUFELEVBQUFHLEdBQUFTLFFBQUEsSUFBQSxJQUFBTCxFQUFBLG1CQUFBRCxTQUFBQSxRQUFBSCxFQUFBLEVBQUFBLEVBQUFGLEVBQUFhLE9BQUFYLElBQUFELEVBQUFELEVBQUFFLElBQUEsT0FBQUQsRUFBQSxDQUFBLENBQUFhLEVBQUEsQ0FBQSxTQUFBVCxFQUFBVSxFQUFBSixJLHlCQ0FBLEksRUFBQUssRyxFQUFBLG9CQUFBQyxPQUFBQSxPQUFBLFlBQUEsSUFBQUMsRUFBQUEsRUFBQSxPQUFBLE8sMkJBR0FDLElBQUlDLFdBQVcsWUFBYSxTQUFFQyxHQUl4QkEsRUFBSUMsUUFBUSx5REFBeURULFFBRXpFUSxFQUFJRSxLQUFLLGlJQUFpSUMsV0FTOUcsU0FBeEJDLEVBQTBCdkIsRUFBR3dCLEdBRWxDLElBQU1DLEdBQVUsRUFBQVgsRUFBQVksU0FBRUYsR0FBY0csS0FBSyxXQUNwQ0MsR0FBVSxFQUFBZCxFQUFBWSxTQUFFRixHQUFjSixRQUFRLGdCQUVuQ1EsRUFBUVAsS0FBSyx3REFBd0RNLEtBQUssWUFBWUYsR0FDdEZHLEVBQVFQLEtBQUssb0RBQW9ETSxLQUFLLFlBQVlGLElBSW5GLEVBQUFYLEVBQUFZLFNBQUVHLFVBQ0FDLEdBQUcsU0FBUyw4Q0FBOEMsU0FBQ2xDLEdBQUQsT0FBTzJCLEVBQXVCLEVBQUczQixFQUFFbUMsVUFDN0ZDLE1BQU8sV0FBQSxPQUFNLEVBQUFsQixFQUFBWSxTQUFFLCtDQUErQ08sS0FBTVYiLCJmaWxlIjoiYWNmLXFlZi1maWVsZC1ncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmFjZi5hZGRfYWN0aW9uKCdhZGRfZmllbGQnLCAoICRlbCApID0+IHtcblxuXHQvLyByZW1vdmUgcXVpY2tlZGl0IG9wdGlvbnMgb24gcmVwZWF0ZXIvZmxleGlibGVfY29udGVudCBzdWIgZmllbGRzXG5cblx0aWYgKCAkZWwuY2xvc2VzdCgnW2RhdGEtdHlwZT1cInJlcGVhdGVyXCJdLFtkYXRhLXR5cGU9XCJmbGV4aWJsZV9jb250ZW50XCJdJykubGVuZ3RoICkge1xuXG5cdFx0JGVsLmZpbmQoJ3RyW2RhdGEtbmFtZT1cInNob3dfY29sdW1uXCJdLHRyW2RhdGEtbmFtZT1cInNob3dfY29sdW1uX3dlaWdodFwiXSx0cltkYXRhLW5hbWU9XCJhbGxvd19xdWlja2VkaXRcIl0sdHJbZGF0YS1uYW1lPVwiYWxsb3dfYnVsa2VkaXRcIl0nKS5yZW1vdmUoKTtcblxuXHR9XG59KTtcblxuXG4vKipcbiAqXHREaXNhYmxlIHNvcnRhYmxlIGNoZWNrYm94IGlmIGNvbHVtbiBpcyBub3QgdmlzaWJsZVxuICovXG5jb25zdCBzZXRfc29ydGFibGVfZGlzYWJsZWQgPSAoIGksIHNob3dfY29sX2lucCApID0+IHtcblxuXHRjb25zdCBjaGVja2VkID0gJChzaG93X2NvbF9pbnApLnByb3AoJ2NoZWNrZWQnKSxcblx0XHQkcGFyZW50ID0gJChzaG93X2NvbF9pbnApLmNsb3Nlc3QoJ3RkLmFjZi1pbnB1dCcpO1xuXG5cdCRwYXJlbnQuZmluZCgnW2RhdGEtbmFtZT1cInNob3dfY29sdW1uX3NvcnRhYmxlXCJdIFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdkaXNhYmxlZCcsIWNoZWNrZWQpO1xuXHQkcGFyZW50LmZpbmQoJ1tkYXRhLW5hbWU9XCJzaG93X2NvbHVtbl93ZWlnaHRcIl0gW3R5cGU9XCJudW1iZXJcIl0nKS5wcm9wKCdyZWFkb25seScsIWNoZWNrZWQpO1xuXG59XG5cbiQoZG9jdW1lbnQpXG5cdC5vbignY2hhbmdlJywnW2RhdGEtbmFtZT1cInNob3dfY29sdW1uXCJdIFt0eXBlPVwiY2hlY2tib3hcIl0nLChlKSA9PiBzZXRfc29ydGFibGVfZGlzYWJsZWQoIDAsIGUudGFyZ2V0ICkpXG5cdC5yZWFkeSggKCkgPT4gJCgnW2RhdGEtbmFtZT1cInNob3dfY29sdW1uXCJdIFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKCBzZXRfc29ydGFibGVfZGlzYWJsZWQgKSApO1xuXG4iXX0=
