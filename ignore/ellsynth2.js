var synth = flock.synth({
    synthDef: {
         id:"mySynth",
        ugen: "flock.ugen.filter.biquad.lp",
        freq: 200,
        source: {
            id:"oscil",
            ugen: "flock.ugen.lfSaw",
            freq: 200,
            mul: 0.1
        }
    },
    addToEnvironment: false 
});