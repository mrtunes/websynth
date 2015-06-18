

var synth = flock.synth({
    synthDef: {
      id:"mySynth",
        ugen: "flock.ugen.sinOsc",
        freq: 440,
        mul: 0.25
    }
});
