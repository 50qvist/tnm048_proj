/**
 *
    Author: Kahin Akram
    Date: Jan 24, 2020
    TNM048 Lab 1 - Visual Information-Seeking Mantra
    Main js file
 *
*/
//Passing data to the function



d3.json('https://ebemunk.com/chess-dataviz/data/wrc.json', function(err, data) {
  
  var prevMove;

  var openings = new ChessDataViz.Openings('#openings', {
    arcThreshold: 0.002,
    textThreshold: 0.03,
    colors: d3.scale.ordinal().range(['cyan', 'gold', 'steelblue', 'gray'])
  }, data.openings);

  openings.dispatch
    .on('mouseenter', function(d, moves) {
      d3.select('#variation').text(moves.join(' '));
      var percent = d.value / data.openings.value * 100;
      percent = percent.toFixed(2);
      
      d3.select('#percentage').text(percent + '%');
    })
    .on('click', function(d,moves) {

      if(prevMove === undefined){
        prevMove = d;
        openings.data(d);
      }
      else{
        if(prevMove.children.includes(d)){
          openings.data(d);
          prevMove = d;
        }
      }

    })
    .on('mouseleave', function() {
      d3.select('#variation').text('');
      d3.select('#percentage').text('');
    });
   

  var allButton = d3.select('#all');
  var d4Button = d3.select('#d4');

  allButton.on('click', function() {
    allButton.classed('button-primary', true);
    d4Button.classed('button-primary', false);
    openings.data(data.openings);
  });
  d4Button.on('click', function() {
    allButton.classed('button-primary', false);
    d4Button.classed('button-primary', true);
    openings.data(data.openings.children[1]);
  });
});
