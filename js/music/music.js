const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Talking to the Moon',
        artist: 'Bruno Mars',
        url: 'http://m10.music.126.net/20211216115437/b8f2adfb62adb3dbef52d40ec36e3daf/ymusic/11da/fc2d/6fcb/605460bfa9b81b124885385180c6d6e5.mp3',
        cover: 'https://p1.music.126.net/R22YAdk0TD4EvttrWsV-1Q==/8888451999281894.jpg?param=130y130',
    }, 
	]
});
