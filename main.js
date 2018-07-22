$(function(undefined) {
  var count = 50000;
  
      // The second parameter is the seed, remove it to get a different
      // set and order on page refresh. That is:
      // var nodes = generateNodes(50000);
      nodes = generateNodes(50000, 1234567),
      content = '';
      totalEdges = _.reduce(nodes, function(count, value) {
          return count + _.size(value);
      }, 0),
      averageEdgeCount = (totalEdges / count).toFixed(2);

  content = [
    'There are a total of',
    totalEdges.toLocaleString(), 'total edges',
    'for', count.toLocaleString(), 'nodes.',
    'This averages to', averageEdgeCount, 'edges per node'
  ].join(' ');

  


  $('.content').html(content);
});

// $(document).ready(function () {
//   $('#styraNodes').DataTable();
// });

$(document).ready(function () {
  $('#styraNodes').addSortWidget();
});


$("#seedCount").on('click', function (e) {


  e.preventDefault();
  console.log(countInput.value);
  console.log(seedInput.value);
  let count = parseInt(countInput.value);
  let seed = parseInt(seedInput.value);

  let result = generateNodes(count, seed);

  console.log("here is the current count",count)

  if (count > 1){
    let pager = 0;
  
    $(window).scroll(function () {
      console.log("its moving now")
      while(pager <= count){
      pager += 1;
      console.log("count here", count)
      console.log("pager incremented", pager)
      console.log(render(generateNodes(pager, seed)));
        render(generateNodes(pager, seed));      }
    })
  }


  
  
    

    
    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#styraNodes tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

// render(result);

   

  


  function render(result) {
 
    for (let node in result) {
      let nodeName = node;
      let eachNode = result[node];
      console.log(nodeName, eachNode);
     

      $('#tbody').append(`<tr role="row" id="${nodeName}" class="sorting_1 table-striped"> </tr>`);
       $(`#${nodeName}`).append(`<td scope="row">${nodeName}</td>`)


      for (let el in eachNode) {
        let key = el;
        let value = eachNode[el];
        console.log(key, value)



        $(`#${nodeName}`).append(`<td>${key}: <b>${value}</b></td>`);


      }


    }
   
  }
  
  
     


});
$("#connected").on('click', function (e) {

  let wiki = "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
  alert(`This can be solved by using Dijkstra's algorithm please refer to wiki here => ${wiki}`)





});

$("#min_weight").on('click', function (e) {

  let wiki = "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
  alert(`This can be solved by using Dijkstra's algorithm please refer to wiki here => ${wiki}`)

 
});

$("#clearTable").on('click', function (e) {
  location.reload();

});


