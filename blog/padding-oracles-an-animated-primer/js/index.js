var animation_1_previous = document.getElementById('animation-1-previous-btn');
var animation_1_next = document.getElementById('animation-1-next-btn');
var animation_1_explanation = document.getElementById('animation-1-explanation');

var animation_2_previous = document.getElementById('animation-2-previous-btn');
var animation_2_next = document.getElementById('animation-2-next-btn');
var animation_2_explanation = document.getElementById('animation-2-explanation');

var animation_1_timeline = null;
var animation_2_timeline = null;

window.onload = function() {
    var animation_1_req = new XMLHttpRequest();
    animation_1_req.onload = function() {
        if (animation_1_req.status >= 200 && animation_1_req.status < 300) {
            document.getElementById('animation-1').outerHTML = animation_1_req.responseText;
            animation_1_timeline = new Timeline(animation_1_frames(), animation_1_previous, animation_1_next, animation_1_explanation, 0);
        }
    }
    animation_1_req.open('GET', 'img/004-animation-1.svg', true);
    animation_1_req.send();

    var animation_2_req = new XMLHttpRequest();
    animation_2_req.onload = function() {
        if (animation_2_req.status >= 200 && animation_2_req.status < 300) {
            document.getElementById('animation-2').outerHTML = animation_2_req.responseText;
            animation_2_timeline = new Timeline(animation_2_frames(), animation_2_previous, animation_2_next, animation_2_explanation, 0);
        }
    }
    animation_2_req.open('GET', 'img/005-animation-2.svg', true);
    animation_2_req.send();
}

function Frame(container, text, initFunc) {
    this.container = container;
    this.text = text;
    this.initFunc = initFunc;
    this.animation = null;
}

Frame.prototype.init = function() {
    this.animation = this.initFunc();
}

Frame.prototype.play = function(finishedCb) {
    if (this.animation.length === 0) {
        finishedCb();
        return
    }
    this.animation[this.animation.length-1].complete = function() {
        finishedCb();
    };
    for(var i = 0; i < this.animation.length; i++) {
        this.animation[i].play();
    }
}

Frame.prototype.reverse = function() {
    for(var i = 0; i < this.animation.length; i++) {
        this.animation[i].restart();
        this.animation[i].pause();
    }
}

Frame.prototype.hide = function() {
    document.getElementById(this.container).setAttribute('style', 'display:none');
}

Frame.prototype.show = function() {
    document.getElementById(this.container).setAttribute('style', '');
}

function Timeline(frames, prevBtn, nextBtn, explanation, startFrame) {
    this.currentFrame = startFrame || 0;
    this.frames = frames;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.explanation = explanation;
    this.playing = false;

    this.nextBtn.onclick = this.next.bind(this);
    this.prevBtn.onclick = this.prev.bind(this);
    this.explanation.textContent = frames[this.currentFrame].text;
    
    this.init();
    this.setBtnVisibility();

    if (this.currentFrame !== 0) {
        this.frames[0].hide();
        this.frames[this.currentFrame].show();
    }
}

Timeline.prototype.init = function() {
    for(var i = 0; i < this.frames.length; i++) {
        this.frames[i].init();
    }
}

Timeline.prototype.setBtnVisibility = function() {
    if (this.currentFrame === 0) {
        this.prevBtn.setAttribute('class', 'disabled');
        this.nextBtn.setAttribute('class', '');
    } else if (this.currentFrame === this.frames.length-1) {
        this.prevBtn.setAttribute('class', '');
        this.nextBtn.setAttribute('class', 'disabled');
    } else {
        this.prevBtn.setAttribute('class', '');
        this.nextBtn.setAttribute('class', '');
    }
}

Timeline.prototype.next = function() {
    if (!this.playing && this.currentFrame < this.frames.length-1) {
        this.playing = true;
        var currentFrame = this.frames[this.currentFrame];
        var nextFrame = this.frames[this.currentFrame+1];
        if (nextFrame) {
            this.explanation.textContent = nextFrame.text;
        }
        currentFrame.play(() => {
            this.playing = false;
            this.switchFramesForward(currentFrame, nextFrame);
        });
        this.currentFrame++;
        this.setBtnVisibility();
    }
}

Timeline.prototype.prev = function() {
    if (!this.playing && this.currentFrame > 0) {
        var currentFrame = this.frames[this.currentFrame];
        var prevFrame = this.frames[this.currentFrame-1];
        this.explanation.textContent = prevFrame.text;
        if (currentFrame) {
            currentFrame.hide();
        }
        prevFrame.show()
        prevFrame.reverse();
        this.currentFrame--;
        this.setBtnVisibility();
    }
}

Timeline.prototype.switchFramesForward = function(currentFrame, nextFrame) {
    if (currentFrame && nextFrame) {
        currentFrame.hide();
        nextFrame.show();
    }
}
