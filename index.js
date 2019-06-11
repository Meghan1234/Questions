fetch('https://opentdb.com/api.php?amount=10')
  .then(response => response.json())
  .then(data => data.results)
  .then(results => appendKnowledge(results))


function appendKnowledge(results) {
  results.forEach(function(knowledge) {
    $('article').append(`<p>${knowledge.question}</p>`)
  })
}
