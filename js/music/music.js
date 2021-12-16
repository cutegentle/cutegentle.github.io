const ap = new APlayer({
    container: document.getElementById('aplayer'),
	volume: 0.3,
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Talking to the Moon',
        artist: 'Bruno Mars',
        url: 'http://m10.music.126.net/20211216144917/d8a49d27e27d504249ea03b7ccb6b62b/ymusic/3bac/8775/44f4/2bf1a676bef1b8470232df384a42a71f.mp3',
        cover: 'https://p1.music.126.net/ZSNq_4FdLRKb0eEic_4Obw==/109951163691583679.jpg?param=130y130',
    }, 
	]
});
