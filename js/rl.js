
'use strict';
/**
 * Re-infocement Learning Sandbox
 * Copyrights Ahmed Awadallah 2018
 *
 */

 /**
  * create new agent object
  */
var createAgent = function(numStates, numActions){
    var _learningRate = 0.3; // Default learning rate (alpha)
    var _discountRate = 0.99; // Default discount rate (gamma)
    var _explorationChance = 1e-5; // Probability of exploring beyond policy (epsilon)
    var _Q = new Array(numStates);
    for (var i=0; i < numStates; i++){
        _Q[i] = new Array(numActions);
        }

    // Methods
    var _bestValue = function(state){
        return Math.max(_Q[state]);
    }

    var _bestMove = function(state){
        let stateQ = _Q[state];
        return stateQ.indexOf(Math.max(stateQ));
    };

    var _learn = function(state1, state2, action, reward){
        _Q[state1][action] = (1 - alpha) * _Q[state1][action] +
                              alpha * (reward + gamma * _bestValue(state2));
    };

    var _nextMove = function(state){
        if (Math.random() < _explorationChance){
            return Math.floor(Max.random() * numActions);
        } else {
            return _bestMove(state);
        }
    };
    return {
        alpha: _learningRate,
        gamma: _discountRate,
        epsilon: _explorationChance,
        Q: _Q,
        learn: _learn,
        _nextMove: _nextMove
    };
};


 // TODO: Build Environment

 // Main App
 var states = 5;
 var actions = 3;
 var agent = createAgent(states, actions);


