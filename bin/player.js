const Player = {
      name: '',
      money: 100,
      health: 100,
      items: [
        'item',
        'item',
      ],
      quests: [
        'quest',
        'quest',
      ],
      mainProperties: [
        'prop',
        'prop',
      ],
      subProperties: [
        'prop',
        'prop',
      ],
      die: function() {

      },
      moveTowards: function() {

      },
      changeHealth: function(amount) {
          this.health += amount;
      },
      changeMoney: function(amount) {
          this.money += amount;
      },
    };
