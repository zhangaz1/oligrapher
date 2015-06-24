const Marty = require('marty');
const DeckConstants = require('../constants/DeckConstants');
const Deck = require('../models/Deck');
const lsApi = require('../api/lsApi');

class DeckQueries extends Marty.Queries {
  fetchDecks(topic){
    this.dispatch(DeckConstants.FETCH_DECKS_STARTING);
    return lsApi.getDecks(topic)
      .then(
        res => {
          this.dispatch(DeckConstants.FETCH_DECKS_DONE, Deck.parseApiDecks(res));
        })
      .catch(
        err =>
          this.dispatch(DeckConstants.FETCH_DECKS_FAILED, err));
  }
}

module.exports = DeckQueries;
