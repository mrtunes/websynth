var synth = flock.synth({
    synthDef: {
        id:"mySynth",
        ugen: "flock.ugen.sinOsc",
            
        freq: 440,
        mul: {  id:"mod",
                ugen: "flock.ugen.env.simpleASR",
                gate: 0,
                attack: 0.01,
                sustain: .5,
                release: 0.5
            }
        
    },
    addToEnvironment: false // This tells Flocking not to start playing this synth right away.
});
