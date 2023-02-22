export const Action = {  // strings that match key inputs
    Rotate: "Rotate",
    SlowDrop: "SlowDrop",
    Left: "Left",
    Right: "Right",
    Quit: "Quit",
    Pause: "Pause",
    FastDrop: "FastDrop"
};

export const Key = { // Key codes for actions input
    ArrowUp: Action.Rotate,
    ArrowDown: Action.SlowDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyQ: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.FastDrop
};

//TODO make buttons for input!!!



export const actionIsDrop = (action) =>   
[Action.SlowDrop, Action.FastDrop].includes(action);// function for dropping actions made

export const ActionForKey = (keyCode) => Key[keyCode];