Crafty.init(500,350, document.getElementById('game'));
Crafty.e('2D, DOM, Color, Fourway').attr({x: 0, y: 0, w: 100, h: 100}).color('#F00').fourway(200);
Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 250, h: 10})
  .color('green');