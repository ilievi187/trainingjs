function searchForKeyword() {
    let searchEngine = brave.settings.get('google.com');
    if (searchEngine) {
      let query = {
        q: ['ludnica', 'site:www.google.com']
      };
      brave.search(query, (results) => {
        console.log(results);
      });
    }
  }
  searchForKeyword()