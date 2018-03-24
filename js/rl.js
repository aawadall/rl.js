
'use strict';
/**
 * Re-infocement Learning Sandbox
 * Copyrights Ahmed Awadallah 2018
 * 
 */

 // TODO: Build Policy
var policy = {};
policy.Q = []; // Empty Action/State value pair matrix 
policy.epsilon = 1e-5; // Exploration Rate
policy.alpha = 0.3; // Learning Rate
policy.gamma = 0.9; // Discount Rate

// Q Constructor 
policy.buildQ = function(states, actions){
    this.Q = new Array(states);
    
   for (var i=0;i < states;i++){
       this.Q[i] = new Array(actions);
        for (var j=0; j< actions; j++){
            this.Q[i][j] = 0.0;
        }
    }
};
// Policy Methods
policy.maxValue = function(state){
    return Math.max(this.Q[state]);
}
policy.bestMove = function(state){
    let stateQ = this.Q[state];
    return stateQ.indexOf(Math.max(stateQ));
};
policy.learn = function(state1, state2, action, reward){ 
    this.Q[state1, action] = (1 - this.alpha) * this.Q[state1, action] +
                              this.alpha * (reward + this.gamma * this.maxValue(state2));
};

 // TODO: Build Agent
 // TODO: Build Environment 

 // Main App 
 var states = 5;
 var actions = 3;
 policy.buildQ(states, actions);


 