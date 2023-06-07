var videos = document.querySelector("ytd-playlist-video-list-renderer > #contents")

function listAllVideosOf(channelName){
	const videosOfChannel = [...videos.children].filter((element) => {
		return element.querySelector("ytd-channel-name").querySelector("a").innerText == channelName;
	})
	const links = videosOfChannel.map((element) => {
		return element.querySelector("div#meta > h3 > a")
	})
	const titles = links.map((element) => {
		return element.innerText
	})
	const hrefs = links.map((element) => {
		return element.href
	})
	const cleanHrefs = hrefs.map((href) => {
		return href.split("&list=")[0]
	})
	cleanHrefs.forEach((link, index) => {
		console.log(`${titles[index]} => ${link}`)
	})
}

function listAllChannelsInPlaylist(){
	const channelsOfPlaylist = [...videos.children].map((element) => {
		return element.querySelector("ytd-channel-name").querySelector("a").innerText
	})

	// https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript#:~:text=42-,Pode%20usar%20assim%3A,-var%20arr%20%3D%20%5B

	const withoutRepeats = channelsOfPlaylist.filter(function(channel, index) {
		return channelsOfPlaylist.indexOf(channel) === index; // get always first element
	});

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

	// https://horadecodar.com.br/como-organizar-um-array-de-strings-em-javascript/

	const compare = (a, b) => {
		return a.localeCompare(b);
	}

	const sortedChannels = withoutRepeats.sort(compare);

	sortedChannels.forEach((channel) => {
		console.log(channel);
		
	})
}

function listAllVideosOfAllChannelsInPlaylist(){
	const channelsOfPlaylist = [...videos.children].map((element) => {
		return element.querySelector("ytd-channel-name").querySelector("a").innerText
	})

	// https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript#:~:text=42-,Pode%20usar%20assim%3A,-var%20arr%20%3D%20%5B

	const withoutRepeats = channelsOfPlaylist.filter(function(channel, index) {
		return channelsOfPlaylist.indexOf(channel) === index; // get always first element
	});

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

	// https://horadecodar.com.br/como-organizar-um-array-de-strings-em-javascript/

	const compare = (a, b) => {
		return a.localeCompare(b);
	}

	const sortedChannels = withoutRepeats.sort(compare);

	// https://stackoverflow.com/questions/7505623/colors-in-javascript-console#:~:text=In%20Chrome%20%26%20Firefox%20(%2B31)%20you%20can%20add%20CSS%20in%20console.log%20messages

	sortedChannels.forEach((channel) => {
		console.log(`%c${channel}`, 'background: #222; color: #bada55');
		listAllVideosOf(channel)
		
	})
}
