const ap = new APlayer({
    container: document.getElementById('aplayer'),
	volume: 0.3,
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'moon teller',
        artist: 'Jason Barthes',
        url: 'http://music.163.com/song/media/outer/url?id=1431705653.mp3',
        cover: 'https://p1.music.126.net/ZSNq_4FdLRKb0eEic_4Obw==/109951163691583679.jpg?param=130y130',
    }, 
	]
});
