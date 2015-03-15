var extension = '.mp3';
var soundFolder = 'sounds/';

var data = [
    {
        says: 'GO', 
        id: 'go1',
        url: soundFolder + 'go1' + extension
    },
    {
        says: 'empower',
        id: 'empower1',
        url: soundFolder + 'empower1' + extension
    },
    {
        says: 'WTF. WTF are you DOING you fucking idiot stop fucking skewering',
        id: 'youfuckingidiot',
        url: soundFolder + 'youfuckingidiot' + extension
    },
    {
        says: 'Fight fight fight fight fight FIGHT go go kill go go go',
        id: 'fightfightfight',
        url: soundFolder + 'fightfightfight' + extension
    }
];

function play(id) {
    var soundNode = document.getElementById(id);
    soundNode.currentTime = 0;
    soundNode.play();
}

function appendSoundboardToHTML() {
    var soundboardDOM = document.getElementById('soundboard');
    var soundboardInnerHTML = '';
    var soundboardNode = '';
    var audioNode = '';
    var curr;

    for (var i = 0; i < data.length; i++) { 
        curr = data[i];
        var audioElemId = 'audio-' + curr.id;
        soundboardNode = '<div class=soundboardNode id=' + curr.id + ' onclick=play(\'' + audioElemId + '\')>';
        soundboardNode += curr.says;

        // Make audio HTML element and append it to current soundboard node
        audioNode = '<audio id=' + audioElemId + '><source src=' + curr.url + '></audio>';
        soundboardNode += audioNode;
        soundboardNode += '</div>';
        soundboardInnerHTML += soundboardNode;
    }

    soundboardDOM.innerHTML = soundboardInnerHTML;
}

appendSoundboardToHTML();
