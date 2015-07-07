var synth = flock.synth({
    synthDef: {
        id:"mySynth",
        ugen: "flock.ugen.sinOsc",
        mul: 180,
        
        freq: 440,
        mul: 0.25
    },
    addToEnvironment: false // This tells Flocking not to start playing this synth right away.
});
